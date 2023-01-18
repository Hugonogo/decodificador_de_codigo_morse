let criptBotton = document.getElementById('criptografar');
let decriptoBotton = document.getElementById('traduzir');


let text = document.querySelector("#criptext");
let resultText = document.querySelector("#criptresult");


function criptografar() {
    let morse = text.value;
    //Alfabeto
    morse = morse.replace(/A/gi, ".-");
    morse = morse.replace(/B/gi, "-...");
    morse = morse.replace(/C/gi, "-.-.");
    morse = morse.replace(/D/gi, "-..");
    morse = morse.replace(/E/gi, ".");
    morse = morse.replace(/F/gi, "..-.");
    morse = morse.replace(/G/gi, "--.");
    morse = morse.replace(/H/gi, "....");
    morse = morse.replace(/I/gi, "..");
    morse = morse.replace(/J/gi, ".---");
    morse = morse.replace(/K/gi, "-.-");
    morse = morse.replace(/L/gi, ".-..");
    morse = morse.replace(/M/gi, "--");
    morse = morse.replace(/N/gi, "-.");
    morse = morse.replace(/O/gi, "---");
    morse = morse.replace(/P/gi, ".--.");
    morse = morse.replace(/Q/gi, "--.-");
    morse = morse.replace(/R/gi, ".-.");
    morse = morse.replace(/S/gi, "...");
    morse = morse.replace(/T/gi, "-");
    morse = morse.replace(/U/gi, "..-");
    morse = morse.replace(/V/gi, "...-");
    morse = morse.replace(/W/gi, ".--");
    morse = morse.replace(/X/gi, "-..-");
    morse = morse.replace(/Y/gi, "-.--");
    morse = morse.replace(/Z/gi, "--..");
    morse = morse.replace(/ /gi, "/");

    //Número
    morse = morse.replace(/1/gi, ".----");
    morse = morse.replace(/2/gi, "..---");
    morse = morse.replace(/3/gi, "...--");
    morse = morse.replace(/4/gi, "....-");
    morse = morse.replace(/5/gi, ".....");
    morse = morse.replace(/6/gi, "-....");
    morse = morse.replace(/7/gi, "--...");
    morse = morse.replace(/8/gi, "---..");
    morse = morse.replace(/9/gi, "----.");
    morse = morse.replace(/0/gi, "-----");
    
    resultText.innerText = morse;

}

function decriptografar() {
    let demorse = text.value;
    //Alfabeto
    demorse.replace(".", "dit");
    demorse.replace("-", "dah");
    demorse = demorse.replace(/ditdah/gi , "A");
    demorse = demorse.replace(/dahditditdit/gi , "B");
    demorse = demorse.replace(/dahditdahdit/gi , "C");
    demorse = demorse.replace(/dahditdit/gi , "D");
    demorse = demorse.replace(/dit/gi , "E");
    demorse = demorse.replace(/ditditdahdit/gi , "F");
    demorse = demorse.replace(/dahdahdit/gi , "G");
    demorse = demorse.replace(/ditditditdit/gi , "H");
    demorse = demorse.replace(/ditdit/gi , "I");
    demorse = demorse.replace(/ditdahdahdah/gi , "J");
    demorse = demorse.replace(/dahditdah/gi , "K");
    demorse = demorse.replace(/ditdahditdit/gi , "L");
    demorse = demorse.replace(/dahdah/gi , "M");
    demorse = demorse.replace(/dahdit/gi , "N");
    demorse = demorse.replace(/dahdahdah/gi , "O");
    demorse = demorse.replace(/ditdahdahdit/gi , "P");
    demorse = demorse.replace(/dahdahditdah/gi , "Q");
    demorse = demorse.replace(/ditdahdit/gi , "R");
    demorse = demorse.replace(/ditditdit/gi , "S");
    demorse = demorse.replace(/dah/gi , "T");
    demorse = demorse.replace(/ditditdah/gi , "U");
    demorse = demorse.replace(/ditditditdah/gi , "V");
    demorse = demorse.replace(/ditdahdah/gi , "W");
    demorse = demorse.replace(/dahditditdah/gi , "X");
    demorse = demorse.replace(/dahditdahdah/gi , "Y");
    demorse = demorse.replace(/dahdahditdit/gi , "Z");
    demorse = demorse.replace(/\//gi, " ");

    //Números
    demorse = demorse.replace(/ditdahdahdahdah/gi, "1");
    demorse = demorse.replace(/ditditdahdahdah/gi, "2");
    demorse = demorse.replace(/ditditditdahdah/gi, "3");
    demorse = demorse.replace(/ditditditditdah/gi, "4");
    demorse = demorse.replace(/ditditditditdit/gi, "5");
    demorse = demorse.replace(/dahditditditdit/gi, "6");
    demorse = demorse.replace(/dahdahditditdit/gi, "7");
    demorse = demorse.replace(/dahdahdahditdit/gi, "8");
    demorse = demorse.replace(/dahdahdahdahdit/gi, "9");
    demorse = demorse.replace(/dahdahdahdahdah/gi, "0");

    resultText.innerText = demorse;

}

criptBotton.addEventListener('click', criptografar);
decriptoBotton.addEventListener('click', decriptografar);
