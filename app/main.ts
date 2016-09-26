import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app.module';

if (process.env.ENV === 'production') {
  enableProdMode();
}

require('!style!css!sass!./_sass/styles.scss');

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
