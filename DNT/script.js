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
        
        
    } catch (error) {
        console.error(error);
    }
}
main();

