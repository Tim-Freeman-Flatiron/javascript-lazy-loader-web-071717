"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
	let renderedCars = carsJSON.map(function(car) {
		return `<div class="col-md-4 car"><h2>${car.Make}</h2><p><strong>Model:</strong> ${car.Model}</p><p><strong>Year:</strong> ${car.Year}</p></div>`
	})
	renderedCars.unshift('<div class="row">')
	renderedCars.push('</div>')
	return renderedCars.join('')
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"
  let formattedCars = formatCars(carsJSON)
  document.getElementById("cars").innerHTML += formattedCars
}
const url = 'http://mimeocarlisting.azurewebsites.net/api/cars/'
let page = 3


function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  let updatedUrl = url + page.toString() + '/3'
  	$.ajax({
  		url: updatedUrl,
  		contentType: 'application/json',
      dataType: 'jsonp',
      success: function(data) {addCarsToDOM(data)}
      })
  	page++
}