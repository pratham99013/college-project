document.addEventListener("DOMContentLoaded", () => {
    const analyzeButton = document.getElementById("analyzeButton");
    const userInput = document.getElementById("userInput");
    const output = document.getElementById("output");

    analyzeButton.addEventListener("click", () => {
        const inputText = userInput.value.trim();
        if (inputText) {
            output.textContent = `You entered: "${inputText}" (Analysis simulated for now!)`;
        } else {
            output.textContent = "Please enter some text to analyze.";
        }
    });
});
