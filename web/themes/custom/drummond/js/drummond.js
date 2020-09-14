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
        console.log('entre a mostrar u ocultar');
        $('#block-alertaproveedor').toggleClass("hidden");
        $('#popup-alert-proveedor').toggleClass("hidden");
      });

    }
  };

})(jQuery, Drupal);
