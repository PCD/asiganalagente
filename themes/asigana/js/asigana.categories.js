(function ($) {
  Drupal.behaviors.categories = {
    attach: function (context, settings) {
      $('#block-views-categories-block .views-row').hover(function(){
        $(this).addClass('hover');
      }, function(){
        $(this).removeClass('hover');
      });
    }
  };

})(jQuery);
