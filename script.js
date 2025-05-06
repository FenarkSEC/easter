const gateArea = document.getElementById('gate');
if (gateArea) {
    gateArea.addEventListener('click', () => {
        window.location.href = 'mausoleum.html';
    });
}

const secretLink = document.getElementById('secretLink');
if (secretLink) {
    secretLink.addEventListener('click', () => {
        const password = prompt('Enter password to access secret page:');
        if (password === 'openSesame') {
            window.location.href = 'secret.html';
        } else {
            alert('Incorrect password.');
        }
    });
} 