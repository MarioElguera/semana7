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

function validateRandomNumber(number) {
    const randomNumber = Math.floor(Math.random() * 9);
    console.log("randomNumber =>", randomNumber);

    if (randomNumber === number) {
        document.getElementById("mensajeExito").innerHTML = "Felicitaciones ganaste."
    } else {
        document.getElementById("mensajeExito").innerHTML = "Oops perdiste."
    }
}