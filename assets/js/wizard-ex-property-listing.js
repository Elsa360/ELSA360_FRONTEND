/**
 *  Form Wizard
 */

'use strict';

(function () {
  // Init custom option check
  // window.Helpers.initCustomOptionCheck();

  // const flatpickrRange = document.querySelector('.flatpickr'),
  //   phoneMask = document.querySelector('.contact-number-mask'),
  //   plCountry = $('#plCountry'),
  //   plFurnishingDetailsSuggestionEl = document.querySelector('#plFurnishingDetails');

  // // Phone Number Input Mask
  // if (phoneMask) {
  //   new Cleave(phoneMask, {
  //     phone: true,
  //     phoneRegionCode: 'US'
  //   });
  // }

  // // select2 (Country)

  // if (plCountry) {
  //   plCountry.wrap('<div class="position-relative"></div>');
  //   plCountry.select2({
  //     placeholder: 'Select country',
  //     dropdownParent: plCountry.parent()
  //   });
  // }

  // if (flatpickrRange) {
  //   flatpickrRange.flatpickr();
  // }

  // // Tagify (Furnishing details)
  // const furnishingList = [
  //   'Fridge',
  //   'TV',
  //   'AC',
  //   'WiFi',
  //   'RO',
  //   'Washing Machine',
  //   'Sofa',
  //   'Bed',
  //   'Dining Table',
  //   'Microwave',
  //   'Cupboard'
  // ];
  // if (plFurnishingDetailsSuggestionEl) {
  //   const plFurnishingDetailsSuggestion = new Tagify(plFurnishingDetailsSuggestionEl, {
  //     whitelist: furnishingList,
  //     maxTags: 10,
  //     dropdown: {
  //       maxItems: 20,
  //       classname: 'tags-inline',
  //       enabled: 0,
  //       closeOnSelect: false
  //     }
  //   });
  // }

  

  // Vertical Wizard
  // --------------------------------------------------------------------

  const wizardPropertyListing = document.querySelector('#wizard-property-listing');
  if (typeof wizardPropertyListing !== undefined && wizardPropertyListing !== null) {
    // Wizard form
    const wizardPropertyListingForm = wizardPropertyListing.querySelector('#wizard-property-listing-form');



    // Wizard steps
    const wizardPropertyListingFormStep1 = wizardPropertyListingForm.querySelector('#personal-details');
    const wizardPropertyListingFormStep2 = wizardPropertyListingForm.querySelector('#property-details');
    // const wizardPropertyListingFormStep3 = wizardPropertyListingForm.querySelector('#property-features');
    // const wizardPropertyListingFormStep4 = wizardPropertyListingForm.querySelector('#property-area');
    // const wizardPropertyListingFormStep5 = wizardPropertyListingForm.querySelector('#price-details');

    
    // Wizard next prev button
    const wizardPropertyListingNext = [].slice.call(wizardPropertyListingForm.querySelectorAll('.btn-next'));
    const wizardPropertyListingPrev = [].slice.call(wizardPropertyListingForm.querySelectorAll('.btn-prev'));

    const validationStepper = new Stepper(wizardPropertyListing, {
      linear: true
    });
    

    // Personal Details
    const FormValidation1 = FormValidation.formValidation(wizardPropertyListingFormStep1, {
      fields: {
        // * Validate the fields here based on your requirements        
      },


      
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          // Use this for enabling/changing valid/invalid class
          // eleInvalidClass: '',
          eleValidClass: '',
          rowSelector: '.col-sm-6'
        }),
        autoFocus: new FormValidation.plugins.AutoFocus(),
        submitButton: new FormValidation.plugins.SubmitButton()
      },
      init: instance => {
        instance.on('plugins.message.placed', function (e) {
          //* Move the error message out of the `input-group` element
          if (e.element.parentElement.classList.contains('input-group')) {
            e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);
          }
        });
      }
    }).on('core.form.valid', function () {
      // Jump to the next step when all fields in the current step are valid
      validationStepper.next();
    });







    

    // Price Details
    const FormValidation2 = FormValidation.formValidation(wizardPropertyListingFormStep2, {
      fields: {
        // * Validate the fields here based on your requirements
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          // Use this for enabling/changing valid/invalid class
          // eleInvalidClass: '',
          eleValidClass: '',
          rowSelector: '.col-md-12'
        }),
        autoFocus: new FormValidation.plugins.AutoFocus(),
        submitButton: new FormValidation.plugins.SubmitButton()
      }

    }).on('core.form.valid', function () {
      // You can submit the form
      // wizardPropertyListingForm.submit()
      // or send the form data to server via an Ajax request
      // To make the demo simple, I just placed an alert
      alert('Submitted..!!');
    });













    wizardPropertyListingNext.forEach(item => {
      item.addEventListener('click', event => {
        // When click the Next button, we will validate the current step
        switch (validationStepper._currentIndex) {
          case 0:
            FormValidation1.validate();
            break;

          case 1:
            FormValidation2.validate();
            break;          

          default:
            break;
        }
      });
    });



    wizardPropertyListingPrev.forEach(item => {
      item.addEventListener('click', event => {
        switch (validationStepper._currentIndex) {
          case 4:
            validationStepper.previous();
            break;

          case 3:
            validationStepper.previous();
            break;

          case 2:
            validationStepper.previous();
            break;

          case 1:
            validationStepper.previous();
            break;

          case 0:

          default:
            break;
        }
      });
    });
  }
})();
