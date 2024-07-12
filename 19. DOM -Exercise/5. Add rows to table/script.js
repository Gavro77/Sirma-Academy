function insertRow() {
    let table = document.getElementById("sampleTable").insertRow(0);

    let newCell1 = table.insertCell(0);

    let newCell2 = table.insertCell(1);

    newCell1.innerHTML = "New Cell1";

    newCell2.innerHTML = "New Cell2";
}
