"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var page = 3;

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
  // var url = baseUrl + "1/3";
  // $.getJSON(url, function(jsonp) {
  //   cars = jsonp[0]
  //   console.log(jsonp);
  // });
  var one = carsJSON[0];
  var two = carsJSON[1];
  var three = carsJSON[2];
  return `<div class="row"><div class="col-md-4 car"><h2>${one.Make}</h2><p><strong>Model:</strong> ${one.Model}</p><p><strong>Year:</strong> ${one.Year}</p></div><div class="col-md-4 car"><h2>${two.Make}</h2><p><strong>Model:</strong> ${two.Model}</p><p><strong>Year:</strong> ${two.Year}</p></div><div class="col-md-4 car"><h2>${three.Make}</h2><p><strong>Model:</strong> ${three.Model}</p><p><strong>Year:</strong> ${three.Year}</p></div></div>`;
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
  var html = formatCars(carsJSON);
  $('#cars').append(html);
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  var url = baseUrl + page + "/3";
  page += 1;
  $.ajax({
   url: url,
   contentType: 'application/json',
   dataType: 'jsonp',
   success: function(cars) {
     addCarsToDOM(cars);
   }
  //  error: function(response) {
  //    $('body').text("Sorry, there was an error with the request. Please refresh the page.")
  //  }
  });
  // // console.log(url);
  // $.getJSON(url, function(jsonp) {
  //   // console.log(data);
  //   addCarsToDOM(jsonp);
  // });
}
