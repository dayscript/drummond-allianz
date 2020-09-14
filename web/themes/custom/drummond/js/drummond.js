/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function ($, Drupal) {

  /**
   * Use this behavior as a template for custom Javascript.
   */
   Drupal.behaviors.drummond = {
    attach: function (context, settings) {
      //alert("I'm alive!");
      $('#edit-prestatario, .close-popup-custom', context).once('drummond').on('click',function(e){
        $('#block-alertaproveedor').toggleClass("hidden");
      });

    }
  };

})(jQuery, Drupal);
