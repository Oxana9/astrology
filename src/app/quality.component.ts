import { Component } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
      
@Component({
    selector: 'quality-comp',
    template: `<div class='container'>
		<div class='row'>
			<div class='col-md-3'>
				<img src='./src/img/popular-topic.png' />
				<p>Множество успешных консультаций</p>
			</div>
			<div class='col-md-3'>
				<img src='./src/img/paste-special.png' />
				<p>Выступления в Москве</p>
			</div>
			<div class='col-md-3'>
				<img src='./src/img/rating.png' />
				<p>Довольные клиенты</p>
			</div>
			<div class='col-md-3'>
				<img src='./src/img/3-star-hotel.png' />
				<p>Сертификат школы Павла Безбородного</p>
			</div>
		</div>
	</div>`,
    styles: [`.container {background-color: rgba(176, 196, 222); width: 100%; color: #000080;}`]
})
export class QualityComponent { 

}