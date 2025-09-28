const form = document.getElementById('registrationForm');
const profiles = document.getElementById('profiles');
const tableBody = document.querySelector('#summaryTable tbody');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!validateForm()) return;

  const data = Object.fromEntries(new FormData(form));

  renderProfile(data);
  renderTableRow(data);

  form.reset();
});

function validateForm() {
  let valid = true;

  // First name
  const firstName = form.firstName.value.trim();
  if (!firstName) {
    showError('firstNameError', 'First name is required');
    valid = false;
  } else clearError('firstNameError');

  // Last name
  const lastName = form.lastName.value.trim();
  if (!lastName) {
    showError('lastNameError', 'Last name is required');
    valid = false;
  } else clearError('lastNameError');

  // Email
  const email = form.email.value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError('emailError', 'Enter a valid email');
    valid = false;
  } else clearError('emailError');

  // Programme
  if (!form.programme.value.trim()) {
    showError('programmeError', 'Programme is required');
    valid = false;
  } else clearError('programmeError');

  // Year
  if (!form.year.value) {
    showError('yearError', 'Select a year');
    valid = false;
  } else clearError('yearError');

  return valid;
}

function showError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearError(id) {
  document.getElementById(id).textContent = '';
}

function renderProfile(data) {
  const card = document.createElement('div');
  card.className = 'profile-card';

  card.innerHTML = `
    <img src="${data.photoUrl || 'https://via.placeholder.com/80'}" alt="${data.firstName}">
    <div>
      <h3>${data.firstName} ${data.lastName}</h3>
      <p>Email: ${data.email}</p>
      <p>Programme: ${data.programme} (Year ${data.year})</p>
      <p>Interests: ${data.interests || 'N/A'}</p>
      <button class="remove">Remove</button>
    </div>
  `;

  card.querySelector('.remove').addEventListener('click', () => {
    card.remove();
    document.getElementById(data.email).remove();
  });

  profiles.appendChild(card);
}

function renderTableRow(data) {
  const row = document.createElement('tr');
  row.id = data.email;

  row.innerHTML = `
    <td>${data.firstName} ${data.lastName}</td>
    <td>${data.email}</td>
    <td>${data.programme}</td>
    <td>${data.year}</td>
    <td><button class="remove">Remove</button></td>
  `;

  row.querySelector('.remove').addEventListener('click', () => {
    row.remove();
    [...profiles.children].find(c => 
      c.querySelector('p').textContent.includes(data.email)
    )?.remove();
  });

  tableBody.appendChild(row);
}
