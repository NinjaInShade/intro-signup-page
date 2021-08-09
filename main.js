function validateForm(event) {
  event.preventDefault();

  const email_re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const emailAddress = document.getElementById('emailAddress');
  const password = document.getElementById('password');

  const fields = [firstName, lastName, emailAddress, password];

  // Reset each field to treat it as valid
  for (let i = 0; i < fields.length; i++) {
    fields[i].previousElementSibling.classList.add('header-form-error-icon-hidden');
    fields[i].nextElementSibling.classList.add('header-form-error-text-hidden');
    fields[i].classList.remove('header-form-input-error');
  }

  // Empty check for each field
  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      fields[i].nextElementSibling.innerHTML = `${fields[i].name} cannot be empty`;
      fields[i].previousElementSibling.classList.remove('header-form-error-icon-hidden');
      fields[i].nextElementSibling.classList.remove('header-form-error-text-hidden');
      fields[i].classList.add('header-form-input-error');
    }
  }

  // We need this as we only want to validate if email address is valid if the empty check has passed
  const email_has_error = !emailAddress.nextElementSibling.classList.contains('header-form-error-text-hidden');

  if (!email_has_error && !email_re.test(String(emailAddress.value).toLowerCase())) {
    emailAddress.nextElementSibling.innerHTML = 'Looks like this is not an email';
    emailAddress.nextElementSibling.classList.remove('header-form-error-text-hidden');
  }
}
