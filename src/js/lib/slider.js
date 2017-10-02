import $ from 'jquery';
import 'slick-carousel';


function initSlider() {
  $(document).ready(function() {
    $('#slick').slick();
  });
}

export default initSlider;
