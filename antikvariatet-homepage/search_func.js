var d = new Date();

const event_list = [
    {
        event: "KONSERT: Balkanfest med Igor Dunder og Fetterforeningen",
        tickets: true,
        date: d.setFullYear(2019, 12, 2),
        time: '20:00',
        info: `Det er så STAS at vi får avslutte høstsesongen med selveste Igor Dunder og Fetterforeningen! Balkanfest de lux! Igor og Fetterforeningen er en kombinasjon av gode venner og profesjonelle musikere som er glade i norske sanger og skjeve balkanrytmer. På albumene deres finner man tolkninger av sanger som Kråkevisa, Håvard Hedde og Gikk meg over sjø og land, Ali baba lillelam, og mye mer. På eget vis tar Igor og fetterne oss gjennom et landskap av norske sanger som har gjestet God Morgen Norge, NRK 1, 2 og 3 og det meste annet. Er de i godt humør, blir det rask dans og balkanfest i timevis. Er de i mindre godt humør, kan det bli treg og vakker musikk og nostalgisk melankoli i flere uker. Så gjør deg klar for en festkveld på Antikvariatet - her blir det stinn brakke! <br> Pris: 250,- kr`
    },
    {
        event: "QUIZ: Allmennquiz",
        tickets: true,
        date: 2019 - 12 - 03,
        time: '18:00', 
        info: `Karlsen-søstrene inviterer til ukentlig allmennquiz i bokbaren, med et solid knippe spørsmål innenfor alt av kategorier. Ta med 30 spenn i kontanter. Inntekter går til Life and Hope (lifeandhope.no).`
    },
    {
        event: "RELEASEKONSERT: Gunnhild Hasund",
        tickets: false,
        date: 2019 - 12 - 03,
        time: '21:00',
        info: `Gunnhild Hasund begynte å skrive låter i 11 års alderen. En naturlig låtskriver som skriver om det som skjer i livet hennes til en hver tid. Ufiltrert og rått. En veldig undring over verden, sitt eget følelsesliv og det sosiale spillet var da som nå kilden til sangtekstene. Budskapet og tematikken forsterkes av Gunnhilds vakre stemme som klinger fra de innerste kriker og kroker av sjelen hennes, til de innerste kriker og kroker av lytternes hjerte. Dette er sårbart, dette er vakkert, dette er ærlig! Gunnhild foretrekker å lage mørke og melankolske ballader. Noen ganger er de inspirert av drømmer hun har hatt. Sanger fra det innerste med drømmelandskapets forvridning av virkeligheten. Navnet Unwired viser til en følelse av å være avkoblet fra eget følelseliv og kropp. Ledningene er rett og slett ikke plugget i. Gjennom låtskrivingen føler hun seg hel igjen. 31 Oktober slippes første del av epn Unwired og 03 November kan du få med deg releasekonserten på Antikvariatet! <br><br> Med seg har Gunnhild: <br> Lena S. Hanssen - Korist, <br> Ingeborg Brun - Korist, <br> Gerardo de La Riva - Gitar, <br> Espen Warankov Godø - Piano.`
    },
    {
        event: "KONSERT: Malin Pettersen",
        tickets: true,
        date: '2019.12.04',
        time: '20:00', 
        info: `Siden slippet av sin første soloplate i fjor sommer har Malin Pettersen rukket å vinne Spellemannpris, bli nominert til musikkpris i USA og bli finalist i International Songwriting Competition. Etter en meget overbevisende showcase på Bylarm 2019 og en hektisk festivalsommer begir Malin seg i gang med slipp av nytt mini-album 11.oktober, som etterfølges omfattende turnering i Norge og USA. 04.november besøker hun Trondheim og Antikvariatet! Malin Pettersen fikk en pangstart på musikkarrieren da hun som 17-åring deltok i Idol i 2005, men har i løpet av det siste tiåret utviklet seg til å bli en av Norges viktigste Americana-navn. Hun har dukket opp på utgivelser til artister som Amund Maarud (offisiell side) og The Northern Belle, og hadde stor suksess med sitt eget band Lucky Lips som ga ut 3 kritikerroste album. <br> Malin Pettersen har også blitt en kjent og kjær stemme gjennom radioprogrammet "Kåbbåi" som med sin utstrakte sendetid på NRK P13 har gitt det Norske folk dypere innsikt i Countryen og Americanaens verden. Like før sommeren fikk vi en aldri så liten smakebit på ny musikk, med singelen «Pause». Etter hederlig omtale i The Rolling Stone Magazine, og kommende spillejobb på Americanafest i Nashville, er det tydelig at den internasjonale musikkscenen også har fått øynene opp for Malin Pettersen! <br> <br>
        Dørene åpner 19:00. Konsertstart 20:00.`
    },
    {
        event: "Lørdag på søndag!",
        tickets: false,
        date: '2019.12.08',
        time: '19:00', 
        info: `Siden 2013 har Lørdag på Søndag vært en institusjon i kultur-Trondheim. Etter søndagskonserten åpner vi opp scenen for kreti og pleti, og gir alle mulighet til å vise seg fram for et lydhørt publikum. Antikvariatet byr på piano, kontrabass, cajon, trompet, gitar, banjo og masse andre instrumenter, samt leskende drikke. Vi kjører Lørdag på Søndag hver eneste uke, uansett vær og føre!`
    },
    {
        event: "Supertorsdag! med IMPROschimpro",
        tickets: true,
        date: '2019.12.05',
        time: '19:00',
        info: `En mørk og stormfull torsdagskveld klokken 20:00, Hørtes der et improvisert skrik ... Improoperatørene sniker seg inn i bokbaren på Antikvariatet på torsdag. De har med seg øks og sorte masker. Tørr du å komme?Du bør passe deg mest for Ørjan, Steffen, Solrun, Janne og Lina. De kommer til å forhekse sinnene deres med helt improviserte monologer og blodige leker. Fredrik er der også for å mane frem mørke krefter bak tangentene. 
        <br>
        Portene åpner 19.00. 100,- i døra kontant eller per Vipps eller sjeler.`
    },
    {
        event: "PODCAST: Hodebry // Livsfarlig ulikhet",
        tickets: false,
        date: 2019 - 12 - 05,
        time: '18:00 - 19:30', 
        info: `Vi har en tanke i Norge om velferdssamfunnet som tar vare på alle uansett om du er fattig eller rik, bor i by eller bygd, liten eller stor, mann eller kvinne. Men om man ser nøyere på det er ikke dette tilfellet. Det har faktisk mye å si hvem du er når det gjelder dødelighet, fysisk og psykisk sykdom, utsikter for arbeid og trivsel i arbeidet osv. Det er stor ulikhet og stor forskjellsbehandling. Og den er i ferd med å øke. Professor Terje A. Eikemos forskning på temaet har fått internasjonal oppmerksomhet og vi ser nærmere på det i kveld.`
    },
];
for (i = 0; i < event_list.length; i++) {
    var node = document.createElement("li");
    var text = event_list[i].event;
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    node.id = i;
    node.setAttribute("onclick", `show_info(${i})`)
    document.getElementById("list").appendChild(node);
    }
    console.log("1) "+  new Date().toDateString());
    console.log("2) "+  new Date().toISOString());
    console.log("3) "+  new Date().toJSON());
    console.log("4) "+  new Date().toLocaleDateString());
    console.log("5) "+  new Date().toLocaleString());
    console.log("6) "+  new Date().toLocaleTimeString());
    console.log("7) "+  new Date().toString());
    console.log("8) "+  new Date().toISOString().slice(0,10));

function show_info(e) {
    var modal = document.getElementById('myModal')
    modal.style.display = 'block';
    document.getElementById('close').onclick = function() {
        modal.style.display = 'none';
    }
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
    document.getElementById('merinfo').textContent = 'Mer informasjon om ' + event_list[e].event;
    document.getElementById('span_tickets').innerHTML = 'Ledige billetter: ' + event_list[e].tickets;
    document.getElementById('span_time').innerHTML = 'Arrangementet starter kl.: ' + event_list[e].time;
    document.getElementById('span_date').innerHTML = 'Dato: ' + event_list[e].date;
    document.getElementById('span_info').innerHTML = event_list[e].info;
    
    if (event_list[e].tickets === true) {
        document.getElementById('span_tickets').style.color = 'green';
    } else {
        document.getElementById('span_tickets').style.color = 'red';
    }
}

function filter_search(e) {
    var title = document.getElementById('list').childNodes;
    console.log(title)
    for (i=1; i < title.length; i++) {
        if (!String(title[i].innerText).toLowerCase().includes(e)) {
            title[i].style.display = 'none';
        }
        else {
            title[i].style.display = 'inherit';
        }
    }
}






