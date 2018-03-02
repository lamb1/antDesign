import {RouterModule} from '@angular/router';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {rootRouterConfig} from './app.routes';
import {AppComponent} from './app.component';
import {HomeComponent} from './home';
import {ShopComponent} from './shop';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, ShopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [
    // RandomUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
