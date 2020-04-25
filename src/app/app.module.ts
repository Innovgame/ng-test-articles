import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { CounterComponent } from './counter/counter.component';
import { InjectionToken } from '@angular/core';
import { Store, AppStore } from './ts/model';
import { counterReducer } from '../app/counter/reducer';
const store = new Store(counterReducer, 100);

@NgModule({
  declarations: [AppComponent, ArticleComponent, CounterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: AppStore, useValue: store }],
  bootstrap: [AppComponent],
})
export class AppModule {}
