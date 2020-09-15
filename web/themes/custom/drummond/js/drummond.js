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
      // $('#edit-orden-medica-upload', context).once('drummond').on('click',function(e){
      //   console.log('entre a mostrar ');
      //   $('#block-alertadiagnosticosytev').removeClass("hidden");
      //   $('.alertaDxTev').removeClass("hidden");
      // });
      $('#edit-orden-medica-upload', context).once('drummond').change(function(){
        console.log('entre a mostrar ');
        $('#block-alertadiagnosticosytev').removeClass("hidden");
        $('.alertaDxTev').removeClass("hidden");
      });
      $('.siDiagnosticoTev', context).once('drummond').on('click',function(e){
        console.log('entre a ocultar');
        $('#block-alertadiagnosticosytev').addClass("hidden");
        $('.alertaDxTev').addClass("hidden");
      });
      $('.noDiagnosticoTev', context).once('drummond').on('click',function(e){
        console.log('entre a ocultar');
        $('#block-alertadiagnosticosytev').addClass("hidden");
        $('.alertaDxTev').addClass("hidden");
        $("#edit-historia-clinica-upload").attr('required', 'required');
        $("#edit-actions-submit").attr("disabled", true);
      });
      $('#edit-historia-clinica-upload', context).once('drummond').change(function(){
        console.log('entre a habilitar');
        $("#edit-actions-submit").attr("disabled", false);
      });

    }
  };

})(jQuery, Drupal);
