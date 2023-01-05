$(function () {

})


$(".header__logo").on('click', function () {
  $('html').animate({scrollTop: 0}, 300)
})

/*SUB MENI TOGGLE*/
$("#nav-nail-studio").on('click', function (e) {
  e.stopPropagation()
  $("#nav-shop-product-sub").addClass('hidden')
  $("#nav-nail-studio-sub").toggleClass('hidden')
})

$("#nav-shop-product").on('click', function (e) {
  e.stopPropagation()
  $("#nav-nail-studio-sub").addClass('hidden')
  $("#nav-shop-product-sub").toggleClass('hidden')
})

$(document).on('click', function () {
  $('.header__nav__submenu-warp').addClass('hidden');
})

/*TAB MENU TOGGLE*/
$(".header__toggle_btn").on('click', function () {
  $(".header__toggle_menu-wrap").removeClass('hidden')
})

$(".header__toggle_close").on('click', function () {
  $(".header__toggle_menu-wrap").addClass('hidden')
})

$(".header__toggle__more").on('click', function () {
  if ($(this).hasClass('close')) {
    $(this).removeClass('close')
    $(this).addClass('open')
    $(this).text('-')
  } else {
    $(this).removeClass('open')
    $(this).addClass('close')
    $(this).text('+')
  }
  $(this).siblings().find('ul').toggleClass('hidden')
})

