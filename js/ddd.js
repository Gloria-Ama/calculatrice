// Sélection des éléments DOM
const calculatrice = document.querySelector(".calculatrice");
const ecran = document.getElementById("ecran");

// Autres sélecteurs d'éléments
const deg = document.querySelector("#deg");
const shift = document.querySelector("#shift");
const sin = document.querySelector("#sin");
const cos = document.querySelector("#cos");
const tan = document.querySelector("#tan");
const log1 = document.querySelector("#log");
const ln = document.querySelector("#ln");
const facto = document.querySelector("#facto");
const egale = document.getElementById("egale");
const Del1 = document.querySelector("#Del");

// Variable pour gérer l'état du bouton shift
let shiftActive = false;

// Fonction pour convertir les degrés en radians
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Fonction pour convertir les radians en degrés
function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}

// Mise à jour des boutons en fonction de l'état du bouton shift
document.getElementById("shift").addEventListener("click", function() {
    shiftActive = !shiftActive;
    if (shiftActive) {
        sin.textContent = "sin⁻¹";
        cos.textContent = "cos⁻¹";
        tan.textContent = "tan⁻¹";
        log1.textContent = "10^x";
        ln.textContent = "e^x";
    } else {
        sin.textContent = "sin";
        cos.textContent = "cos";
        tan.textContent = "tan";
        log1.textContent = "log";
        ln.textContent = "ln";
    }
});

// Ajout des écouteurs d'événements pour les fonctions trigonométriques
sin.addEventListener("click", function() {
    let value = parseFloat(ecran.innerText);
    value = degreesToRadians(value); // Conversion en radians
    if (shiftActive) {
        let result = Math.asin(value);
        ecran.innerText = radiansToDegrees(result); // Conversion en degrés
    } else {
        ecran.innerText = Math.sin(value);
    }
});

cos.addEventListener("click", function() {
    let value = parseFloat(ecran.innerText);
    value = degreesToRadians(value); // Conversion en radians
    if (shiftActive) {
        let result = Math.acos(value);
        ecran.innerText = radiansToDegrees(result); // Conversion en degrés
    } else {
        ecran.innerText = Math.cos(value);
    }
});

tan.addEventListener("click", function() {
    let value = parseFloat(ecran.innerText);
    value = degreesToRadians(value); // Conversion en radians
    if (shiftActive) {
        let result = Math.atan(value);
        ecran.innerText = radiansToDegrees(result); // Conversion en degrés
    } else {
        ecran.innerText = Math.tan(value);
    }
});

// Ajout des écouteurs d'événements pour les autres boutons
facto.addEventListener("click", function() {
    let num = parseInt(ecran.innerText);
    if (!isNaN(num)) {
        ecran.innerText = num + "!";
    } else {
        ecran.innerText = 'Erreur';
    }
});

egale.addEventListener("click", function() {
    if (num !== null) {
        let f = 1;
        for (let i = 1; i <= num; i++) {
            f *= i;
        }
        ecran.innerText = f;
    } else {
        try {
            ecran.innerText = eval(ecran.innerText);
        } catch (error) {
            ecran.innerText = 'Erreur';
        }
    }
});

Del1.addEventListener("click", function deleteLast() {
    ecran.innerText = ecran.innerText.slice(0, -1);
});

deg.addEventListener("click", function() {
    let button = document.getElementById("deg");
    if (button.textContent.trim() === "deg") {
        button.textContent = "rad";
    } else {
        button.textContent = "deg";
    }
});

// Ajout des écouteurs d'événements pour les touches numériques et opérateurs
document.querySelectorAll(".lisible").forEach(button => {
    button.addEventListener("click", () => {
        if (ok) {
            ecran.innerHTML = "";
        }
        if (button.innerHTML == "⌫") {
            ecran.innerText = "";
        } else if (button.innerHTML == "=") {
            try {
                ecran.innerText = eval(ecran.innerText);
            } catch (error) {
                ecran.innerHTML = "Erreur";
                ok = true;
            }
        } else {
            ecran.innerText += button.innerText;
            ok = false;
        }
    });
});
