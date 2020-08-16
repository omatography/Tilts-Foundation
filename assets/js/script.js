$(document).ready(function(){

    // $('#navbar').addClass(' animate__animated animate__fadeInDown');
    // $('#mynavbar').addClass(' animate__animated animate__fadeInDown') ;

    $(window).scroll(function(){
        if($(window).scrollTop() > 120){
              
          $('#navbarh').addClass("navbg-light");
          $('#navbarh').removeClass("bg-black-translucent");
          $('#navbarh').addClass("navbar-light");
          $('#navbarh').removeClass("navbar-dark");
          $('#navbar-logoh').src="assets/images/tilts logo light.png";
          $('#navbar-donateh').addClass("navbar-donate-light");
          $('#navbar-donateh').removeClass("navbar-donate-dark");
    
          }
        else{
            $('#navbarh').addClass("bg-black-translucent");
            $('#navbarh').removeClass("navbg-light");
            $('#navbarh').addClass("navbar-dark");
            $('#navbarh').removeClass("navbar-light");
            $('#navbar-logoh').src="assets/images/tilts logo dark.png";
            $('#navbar-donateh').addClass("navbar-donate-dark");
            $('#navbar-donateh').removeClass("navbar-donate-light");
          }
    });



});