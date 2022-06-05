$(document).ready(function(){
    
  var btn = $('.cordless-when-hover .nav'),
      info = $('.cordless-when-hover .info');
   
    btn.click(function(e) {
        e.preventDefault();
        var index = $(this).index();
        info.hide();
        info.eq(index).show();
        $('.cordless-when-hover .nav').removeClass('current');
        $(this).addClass('current');
    });
});

$(document).ready(function(){
    
  var btn = $('.menu-items li'),
      info = $('.cordless-when-hover');
   
    btn.click(function(e) {
        e.preventDefault();
        var index = $(this).index();
        info.hide();
        info.eq(index).show();
        $('.menu-items li').removeClass('show');
        $(this).addClass('show');
    });
});

// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.menu-items');
const navLinks = document.querySelectorAll('.menu-items a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}