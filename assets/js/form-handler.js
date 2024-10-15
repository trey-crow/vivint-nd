const consentCheckbox = document.getElementById('consent');
const submitButton = document.getElementById("send-button");
consentCheckbox.addEventListener('change', () => {
  submitButton.disabled = !consentCheckbox.checked;
});

// Handle form submission

submitButton.addEventListener("click", function(event) {
   event.preventDefault();


    const url = document.getElementById("formspark-url").value;
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phoneNumber");
    const partner = document.getElementById("partner").value;
    const status = document.getElementById("contact-form-status");
    const form = document.getElementById("contact-form");
    
  

    const name = nameInput.value;
    const nameParts = name.split(' ');

    const firstName = nameParts[0];
    const lastName = nameParts[1];

    
  // Optionally reset the form after submission
  // contactForm.reset(); // Uncomment if you want to reset
  // consentCheckbox.checked = false; // Uncomment if you want to uncheck the consent box

   

    if (nameInput.validity.valueMissing || emailInput.validity.valueMissing || phoneInput.validity.valueMissing) {
        event.preventDefault(); // Prevent form submission if there are error

          // Change the input field styling for the empty fields
          if (nameInput.validity.valueMissing) {
              nameInput.classList.add("invalid-input");
          }
          if (emailInput.validity.valueMissing) {
              emailInput.classList.add("invalid-input");
          }
          if (phoneInput.validity.valueMissing) {
              phoneInput.classList.add("invalid-input");
          }
    
    }
    else {
      nameInput.classList.remove("invalid-input");
      emailInput.classList.remove("invalid-input");
      phoneInput.classList.remove("invalid-input");
      fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            firstName:  firstName,
            lastName: lastName,
            email: emailInput.value,
            phone: phoneInput.value,
            partner: partner,
          }),
        })
          .then(function (response) {
            submitButton.textContent = 'Form Submitted';
            submitButton.disabled = true; // Disable the button

            // Show the status message
             statusMessage.style.display = 'block';

            status.style.display = "block"
           // form.reset();
            console.log(response);
          })
          .catch(function (error) {
            console.error(error);
          });
       }
      });