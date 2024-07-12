function createTable() {
    let rowNumber = window.prompt("Input number of rows", 1);

    let columnNumber = window.prompt("Input number of columns", 1);

    for (let row = 0; row < parseInt(rowNumber, 10); row++) {
        // Inserting a new row at index r in the table
        let x = document.getElementById("myTable").insertRow(row);
        // Looping through columns
        for (let col = 0; col < parseInt(columnNumber, 10); col++) {
            // Inserting a new cell at index c in the current row
            let y = x.insertCell(col);
            // Setting the inner HTML content of the cell
            y.innerHTML = `Row-${row} Column- ${col}`;
        }
    }
}
