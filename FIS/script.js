async function loadJSON() {
    const response = await fetch('../JSONFILER/NorskeAlpinister.json');

    if (!response.ok) {
        throw new Error('Failed to load JSON');
    }

    const data = await response.json();
    return data;
}

async function main() {
    try {
        const dataArray = await loadJSON();
        let hovedEl = document.querySelector("#hoved");
        let tabellEl = document.createElement("table");
        let theadEl = document.createElement("thead");
        let trEl = document.createElement("tr");

        for (let egenskap in dataArray[0]) {
            if (egenskap == "Nation") {
                let thEl = document.createElement("th");
                thEl.innerHTML = "Flag";
                trEl.appendChild(thEl);
            }
            let thEl = document.createElement("th");
            thEl.innerHTML = egenskap;
            trEl.appendChild(thEl);
        }

        theadEl.appendChild(trEl);
        tabellEl.appendChild(theadEl);
        let tbodyEl = document.createElement("tbody");

        dataArray.forEach(data => {
            let trEl = document.createElement("tr");
            for (let egenskap in data) {
                if (egenskap == "Nation") {
                    let imgEl = document.createElement("td");
                    imgEl.innerHTML = `<img src="https://flagsapi.com/${data[egenskap][0]+data[egenskap][1]}/shiny/64.png" alt="Flagg Bilde">`;
                    trEl.appendChild(imgEl);
                }
                let tdEl = document.createElement("td");
                tdEl.innerHTML = data[egenskap];
                trEl.appendChild(tdEl);
            }
            tbodyEl.appendChild(trEl);
        });
        
        tabellEl.appendChild(tbodyEl);
        hovedEl.appendChild(tabellEl);
    } catch (error) {
        console.error(error);
    }
}

main();
