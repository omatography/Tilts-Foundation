$(document).ready(function(){

    $('#navbarh').addClass(' animate__animated animate__fadeInDown');
    $('.mynavbar').addClass(' animate__animated animate__fadeInDown') ;

    $(window).scroll(function(){
        if($(window).scrollTop() > 120){
              
          $('#navbarh').addClass("navbg-light");
          $('#navbarh').removeClass("bg-black-translucent");
          $('#navbarh').addClass("navbar-light");
          $('#navbarh').removeClass("navbar-dark");
          $('#navbar-logoh').attr("src","assets/images/tilts logo light.png");
          $('#navbar-donateh').addClass("navbar-donate-light");
          $('#navbar-donateh').removeClass("navbar-donate-dark");
    
          }
        else{
            $('#navbarh').addClass("bg-black-translucent");
            $('#navbarh').removeClass("navbg-light");
            $('#navbarh').addClass("navbar-dark");
            $('#navbarh').removeClass("navbar-light");
            $('#navbar-logoh').attr("src","assets/images/tilts logo dark.png");
            $('#navbar-donateh').addClass("navbar-donate-dark");
            $('#navbar-donateh').removeClass("navbar-donate-light");
          }
    });

    $('#aboutsection').waypoint(function(direction){
        $('#aboutheading').addClass('animate__animated animate__fadeIn ')
        $('#aboutleft').addClass('animate__animated animate__fadeInLeft ')
        $('#aboutright').addClass('animate__animated animate__fadeInRight ')
    
        },{
            offset: '60%'
    });

    $('#parallax1').waypoint(function(direction){
        $('#parallax1').addClass('animate__animated animate__fadeIn ')
    
        },{
            offset: '85%'
    });

    $('#covidsection').waypoint(function(direction){
        $('#covidheading').addClass('animate__animated animate__fadeIn ')
        $('#covidleft1').addClass('animate__animated animate__fadeInLeft ')
        $('#covidleft2').addClass('animate__animated animate__fadeInLeft ')
        $('#covidright').addClass('animate__animated animate__fadeInRight ')
    
        },{
            offset: '70%'
    });

    $('#parallax2').waypoint(function(direction){
        $('#parallax2').addClass('animate__animated animate__fadeIn ')
    
        },{
            offset: '85%'
    });

    $('#mottosection').waypoint(function(direction){
        $('#mottoleft').addClass('animate__animated animate__fadeInLeft ')
        $('#mottoright').addClass('animate__animated animate__fadeInRight ')
    
        },{
            offset: '70%'
    });


    $('#wherestarted').waypoint(function(direction){
        $('#wherestartedheading').addClass('animate__animated animate__fadeIn ')
        $('#wherestartedleft').addClass('animate__animated animate__fadeInLeft ')
        $('#wherestartedright').addClass('animate__animated animate__fadeInRight ')
    
        },{
            offset: '80%'
    });

    $('#parallax3').waypoint(function(direction){
        $('#parallax3').addClass('animate__animated animate__fadeIn ')
    
        },{
            offset: '85%'
    });

    $('#whatsection').waypoint(function(direction){
        $('#whatheading').addClass('animate__animated animate__fadeIn ')
        $('#whatleft').addClass('animate__animated animate__fadeInLeft ')
        $('#whatright').addClass('animate__animated animate__fadeInRight ')
    
        },{
            offset: '70%'
    });

    $('#parallax4').waypoint(function(direction){
        $('#parallax4').addClass('animate__animated animate__fadeIn ')
    
        },{
            offset: '85%'
    });

    $('#inspiresection').waypoint(function(direction){
        $('#inspireleft').addClass('animate__animated animate__fadeInLeft ')
        $('#inspireright').addClass('animate__animated animate__fadeInRight ')
    
        },{
            offset: '70%'
    });


    $('#ourwork').waypoint(function(direction){
        $('#ourworkheading').addClass('animate__animated animate__fadeIn ')
        $('#ourworkleft').addClass('animate__animated animate__fadeInLeft ')
        $('#ourworkright').addClass('animate__animated animate__fadeInRight ')
    
        },{
            offset: '70%'
    });

    $('#worksection').waypoint(function(direction){
        $('#worksection').addClass('animate__animated animate__fadeIn ')
    
        },{
            offset: '75%'
    });

    $('#nextsection').waypoint(function(direction){
        $('#nextheading').addClass('animate__animated animate__fadeIn ')
        $('#nextleft').addClass('animate__animated animate__fadeInLeft ')
        $('#nextright').addClass('animate__animated animate__fadeInRight ')
    
        },{
            offset: '70%'
    });

    $('#joinwithus').waypoint(function(direction){
        $('#joinheading').addClass('animate__animated animate__fadeIn ')
        $('#joinleft').addClass('animate__animated animate__fadeInLeft ')
        $('#joinright').addClass('animate__animated animate__fadeInRight ')
    
        },{
            offset: '70%'
    });

    $('#volunteer').waypoint(function(direction){
        $('#volunteer').addClass('animate__animated animate__fadeIn ')
    
        },{
            offset: '85%'
    });

});