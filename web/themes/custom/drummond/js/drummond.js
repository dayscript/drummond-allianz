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
            $(".pager__item--previous span:nth-child(2)").text('Anterior');
            $("#account-login-form .js-form-item-tratamientos-datos label").append("<p>He leído y acepto el <a href='#'>tratamiento de datos personales<a></p>");
            //alert("I'm alive!");
            $('.close-popup-custom', context).once('drummond').on('click', function(e) {
                console.log('entre a ocultar');
                $('#popup-alert-proveedor').addClass("hidden");
                $('#block-alertaproveedor').addClass("hidden");
                $('#block-alertadirectoriomedico').addClass("hidden");
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
            let url_entidades = window.location.pathname;
            if (url_entidades == '/entidades') {
                console.log('entre1')
                setTimeout(function() {
                    $('#block-alertadirectoriomedico').removeClass("hidden");
                }, 500);
            }
            $(".close-popup-custom-entidades").click(function() {
                $('#block-alertadirectoriomedico').addClass("hidden");
            });
            $('.close-popup-custom-entidades', context).once('drummond').on('click', function(e) {
                $('#block-alertadirectoriomedico').addClass("hidden");
            });

            $('#edit-historia-clinica-upload', context).once('drummond').change(function() {
                console.log('entre a habilitar');
                // $("#edit-actions-submit").attr("disabled", false);
                $('input[type="submit"]').attr("disabled", false);
                $("#edit-alerta-hc").css('display', 'none');
            });
            $(".is-active").removeClass('secondary');

            /* Asiganción de programa a select de autorización */
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
            /* Fin asiganción de programa a select de autorización */

            /* Emails de enfermeras por ciudad */
            var email_santa_marta = 'yisneira.alvis@allianz.co';
            var email_barranquilla = 'greys.miranda@allianz.co';
            var email_valledupar_1 = 'monica.diaz@allianz.co';
            var email_valledupar_2 = 'ulieta.araujo@allianz.co';
            /* Fin de emails de enfermeras por ciudad */

            /* Validadcion de ciudad y porgrama para asignación de emails */
            $("#edit-ciudad").change(function() {
                var ciudad = $('select[name="ciudad"]').val();
                var programa = $('select[name="programa"]').val();
                if (ciudad == 'Barranquilla') {
                    $("input[name=email]").val(email_barranquilla);
                } else if (ciudad == 'Santa marta') {
                    $("input[name=email]").val(email_santa_marta);
                } else if (ciudad == 'Valledupar') {
                    if (programa == 17 || programa == 18) {
                        $("input[name=email]").val(email_valledupar_1);
                    } else {
                        $("input[name=email]").val(email_valledupar_2);
                    }
                }
                /* Asiganción de Valor al programa */
                if (programa == 16) {
                    $("input[name=programas]").val('Riesgo Cardiovascular');
                } else if (programa == 17) {
                    $("input[name=programas]").val('Gestante');
                } else if (programa == 18) {
                    $("input[name=programas]").val('Crecimiento y desarrollo');
                }
                /* Fin asiganción de Valor al programa */
            });
            /* Fin de validadcion de ciudad y porgrama para asignación de emails */

            /* Cambio de url en el icono del home */
            $('#block-marcadelsitio a').attr('href', '/home')
                /* Fin cambio de url en el icono del home */

        }
    };

})(jQuery, Drupal);