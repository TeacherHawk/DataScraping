let arr = [document.querySelectorAll(".MediaImage_base-teaser__media-img__2l4MU"), document.querySelectorAll(".RecipeTeaser_recipe-teaser__title__Js_91"), document.querySelectorAll(".Rating_rating--dark___Dl8A"), document.querySelectorAll(".RecipeDetails_recipe-details__detail__ifvWl")];

let egenskaper = ["bilde", "tittel", "rating", "vanskelighetsgrad", "tidsbruk"];
let temp = [[], [], [], [], []];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (j % 2 != 0 && i == 0) {
            temp[i].push(arr[i][j].src);
        }
        else if (j % 2 != 0 && i == 3) {
            temp[i + 1].push(arr[i][j].innerText);
        }
        else {
            if (arr[i][j].innerText != "") {
                temp[i].push(arr[i][j].innerText);
            }
        }
    }
}
let oppskrifter = [];
for (let i = 0; i < 235; i++) {
    let oppskrift = {};
    for (let j = 0; j < egenskaper.length; j++) {
        oppskrift[egenskaper[j]] = temp[j][i];
    }
    oppskrifter.push(oppskrift)
}
console.log(oppskrifter);

