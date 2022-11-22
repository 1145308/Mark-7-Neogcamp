var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/dolan.json"

function getTranslationURL(text){
    return serverURL + "?" +"text=" +text;
}

function errorHandler(error){
    console.log("error occured" ,error);
    alert("something wrong with the server! pls try after sometime")
}


function clickHandler() {
    // outputDiv.innerText = "ajabhbmmjabxjashcbjhvc " + txtInput.value; 
    var inputText = txtInput.value;

    //calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })  
    .catch(errorHandler)
};

btnTranslate.addEventListener("click" , clickHandler)
