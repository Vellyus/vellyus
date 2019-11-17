const voiceList = document.querySelector('#voiceList')
const txtInput = document.querySelector('#txtInput')
const btnSpeak = document.querySelector('#btnSpeak')

const tts = window.speechSynthesis;
let voices = [];

GetVoices();

if (speechSynthesis !== undefined) {
    speechSynthesis.onvoiceschanged = GetVoices;
}

btnSpeak.addEventListener('click', () => {
    let toSpeak = new SpeechSynthesisUtterance(txtInput.value);
    let selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
        if (voice.name === selectedVoiceName) {
            toSpeak.voice = voice;
        }
    });
    tts.speak(toSpeak);
});

function GetVoices() {
    voices = tts.getVoices();
    voiceList.innerHTML = '';
    voices.forEach((voice) => {
        let listItem = document.createElement('option');
        listItem.textContent = voice.name;
        listItem.setAttribute('data-lang', voice.lang);
        listItem.setAttribute('data-name', voice.name);
        voiceList.appendChild(listItem);
    });

    voiceList.selectedIndex = 0;
}

const btnPause = document.querySelector('#pause');
const btnResume = document.querySelector('#resume');
const btnStop = document.querySelector('#stop');

btnPause.addEventListener('click', () => {
    speechSynthesis.pause();
});

btnResume.addEventListener('click', () => {
    speechSynthesis.resume();
});

btnStop.addEventListener('click', () => {
    speechSynthesis.cancel();
});
