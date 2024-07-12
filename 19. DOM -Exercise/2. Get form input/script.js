function getFormValue() {
    let el = document.getElementById("form");
    for (let i = 0; i < el.length; i++) {
        if (el.elements[i].value != "Submit") {
            alert(el.elements[i].value);
        }
    }
}
