function changeContent() {
    let rowNumber = window.prompt("Input the Row number(0,1,2)", "0");

    let columnNumner = window.prompt("Input the Column number(0,1)", "0");

    let newContent = window.prompt("Input the Cell content");

    let replace =
        document.getElementById("myTable").rows[parseInt(rowNumber, 10)].cells;

    replace[parseInt(columnNumner, 10)].innerHTML = newContent;
}
