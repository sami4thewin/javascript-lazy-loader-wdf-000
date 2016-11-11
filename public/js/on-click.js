"use strict";

$(document).ready(function() {
  // add click listener here
  // it should call on fetchJSON()
  // $('#load-cars').on("click", function(event) {
  //   e.preventDefault;
  //   fetchJSON();
  // });
  $('#load-cars').on('click', function(event) {
    event.preventDefault;
    fetchJSON();
  });
});
