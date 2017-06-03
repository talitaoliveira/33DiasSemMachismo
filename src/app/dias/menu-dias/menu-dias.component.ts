import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-menu-dias',
	templateUrl: './menu-dias.component.html',
	styleUrls: ['./menu-dias.component.css']
})
export class MenuDiasComponent implements OnInit {

	@Input() dias: any;

	constructor() {

	
	}

	ngOnInit() {
		
	}

	mostraDatas() {

		let menu_icon = document.querySelector(".icon-menu");
		let menu_list = document.querySelector(".menu-list");
		let menu_items: any = document.querySelectorAll(".menu-item");
		

		menu_icon.addEventListener("click", evt => {
			menu_list.classList.toggle("show");
			menu_icon.classList.toggle("active");
		});

		menu_items.forEach(function (e) {
			e.addEventListener("click", evt2 => {
				menu_list.classList.remove("show");
				menu_icon.classList.toggle("active");
			})
		});

	}

}
