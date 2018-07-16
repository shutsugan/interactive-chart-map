'use strict';

class MapChart {
	constructor() {
		this._select = selector => document.querySelector(selector);
		this._selectAll = selector => document.querySelectorAll(selector);
		
		this._map = this._select('.js-map');
		this._paths = Array.from(this._selectAll('.map__image path'));
		this._links = Array.from(this._selectAll('.map__list div'));

		this._addEventListener();
	}

	_addEventListener() {
		this._paths.forEach(path => path.addEventListener('mouseenter', this._OverMap));
	}

	_OverMap(event) {
		const city = event.target.getAttribute('title');
		console.log(city);
	}
}
new MapChart();