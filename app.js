var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

btnTranslate.addEventListener("click", function clickEventHandler() {
  var inputText = textInput.value; // taking input
  console.log(inputText);

  // calling server for processing
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText; // output
    })
    .catch(function errorHandler(error) {
      console.log("error occured", error);
      alert("Something wrong with server! Try again after some time");
    });
});
