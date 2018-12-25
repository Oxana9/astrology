﻿import { Component } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
      
@Component({
    selector: 'article-comp',
    template: `<div class='articleContainer'>
	<img class='back' src='./src/img/universe-1566162_960_720.jpg'>
	<span class='text'>Астрология - древняя наука о судьбе, Вселенной и предназначении.
	Устойство психической и физической составляющих человека во многом подобны взаимодействию элементов Вселенной. 
	В ней все взаимосвязано и работает как точный механизм.
	Многие люди не только былых времен, но и современности, выбирают возможность узнать свою судьбу.
	С развитием и появлением оборудования, которое позволяет сделать точные расчеты и измерить расстояние, угол наклона и скорость вращения даже очень далеких тел повысилась и точность астрологии.
	Знания древних не только активно изучаются современниками, но и пополняются, делаются поправки и улучшения.
	Кое-что можно скорректировать, если найти правильный подход и умилостивить управителей Домов.
	Тот, кто знает метафизическую цель своего Пути, может встать на него.
	Не каждый цивилизованный человек готов видеть Знаки свыше.
	Однако, если вы ищете ответы и зашли на этот сайт, эта встреча не случайна.</span>
	</div>`,
	styles: [`.back {width:100%;} .articleContainer {position: relative;} .text {position: absolute; top: 40px; left: 2%; width: 96%; font-size: 2em; color: #fff; opacity: 0.5;}`]
})
export class ArticleComponent { 

}