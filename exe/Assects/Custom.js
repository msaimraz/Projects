$(document).ready(function(){
    $("button#grayscale").click(function() { $("link[rel=stylesheet]").attr({href : "Assects/Styledark.css"}); });
    $("button#original").click(function() { $("link[rel=stylesheet]").attr({href : "Assects/Stylelight.css"}); });  
  $(".menu-toggle").click(function(){   
       $(".menu-toggle").toggleClass("active")
       $("nav").toggleClass("active")
  });     
  $( "#tabs" ).tabs();
  $( "#accordion" ).accordion();    
  $("input,textarea").focus(function(){
       $(this).css({
            "background-color": "#fff",
            "border": "solid "
       });
  });
  $("input,textarea").blur(function(){
       $(this).css({
            "background-color": "#FAFAFA",
            "border": "none "
       });
  });
  $( "#datepicker" ).datepicker({
       changeMonth: true,
       changeYear: true
     });
  $("form").submit(function(event){
       event.preventDefault();
      if($("input").val()==''){
           $("input").css("border-color","red","2px");
      }
      else{ $("form").hide();
      $("#box").show(1000);};
   
   
       });       
  $('.chart').easyPieChart({
      size:180,
      barColor:" #E5493A ",
      scaleColor:false,
      lineWidth:5,
      trackColor:"#BFBABA",
      lineCap:"circle",
      animate:2000
   });
   new WOW ().init(); 

  $(".rslides").responsiveSlides({
       auto : true,
       speed : 500
  });   
  $("#slides").slidesjs({
       width: 940,
       height: 528
  });
        
})