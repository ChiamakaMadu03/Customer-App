import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './sharedModules/material/material.module';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ChildComponent } from './child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { AddGenderInterceptor } from './gender.interceptor';
import { PopUpComponent } from './pop-up/pop-up.component';

@NgModule({
  declarations: [ //components are declared in declarations, modules in imports
    AppComponent, CustomerComponent, CreateCustomerComponent, ChildComponent, PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideAnimationsAsync(), //global services are put in providers
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        subscriptSizing: 'dynamic'
      }
    },
    { provide: HTTP_INTERCEPTORS, useClass: AddGenderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
