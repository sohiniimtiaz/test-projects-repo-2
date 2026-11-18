function processPayment() {
    const price = document.getElementById('price').value;
    const modal = document.getElementById("messageModal");
    const modalMessage = document.getElementById("modalMessage");

    if (price < 2 || price > 7) {
        modalMessage.textContent = "Invalid amount. Please enter a value between $2 and $7.";
    } else {
        modalMessage.textContent = "Purchase successful!";
    }

    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("messageModal").style.display = "none";
}
