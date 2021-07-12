/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function($, Drupal) {

    /**
     * Use this behavior as a template for custom Javascript.
     */
    Drupal.behaviors.drummond = {
        attach: function(context, settings) {
            console.log('voy');
            $(".pager__item--previous span:nth-child(2)").text('Anterior');
            $("#account-login-form .js-form-item-tratamientos-datos label").append("<p>He leído y acepto el <a href='#'>tratamiento de datos personales<a></p>");
            //alert("I'm alive!");
            $('.close-popup-custom', context).once('drummond').on('click', function(e) {
                console.log('entre a ocultar');
                $('#popup-alert-proveedor').addClass("hidden");
                $('#block-alertaproveedor').addClass("hidden");
                $('#edit-prestatario').focus()
            });
            $('#edit-prestatario', context).once('drummond').on('click', function(e) {
                console.log('entre a mostrar ');
                $('#popup-alert-proveedor').removeClass("hidden");
                $('#block-alertaproveedor').addClass("hidden");
            });
            // $('#edit-orden-medica-upload', context).once('drummond').on('click',function(e){
            //   console.log('entre a mostrar ');
            //   $('#block-alertadiagnosticosytev').removeClass("hidden");
            //   $('.alertaDxTev').removeClass("hidden");
            // });
            $('#edit-orden-medica-upload', context).once('drummond').change(function() {
                console.log('entre a mostrar ');
                $('#block-alertadiagnosticosytev').removeClass("hidden");
                $('.alertaDxTev').removeClass("hidden");
            });
            $('.siDiagnosticoTev', context).once('drummond').on('click', function(e) {
                console.log('entre a ocultar');
                $('#block-alertadiagnosticosytev').addClass("hidden");
                $('.alertaDxTev').addClass("hidden");
            });
            $('.noDiagnosticoTev', context).once('drummond').on('click', function(e) {
                console.log('entre a ocultar');
                $('#block-alertadiagnosticosytev').addClass("hidden");
                $('.alertaDxTev').addClass("hidden");
                $("#edit-historia-clinica-upload").attr('required', 'required');
                // $("#edit-actions-submit").attr("disabled", true);
                $('input[type="submit"]').attr("disabled", true);
                $("#edit-alerta-hc").css('display', 'block');
                $("#edit-alerta-hc").css('color', 'red');
            });
            $('#edit-historia-clinica-upload', context).once('drummond').change(function() {
                console.log('entre a habilitar');
                // $("#edit-actions-submit").attr("disabled", false);
                $('input[type="submit"]').attr("disabled", false);
                $("#edit-alerta-hc").css('display', 'none');
            });
            $(".is-active").removeClass('secondary');
            let url = window.location.pathname
            let searchParams = new URLSearchParams(window.location.search)
            let value_program = searchParams.get('programa')
            if (url === '/form/autorizacion') {
                $('select[name="programa"]').val(value_program);
            } else if (url === '/form/autorizacion-barranquilla') {
                $('select[name="programa"]').val(value_program);
            } else if (url === '/form/autorizacion-valledupar-1') {
                $('select[name="programa"]').val(value_program);
            } else if (url === '/form/autorizacion-valledupar-2') {
                $('select[name="programa"]').val(value_program);
            }

            $('#block-marcadelsitio a').attr('href', '/home')

        }
    };

})(jQuery, Drupal);