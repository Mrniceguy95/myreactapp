
//sort date btn 
  $('#sortbtn').click(function(){
    if ( $('.tb-drivers').hasClass('active') ) {
      $('#sort1').click();
    } else {
      $('#sort2').click();
    }
  });

  //sticky fb share btn
  
  var intBool = false;
  

  $('.st-arrow').click(function(){
    if ( $(this).hasClass('deactivate') == true ) {

    } else {
      $(this).toggleClass('deactivate');
    }
    $('.st-wrapper').toggleClass('deactivate');
    $('.fa-angle-double-left').toggleClass('arrow-rotate');
  });

  $(".st-fb").hover(function() {
    $('.st-share').toggleClass('active');
  });

  $(".st-hover").mouseover(function() {
    if ( $('.st-wrapper').hasClass('deactivate') == true ) {
      if ( $('.st-arrow').hasClass('deactivate') == true ) {
        $('.st-arrow').toggleClass('deactivate');
      } else {

      }
    } else {

    }
  });

 

  $(".st-hover").mouseleave(function() {
    if ( $('.st-wrapper').hasClass('deactivate') == true ) {
      if (intBool == false) {
        intBool = true
        var timeoutId = setTimeout(function(){
          $('.st-arrow').toggleClass('deactivate');
          intBool = false;
        }, 3000);
      } else {

      }
    } else {

    }
  });

//tooltips for form entries
// tippy('#password', {
//   content: "Esta clave te servirá si deseas eliminar tu publicación, por favor guárdala.",
// });

// tippy('#whatsapp', {
//   content: "Por favor pega tu número de whatsapp en el siguiente formato eg: 0967054512"
// });

// tippy('#fb', {
//   content: "Por favor verifica que el link sea correcto eg: https://www.facebook.com/julio.iglesias"
// });

// tippy('#sortbtn', {
//   content: "Ordenar por fecha de salida"
// });

	// Page loading animation
// $(window).on('load', function() {
//   $("#preloader").animate({
// 			'opacity': '0'
//   		}, 600, function(){
// 	  		setTimeout(function(){
// 				$("#preloader").css("visibility", "hidden").fadeOut();
// 			  }, 300);
//         }
//   );
// });
