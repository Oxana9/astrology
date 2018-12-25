import { Component } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

export class Order{
    constructor(public info: string, 
                public email: number, 
                public service: string)
    { }
}
      
@Component({
    selector: 'price-comp',
    template: `<div class='container'>
		<div class='row'>
			<h1>Услуги и цены</h1>
			<table class="col-xs-12">
				<tr>
					<td>Наименование услуги</td>
					<td>Стоимость</td>
				</tr>
				<tr>
					<td>Составление натальной карты</td>
					<td>1800 рублей</td>
				</tr>
				<tr>
					<td>Прогнозирование события</td>
					<td>2500 рублей</td>
				</tr>
				<tr>
					<td>Астрологическая консультация по заданному вопросу</td>
					<td>2000 рублей</td>
				</tr>
				<tr>
					<td>Анализ отношений в паре</td>
					<td>4000 рублей</td>
				</tr>
			</table>
			<p>Записаться можно по адресу: <b>innastar@gmail.com</b></p>
			<p>Или по телефону:<b>8-913-103-44-63</b></p>
			<div class="col-xs-8">
                <div class="form-group">
                    <label>Введите почту</label>
                    <input type="email" class="form-control" name="email" [(ngModel)]="email" />
                </div>
                <div class="form-group">
                    <label>Чем я могу вам помочь:</label>
                    <select class="form-control" name="service" [(ngModel)]="service">
                        <option  *ngFor="let offer of offers" [value]="offer">
                            {{offer}}
                        </option>
                    </select>
                </div>
				<div class="form-group">
                    <label>Дополнительная информация</label>
                    <input class="form-control" name="info" [(ngModel)]="info" />
                </div>
                <div class="form-group">
                    <button class="btn btn-default" (click)="addOrder(info, email, service)">Добавить</button>
                </div>
            </div>
            <div>
				<h3>Ваш заказ</h3>
                <ul *ngFor="let order of Orders">
					<li>{{order.info}} ({{order.service}}) - {{order.email}}</li>
                </ul>
            </div>
		</div>
	</div>`,
				styles: [`.container {color: #000080; background-color: rgba(176, 196, 222); width: 100%;} .row {font-size: 2em;}`]
})
export class PriceComponent { 
 
    Orders: Order[] = [];
    offers: string[] = ["Составление натальной карты", "Прогнозирование события", "Астрологическая консультация по заданному вопросу", "Анализ отношений в паре", "Обучение. Ступень 1"];
     
    addOrder(info: string, price: number, service: string){
        this.Orders.push(new Order(info, price, service));
    }
}