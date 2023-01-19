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
    let msgConverted = [];
    //Alfabeto
    var alphabet = {  
   "-----":"0",
   ".----":"1",
   "..---":"2",
   "...--":"3",
   "....-":"4",
   ".....":"5",
   "-....":"6",
   "--...":"7",
   "---..":"8",
   "----.":"9",
   ".-":"a",
   "-...":"b",
   "-.-.":"c",
   "-..":"d",
   ".":"e",
   "..-.":"f",
   "--.":"g",
   "....":"h",
   "..":"i",
   ".---":"j",
   "-.-":"k",
   ".-..":"l",
   "--":"m",
   "-.":"n",
   "---":"o",
   ".--.":"p",
   "--.-":"q",
   ".-.":"r",
   "...":"s",
   "-":"t",
   "..-":"u",
   "...-":"v",
   ".--":"w",
   "-..-":"x",
   "-.--":"y",
   "--..":"z",
   "/":" ",
};
demorse.split("/").map(function (word) {
    word.split(" ").map(function (letter) {
        msgConverted.push(alphabet[letter]);
    });
    msgConverted.push(" ");
});
    resultText.innerText = msgConverted.join("");

}

criptBotton.addEventListener('click', criptografar);
decriptoBotton.addEventListener('click', decriptografar);
