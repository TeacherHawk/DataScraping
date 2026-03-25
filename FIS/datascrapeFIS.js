let elements = document.querySelectorAll(".bleeding-edges ");
let arr = [];
elements.forEach(el => {
    let text = el.innerHTML.toString().split(`\n`);
    arr.push(text);
});
console.log(arr);

arr.forEach(element => {
    element.splice(0, 4)
    element.splice(1, 2)
    element.splice(2, 5)
    element.splice(3, 4)
    element.splice(4, 5)
    element.splice(5, 5)
    element.splice(6, 3)
});
let atleter = [];
let attributes = [
    "FIS code",
    "Athlete",
    "Nation",
    "Birthdate",
    "Gender",
    "Club"]
arr.forEach(element => {
    let atlet = {};
    for (let i = 0; i < element.length; i++) {
        if (i == 1) {
            let x = element[i].substring(0, element[i].length - 6);;
            atlet[attributes[i]] = x.trim()
        }
        else if (i == 5) {
            let x = element[i].substring(
                element[i].indexOf(">") + 1,
                element[i].lastIndexOf("<"));
            atlet[attributes[i]] = x.substring(
                x.indexOf(">") + 1,
                x.lastIndexOf("<"))
        }
        else {
            atlet[attributes[i]] = element[i].substring(
                element[i].indexOf(">") + 1,
                element[i].lastIndexOf("<"))
        }

    }
    atleter.push(atlet);
});
console.log(atleter);



