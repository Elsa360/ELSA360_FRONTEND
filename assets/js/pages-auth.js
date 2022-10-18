/**
 *  Pages Authentication
 */

'use strict';
const formAuthentication = document.querySelector('#formAuthentication');

document.addEventListener('DOMContentLoaded', function (e) {
  (function () {
    // Form validation for Add new record
    if (formAuthentication) {
      const fv = FormValidation.formValidation(formAuthentication, {
        fields: {
          username: {
            validators: {
              notEmpty: {
                message: 'Ingresa tu nombre'
              },
            }
          },
          email: {
            validators: {
              notEmpty: {
                message: 'Por favor, ingresa un email valido'
              },
              emailAddress: {
                message: 'Por favor, ingresa un email valido'
              }
            }
          },
          'email-username': {
            validators: {
              notEmpty: {
                message: 'Ingresa tu email o Usuario'
              },
            }
          },
          password: {
            validators: {
              notEmpty: {
                message: 'Ingresa tu contraseña'
              },
            }
          },
          'confirm-password': {
            validators: {
              notEmpty: {
                message: 'Confirma tu contraseña'
              },
              identical: {
                compare: function () {
                  return formAuthentication.querySelector('[name="password"]').value;
                },
                message: 'Las contraseñas no coinciden'
              },
            }
          },
          terms: {
            validators: {
              notEmpty: {
                message: 'Acepta nuestros términos y condiciones para continuar'
              }
            }
          }
        },
        plugins: {
          trigger: new FormValidation.plugins.Trigger(),
          bootstrap5: new FormValidation.plugins.Bootstrap5({
            eleValidClass: '',
            rowSelector: '.mb-3'
          }),
          submitButton: new FormValidation.plugins.SubmitButton(),

          defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
          autoFocus: new FormValidation.plugins.AutoFocus()
        },
        init: instance => {
          instance.on('plugins.message.placed', function (e) {
            if (e.element.parentElement.classList.contains('input-group')) {
              e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);
            }
          });
        }
      });
    }

    //  Two Steps Verification
    const numeralMask = document.querySelectorAll('.numeral-mask');

    // Verification masking
    if (numeralMask.length) {
      numeralMask.forEach(e => {
        new Cleave(e, {
          numeral: true
        });
      });
    }
  })();
});
