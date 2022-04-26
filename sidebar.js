const topicElement = document.getElementsByClassName('topic')

//gör så att man kan klicka på list element, sätter igång funktionen handleClick
for(var i = 0; i < topicElement.length; i++){
topicElement[i].addEventListener('click', handleClick);	
}

/*handleClick funktionen, sparar vilken knapp 
du klickat på i en variabel och jämför med olika
vilkor för att byta till rätt ämnte*/
function handleClick() {
    console.log('link clicked');
    var clicked = event.target.id;
   
    if (clicked == 'topic1' ){
        document.getElementById('title').innerHTML = document.getElementById('topic1').innerHTML
        document.getElementById('info').innerHTML =
            "Begreppet säkerhet är inte något svårt egentligen. Allt börjar med kunskap och allmänbildning om hur saker och ting funkar. Att känna sig säker är nog något alla vill känna. Det finns olika sätt att skydda sig på för att öka ens säkerhet.<br><br> hej" //text till ämne 1
    }
    if (clicked == 'topic2' ){
        document.getElementById('title').innerHTML = document.getElementById('topic2').innerHTML
        document.getElementById('info').innerHTML =
            "I dagens samhälle så växer den digitala närvaron mer och mer runt om oss. Med det så växer också olika risker för både privatpersoner och företag i den digitala miljön. Att inte svara på meddelanden eller mail från folk du inte känner eller väntar på och att inte trycka på några okända länkar. Att ha ett svagt lösenord som är lätt att knäcka och ge aldrig ut det. Öppna nätverk ökar också risken för intrång. " //text till ämne 2
    }
    if (clicked == 'topic3' ){
        document.getElementById('title').innerHTML = document.getElementById('topic3').innerHTML
        document.getElementById('info').innerHTML =
            "Det är viktigt att ha ett antivirusprogram som är relevant och pålitligt. Det bör uppdateras löpande och helst automatiskt. Förutom antivirusprogram så bör du installera en brandvägg. Dessa säkerhetsprogram kompletterar varandra utmärkt." //text till ämne 3
    }
    if (clicked == 'topic4' ){
        document.getElementById('title').innerHTML = document.getElementById('topic4').innerHTML
        document.getElementById('info').innerHTML =
            "Om du jobbar på ett företag där du har tillgång till viktigt information så är det viktigt att göra säkerhetskopior av data och information. Detta kan också vara bra att göra även som privat person om man har filer som man inte vill att andra ska ta del av eller som kan riskeras att försvinna. Det är också viktigt att det är en brandsäker plats och att det görs dagligen. Testa också periodiskt att det går att återställa informationen utifrån tagna säkerhetskopior. " //text till ämne 4
    }
    if (clicked == 'topic5' ){
        document.getElementById('title').innerHTML = document.getElementById('topic5').innerHTML
        document.getElementById('info').innerHTML =
            "För småbarnsföräldrar så är det viktigt att veta hur lätt det är att nå saker som inte är lämpligt för ett barn att se. Med bara ett klicka kan vem som helst få se våld och sexualitet. Så det är viktigt att lära sig mer om ens barns digitala liv och dem risker som finns. Det finns mycket skadligt på alla sociala medier osv. Vi rekommenderar att ha uppsyn över ens barn digitala aktivitet och att ha nån form av barnspärr så dem inte utsätts för något olämpligt. " //text till ämne 5
    }
    if (clicked == 'topic6' ){
        document.getElementById('title').innerHTML = document.getElementById('topic6').innerHTML
        document.getElementById('info').innerHTML =
            "Ett av de vanligaste IT-brotten är att utnyttja eller att utsätta någon för bedrägeri. Därför är det viktigt att läsa på och bygga kunskap generellt. Lita inte på vem som helst på nätet för vem som helst kan utge sig för att vara vem som helst. " //text till ämne 6
    }
    if (clicked == 'topic7' ){
        document.getElementById('title').innerHTML = document.getElementById('topic7').innerHTML
        document.getElementById('info').innerHTML =
            "Undvik bedragarna på internet, och skydda dig själv genom att lära dig tjuvarnas knep, och hur du surfar, shoppar och loggar in på ett säkrare sätt. Internetkunskap hjälper dig att bli en säker och medveten internetanvändare genom att samla kunskap om nätet och digitala tjänster som du har användning för i din vardag. Här finns massor av användbara tips om hur du på bästa sätt använder allt det som internet har att erbjuda. Internetkunskap är ett initiativ från Internetstiftelsen, en oberoende stiftelse som ansvarar för toppdomänen .se och driften av .nu. Vi verkar för ett internet som bidrar positivt till människa och samhälle. " //text till ämne 7
    }
  }