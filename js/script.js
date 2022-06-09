const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

// let utterance = new SpeechSynthesisUtterance("Hello world!");
// speechSynthesis.speak(utterance);

// function speak(message) {
//   var msg = new SpeechSynthesisUtterance(message);
//   var voices = window.speechSynthesis.getVoices();
//   msg.voice = voices[0];
//   window.speechSynthesis.speak(msg);
// }
// speak("Hello, world");
// speak("Good Morning!")