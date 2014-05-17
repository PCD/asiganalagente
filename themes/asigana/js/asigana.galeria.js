(function ($) {
  Drupal.behaviors.galeria = {
    attach: function (context, settings) {
      $('.node--galeria--full .field--name-field-image .field__item:nth-child(5n)').addClass('fifth');
    }
  };

})(jQuery);
