'use strict';
const copy = {
 en:{backFeatured:'Back to featured work',featured:'In the spotlight',heroTitleA:'Sound',heroTitleB:'takes shape',heroScope:'Original music and sound design for film, theatre and interactive media.',brandRole:'Composer · Sound designer · Performer',themeSwitch:'Change light or dark theme',accentSwitch:'Change accent colour',gridSwitch:'Show composition grid',metaField:'Electroacoustic research',fieldName:'Sonic landscapes',composeTitle:'I compose.',statementA:'Music for film,',statementB:'performing arts',statementC:'and interactive worlds.',legendA:'Acoustic instruments',legendB:'Electronic processes',terrainHint:'Move the cursor. Shape the terrain.',terrainIntro:'Between electroacoustic instruments and transformations of sound.',manifesto:'Manifesto',manifestoMeta:'From an idea to a sonic world',manifestoA:'Every story.',manifestoB:'Its own',manifestoC:'sound.',manifestoCopy:'My practice blends electroacoustic instruments with sound processing, working across film, dance, theatre and games.',signalArt:'Abstract sound sculpture',headlineA:'Music',headlineB:'for stories',headlineC:'and',headlineD:'new worlds.',signalTitle:'Sound, taking shape.',signalNote:'Composition · Sound · Motion',filmAtmosphere:'Cinema in motion',pauseVisual:'Pause animation',playVisual:'Play animation',cinema1:'Sound.',cinema2:'Beyond the frame.',cinemaIntro:'Original music for moving images, bodies and worlds.',hear:'Enter the sound',scrollWork:'Scroll to explore',selectedFirst:'Selected',selectedSecond:'work.',selectedNote:'Different languages. The same search for a sound.',allProjects:'Explore all projects',reelNote:'A collection of sonic worlds.\nTake a moment to listen.',aboutFirst:'A dialogue',aboutSecond:'with sound.',moreAbout:'More about the artist ↗︎',nextStory:'The next story',talkFirst:"Let’s make",talkSecond:'something resonate.',collaborate:'For collaborations, original scores and sound projects.',openMenu:'Open menu',closeMenu:'Close menu',exploreWorld:'Explore the work',categories:'Project categories',home:'Home',soundcloudLink:'Listen on SoundCloud ↗︎',skip:'Skip to content',navigation:'Main navigation',work:'Work',about:'About',credits:'Credits',contact:'Contact',profession:'Composer · Sound designer · Performer',hero1:'Music that',hero2:'inhabits stories.',intro:'An exploration of sound, image and movement. Original music for film, performing arts and interactive worlds.',explore:'Explore the work',listening:'Listen',play:'Play soundreel ↗︎',hideReel:'Close soundreel ×',portfolio:'Portfolio',selected:'Selected works',filters:'Filter works by category',all:'All works',performing:'Performing arts',film:'Film',games:'Games',commercial:'Commercials',installation:'Installations',live:'Live',aboutHeading:'Music, image\nand movement.',bio1:'Tarek Bouguerra composes music and designs sound for film, dance, theatre and interactive media. Each project begins with listening: to an image, a gesture or the rhythm of a story. From there, he develops a musical language in dialogue with the work and the people creating it.',bio2:'His practice moves between acoustic instruments, electronics and the transformation of recorded sound. Trained in Applied Music at the Civica Scuola di Musica Claudio Abbado in Milan, he works across composition, sound design and performance, exploring the relationship between sound, space and movement.',complete:'The complete picture',archive:'Credits & archive',archiveIntro:'A chronology of original scores and collaborations, from 2018 to today.',other:'Another side of sound',otoCopy:'A space for exploring sound through audio tools and instruments.',otoLink:'Discover otosynthesis ↗︎',contactHeading:"Let's make\nsomething resonate.",top:'Back to top ↑',score:'Original score',sound:'Original score & sound design',tutor:'Original score & musical tutor',music:'Original music',watch:'Watch video ↗︎',listen:'Listen on Bandcamp ↗︎',visit:'Explore the project ↗︎',close:'Close project',count:'works',single:'work',meta:'Music for film, performing arts and games. Discover the work of Italian composer, sound designer and performer Tarek Bouguerra.'},
 it:{backFeatured:'Torna in evidenza',featured:'In evidenza',heroTitleA:'Il suono',heroTitleB:'prende forma',heroScope:'Musica originale e sound design per cinema, teatro e media interattivi.',brandRole:'Compositore · Sound designer · Performer',themeSwitch:'Cambia tema chiaro o scuro',accentSwitch:'Cambia colore di accento',gridSwitch:'Mostra la griglia di composizione',metaField:'Ricerca elettroacustica',fieldName:'Paesaggi sonori',composeTitle:'Compongo.',statementA:'Musica per cinema,',statementB:'arti performative',statementC:'e mondi interattivi.',legendA:'Strumenti acustici',legendB:'Processi elettronici',terrainHint:'Muovi il cursore. Modella il paesaggio.',terrainIntro:'Tra strumenti elettroacustici e trasformazioni del suono.',manifesto:'Manifesto',manifestoMeta:'Dall’idea a un mondo sonoro',manifestoA:'Ogni storia.',manifestoB:'Il proprio',manifestoC:'suono.',manifestoCopy:'La mia ricerca unisce strumenti elettroacustici ed elaborazione del suono, tra cinema, danza, teatro e videogiochi.',signalArt:'Scultura sonora astratta',headlineA:'Musica',headlineB:'per storie',headlineC:'e',headlineD:'nuovi mondi.',signalTitle:'Il suono prende forma.',signalNote:'Composizione · Suono · Movimento',filmAtmosphere:'Il cinema, in movimento',pauseVisual:'Ferma l’animazione',playVisual:'Avvia l’animazione',cinema1:'Suono.',cinema2:'Oltre l’immagine.',cinemaIntro:'Musica originale per immagini, corpi e mondi in movimento.',hear:'Entra nel suono',scrollWork:'Scorri ed esplora',selectedFirst:'Lavori',selectedSecond:'selezionati.',selectedNote:'Linguaggi diversi. La stessa ricerca del suono.',allProjects:'Esplora tutti i progetti',reelNote:'Una raccolta di mondi sonori.\nPrenditi un momento per ascoltare.',aboutFirst:'In dialogo',aboutSecond:'con il suono.',moreAbout:'Scopri l’artista ↗︎',nextStory:'La prossima storia',talkFirst:'Diamo forma',talkSecond:'a nuove risonanze.',collaborate:'Per collaborazioni, musiche originali e progetti sonori.',openMenu:'Apri il menu',closeMenu:'Chiudi il menu',exploreWorld:'Esplora i lavori',categories:'Categorie dei progetti',home:'Home',soundcloudLink:'Ascolta su SoundCloud ↗︎',skip:'Vai al contenuto',navigation:'Navigazione principale',work:'Lavori',about:'Biografia',credits:'Crediti',contact:'Contatti',profession:'Compositore · Sound designer · Performer',hero1:'Musica che',hero2:'abita le storie.',intro:'Un’esplorazione tra suono, immagine e movimento. Musica originale per il cinema, le arti performative e i mondi interattivi.',explore:'Esplora i lavori',listening:'Ascolto',play:'Ascolta lo soundreel ↗︎',hideReel:'Chiudi lo soundreel ×',portfolio:'Portfolio',selected:'Lavori selezionati',filters:'Filtra i lavori per categoria',all:'Tutti i lavori',performing:'Arti performative',film:'Cinema',games:'Videogiochi',commercial:'Pubblicità',installation:'Installazioni',live:'Dal vivo',aboutHeading:'Musica, immagine\ne movimento.',bio1:'Tarek Bouguerra compone musica e progetta il suono per cinema, danza, teatro e media interattivi. Ogni lavoro nasce dall’ascolto: di un’immagine, di un gesto, del ritmo di una storia. Da lì costruisce un linguaggio musicale in dialogo con l’opera e con le persone che la realizzano.',bio2:'La sua pratica attraversa strumenti acustici, elettronica e trasformazione del suono registrato. Si è formato in Musica Applicata alla Civica Scuola di Musica Claudio Abbado di Milano e lavora tra composizione, sound design e performance, esplorando le relazioni tra suono, spazio e movimento.',complete:'Uno sguardo d’insieme',archive:'Crediti e archivio',archiveIntro:'Una cronologia di musiche originali e collaborazioni, dal 2018 a oggi.',other:'Un altro lato del suono',otoCopy:'Uno spazio per esplorare il suono attraverso strumenti e software audio.',otoLink:'Scopri otosynthesis ↗︎',contactHeading:'Diamo forma\na nuove risonanze.',top:'Torna in alto ↑',score:'Musica originale',sound:'Musica originale e sound design',tutor:'Musica originale e tutor musicale',music:'Musica originale',watch:'Guarda il video ↗︎',listen:'Ascolta su Bandcamp ↗︎',visit:'Esplora il progetto ↗︎',close:'Chiudi il progetto',count:'lavori',single:'lavoro',meta:'Musica per cinema, arti performative e videogiochi. Scopri i lavori del compositore, sound designer e performer italiano Tarek Bouguerra.'}
};
const projects = [
 {title:'Semplicemente Casa Mia',cat:'film',year:'2026',image:'semplicemente-casa-mia.jpg',fill:true,role:'score',url:'https://www.instagram.com/p/DYnA1ayNK9B/'},
 {title:'Your Tactile Identity',cat:'performing',year:'2026',image:'your-tactile-identity.jpg',fill:true,role:'tutor',description:{en:'A dance project and residency bringing together YoY Performing Arts, IVONA and Tyche. Winner of Bando CURA 2025, with a residency at PARC in Florence.',it:'Un progetto di danza e residenza nato dall’incontro tra YoY Performing Arts, IVONA e Tyche. Vincitore del Bando CURA 2025, con residenza al PARC di Firenze.'}},
 {title:'Atteone',cat:'performing',year:'2024',image:'atteone.jpg',fill:true,role:'score',description:{en:'A work by choreographer Michele Ifigenia Colturi, performed by Enzina Cappelli. A tragic metamorphosis from human to deer. Produced by AiEP, co-produced by Hangartfest.',it:'Un lavoro del coreografo Michele Ifigenia Colturi, interpretato da Enzina Cappelli. Una metamorfosi tragica, da essere umano a cervo. Produzione AiEP, coproduzione Hangartfest.'}},
 {title:'The Neverglades Mysteries',cat:'film',year:'2022',image:'neverglades.png',role:'score',album:'961314509',url:'https://tarekbouguerra.bandcamp.com/album/the-neverglade-mysteries-original-music-from-the-animated-web-series',description:{en:'Original music from the animated web series.',it:'Musica originale per la web serie animata.'}},
 {title:'The New Ballad',cat:'performing',year:'2022',image:'the-new-ballad.jpg',fill:true,role:'score',description:{en:'A project by Emanuele Giorgetti, Eliana Rotella, Simona Tedeschini, Michele Ifigenia Colturi, Tarek Bouguerra and Miro Pinna. Passed the first selection stage of Biennale College Registi U35. Trampolino residency at Circuito CLAPS, December 2022.',it:'Un progetto di Emanuele Giorgetti, Eliana Rotella, Simona Tedeschini, Michele Ifigenia Colturi, Tarek Bouguerra e Miro Pinna. Superata la prima fase di selezione del bando Biennale College Registi U35. Residenza Trampolino presso Circuito CLAPS, dicembre 2022.'}},
 {title:'Samurai Shiba',cat:'games',year:'2022',image:'samurai-shiba.png',role:'score',track:'2218923720',url:'https://tarekbouguerra.bandcamp.com/track/main-theme-samurai-shiba-original-soundtrack',description:{en:'Main theme from the original videogame soundtrack.',it:'Tema principale della colonna sonora originale del videogioco.'}},
 {title:'I Want You',cat:'film',year:'2019',image:'i-want-you.jpg',role:'score',album:'1824731253',url:'https://tarekbouguerra.bandcamp.com/album/i-want-you-original-motion-picture-soundtrack',description:{en:'Original motion picture soundtrack.',it:'Colonna sonora originale del film.'}},
 {title:'Citerone',cat:'performing',year:'2023',image:'citerone-poster-square.png',fill:true,role:'score',youtube:'jBl1_zu8eRs'},
 {title:'CUMA',cat:'performing',year:'2022',image:'cuma-poster.png',fill:true,crop:'50% 65%',role:'sound',youtube:'Csot_A95yLs',description:{en:'Dance project. Winner of MOVIMENTO DANZA CAM CAM 2022.',it:'Progetto di danza. Vincitore di MOVIMENTO DANZA CAM CAM 2022.'}},
 {title:'Amadriadi',cat:'performing',year:'2022',image:'amadriadi-poster-square.png',fill:true,role:'music',description:{en:'A site-specific performance inspired by the tree nymphs of Greek mythology. Choreography by Michele Ifigenia Colturi, performed by Enzina Cappelli. Produced by AiEP Ariella Vidach / Triennale Teatro Milano.',it:'Una performance site specific ispirata alle ninfe degli alberi della mitologia greca. Coreografia di Michele Ifigenia Colturi, interpretazione di Enzina Cappelli. Produzione AiEP Ariella Vidach / Triennale Teatro Milano.'}},
 {title:'Maelström',cat:'performing',year:'2021',image:'maelstrom-poster-square.jpeg',fill:true,role:'score',youtube:'xCff1uTeEYY',description:{en:'Dance project. Nominated for MOVIMENTO DANZA CAM CAM 2021.',it:'Progetto di danza. Nomination MOVIMENTO DANZA CAM CAM 2021.'}},
 {title:'WU',cat:'film',year:'2020',image:'wu.jpg',role:'score',album:'2485624732',url:'https://tarekbouguerra.bandcamp.com/album/wu-original-motion-picture-soundtrack'},
 {title:'Spaceman',cat:'film',year:'2019',image:'spaceman.jpg',role:'score',album:'2633059526',url:'https://tarekbouguerra.bandcamp.com/album/spaceman-original-short-film-soundtrack',description:{en:'Original short film soundtrack.',it:'Colonna sonora originale del cortometraggio.'}},
 {title:'Bucchi Corporate',cat:'commercial',year:'2019',role:'score',poster:'corporate',url:'https://vimeo.com/276046022'},
 {title:'New Holland Agriculture',cat:'commercial',year:'2019',role:'score',poster:'agriculture',url:'https://www.youtube.com/watch?v=ZsUC1gZg8JE'},
 {title:'999 Questions About Contemporary Living',cat:'installation',year:'2018',role:'score',poster:'corporate',youtube:'40z7ftq-cuc',description:{en:'Audiovisual installation at Triennale di Milano, 2018.',it:'Installazione audiovisiva alla Triennale di Milano, 2018.'}},
 {title:'Spot Hi-Fi',cat:'live',year:'2018',role:'music',poster:'agriculture',url:'https://agon.news/spot-hi-fi/'},
 {title:'Sampling the Movement',cat:'live',year:'2018',image:'sampling-the-movement.jpg',fill:true,role:'music',url:'https://agon.news/sampling-the-movement/'},
 {title:'Onda su Onda',cat:'live',year:'2018',image:'onda-su-onda.jpg',fill:true,role:'music',url:'https://agon.news/onda-su-onda/'}
];
const typeTranslations={'Dance Project & Residency':'Progetto di danza e residenza','Short Movie':'Cortometraggio','Documentary':'Documentario','Theatrical Show':'Spettacolo teatrale','Trailer Music':'Musica per trailer','Fashion Film':'Film di moda','Dance Project':'Progetto di danza','Live Performance':'Performance dal vivo','Videogame':'Videogioco','Web Series':'Web serie','Movie':'Film','Commercial':'Pubblicità','Short Animated Movie':'Cortometraggio d’animazione','Audiovisual Installation':'Installazione audiovisiva','Original Score':'Musica originale','Original Score & Musical Tutor':'Musica originale e tutor musicale','Original Music':'Musica originale'};
const projectKey=title=>title.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
credits.forEach((credit,index)=>{
 let project=projects.find(item=>projectKey(item.title)===projectKey(credit.title));
 if(!project){
  const cat=credit.type==='Audiovisual Installation'?'installation':credit.type==='Commercial'?'commercial':credit.type==='Videogame'?'games':/Dance|Theatrical|Live Performance/.test(credit.type)?'performing':'film';
  project={title:credit.title,year:credit.year,cat,role:'score',poster:index%2?'corporate':'agriculture'};
  projects.push(project);
 }
 project.type=credit.type;
 if(credit.director)project.director=credit.director;
 if(credit.type==='Trailer Music')project.role='trailer';
});
const projectCovers={
 'mythology-of-a-dress':{image:'mythology-of-a-dress.png'},
 'when-the-phone-rings':{image:'when-the-phone-rings.png'},
 'notturna':{image:'notturna.jpg'},
 'be-my-darling':{image:'be-my-darling.jpg'},
 'the-broken-match':{image:'the-broken-match.jpg'},
 'wu':{image:'wu.jpg'},
 'spaceman':{image:'spaceman.jpg'}
};
projects.forEach(project=>{const cover=projectCovers[projectKey(project.title)];if(cover){Object.assign(project,cover,{fill:true,portrait:true});delete project.poster;}});
const atteoneChapter=projects.find(project=>projectKey(project.title)==='atteone-chapter-ii');
if(atteoneChapter)Object.assign(atteoneChapter,{image:'atteone.jpg',fill:true});
const projectRecognitions={
 "be-my-darling": [
  [
   "In concorso · FIPILI 2026",
   "In competition · FIPILI 2026",
   "Concorso cortometraggi · riconoscimento al film",
   "Short film competition · film recognition",
   "https://comune.livorno.it/it/eventi/2519513"
  ]
 ],
 "your-tactile-identity": [
  [
   "Vincitore bando · CURA 2025",
   "Call winner · CURA 2025",
   "Residenza Progetto CURA · riconoscimento al progetto coreografico",
   "Progetto CURA residency · recognition for the choreographic project",
   "https://www.progettocura.it/progetto-cura-2025/"
  ]
 ],
 "cuma": [
  [
   "Vincitore · CAM CAM 2022",
   "Winner · CAM CAM 2022",
   "Dance for camera · riconoscimento al progetto di videodanza",
   "Dance for camera · recognition for the dance film project",
   "https://www.didstudio.org/cuma/"
  ]
 ],
 "maelstrom": [
  [
   "Menzione speciale · CAM CAM 2021",
   "Special mention · CAM CAM 2021",
   "Dance for camera · riconoscimento al progetto video",
   "Dance for camera · recognition for the video project",
   "https://fmpeople.fondazionemilano.eu/uploads/users/21916/2025_Curriculum-ITA.pdf"
  ],
  [
   "Finalista · Interfaccia Digitale 2021",
   "Finalist · Interfaccia Digitale 2021",
   "Hangartfest · riconoscimento al progetto video",
   "Hangartfest · recognition for the video project",
   "https://fmpeople.fondazionemilano.eu/uploads/users/21916/2025_Curriculum-ITA.pdf"
  ]
 ],
 "mythology-of-a-dress": [
  [
   "Selezione ufficiale · MFFF 2023",
   "Official selection · MFFF 2023",
   "Milano Fashion Film Festival · selezione del film",
   "Milano Fashion Film Festival · film selection",
   "https://filmfreeway.com/MythologyofaDress"
  ]
 ],
 "when-the-phone-rings": [
  [
   "Selezione ufficiale · MFFF 2023",
   "Official selection · MFFF 2023",
   "Milano Fashion Film Festival · selezione del film",
   "Milano Fashion Film Festival · film selection",
   "https://filmfreeway.com/WhenthePhoneRings"
  ]
 ],
 "the-broken-match": [
  [
   "Premiato · FIPILI 2024",
   "Award winner · FIPILI 2024",
   "Miglior trucco / effetti speciali · premio al film",
   "Best makeup / special effects · award to the film",
   "https://filmitalia.org/en/film/203533/"
  ]
 ],
 "the-new-ballad": [
  [
   "Prima fase superata · Biennale College U35 2022",
   "First-stage selection · Biennale College U35 2022",
   "Bando Registi U35 · selezione del progetto alla fase successiva",
   "Directors U35 call · project selected for the next stage",
   "https://fmpeople.fondazionemilano.eu/news/the-new-ballad-selezionato-dalla-biennale-teatro-di-venezia-bando-college-registi-u35"
  ]
 ],
 "deserto-mare": [
  [
   "Selezione · Animex 2020",
   "Selection · Animex 2020",
   "Animex International Festival of Animation · selezione del film",
   "Animex International Festival of Animation · film selection",
   "https://cinema.fondazionemilano.eu/news/la-civica-scuola-di-cinema-luchino-visconti-allanimex-award-2020"
  ]
 ]
};
const projectSources={
 'your-tactile-identity':[
  ['Kilowatt Festival · 2026','https://www.kilowattfestival.it/contenuto/your-tactile-identity-kwt2026-danza/','festival'],
  ['Tactile Appointment · Fuoriprogramma','https://www.fuoriprogramma.com/tactile-appointment/','festival'],
  ['Your Tactile Identity · InformaDanza','https://www.informadanza.com/blog/2026/07/20/your-tactile-identity-al-kilowatt-festival/','press'],
  ['Kilowatt · Recensione Persinsala','https://teatro.persinsala.it/rigetto-bandiera-your-tactile-identity-kilowatt-festival/71679/','press'],
  ['Kilowatt · Recensione In The Net','https://www.inthenet.eu/2026/08/07/rigetto-bandiera-your-tactile-identity/','press'],
  ['Your Tactile Identity · Exibart','https://www.exibart.com/danza/your-tactile-identity-tre-compagnie-di-danza-insieme-per-una-nuova-creazione-al-kilowatt-festival/amp/','press']
 ],
 'atteone':[
  ['Tyche · AiEP','https://www.aiep.org/artisti_associati/collettivo-tyche/','project'],
  ['Atteone prologo · Hangartfest','https://hangartfest.it/atteone-prologo/','festival'],
  ['Hangartfest · Rai News','https://www.rainews.it/tgr/marche/articoli/2025/09/hangartfest-a-pesaro-torna-il-festival-della-danza-contemporanea-0a2d38c2-c683-4616-b8aa-d15ec89469dd.html','press']
 ],
 'atteone-chapter-ii':[
  ['Atteone · Residenze Kilowatt','https://www.kilowattfestival.it/contenuto/atteone-michele-ifigenia-colturi-tyche/','project'],
  ['Hangartfest · 2025','https://hangartfest.it/hangartfest-2025/','festival']
 ],
 'the-new-ballad':[
  ['Biennale College Registi U35 · Selezione','https://fmpeople.fondazionemilano.eu/news/the-new-ballad-selezionato-dalla-biennale-teatro-di-venezia-bando-college-registi-u35','recognition'],
  ['Trampolino · Circuito CLAPS','https://teatro.fondazionemilano.eu/progetti/post-diploma/lincubatrice-dei-sogni/trampolino','project'],
  ['IntercettAzioni · Il progetto nel percorso del regista','https://fmpeople.fondazionemilano.eu/diplomati/giorgetti-emanuele-21916','recognition']
 ],
 'cuma':[
  ['CAM CAM 2022 · Giuria Blu e Giuria Verde','https://vimeo.com/724411469','recognition'],
  ['CUMA · Hangartfest','https://hangartfest.it/cuma/','festival'],
  ['Contemporanea · Teatro Metastasio','https://www.metastasio.it/it/eventi/contemporanea/contemporanea-2026/cuma.1628','festival'],
  ['Inequilibrio 2023 · Fondazione Armunia','https://armunia.eu/i-nostri-luoghi/eventi/66d96eCUMA.html','festival'],
  ['Ammutinamenti · Cantieri Danza','https://www.cantieridanza.it/festivalammutinamenti/events/cuma/','festival'],
  ['Tyche · AiEP','https://www.aiep.org/artisti_associati/collettivo-tyche/','project'],
  ['Citerone e Cuma · Scene Contemporanee','https://www.scenecontemporanee.it/festival-danza-rete-chiude-miti-dive-la-sua-sezione-off-al-teatro-comunale-vicenza/','press'],
  ['NAO Performing Festival · MilanoTeatri','https://www.milanoteatri.it/nao-performing-festival-the-garden/','press']
 ],
 'amadriadi':[
  ['Contemporanea · Teatro Metastasio','https://www.metastasio.it/it/eventi/contemporanea/contemporanea-2026/amadriadi.1627','festival'],
  ['Festival Danza Estate','https://www.festivaldanzaestate.it/amadriadi-michele-ifigenia-tyche-fde35/','festival'],
  ['Ritrovato Festival','https://ritrovatofestival.com/amadriadi/','festival'],
  ['Gender Bender 2025 · Programma','https://genderbender.it/wp-content/uploads/2025/10/Programma-Gender-Bender-2025.pdf','festival'],
  ['Amadriadi · Puglia Culture','https://www.pugliaculture.it/en/evento/amadriadi-solo-version-there-is-a-planet/','festival'],
  ['Inteatro Polverigi · Paneacquaculture','https://www.paneacquaculture.net/2023/06/24/inteatro-polverigi-le-arti-performative-nello-spazio-antropico/','press'],
  ['Tyche · AiEP','https://www.aiep.org/artisti_associati/collettivo-tyche/','project']
 ],
 'citerone':[
  ['Citerone · Danza in Rete','https://www.tcvi.it/site/assets/files/35676/13_off_ifigenia_zambelli.pdf','festival'],
  ['Tyche · AiEP','https://www.aiep.org/artisti_associati/collettivo-tyche/','project'],
  ['NAO Performing Festival · Sonorizzazione dal vivo','https://www.milanoteatri.it/nao-performing-festival-the-garden/','press'],
  ['Citerone e Cuma · Scene Contemporanee','https://www.scenecontemporanee.it/festival-danza-rete-chiude-miti-dive-la-sua-sezione-off-al-teatro-comunale-vicenza/','press']
 ],
 'be-my-darling':[
  ['Original Motion Picture Soundtrack · Apple Music','https://music.apple.com/us/album/be-my-darling-original-motion-picture-soundtrack-ep/6817046891','listen'],
  ['FIPILI Horror Festival 2026 · Concorso cortometraggi','https://comune.livorno.it/it/eventi/2519513','festival'],
  ['Be My Darling · Cast e crediti','https://watch.plex.tv/it/movie/be-my-darling-2026','project'],
  ['FIPILI Horror Festival · Programma e presentazione','https://www.tempoliberotoscana.it/event/fipili-horror-festival-2026/','press'],
  ['Original Motion Picture Soundtrack · Qobuz','https://www.qobuz.com/es-es/album/be-my-darling-original-motion-picture-soundtrack-steel/a1y8qmtjsagra','listen']
 ],
 'the-broken-match':[
  ['Trailer · Premiere Film','https://vimeo.com/907746127','watch'],
  ['Film, festival e riconoscimenti · Filmitalia','https://filmitalia.org/en/film/203533/','project']
 ],
 'mythology-of-a-dress':[
  ['Milano Fashion Film Festival 2023 · Official Selection','https://filmfreeway.com/MythologyofaDress','recognition'],
  ['Fashion film · Paul Guccione','https://vimeo.com/833821101','watch'],
  ['Trailer · Paul Guccione','https://vimeo.com/841123585','watch']
 ],
 'when-the-phone-rings':[
  ['Fashion film · Paul Guccione','https://vimeo.com/833818810','watch'],
  ['Milano Fashion Film Festival 2023 · Official Selection','https://filmfreeway.com/WhenthePhoneRings','recognition']
 ],
 'art-creature':[['Fashion film · Paul Guccione','https://vimeo.com/708131588','watch']],
 'light-and-dark':[['Fashion film · Paul Guccione','https://vimeo.com/708153639','watch']],
 'semplicemente-casa-mia':[
  ['Cinema Teatro Rizza · Presentazione del docufilm','https://www.eventbrite.com/e/semplicemente-casa-mia-tickets-1988615145432','project']
 ],
 'notturna':[
  ['Notturna · IMDb','https://www.imdb.com/title/tt49279807/','project'],
  ['Gregory Nuñez Perez · Film e produzione','https://www.filmmakers.eu/en/actors/gregory-nunez-perez','project']
 ],
 'samurai-shiba':[['Samurai Shiba · POLIMI Game Collective','https://polimi-game-collective.itch.io/samurai-shiba','project']],
 'wu':[
  ['WU · Scheda dello spettacolo e crediti','https://www.ilsonar.it/sonar.php?id=7818','project'],
  ['Morsi Inediti 2020 · Programma del videospettacolo','https://teatro.fondazionemilano.eu/uploads/news/MORSI-_INEDITI_2020_brochure.pdf','festival'],
  ['WU · Il progetto nel percorso di Emanuele Giorgetti','https://fmpeople.fondazionemilano.eu/diplomati/giorgetti-emanuele-21916','project']
 ],
 'i-want-you':[
  ['I Want You · IMDb','https://www.imdb.com/title/tt13175422/','project'],
  ['Original Motion Picture Soundtrack · Spotify','https://open.spotify.com/album/5HzhWCpciz5Z18pTG1redS','listen']
 ],
 'maelstrom':[
  ['CAM CAM e Interfaccia Digitale 2021 · Percorso del regista','https://www.teatrionline.it/2021/10/le-quattro-stagioni-torna-crescendo-in-musica-insieme-a-luca-santaniello-e-alle-musiche-di-vivaldi/','press']
 ],
 '999-questions-about-contemporary-living':[
  ['Civica@Triennale · Il progetto delle Scuole Civiche','https://fondazionemilano.eu/news/civica-triennale','project'],
  ['999 domande sull’abitare · Fuorisalone','https://www.fuorisalone.it/it/magazine/focus/article/89/999-domande-sullabitare','press'],
  ['999 domande · Domus','https://www.domusweb.it/en/architecture/2018/01/11/999-questions-everyday-and-generative-living-on-show-at-the-triennale-di-milano.html','press']
 ],
 'abitare-luoghi-che-nessuno-vede':[
  ['Civica@Triennale · Calendario delle proiezioni','https://fondazionemilano.eu/news/civica-triennale','project'],
  ['Corti Dop · Musei a cielo aperto','https://fondazionemilano.eu/news/corti-dop-musei-a-cielo-aperto','festival']
 ],
 'abitare-un-racconto':[
  ['Civica@Triennale · Calendario delle proiezioni','https://fondazionemilano.eu/news/civica-triennale','project'],
  ['Corti Dop · Musei a cielo aperto','https://fondazionemilano.eu/news/corti-dop-musei-a-cielo-aperto','festival']
 ],
 'abitare-la-natura':[['Civica@Triennale · Abitare la natura','https://fondazionemilano.eu/news/civica-triennale','project']],
 'spot-hi-fi':[['AGON action Lab · Catalogo di Michele Tadini','https://micheletadini.net/about-me/works/','project']],
 'sampling-the-movement':[['AGON action Lab · Catalogo di Michele Tadini','https://micheletadini.net/about-me/works/','project']],
 'onda-su-onda':[['AGON action Lab · Catalogo di Michele Tadini','https://micheletadini.net/about-me/works/','project']],
 'deserto-mare':[
  ['Animex Award 2020 · Selezione','https://cinema.fondazionemilano.eu/news/la-civica-scuola-di-cinema-luchino-visconti-allanimex-award-2020','festival']
 ]
};
Object.assign(copy.it,{backWorks:'Torna ai lavori',resources:'Esplora il progetto',press:'Articoli',festival:'Festival',recognition:'Riconoscimenti',project:'Progetto',watchResource:'Video',listenResource:'Ascolto',trailer:'Musica originale per il trailer',nextProject:'Progetto successivo',previousProject:'Progetto precedente'});
Object.assign(copy.en,{backWorks:'Back to works',resources:'Explore the project',press:'Press',festival:'Festivals',recognition:'Recognition',project:'Project',watchResource:'Video',listenResource:'Listen',trailer:'Original trailer music',nextProject:'Next project',previousProject:'Previous project'});
let workReturnRoute='work';
let workScrollY=0;
let workFocusKey=null;
let workTransition=0;
const workMotion={exit:180,enter:480,easing:'cubic-bezier(.16,1,.3,1)'};
const storageKey='tarek-portfolio-language';
let language='en';
let filter='all';
const categoryRoutes=['performing','film','games','commercial','installation','live'];
const pageRoutes=['home','featured','work','about','archive','contact',...categoryRoutes];
try { const saved=localStorage.getItem(storageKey); language=['en','it'].includes(saved)?saved:(navigator.language.toLowerCase().startsWith('it')?'it':'en'); }
catch(error){console.warn('Language preference storage is unavailable:',error.message);language=navigator.language.toLowerCase().startsWith('it')?'it':'en';}
const t=key=>copy[language][key]||key;
const countLabel=count=>count+' '+t(count===1?'single':'count');
const el=(tag,cls,text)=>{const node=document.createElement(tag);if(cls)node.className=cls;if(text!==undefined)node.textContent=text;return node;};
function projectPicture(project,fullPoster=false){
 const picture=el('div','project-image'+(project.fill?' fill-image':'')+(project.contain?' contain-image':'')+(project.poster?' poster-'+project.poster:'')+(project.portrait?' portrait-image':''));
 if(project.image){const img=el('img');img.src='assets/'+project.image;img.alt=project.title;img.loading='lazy';if(project.crop&&!(fullPoster&&project.portrait))img.style.objectPosition=project.crop;picture.append(img);}
 else{const art=el('div','type-art'+(project.title.length>28?' long-title':''));art.append(el('span','poster-label',t(project.cat)),el('strong','poster-title',project.localizedTitle?.[language]||project.title),el('span','poster-credit','TAREK BOUGUERRA / '+project.year));picture.append(art);}
 return picture;
}
const projectOrder=['be-my-darling','your-tactile-identity','semplicemente-casa-mia','notturna','atteone'];
function compareProjects(a,b){
 const first=projectOrder.indexOf(projectKey(a.title)),second=projectOrder.indexOf(projectKey(b.title));
 if(first!==-1||second!==-1)return (first===-1?projectOrder.length:first)-(second===-1?projectOrder.length:second);
 return Number(b.year)-Number(a.year);
}
function renderProjects(target='projects',selection=null){
 const container=document.getElementById(target);container.replaceChildren();
 const visible=selection||projects.filter(p=>filter==='all'||p.cat===filter).sort(compareProjects);
 visible.forEach(project=>{
  const title=project.localizedTitle?.[language]||project.title;
  const article=el('article','project reveal');
  const picture=projectPicture(project);
  const meta=el('div','project-meta');meta.append(el('span','',t(project.cat)),el('time','',project.year));
  const content=el('a','project-link');content.href='#project/'+projectKey(project.title);content.setAttribute('aria-label',title);article.append(content);
  content.addEventListener('click',event=>{if(event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;workReturnRoute=target==='featured-projects'?'featured':filter==='all'?'work':filter;workScrollY=window.scrollY;});
  content.append(picture,meta,el('h3','',title),el('p','role',t(project.role)));
  const recognitions=projectRecognitions[projectKey(project.title)]||[];
  if(recognitions.length){const summary=el('p','project-recognitions');recognitions.forEach(recognition=>{const line=el('span','',recognition[language==='it'?0:1]);line.title=recognition[language==='it'?2:3];summary.append(line);});content.append(summary);}
  container.append(article);
 });
 if(target==='projects')document.querySelector('#result-count').textContent=countLabel(visible.length);
 observeReveals();
}
function projectLinks(project){
 const links=[...(projectSources[projectKey(project.title)]||[])];
 if(project.url)links.unshift([project.url.includes('bandcamp.com')?'Bandcamp':project.url.includes('agon.news')?'AGON · '+project.title:project.title,project.url,project.url.includes('bandcamp.com')?'listen':'project']);
 if(project.youtube)links.unshift(['YouTube','https://www.youtube.com/watch?v='+project.youtube,'watch']);
 return links.filter((link,index)=>links.findIndex(other=>other[1]===link[1])===index);
}
function renderProjectFocus(project){
 const area=document.querySelector('#project-focus');area.replaceChildren();
 const back=el('a','project-back','← '+t('backWorks'));back.href='#'+workReturnRoute;area.append(back);
 const layout=el('div','project-focus-layout');layout.append(projectPicture(project,true));
 const info=el('div','project-focus-copy');const meta=el('p','eyebrow',t(project.cat)+' / '+project.year);
 const heading=el('h2','project-focus-title',project.localizedTitle?.[language]||project.title);heading.id='project-focus-title';heading.tabIndex=-1;
 info.append(meta,heading,el('p','project-focus-role',t(project.role)));
 if(project.director)info.append(el('p','project-focus-description',(language==='it'?'Regia: ':'Directed by ')+project.director));
 if(project.description?.[language])info.append(el('p','project-focus-description',project.description[language]));
 else if(project.type)info.append(el('p','project-focus-description',language==='it'?(typeTranslations[project.type]||project.type):project.type));
 const recognitions=projectRecognitions[projectKey(project.title)]||[];
 if(recognitions.length){
  info.append(el('h3','project-resource-heading',language==='it'?'Riconoscimenti':'Recognition'));
  const awards=el('div','project-awards');
  recognitions.forEach(recognition=>{const link=el('a','project-award');link.href=recognition[4];link.target='_blank';link.rel='noopener';link.append(el('strong','',recognition[language==='it'?0:1]),el('span','',recognition[language==='it'?2:3]+' ↗︎'));awards.append(link);});info.append(awards);
 }
 const links=projectLinks(project);
 if(links.length)info.append(el('h3','project-resource-heading',t('resources')));
 const resources=el('div','project-resources');
 links.forEach(([label,url,kind])=>{
  const link=el('a','project-resource');link.href=url;link.target='_blank';link.rel='noopener';
  const text=el('span');const kindKey=kind==='watch'?'watchResource':kind==='listen'?'listenResource':kind;
  text.append(el('span','resource-kind',t(kindKey)),el('span','resource-title',label));link.append(text,el('span','resource-arrow','↗︎'));resources.append(link);
 });
 if(links.length)info.append(resources);layout.append(info);area.append(layout);
 const siblings=projects.filter(item=>(workReturnRoute==='work'||(workReturnRoute==='home'||workReturnRoute==='featured'))||item.cat===workReturnRoute).sort(compareProjects);
 const index=siblings.indexOf(project);const navigation=el('nav','project-pagination');navigation.setAttribute('aria-label',language==='it'?'Altri progetti':'Other projects');
 if(index>0){const previous=el('a','', '← '+t('previousProject'));previous.href='#project/'+projectKey(siblings[index-1].title);navigation.append(previous);}
 if(index<siblings.length-1){const next=el('a','',t('nextProject')+' →');next.href='#project/'+projectKey(siblings[index+1].title);navigation.append(next);}
 area.append(navigation);
}
async function renderWorkView(project,scroll){
 const token=++workTransition;const grid=document.querySelector('#projects');const focus=document.querySelector('#project-focus');const filters=document.querySelector('#work .filters');const count=document.querySelector('#result-count');
 const wasFocused=workFocusKey!==null;const changed=workFocusKey!==(project?projectKey(project.title):null);const outgoing=wasFocused?focus:grid;
 if(changed&&scroll&&!reducedMotion.matches){
  outgoing.getAnimations().forEach(animation=>animation.cancel());
  const animation=outgoing.animate([{opacity:1,transform:'translateY(0)'},{opacity:0,transform:'translateY(-10px)'}],{duration:workMotion.exit,easing:workMotion.easing});
  await animation.finished.catch(error=>{if(error.name!=='AbortError')console.error('Project transition failed:',error);});
 }
 if(token!==workTransition)return;
 workFocusKey=project?projectKey(project.title):null;
 document.querySelector('#work').classList.toggle('is-project-open',Boolean(project));
 grid.hidden=Boolean(project);focus.hidden=!project;filters.hidden=Boolean(project);count.hidden=Boolean(project);
 if(project)renderProjectFocus(project);else renderProjects();
 if(project&&changed&&!scroll)document.querySelector('#work').scrollIntoView({behavior:'instant',block:'start'});
 if(scroll&&changed){
  if(project)document.querySelector('#work').scrollIntoView({behavior:'instant',block:'start'});
  else if(wasFocused)window.scrollTo({top:workScrollY,behavior:'instant'});
  if(!reducedMotion.matches)(project?focus:grid).animate([{opacity:0,transform:'translateY(16px)'},{opacity:1,transform:'translateY(0)'}],{duration:workMotion.enter,easing:workMotion.easing});
  if(project)document.querySelector('#project-focus-title').focus({preventScroll:true});
 else if(wasFocused)grid.querySelector('a[href="#project/'+projectKey(outgoing.dataset.projectTitle||'')+'"]')?.focus({preventScroll:true});
 }
 if(project)focus.dataset.projectTitle=project.title;
}
function renderCredits(){
 const container=document.querySelector('#credit-list');const openYears=new Set([...container.querySelectorAll('details[open]')].map(d=>d.dataset.year));const firstRender=!container.childElementCount;container.replaceChildren();
 [...new Set(credits.map(c=>c.year))].forEach((year,index)=>{
  const section=el('details','credit-year');section.dataset.year=year;section.open=firstRender?index===0:openYears.has(year);
  const rows=credits.filter(c=>c.year===year).sort(compareProjects);const summary=el('summary','',year);summary.append(el('span','',countLabel(rows.length)));const body=el('div','credit-rows');
  rows.forEach(c=>{const row=el('div','credit-row');row.append(el('div','',c.title),el('span','',language==='it'?(typeTranslations[c.type]||c.type):c.type),el('span','',language==='it'?(typeTranslations[c.role]||c.role):c.role));body.append(row);});section.append(summary,body);container.append(section);
 });
}
function setLanguage(next,save){
 language=next;document.documentElement.lang=language;
 document.querySelectorAll('[data-i18n]').forEach(node=>{const key=node.dataset.i18n;if(key==='aboutHeading'||key==='contactHeading'||key==='reelNote'){node.replaceChildren();const lines=t(key).split('\n');node.append(document.createTextNode(lines[0]),el('br'));node.append(key==='contactHeading'?el('em','',lines[1]):document.createTextNode(lines[1]));}else node.textContent=t(key);});
 document.querySelectorAll('[data-label]').forEach(node=>node.setAttribute('aria-label',t(node.dataset.label)));
 document.querySelector('.wordmark').setAttribute('aria-label',language==='it'?'Tarek Bouguerra — inizio':'Tarek Bouguerra — home');
 document.querySelectorAll('[data-lang]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.lang===language)));
 document.querySelector('meta[name=description]').content=t('meta');document.title=language==='it'?'Tarek Bouguerra — Compositore, sound designer e performer':'Tarek Bouguerra — Composer, sound designer & performer';
 renderCredits();updateRoute(false);document.querySelector('.menu-toggle').setAttribute('aria-label',t(menuOpen?'closeMenu':'openMenu'));
 if(save)try{localStorage.setItem(storageKey,language);}catch(error){console.warn('Language preference could not be saved:',error.message);}
}
document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang,true)));
function updateRoute(scroll=true){
 const requested=location.hash.slice(1)||'home';
 const project=requested.startsWith('project/')?projects.find(item=>projectKey(item.title)===requested.slice('project/'.length)):null;
 const route=project?'work':pageRoutes.includes(requested)||requested==='listening'?requested:'home';
 const isArchive=route==='archive';
 document.querySelector('#home').hidden=isArchive;
 document.querySelector('#archive').hidden=!isArchive;
 document.body.classList.toggle('interior-page',isArchive);
 if(isArchive)closeListening();
 const isCategory=categoryRoutes.includes(route)||route==='work';
 document.querySelector('#work').hidden=!(isCategory||project);
 document.querySelector('#featured').hidden=Boolean(isCategory||project);
 renderProjects('featured-projects',projectOrder.map(key=>projects.find(project=>projectKey(project.title)===key)).filter(Boolean));
 filter=project?((workReturnRoute==='work'||(workReturnRoute==='home'||workReturnRoute==='featured'))?'all':workReturnRoute):categoryRoutes.includes(route)?route:'all';
 document.querySelectorAll('.header nav a,.menu-panel nav a').forEach(link=>{if(link.hash==='#'+route||(isCategory&&link.hash==='#work'))link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});
 document.querySelector('#category-title').textContent=t(filter==='all'?'all':filter);
 document.querySelector('#back-featured').hidden=Boolean(project);
 document.querySelectorAll('[data-filter]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.filter===((!isCategory&&!project)?'featured':filter))));
 renderWorkView(project,scroll&&isCategory);
 document.title='Tarek Bouguerra — '+(project?project.title:t(isArchive?'credits':'profession'));
 if(scroll&&!project&&(!isCategory||workFocusKey===null)){
  const target=document.getElementById(isCategory?'work':route);
  if(isCategory||route==='featured')window.scrollTo({top:target.getBoundingClientRect().top+scrollY-document.querySelector('.header').getBoundingClientRect().height,behavior:reducedMotion.matches?'instant':'smooth'});
  else target.scrollIntoView({behavior:reducedMotion.matches?'instant':'smooth'});
 }
 observeReveals();
 requestAnimationFrame(updateIdentity);
}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{const route=button.dataset.filter==='all'?'work':button.dataset.filter;if(location.hash==='#'+route)updateRoute();else location.hash=route;}));
window.addEventListener('hashchange',()=>{setMenu(false);updateRoute();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!menuOpen&&location.hash.startsWith('#project/'))location.hash=workReturnRoute;});
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
const revealObserver='IntersectionObserver' in window?new IntersectionObserver(entries=>{
 entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-revealed');revealObserver.unobserve(entry.target);}});
},{threshold:0.08,rootMargin:'0px 0px -25px 0px'}):null;
if(revealObserver&&!reducedMotion.matches)document.documentElement.classList.add('js-motion');
function observeReveals(){
 document.querySelectorAll('.reveal:not(.is-revealed)').forEach(node=>{if(revealObserver&&!reducedMotion.matches)revealObserver.observe(node);else node.classList.add('is-revealed');});
}
function animatePage(id){
 if(reducedMotion.matches)return;
 const section=document.getElementById(id);
 if(section.hidden)return;
 section.getAnimations().forEach(animation=>animation.cancel());
 if(id==='home'){

 }else section.animate([{opacity:0,transform:'translateY(22px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,easing:'cubic-bezier(.16,1,.3,1)'});
}
const menuButton=document.querySelector('.menu-toggle');
const menuPanel=document.querySelector('#menu-panel');
let menuOpen=false;
let menuPreviousFocus=null;
function setMenu(open){
 if(open===menuOpen)return;
 menuOpen=open;menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',t(open?'closeMenu':'openMenu'));
 document.body.classList.toggle('menu-open',open);menuPanel.hidden=!open;document.querySelector('main').inert=open;document.querySelector('.site-footer').inert=open;document.querySelector('.header nav').inert=open;
 if(open){menuPreviousFocus=document.activeElement;if(!reducedMotion.matches)menuPanel.animate([{opacity:0,clipPath:'inset(0 0 100% 0)'},{opacity:1,clipPath:'inset(0 0 0 0)'}],{duration:550,easing:'cubic-bezier(.16,1,.3,1)'});menuPanel.querySelector('a').focus();}
 else if(menuPreviousFocus?.isConnected)menuPreviousFocus.focus({preventScroll:true});
 updateIdentity();
}
menuButton.addEventListener('click',()=>setMenu(!menuOpen));
menuPanel.addEventListener('click',event=>{if(event.target.closest('a'))setMenu(false);});
document.addEventListener('keydown',event=>{
 if(!menuOpen)return;
 if(event.key==='Escape'){setMenu(false);return;}
 if(event.key==='Tab'){
  const focusable=[menuButton,...document.querySelectorAll('.languages button'),...menuPanel.querySelectorAll('a')];
  const first=focusable[0],last=focusable[focusable.length-1];
  if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
 }
});
let reelWidget=null,reelReady=false,reelLoading=false,reelTimeout=null,reelPlayRequested=false;
const reel=document.querySelector('#listening-player');
const reelToggle=document.querySelector('#reel-toggle');
const reelStatus=document.querySelector('#reel-status');
const reelSeek=document.querySelector('#reel-seek');
const reelTitles={"1969290339": "Wedding", "1969300599": "re-born", "1969424655": "Ending", "1969292383": "Me and my self.", "1969289347": "Heist", "1969287395": "Something off", "1623635991": "Pause", "1623641733": "You Know", "1319152777": "Main Theme - (SAMURAI SHIBA ORIGINAL SOUNDTRACK)", "885748786": "Requiem", "661925132": "Kaguya-Hime no Monogatari", "1196507656": "More Problems", "1196507710": "Main Title", "1543646683": "Odin", "2303077916": "Atteone cap. II"};
const reelTime=value=>Math.floor(value/60000)+':'+String(Math.floor(value/1000)%60).padStart(2,'0');
const reelFadeDuration=350;
let reelFadeFrame=0,reelVolume=100,reelFadeInRequested=false;
function fadeReel(volume,done){
 cancelAnimationFrame(reelFadeFrame);const start=performance.now(),from=reelVolume;
 function tick(now){const progress=Math.min(1,(now-start)/reelFadeDuration);reelVolume=from+(volume-from)*progress;reelWidget.setVolume(reelVolume);if(progress<1)reelFadeFrame=requestAnimationFrame(tick);else if(done)done();}
 reelFadeFrame=requestAnimationFrame(tick);
}
function startReel(){reelFadeInRequested=true;cancelAnimationFrame(reelFadeFrame);reelVolume=0;reelWidget.setVolume(0);reelWidget.play();}
function collapseReel(){reel.classList.remove('is-expanded');document.querySelector('#reel-track-panel').inert=true;reelToggle.setAttribute('aria-expanded','false');}
function reelFailure(){
 clearTimeout(reelTimeout);reelLoading=false;reelStatus.textContent=language==='it'?'Audio non disponibile. Apri SoundCloud dal link sotto.':'Audio unavailable. Open SoundCloud below.';
 reelToggle.disabled=true;
}
function syncReel(){
 reelWidget.getCurrentSound(sound=>{if(!sound)return;document.querySelector('#reel-title').textContent=sound.title||'SOUNDREEL';reelSeek.max=sound.duration;document.querySelector('#reel-duration').textContent=reelTime(sound.duration);});
 reelWidget.getCurrentSoundIndex(index=>{document.querySelectorAll('#reel-tracks button').forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));reelWidget.getCurrentSound(sound=>{const button=document.querySelectorAll('#reel-tracks button')[index];if(button&&sound?.title)button.textContent=String(index+1).padStart(2,'0')+' / '+sound.title;});});
}
function connectReel(){
 if(!window.SC?.Widget){reelFailure();return;}
 const frame=document.querySelector('.home-player');reelWidget=SC.Widget(frame);
 const events=SC.Widget.Events;
 reelWidget.bind(events.READY,()=>{
  clearTimeout(reelTimeout);reelReady=true;reelLoading=false;reelToggle.disabled=false;reelStatus.textContent='';
  reelWidget.getSounds(sounds=>{const list=document.querySelector('#reel-tracks');list.replaceChildren();sounds.forEach((sound,index)=>{const button=el('button','reel-track',String(index+1).padStart(2,'0')+' / '+(sound.title||reelTitles[sound.id]||(language==='it'?'Traccia ':'Track ')+(index+1)));button.type='button';button.addEventListener('click',()=>{cancelAnimationFrame(reelFadeFrame);reelFadeInRequested=false;reelVolume=100;reelWidget.setVolume(100);reelWidget.skip(index);reelWidget.play();});list.append(button);});});syncReel();if(reelPlayRequested){reelPlayRequested=false;startReel();}
 });
 reelWidget.bind(events.PLAY,()=>{if(reelFadeInRequested){reelFadeInRequested=false;fadeReel(100);}reelToggle.textContent=language==='it'?'Pausa':'Pause';reelToggle.classList.add('is-playing');reelToggle.setAttribute('aria-label',language==='it'?'Pausa':'Pause');syncReel();});
 reelWidget.bind(events.PAUSE,()=>{reelToggle.textContent=language==='it'?'Ascolta':'Listen';reelToggle.classList.remove('is-playing');reelToggle.setAttribute('aria-label','Play');});
 reelWidget.bind(events.PLAY_PROGRESS,event=>{reelSeek.value=event.currentPosition;document.querySelector('#reel-position').textContent=reelTime(event.currentPosition);});
 reelWidget.bind(events.FINISH,()=>{cancelAnimationFrame(reelFadeFrame);reelFadeInRequested=false;reelVolume=100;reelWidget.setVolume(100);});
 reelWidget.bind(events.ERROR,reelFailure);
 
}
function closeListening(){
 if(reelReady)reelWidget.pause();reelPlayRequested=false;reel.classList.remove('is-expanded');document.querySelector('#reel-track-panel').inert=true;reelToggle.setAttribute('aria-expanded','false');
}
function openListening(play=false){
 reel.classList.add('is-expanded');document.querySelector('#reel-track-panel').inert=false;reelToggle.setAttribute('aria-expanded','true');
 drawTerrain();
 if(reelReady){if(play)startReel();return;}
 reelPlayRequested=reelPlayRequested||play;
 loadReel();
}
function loadReel(){
 if(reelReady)return;
 if(reelLoading)return;
 const frame=document.querySelector('.home-player');if(!frame.hasAttribute('src'))frame.src=frame.dataset.src;
 reelLoading=true;reelToggle.disabled=true;reelStatus.textContent=language==='it'?'Caricamento audio…':'Loading audio…';reelTimeout=setTimeout(reelFailure,20000);
 if(window.SC?.Widget)connectReel();else{const api=document.createElement('script');api.src='https://w.soundcloud.com/player/api.js';api.onload=connectReel;api.onerror=reelFailure;document.head.append(api);}
}
reelToggle.addEventListener('click',()=>{if(reelReady){if(reelToggle.classList.contains('is-playing'))fadeReel(0,()=>{collapseReel();reelWidget.pause();});else{openListening();startReel();}}else openListening(true);});
reelSeek.addEventListener('input',()=>{if(reelReady)reelWidget.seekTo(Number(reelSeek.value));});
const reelLoadObserver=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){loadReel();reelLoadObserver.disconnect();}},{rootMargin:'250px'});
reelLoadObserver.observe(reel);
document.querySelector('#hero-listen').addEventListener('click',()=>{openListening();document.querySelector('#listening').scrollIntoView({behavior:reducedMotion.matches?'instant':'smooth'});});
document.querySelector('#scroll-work').addEventListener('click',()=>document.querySelector('#featured').scrollIntoView({behavior:reducedMotion.matches?'instant':'smooth'}));
let headerFrame=0;
window.addEventListener('scroll',()=>{if(headerFrame)return;headerFrame=requestAnimationFrame(()=>{headerFrame=0;document.querySelector('.header').classList.toggle('is-scrolled',scrollY>35);updateIdentity();});},{passive:true});
const appearanceKey='tarek-topographic-appearance';
const accents=[{dark:'#ffffff',light:'#000000'}];
let appearance={theme:'dark',accent:0};
try{const saved=JSON.parse(localStorage.getItem(appearanceKey)||'null');if(saved){appearance.theme=saved.theme==='light'?'light':'dark';appearance.accent=Number.isInteger(saved.accent)&&saved.accent>=0&&saved.accent<accents.length?saved.accent:0;}}catch(error){console.warn('Appearance settings could not be read:',error.message);}
function applyAppearance(save=true){
 document.body.dataset.theme=appearance.theme;
 document.documentElement.style.setProperty('--accent',accents[appearance.accent][appearance.theme]);
 document.querySelector('.theme-toggle').setAttribute('aria-pressed',String(appearance.theme==='light'));
 document.querySelector('meta[name=theme-color]').content=appearance.theme==='light'?'#f2f1ec':'#0b0c0d';
 if(save)try{localStorage.setItem(appearanceKey,JSON.stringify(appearance));}catch(error){console.warn('Appearance settings could not be saved:',error.message);}
 drawTerrain();
}
document.querySelector('.theme-toggle').addEventListener('click',()=>{appearance.theme=appearance.theme==='dark'?'light':'dark';applyAppearance();});
const terrainCanvas=document.querySelector('#terrain');
const terrainContext=terrainCanvas.getContext('webgl2',{alpha:true,premultipliedAlpha:true,antialias:false});
const terrainHero=document.body;
const terrainEase=.08;
const terrainDpr=Math.min(devicePixelRatio||1,1.5);
const terrainIdleDuration=4000;
let terrainFrame=0,terrainVisible=true,terrainWidth=0,terrainHeight=0,terrainTime=0,terrainLast=performance.now(),terrainUntil=terrainLast+terrainIdleDuration;
const terrainPointer={x:0,y:0,targetX:0,targetY:0,strength:0,targetStrength:0};
let terrainProgram=null;
const terrainUniforms={};
const terrainGlyphs=document.createElement('canvas'),terrainMask=document.createElement('canvas');
const terrainGlyphContext=terrainGlyphs.getContext('2d'),terrainMaskContext=terrainMask.getContext('2d');
const terrainTextNearRadius=32,terrainTextFarRadius=100;
let terrainMaskDirty=true,terrainMaskTexture=null;

if(terrainContext){
 const gl=terrainContext;
 const vertex=`#version 300 es
 in vec2 position;void main(){gl_Position=vec4(position,0.,1.);}`;
 // Fractional noise produces continuous terrain; derivatives keep its isolines crisp at every scale.
 const fragment=`#version 300 es
 precision highp float;
 uniform vec2 resolution,pointer,reelBand;
 uniform float time,pull;
 uniform vec3 ink,accent;
 uniform sampler2D textProximity;
 
 out vec4 colour;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),u.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x),u.y);}
 float field(vec2 p){float value=0.,weight=.5;for(int octave=0;octave<5;octave++){value+=weight*noise(p);p=p*2.03+11.7;weight*=.5;}return value;}
 float line(float height,float width){float edge=abs(fract(height+.5)-.5);return 1.-smoothstep(0.,fwidth(height)*width,edge);}
 void main(){
 vec2 uv=gl_FragCoord.xy/resolution.y;
 float distanceToPointer=distance(uv,pointer/resolution.y);
 float hill=exp(-distanceToPointer*distanceToPointer*5.)*pull;
 float height=(field(uv*1.35+vec2(time*.018,time*.011))+hill*.55)*18.;
 float minor=line(height,1.2),major=line(height/5.,2.);
 float fade=(smoothstep(.25,.85,gl_FragCoord.x/resolution.x)*.85+.15)*smoothstep(0.,.3,gl_FragCoord.y/resolution.y);
 float alpha=(minor*.34+major*.62+hill*minor*.5+step(.5,fract(height/2.))*hill*.1)*fade;
 float inReel=step(reelBand.x,gl_FragCoord.y)*step(gl_FragCoord.y,reelBand.y);
 vec3 lineInk=mix(ink,vec3(.89,.84,.71),inReel);
 float textProximityValue=texture(textProximity,gl_FragCoord.xy/resolution).a;
 alpha*=1.-.75*(1.-exp(-4.*textProximityValue));
 colour=vec4(lineInk*alpha,alpha);
 }`;
 const shaders=[];
 try{
  terrainProgram=gl.createProgram();
  for(const [type,source] of [[gl.VERTEX_SHADER,vertex],[gl.FRAGMENT_SHADER,fragment]]){
   const shader=gl.createShader(type);gl.shaderSource(shader,source);gl.compileShader(shader);
   if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(shader));
   gl.attachShader(terrainProgram,shader);shaders.push(shader);
  }
  gl.linkProgram(terrainProgram);
  if(!gl.getProgramParameter(terrainProgram,gl.LINK_STATUS))throw new Error(gl.getProgramInfoLog(terrainProgram));
  gl.useProgram(terrainProgram);
  const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
  const position=gl.getAttribLocation(terrainProgram,'position');gl.enableVertexAttribArray(position);gl.vertexAttribPointer(position,2,gl.FLOAT,false,0,0);
  for(const name of ['resolution','pointer','reelBand','time','pull','ink','accent','textProximity'])terrainUniforms[name]=gl.getUniformLocation(terrainProgram,name);
  terrainMaskTexture=gl.createTexture();gl.activeTexture(gl.TEXTURE0);gl.bindTexture(gl.TEXTURE_2D,terrainMaskTexture);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
  gl.uniform1i(terrainUniforms.textProximity,0);
 }catch(error){console.warn('Terrain rendering unavailable:',error.message);if(terrainProgram)gl.deleteProgram(terrainProgram);terrainProgram=null;}
 finally{shaders.forEach(shader=>gl.deleteShader(shader));}
}else console.warn('WebGL2 unavailable: the portfolio remains usable without animated terrain.');
function resizeTerrain(){
 terrainMaskDirty=true;
 const rect=terrainCanvas.getBoundingClientRect();if(!rect.width||!rect.height)return;
 terrainWidth=rect.width;terrainHeight=rect.height;
 terrainCanvas.width=Math.round(terrainWidth*terrainDpr);terrainCanvas.height=Math.round(terrainHeight*terrainDpr);
 if(terrainProgram)terrainContext.viewport(0,0,terrainCanvas.width,terrainCanvas.height);
 drawTerrain();scheduleTerrain();
}
function updateTerrainTextMask(){
 if(!terrainMaskDirty)return;
 terrainMaskDirty=false;
 terrainGlyphs.width=terrainMask.width=Math.ceil(terrainWidth);terrainGlyphs.height=terrainMask.height=Math.ceil(terrainHeight);
 const ctx=terrainGlyphContext;ctx.fillStyle='#fff';ctx.textBaseline='top';
 const walker=document.createTreeWalker(document.querySelector('main'),NodeFilter.SHOW_TEXT);
 const range=document.createRange();let node;
 while((node=walker.nextNode())){
  const parent=node.parentElement;
  if(!node.textContent.trim()||!parent||parent.closest('#contact,script,style,iframe,[hidden],[inert],.project-image'))continue;
  const rect=parent.getBoundingClientRect();if(!rect.width||!rect.height||rect.bottom<0||rect.top>terrainHeight)continue;
  const style=getComputedStyle(parent);if(style.visibility==='hidden'||style.display==='none')continue;
  ctx.font=style.font;ctx.letterSpacing=style.letterSpacing==='normal'?'0px':style.letterSpacing;
  for(const word of node.textContent.matchAll(/\S+/g)){
   range.setStart(node,word.index);range.setEnd(node,word.index+word[0].length);
   const bounds=range.getBoundingClientRect();if(bounds.bottom<0||bounds.top>terrainHeight)continue;
   const text=style.textTransform==='uppercase'?word[0].toUpperCase():word[0];
   ctx.fillText(text,bounds.left,bounds.top);
  }
 }
 range.detach();
 const mask=terrainMaskContext;
 mask.filter='blur('+terrainTextFarRadius+'px)';mask.globalAlpha=.65;mask.drawImage(terrainGlyphs,0,0);
 mask.filter='blur('+terrainTextNearRadius+'px)';mask.globalAlpha=.65;mask.drawImage(terrainGlyphs,0,0);
 const gl=terrainContext;gl.activeTexture(gl.TEXTURE0);gl.bindTexture(gl.TEXTURE_2D,terrainMaskTexture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,terrainMask);
}
function drawTerrain(){
 if(!terrainProgram||!terrainWidth||terrainContext.isContextLost())return;
 updateTerrainTextMask();
 const gl=terrainContext,style=getComputedStyle(document.body);
 const rgb=value=>{const hex=value.trim().replace('#','');return [0,2,4].map(index=>parseInt(hex.slice(index,index+2),16)/255);};
 const reelRect=document.querySelector('#listening').getBoundingClientRect();
 gl.uniform2f(terrainUniforms.reelBand,(terrainHeight-reelRect.bottom)*terrainDpr,(terrainHeight-reelRect.top)*terrainDpr);
 gl.uniform2f(terrainUniforms.resolution,terrainCanvas.width,terrainCanvas.height);
 gl.uniform2f(terrainUniforms.pointer,terrainPointer.x*terrainDpr,(terrainHeight-terrainPointer.y)*terrainDpr);
 gl.uniform1f(terrainUniforms.time,terrainTime);gl.uniform1f(terrainUniforms.pull,terrainPointer.strength);
 gl.uniform3fv(terrainUniforms.ink,appearance.theme==='light'?[0,0,0]:[1,1,1]);
 gl.uniform3fv(terrainUniforms.accent,rgb(getComputedStyle(document.documentElement).getPropertyValue('--accent')));
 gl.drawArrays(gl.TRIANGLES,0,3);
}
function terrainTick(now){
 terrainFrame=0;
 if(document.hidden||!terrainVisible||reducedMotion.matches)return;
 const motion=Math.pow(Math.min(1,Math.max(0,(terrainUntil+1000-now)/1000)),2);
 terrainTime+=Math.min(now-terrainLast,50)/1000*motion;terrainLast=now;
 terrainPointer.x+=(terrainPointer.targetX-terrainPointer.x)*terrainEase;
 terrainPointer.y+=(terrainPointer.targetY-terrainPointer.y)*terrainEase;
 terrainPointer.strength+=(terrainPointer.targetStrength-terrainPointer.strength)*.04;
 drawTerrain();
 if(motion>0||Math.abs(terrainPointer.targetX-terrainPointer.x)+Math.abs(terrainPointer.targetY-terrainPointer.y)>1||Math.abs(terrainPointer.targetStrength-terrainPointer.strength)>.002)scheduleTerrain();
}
window.addEventListener('scroll',()=>{terrainMaskDirty=true;drawTerrain();},{passive:true});
function scheduleTerrain(){if(terrainProgram&&!terrainFrame){terrainLast=performance.now();terrainFrame=requestAnimationFrame(terrainTick);}}
terrainHero.addEventListener('pointermove',event=>{
 if(reducedMotion.matches)return;
 const rect=terrainCanvas.getBoundingClientRect();terrainPointer.targetX=event.clientX-rect.left;terrainPointer.targetY=event.clientY-rect.top;terrainPointer.targetStrength=1;terrainUntil=performance.now()+1500;
 terrainHero.style.setProperty('--pointer-x',terrainPointer.targetX+'px');terrainHero.style.setProperty('--pointer-y',terrainPointer.targetY+'px');terrainHero.classList.add('pointer-active');scheduleTerrain();
},{passive:true});
terrainHero.addEventListener('pointerleave',()=>{terrainPointer.targetStrength=0;terrainHero.classList.remove('pointer-active');scheduleTerrain();});
const terrainObserver=new IntersectionObserver(entries=>{terrainVisible=entries[0].isIntersecting;if(terrainVisible)scheduleTerrain();else if(terrainFrame){cancelAnimationFrame(terrainFrame);terrainFrame=0;}},{threshold:0});
terrainObserver.observe(terrainCanvas);
new MutationObserver(()=>{terrainMaskDirty=true;drawTerrain();}).observe(document.querySelector('main'),{childList:true,subtree:true,characterData:true});
document.fonts.ready.then(()=>{terrainMaskDirty=true;drawTerrain();});
if('ResizeObserver' in window)new ResizeObserver(resizeTerrain).observe(terrainHero);else window.addEventListener('resize',resizeTerrain);
document.addEventListener('visibilitychange',()=>{if(document.hidden&&terrainFrame){cancelAnimationFrame(terrainFrame);terrainFrame=0;}else if(!document.hidden)scheduleTerrain();});
reducedMotion.addEventListener('change',()=>{document.documentElement.classList.toggle('js-motion',!reducedMotion.matches&&!!revealObserver);terrainPointer.targetStrength=0;terrainPointer.strength=0;terrainHero.classList.remove('pointer-active');if(reducedMotion.matches){document.querySelectorAll('.reveal').forEach(node=>node.classList.add('is-revealed'));drawTerrain();}else scheduleTerrain();});
const identityItems=[['.identity-first','.brand-first'],['.identity-last','.brand-last'],['.hero-profession','.brand-role']].map(([source,target])=>{
 const overlay=el('span','identity-flight');overlay.setAttribute('aria-hidden','true');document.body.append(overlay);
 return {source:document.querySelector(source),target:document.querySelector(target),overlay};
});
const identityHeader=document.querySelector('.header');
const identityHandoffStart=.88;
function updateIdentity(){
 const hero=document.querySelector('.hero-identity');
 const heroRect=hero.getBoundingClientRect(),headerRect=identityHeader.getBoundingClientRect();
 const travel=Math.max(1,heroRect.bottom+scrollY-headerRect.bottom);
 const progress=document.querySelector('#home').hidden||menuOpen?1:Math.min(1,Math.max(0,scrollY/travel));
 const headerOpacity=Math.max(0,(progress-identityHandoffStart)/(1-identityHandoffStart));
 document.body.classList.add('identity-active');document.body.style.setProperty('--identity-header-opacity',headerOpacity);
 identityItems.forEach(({source,target,overlay})=>{
  overlay.textContent=source.textContent;
  if(reducedMotion.matches){overlay.style.opacity=progress<1?'1':'0';source.style.opacity=progress<1?'1':'';overlay.style.display='none';return;}
  source.style.opacity='';overlay.style.display='';
  const from=source.getBoundingClientRect(),to=target.getBoundingClientRect();
  const sourceStyle=getComputedStyle(source),targetStyle=getComputedStyle(target);
  const sourceSize=parseFloat(sourceStyle.fontSize),targetSize=parseFloat(targetStyle.fontSize);
  const scale=1+(targetSize/sourceSize-1)*progress;
  const sourceSpacing=parseFloat(sourceStyle.letterSpacing)||0,targetSpacing=parseFloat(targetStyle.letterSpacing)||0;
  overlay.style.font=sourceStyle.font;overlay.style.lineHeight=sourceStyle.lineHeight;overlay.style.letterSpacing=(sourceSpacing+(targetSpacing/(targetSize/sourceSize)-sourceSpacing)*progress)+'px';
  overlay.style.transform='translate3d('+(from.left+(to.left-from.left)*progress)+'px,'+(from.top+(to.top-from.top)*progress)+'px,0) scale('+scale+')';
  overlay.style.opacity=String(1-headerOpacity);
 });
}
window.addEventListener('resize',()=>requestAnimationFrame(updateIdentity));
document.fonts.ready.then(updateIdentity);reducedMotion.addEventListener('change',updateIdentity);
resizeTerrain();applyAppearance(false);
document.querySelector('.footer-year').textContent=new Date().getFullYear();
setLanguage(language,false);
observeReveals();
animatePage('home');
