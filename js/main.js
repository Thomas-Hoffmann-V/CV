$(document).ready(function(){
    
	
	//Slider
	if(window.location.href.indexOf('index') > -1){

	 $('.bxSlider').bxSlider({
	    mode: 'fade',
	    captions: true,
	    slideWidth: 1200,
	    responsive: true,
	    pager: true,
	    auto: true,
	    speed: 500,
	    stopAutoOnClick: true,
  });
}

	 	//Selector de theme:
	 var theme = $("#theme");

	 $("#to-green").click(function(){
	 	theme.attr("href","css/green.css");
	 });
	 
	  var theme = $("#theme");

	 $("#to-red").click(function(){
	 	theme.attr("href","css/red.css");
	 });
	 
	  var theme = $("#theme");

	 $("#to-blue").click(function(){
	 	theme.attr("href","css/blue.css");
	 });
	 
	//para hacer un Scroll para arriba de la pagina web:


	$('.subir').click(function(e){
	e.preventDefault();

		$('html,body').animate({
		scrollTop: 0
		}, 1000);

		return false;
		});

	//Login falso/ Identificacion localStorage:
	$("#login form").submit(function(){
		var form_name= $("#form_name").val();

		localStorage.setItem("form_name", form_name);

	});

	var form_name = localStorage.getItem("form_name");

	if(form_name != null && form_name != "undefined"){
		var about_parrafo = $("#about p");

		about_parrafo.html("<br><strong>Welcome, "+form_name+"</strong> ");
		about_parrafo.append("<a href='#' id= 'logout'>Cerrar Sesion</a>");

		$("#login").hide();

		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});
	}
	$("about p").html("Welcome, "+form_name);



       //Acordeon
	if(window.location.href.indexOf('about') > -1){
		$("#acordeon").accordion();
	}

	var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
	
	   //Reloj
	 if(window.location.href.indexOf('clock') > -1){ 

	 	setInterval(function(){
	 		var clock = moment().format("hh:mm:ss");
	 		$('#clock').html(clock);
	 	}, 1000); 	
	}

	 //Validacion De Datos
	  if(window.location.href.indexOf('contact') > -1){ 
	  		$("form input[name='date']").datepicker({
	  			dateFormat: 'dd-mm-yy'
	  		});

			$.validate({
		    lang: 'es'
		  });
		}

	//Ajustador de contenido

		function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}

});
