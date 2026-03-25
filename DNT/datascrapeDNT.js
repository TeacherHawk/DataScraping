let a = document.querySelectorAll(".items-start");
let hytter = [];
a.forEach(area => {
    let omrade = area.innerText.split("\n");
    hytter.push(omrade);
});

console.log(hytter);

let hyttScrape = [
    [
        "Betjente hytter på Hardangervidda",
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
        "Betjente hytter i Jotunheimen",
        "Fannaråkhytta",
        "Fondsbu",
        "Glitterheim",
        "Gjendebu",
        "Skogadalsbøen",
        "Gjendesheim",
        "Leirvassbu 150 år"
    ],
    [
        "Betjente hytter i Rondane og Dovre",
        "Grimsdalshytta",
        "Bjørnhollia",
        "Snøheim",
        "Rondvassbu",
        "Vangshaugen"
    ],
    [
        "Betjente hytter i Trollheimen og Sylan",
        "Trollheimshytta",
        "Gjevilvasshytta",
        "Jøldalshytta",
        "Todalshytta",
        "Storerikvollen",
        "Nedalshytta",
        "Schulzhytta"
    ],
    [
        "Betjente hytter i Skarvheimen",
        "Iungsdalshytta",
        "Aurlandsdalen Turisthytte",
        "Geiterygghytta",
        "Finsehytta"
    ],
    [
        "Betjente hytter i Ryfylke",
        "Haukeliseter",
        "Stranddalen turisthytte",
        "Lysefjorden turisthytte",
        "Gramstadtunet"
    ],
    [
        "Betjente hytter Breheimen med Jostedalsbreen",
        "Sota Sæter",
        "Nørdstedalseter",
        "Tungestølen"
    ],
    [
        "Betjente hytter i Langsua og Femundsmarka",
        "Liomseter",
        "Svukuriset"
    ],
    [
        "Betjente hytter i nærheten av Oslo og Drammen",
        "Eiksetra",
        "Sæteren Gård",
        "Breivoll Gård",
        "Kobberhaughytta"
    ]
]