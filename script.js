

document.getElementById('favourite').addEventListener('click', (event) => {
  event.target.innerText ="Java it is my friend";
  let element_java =                document.getElementById('java');
element_java.style.color = '#3333ff';
element_java.style.backgroundColor = '#ccccff';

});

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

document.getElementById('button').addEventListener('click', (event) => {
  event.target.innerText ="";
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(getNumberOrString(document.getElementById('comment').value)));

});
