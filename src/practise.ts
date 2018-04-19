import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import module here
import { PractiseModule } from './app/02_Template_Inline_External/practise.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// bootstrapModuleName
platformBrowserDynamic().bootstrapModule(PractiseModule)
  .catch(err => console.log(err));
