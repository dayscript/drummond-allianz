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
      $('.close-popup-custom', context).once('drummond').on('click',function(e){
        console.log('entre a ocultar');
        $('#popup-alert-proveedor').addClass("hidden");
        $('#block-alertaproveedor').addClass("hidden");
        $('#edit-prestatario').focus()
      });
      $('#edit-prestatario', context).once('drummond').on('click',function(e){
        console.log('entre a mostrar ');
        $('#popup-alert-proveedor').removeClass("hidden");
        $('#block-alertaproveedor').addClass("hidden");
      });

    }
  };

})(jQuery, Drupal);
