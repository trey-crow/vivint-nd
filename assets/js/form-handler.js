
const submitButton = document.getElementById("send-button");
submitButton.addEventListener("click", function(event) {
   event.preventDefault();


    const url = document.getElementById("formspark-url").value;
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phoneNumber");
    const status = document.getElementById("contact-form-status");
    const form = document.getElementById("contact-form");

    const name = nameInput.value;
    const nameParts = name.split(' ');

    const firstName = nameParts[0];
    const lastName = nameParts[1];


   

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
          }),
        })
          .then(function (response) {
            status.style.display = "block"
            form.reset();
            console.log(response);
          })
          .catch(function (error) {
            console.error(error);
          });
       }
      });