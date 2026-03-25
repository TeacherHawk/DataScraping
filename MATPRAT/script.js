async function loadJSON() {
    const response = await fetch('../JSONFILER/Oppskrifter.json');

    if (!response.ok) {
        throw new Error('Failed to load JSON');
    }

    const data = await response.json();
    return data;
}

async function main() {
    try {
        const dataArray = await loadJSON();
        let main = document.querySelector("main");
        
            dataArray.forEach(oppskrift => {
                 let div = document.createElement("div");
            div.innerHTML = `
            <h2>${oppskrift["tittel"]}</h2>
            <img src="${oppskrift["bilde"]}" alt="Bilde av matrett">
            <table>
                <tr>
                    <th>Rating:</th>
                    <td>${oppskrift["rating"]}</td>
                </tr>
                 <tr>
                    <th>Difficulty:</th>
                    <td>${oppskrift["vanskelighetsgrad"]}</td>
                </tr>
                 <tr>
                    <th>Time:</th>
                    <td>${oppskrift["tidsbruk"]}</td>
                </tr>
            </table>
        </div>`;
            main.appendChild(div)
            });
        
    } catch (error) {
        console.error(error);
    }
}
main();

