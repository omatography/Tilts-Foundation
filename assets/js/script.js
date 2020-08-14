$(document).ready(function(){

    $('#navbar').addClass(' animate__animated animate__fadeInDown');
    $('#mynavbar').addClass(' animate__animated animate__fadeInDown') ;

    $(window).scroll(function(){
        if($(window).scrollTop() > 300){
              
          $('#navbar').addClass("bg-light");
          $('#navbar').removeClass("bg-black-translucent");
          $('#navbar').addClass("navbar-light");
          $('#navbar').removeClass("navbar-dark");
          $('#navbar-logo').src="assets/images/tilts logo light.png";
          $('#navbar-donate').addClass("navbar-donate-light");
          $('#navbar-donate').removeClass("navbar-donate-dark");
    
          }
        else{
            $('#navbar').addClass("bg-black-translucent");
            $('#navbar').removeClass("bg-light");
            $('#navbar').addClass("navbar-dark");
            $('#navbar').removeClass("navbar-light");
            $('#navbar-logo').src="assets/images/tilts logo dark.png";
            $('#navbar-donate').addClass("navbar-donate-dark");
            $('#navbar-donate').removeClass("navbar-donate-light");
          }
    });



});