let labelsA = document.querySelectorAll("a")
console.log(labelsA);
const isVisible = "is-visible";
var modal = document.getElementById("tvesModal");
var span = document.getElementsByClassName("close")[0];
var body = document.getElementsByTagName("body")[0];

labelsA[3].onclick = function () {
    modal.style.display = "block";

    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden";
}
labelsA[4].onclick = function () {
    modal.style.display = "block";

    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden";
}
labelsA[10].onclick = function () {
    modal.style.display = "block";

    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden";
}
labelsA[11].onclick = function () {
    modal.style.display = "block";

    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden";
}
span.onclick = function () {
    modal.style.display = "none";

    body.style.position = "inherit";
    body.style.height = "auto";
    body.style.overflow = "visible";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }
}
if (localStorage.getItem("userLang") == "en") {
    hbspt.forms.create({
        region: "na1",
        portalId: "8668139",
        formId: "2b9bffd8-5c57-4cbc-864d-9b3b80896790", target: "#modalCustomer", onFormSubmit: function ($form) { $('#policy-p').hide(); }
    });
} else {

    hbspt.forms.create({
        region: "na1",
        portalId: "8668139",
        cssClass: ".pruebaaaas",
        formId: "0aedd1a6-a84e-4087-90e9-50bb085d5075", target: "#modalCustomer", onFormSubmit: function ($form) { $('#policy-p').hide(); }
    });
}
let aaaaa = document.getElementsByClassName('pruebaaaas');
console.log(aaaaa);