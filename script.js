document.addEventListener('DOMContentLoaded', function () {
    const clickToConvert = document.getElementById('click_to_convert');
    const convertText = document.getElementById('convert_text');
    let speechRecognition = true;

    if ('SpeechRecognition' in window) {
        const recognition = new SpeechRecognition();
        recognition.interimResults = true;

        recognition.addEventListener('result', e => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');
            convertText.value = transcript;
        });

        clickToConvert.addEventListener('click', function () {
            if (speechRecognition) {
                recognition.start();
            }
        });
    } else {
        clickToConvert.disabled = true;
        clickToConvert.textContent = "Speech recognition not available";
    }
});
