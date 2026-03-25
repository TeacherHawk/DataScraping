let a = document.querySelectorAll(".items-start");
let hytter = [];
a.forEach(area => {
    let omrade = area.innerText.split("\n");
    hytter.push(omrade);
});

console.log(hytter);

let hyttScrape = [
    [
        "Hardangervidda",
        "Solheimstulen",
        "Rauhelleren",
        "Mårbu",
        "Litlos",
        "Sandhaug",
        "Stavali turisthytte",
        "Krækkja",
        "Kalhovd Turisthytte",
        "Mogen Turisthytte",
        "Gaustatoppen turisthytte"
    ],
    [
        "Jotunheimen",
        "Fannaråkhytta",
        "Fondsbu",
        "Glitterheim",
        "Gjendebu",
        "Skogadalsbøen",
        "Gjendesheim",
        "Leirvassbu 150 år"
    ],
    [
        "Rondane og Dovre",
        "Grimsdalshytta",
        "Bjørnhollia",
        "Snøheim",
        "Rondvassbu",
        "Vangshaugen"
    ],
    [
        "Trollheimen og Sylan",
        "Trollheimshytta",
        "Gjevilvasshytta",
        "Jøldalshytta",
        "Todalshytta",
        "Storerikvollen",
        "Nedalshytta",
        "Schulzhytta"
    ],
    [
        "Skarvheimen",
        "Iungsdalshytta",
        "Aurlandsdalen Turisthytte",
        "Geiterygghytta",
        "Finsehytta"
    ],
    [
        "Ryfylke",
        "Haukeliseter",
        "Stranddalen turisthytte",
        "Lysefjorden turisthytte",
        "Gramstadtunet"
    ],
    [
        "Breheimen med Jostedalsbreen",
        "Sota Sæter",
        "Nørdstedalseter",
        "Tungestølen"
    ],
    [
        "Langsua og Femundsmarka",
        "Liomseter",
        "Svukuriset"
    ],
    [
        "Oslo og Drammen",
        "Eiksetra",
        "Sæteren Gård",
        "Breivoll Gård",
        "Kobberhaughytta"
    ]
];
hytter = [];
hyttScrape.forEach(hytteOm => {
    for (let i = 1; i < hytteOm.length; i++) {
        let hytte = {}
        hytte["omrade"] = hytteOm[0]
        hytte["navn"] = hytteOm[i]
        hytter.push(hytte);
    }
});