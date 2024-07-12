let boldItems;
window.onload = getBoldItems();

function getBoldItems() {
    boldItems = document.getElementsByTagName("strong");
}

function highlight() {
    for (let i = 0; i < boldItems.length; i++) {
        boldItems[i].style.color = "red";
    }
}

function returnNormal() {
    for (let i = 0; i < boldItems.length; i++) {
        boldItems[i].style.color = "black";
    }
}
