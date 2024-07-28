let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");



icon.addEventListener('click', () =>{
    ul.classList.toggle("showData");
    console.log(ul);

})




var typed = new Typed('#element', {
    strings: ['Best Deals', '24 Hourse Services ','Shop To All World ','Online Shoping', 'ROLEX MARKET !','Leader Hasnian Khan','Top 10 Brands'],
    typeSpeed: 200,
  });



  




  var lastScrollTop = 0;
  $(window).scroll(function(){
    var st = $(this).scrollTop();
    var banner = $('.banner');
    setTimeout(function(){
      if (st > lastScrollTop){
        banner.addClass('hide');
      } else {
        banner.removeClass('hide');
      }
      lastScrollTop = st;
    }, 100);
  });





  