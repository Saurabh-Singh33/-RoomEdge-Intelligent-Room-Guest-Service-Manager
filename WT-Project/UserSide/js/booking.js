const bookingForm = document.getElementById("bookingForm");
const confirmationMsg = document.getElementById("confirmationMsg");

bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const guests = document.getElementById("guests").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if(!name || !email || !phone || !guests || !date || !time){
        alert("Please fill all fields correctly!");
        return;
    }

    confirmationMsg.innerHTML = `Thank you, <strong>${name}</strong>! <br>
        Your table for <strong>${guests}</strong> guests is booked on 
        <strong>${date}</strong> at <strong>${time}</strong>.`;

    bookingForm.reset();
});
