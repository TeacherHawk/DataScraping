async function loadJSON() {
    const response = await fetch('../JSONFILER/FruktOgGront.json');

    if (!response.ok) {
        throw new Error('Failed to load JSON');
    }

    const data = await response.json();
    return data;
}

async function main() {
    try {
        const dataArray = await loadJSON();
        let meny = document.querySelector("#meny");

        for (let egenskap in dataArray) {
            let button = document.createElement("button");
            button.innerText = egenskap;
            button.addEventListener("click", () =>{
                let liste = document.querySelector("#liste");
                liste.innerHTML = "";
                dataArray[egenskap].forEach(element => {
                    let div = document.createElement("div");
                    let img = document.createElement("img");
                    let h2 = document.createElement("h2");
                    img.src = element["BildeURL"];
                    h2.innerHTML = element["Navn"];
                    div.appendChild(h2);
                    div.appendChild(img);
                    liste.appendChild(div);
                });
            });
            meny.appendChild(button)
        }

    } catch (error) {
        console.error(error);
    }
}
main();
