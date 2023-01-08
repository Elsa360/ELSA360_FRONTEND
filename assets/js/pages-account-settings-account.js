/**
 * Account Settings - Account
 */

'use strict';

document.addEventListener('DOMContentLoaded', function (e) {
  (function () {
    const formAccSettings = document.querySelector('#formAccountSettings'),
      deactivateAcc = document.querySelector('#formAccountDeactivation'),
      deactivateButton = deactivateAcc.querySelector('.deactivate-account');

    // Form validation for Add new record
    if (formAccSettings) {
      const fv = FormValidation.formValidation(formAccSettings, {
        fields: {
          firstName: {
            validators: {
              notEmpty: {
                message: 'Ingresa tu nombre completo'
              }
            }
          },
          lastName: {
            validators: {
              notEmpty: {
                message: 'Ingresa tus apellidos'
              }
            }
          }
        },
        plugins: {
          trigger: new FormValidation.plugins.Trigger(),
          bootstrap5: new FormValidation.plugins.Bootstrap5({
            eleValidClass: '',
            rowSelector: '.col-md-6'
          }),
          submitButton: new FormValidation.plugins.SubmitButton(),
          // Submit the form when all fields are valid
          // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
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

    if (deactivateAcc) {
      const fv = FormValidation.formValidation(deactivateAcc, {
        fields: {
          accountActivation: {
            validators: {
              notEmpty: {
                message: 'Por favor, confirma que quieres desactivar tu cuenta de ELSA'
              }
            }
          }
        },
        plugins: {
          trigger: new FormValidation.plugins.Trigger(),
          bootstrap5: new FormValidation.plugins.Bootstrap5({
            eleValidClass: ''
          }),
          submitButton: new FormValidation.plugins.SubmitButton(),
          fieldStatus: new FormValidation.plugins.FieldStatus({
            onStatusChanged: function (areFieldsValid) {
              areFieldsValid
                ? // Enable the submit button
                // so user has a chance to submit the form again
                deactivateButton.removeAttribute('disabled') : // Disable the submit button
                deactivateButton.setAttribute('disabled', 'disabled');
            }
          }),
          // Submit the form when all fields are valid
          // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
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

    // Deactivate account alert
    const accountActivation = document.querySelector('#accountActivation');

    // Alert With Functional Confirm Button
    if (deactivateButton) {
      deactivateButton.onclick = function () {
        if (accountActivation.checked == true) {
          Swal.fire({
            text: 'Estas segur@ de querer desactivar tu cuenta de ELSA?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si',
            customClass: {
              confirmButton: 'btn btn-warning me-2',
              cancelButton: 'btn btn-label-secondary'
            },
            buttonsStyling: false
          }).then(function (result) {
            if (result.value) {
              desactivarCuenta();
              Swal.fire({
                icon: 'success',
                title: 'Cuenta Desactivada!',
                text: 'Tu cuenta ha sido desactivada exitosamente.',
                customClass: {
                  confirmButton: 'btn btn-success'
                }
              });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire({
                title: 'Cancelado',
                text: 'Desactivación de cuenta cancelada!!',
                icon: 'error',
                customClass: {
                  confirmButton: 'btn btn-success'
                }
              });
            }
          });
        }
      };
    }

    // CleaveJS validation

    const phoneNumber = document.querySelector('#phoneNumber'),
      zipCode = document.querySelector('#zipCode');
    // Phone Mask
    if (phoneNumber) {
      new Cleave(phoneNumber, {
        phone: true,
        phoneRegionCode: 'CO'
      });
    }

    // Pincode
    if (zipCode) {
      new Cleave(zipCode, {
        delimiter: '',
        numeral: true
      });
    }

    // Update/reset user image of account page
    let accountUserImage = document.getElementById('uploadedAvatar');
    const fileInput = document.getElementById('upload'),
      resetFileInput = document.querySelector('.account-image-reset');


    if (accountUserImage) {
      const resetImage = accountUserImage.src;
      fileInput.onchange = () => {
        if (fileInput.files[0]) {
          accountUserImage.src = window.URL.createObjectURL(fileInput.files[0]);

          var fd = new FormData();
          var files = fileInput.files;
          var idusuario = localStorage.idusuario;

          // Check file selected or not
          if (files.length > 0) {
            fd.append('file', files[0]);
            fd.append('idusuario', idusuario);

            $.ajax({
                url: 'https://localhost:7155/usuario/savedImage',
                type: 'post',
                data: fd,
                contentType: false,
                processData: false,
                success: function (data) {
                  localStorage.avataruri="/uploads/avatar/"+ idusuario +".jpg";
                  console.log("avataruri change");
                  setTimeout(() => {               
                    console.log("Imagen guardada " +localStorage.avataruri)                 
                  }, 3000);
                  
                  location.reload();
                },
                error: function (data) {

                }
              }).done(function () {

              })
              .fail(function () {
                console.log("error");
              })

          } else {
            console.log("Please select a file.");
          }
        }
      };
      // resetFileInput.onclick = () => {
      //   fileInput.value = '';
      //   accountUserImage.src = resetImage;
      // };
    }

    // Update/reset user image of account page
    let removeAvatar = document.getElementById('deleteAvat');


    function removeAvat(){

      $.ajax({
        url: 'https://localhost:7155/usuario/dropImage',
        type: 'post',
        data: localStorage.idusuario,
        dataType : 'text',
        success: function (data) {
          console.log("Imagen eliminada");

        },
        error: function (data) {

        }
      })
    }



  })();
});


// Select2 (jquery)
$(function () {
  var select2 = $('.select2');
  // For all Select2
  if (select2.length) {
    select2.each(function () {
      var $this = $(this);
      $this.wrap('<div class="position-relative"></div>');
      $this.select2({
        dropdownParent: $this.parent()
      });
    });
  }
});


window.onload = async () => {
  loadavatar();
}