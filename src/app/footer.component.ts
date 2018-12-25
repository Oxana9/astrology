import { Component } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
      
@Component({
    selector: 'footer-comp',
    template: `<div class='container'>
		<div class='row'>
			<div class='col-md-12'>
			<hr>
				<p>Официальный сайт астролога Инны Звездной. 
				На этом сайте вы сможете найти астрологические прогнозы, гороскопы на 2018 год и заказать индивидуальные гороскопы. 
				Автор всех предсказаний на этом официальном сайте - астролог и астропсихолог Инна Звездная.
				Каждый астрологический прогноз или астрологическая консультация уникальны и выполняются индивидуально. 
				Все вопросы можно задать по почте innastar@gmail.com или по телефону 8 (913) 103-44-63.</p>
			</div>
			<div>
				<p class='col-md-9'>&copy; 2018. Инна Звездная</p>
				<p class='col-md-3'>Разработка: Оксана Сидоренко</p>
			</div>
		</div>
	</div>`,
    styles: [`.container {background-color: rgba(176, 196, 222); width: 100%; color: #000080; font-size: 0.8em;}`]
})
export class FooterComponent { 

}