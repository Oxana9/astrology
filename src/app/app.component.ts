import { Component } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
 
@Component({
    selector: 'header-app',
    template: `<div class='container'>
		<ul class='row'>
			<li class='col-md-4' [ngClass]="{active: currentPage=='main'}" (click)="setMain()"><a href='#'>Главная</a></li>
			<li class='col-md-4' [ngClass]="{active: currentPage=='consult'}" (click)="setConsultation()"><a href='#'>Астрологические консультации</a></li>
			<li class='col-md-4' [ngClass]="{active: currentPage=='about'}" (click)="setAbout()"><a href='#'>Обо мне</a></li>
		</ul>
	</div>
	<slider-comp *ngIf="currentPage=='main'"></slider-comp>
	<quality-comp *ngIf="currentPage=='main'"></quality-comp>
	<article-comp *ngIf="currentPage=='main'"></article-comp>
	<me-comp *ngIf="currentPage=='about'"></me-comp>
	<price-comp *ngIf="currentPage=='consult'"></price-comp>
	<footer-comp></footer-comp>
	`,
	styles: [`.active {color: red;} .container {width: 100%; background-color: #000080;} ul {list-style: none; margin: 0; padding-left: 0; background-color: #000080;} a {text-decoration: none; display: block; color: #fff;} li {display: inline-block; height: 10%;}`]
})

export class AppComponent {
	currentPage='main';
	setMain(){
        this.currentPage='main';
    }
	setConsultation(){
        this.currentPage='consult';
    }
	setAbout(){
        this.currentPage='about';
    }
}