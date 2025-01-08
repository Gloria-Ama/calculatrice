/*const calculatrice=document.querySelector(".calculatrice")
calculatriceText=calculatrice.innerText
const ecran=document.getElementById("ecran")
const touche=document.querySelector("#touche")
const deg=document.querySelector("#deg")
const shift=document.querySelector("#shift")
const ans=document.querySelector("#ans")
const paren1=document.querySelector("#paren1")
const paren2=document.querySelector("#paren2")
const expo=document.querySelector("#expo")
const ln=document.querySelector("#ln")
const sin=document.querySelector("#sin")
const Del1=document.querySelector("#Del")
const xenieme=document.querySelector("#xenieme")
const log1=document.querySelector("#log")
const cos=document.querySelector("#cos")
const facto=document.querySelector("#facto")
const pi1=document.querySelector("#pi")
const tan=document.querySelector("#tan")
const racine=document.querySelector("#racine")
const carre=document.querySelector("#carre")
const exponent=document.querySelector("#exponent")
const zero=document.querySelector("#zero")
const un=document.querySelector("#un")
const deux=document.querySelector("#deux")
const trois=document.querySelector("#trois")
const quatre=document.querySelector("#quatre")
const cinq=document.querySelector("#cinq")
const six=document.querySelector("#six")
const sept=document.querySelector("#sept")
const huit=document.querySelector("#huit")
const neuf=document.querySelector("#neuf")
const poind=document.querySelector("#poind")
const egale=document.getElementById("egale")
const plus=document.querySelector("#plus")
const moins=document.querySelector("#moins")
const fois=document.querySelector("#fois")
const div=document.querySelector("#div")
const faux=document.querySelector("#faux")
 
/*function ajouter(){
    const x=document.createElement("button")
    x.classList.add("bou")
    x.id="un"
    x.innerText="1"
    console.log(x)
    ecran.appendChild(x)

}

egale.addEventListener("click",ajouter)
un.addEventListener("click",function(){
    ecran.innerText+="1"
})
*/

/*function log (){
 screen.value=Math.log(screen.value);
}
document.getElementById("pi").addEventListener("click",function pi(){
    π=3.14159265359
})
document.getElementById("expo").addEventListener("click",function (){
    e=2.71828182846
})
document.getElementById("sin").addEventListener("click",function sin1(){
    ecran.innerText=Math.sin()
})

let ok=false
document.querySelectorAll(".lisible").forEach(boutton => {
    boutton.addEventListener("click",()=>{
        if (ok){
            ecran.innerHTML=""
        }
        if (boutton.innerHTML=="⌫") {
            ecran.innerText=""
        }
        else if (boutton.innerHTML=="="){
            try {
                ecran.innerText=eval(ecran.innerText)
            } catch (error) {
                ecran.innerHTML="Error"
                ok=true
            }
        }
        else{
            ecran.innerText+=boutton.innerText
            ok=false
        }
    })
});

facto.addEventListener("click", function() {
    num = parseInt(ecran.innerText);
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

document.getElementById("Del").addEventListener("click",function deleteLast() {
    ecran.innerText = ecran.innerText.slice(0, -1);
})

document.getElementById("deg").addEventListener("click", function() {
    let button = document.getElementById("deg");
    if (button.textContent.trim() === "deg") {
        button.textContent = "rad";
        return degrees*(Math.PI/180);
    } else {
        button.textContent = "deg";
    }
});
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

/*let shiftActive = false;
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
sin.addEventListener("click", function() {
    let value = parseFloat(ecran.innerText);
    if (shiftActive ) {
        ecran.innerText = Math.asin(value);
    } else {
        ecran.innerText = Math.sin(value);
    }
}); */

/*sin.addEventListener("click", function() {
    let value = parseFloat(ecran.innerText);
    value = degreesToRadians(value); // Conversion en radians
    if (shiftActive) {
        ecran.innerText = Math.asin(value);
    } else {
        ecran.innerText = Math.sin(value);
    }
});

cos.addEventListener("click", function() {
    let value = parseFloat(ecran.innerText);
    value = degreesToRadians(value); // Conversion en radians
    if (shiftActive) {
        ecran.innerText = Math.acos(value);
    } else {
        ecran.innerText = Math.cos(value);
    }
});

tan.addEventListener("click", function() {
    let value = parseFloat(ecran.innerText);
    value = degreesToRadians(value); // Conversion en radians
    if (shiftActive) {
        ecran.innerText = Math.atan(value);
    } else {
        ecran.innerText = Math.tan(value);
    }
});

function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}

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
});*/

const calculatrice = document.querySelector(".calculatrice");
const ecran = document.getElementById("ecran");
const touche = document.querySelector("#touche");
const deg = document.querySelector("#deg");
const shift = document.querySelector("#shift");
const ans = document.querySelector("#ans");
const paren1 = document.querySelector("#paren1");
const paren2 = document.querySelector("#paren2");
const expo = document.querySelector("#expo");
const ln = document.querySelector("#ln");
const sin = document.querySelector("#sin");
const Del1 = document.querySelector("#Del");
const xenieme = document.querySelector("#xenieme");
const log1 = document.querySelector("#log");
const cos = document.querySelector("#cos");
const facto = document.querySelector("#facto");
const pi1 = document.querySelector("#pi");
const tan = document.querySelector("#tan");
const racine = document.querySelector("#racine");
const carre = document.querySelector("#carre");
const exponent = document.querySelector("#exponent");
const zero = document.querySelector("#zero");
const un = document.querySelector("#un");
const deux = document.querySelector("#deux");
const trois = document.querySelector("#trois");
const quatre = document.querySelector("#quatre");
const cinq = document.querySelector("#cinq");
const six = document.querySelector("#six");
const sept = document.querySelector("#sept");
const huit = document.querySelector("#huit");
const neuf = document.querySelector("#neuf");
const point = document.querySelector("#point");
const egale = document.getElementById("egale");
const plus = document.querySelector("#plus");
const moins = document.querySelector("#moins");
const fois = document.querySelector("#fois");
const div = document.querySelector("#div");
const faux = document.querySelector("#faux");

let shiftActive = false;
let ok = false;
let lastResult = 0;

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}

document.querySelectorAll(".lisible").forEach(boutton => {
    boutton.addEventListener("click", () => {
        if (ok) {
            ecran.innerHTML = "";
        }
        if (boutton.innerHTML == "⌫") {
            ecran.innerText = "";
        } else if (boutton.innerHTML == "=") {
            try {
                lastResult = eval(ecran.innerText);
                ecran.innerText = lastResult;
            } catch (error) {
                ecran.innerHTML = "Erreur";
                ok = true;
            }
        } else {
            ecran.innerText += boutton.innerText;
            ok = false;
        }
    });
});

facto.addEventListener("click", function() {
    let num = parseInt(ecran.innerText);
    if (!isNaN(num)) {
        let f = 1;
        for (let i = 1; i <= num; i++) {
            f *= i;
        }
        ecran.innerText = f;
    } else {
        ecran.innerText = 'Erreur';
    }
});

egale.addEventListener("click", function() {
    try {
        lastResult = eval(ecran.innerText);
        ecran.innerText = lastResult;
    } catch (error) {
        ecran.innerText = 'Erreur';
    }
});

document.getElementById("Del").addEventListener("click", function deleteLast() {
    ecran.innerText = ecran.innerText.slice(0, -1);
});

document.getElementById("deg").addEventListener("click", function() {
    let button = document.getElementById("deg");
    if (button.textContent.trim() === "deg") {
        button.textContent = "rad";
    } else {
        button.textContent = "deg";
    }
});

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

sin.addEventListener("click", function() {
    let value = parseFloat(ecran.innerText);
    if (!isNaN(value)) {
        if (shiftActive) {
            let result = Math.asin(value);
            ecran.innerText = `sin⁻¹(${value}) = ${radiansToDegrees(result)}`; // Conversion en degrés
        } else {
            ecran.innerText = `sin(${value})`;
            value = degreesToRadians(value); // Conversion en radians
            ecran.innerText = Math.sin(value);
        }
    } else {
        ecran.innerText = 'Erreur';
    }
});

cos.addEventListener("click", function() {
    let value = parseFloat(ecran.innerText);
    if (!isNaN(value)) {
        if (shiftActive) {
            let result = Math.acos(value);
            ecran.innerText = `cos⁻¹(${value}) = ${radiansToDegrees(result)}`; // Conversion en degrés
        } else {
            ecran.innerText = `cos(${value})`;
            value = degreesToRadians(value); // Conversion en radians
            ecran.innerText = Math.cos(value);
        }
    } else {
        ecran.innerText = 'Erreur';
    }
});

tan.addEventListener("click", function() {
    let value = parseFloat(ecran.innerText);
    if (!isNaN(value)) {
        if (shiftActive) {
            let result = Math.atan(value);
            ecran.innerText = `tan⁻¹(${value}) = ${radiansToDegrees(result)}`; // Conversion en degrés
        } else {
            ecran.innerText = `tan(${value})`;
            value = degreesToRadians(value); // Conversion en radians
            ecran.innerText = Math.tan(value);
        }
    } else {
        ecran.innerText = 'Erreur';
    }
});

document.getElementById("pi").addEventListener("click", function() {
    ecran.innerText += Math.PI;
});

document.getElementById("expo").addEventListener("click", function() {
    ecran.innerText += Math.E;
});

document.getElementById("log").addEventListener("click", function() {
    let value = parseFloat(ecran.innerText);
    if (!isNaN(value)) {
        ecran.innerText = `log(${value})`;
        ecran.innerText = Math.log10(value); // Utilisation de log10 pour le logarithme de base 10
    } else {
        ecran.innerText = 'Erreur';
    }
});

document.getElementById("ln").addEventListener("click", function() {
    let value = parseFloat(ecran.innerText);
    if (!isNaN(value)) {
        ecran.innerText = `ln(${value})`;
        ecran.innerText = Math.log(value); // Utilisation de log pour le logarithme naturel
    } else {
        ecran.innerText = 'Erreur';
    }
});

document.getElementById("racine").addEventListener("click", function() {
    let value = parseFloat(ecran.innerText);
    if (!isNaN(value)) {
        ecran.innerText = `√(${value})`;
        ecran.innerText = Math.sqrt(value); // Calcul de la racine carrée
    } else {
        ecran.innerText = 'Erreur';
    }
});

document.getElementById("carre").addEventListener("click", function() {
    let value = parseFloat(ecran.innerText);
    if (!isNaN(value)) {
        ecran.innerText = `${value}²`;
        ecran.innerText = Math.pow(value, 2); // Calcul du carré
    } else {
        ecran.innerText = 'Erreur';
    }
});

document.getElementById("xenieme").addEventListener("click", function() {
    let base = parseFloat(ecran.innerText);
    ecran.innerText = ""; // Effacer l'écran pour entrer l'exposant
    egale.addEventListener("click", function() {
        let exponent = parseFloat(ecran.innerText);
        if (!isNaN(base) && !isNaN(exponent)) {
            ecran.innerText = `${base}^${exponent}`;
            ecran.innerText = Math.pow(base, exponent); // Calcul de l'exposant
        } else {
            ecran.innerText = 'Erreur';
        }
    }, { once: true });
});


document.getElementById("ans").addEventListener("click", function() {
    ecran.innerText += lastResult; // Utilisation du dernier résultat
});
