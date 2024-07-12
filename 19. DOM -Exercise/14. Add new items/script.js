const input = document.createElement("input");
input.setAttribute("type", "text");
const addButton = document.createElement("button");
addButton.innerHTML = "Create New";

addButton.addEventListener("click", function () {
    const newItem = document.createElement("li");
    newItem.innerHTML = "New item";
    list.appendChild(newItem);
    input.value = "";
});

list.addEventListener("click", function (event) {
    if (event.target.tagName === "li") {
        const text = prompt("Enter new text:");
        event.target.innerHTML = text;
    }
});

app.appendChild(input);
app.appendChild(addButton);
