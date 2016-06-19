const phoneNumberEl = document.getElementById('number');

function saveNumber() {
  try {
    localStorage.setItem('phone_number', phoneNumberEl.value);
  } catch(e) {
    console.error(e);
  }
}

function loadNumber() {
  const phoneNumber = localStorage.getItem('phone_number');
  if(phoneNumber) {
    phoneNumberEl.value = phoneNumber;
  }
}

loadNumber();