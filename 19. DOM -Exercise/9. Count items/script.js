function getOptions() {
    let mySelect = document.getElementById("mySelect");

    let outputText = "Number of items : ";
    let i;

    length = document.getElementById("mySelect").length;

    outputText = outputText + length;

    for (i = 0; i < mySelect.length; i++) {
        outputText = outputText + " " + mySelect.options[i].text;
    }

    alert(outputText);
}
