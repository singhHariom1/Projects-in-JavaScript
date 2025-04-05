document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');

    async function fetchQuote() {
        try {
            console.log("Fetching quote...");
    
            const proxy = "https://api.allorigins.win/get?url="; // Free CORS proxy
            const apiUrl = "https://zenquotes.io/api/random"; // Original API
    
            const response = await fetch(proxy + encodeURIComponent(apiUrl));
            const data = await response.json();
            const quoteData = JSON.parse(data.contents)[0];
    
            document.getElementById("quote").textContent = `"${quoteData.q}"`;
            document.getElementById("author").textContent = `- ${quoteData.a}`;
        } catch (error) {
            console.error("Error fetching quote:", error);
            document.getElementById("quote").textContent = "Failed to fetch quote. Please try again.";
            document.getElementById("author").textContent = "";
        }
    }
    
    

    if (generateBtn) {
        generateBtn.addEventListener('click', () => {
            console.log("Button clicked! Fetching quote...");
            fetchQuote();
        });
    } else {
        console.error("Button not found!");
    }
});
