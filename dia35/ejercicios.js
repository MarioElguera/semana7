function openTab(evt, seccionName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(seccionName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

function validateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 9);
    const txtValue = document.getElementById('randomNumber').value;

    if (randomNumber == txtValue) {
        document.getElementById("mensajeExito").innerHTML = "Felicitaciones ganaste."
    } else {
        document.getElementById("mensajeExito").innerHTML = "Oops perdiste."
    }
}

function validateInput(input) {
    let value = input.value;
    if (value.length > 1) {
        input.value = value.slice(0, 1);
    }
    if (!/^\d$/.test(input.value)) {
        input.value = '';
    }
}