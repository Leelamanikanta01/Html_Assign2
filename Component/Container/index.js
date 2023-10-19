function submitForm(event) {
  event.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const dob = document.getElementById("dob").value;
  const country = document.getElementById("country").value;
  const genderCheckboxes = document.querySelectorAll(
    'input[name="gender"]:checked'
  );
  const gender = Array.from(genderCheckboxes)
    .map((checkbox) => checkbox.value)
    .join(", ");
  const profession = document.getElementById("profession").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  const formData = `
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Date of Birth:</strong> ${dob}</p>
    <p><strong>Country:</strong> ${country}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Profession:</strong> ${profession}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Mobile Number:</strong> ${mobile}</p>
  `;

  document.getElementById("form-data").innerHTML = formData;

  document.getElementById("popup").style.display = "block";

  document.getElementById("survey-form").reset();
}

function resetForm() {
  document.getElementById("survey-form").reset();
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
