function getSize() {
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;

    document.getElementById("dimensions").innerHTML =
        "<h1>Width: " + width + " Height: " + height + "</h1>";
}
