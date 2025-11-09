document.addEventListener('DOMContentLoaded', function () {
    const medicineCard = document.getElementById('medicine-card');

    if (medicineCard) {
        medicineCard.addEventListener('click', function () {
            window.location.href = "../medicine/medicine.html";
        });
    }
});