/* Stickey NavBar*/
$(document).ready(function(){
  let navbar = $(".navbar");

  $(window).scroll(function(){
    //console.log(window.innerHeight);
    //console.log($(".section-2").offset().top)
    let oTop =$(".section-2").offset().top -window.innerHeight;
    //console.log(oTop);
    if ($(window).scrollTop()> oTop){
      navbar.addClass("sticky");
    }
    else{
      navbar.removeClass("sticky");
    };
  });
});