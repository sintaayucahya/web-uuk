const dropdown = document.querySelector(".dropdown");
const dropdownBtn = document.querySelector(".dropdown-btn");

// Saat tombol daerah ditekan
dropdownBtn.addEventListener("click", function(e){

    e.preventDefault();

    dropdown.classList.toggle("active");

});

// Tutup dropdown saat klik di luar menu
document.addEventListener("click", function(e){

    if(!dropdown.contains(e.target)){

        dropdown.classList.remove("active");

    }

});