// typewriter.js

const nombreUsuario = localStorage.getItem('nombre') || 'Invitado';
const welcomeMessage = `Bienvenido ${nombreUsuario}`;

let index = 0;
let isDeleting = false;

function type() {
    const currentText = welcomeMessage.slice(0, index + 1);
    document.getElementById("typewriter").textContent = currentText;

    if (!isDeleting) {
        index++;
    } else {
        index--;
    }

    if (index === welcomeMessage.length) {
        isDeleting = true;
    }

    if (index === 0 && isDeleting) {
        isDeleting = false;
    }

    setTimeout(type, 150);
}

type();
