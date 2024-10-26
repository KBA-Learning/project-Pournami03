const reservationList = document.getElementById('reservation-list');
        let reservations = [];

        // Handle adding a new reservation
        document.getElementById('add-reservation-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const movie = document.getElementById('movie').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;

            const newReservation = {
                id: Date.now(),
                movie,
                date,
                time
            };

            reservations.push(newReservation);
            renderReservations();
            this.reset(); // Clear the form
        });

        // Function to render reservations in the table
        function renderReservations() {
            reservationList.innerHTML = '';
            reservations.forEach(reservation => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td class="px-4 py-2">${reservation.movie}</td>
                    <td class="px-4 py-2">${reservation.date}</td>
                    <td class="px-4 py-2">${reservation.time}</td>
                    <td class="px-4 py-2">
                        <button class="bg-yellow-500 text-white px-2 py-1 rounded-lg" onclick="editReservation(${reservation.id})">Edit</button>
                        <button class="bg-red-500 text-white px-2 py-1 rounded-lg" onclick="deleteReservation(${reservation.id})">Delete</button>
                    </td>
                `;
                reservationList.appendChild(row);
            });
        }
// Function to delete a reservation
function deleteReservation(id) {
    reservations = reservations.filter(reservation => reservation.id !== id);
    renderReservations();
}

// Function to edit a reservation
function editReservation(id) {
    const reservation = reservations.find(reservation => reservation.id === id);
    if (reservation) {
        document.getElementById('movie').value = reservation.movie;
        document.getElementById('date').value = reservation.date;
        document.getElementById('time').value = reservation.time;
        deleteReservation(id); // Remove the old reservation for update
    }
}