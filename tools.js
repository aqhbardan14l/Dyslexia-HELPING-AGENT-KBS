function runAgent() {

    let input = document.getElementById("userInput").value.toLowerCase().trim();

    if (input === "") {
        document.getElementById("outputText").innerHTML =
            "⚠️ Please enter text first.";
        return;
    }

    document.getElementById("outputText").innerHTML =
        "🧠 Processing your input...";

    // simulate processing delay (feel more AI)
    setTimeout(function () {

        let response = generateResponse(input);

        document.getElementById("outputText").innerHTML = response;

    }, 600);
}
