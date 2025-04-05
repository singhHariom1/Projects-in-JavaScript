addEventListener('DOMContentLoaded', () => {
    const loading = document.getElementById('loading');
    const userTableBody = document.getElementById('userTableBody');

    async function fetchUserData() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const users = await response.json();

            loading.style.display = "none";

            users.forEach(user => {
                const row = document.createElement("tr")
                row.innerHTML = `<td>${user.name}</td>
                                <td>${user.email}</td>
                                <td>${user.address.city}</td>`

                userTableBody.appendChild(row);
            });

        } catch (error) {
            loading.innerText = "Error fetching data!";
            console.error("Fetch error:", error);
        }

    }

    fetchUserData();
});
