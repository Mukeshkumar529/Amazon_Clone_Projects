 
$(document).ready(function(){
    $(".see_more").click(function(){
        $("#see_more").css("display", "block");
    });   
});

 



const nav_btn = document.querySelector('.nav_btn');

nav_btn.addEventListener('click',function onView(){
    const content_sidenav = document.querySelector('.side_navigation');
    content_sidenav.style.display="block";

    const icon_close = document.querySelector('.close_icon');
    icon_close.style.display="block";

    const nav_menu = document.querySelector('.menu_icons');
    nav_menu.style.display="none";
    const body_blur = document.querySelector('.header');
    body_blur.style.filter = "blur(3px)";

    const product_blur = document.querySelector('#product');
    product_blur.style.filter = "blur(3px)";
}



)
  

const close_Btn = document.querySelector('.close_icon');

close_Btn.addEventListener('click', function onClose(){
    const content_sidenav = document.querySelector('.side_navigation');
    content_sidenav.style.display="none";

    const icon_close = document.querySelector('.close_icon');
    icon_close.style.display="none";

    const nav_menu = document.querySelector('.menu_icons');
    nav_menu.style.display="block";
    const body_blur = document.querySelector('.header');
    body_blur.style.filter = "none";
    const product_blur = document.querySelector('#product');
    product_blur.style.filter = "none";

})