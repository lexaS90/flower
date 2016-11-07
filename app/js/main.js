$(document ).ready(function(){

  /*
   *  Slider
   */

	$(".main-slider").owlCarousel({
		navigation : true,
	 	navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	 	singleItem : true, 
	 	autoPlay:3000,
	});

  /*
   *  Product filter
   */
   $(function(){
    $('#product_filter').mixItUp({
      selectors: {
        target: '.product',
        filter: '.filter'
      },
      callbacks: {

        onMixStart: function(){
          waypoint2.disable();          
        },
        onMixEnd: function(){
          $('.product__wrap').equalHeights();
          //waypoint2.refresh();
          waypoint2.enable();
        },
      }
    });
  });


  /*
   *  Phone
   */
   $(".phone").mask("(999) 999-9999");


});

// $(window).scroll(function(){
// });

 
/*
 *  Map
 */

/*var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.678698, lng: 33.924012},
    zoom: 17
  });

  var marker = new google.maps.Marker({
    position: {lat: 51.678698, lng: 33.924012},
    map: map,
    title: 'Hello World!'
  });
}*/

/*
 *  End Map
 */

/*
 *  Checkout fixed
 */


var  top_checkout;

var waypoint = new Waypoint({
  element: $('#checkout')[0],
  handler: function(direction) {
    top_checkout = $(this.element).offset().top;
    console.log(top_checkout);
    var arg = [];
    arg['el'] = $(this.element);
    arg['top_checkout'] = top_checkout;

    if (direction == 'down'){
      $(window).scroll(arg,checkout_fix);
    }
    if(direction == 'up'){
      $(window).off("scroll", checkout_fix);
      $(this.element).css('margin-top', 0);
    }
  }
});

var h = $('#checkout').outerHeight()+20;

var waypoint2 = new Waypoint({
  element: $('.page__advantages')[0],
  handler: function(direction) {
    var arg = [];
    arg['el'] = $('#checkout');
    arg['top_checkout'] = top_checkout;

    if (direction == 'down'){
      $(window).off("scroll", checkout_fix);
    }
    if(direction == 'up'){
      $(window).scroll(arg,checkout_fix);
    }

  },
  offset: h+'px',
});

function checkout_fix(param){

  var el = param.data['el'];
  var top_checkout = param.data['top_checkout'];

  var top_window = $(window).scrollTop();

  var margin_checkout = top_window-top_checkout;

  el.css('margin-top', margin_checkout+'px');

}



