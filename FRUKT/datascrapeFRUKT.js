let fruktNavnEl = document.querySelectorAll("h2");
let fruktNavn = []
fruktNavnEl.forEach(el => {
    let text = el.innerText;
    fruktNavn.push(text);
}); 
fruktNavn.splice(0, 1);
fruktNavn.pop();
fruktNavn.pop();
let fruktIMGEl = document.querySelectorAll("img");
let FRUKTIMG = [];
fruktIMGEl.forEach(el => {
    let text = el.src;
    FRUKTIMG.push(text);
});
FRUKTIMG.splice(0, 4);
let Frukter = [];
let attributes = [
    "BildeURL",
    "Navn"]
for (let i = 0; i < fruktNavn.length; i++) {
    let frukt = {};
    frukt[attributes[0]] = FRUKTIMG[i];
    frukt[attributes[1]] = fruktNavn[i];
    Frukter.push(frukt);
}
console.log(Frukter);



