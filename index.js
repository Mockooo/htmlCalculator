// Made by Mocko
// Author: Mocko
// Date: 11.04.2023
// Title: Calculator
// Dislaimer: Made this High 420 keep it lit Guys

const Rechnung = document.querySelector('.Rechnung');
const Ergebnis = document.querySelector('.Ergebnis');

let R = "";
let M2 = "";

function Rechnungen(Taste) {
    if (Taste == "KlammerAuf") {Taste = "("}
    if (Taste == "KlammerZu") {Taste = ")"}

    if (Taste == "=") {
        try {
            eval(R); 
        } catch (e) {
            if (e instanceof SyntaxError) {
                Ergebnis.innerHTML = "MATH ERROR";
            }
        }
        Ergebnis.innerHTML = "= "+eval(R);
    }
    else if (Taste == "(") {
        if (M2 != "+" || M2 != "-" || M2 != "*" || M2 != "/") {
            M2 = Taste;
            Taste = "*(";
            R = R+Taste;
            Rechnung.innerHTML = R;
        }
    }
    else if (Taste == ")" && M2 == "(") {
        Taste = "0)";
    }
    else if (Taste == "Clear") {
        R = ""
        M2 = ""
        Rechnung.innerHTML = "";
        Ergebnis.innerHTML = "";
    } 
    else {
        R = R+Taste;
        Rechnung.innerHTML = R;
        M2 = Taste;
    }
}