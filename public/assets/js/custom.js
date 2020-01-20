function Refresh(){
  $.get("https://zealous-snyder-fe1913.netlify.com/.netlify/functions/index/conductores",
  function(data){
      $("i.fa-refresh").toggleClass("fa-spin");
      document.getElementById("posts-content").innerHTML=data.toString();
      var max=0;
      var className = document.querySelectorAll('.date-month');
      
      function monthDate(param) {
          let dateValue  = Date.parse(param)/1000;
          return -(dateValue-max);
      }

      for(let i = 0; i < className.length; i++) {
          var attributeaux = document.querySelectorAll('.date-month')[i].innerText;
          attributeaux = attributeaux.substring(3, 5)+"-"+attributeaux.substring(0, 2)+"-"+attributeaux.substring(6, 10);
          let dateValueaux  = Date.parse(attributeaux)/1000;
          if(dateValueaux>max) max=dateValueaux;
      }

      for(let i = 0; i < className.length; i++) {
          var attribute = document.querySelectorAll('.date-month')[i].innerText;
          attribute = attribute.substring(3, 5)+"-"+attribute.substring(0, 2)+"-"+attribute.substring(6, 10);
          document.querySelectorAll('.date-month')[i].setAttribute('data-timestamp', monthDate(attribute));
      }

      var options = {
          valueNames: [ 'origin', 'destination', 'pname' ]
      };
      
      var options2 = {
          valueNames: [ { name: 'date-month', attr: 'data-timestamp' } ]
      };

      var posts = new List('users', options);
      var posts2 = new List('users', options2);
      var posts3 = new List('users2', options);
      var posts4 = new List('users2', options2);

      $(".filter").keyup(function(){
          posts.filter(item => {
          return options.valueNames.every(name => {
              var value = $("#"+name).val().toLowerCase();
              return item.values()[name].toLowerCase().includes(value)
              });
          });
          posts3.filter(item => {
          return options.valueNames.every(name => {
              var value = $("#"+name).val().toLowerCase();
              return item.values()[name].toLowerCase().includes(value)
              });
          });
          
          
      });
  });

  $.get("https://zealous-snyder-fe1913.netlify.com/.netlify/functions/index/pasajeros",
  function(data){
      document.getElementById("users-content").innerHTML=data.toString();
      var max=0;
      var className = document.querySelectorAll('.date-month');
      function monthDate(param) {
          let dateValue  = Date.parse(param)/1000;
          return -(dateValue-max);
      }

      for(let i = 0; i < className.length; i++) {
          var attributeaux = document.querySelectorAll('.date-month')[i].innerText;
          attributeaux = attributeaux.substring(3, 5)+"-"+attributeaux.substring(0, 2)+"-"+attributeaux.substring(6, 10);
          let dateValueaux  = Date.parse(attributeaux)/1000;
          if(dateValueaux>max) max=dateValueaux;
      }

      for(let i = 0; i < className.length; i++) {
          var attribute = document.querySelectorAll('.date-month')[i].innerText;
          attribute = attribute.substring(3, 5)+"-"+attribute.substring(0, 2)+"-"+attribute.substring(6, 10);
          document.querySelectorAll('.date-month')[i].setAttribute('data-timestamp', monthDate(attribute));
      }

      var options = {
          valueNames: [ 'origin', 'destination', 'pname' ]
      };
      
      var options2 = {
          valueNames: [ { name: 'date-month', attr: 'data-timestamp' } ]
      };

      var posts = new List('users', options);
      var posts2 = new List('users', options2);
      var posts3 = new List('users2', options);
      var posts4 = new List('users2', options2);
      

      $(".filter").keyup(function(){
          posts.filter(item => {
          return options.valueNames.every(name => {
              var value = $("#"+name).val().toLowerCase();
              return item.values()[name].toLowerCase().includes(value)
          });
          });
          posts3.filter(item => {
          return options.valueNames.every(name => {
              var value = $("#"+name).val().toLowerCase();
              return item.values()[name].toLowerCase().includes(value)
          });
          });
          
          
      });
      setTimeout(function() {
          console.log('off');
          $("i.fa-refresh").toggleClass("fa-spin");
      }, 1500);
  });
  
}
/*launch mobile menu and change bar menu*/ 
$(document).ready(function(){
  $('#nav-icon3').click(function(){
    $(this).toggleClass('open');
    $('.main-nav ul').toggleClass('active');
    $('.main-nav ul li').toggleClass('active');
  });

  $('.main-nav li a').click(function(){
    $('#nav-icon3').toggleClass('open');
    $('.main-nav ul').toggleClass('active');
    $('.main-nav ul li').toggleClass('active');
  });

  /*checkbox fix*/
  $(document).on('click', '.c-datepicker--show-time', function()
  {
    if ($(this).is(':checked')) {
      $('.c-datepicker__calendar').hide()
      $('.c-datepicker__clock').show()
      if ( !$('.c-clock').hasClass('toggle-active') ) {
        $('.c-clock').toggleClass('toggle-inactive');
        $('.c-clock').toggleClass('toggle-active');
        $('.c-calendar').toggleClass('toggle-active');
        $('.c-calendar').toggleClass('toggle-inactive');
      } else {
      }
      
    } else {
      
    }
  });

  $(document).on('click', '.c-datepicker--show-calendar', function()
  {
    if ($(this).is(':checked')) {
      $('.c-datepicker__clock').hide();
      $('.c-datepicker__calendar').show();
      if ( !$('.c-calendar').hasClass('toggle-active') ) {
        $('.c-calendar').toggleClass('toggle-inactive');
        $('.c-calendar').toggleClass('toggle-active');
        $('.c-clock').toggleClass('toggle-active');
        $('.c-clock').toggleClass('toggle-inactive');
      } else {

      }
    } else {
      
    }
  });
  /*tab switching for posts*/
  $(document).on('click', '.tb-drivers', function() {

      if ( !$(this).hasClass('active') ) {
        $('.tb-drivers').toggleClass('active');
        $('.tb-passengers').toggleClass('active');
        $('#users').toggleClass('inactive');
        $('#users2').toggleClass('inactive');
        $("#to-from").trigger('reset');
      } else {
      }

  });

  $(document).on('click', '.tb-passengers', function() {

    if ( !$(this).hasClass('active') ) {
      $('.tb-passengers').toggleClass('active');
      $('.tb-drivers').toggleClass('active');
      $('#users2').toggleClass('inactive');
      $('#users').toggleClass('inactive');
      $("#to-from").trigger('reset');
    } else {
      
    }

  });

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
  

});

//on enter form input
$( "#cedula" ).keypress(function() {
  var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
    if ($('#cedula').val().length == 10) {
      searchcedula();
    } else if ( $('#cedula').val().length == 7 || $('#cedula').val().length == 6 ) {
      searchplaca();
    } else {

    }
		
	}
});

$('.fa-arrow-right').click(function() {
  if ($('#cedula').val().length == 10) {
    searchcedula();
  } else if ( $('#cedula').val().length == 7 || $('#cedula').val().length == 6 ) {
    searchplaca();
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
