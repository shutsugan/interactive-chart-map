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
		this._paths.forEach(path => path.addEventListener('mouseenter', this._overMap));
		this._links.forEach(link => link.addEventListener('mouseenter', this._overLink));

		this._paths.forEach(path => path.addEventListener('mouseout', this._outMap));
		this._links.forEach(link => link.addEventListener('mouseout', this._outLink));
	}

	/**
     * Hover over map will target the badge city.
     * @param {event} event
	 */
	_overMap(event) {
		const link = MapChart._getLink(event);
		link.classList.add('link-active');
	}

	/**
     * Hover out of map will clear the badge.
     * @param {event} event
	 */
	_outMap(event) {
		const link = MapChart._getLink(event);
		link.classList.remove('link-active');
	}

	/**
     * Hover over badge will target the same area.
     * @param {event} event
	 */
	_overLink(event) {
		const area = MapChart._getArea(event);
		area.style.fill = '#ec8f07';
	}

	/**
     * Hover out of badge will clear area.
     * @param {event} event
	 */
	_outLink(event) {
		const area = MapChart._getArea(event);
		area.style.fill = '#4B4B4B';
	}

	static _getLink(event) {
		const city = event.target.getAttribute('title');
		const link = document.querySelector(`.${city}`);

		return link;
	}

	static _getArea(event) {
		const city = event.target.innerHTML;
		const area = document.querySelector(`[title=${city}]`);

		return area;
	}
} 
new MapChart();