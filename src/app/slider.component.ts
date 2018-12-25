import { Component } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
      
@Component({
    selector: 'slider-comp',
    template: `<div class='image'>
	<img src='./src/img/milky-way-2750627_960_720.jpg'>
	<span class='text'>Профессиональная астрология для всех</span>
	<span class='textApply'>Окунитесь в тайну Вселенной вместе с квалифицированным астрологом Инной Звездной!</span>
	</div>`,
    styles: [`img {width:100%;} .image {position: relative;} .text {position: absolute; bottom: 50px; left: 0; width: 100%; font-size: 3vw; color: #fff; opacity: 0.5;} .textApply {position: absolute; bottom: 100px; left: 0; width: 100%; font-size: 3.5vw; color: #fff; opacity: 0.5;}`]
})
export class SliderComponent { 

}