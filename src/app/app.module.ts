import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { SliderComponent }   from './slider.component';
import { ArticleComponent }   from './article.component';
import { QualityComponent }   from './quality.component';
import { FooterComponent }   from './footer.component';
import { MeComponent }   from './me.component';
import { PriceComponent }   from './price.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {Routes, RouterModule} from '@angular/router';

@NgModule({
    imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule],
    declarations: [ AppComponent, SliderComponent, ArticleComponent, QualityComponent, FooterComponent, MeComponent, PriceComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
export class PizzaPartyAppModule { }