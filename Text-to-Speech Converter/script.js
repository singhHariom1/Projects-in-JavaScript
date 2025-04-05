addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const speakBtn = document.getElementById('speakBtn');

    speakBtn.addEventListener('click', () => {
        let text = textInput.value;
        if (!text) return;
        let speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
    })
})