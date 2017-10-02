import { TweenLite, TweenMax } from 'gsap';

function initGsap() {
  window.onload = function() {
    var logo = document.getElementById('logo');
    var navigation = document.getElementById('navigation');

    TweenMax.staggerFromTo([logo, navigation], 1, {opacity: 0}, {opacity: 1});

    TweenLite.fromTo(logo, 1, {left: '-300px'}, {left: '0'});
  };
}

export default initGsap;
