const form = document.getElementById("appointmentForm");
const list = document.getElementById("appointmentsList");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  const li = document.createElement("li");
  li.textContent = `${name} - ${date} à ${time}`;
  list.appendChild(li);

  form.reset();
});
