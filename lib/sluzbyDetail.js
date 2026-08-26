// Detailni obsah pro sedm samostatnych stranek sluzeb (/sluzby/[slug]).
// Kazda sluzba ma vlastni text, postup, ceny a FAQ - kvuli SEO i kvuli zakaznikovi.

export const sluzbyDetail = [
  {
    slug: "vykopy-zakladu",
    title: "Výkopy základů",
    h1: "Výkopy základů rodinných domů – Praha-východ",
    metaTitle: "Výkopy základů rodinných domů | Praha-východ | Kruk & Co",
    metaDescription:
      "Výkopy základových pasů, skrývka ornice a příprava pod základovou desku. Vlastní technika, Praha-východ a Říčansko. Nezávazná cena do dvou dnů.",
    intro:
      "Základy jsou jediná část domu, kterou už nikdy neopravíte bez bourání. Kopeme je proto přesně podle projektu, s průběžnou kontrolou hloubek, a plochu předáváme vyklizenou tak, aby se hned dalo betonovat.",
    obsah: [
      "vytyčení stavby a kontrola výškových bodů",
      "skrývka ornice a její uložení na deponii",
      "hloubení základových pasů, patek i základové jámy",
      "dokopání a ruční začištění dna výkopu",
      "rozrušení tvrdých vrstev hydraulickým kladivem",
      "pažení stěn tam, kde to podloží vyžaduje",
      "odvoz přebytečné zeminy nebo její rozprostření na pozemku",
    ],
    postup: [
      { k: "Obhlídka a cena", v: "Přijedeme se podívat na pozemek, přístup a podloží. Cenu pošleme do dvou dnů." },
      { k: "Vytyčení a skrývka", v: "Podle projektu vytyčíme obvod stavby a sejmeme ornici na dohodnuté místo." },
      { k: "Hloubení", v: "Vykopeme pasy nebo jámu dle výkresu a průběžně kontrolujeme hloubky." },
      { k: "Předání", v: "Začistíme dno, odvezeme přebytek zeminy a plochu předáme připravenou k betonáži." },
    ],
    faq: [
      {
        q: "Jak dlouho trvá výkop základů rodinného domu?",
        a: "U běžného nepodsklepeného domu zpravidla jeden až tři dny. Podsklepené domy a stavby na skalním podloží trvají déle.",
      },
      {
        q: "Kolik stojí výkop základů?",
        a: "Účtujeme hodinovou sazbu za stroj s obsluhou a jednorázově dopravu techniky. Přesnou cenu dáme po prohlídce pozemku.",
      },
      {
        q: "Co se stane s vykopanou zeminou?",
        a: "Podle dohody ji rozprostřeme po pozemku, uložíme do deponie na pozdější zásyp, nebo ji odvezeme vlastním nosičem kontejnerů.",
      },
      {
        q: "Kopete i v zimě?",
        a: "Ano, pokud zem není promrzlá do velké hloubky. V mrazech je ale dobré naplánovat výkop tak, aby se hned betonovalo.",
      },
    ],
    technika: ["JCB 3CX", "CAT T320", "Nákladní vůz – nosič kontejnerů"],
    souvisi: ["pripojky-inzenyrskych-siti", "terenni-upravy", "odvoz-zeminy-a-sute"],
  },
  {
    slug: "pripojky-inzenyrskych-siti",
    title: "Přípojky inženýrských sítí",
    h1: "Výkopy přípojek – voda, kanalizace, plyn a elektro",
    metaTitle: "Výkopy přípojek inženýrských sítí | Praha-východ | Kruk & Co",
    metaDescription:
      "Výkopy rýh pro vodovodní, kanalizační, plynovou a elektrickou přípojku. Pískové lože, obsyp, zásyp a hutnění. Říčansko a Praha-východ.",
    intro:
      "Přípojka se kope jednou a pak je nadobro pod zemí. Držíme se proto projektu i požadavků správců sítí – od nezámrzné hloubky přes pískové lože až po hutněný zásyp, aby po zásypu nikde nesedal terén.",
    obsah: [
      "výkop rýhy pro vodovodní přípojku",
      "výkop pro kanalizační přípojku včetně spádu",
      "výkop pro plynovou přípojku",
      "rýhy pro kabelová vedení a elektrické přípojky",
      "pískové lože, obsyp a zásyp rýhy",
      "hutnění zásypu dálkově řízeným vibračním válcem",
      "výkopy pro osazení revizních a vodoměrných šachet",
    ],
    postup: [
      { k: "Vytyčení sítí", v: "Než se začne kopat, musí být vytyčené stávající sítě. Poradíme, co je potřeba zařídit." },
      { k: "Výkop rýhy", v: "Vykopeme rýhu v předepsané hloubce a šířce, riziková místa dokopáváme ručně." },
      { k: "Lože a uložení", v: "Připravíme pískové lože a po uložení potrubí provedeme obsyp." },
      { k: "Zásyp a hutnění", v: "Rýhu zasypeme po vrstvách a zhutníme, aby terén držel a nesedal." },
    ],
    faq: [
      {
        q: "Jak hluboko se kope vodovodní přípojka?",
        a: "Aby potrubí nezamrzlo, kope se obvykle do nezámrzné hloubky kolem 1,2 m. Přesnou hodnotu určuje projekt a správce sítě.",
      },
      {
        q: "Uložíte i samotné potrubí?",
        a: "Vykopeme rýhu, připravíme lože a po uložení provedeme obsyp, zásyp a hutnění. Svařování a připojení na síť dělá vždy oprávněná firma nebo správce sítě.",
      },
      {
        q: "Co když narazíte na staré neznámé vedení?",
        a: "Práci zastavíme, místo odkryjeme ručně a domluvíme se na dalším postupu. U starší zástavby se to stává poměrně často.",
      },
      {
        q: "Zvládnete výkop v úzké uličce mezi domy?",
        a: "Ano, na stísněná místa máme minirypadlo 3,5 t a kompaktní traktorbagr CityMaster. Nejužší úseky dokopáváme ručně.",
      },
    ],
    technika: ["JCB 3CX CityMaster", "Kubota – pásový bagr 3,5 t", "Wacker Neuson RTSC3"],
    souvisi: ["vykopy-zakladu", "drenaze-a-odvodneni", "bagr-s-obsluhou"],
  },
  {
    slug: "bazeny-a-jezirka",
    title: "Bazény a jezírka",
    h1: "Výkopy pro bazény a zahradní jezírka",
    metaTitle: "Výkop pro bazén a jezírko | Praha-východ | Kruk & Co",
    metaDescription:
      "Hloubení jam pro bazény a zahradní jezírka, rovné dno, zhutněný podklad a odvoz zeminy. Říčany, Babice u Říčan a celá Praha-východ.",
    intro:
      "U bazénu rozhoduje přesnost. Jáma musí mít správné rozměry, rovné dno i zhutněný podklad, jinak se konstrukce usazuje mnohem složitěji. Kopeme jámy pro plastové i betonové bazény a jezírka s pozvolnými břehy.",
    obsah: [
      "hloubení jámy pro bazén podle podkladů výrobce",
      "rovné dno a zhutněná podkladní vrstva pod desku",
      "výkop jezírka s tvarováním břehů a mělkých zón",
      "rýha pro bazénovou technologii a elektro",
      "odvoz výkopku nebo jeho využití na pozemku",
      "úklid a urovnání okolí po dokončení",
    ],
    postup: [
      { k: "Zaměření", v: "Podle podkladů od dodavatele bazénu vytyčíme jámu včetně rezervy na obsyp." },
      { k: "Hloubení", v: "Vykopeme jámu, u hlubších výkopů stěny svahujeme nebo pažíme." },
      { k: "Dno a podklad", v: "Dno urovnáme, doplníme podkladní vrstvu a zhutníme válcem." },
      { k: "Dokončení", v: "Zeminu odvezeme nebo rozprostřeme a okolí jámy urovnáme." },
    ],
    faq: [
      {
        q: "Jak velká musí být jáma pro bazén?",
        a: "Obvykle se kope o 30 až 50 cm víc na každou stranu, aby byl prostor na obsyp a technologii. Přesné rozměry určíme podle podkladů od výrobce bazénu.",
      },
      {
        q: "Kdy je nejlepší čas kopat jámu pro bazén?",
        a: "Od dubna do října, kdy je zem přístupná a dá se hned pokračovat s usazením. Jarní termíny se plní nejdřív, ozvěte se raději dopředu.",
      },
      {
        q: "Kam se dá vykopaná zemina?",
        a: "Ze standardní bazénové jámy vyjde přibližně 30 až 60 m3 zeminy. Buď ji rozprostřeme po zahradě, nebo ji odvezeme naším kontejnerovým nosičem.",
      },
      {
        q: "Uděláte i výkop pro jezírko s mělkou zónou?",
        a: "Ano, jezírka kopeme tvarově – s mělkou rostlinnou zónou i hlubší částí. Břehy modelujeme podle vašeho návrhu.",
      },
    ],
    technika: ["CAT T320", "Kubota R090", "Tatra"],
    souvisi: ["terenni-upravy", "odvoz-zeminy-a-sute", "bagr-s-obsluhou"],
  },
  {
    slug: "terenni-upravy",
    title: "Terénní úpravy a ornice",
    h1: "Terénní úpravy, srovnání pozemku a rozprostření ornice",
    metaTitle: "Terénní úpravy a srovnání pozemku | Praha-východ | Kruk & Co",
    metaDescription:
      "Srovnání a modelace pozemku, svahování, sejmutí a rozprostření ornice, hutnění a příprava pod trávník či dlažbu. Praha-východ a Říčansko.",
    intro:
      "Z rozbitého pozemku po stavbě umíme udělat rovnou zahradu často za jeden až dva dny. Sejmeme a rozprostřeme ornici, srovnáme terén do spádu, plochu zhutníme a připravíme ji pod trávník, dlažbu nebo příjezdovou cestu.",
    obsah: [
      "sejmutí ornice a její uložení na deponii",
      "srovnání a modelace pozemku do spádu",
      "svahování a tvarování násypů",
      "rozprostření ornice a příprava pláně pod trávník",
      "hloubení jam pro výsadbu stromů",
      "hutnění ploch pod dlažbu a příjezdové cesty",
      "dovoz zeminy, štěrku, písku a kameniva",
    ],
    postup: [
      { k: "Prohlídka", v: "Projdeme pozemek, změříme spády a řekneme, kolik materiálu bude potřeba." },
      { k: "Hrubé úpravy", v: "Odstraníme nerovnosti, přesuneme zeminu a vytvarujeme terén." },
      { k: "Podklad a hutnění", v: "Doplníme podkladní vrstvy a zhutníme je vibračním válcem." },
      { k: "Finální úprava", v: "Rozprostřeme ornici, plochu urovnáme a předáme připravenou k setí nebo dláždění." },
    ],
    faq: [
      {
        q: "Kolik stojí srovnání pozemku?",
        a: "Vychází to z hodinové sazby stroje s obsluhou. Zahradu do 1000 m2 obvykle zvládneme za jeden pracovní den.",
      },
      {
        q: "Dovezete zeminu, když jí mám málo?",
        a: "Ano, vozíme zeminu, štěrk, písek i kamenivo. Materiál se počítá zvlášť podle skutečně dovezeného množství.",
      },
      {
        q: "Připravíte plochu pod zámkovou dlažbu?",
        a: "Připravíme pláň, dovezeme a rozprostřeme podkladní vrstvy a zhutníme je dálkově řízeným vibračním válcem.",
      },
      {
        q: "Zvládnete práci na svahu?",
        a: "Ano, pásové rypadlo se dostane i do svahu. U prudších míst se na postupu domluvíme při prohlídce.",
      },
    ],
    technika: ["JCB 3CX", "Kubota R090", "Wacker Neuson RTSC3"],
    souvisi: ["bazeny-a-jezirka", "odvoz-zeminy-a-sute", "vykopy-zakladu"],
  },
  {
    slug: "drenaze-a-odvodneni",
    title: "Drenáže, odvodnění a základy plotů",
    h1: "Drenáže, odvodnění pozemku a základy plotů",
    metaTitle: "Drenáže a odvodnění pozemku | základy plotů | Praha-východ",
    metaDescription:
      "Výkopy drenáží kolem domu, odvodnění podmáčených pozemků, vsakovací jímky, svody dešťové vody a hloubení základů pro ploty. Říčansko.",
    intro:
      "Voda u domu je nejčastější důvod, proč nám lidé volají podruhé. Kopeme drenáže kolem staveb, vsakovací a retenční jámy, rýhy pro svody dešťové vody i základy plotů a podezdívek.",
    obsah: [
      "drenáže kolem obvodu domu a na podmáčených pozemcích",
      "rýhy pro svody dešťové vody",
      "výkopy pro vsakovací a retenční jímky",
      "hloubení základových pasů pro ploty a podezdívky",
      "výkopy pro patky plotových sloupků",
      "štěrkové lože, geotextilie a zpětný zásyp",
    ],
    postup: [
      { k: "Posouzení", v: "Podíváme se, odkud voda přitéká a kam ji lze svést. Řekneme, co má reálně smysl." },
      { k: "Výkop", v: "Vykopeme rýhu ve správném spádu, u domu až na úroveň paty základu." },
      { k: "Lože a potrubí", v: "Připravíme štěrkové lože, uložíme drenážní potrubí a obalíme geotextilií." },
      { k: "Zásyp", v: "Zasypeme štěrkem a zeminou, plochu urovnáme a uklidíme." },
    ],
    faq: [
      {
        q: "Jak poznám, že potřebuju drenáž?",
        a: "Typicky když po dešti stojí voda u domu, vlhne sokl nebo je pozemek dlouho rozbahněný. Přijedeme se podívat a řekneme, co pomůže.",
      },
      {
        q: "Jak hluboko se kope drenáž u domu?",
        a: "Obvykle na úroveň paty základu, aby drenáž odváděla vodu od stavby. Přesnou hloubku určíme na místě podle spádu pozemku.",
      },
      {
        q: "Uděláte i základy pro plot?",
        a: "Ano, kopeme pasy i jednotlivé patky pro sloupky, včetně odvozu vykopané zeminy.",
      },
      {
        q: "Kolik dní taková práce zabere?",
        a: "Odvodnění běžného rodinného domu bývá otázka jednoho až tří dnů podle délky drenáže a přístupu na pozemek.",
      },
    ],
    technika: ["Kubota – pásový bagr 3,5 t", "JCB 3CX", "Wacker Neuson RTSC3"],
    souvisi: ["pripojky-inzenyrskych-siti", "terenni-upravy", "vykopy-zakladu"],
  },
  {
    slug: "bagr-s-obsluhou",
    title: "Bagr s obsluhou",
    h1: "Bagr s obsluhou – hodinové zemní práce",
    metaTitle: "Bagr s obsluhou od 1000 Kč/hod | Praha-východ | Kruk & Co",
    metaDescription:
      "Bagr s obsluhou na hodiny – minirypadlo, traktorbagr i pásové rypadlo. Praha-východ, Říčany, Babice u Říčan. Dopravu techniky zajistíme.",
    intro:
      "Někdy nepotřebujete celou zakázku, ale jen stroj a člověka, který ho umí. Přijedeme s bagrem, který se na místo vejde, a odpracujeme, co potřebujete – od pár hodin po celý týden.",
    obsah: [
      "minirypadlo 3,5 t do zahrad a stísněných míst",
      "traktorbagr JCB 3CX na univerzální práce",
      "kompaktní CityMaster do úzkých průjezdů",
      "pásové rypadlo CAT T320 na větší výkopy",
      "kolový nakladač na přesun a rozprostření materiálu",
      "bourací práce hydraulickým kladivem",
      "dopravu techniky na místo zajišťujeme vlastním nosičem",
    ],
    postup: [
      { k: "Zavoláte", v: "Řeknete, co je potřeba udělat a jaký je přístup na místo." },
      { k: "Vybereme stroj", v: "Podle šířky průjezdu a druhu práce doporučíme vhodný bagr." },
      { k: "Přijedeme", v: "Techniku dovezeme vlastním nosičem, nemusíte nic řešit." },
      { k: "Odpracujeme", v: "Účtujeme skutečně odpracované hodiny plus jednorázovou dopravu." },
    ],
    faq: [
      {
        q: "Kolik stojí hodina bagru?",
        a: "Naše sazba začíná na 1000 Kč/hod za stroj i s obsluhou. K tomu se jednorázově účtuje doprava techniky na místo, která je na Říčansku díky blízkosti nízká.",
      },
      {
        q: "Je v ceně i obsluha?",
        a: "Ano. Stroj bez strojníka nepůjčujeme – zkušená obsluha práci zvládne rychleji a bez rizika poškození sítí nebo techniky.",
      },
      {
        q: "Jaké je minimum hodin?",
        a: "Běžně počítáme minimálně dvě hodiny práce. U menších prací se dá výjezd spojit s jinou zakázkou v okolí a vyjde to výhodněji.",
      },
      {
        q: "Kdy můžete přijet?",
        a: "V Babicích a nejbližších obcích většinou do jednoho až tří dnů, v naléhavých případech i tentýž den. Zavolejte a řekneme přesný termín.",
      },
    ],
    technika: ["JCB 3CX", "Kubota – pásový bagr 3,5 t", "JCB 3CX CityMaster", "CAT T320"],
    souvisi: ["vykopy-zakladu", "pripojky-inzenyrskych-siti", "odvoz-zeminy-a-sute"],
  },
  {
    slug: "odvoz-zeminy-a-sute",
    title: "Odvoz zeminy a suti",
    h1: "Odvoz zeminy a suti, kontejnery a dovoz materiálu",
    metaTitle: "Odvoz zeminy a suti, kontejnery | Praha-východ | Kruk & Co",
    metaDescription:
      "Přistavení kontejneru, odvoz zeminy, suti a stavebního odpadu, dovoz štěrku, písku a kameniva. Praha-východ, Říčansko, Babice u Říčan.",
    intro:
      "Zemní práce skončí až ve chvíli, kdy je pozemek uklizený. Máme vlastní nosič kontejnerů i třístranný sklápěč Tatra, takže odvoz neřešíte u další firmy a nečekáte na cizí termín.",
    obsah: [
      "přistavení kontejneru na zeminu, suť a stavební odpad",
      "odvoz a uložení výkopku na skládku",
      "odvoz suti z bouracích prací",
      "dovoz štěrku, písku, kameniva a zeminy",
      "nakládka materiálu kolovým nakladačem",
      "přeprava i do hůře přístupného a nezpevněného terénu",
    ],
    postup: [
      { k: "Spočítáme objem", v: "Podle rozsahu výkopu odhadneme kubíky, ať neplatíte zbytečné jízdy." },
      { k: "Přistavíme kontejner", v: "Kontejner přivezeme na dohodnuté místo, nebo nakládáme přímo na sklápěč." },
      { k: "Odvezeme", v: "Materiál odvezeme na skládku a zajistíme uložení včetně dokladů." },
      { k: "Dovezeme materiál", v: "Zpáteční cestou často přivezeme štěrk nebo zeminu – platíte jednu jízdu místo dvou." },
    ],
    faq: [
      {
        q: "Kolik se vejde do kontejneru?",
        a: "Záleží na materiálu. Zemina je těžká, proto se u výkopku plní kontejner na menší objem než u suti. Množství spočítáme dopředu.",
      },
      {
        q: "Postaráte se i o skládku?",
        a: "Ano, odvoz i uložení na skládku zajistíme včetně potřebných dokladů.",
      },
      {
        q: "Dovezete i materiál?",
        a: "Vozíme štěrk, písek, kamenivo i zeminu. Často to spojíme s odvozem, takže platíte jednu jízdu místo dvou.",
      },
      {
        q: "Dostane se auto na nezpevněnou cestu?",
        a: "Tatra jako třístranný sklápěč zvládne i nezpevněný terén. U velmi měkkého podloží se dohodneme na místě.",
      },
    ],
    technika: ["Nákladní vůz – nosič kontejnerů", "Tatra", "Kubota R090"],
    souvisi: ["terenni-upravy", "vykopy-zakladu", "bagr-s-obsluhou"],
  },
];

export const sluzbySlugy = sluzbyDetail.map((s) => s.slug);

export function getSluzba(slug) {
  return sluzbyDetail.find((s) => s.slug === slug) || null;
}
