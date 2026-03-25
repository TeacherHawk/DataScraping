async function loadJSON() {
    const response = await fetch('../JSONFILER/DNT.json');

    if (!response.ok) {
        throw new Error('Failed to load JSON');
    }

    const data = await response.json();
    return data;
}

async function main() {
    try {
        const dataArray = await loadJSON();
        let selecter = document.querySelector("select");
        let omrader = [];
        dataArray.forEach(hytte => {
            if(!omrader.includes(hytte["omrade"])){
                omrader.push(hytte["omrade"]);
                selecter.innerHTML += `<option>${hytte["omrade"]}</option>`;
            }
        });
        selecter.addEventListener("change", ()=>{
            document.querySelector("#hytteliste").innerHTML = "";
            dataArray.forEach(hytte => {
                if (hytte["omrade"] == selecter.value) {
                    document.querySelector("#hytteliste").innerHTML +=`<p>${hytte["navn"]}</p>` 
                }
            });
        });
    } catch (error) {
        console.error(error);
    }
}
main();

