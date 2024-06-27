import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {IntoComponent} from './into/into.component';
import {AboutComponent} from './about/about.component';
import {NgxTypedJsModule} from "ngx-typed-js";
import {FooterComponent} from './footer/footer.component';
import {ContactComponent} from './contact/contact.component';
import {ServicesComponent} from './services/services.component';
import {WorkComponent} from './work/work.component';
import {BlogComponent} from './blog/blog.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpLoaderFactory} from "./app.translate-loader";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatOption} from "@angular/material/core";
import {NgOptimizedImage} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {LightboxModule} from "ngx-lightbox";
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntoComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    ServicesComponent,
    WorkComponent,
    BlogComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    NgxTypedJsModule,
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatFormFieldModule,
    MatSelectModule,
    NgOptimizedImage,
    FormsModule,
    DropdownModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent], schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {
}
