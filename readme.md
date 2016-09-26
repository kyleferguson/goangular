# GoAngular App

Starter template for building apps with Angular for the client UI and Go for an API backend.

## Setup

[Glide](https://github.com/Masterminds/glide) is used to manage Go dependencies. You'll want to install this in your Go environment
```sh
$ go get glide
```

Then use Glide to install dependencies
```sh
$ glide install
```

[Gin](https://github.com/codegangsta/gin) is used to run the Go app and auto-reload on changes. You'll want to install this in your Go environment
```sh
$ go get gin
```

NPM is used to manage NodeJS dependencies.

```sh
$ npm install
```

## Development

You'll need to run 2 processes during development, one for watching and compiling the client side assets and one for running the backend API.

Run the `start` npm script to watch and compile client side code
```sh
$ npm run start
```

Use `gin` to watch and compile the Go API
```sh
$ gin run
```

You should be able to visit the app at [http://localhost:3000](http://localhost:3000)
