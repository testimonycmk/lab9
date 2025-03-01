var entrybutton = document.getElementById('entrybutton');
var entryinput = document.getElementById('entryinput');
var textoutput = document.getElementById('textoutput');
function onClick() {
    alert('Testimony Chukwuemeka: ' + entryinput.value);
    textoutput.innerHTML = entryinput.value;
}
entrybutton.addEventListener('click', onClick);