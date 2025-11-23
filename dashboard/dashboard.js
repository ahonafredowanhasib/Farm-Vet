 window.onload = function() {
            const loader = document.getElementById('loaderOverlay');
            
            if (loader) {
                setTimeout(() => {
                    
                    loader.style.opacity = '0'; 
                    setTimeout(() => {
                        loader.style.display = 'none';
                    }, 300); 
                }, 1500);
            }
        };

        document.addEventListener('DOMContentLoaded', function () {
            const medicineCard = document.getElementById('medicine-card');
            const doctorCard = document.getElementById('doctor-card');

            if (medicineCard) {
                medicineCard.addEventListener('click', function () {
                    window.location.href = "../medicine/medicine.html";
                });
            }

            if (doctorCard) {
                doctorCard.addEventListener('click', function () {
                    window.location.href = "../doctor/doctors.html";
                });
            }
        });