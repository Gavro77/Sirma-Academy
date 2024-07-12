function getAttributes() {
    let hrefValue = document.getElementById("someId").href;
    alert(`The value of the href attribute of the link is: ${hrefValue}`);

    let hreflangValue = document.getElementById("someId").hreflang;
    alert(
        `The value of the hreflang attribute of the link is: ${hreflangValue}`
    );

    let relValue = document.getElementById("someId").rel;
    alert(`The value of the rel attribute of the link is: ${relValue}`);

    let targetValue = document.getElementById("someId").target;
    alert(`The value of the target attribute of the link is : ${targetValue}`);

    var typeValue = document.getElementById("someId").type;
    alert(`The value of the type attribute of the link is : ${typeValue}`);
}
