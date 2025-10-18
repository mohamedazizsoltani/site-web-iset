const form = document.getElementById('appointment-form');
const appointmentsList = document.getElementById('appointments');

let appointments = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('patient-name').value;
    const doctor = document.getElementById('doctor-select').value;
    const date = document.getElementById('appointment-date').value;

    const appointment = { name, doctor, date };
    appointments.push(appointment);
    renderAppointments();

    form.reset();
});

function renderAppointments() {
    appointmentsList.innerHTML = '';
    appointments.forEach((appt, index) => {
        const li = document.createElement('li');
        li.textContent = `${appt.name} - ${appt.doctor} - ${appt.date}`;
        appointmentsList.appendChild(li);
    });
}
