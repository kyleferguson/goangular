package main

import (
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"io/ioutil"
	"net/http"
	"os"
)

func main() {
	router := gin.Default()

	// Static files
	router.LoadHTMLFiles("./index.tmpl")
	router.Static("/assets", "./dist")

	// Redirect home page to /app
	router.GET("/", func(c *gin.Context) {
		c.Redirect(http.StatusMovedPermanently, "/app")
	})

	// All app routes go to client JS app
	router.GET("/app/*any", func(c *gin.Context) {
		assets := loadAssets()
		c.HTML(http.StatusOK, "index.tmpl", gin.H{
			"appJs":       assets.App.JS,
			"appCss":      assets.App.CSS,
			"vendorJs":    assets.Vendor.JS,
			"polyfillsJs": assets.Polyfills.JS,
		})
	})

	// API
	v1 := router.Group("/api/v1")
	{
		v1.GET("/info", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"version": "1",
			})
		})
	}

	router.Run()
}

type assetContent struct {
	CSS string
	JS  string
}

type assetsFile struct {
	App       assetContent
	Vendor    assetContent
	Polyfills assetContent
}

func loadAssets() assetsFile {
	file, e := ioutil.ReadFile("./assets.json")
	if e != nil {
		fmt.Println("Unable to load assets files. Run npm build to create assets.")
		os.Exit(1)
	}

	var assets assetsFile
	json.Unmarshal(file, &assets)

	return assets
}
