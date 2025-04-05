document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById("textInput");
    const charCount = document.getElementById("charCount");

    textInput.addEventListener('input', () => {
        const maxLength = 100;
        console.log(textInput.value);
        //If the length exceeds it still keeps the original 100 words by trimming it using substr method.
        if (textInput.value.length > maxLength) {
            textInput.value = textInput.value.substring(0, maxLength);
        }
        const remaining = maxLength - textInput.value.length;
        charCount.innerText = `Characters remaining: ${remaining}`;
    });
});
