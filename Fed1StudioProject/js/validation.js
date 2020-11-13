function validateForm(event) {
    //  Gather all HTML controls into a collection instead of creating a separate variable for each one.
    let controls = document.getElementsByClassName("form-control");
    //console.log(controls);

    let validationMessages = document.getElementsByClassName("invalid");

    //  Regular Expressions object for the FullName input
    let rxpFirstName = new RegExp(/^[A-Z]+$/i); // full name can only contain valid letters A-Z in either case.
    let rxpLastName = new RegExp(/^[A-Z]+$/i);
    let rxpEmail = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

    //  Check the length of ALL controls - if any have NOT been filled out by the user, stop the form from submitting
    //  Also check the email and fullName controls for their regEx.
    if (controls['firstName'].value.length == 0 || controls['lastName'].value.length == 0 || controls['email'].value.length == 0 || controls['subject'].value.length == 0 || controls['message'].value.length == 0 || !rxpEmail.test(controls['email'].value) || !rxpFirstName.test(controls['firstName'].value) || !rxpLastName.test(controls['lastName'].value)) {

        //Stop form from submitting
        event.preventDefault();

        //  Check intividual controls and display error message(s) if needed

        // ------------------------------ First Name Validation ---------------------------------------
        //length
        if (controls['firstName'].value.length == 0) {
            validationMessages['invalidFirstName'].textContent = "*First Name is required";
        } else {
            validationMessages['invalidFirstName'].textContent = "";
        }
        if (!rxpFirstName.test(controls['firstName'].value) && controls['firstName'].value.length > 0) {
            validationMessages['invalidFirstName'].textContent = "*Name must only contain alphabetical characters.";
        }
        //  reset the validation block back to ""
        if (rxpFirstName.test(controls['firstName'].value) && controls['firstName'].value.length > 0) {
            validationMessages['invalidFirstName'].textContent = "";
        }
        // ------------------------------ Last Name Validation ---------------------------------------
        //length
        if (controls['lastName'].value.length == 0) {
            validationMessages['invalidLastName'].textContent = "*Last Name is required";
        } else {
            validationMessages['invalidLastName'].textContent = "";
        }
        if (!rxpLastName.test(controls['lastName'].value) && controls['lastName'].value.length > 0) {
            validationMessages['invalidLastName'].textContent = "*Name must only contain alphabetical characters.";
        }
        //  reset the validation block back to ""
        if (rxpLastName.test(controls['lastName'].value) && controls['lastName'].value.length > 0) {
            validationMessages['invalidLastName'].textContent = "";
        }
        // ---------------------------- Email Validation -----------------------------------------------
        //length
        if (controls['email'].value.length == 0) {
            validationMessages['invalidEmail'].textContent = "* Email is required";
        } else {
            validationMessages['invalidEmail'].textContent = "";
        }

        //  regex
        if (!rxpEmail.test(controls['email'].value) && controls['email'].value.length > 0) {
            validationMessages['invalidEmail'].textContent = "* Please ender a valid email address";
        }
        //  reset email
        if (rxpEmail.test(controls['email'].value) && controls['email'].value.length > 0) {
            validationMessages['invalidEmail'].textContent = "";
        }
        // -------------------------- Subject Validation ----------------------------------------
        if (controls['subject'].value.length == 0) {
            validationMessages['invalidSubject'].textContent = "* Please ender a subject";

        } else {
            validationMessages['invalidSubject'].textContent = "";
        }
        // -------------------------- Message Validation ----------------------------------------
        if (controls['message'].value.length == 0) {
            validationMessages['invalidMessage'].textContent = "* Please ender a message";

        } else {
            validationMessages['invalidMessage'].textContent = "";
        }
    }
}