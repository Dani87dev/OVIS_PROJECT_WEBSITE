// =========================================================
//  OVIS PROJECT — script.js
// =========================================================

// ─── TRANSLATIONS ─────────────────────────────────────────
const i18n = {
  en: {
    // —— shared: nav / footer / tags ——
    "nav.ovis": "OVIS",
    "nav.arqueo": "Project News",
    "nav.institutions": "Institutions",
    "nav.discussion": "Discussion",
    "nav.contact": "Contact",
    "about.more": "Read more about the project →",
    "news.ovis.eyebrow": "Project Updates",
    "news.ovis.title": "Latest from OVIS",
    "news.all": "See all →",
    "news.readmore": "Read more →",
    "tag.conference": "Conference",
    "tag.poster": "Poster",
    "tag.call": "Call for Papers",
    "aria.close": "Close",
    // —— index: hero / intro ——
    "hero.subtitle": "Unravelling livestock diet and mobility across the Bronze–Iron Age transition in the Western Mediterranean",
    "hero.scroll": "Scroll",
    "intro.islands": "Islands studied",
    "intro.periods": "Chronological scope",
    "intro.samples": "Number of individuals",
    "intro.partners": "Faunal samples",
    "intro.years": " years",
    // —— index: research sites map ——
    "map.eyebrow": "Study Areas",
    "map.title": "Research Sites",
    "map.hint": "Click me",
    "map.desc": "Three island systems across the Western Mediterranean, differing in size, cultural traditions, and resource availability",
    "map.sardinia.name": "Sardinia (Italy)",
    "map.sardinia.culture": "From Nuraghic culture to Roman conquest",
    "map.sardinia.desc": "Iconic nuraghe stone structures and complex pastoral societies with evidence of long-range Mediterranean trade networks.",
    "map.mallorca.name": "Mallorca (Balearic Islands)",
    "map.mallorca.culture": "From Navetic culture to Roman conquest",
    "map.mallorca.desc": "The largest Balearic island, with major Talayotic settlements and faunal assemblages key to understanding Bronze–Iron Age pastoral transitions.",
    "map.menorca.name": "Menorca (Balearic Islands)",
    "map.menorca.culture": "From Navetic culture to Roman conquest",
    "map.menorca.desc": "Bronze & Iron Age settlements with distinctive talayot towers and rich faunal assemblages that record centuries of pastoral change.",
    // —— shared: project info card ——
    "project.title": "About OVIS",
    "project.q1": "What is OVIS?",
    "project.p1": "OVIS (Origins of Variability in Island Systems) is a Marie Skłodowska-Curie Actions fellowship investigating the diet, mobility, and management of ovicaprids — sheep and goats — across the Western Mediterranean islands during the Bronze and Iron Ages.",
    "project.q2": "Why does it matter?",
    "project.p2": "Island communities in the ancient Mediterranean developed distinct strategies for managing livestock, shaped by geography, trade routes, and cultural exchange. By applying stable isotope analysis to faunal remains, OVIS reconstructs these strategies with unprecedented resolution.",
    "project.funded": "Funded by",
    "project.grant": "Grant agreement",
    "project.doi": "DOI",
    "project.duration": "Duration",
    "project.host": "Host institution",
    "project.pi": "Fellow",
    "project.su": "Supervisor",
    // —— ovis page ——
    "ovis.hero.eyebrow": "Marie Skłodowska-Curie Actions · Horizon Europe",
    "ovis.hero.title": "Project OVIS<br><em style=\"font-style:italic;color:var(--accent-light)\">Origins of Variability in Island Systems</em>",
    "ovis.hero.desc": "A comprehensive look at the research, methodology, sites, team, and progress of the OVIS fellowship.",
    "ovis.about.eyebrow": "About",
    "ovis.about.title": "What is OVIS?",
    "ovis.overview.q": "Overview",
    "ovis.overview.p1": "OVIS is a Marie Skłodowska-Curie Actions postdoctoral fellowship funded under Horizon Europe. This project aims to provide new information on the causes and consequences of the transition between the Bronze Age and the Iron Age in the Western Mediterranean. The main novelty of the project lies in addressing a key question for this region from a specifically insular perspective, focusing on one of the economic foundations of these societies: livestock farming.",
    "ovis.overview.p2": "Specifically, the diet of domestic caprines will be studied, allowing us to infer available vegetation and to analyse both how herding practices contributed to landscape transformation and whether these practices were, in turn, shaped by palaeoenvironmental changes, political decisions, or the arrival of new human groups.",
    "ovis.overview.p3": "Through a diachronic analysis (c. 1600–123 BCE) and a multiregional approach (Sardinia, Mallorca, and Menorca), the project seeks to offer a broader understanding of the phenomenon, providing data on climate impact and adaptation strategies in insular contexts.",
    "ovis.obj.q": "Research Objectives",
    "ovis.obj.1": "Understand how animal diet and mobility changed over time, and whether these changes were driven by local developments or by the arrival of new knowledge and technologies.",
    "ovis.obj.2": "Explore how island landscapes transformed and identify the main factors behind these changes.",
    "ovis.obj.3": "Examine how island communities interacted with their environment and with the wider Mediterranean world.",
    "ovis.obj.4": "Identify past climatic events and assess their impact on island populations and ecosystems.",
    "ovis.obj.5": "Investigate how island communities adapted to changing conditions and made the most of available resources.",
    "ovis.method.q": "Methodology",
    "ovis.method.p1": "The project combines carbon (δ¹³C) and oxygen (δ¹⁸O) isotope analysis with dental microwear on caprine teeth. Isotopes provide longer-term data on plant consumption and environmental conditions, while dental microwear reveals short-term diet and feeding behaviour before death. Together, they offer a complementary temporal reconstruction enabling high-resolution comparisons across periods.",
    "ovis.impact.q": "Impact",
    "ovis.impact.p1": "OVIS will represent a major advance by highlighting the value of insular archaeology, often overlooked in broader narratives, despite the fact that islands invariably function as nodes within large networks and can therefore provide a wider perspective on connectivity and on social and economic change. At the same time, through the integration of isotopic data with climatic and historical events, the project will shed light on how insular populations adapted to adversity, the strategies they employed to maximize resources (e.g., seasonal movements, foddering), and the impact of these practices on the landscape in constrained environments.",
    "ovis.impact.p2": "These data are also highly relevant for contemporary science, particularly in the context of climate change, where desertification and resource depletion are causing a drastic reduction in livestock on islands, with significant short-term consequences for ecosystems. This project will redefine the history of the Mediterranean by enriching the archaeological record with an immense volume of high-resolution, temporally sensitive information. The data will be essential for detecting, organizing, and assessing the impact of transformative events that shaped the past, thereby driving a reassessment of current narratives in Late Prehistory and advancing the field.",
    "ovis.sites.eyebrow": "Field Sites",
    "ovis.sites.title": "Archaeological Sites",
    "ovis.sites.1.region": "Italy",
    "ovis.sites.2.region": "Balearic Islands (Spain)",
    "ovis.sites.3.region": "Balearic Islands (Spain)",
    "ovis.sites.label": "Sites",
    "ovis.sci.eyebrow": "Methodology",
    "ovis.sci.title": "Scientific Approach",
    "ovis.iso.q": "Isotope Analysis",
    "ovis.iso.p1": "Multi-isotope sampling of tooth enamel (sequential sampling along the crown) allows reconstruction of seasonal diet and lifetime mobility. Carbon and oxygen isotope analyses reflect diet composition and palaeoenvironmental conditions.",
    "ovis.micro.q": "Dental Microwear Analysis",
    "ovis.micro.p1": "This method is applied in combination with the multi-isotopic analyses. Dental microwear reveals animal diet and environmental conditions during the last days and weeks of an animal's life. In general terms, it allows discrimination between different dietary patterns such as grazers, browsers, and mixed feeders.",
    "ovis.sci.label1": "Isotope systems",
    "ovis.sci.label2": "Target taxa",
    "ovis.sci.label3": "Sample target",
    "ovis.sci.label4": "Analysis labs",
    "ovis.sci.samples": "150+ faunal specimens",
    "ovis.team.eyebrow": "Team",
    "ovis.team.title": "Fellow",
    "ovis.team.role": "Postdoctoral Researcher · Marie Skłodowska-Curie Fellow",
    "ovis.team.bio": "Graduated in History from the University of Barcelona (2011), Master in Archaeology from the University of Granada (2013), and PhD in History, History of Art and Geography from the University of the Balearic Islands (2020). Her research focuses on livestock strategies and landscape exploitation in past societies, with special emphasis on island contexts. She specialises in zooarchaeological analysis, dental microwear, and strontium isotope mobility studies.",
    "ovis.updates.eyebrow": "Updates",
    "ovis.updates.title": "Project News",
    "ovis.updates.icaz.desc": "OVIS co-organises the ICAZ 2027 session \"Developing Islandscapes: Animals, mobility and environmental practices\" in Vancouver — the call for papers is now open.",
    "ovis.updates.1.desc": "Lecture \"Uniformity or diversity? Livestock management in the Balearic Islands during the Bronze Age\", part of the series organised by the UIB Department of Historical Sciences and Theory of the Arts.",
    "ovis.updates.2.desc": "Presentation of the OVIS project in Palma through the poster \"Origins of Variability in Island Systems\", by Dr. Lua Valenzuela-Suau and Prof. Richard Madgwick.",
    "ovis.timeline.eyebrow": "Timeline",
    "ovis.timeline.title": "Project Milestones",
    "ovis.tl.1.title": "Project kickoff — Cardiff University",
    "ovis.tl.1.desc": "Fellowship begins. Initial lab setup, database construction, and first sample batch preparation at Cardiff University isotope laboratory.",
    "ovis.tl.2.title": "First fieldwork campaign — Balearic Islands",
    "ovis.tl.2.desc": "Sampling of faunal remains from Menorca and Mallorca archaeological repositories. Collaboration with the Museu de Menorca and UIB.",
    "ovis.tl.3.title": "Isotope analysis batch 1",
    "ovis.tl.3.desc": "Strontium and oxygen isotope analysis of Balearic caprine tooth enamel at Cardiff labs. First data outputs expected.",
    "ovis.tl.4.title": "Sardinia fieldwork campaign",
    "ovis.tl.4.desc": "Sampling in Nuragic site collections. Partnership with Università degli Studi di Sassari and the Soprintendenza Archeologia della Sardegna.",
    "ovis.tl.5.title": "Sicily sampling & comparative analysis",
    "ovis.tl.5.desc": "Third island group sampling. Integration of all isotope datasets. Dental microwear texture analysis begins.",
    "ovis.tl.6.title": "Synthesis, publications & dissemination",
    "ovis.tl.6.desc": "Final data integration, peer-reviewed article submissions, conference presentations, and open-access data deposit. Project close.",
    "ovis.bib.eyebrow": "Bibliography",
    "ovis.bib.title": "OVIS-Related Publications",
    "ovis.bib.year": "Coming<br>soon",
    "ovis.bib.entry": "OVIS project publications will appear here as the fellowship progresses.",
    "ovis.bib.note": "Publications list in progress — 2026–2028",
    // —— arqueo (project news) page ——
    "arqueo.hero.eyebrow": "Field & Science",
    "arqueo.hero.title": "Archaeology<br><em style=\"font-style:italic;color:var(--accent-light)\">News & Context</em>",
    "arqueo.hero.desc": "Current developments in archaeozoology, zooarchaeology, and Western Mediterranean prehistory — the scientific landscape underpinning the OVIS project.",
    "arqueo.intro.eyebrow": "Project News",
    "arqueo.intro.title": "Latest Updates",
    "arqueo.n1.date": "20–21 February 2026",
    "arqueo.n1.title": "OVIS at the 10th Archaeology Conference of the Balearic Islands",
    "arqueo.n1.p1": "This past February, Palma (Mallorca, Balearic Islands, Spain) hosted the 10th Archaeology Conference of the Balearic Islands, organised by the Archaeology Section of the Association of Historians of the Balearic Islands.",
    "arqueo.n1.p2": "As part of the conference, the OVIS project was presented to the archaeological community working in the Balearic Islands through the poster titled \"OVIS: Origins of Variability in Island Systems. Unravelling livestock diet and mobility across the Bronze–Iron Age transition\". The presentation was given by research fellow Dr. Lua Valenzuela-Suau and the project supervisor, Prof. Richard Madgwick. The session set out the project's main objectives, the chosen methodology, and the expected results.",
    "arqueo.n1.p3": "Several earlier zooarchaeological studies that form the starting point of the research carried out within OVIS were also presented. Specifically, the works \"Livestock exploitation and environmental management at the naveta settlement of Clariana (Ciutadella, Menorca): integrating faunal, isotopic and dental microwear data\" (Dr. Lua Valenzuela-Suau and Dr. Damià Ramis) and \"Animals and rituality in cave no. 45 of Calescoves (Alaior, Menorca)\" (Dr. Lua Valenzuela-Suau, Dr. Sonia Carbonell and Dr. Margalida Antònia Coll) were introduced.",
    "arqueo.n1.p4": "Taking part in this conference was an excellent opportunity to share the first outlines of the OVIS project and to open up spaces for discussion with researchers specialising in Balearic prehistory.",
    "arqueo.n2.date": "25 February 2026",
    "arqueo.n2.title": "We take part in the 13th Víctor Guerrero Seminar Series at the University of the Balearic Islands",
    "arqueo.n2.p1": "This past February we had the opportunity to take part in the \"13th Víctor Guerrero Seminar Series\", organised by the Department of Historical Sciences and Theory of the Arts at the University of the Balearic Islands.",
    "arqueo.n2.p2": "The lecture, titled \"Uniformity or diversity? Livestock management in the Balearic Islands during the Bronze Age\", offered an overview of current knowledge on livestock management during this prehistoric period. The talk paid particular attention to the data obtained through zooarchaeology, stable isotopes, and dental microwear studies — key tools for understanding the diet, mobility, and management strategies of the herds.",
    "arqueo.n2.p3": "This research is the starting point of the OVIS project, focused on the study of livestock practices and the socio-economic dynamics of Balearic Island communities during late prehistory.",
    "arqueo.n2.p4": "We would like to thank the organisers for the invitation and the opportunity to share and discuss these lines of research within the seminar.",
    "arqueo.n3.date": "February 2026",
    "arqueo.n3.title": "OVIS project poster",
    "arqueo.n3.p1": "Scientific poster of the OVIS project — \"Origins of Variability in Island Systems. Unravelling livestock diet and mobility across the Bronze–Iron Age transition\" — presented at the 10th Archaeology Conference of the Balearic Islands.",
    "arqueo.n4.date": "17–22 May 2027",
    "arqueo.n4.title": "Call for Abstracts ICAZ 2027 (Vancouver, Canada)",
    "arqueo.n4.p1": "The International Council for Archaeozoology (ICAZ) has opened the call for papers for its 2027 conference in Vancouver, Canada. OVIS is co-organising the session \"Developing Islandscapes: Animals, mobility and environmental practices\", convened by Dr. Lua Valenzuela-Suau and Prof. Richard Madgwick.",
    "arqueo.n4.p2": "Island contexts offer exceptionally diverse yet structurally comparable settings for studying the relationships between livestock management, landscape transformation, and climate change. The session invites contributions that apply zooarchaeological methods — including isotope analysis, dental microwear, ancient DNA, biometry, or studies of species introductions — to explore subsistence strategies and adaptive mechanisms developed in island contexts around the world.",
    "arqueo.n4.p3": "Hybrid session · Vancouver, Canada · 17–22 May 2027. Abstract submission deadline: 25 August. Submissions are made online through the conference form.",
    // —— contact page ——
    "contact.hero.eyebrow": "Get in touch",
    "contact.hero.title": "Contact",
    "contact.hero.desc": "Questions about the OVIS project, collaboration proposals, or media enquiries — reach out directly to the research team.",
    "contact.team.title": "Research Team",
    "contact.team.desc": "The OVIS project welcomes enquiries from researchers, students, journalists, and institutions interested in the project's work. Response times may vary during fieldwork periods.",
    "contact.email.label": "Email",
    "contact.host.label": "Host Institution",
    "contact.host.value": "Cardiff University, School of History,<br>Archaeology and Religion<br>Cardiff, Wales, UK",
    "contact.form.name": "Name",
    "contact.form.name.ph": "Your full name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.opt0": "Select a topic",
    "contact.form.opt.collab": "Research collaboration",
    "contact.form.opt.data": "Data / sample sharing",
    "contact.form.opt.media": "Media enquiry",
    "contact.form.opt.discussion": "Discussion forum",
    "contact.form.opt.other": "Other",
    "contact.form.message": "Message",
    "contact.form.message.ph": "Your message…",
    "contact.form.send": "Send message",
    "contact.form.success": "✓ Thank you for your message. The research team will be in touch shortly.",
    "disc.title": "Project Forum",
    "disc.desc": "A space for researchers and collaborators to share questions and reflections on the OVIS project.",
    "disc.thread1": "Livestock diet & mobility results",
    "disc.thread2": "Next fieldwork campaign",
    "disc.replies": "replies",
    "disc.msg1": "Have you seen the results from the latest isotopic analyses? The difference in δ13C values between Menorca and Sardinia is remarkable — it suggests very different pasture management strategies.",
    "disc.msg2": "Yes, especially the difference between islands! I wonder if it correlates with the presence of Nuragic trade networks. Are you planning to compare with Sicilian samples?",
    "disc.msg3": "Does anyone know when the next fieldwork campaign in Sardinia will be? I'm interested in joining the sampling team if there's availability.",
    "disc.contact": "Want to join the discussion? Send your question or comment directly to the research team.",
    "disc.send": "Send a message",
    "footer.funded": "Funded by the European Union under the Marie Skłodowska-Curie Actions programme (Horizon Europe).",
    "inst.hero.eyebrow": "Partners & Funders",
    "inst.hero.title": "Institutions",
    "inst.hero.desc": "The research institutions, funding bodies, and partner organisations that make the OVIS project possible.",
    "inst.funding.eyebrow": "Funding",
    "inst.funding.title": "Funder",
    "inst.funding.tag": "Primary Funder",
    "inst.funding.name": "European Union — Horizon Europe",
    "inst.funding.desc": "OVIS is funded by the European Union under the Marie Skłodowska-Curie Actions postdoctoral fellowship programme (Horizon Europe, Grant Agreement No. 101209433). The Marie Skłodowska-Curie Actions support researchers at all stages of their careers, irrespective of age and nationality, and fund research, innovation, and training in all scientific domains.",
    "inst.funding.disclaimer": "Views and opinions expressed are those of the author(s) only and do not necessarily reflect those of the European Union or the European Research Executive Agency. Neither the EU nor the granting authority can be held responsible for them.",
    "inst.host.eyebrow": "Host Institution",
    "inst.host.title": "Where OVIS is Based",
    "inst.host.tag": "Host Institution · Wales, UK",
    "inst.host.name": "Cardiff University — School of History, Archaeology and Religion",
    "inst.host.desc": "Cardiff University hosts the OVIS fellowship. The School of History, Archaeology and Religion (SHARE) provides a leading research environment in archaeological science, with state-of-the-art isotope and biomolecular laboratories. Cardiff's isotope facility enables the strontium, oxygen, carbon, and nitrogen analyses central to the OVIS project.",
    "inst.partners.eyebrow": "Collaborations",
    "inst.partners.title": "Research Partners",
    "inst.partners.lead": "The universities, museums, and research centres that collaborate with OVIS across the western Mediterranean and beyond.",
    "inst.partner.uib": "University of the Balearic Islands",
    "inst.partner.uv": "University of Valencia",
    "inst.partner.sassari": "University of Sassari",
    "inst.partner.joukowsky": "Joukowsky Institute · Brown University",
    "inst.partner.menorca": "Museum of Menorca",
    "inst.partner.cansaura": "Museum of Ciutadella · Can Saura",
    "inst.partner.manacor": "Museum of History of Manacor",
  },

  ca: {
    // —— shared: nav / footer / tags ——
    "nav.ovis": "OVIS",
    "nav.arqueo": "Notícies del Projecte",
    "nav.institutions": "Institucions",
    "nav.discussion": "Discussió",
    "nav.contact": "Contacte",
    "about.more": "Llegir més sobre el projecte →",
    "news.ovis.eyebrow": "Actualitat del Projecte",
    "news.ovis.title": "Darreres notícies OVIS",
    "news.all": "Veure totes →",
    "news.readmore": "Llegir més →",
    "tag.conference": "Conferència",
    "tag.poster": "Pòster",
    "tag.call": "Convocatòria",
    "aria.close": "Tancar",
    // —— index: hero / intro ——
    "hero.subtitle": "Desxifrant la dieta i la mobilitat del bestiar durant la transició Bronze–Ferro en el Mediterrani occidental",
    "hero.scroll": "Desplaça",
    "intro.islands": "Illes estudiades",
    "intro.periods": "Abast cronològic",
    "intro.samples": "Nombre d'individus",
    "intro.partners": "Mostres de fauna",
    "intro.years": " anys",
    // —— index: research sites map ——
    "map.eyebrow": "Àrees d'estudi",
    "map.title": "Jaciments d'estudi",
    "map.hint": "Clica'm",
    "map.desc": "Tres sistemes insulars del Mediterrani occidental, diferents en mida, tradicions culturals i disponibilitat de recursos",
    "map.sardinia.name": "Sardenya (Itàlia)",
    "map.sardinia.culture": "De la cultura nuràgica a la conquesta romana",
    "map.sardinia.desc": "Icòniques estructures de pedra dels nuraghe i societats pastorals complexes amb evidències de xarxes comercials mediterrànies de llarg abast.",
    "map.mallorca.name": "Mallorca (Illes Balears)",
    "map.mallorca.culture": "De la cultura navetiforme a la conquesta romana",
    "map.mallorca.desc": "L'illa balear més gran, amb importants poblats talaiòtics i conjunts faunístics clau per entendre les transicions ramaderes entre el Bronze i el Ferro.",
    "map.menorca.name": "Menorca (Illes Balears)",
    "map.menorca.culture": "De la cultura navetiforme a la conquesta romana",
    "map.menorca.desc": "Poblats de l'Edat del Bronze i del Ferro amb característiques torres de talaiot i rics conjunts faunístics que registren segles de canvi ramader.",
    // —— shared: project info card ——
    "project.title": "Sobre OVIS",
    "project.q1": "Què és OVIS?",
    "project.p1": "OVIS (Origins of Variability in Island Systems) és una beca Marie Skłodowska-Curie Actions que investiga la dieta, la mobilitat i la gestió dels ovicàprids — ovelles i cabres — a les illes del Mediterrani occidental durant l'Edat del Bronze i del Ferro.",
    "project.q2": "Per què és important?",
    "project.p2": "Les comunitats insulars del Mediterrani antic van desenvolupar estratègies peculiars per gestionar el bestiar, condicionades per la geografia, les rutes comercials i l'intercanvi cultural. Aplicant l'anàlisi d'isòtops estables a les restes de fauna, OVIS reconstrueix aquestes estratègies amb una resolució sense precedents.",
    "project.funded": "Finançat per",
    "project.grant": "Acord de subvenció",
    "project.doi": "DOI",
    "project.duration": "Durada",
    "project.host": "Institució d'acollida",
    "project.pi": "Investigadora",
    "project.su": "Supervisor",
    // —— ovis page ——
    "ovis.hero.eyebrow": "Marie Skłodowska-Curie Actions · Horizon Europe",
    "ovis.hero.title": "Projecte OVIS<br><em style=\"font-style:italic;color:var(--accent-light)\">Origins of Variability in Island Systems</em>",
    "ovis.hero.desc": "Una mirada completa a la recerca, la metodologia, els jaciments, l'equip i el progrés de la beca OVIS.",
    "ovis.about.eyebrow": "Sobre el projecte",
    "ovis.about.title": "Què és OVIS?",
    "ovis.overview.q": "Visió general",
    "ovis.overview.p1": "OVIS és una beca postdoctoral Marie Skłodowska-Curie Actions finançada dins d'Horizon Europe. Aquest projecte vol aportar nova informació sobre les causes i les conseqüències de la transició entre l'Edat del Bronze i l'Edat del Ferro al Mediterrani occidental. La principal novetat del projecte rau a abordar una qüestió clau per a aquesta regió des d'una perspectiva específicament insular, centrant-se en un dels fonaments econòmics d'aquestes societats: la ramaderia.",
    "ovis.overview.p2": "Concretament, s'estudiarà la dieta dels caprins domèstics, cosa que permetrà inferir la vegetació disponible i analitzar tant com les pràctiques ramaderes van contribuir a la transformació del paisatge com si aquestes pràctiques, al seu torn, van estar condicionades per canvis paleoambientals, decisions polítiques o l'arribada de nous grups humans.",
    "ovis.overview.p3": "Mitjançant una anàlisi diacrònica (c. 1600–123 aC) i un enfocament multiregional (Sardenya, Mallorca i Menorca), el projecte busca oferir una comprensió més àmplia del fenomen, aportant dades sobre l'impacte climàtic i les estratègies d'adaptació en contextos insulars.",
    "ovis.obj.q": "Objectius de recerca",
    "ovis.obj.1": "Entendre com van canviar la dieta i la mobilitat dels animals al llarg del temps, i si aquests canvis van ser impulsats per desenvolupaments locals o per l'arribada de nous coneixements i tecnologies.",
    "ovis.obj.2": "Explorar com es van transformar els paisatges insulars i identificar els principals factors que hi ha darrere d'aquests canvis.",
    "ovis.obj.3": "Examinar com les comunitats insulars van interactuar amb el seu entorn i amb el món mediterrani més ampli.",
    "ovis.obj.4": "Identificar esdeveniments climàtics del passat i avaluar-ne l'impacte sobre les poblacions i els ecosistemes insulars.",
    "ovis.obj.5": "Investigar com les comunitats insulars es van adaptar a les condicions canviants i van aprofitar al màxim els recursos disponibles.",
    "ovis.method.q": "Metodologia",
    "ovis.method.p1": "El projecte combina l'anàlisi d'isòtops de carboni (δ¹³C) i oxigen (δ¹⁸O) amb el microdesgast dentari en dents de caprins. Els isòtops proporcionen dades de llarg abast sobre el consum vegetal i les condicions ambientals, mentre que el microdesgast dentari revela la dieta i el comportament alimentari a curt termini abans de la mort. Junts, ofereixen una reconstrucció temporal complementària que permet comparacions d'alta resolució entre períodes.",
    "ovis.impact.q": "Impacte",
    "ovis.impact.p1": "OVIS representarà un avenç important en posar en valor l'arqueologia insular, sovint negligida en les narratives més àmplies, tot i que les illes funcionen invariablement com a nodes dins de grans xarxes i, per tant, poden aportar una perspectiva més àmplia sobre la connectivitat i sobre el canvi social i econòmic. Alhora, mitjançant la integració de dades isotòpiques amb esdeveniments climàtics i històrics, el projecte aclarirà com les poblacions insulars es van adaptar a l'adversitat, les estratègies que van emprar per maximitzar els recursos (p. ex., moviments estacionals, aportació de farratge) i l'impacte d'aquestes pràctiques sobre el paisatge en entorns limitats.",
    "ovis.impact.p2": "Aquestes dades també són molt rellevants per a la ciència contemporània, especialment en el context del canvi climàtic, on la desertificació i l'esgotament dels recursos estan provocant una reducció dràstica del bestiar a les illes, amb conseqüències significatives a curt termini per als ecosistemes. Aquest projecte redefinirà la història del Mediterrani enriquint el registre arqueològic amb un volum immens d'informació d'alta resolució i sensible al temps. Les dades seran essencials per detectar, organitzar i avaluar l'impacte dels esdeveniments transformadors que van configurar el passat, tot impulsant una reavaluació de les narratives actuals sobre la Prehistòria recent i fent avançar la disciplina.",
    "ovis.sites.eyebrow": "Jaciments",
    "ovis.sites.title": "Jaciments arqueològics",
    "ovis.sites.1.region": "Itàlia",
    "ovis.sites.2.region": "Illes Balears (Espanya)",
    "ovis.sites.3.region": "Illes Balears (Espanya)",
    "ovis.sites.label": "Jaciments",
    "ovis.sci.eyebrow": "Metodologia",
    "ovis.sci.title": "Enfocament científic",
    "ovis.iso.q": "Anàlisi isotòpica",
    "ovis.iso.p1": "El mostreig multi-isotòpic de l'esmalt dentari (mostreig seqüencial al llarg de la corona) permet reconstruir la dieta estacional i la mobilitat al llarg de la vida. Les anàlisis d'isòtops de carboni i oxigen reflecteixen la composició de la dieta i les condicions paleoambientals.",
    "ovis.micro.q": "Anàlisi de microdesgast dentari",
    "ovis.micro.p1": "Aquest mètode s'aplica en combinació amb les anàlisis multi-isotòpiques. El microdesgast dentari revela la dieta de l'animal i les condicions ambientals durant els darrers dies i setmanes de la seva vida. En termes generals, permet discriminar entre diferents patrons dietètics com ara pasturadors, brostejadors i alimentadors mixtos.",
    "ovis.sci.label1": "Sistemes isotòpics",
    "ovis.sci.label2": "Tàxons objectiu",
    "ovis.sci.label3": "Objectiu de mostreig",
    "ovis.sci.label4": "Laboratoris d'anàlisi",
    "ovis.sci.samples": "150+ espècimens faunístics",
    "ovis.team.eyebrow": "Equip",
    "ovis.team.title": "Investigadora",
    "ovis.team.role": "Investigadora postdoctoral · Beca Marie Skłodowska-Curie",
    "ovis.team.bio": "Llicenciada en Història per la Universitat de Barcelona (2011), Màster en Arqueologia per la Universitat de Granada (2013) i Doctora en Història, Història de l'Art i Geografia per la Universitat de les Illes Balears (2020). La seva recerca se centra en les estratègies ramaderes i l'explotació del paisatge en societats del passat, amb especial èmfasi en els contextos insulars. Està especialitzada en l'anàlisi zooarqueològica, el microdesgast dentari i els estudis de mobilitat amb isòtops d'estronci.",
    "ovis.updates.eyebrow": "Novetats",
    "ovis.updates.title": "Notícies del projecte",
    "ovis.updates.icaz.desc": "OVIS coorganitza la sessió \"Developing Islandscapes: Animals, mobility and environmental practices\" al congrés ICAZ 2027 de Vancouver — la convocatòria de comunicacions ja és oberta.",
    "ovis.updates.1.desc": "Conferència \"Uniformitat o diversitat? La gestió ramadera a les Illes Balears durant l'Edat del Bronze\" al cicle organitzat pel Departament de Ciències Històriques i Teoria de les Arts de la UIB.",
    "ovis.updates.2.desc": "Presentació del projecte OVIS a Palma mitjançant el pòster \"Origins of Variability in Island Systems\", a càrrec de la Dra. Lua Valenzuela-Suau i el Prof. Richard Madgwick.",
    "ovis.timeline.eyebrow": "Cronologia",
    "ovis.timeline.title": "Fites del projecte",
    "ovis.tl.1.title": "Inici del projecte — Cardiff University",
    "ovis.tl.1.desc": "Comença la beca. Configuració inicial del laboratori, construcció de la base de dades i preparació del primer lot de mostres al laboratori d'isòtops de la Cardiff University.",
    "ovis.tl.2.title": "Primera campanya de treball de camp — Illes Balears",
    "ovis.tl.2.desc": "Mostreig de restes de fauna dels dipòsits arqueològics de Menorca i Mallorca. Col·laboració amb el Museu de Menorca i la UIB.",
    "ovis.tl.3.title": "Anàlisi isotòpica, lot 1",
    "ovis.tl.3.desc": "Anàlisi d'isòtops d'estronci i oxigen de l'esmalt dentari de caprins balears als laboratoris de Cardiff. S'esperen els primers resultats.",
    "ovis.tl.4.title": "Campanya de treball de camp a Sardenya",
    "ovis.tl.4.desc": "Mostreig en col·leccions de jaciments nuràgics. Col·laboració amb la Università degli Studi di Sassari i la Soprintendenza Archeologia della Sardegna.",
    "ovis.tl.5.title": "Mostreig a Sicília i anàlisi comparativa",
    "ovis.tl.5.desc": "Mostreig del tercer grup d'illes. Integració de tots els conjunts de dades isotòpiques. Comença l'anàlisi de textura del microdesgast dentari.",
    "ovis.tl.6.title": "Síntesi, publicacions i divulgació",
    "ovis.tl.6.desc": "Integració final de les dades, enviament d'articles revisats per parells, presentacions a congressos i dipòsit de dades en accés obert. Tancament del projecte.",
    "ovis.bib.eyebrow": "Bibliografia",
    "ovis.bib.title": "Publicacions relacionades amb OVIS",
    "ovis.bib.year": "Ben<br>aviat",
    "ovis.bib.entry": "Les publicacions del projecte OVIS apareixeran aquí a mesura que avanci la beca.",
    "ovis.bib.note": "Llista de publicacions en curs — 2026–2028",
    // —— arqueo (project news) page ——
    "arqueo.hero.eyebrow": "Camp i Ciència",
    "arqueo.hero.title": "Arqueologia<br><em style=\"font-style:italic;color:var(--accent-light)\">Notícies i Context</em>",
    "arqueo.hero.desc": "Desenvolupaments actuals en arqueozoologia, zooarqueologia i prehistòria del Mediterrani occidental — el panorama científic que sustenta el projecte OVIS.",
    "arqueo.intro.eyebrow": "Notícies del projecte",
    "arqueo.intro.title": "Darreres novetats",
    "arqueo.n1.date": "20–21 de febrer de 2026",
    "arqueo.n1.title": "OVIS participa a les X Jornades d'Arqueologia de les Illes Balears",
    "arqueo.n1.p1": "El passat mes de febrer varen tenir lloc a Palma (Mallorca, Illes Balears, Espanya) les X Jornades d'Arqueologia de les Illes Balears, organitzades per la Secció d'Arqueologia del Col·legi d'Historiadors de Balears.",
    "arqueo.n1.p2": "En el marc de les jornades, es va presentar el projecte OVIS davant la comunitat arqueològica que treballa a les Illes Balears mitjançant el pòster titulat \"OVIS: Origins of Variability in Island Systems. Unraveling livestock diet and mobility across the Bronze-Iron Age transition\". La presentació va anar a càrrec de la research fellow Dra. Lua Valenzuela-Suau i del supervisor del projecte, Prof. Richard Madgwick. Durant la sessió, es varen poder exposar els principals objectius del projecte, la metodologia seleccionada i els resultats esperats.",
    "arqueo.n1.p3": "Igualment, es varen presentar diversos estudis arqueozoològics previs que constitueixen el punt de partida de la recerca desenvolupada dins el projecte OVIS. Concretament, es varen donar a conèixer els treballs \"Explotació ramadera i gestió de l'entorn al poblat de navetes de Clariana (Ciutadella, Menorca): integració de dades faunístiques, isotòpiques i de microdesgast dentari\" (Dra. Lua Valenzuela-Suau i Dr. Damià Ramis) i \"Animals i ritualitat a la cova núm. 45 de Calescoves (Alaior, Menorca)\" (Dra. Lua Valenzuela-Suau, Dra. Sonia Carbonell i Dra. Margalida Antònia Coll).",
    "arqueo.n1.p4": "La participació en aquestes jornades ha representat una excel·lent oportunitat per compartir els primers plantejaments del projecte OVIS i establir espais de debat amb investigadors i investigadores especialitzats en la prehistòria balear.",
    "arqueo.n2.date": "25 de febrer de 2026",
    "arqueo.n2.title": "Participem al XIII Cicle de Seminaris Víctor Guerrero de la Universitat de les Illes Balears",
    "arqueo.n2.p1": "El passat mes de febrer vam tenir l'oportunitat de participar en el \"XIII Cicle de Seminaris Víctor Guerrero\", organitzat pel Departament de Ciències Històriques i Teoria de les Arts de la Universitat de les Illes Balears.",
    "arqueo.n2.p2": "La conferència, titulada \"Uniformitat o diversitat? La gestió ramadera a les Illes Balears durant l'Edat del Bronze\", va servir per presentar un estat de la qüestió sobre els coneixements actuals relacionats amb la gestió ramadera durant aquest període prehistòric. La ponència va posar especial atenció a les dades obtingudes mitjançant la zooarqueologia, els isòtops estables i els estudis de microdesgast dentari, eines clau per entendre l'alimentació, la mobilitat i les estratègies de maneig dels ramats.",
    "arqueo.n2.p3": "Aquesta recerca constitueix el punt de partida del projecte OVIS, centrat en l'estudi de les pràctiques ramaderes i les dinàmiques socioeconòmiques de les comunitats de les Illes Balears durant la prehistòria recent.",
    "arqueo.n2.p4": "Volem agrair a l'organització la invitació i l'oportunitat de compartir i debatre aquestes línies de recerca en el marc del seminari.",
    "arqueo.n3.date": "Febrer de 2026",
    "arqueo.n3.title": "Pòster del projecte OVIS",
    "arqueo.n3.p1": "Pòster científic del projecte OVIS — \"Origins of Variability in Island Systems. Unraveling livestock diet and mobility across the Bronze-Iron Age transition\" — presentat a les X Jornades d'Arqueologia de les Illes Balears.",
    "arqueo.n4.date": "17–22 de maig de 2027",
    "arqueo.n4.title": "Convocatòria de resums ICAZ 2027 (Vancouver, Canadà)",
    "arqueo.n4.p1": "El Consell Internacional d'Arqueozoologia (ICAZ) ha obert la convocatòria de comunicacions per al seu congrés de 2027 a Vancouver (Canadà). OVIS coorganitza la sessió \"Developing Islandscapes: Animals, mobility and environmental practices\", coordinada per la Dra. Lua Valenzuela-Suau i el Prof. Richard Madgwick.",
    "arqueo.n4.p2": "Els contextos insulars ofereixen entorns excepcionalment diversos però estructuralment comparables per estudiar les relacions entre la gestió ramadera, la transformació del paisatge i el canvi climàtic. La sessió convida a presentar contribucions que apliquin mètodes zooarqueològics —anàlisi d'isòtops, microdesgast dental, ADN antic, biometria o estudis d'introduccions d'espècies— per explorar les estratègies de subsistència i els mecanismes d'adaptació desenvolupats en contextos insulars d'arreu del món.",
    "arqueo.n4.p3": "Sessió híbrida · Vancouver, Canadà · 17–22 de maig de 2027. Data límit per enviar resums: 25 d'agost. Les propostes s'envien en línia a través del formulari del congrés.",
    // —— contact page ——
    "contact.hero.eyebrow": "Contacta'ns",
    "contact.hero.title": "Contacte",
    "contact.hero.desc": "Preguntes sobre el projecte OVIS, propostes de col·laboració o consultes de premsa — adreça't directament a l'equip investigador.",
    "contact.team.title": "Equip investigador",
    "contact.team.desc": "El projecte OVIS acull consultes d'investigadors, estudiants, periodistes i institucions interessats en la seva tasca. Els temps de resposta poden variar durant els períodes de treball de camp.",
    "contact.email.label": "Correu electrònic",
    "contact.host.label": "Institució d'acollida",
    "contact.host.value": "Cardiff University, School of History,<br>Archaeology and Religion<br>Cardiff, Gal·les, Regne Unit",
    "contact.form.name": "Nom",
    "contact.form.name.ph": "El teu nom complet",
    "contact.form.email": "Correu electrònic",
    "contact.form.subject": "Assumpte",
    "contact.form.opt0": "Selecciona un tema",
    "contact.form.opt.collab": "Col·laboració en recerca",
    "contact.form.opt.data": "Compartició de dades / mostres",
    "contact.form.opt.media": "Consulta de premsa",
    "contact.form.opt.discussion": "Fòrum de discussió",
    "contact.form.opt.other": "Altres",
    "contact.form.message": "Missatge",
    "contact.form.message.ph": "El teu missatge…",
    "contact.form.send": "Enviar missatge",
    "contact.form.success": "✓ Gràcies pel teu missatge. L'equip investigador es posarà en contacte aviat.",
    "disc.title": "Fòrum del projecte",
    "disc.desc": "Un espai per a investigadors i col·laboradors per compartir preguntes i reflexions sobre el projecte OVIS.",
    "disc.thread1": "Resultats de dieta i mobilitat del bestiar",
    "disc.thread2": "Propera campanya de camp",
    "disc.replies": "respostes",
    "disc.msg1": "Heu vist els resultats de les darreres anàlisis isotòpiques? La diferència en els valors δ13C entre Menorca i Sardenya és notable — suggereix estratègies de gestió de pastures molt diferents.",
    "disc.msg2": "Sí, especialment la diferència entre illes! Em pregunto si es correlaciona amb la presència de xarxes comercials nuràgiques. Teniu previst comparar amb mostres sicilianes?",
    "disc.msg3": "Algú sap quan serà la propera campanya de treball de camp a Sardenya? M'interessa unir-me a l'equip de mostreig si hi ha disponibilitat.",
    "disc.contact": "Voleu participar en la discussió? Envieu la vostra pregunta o comentari directament a l'equip investigador.",
    "disc.send": "Enviar missatge",
    "footer.funded": "Finançat per la Unió Europea en el marc del programa Marie Skłodowska-Curie Actions (Horizon Europe).",
    "inst.hero.eyebrow": "Socis i finançadors",
    "inst.hero.title": "Institucions",
    "inst.hero.desc": "Les institucions de recerca, els organismes finançadors i les organitzacions col·laboradores que fan possible el projecte OVIS.",
    "inst.funding.eyebrow": "Finançament",
    "inst.funding.title": "Finançador",
    "inst.funding.tag": "Finançador principal",
    "inst.funding.name": "Unió Europea — Horizon Europe",
    "inst.funding.desc": "OVIS està finançat per la Unió Europea en el marc del programa de beques postdoctorals Marie Skłodowska-Curie Actions (Horizon Europe, Acord de subvenció núm. 101209433). Les Marie Skłodowska-Curie Actions donen suport a investigadors de totes les etapes de la carrera, independentment de l'edat i la nacionalitat, i financen recerca, innovació i formació en tots els àmbits científics.",
    "inst.funding.disclaimer": "Les opinions expressades són únicament les de l'autor/a i no reflecteixen necessàriament les de la Unió Europea o de l'Agència Executiva Europea de Recerca. Ni la UE ni l'autoritat concedent en poden ser considerades responsables.",
    "inst.host.eyebrow": "Institució d'acollida",
    "inst.host.title": "On es basa OVIS",
    "inst.host.tag": "Institució d'acollida · Gal·les, Regne Unit",
    "inst.host.name": "Cardiff University — School of History, Archaeology and Religion",
    "inst.host.desc": "La Universitat de Cardiff acull la beca OVIS. La School of History, Archaeology and Religion (SHARE) ofereix un entorn de recerca capdavanter en ciència arqueològica, amb laboratoris d'isòtops i biomoleculars d'última generació. El laboratori d'isòtops de Cardiff permet les anàlisis d'estronci, oxigen, carboni i nitrogen centrals per al projecte OVIS.",
    "inst.partners.eyebrow": "Col·laboracions",
    "inst.partners.title": "Socis de recerca",
    "inst.partners.lead": "Les universitats, museus i centres de recerca que col·laboren amb OVIS a la Mediterrània occidental i més enllà.",
    "inst.partner.uib": "Universitat de les Illes Balears",
    "inst.partner.uv": "Universitat de València",
    "inst.partner.sassari": "Universitat de Sàsser",
    "inst.partner.joukowsky": "Institut Joukowsky · Brown University",
    "inst.partner.menorca": "Museu de Menorca",
    "inst.partner.cansaura": "Museu de Ciutadella · Can Saura",
    "inst.partner.manacor": "Museu d'Història de Manacor",
  },

  es: {
    // —— shared: nav / footer / tags ——
    "nav.ovis": "OVIS",
    "nav.arqueo": "Noticias del Proyecto",
    "nav.institutions": "Instituciones",
    "nav.discussion": "Discusión",
    "nav.contact": "Contacto",
    "about.more": "Leer más sobre el proyecto →",
    "news.ovis.eyebrow": "Actualidad del Proyecto",
    "news.ovis.title": "Últimas noticias OVIS",
    "news.all": "Ver todas →",
    "news.readmore": "Leer más →",
    "tag.conference": "Conferencia",
    "tag.poster": "Póster",
    "tag.call": "Convocatoria",
    "aria.close": "Cerrar",
    // —— index: hero / intro ——
    "hero.subtitle": "Desentrañando la dieta y la movilidad del ganado durante la transición Bronze–Hierro en el Mediterráneo occidental",
    "hero.scroll": "Desplazar",
    "intro.islands": "Islas estudiadas",
    "intro.periods": "Alcance cronológico",
    "intro.samples": "Número de individuos",
    "intro.partners": "Muestras de fauna",
    "intro.years": " años",
    // —— index: research sites map ——
    "map.eyebrow": "Áreas de estudio",
    "map.title": "Yacimientos de estudio",
    "map.hint": "Clícame",
    "map.desc": "Tres sistemas insulares del Mediterráneo occidental, diferentes en tamaño, tradiciones culturales y disponibilidad de recursos",
    "map.sardinia.name": "Cerdeña (Italia)",
    "map.sardinia.culture": "De la cultura nurágica a la conquista romana",
    "map.sardinia.desc": "Icónicas estructuras de piedra de los nuraghe y sociedades pastorales complejas con evidencias de redes comerciales mediterráneas de largo alcance.",
    "map.mallorca.name": "Mallorca (Islas Baleares)",
    "map.mallorca.culture": "De la cultura navetiforme a la conquista romana",
    "map.mallorca.desc": "La mayor isla balear, con importantes poblados talayóticos y conjuntos faunísticos clave para entender las transiciones ganaderas entre el Bronce y el Hierro.",
    "map.menorca.name": "Menorca (Islas Baleares)",
    "map.menorca.culture": "De la cultura navetiforme a la conquista romana",
    "map.menorca.desc": "Poblados de la Edad del Bronce y del Hierro con características torres de talayot y ricos conjuntos faunísticos que registran siglos de cambio ganadero.",
    // —— shared: project info card ——
    "project.title": "Sobre OVIS",
    "project.q1": "¿Qué es OVIS?",
    "project.p1": "OVIS (Origins of Variability in Island Systems) es una beca Marie Skłodowska-Curie Actions que investiga la dieta, la movilidad y la gestión de los ovicápridos — ovejas y cabras — en las islas del Mediterráneo occidental durante las Edades del Bronce y del Hierro.",
    "project.q2": "¿Por qué es importante?",
    "project.p2": "Las comunidades insulares del Mediterráneo antiguo desarrollaron estrategias distintivas para gestionar el ganado, condicionadas por la geografía, las rutas comerciales y el intercambio cultural. Aplicando el análisis de isótopos estables a los restos de fauna, OVIS reconstruye estas estrategias con una resolución sin precedentes.",
    "project.funded": "Financiado por",
    "project.grant": "Acuerdo de subvención",
    "project.doi": "DOI",
    "project.duration": "Duración",
    "project.host": "Institución anfitriona",
    "project.pi": "Investigadora",
    "project.su": "Supervisor",
    // —— ovis page ——
    "ovis.hero.eyebrow": "Marie Skłodowska-Curie Actions · Horizon Europe",
    "ovis.hero.title": "Proyecto OVIS<br><em style=\"font-style:italic;color:var(--accent-light)\">Origins of Variability in Island Systems</em>",
    "ovis.hero.desc": "Una mirada completa a la investigación, la metodología, los yacimientos, el equipo y el progreso de la beca OVIS.",
    "ovis.about.eyebrow": "Sobre el proyecto",
    "ovis.about.title": "¿Qué es OVIS?",
    "ovis.overview.q": "Visión general",
    "ovis.overview.p1": "OVIS es una beca postdoctoral Marie Skłodowska-Curie Actions financiada dentro de Horizon Europe. Este proyecto pretende aportar nueva información sobre las causas y las consecuencias de la transición entre la Edad del Bronce y la Edad del Hierro en el Mediterráneo occidental. La principal novedad del proyecto radica en abordar una cuestión clave para esta región desde una perspectiva específicamente insular, centrándose en uno de los fundamentos económicos de estas sociedades: la ganadería.",
    "ovis.overview.p2": "En concreto, se estudiará la dieta de los caprinos domésticos, lo que permitirá inferir la vegetación disponible y analizar tanto cómo las prácticas ganaderas contribuyeron a la transformación del paisaje como si estas prácticas, a su vez, estuvieron condicionadas por cambios paleoambientales, decisiones políticas o la llegada de nuevos grupos humanos.",
    "ovis.overview.p3": "Mediante un análisis diacrónico (c. 1600–123 a. C.) y un enfoque multirregional (Cerdeña, Mallorca y Menorca), el proyecto busca ofrecer una comprensión más amplia del fenómeno, aportando datos sobre el impacto climático y las estrategias de adaptación en contextos insulares.",
    "ovis.obj.q": "Objetivos de investigación",
    "ovis.obj.1": "Comprender cómo cambiaron la dieta y la movilidad de los animales a lo largo del tiempo, y si estos cambios fueron impulsados por desarrollos locales o por la llegada de nuevos conocimientos y tecnologías.",
    "ovis.obj.2": "Explorar cómo se transformaron los paisajes insulares e identificar los principales factores detrás de estos cambios.",
    "ovis.obj.3": "Examinar cómo las comunidades insulares interactuaron con su entorno y con el mundo mediterráneo más amplio.",
    "ovis.obj.4": "Identificar eventos climáticos del pasado y evaluar su impacto sobre las poblaciones y los ecosistemas insulares.",
    "ovis.obj.5": "Investigar cómo las comunidades insulares se adaptaron a las condiciones cambiantes y aprovecharon al máximo los recursos disponibles.",
    "ovis.method.q": "Metodología",
    "ovis.method.p1": "El proyecto combina el análisis de isótopos de carbono (δ¹³C) y oxígeno (δ¹⁸O) con el microdesgaste dental en dientes de caprinos. Los isótopos proporcionan datos de largo alcance sobre el consumo vegetal y las condiciones ambientales, mientras que el microdesgaste dental revela la dieta y el comportamiento alimentario a corto plazo antes de la muerte. Juntos, ofrecen una reconstrucción temporal complementaria que permite comparaciones de alta resolución entre períodos.",
    "ovis.impact.q": "Impacto",
    "ovis.impact.p1": "OVIS representará un avance importante al poner en valor la arqueología insular, a menudo ignorada en las narrativas más amplias, pese a que las islas funcionan invariablemente como nodos dentro de grandes redes y, por tanto, pueden aportar una perspectiva más amplia sobre la conectividad y sobre el cambio social y económico. Al mismo tiempo, mediante la integración de datos isotópicos con eventos climáticos e históricos, el proyecto esclarecerá cómo las poblaciones insulares se adaptaron a la adversidad, las estrategias que emplearon para maximizar los recursos (p. ej., movimientos estacionales, aporte de forraje) y el impacto de estas prácticas sobre el paisaje en entornos limitados.",
    "ovis.impact.p2": "Estos datos también son muy relevantes para la ciencia contemporánea, especialmente en el contexto del cambio climático, donde la desertificación y el agotamiento de los recursos están provocando una reducción drástica del ganado en las islas, con consecuencias significativas a corto plazo para los ecosistemas. Este proyecto redefinirá la historia del Mediterráneo enriqueciendo el registro arqueológico con un volumen inmenso de información de alta resolución y sensible al tiempo. Los datos serán esenciales para detectar, organizar y evaluar el impacto de los eventos transformadores que configuraron el pasado, impulsando así una reevaluación de las narrativas actuales sobre la Prehistoria reciente y haciendo avanzar la disciplina.",
    "ovis.sites.eyebrow": "Yacimientos",
    "ovis.sites.title": "Yacimientos arqueológicos",
    "ovis.sites.1.region": "Italia",
    "ovis.sites.2.region": "Islas Baleares (España)",
    "ovis.sites.3.region": "Islas Baleares (España)",
    "ovis.sites.label": "Yacimientos",
    "ovis.sci.eyebrow": "Metodología",
    "ovis.sci.title": "Enfoque científico",
    "ovis.iso.q": "Análisis isotópico",
    "ovis.iso.p1": "El muestreo multi-isotópico del esmalte dental (muestreo secuencial a lo largo de la corona) permite reconstruir la dieta estacional y la movilidad a lo largo de la vida. Los análisis de isótopos de carbono y oxígeno reflejan la composición de la dieta y las condiciones paleoambientales.",
    "ovis.micro.q": "Análisis de microdesgaste dental",
    "ovis.micro.p1": "Este método se aplica en combinación con los análisis multi-isotópicos. El microdesgaste dental revela la dieta del animal y las condiciones ambientales durante los últimos días y semanas de su vida. En términos generales, permite discriminar entre distintos patrones dietéticos como pastadores, ramoneadores y alimentadores mixtos.",
    "ovis.sci.label1": "Sistemas isotópicos",
    "ovis.sci.label2": "Taxones objetivo",
    "ovis.sci.label3": "Objetivo de muestreo",
    "ovis.sci.label4": "Laboratorios de análisis",
    "ovis.sci.samples": "150+ especímenes faunísticos",
    "ovis.team.eyebrow": "Equipo",
    "ovis.team.title": "Investigadora",
    "ovis.team.role": "Investigadora postdoctoral · Becaria Marie Skłodowska-Curie",
    "ovis.team.bio": "Licenciada en Historia por la Universidad de Barcelona (2011), Máster en Arqueología por la Universidad de Granada (2013) y Doctora en Historia, Historia del Arte y Geografía por la Universidad de las Islas Baleares (2020). Su investigación se centra en las estrategias ganaderas y la explotación del paisaje en sociedades del pasado, con especial énfasis en los contextos insulares. Está especializada en el análisis zooarqueológico, el microdesgaste dental y los estudios de movilidad con isótopos de estroncio.",
    "ovis.updates.eyebrow": "Novedades",
    "ovis.updates.title": "Noticias del proyecto",
    "ovis.updates.icaz.desc": "OVIS coorganiza la sesión \"Developing Islandscapes: Animals, mobility and environmental practices\" en el congreso ICAZ 2027 de Vancouver — la convocatoria de comunicaciones ya está abierta.",
    "ovis.updates.1.desc": "Conferencia \"¿Uniformidad o diversidad? La gestión ganadera en las Islas Baleares durante la Edad del Bronce\" en el ciclo organizado por el Departamento de Ciencias Históricas y Teoría de las Artes de la UIB.",
    "ovis.updates.2.desc": "Presentación del proyecto OVIS en Palma mediante el póster \"Origins of Variability in Island Systems\", a cargo de la Dra. Lua Valenzuela-Suau y el Prof. Richard Madgwick.",
    "ovis.timeline.eyebrow": "Cronología",
    "ovis.timeline.title": "Hitos del proyecto",
    "ovis.tl.1.title": "Inicio del proyecto — Cardiff University",
    "ovis.tl.1.desc": "Comienza la beca. Configuración inicial del laboratorio, construcción de la base de datos y preparación del primer lote de muestras en el laboratorio de isótopos de la Cardiff University.",
    "ovis.tl.2.title": "Primera campaña de trabajo de campo — Islas Baleares",
    "ovis.tl.2.desc": "Muestreo de restos de fauna de los depósitos arqueológicos de Menorca y Mallorca. Colaboración con el Museu de Menorca y la UIB.",
    "ovis.tl.3.title": "Análisis isotópico, lote 1",
    "ovis.tl.3.desc": "Análisis de isótopos de estroncio y oxígeno del esmalte dental de caprinos baleares en los laboratorios de Cardiff. Se esperan los primeros resultados.",
    "ovis.tl.4.title": "Campaña de trabajo de campo en Cerdeña",
    "ovis.tl.4.desc": "Muestreo en colecciones de yacimientos nurágicos. Colaboración con la Università degli Studi di Sassari y la Soprintendenza Archeologia della Sardegna.",
    "ovis.tl.5.title": "Muestreo en Sicilia y análisis comparativo",
    "ovis.tl.5.desc": "Muestreo del tercer grupo de islas. Integración de todos los conjuntos de datos isotópicos. Comienza el análisis de textura del microdesgaste dental.",
    "ovis.tl.6.title": "Síntesis, publicaciones y divulgación",
    "ovis.tl.6.desc": "Integración final de los datos, envío de artículos revisados por pares, presentaciones en congresos y depósito de datos en acceso abierto. Cierre del proyecto.",
    "ovis.bib.eyebrow": "Bibliografía",
    "ovis.bib.title": "Publicaciones relacionadas con OVIS",
    "ovis.bib.year": "Muy<br>pronto",
    "ovis.bib.entry": "Las publicaciones del proyecto OVIS aparecerán aquí a medida que avance la beca.",
    "ovis.bib.note": "Lista de publicaciones en curso — 2026–2028",
    // —— arqueo (project news) page ——
    "arqueo.hero.eyebrow": "Campo y Ciencia",
    "arqueo.hero.title": "Arqueología<br><em style=\"font-style:italic;color:var(--accent-light)\">Noticias y Contexto</em>",
    "arqueo.hero.desc": "Desarrollos actuales en arqueozoología, zooarqueología y prehistoria del Mediterráneo occidental — el panorama científico que sustenta el proyecto OVIS.",
    "arqueo.intro.eyebrow": "Noticias del proyecto",
    "arqueo.intro.title": "Últimas novedades",
    "arqueo.n1.date": "20–21 de febrero de 2026",
    "arqueo.n1.title": "OVIS participa en las X Jornadas de Arqueología de las Islas Baleares",
    "arqueo.n1.p1": "El pasado mes de febrero tuvieron lugar en Palma (Mallorca, Islas Baleares, España) las X Jornadas de Arqueología de las Islas Baleares, organizadas por la Sección de Arqueología del Colegio de Historiadores de Baleares.",
    "arqueo.n1.p2": "En el marco de las jornadas, se presentó el proyecto OVIS ante la comunidad arqueológica que trabaja en las Islas Baleares mediante el póster titulado \"OVIS: Origins of Variability in Island Systems. Unraveling livestock diet and mobility across the Bronze-Iron Age transition\". La presentación corrió a cargo de la research fellow Dra. Lua Valenzuela-Suau y del supervisor del proyecto, Prof. Richard Madgwick. Durante la sesión se pudieron exponer los principales objetivos del proyecto, la metodología seleccionada y los resultados esperados.",
    "arqueo.n1.p3": "Asimismo, se presentaron diversos estudios arqueozoológicos previos que constituyen el punto de partida de la investigación desarrollada dentro del proyecto OVIS. En concreto, se dieron a conocer los trabajos \"Explotación ganadera y gestión del entorno en el poblado de navetas de Clariana (Ciutadella, Menorca): integración de datos faunísticos, isotópicos y de microdesgaste dental\" (Dra. Lua Valenzuela-Suau y Dr. Damià Ramis) y \"Animales y ritualidad en la cueva n.º 45 de Calescoves (Alaior, Menorca)\" (Dra. Lua Valenzuela-Suau, Dra. Sonia Carbonell y Dra. Margalida Antònia Coll).",
    "arqueo.n1.p4": "La participación en estas jornadas ha representado una excelente oportunidad para compartir los primeros planteamientos del proyecto OVIS y establecer espacios de debate con investigadores e investigadoras especializados en la prehistoria balear.",
    "arqueo.n2.date": "25 de febrero de 2026",
    "arqueo.n2.title": "Participamos en el XIII Ciclo de Seminarios Víctor Guerrero de la Universidad de las Islas Baleares",
    "arqueo.n2.p1": "El pasado mes de febrero tuvimos la oportunidad de participar en el \"XIII Ciclo de Seminarios Víctor Guerrero\", organizado por el Departamento de Ciencias Históricas y Teoría de las Artes de la Universidad de las Islas Baleares.",
    "arqueo.n2.p2": "La conferencia, titulada \"¿Uniformidad o diversidad? La gestión ganadera en las Islas Baleares durante la Edad del Bronce\", sirvió para presentar un estado de la cuestión sobre los conocimientos actuales relacionados con la gestión ganadera durante este período prehistórico. La ponencia prestó especial atención a los datos obtenidos mediante la zooarqueología, los isótopos estables y los estudios de microdesgaste dental, herramientas clave para entender la alimentación, la movilidad y las estrategias de manejo de los rebaños.",
    "arqueo.n2.p3": "Esta investigación constituye el punto de partida del proyecto OVIS, centrado en el estudio de las prácticas ganaderas y las dinámicas socioeconómicas de las comunidades de las Islas Baleares durante la prehistoria reciente.",
    "arqueo.n2.p4": "Queremos agradecer a la organización la invitación y la oportunidad de compartir y debatir estas líneas de investigación en el marco del seminario.",
    "arqueo.n3.date": "Febrero de 2026",
    "arqueo.n3.title": "Póster del proyecto OVIS",
    "arqueo.n3.p1": "Póster científico del proyecto OVIS — \"Origins of Variability in Island Systems. Unraveling livestock diet and mobility across the Bronze-Iron Age transition\" — presentado en las X Jornadas de Arqueología de las Islas Baleares.",
    "arqueo.n4.date": "17–22 de mayo de 2027",
    "arqueo.n4.title": "Convocatoria de resúmenes ICAZ 2027 (Vancouver, Canadá)",
    "arqueo.n4.p1": "El Consejo Internacional de Arqueozoología (ICAZ) ha abierto la convocatoria de comunicaciones para su congreso de 2027 en Vancouver (Canadá). OVIS coorganiza la sesión \"Developing Islandscapes: Animals, mobility and environmental practices\", coordinada por la Dra. Lua Valenzuela-Suau y el Prof. Richard Madgwick.",
    "arqueo.n4.p2": "Los contextos insulares ofrecen entornos excepcionalmente diversos pero estructuralmente comparables para estudiar las relaciones entre la gestión ganadera, la transformación del paisaje y el cambio climático. La sesión invita a presentar contribuciones que apliquen métodos zooarqueológicos —análisis de isótopos, microdesgaste dental, ADN antiguo, biometría o estudios de introducciones de especies— para explorar las estrategias de subsistencia y los mecanismos de adaptación desarrollados en contextos insulares de todo el mundo.",
    "arqueo.n4.p3": "Sesión híbrida · Vancouver, Canadá · 17–22 de mayo de 2027. Fecha límite para enviar resúmenes: 25 de agosto. Las propuestas se envían en línea a través del formulario del congreso.",
    // —— contact page ——
    "contact.hero.eyebrow": "Ponte en contacto",
    "contact.hero.title": "Contacto",
    "contact.hero.desc": "Preguntas sobre el proyecto OVIS, propuestas de colaboración o consultas de prensa — dirígete directamente al equipo investigador.",
    "contact.team.title": "Equipo investigador",
    "contact.team.desc": "El proyecto OVIS acoge consultas de investigadores, estudiantes, periodistas e instituciones interesados en su trabajo. Los tiempos de respuesta pueden variar durante los períodos de trabajo de campo.",
    "contact.email.label": "Correo electrónico",
    "contact.host.label": "Institución anfitriona",
    "contact.host.value": "Cardiff University, School of History,<br>Archaeology and Religion<br>Cardiff, Gales, Reino Unido",
    "contact.form.name": "Nombre",
    "contact.form.name.ph": "Tu nombre completo",
    "contact.form.email": "Correo electrónico",
    "contact.form.subject": "Asunto",
    "contact.form.opt0": "Selecciona un tema",
    "contact.form.opt.collab": "Colaboración en investigación",
    "contact.form.opt.data": "Compartición de datos / muestras",
    "contact.form.opt.media": "Consulta de prensa",
    "contact.form.opt.discussion": "Foro de discusión",
    "contact.form.opt.other": "Otros",
    "contact.form.message": "Mensaje",
    "contact.form.message.ph": "Tu mensaje…",
    "contact.form.send": "Enviar mensaje",
    "contact.form.success": "✓ Gracias por tu mensaje. El equipo investigador se pondrá en contacto pronto.",
    "disc.title": "Foro del proyecto",
    "disc.desc": "Un espacio para investigadores y colaboradores para compartir preguntas y reflexiones sobre el proyecto OVIS.",
    "disc.thread1": "Resultados de dieta y movilidad del ganado",
    "disc.thread2": "Próxima campaña de campo",
    "disc.replies": "respuestas",
    "disc.msg1": "¿Habéis visto los resultados de los últimos análisis isotópicos? La diferencia en los valores δ13C entre Menorca y Cerdeña es notable — sugiere estrategias de gestión de pastos muy diferentes.",
    "disc.msg2": "Sí, especialmente la diferencia entre islas. Me pregunto si se correlaciona con la presencia de redes comerciales nurágicas. ¿Tenéis previsto comparar con muestras sicilianas?",
    "disc.msg3": "¿Alguien sabe cuándo será la próxima campaña de trabajo de campo en Cerdeña? Me interesa unirme al equipo de muestreo si hay disponibilidad.",
    "disc.contact": "¿Queréis participar en la discusión? Enviad vuestra pregunta o comentario directamente al equipo investigador.",
    "disc.send": "Enviar mensaje",
    "footer.funded": "Financiado por la Unión Europea en el marco del programa Marie Skłodowska-Curie Actions (Horizon Europe).",
    "inst.hero.eyebrow": "Socios y financiadores",
    "inst.hero.title": "Instituciones",
    "inst.hero.desc": "Las instituciones de investigación, los organismos financiadores y las organizaciones colaboradoras que hacen posible el proyecto OVIS.",
    "inst.funding.eyebrow": "Financiación",
    "inst.funding.title": "Financiador",
    "inst.funding.tag": "Financiador principal",
    "inst.funding.name": "Unión Europea — Horizon Europe",
    "inst.funding.desc": "OVIS está financiado por la Unión Europea en el marco del programa de becas postdoctorales Marie Skłodowska-Curie Actions (Horizon Europe, Acuerdo de subvención n.º 101209433). Las Marie Skłodowska-Curie Actions apoyan a investigadores en todas las etapas de su carrera, independientemente de su edad y nacionalidad, y financian investigación, innovación y formación en todos los ámbitos científicos.",
    "inst.funding.disclaimer": "Las opiniones expresadas son únicamente las del autor/a y no reflejan necesariamente las de la Unión Europea o de la Agencia Ejecutiva Europea de Investigación. Ni la UE ni la autoridad concedente pueden ser consideradas responsables de ellas.",
    "inst.host.eyebrow": "Institución anfitriona",
    "inst.host.title": "Dónde tiene su sede OVIS",
    "inst.host.tag": "Institución anfitriona · Gales, Reino Unido",
    "inst.host.name": "Cardiff University — School of History, Archaeology and Religion",
    "inst.host.desc": "La Universidad de Cardiff acoge la beca OVIS. La School of History, Archaeology and Religion (SHARE) ofrece un entorno de investigación puntero en ciencia arqueológica, con laboratorios de isótopos y biomoleculares de última generación. El laboratorio de isótopos de Cardiff permite los análisis de estroncio, oxígeno, carbono y nitrógeno centrales para el proyecto OVIS.",
    "inst.partners.eyebrow": "Colaboraciones",
    "inst.partners.title": "Socios de investigación",
    "inst.partners.lead": "Las universidades, museos y centros de investigación que colaboran con OVIS en el Mediterráneo occidental y más allá.",
    "inst.partner.uib": "Universidad de las Islas Baleares",
    "inst.partner.uv": "Universidad de Valencia",
    "inst.partner.sassari": "Universidad de Sassari",
    "inst.partner.joukowsky": "Instituto Joukowsky · Brown University",
    "inst.partner.menorca": "Museo de Menorca",
    "inst.partner.cansaura": "Museo de Ciutadella · Can Saura",
    "inst.partner.manacor": "Museo de Historia de Manacor",
  },

  it: {
    // —— shared: nav / footer / tags ——
    "nav.ovis": "OVIS",
    "nav.arqueo": "Notizie del Progetto",
    "nav.institutions": "Istituzioni",
    "nav.discussion": "Discussione",
    "nav.contact": "Contatto",
    "about.more": "Scopri di più sul progetto →",
    "news.ovis.eyebrow": "Aggiornamenti del Progetto",
    "news.ovis.title": "Ultime notizie OVIS",
    "news.all": "Vedi tutte →",
    "news.readmore": "Leggi di più →",
    "tag.conference": "Conferenza",
    "tag.poster": "Poster",
    "tag.call": "Call for papers",
    "aria.close": "Chiudi",
    // —— index: hero / intro ——
    "hero.subtitle": "Svelare la dieta e la mobilità del bestiame durante la transizione Bronzo–Ferro nel Mediterraneo occidentale",
    "hero.scroll": "Scorri",
    "intro.islands": "Isole studiate",
    "intro.periods": "Arco cronologico",
    "intro.samples": "Numero di individui",
    "intro.partners": "Campioni faunistici",
    "intro.years": " anni",
    // —— index: research sites map ——
    "map.eyebrow": "Aree di studio",
    "map.title": "Siti di studio",
    "map.hint": "Cliccami",
    "map.desc": "Tre sistemi insulari del Mediterraneo occidentale, diversi per dimensioni, tradizioni culturali e disponibilità di risorse",
    "map.sardinia.name": "Sardegna (Italia)",
    "map.sardinia.culture": "Dalla cultura nuragica alla conquista romana",
    "map.sardinia.desc": "Iconiche strutture in pietra dei nuraghi e società pastorali complesse con testimonianze di reti commerciali mediterranee a lungo raggio.",
    "map.mallorca.name": "Maiorca (Isole Baleari)",
    "map.mallorca.culture": "Dalla cultura navetiforme alla conquista romana",
    "map.mallorca.desc": "La più grande isola delle Baleari, con importanti insediamenti talaiotici e insiemi faunistici chiave per comprendere le transizioni pastorali tra l'Età del Bronzo e del Ferro.",
    "map.menorca.name": "Minorca (Isole Baleari)",
    "map.menorca.culture": "Dalla cultura navetiforme alla conquista romana",
    "map.menorca.desc": "Insediamenti dell'Età del Bronzo e del Ferro con caratteristiche torri talaiot e ricchi insiemi faunistici che registrano secoli di cambiamento pastorale.",
    // —— shared: project info card ——
    "project.title": "Sul progetto OVIS",
    "project.q1": "Cos'è OVIS?",
    "project.p1": "OVIS (Origins of Variability in Island Systems) è una borsa di studio Marie Skłodowska-Curie Actions che indaga la dieta, la mobilità e la gestione degli ovicaprini — pecore e capre — nelle isole del Mediterraneo occidentale durante l'Età del Bronzo e del Ferro.",
    "project.q2": "Perché è importante?",
    "project.p2": "Le comunità insulari del Mediterraneo antico hanno sviluppato strategie distintive per la gestione del bestiame, influenzate dalla geografia, dalle rotte commerciali e dagli scambi culturali. Applicando l'analisi degli isotopi stabili ai resti faunistici, OVIS ricostruisce queste strategie con una risoluzione senza precedenti.",
    "project.funded": "Finanziato da",
    "project.grant": "Accordo di sovvenzione",
    "project.doi": "DOI",
    "project.duration": "Durata",
    "project.host": "Istituzione ospitante",
    "project.pi": "Ricercatrice",
    "project.su": "Supervisore",
    // —— ovis page ——
    "ovis.hero.eyebrow": "Marie Skłodowska-Curie Actions · Horizon Europe",
    "ovis.hero.title": "Progetto OVIS<br><em style=\"font-style:italic;color:var(--accent-light)\">Origins of Variability in Island Systems</em>",
    "ovis.hero.desc": "Uno sguardo completo alla ricerca, alla metodologia, ai siti, al team e ai progressi della borsa OVIS.",
    "ovis.about.eyebrow": "Sul progetto",
    "ovis.about.title": "Cos'è OVIS?",
    "ovis.overview.q": "Panoramica",
    "ovis.overview.p1": "OVIS è una borsa post-dottorato Marie Skłodowska-Curie Actions finanziata nell'ambito di Horizon Europe. Il progetto mira a fornire nuove informazioni sulle cause e sulle conseguenze della transizione tra l'Età del Bronzo e l'Età del Ferro nel Mediterraneo occidentale. La principale novità del progetto sta nell'affrontare una questione chiave per questa regione da una prospettiva specificamente insulare, concentrandosi su uno dei fondamenti economici di queste società: l'allevamento.",
    "ovis.overview.p2": "In particolare, si studierà la dieta dei caprini domestici, il che permetterà di dedurre la vegetazione disponibile e di analizzare sia come le pratiche di allevamento abbiano contribuito alla trasformazione del paesaggio, sia se tali pratiche siano state a loro volta condizionate da cambiamenti paleoambientali, decisioni politiche o dall'arrivo di nuovi gruppi umani.",
    "ovis.overview.p3": "Attraverso un'analisi diacronica (c. 1600–123 a.C.) e un approccio multiregionale (Sardegna, Maiorca e Minorca), il progetto cerca di offrire una comprensione più ampia del fenomeno, fornendo dati sull'impatto climatico e sulle strategie di adattamento nei contesti insulari.",
    "ovis.obj.q": "Obiettivi della ricerca",
    "ovis.obj.1": "Capire come la dieta e la mobilità degli animali siano cambiate nel tempo, e se questi cambiamenti siano stati determinati da sviluppi locali o dall'arrivo di nuove conoscenze e tecnologie.",
    "ovis.obj.2": "Esplorare come si siano trasformati i paesaggi insulari e individuare i principali fattori all'origine di questi cambiamenti.",
    "ovis.obj.3": "Esaminare come le comunità insulari abbiano interagito con il proprio ambiente e con il più ampio mondo mediterraneo.",
    "ovis.obj.4": "Individuare eventi climatici del passato e valutarne l'impatto sulle popolazioni e sugli ecosistemi insulari.",
    "ovis.obj.5": "Indagare come le comunità insulari si siano adattate alle mutevoli condizioni e abbiano sfruttato al meglio le risorse disponibili.",
    "ovis.method.q": "Metodologia",
    "ovis.method.p1": "Il progetto combina l'analisi degli isotopi di carbonio (δ¹³C) e ossigeno (δ¹⁸O) con la microusura dentale sui denti dei caprini. Gli isotopi forniscono dati a lungo termine sul consumo vegetale e sulle condizioni ambientali, mentre la microusura dentale rivela la dieta e il comportamento alimentare a breve termine prima della morte. Insieme, offrono una ricostruzione temporale complementare che consente confronti ad alta risoluzione tra i periodi.",
    "ovis.impact.q": "Impatto",
    "ovis.impact.p1": "OVIS rappresenterà un progresso importante nel valorizzare l'archeologia insulare, spesso trascurata nelle narrazioni più ampie, nonostante le isole funzionino invariabilmente come nodi all'interno di grandi reti e possano quindi offrire una prospettiva più ampia sulla connettività e sul cambiamento sociale ed economico. Allo stesso tempo, attraverso l'integrazione dei dati isotopici con eventi climatici e storici, il progetto chiarirà come le popolazioni insulari si siano adattate alle avversità, le strategie impiegate per massimizzare le risorse (ad es. spostamenti stagionali, foraggiamento) e l'impatto di queste pratiche sul paesaggio in ambienti limitati.",
    "ovis.impact.p2": "Questi dati sono inoltre molto rilevanti per la scienza contemporanea, in particolare nel contesto del cambiamento climatico, in cui la desertificazione e l'esaurimento delle risorse stanno causando una drastica riduzione del bestiame sulle isole, con conseguenze significative a breve termine per gli ecosistemi. Questo progetto ridefinirà la storia del Mediterraneo arricchendo il registro archeologico con un immenso volume di informazioni ad alta risoluzione e sensibili al tempo. I dati saranno essenziali per rilevare, organizzare e valutare l'impatto degli eventi trasformativi che hanno plasmato il passato, promuovendo così una rivalutazione delle narrazioni attuali sulla Preistoria recente e facendo avanzare la disciplina.",
    "ovis.sites.eyebrow": "Siti",
    "ovis.sites.title": "Siti archeologici",
    "ovis.sites.1.region": "Italia",
    "ovis.sites.2.region": "Isole Baleari (Spagna)",
    "ovis.sites.3.region": "Isole Baleari (Spagna)",
    "ovis.sites.label": "Siti",
    "ovis.sci.eyebrow": "Metodologia",
    "ovis.sci.title": "Approccio scientifico",
    "ovis.iso.q": "Analisi isotopica",
    "ovis.iso.p1": "Il campionamento multi-isotopico dello smalto dentale (campionamento sequenziale lungo la corona) consente di ricostruire la dieta stagionale e la mobilità nel corso della vita. Le analisi degli isotopi di carbonio e ossigeno riflettono la composizione della dieta e le condizioni paleoambientali.",
    "ovis.micro.q": "Analisi della microusura dentale",
    "ovis.micro.p1": "Questo metodo viene applicato in combinazione con le analisi multi-isotopiche. La microusura dentale rivela la dieta dell'animale e le condizioni ambientali durante gli ultimi giorni e settimane di vita. In termini generali, consente di distinguere tra diversi modelli alimentari come pascolatori, brucatori e alimentatori misti.",
    "ovis.sci.label1": "Sistemi isotopici",
    "ovis.sci.label2": "Taxa target",
    "ovis.sci.label3": "Obiettivo di campionamento",
    "ovis.sci.label4": "Laboratori di analisi",
    "ovis.sci.samples": "150+ esemplari faunistici",
    "ovis.team.eyebrow": "Team",
    "ovis.team.title": "Ricercatrice",
    "ovis.team.role": "Ricercatrice post-dottorato · Borsista Marie Skłodowska-Curie",
    "ovis.team.bio": "Laureata in Storia presso l'Università di Barcellona (2011), Master in Archeologia presso l'Università di Granada (2013) e Dottorato in Storia, Storia dell'Arte e Geografia presso l'Università delle Isole Baleari (2020). La sua ricerca si concentra sulle strategie di allevamento e sullo sfruttamento del paesaggio nelle società del passato, con particolare attenzione ai contesti insulari. È specializzata in analisi zooarcheologica, microusura dentale e studi di mobilità con isotopi di stronzio.",
    "ovis.updates.eyebrow": "Novità",
    "ovis.updates.title": "Notizie del progetto",
    "ovis.updates.icaz.desc": "OVIS è co-organizzatore della sessione \"Developing Islandscapes: Animals, mobility and environmental practices\" al congresso ICAZ 2027 di Vancouver — la call for papers è aperta.",
    "ovis.updates.1.desc": "Conferenza \"Uniformità o diversità? La gestione del bestiame nelle Isole Baleari durante l'Età del Bronzo\", nell'ambito del ciclo organizzato dal Dipartimento di Scienze Storiche e Teoria delle Arti dell'UIB.",
    "ovis.updates.2.desc": "Presentazione del progetto OVIS a Palma attraverso il poster \"Origins of Variability in Island Systems\", a cura della Dr.ssa Lua Valenzuela-Suau e del Prof. Richard Madgwick.",
    "ovis.timeline.eyebrow": "Cronologia",
    "ovis.timeline.title": "Tappe del progetto",
    "ovis.tl.1.title": "Avvio del progetto — Cardiff University",
    "ovis.tl.1.desc": "Inizio della borsa. Allestimento iniziale del laboratorio, costruzione della banca dati e preparazione del primo lotto di campioni presso il laboratorio isotopico della Cardiff University.",
    "ovis.tl.2.title": "Prima campagna sul campo — Isole Baleari",
    "ovis.tl.2.desc": "Campionamento di resti faunistici dai depositi archeologici di Minorca e Maiorca. Collaborazione con il Museu de Menorca e l'UIB.",
    "ovis.tl.3.title": "Analisi isotopica, lotto 1",
    "ovis.tl.3.desc": "Analisi degli isotopi di stronzio e ossigeno dello smalto dentale dei caprini baleari nei laboratori di Cardiff. Attesi i primi risultati.",
    "ovis.tl.4.title": "Campagna sul campo in Sardegna",
    "ovis.tl.4.desc": "Campionamento nelle collezioni dei siti nuragici. Partnership con l'Università degli Studi di Sassari e la Soprintendenza Archeologia della Sardegna.",
    "ovis.tl.5.title": "Campionamento in Sicilia e analisi comparativa",
    "ovis.tl.5.desc": "Campionamento del terzo gruppo di isole. Integrazione di tutti i set di dati isotopici. Inizia l'analisi della texture della microusura dentale.",
    "ovis.tl.6.title": "Sintesi, pubblicazioni e divulgazione",
    "ovis.tl.6.desc": "Integrazione finale dei dati, invio di articoli sottoposti a revisione paritaria, presentazioni a congressi e deposito dei dati in accesso aperto. Chiusura del progetto.",
    "ovis.bib.eyebrow": "Bibliografia",
    "ovis.bib.title": "Pubblicazioni relative a OVIS",
    "ovis.bib.year": "Presto<br>disponibile",
    "ovis.bib.entry": "Le pubblicazioni del progetto OVIS appariranno qui man mano che la borsa procede.",
    "ovis.bib.note": "Elenco delle pubblicazioni in corso — 2026–2028",
    // —— arqueo (project news) page ——
    "arqueo.hero.eyebrow": "Scienza e Territorio",
    "arqueo.hero.title": "Archeologia<br><em style=\"font-style:italic;color:var(--accent-light)\">Notizie e Contesto</em>",
    "arqueo.hero.desc": "Sviluppi attuali in archeozoologia, zooarcheologia e preistoria del Mediterraneo occidentale — il panorama scientifico alla base del progetto OVIS.",
    "arqueo.intro.eyebrow": "Notizie del progetto",
    "arqueo.intro.title": "Ultime novità",
    "arqueo.n1.date": "20–21 febbraio 2026",
    "arqueo.n1.title": "OVIS partecipa alle X Giornate di Archeologia delle Isole Baleari",
    "arqueo.n1.p1": "Lo scorso febbraio si sono svolte a Palma (Maiorca, Isole Baleari, Spagna) le X Giornate di Archeologia delle Isole Baleari, organizzate dalla Sezione di Archeologia del Collegio degli Storici delle Baleari.",
    "arqueo.n1.p2": "Nell'ambito delle giornate, il progetto OVIS è stato presentato alla comunità archeologica che opera nelle Isole Baleari attraverso il poster intitolato \"OVIS: Origins of Variability in Island Systems. Unraveling livestock diet and mobility across the Bronze-Iron Age transition\". La presentazione è stata a cura della research fellow Dr.ssa Lua Valenzuela-Suau e del supervisore del progetto, Prof. Richard Madgwick. Durante la sessione sono stati illustrati i principali obiettivi del progetto, la metodologia scelta e i risultati attesi.",
    "arqueo.n1.p3": "Sono stati inoltre presentati diversi studi zooarcheologici precedenti che costituiscono il punto di partenza della ricerca svolta all'interno del progetto OVIS. In particolare, sono stati illustrati i lavori \"Sfruttamento del bestiame e gestione dell'ambiente nell'insediamento a navetes di Clariana (Ciutadella, Minorca): integrazione di dati faunistici, isotopici e di microusura dentale\" (Dr.ssa Lua Valenzuela-Suau e Dr. Damià Ramis) e \"Animali e ritualità nella grotta n. 45 di Calescoves (Alaior, Minorca)\" (Dr.ssa Lua Valenzuela-Suau, Dr.ssa Sonia Carbonell e Dr.ssa Margalida Antònia Coll).",
    "arqueo.n1.p4": "La partecipazione a queste giornate ha rappresentato un'eccellente opportunità per condividere le prime impostazioni del progetto OVIS e creare spazi di confronto con ricercatori e ricercatrici specializzati nella preistoria balearica.",
    "arqueo.n2.date": "25 febbraio 2026",
    "arqueo.n2.title": "Partecipiamo al XIII Ciclo di Seminari Víctor Guerrero dell'Università delle Isole Baleari",
    "arqueo.n2.p1": "Lo scorso febbraio abbiamo avuto l'opportunità di partecipare al \"XIII Ciclo di Seminari Víctor Guerrero\", organizzato dal Dipartimento di Scienze Storiche e Teoria delle Arti dell'Università delle Isole Baleari.",
    "arqueo.n2.p2": "La conferenza, intitolata \"Uniformità o diversità? La gestione del bestiame nelle Isole Baleari durante l'Età del Bronzo\", ha offerto un quadro delle conoscenze attuali sulla gestione del bestiame durante questo periodo preistorico. La relazione ha prestato particolare attenzione ai dati ottenuti tramite la zooarcheologia, gli isotopi stabili e gli studi di microusura dentale, strumenti chiave per comprendere l'alimentazione, la mobilità e le strategie di gestione delle greggi.",
    "arqueo.n2.p3": "Questa ricerca costituisce il punto di partenza del progetto OVIS, incentrato sullo studio delle pratiche di allevamento e delle dinamiche socio-economiche delle comunità delle Isole Baleari durante la tarda preistoria.",
    "arqueo.n2.p4": "Desideriamo ringraziare l'organizzazione per l'invito e per l'opportunità di condividere e discutere queste linee di ricerca nell'ambito del seminario.",
    "arqueo.n3.date": "Febbraio 2026",
    "arqueo.n3.title": "Poster del progetto OVIS",
    "arqueo.n3.p1": "Poster scientifico del progetto OVIS — \"Origins of Variability in Island Systems. Unraveling livestock diet and mobility across the Bronze-Iron Age transition\" — presentato alle X Giornate di Archeologia delle Isole Baleari.",
    "arqueo.n4.date": "17–22 maggio 2027",
    "arqueo.n4.title": "Call for abstract ICAZ 2027 (Vancouver, Canada)",
    "arqueo.n4.p1": "L'International Council for Archaeozoology (ICAZ) ha aperto la call for papers per il suo congresso del 2027 a Vancouver (Canada). OVIS è co-organizzatore della sessione \"Developing Islandscapes: Animals, mobility and environmental practices\", coordinata dalla Dr.ssa Lua Valenzuela-Suau e dal Prof. Richard Madgwick.",
    "arqueo.n4.p2": "I contesti insulari offrono ambienti eccezionalmente diversi ma strutturalmente comparabili per studiare le relazioni tra gestione del bestiame, trasformazione del paesaggio e cambiamento climatico. La sessione invita a presentare contributi che applichino metodi archeozoologici —analisi isotopiche, microusura dentale, DNA antico, biometria o studi sulle introduzioni di specie— per esplorare le strategie di sussistenza e i meccanismi di adattamento sviluppati nei contesti insulari di tutto il mondo.",
    "arqueo.n4.p3": "Sessione ibrida · Vancouver, Canada · 17–22 maggio 2027. Scadenza per l'invio degli abstract: 25 agosto. Le proposte si inviano online tramite il modulo del congresso.",
    // —— contact page ——
    "contact.hero.eyebrow": "Mettiti in contatto",
    "contact.hero.title": "Contatto",
    "contact.hero.desc": "Domande sul progetto OVIS, proposte di collaborazione o richieste dei media — rivolgiti direttamente al team di ricerca.",
    "contact.team.title": "Team di ricerca",
    "contact.team.desc": "Il progetto OVIS accoglie le richieste di ricercatori, studenti, giornalisti e istituzioni interessati al suo lavoro. I tempi di risposta possono variare durante i periodi di lavoro sul campo.",
    "contact.email.label": "Email",
    "contact.host.label": "Istituzione ospitante",
    "contact.host.value": "Cardiff University, School of History,<br>Archaeology and Religion<br>Cardiff, Galles, Regno Unito",
    "contact.form.name": "Nome",
    "contact.form.name.ph": "Il tuo nome completo",
    "contact.form.email": "Email",
    "contact.form.subject": "Oggetto",
    "contact.form.opt0": "Seleziona un argomento",
    "contact.form.opt.collab": "Collaborazione di ricerca",
    "contact.form.opt.data": "Condivisione di dati / campioni",
    "contact.form.opt.media": "Richiesta dei media",
    "contact.form.opt.discussion": "Forum di discussione",
    "contact.form.opt.other": "Altro",
    "contact.form.message": "Messaggio",
    "contact.form.message.ph": "Il tuo messaggio…",
    "contact.form.send": "Invia messaggio",
    "contact.form.success": "✓ Grazie per il tuo messaggio. Il team di ricerca ti risponderà a breve.",
    "disc.title": "Forum del progetto",
    "disc.desc": "Uno spazio per ricercatori e collaboratori per condividere domande e riflessioni sul progetto OVIS.",
    "disc.thread1": "Risultati su dieta e mobilità del bestiame",
    "disc.thread2": "Prossima campagna sul campo",
    "disc.replies": "risposte",
    "disc.msg1": "Avete visto i risultati delle ultime analisi isotopiche? La differenza nei valori δ13C tra Minorca e Sardegna è notevole — suggerisce strategie di gestione dei pascoli molto diverse.",
    "disc.msg2": "Sì, soprattutto la differenza tra le isole! Mi chiedo se si correli con la presenza di reti commerciali nuragiche. Avete in programma di confrontare con campioni siciliani?",
    "disc.msg3": "Qualcuno sa quando sarà la prossima campagna di lavoro sul campo in Sardegna? Sono interessata a unirmi al team di campionamento se c'è disponibilità.",
    "disc.contact": "Volete partecipare alla discussione? Inviate la vostra domanda o commento direttamente al team di ricerca.",
    "disc.send": "Invia un messaggio",
    "footer.funded": "Finanziato dall'Unione Europea nell'ambito del programma Marie Skłodowska-Curie Actions (Horizon Europe).",
    "inst.hero.eyebrow": "Partner e finanziatori",
    "inst.hero.title": "Istituzioni",
    "inst.hero.desc": "Le istituzioni di ricerca, gli enti finanziatori e le organizzazioni partner che rendono possibile il progetto OVIS.",
    "inst.funding.eyebrow": "Finanziamento",
    "inst.funding.title": "Finanziatore",
    "inst.funding.tag": "Finanziatore principale",
    "inst.funding.name": "Unione Europea — Horizon Europe",
    "inst.funding.desc": "OVIS è finanziato dall'Unione Europea nell'ambito del programma di borse post-dottorato Marie Skłodowska-Curie Actions (Horizon Europe, Accordo di sovvenzione n. 101209433). Le Marie Skłodowska-Curie Actions sostengono i ricercatori in tutte le fasi della carriera, indipendentemente dall'età e dalla nazionalità, e finanziano ricerca, innovazione e formazione in tutti i settori scientifici.",
    "inst.funding.disclaimer": "Le opinioni espresse sono esclusivamente quelle dell'autore/i e non riflettono necessariamente quelle dell'Unione Europea o dell'Agenzia Esecutiva Europea per la Ricerca. Né l'UE né l'autorità concedente possono esserne ritenute responsabili.",
    "inst.host.eyebrow": "Istituzione ospitante",
    "inst.host.title": "Dove ha sede OVIS",
    "inst.host.tag": "Istituzione ospitante · Galles, Regno Unito",
    "inst.host.name": "Cardiff University — School of History, Archaeology and Religion",
    "inst.host.desc": "La Cardiff University ospita la borsa OVIS. La School of History, Archaeology and Religion (SHARE) offre un ambiente di ricerca all'avanguardia nelle scienze archeologiche, con laboratori isotopici e biomolecolari di ultima generazione. Il laboratorio isotopico di Cardiff consente le analisi di stronzio, ossigeno, carbonio e azoto centrali per il progetto OVIS.",
    "inst.partners.eyebrow": "Collaborazioni",
    "inst.partners.title": "Partner di ricerca",
    "inst.partners.lead": "Le università, i musei e i centri di ricerca che collaborano con OVIS nel Mediterraneo occidentale e oltre.",
    "inst.partner.uib": "Università delle Isole Baleari",
    "inst.partner.uv": "Università di Valencia",
    "inst.partner.sassari": "Università degli Studi di Sassari",
    "inst.partner.joukowsky": "Istituto Joukowsky · Brown University",
    "inst.partner.menorca": "Museo di Minorca",
    "inst.partner.cansaura": "Museo di Ciutadella · Can Saura",
    "inst.partner.manacor": "Museo di Storia di Manacor",
  }
};

// ─── LANGUAGE SWITCHER ────────────────────────────────────
let currentLang = 'en';

function applyLang(lang) {
  currentLang = lang;
  const dict = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] == null) return;
    // Render as HTML when the value carries inline markup (news titles with <em>, or an explicit opt-in)
    if (el.hasAttribute('data-i18n-html') || (key.endsWith('.title') && el.querySelector('em'))) {
      el.innerHTML = dict[key];
    } else {
      el.textContent = dict[key];
    }
  });
  // Translatable attributes: data-i18n-placeholder, data-i18n-aria-label
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = dict[el.getAttribute('data-i18n-placeholder')];
    if (val != null) el.setAttribute('placeholder', val);
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const val = dict[el.getAttribute('data-i18n-aria-label')];
    if (val != null) el.setAttribute('aria-label', val);
  });
  // Animated counters own their own textContent, so translate the suffix through
  // data-suffix and repaint. A count in flight reads the suffix each frame, so
  // leave it alone -- its next frame picks the new one up.
  document.querySelectorAll('[data-i18n-suffix]').forEach(el => {
    const val = dict[el.getAttribute('data-i18n-suffix')];
    if (val == null) return;
    el.setAttribute('data-suffix', val);
    const raw = el.getAttribute('data-count');
    if (raw != null && !el.dataset.animating) el.textContent = raw + val;
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    applyLang(btn.dataset.lang);
    try { localStorage.setItem('ovis-lang', btn.dataset.lang); } catch (e) { /* storage unavailable */ }
  });
});

// Restore the visitor's chosen language on every page load
(function () {
  let saved;
  try { saved = localStorage.getItem('ovis-lang'); } catch (e) { /* storage unavailable */ }
  if (saved && i18n[saved] && saved !== 'en') applyLang(saved);
})();

// ─── NAVBAR SCROLL SHADOW ─────────────────────────────────
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ─── HERO BG LOAD ─────────────────────────────────────────
window.addEventListener('load', () => {
  document.querySelector('.hero-bg')?.classList.add('loaded');
});

// ─── HAMBURGER MENU ───────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger?.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
});

mobileMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger?.setAttribute('aria-expanded', 'false');
    });
});

// ─── BIBLIOGRAPHY FILTERS ─────────────────────────────────
document.querySelectorAll('.bib-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.bib-filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.bib-entry').forEach(entry => {
      if (filter === 'all' || entry.dataset.category === filter) {
        entry.classList.remove('hidden');
      } else {
        entry.classList.add('hidden');
      }
    });
  });
});

// ─── SMOOTH SCROLL OFFSET ────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});

// ─── ACTIVE NAV LINK (multipage) ──────────────────────────
(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href !== '#' && page.includes(href.split('#')[0])) {
      a.classList.add('active');
    }
  });
})();

// ─── NAV ACTIVE STYLE ─────────────────────────────────────
const navStyle = document.createElement('style');
navStyle.textContent = `
  .nav-links a.active { color: var(--olive); }
  .nav-links a.active::after { width: 100%; }
  .nav-title { text-decoration: none; }
`;
document.head.appendChild(navStyle);

// =========================================================
//  INTERACTIVE ENHANCEMENTS — style-experiments branch
// =========================================================

// ─── SCROLL PROGRESS BAR ─────────────────────────────────
;(function () {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
    bar.style.width = Math.min(pct, 100) + '%';
  }, { passive: true });
})();

// ─── SCROLL REVEAL (IntersectionObserver) ─────────────────
;(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => observer.observe(el));
})();

// ─── ANIMATED COUNTERS ────────────────────────────────────
;(function () {
  function animateCount(el) {
    const raw    = el.getAttribute('data-count');
    const target = parseFloat(raw);
    const dur    = 3800;
    const start  = performance.now();
    el.dataset.animating = '1';

    function tick(now) {
      // Read the suffix per frame: applyLang can swap it mid-count.
      const suffix   = el.getAttribute('data-suffix') || '';
      const progress = Math.min((now - start) / dur, 1);
      const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.round(target * eased) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else {
        el.textContent = raw + suffix;
        delete el.dataset.animating;
      }
    }
    requestAnimationFrame(tick);
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = '1';
        animateCount(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(el => obs.observe(el));
})();

// ─── PARALLAX HERO ────────────────────────────────────────
;(function () {
  const heroBg = document.querySelector('.hero-bg');
  const hero   = document.querySelector('.hero');
  if (!heroBg || !hero) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY < hero.offsetHeight) {
      const zoom = 1 + window.scrollY * 0.00045;
      heroBg.style.transform = `scale(${zoom})`;
    }
  }, { passive: true });
})();

// ─── LEAFLET MAP ─────────────────────────────────────────
;(async function () {
  const mapEl = document.getElementById('leaflet-map');
  if (!mapEl || typeof L === 'undefined') return;

  const siteCards = document.querySelectorAll('.site-card');

  // Site metadata
  const sites = {
    menorca:  { center: [39.95, 4.05],  zoom: 10, label: 'Menorca',  culture: 'Balearic Islands — Talayotic culture' },
    mallorca: { center: [39.62, 2.95],  zoom: 9,  label: 'Mallorca', culture: 'Balearic Islands — Talayotic culture' },
    sardinia: { center: [40.12, 9.07],  zoom: 8,  label: 'Sardinia', culture: 'Italy — Nuragic culture'              },
  };

  // Polygon styles
  const styleDefault = { color: '#c4a882', weight: 1.5, fillColor: '#c4a882', fillOpacity: 0.20, lineJoin: 'round', lineCap: 'round' };
  const styleActive  = { color: '#4a5240', weight: 2,   fillColor: '#4a5240', fillOpacity: 0.55, lineJoin: 'round', lineCap: 'round' };

  // Init map — draggable + zoomable (wheel off so it doesn't hijack page scroll)
  const map = L.map('leaflet-map', {
    zoomControl: true,
    scrollWheelZoom: false,
  });

  // ── Vista general: cambia aquí para mover el encuadre ──
  const overviewCenter = [40.0, 6.5];
  const overviewZoom   = 6;
  map.setView(overviewCenter, overviewZoom);

  // CartoDB Voyager tiles
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd', maxZoom: 20,
  }).addTo(map);

  // Island outlines pre-generated from Nominatim OSM (data/islands.json)
  let shapes = {};
  try {
    const res = await fetch('data/islands.json');
    shapes = await res.json();
  } catch (e) { /* map stays usable without outlines */ }

  // Create GeoJSON layers
  const polygons = {};
  Object.keys(sites).forEach(key => {
    if (!shapes[key]) return;
    const layer = L.geoJSON({ type: 'Feature', geometry: shapes[key] }, {
      style: styleDefault,
    }).addTo(map);
    polygons[key] = layer;
    layer.on('click', () => toggle(key));
    layer.bindPopup(`<h4>${sites[key].label}</h4><p class="pop-culture">${sites[key].culture}</p>`);
    layer.bindTooltip(sites[key].label, {
      permanent: true,
      direction: 'center',
      className: 'island-label',
    });
  });

  // Excavation sites (from the project docs): [name, chronology, lat, lon]
  const digSites = {
    mallorca: [
      ['Closos de can Gaià', '1400–600 BC', 39.419136, 3.244298],
      ['Sa Ferradura', '1200–840 BC', 39.544534, 3.350827],
      ['S’Hospitalet Vell', '700–500 BC', 39.482575, 3.261558],
      ['Talaies de Can Jordi', '200–100 BC', 39.376822, 3.135975],
    ],
    menorca: [
      ['Es Coll de Cala Morell', '1400–1200 BC', 40.057778, 3.882537],
      ['Cornia Nou', '1100–600 BC', 39.881323, 4.233485],
      ['Sant Agustí', '300–200 BC', 39.928506, 4.035324],
    ],
    sardinia: [
      ['Sa Osa', '1200–1100 BC', 39.914167, 8.542222],
      ['S’Urachi', '600–400 BC', 40.015557, 8.582429],
    ],
  };
  Object.values(digSites).flat().forEach(([name, chrono, lat, lon]) => {
    L.circleMarker([lat, lon], {
      radius: 5, color: '#4a5240', weight: 2, fillColor: '#c4a882', fillOpacity: 0.95,
    }).addTo(map)
      .bindTooltip(name, { direction: 'top', offset: [0, -4] })
      .bindPopup(`<h4>${name}</h4><p class="pop-culture">${chrono}</p>`);
  });

  // Select an island (highlight only it), clear, or toggle on re-click
  function activate(name) {
    Object.entries(polygons).forEach(([key, p]) => p.setStyle(key === name ? styleActive : styleDefault));
    siteCards.forEach(c => c.classList.toggle('active', c.dataset.for === name));
  }
  function clearSelection() {
    Object.values(polygons).forEach(p => p.setStyle(styleDefault));
    siteCards.forEach(c => c.classList.remove('active'));
  }
  function toggle(name) {
    const isActive = [...siteCards].some(c => c.dataset.for === name && c.classList.contains('active'));
    if (isActive) clearSelection(); else activate(name);
  }

  // Card clicks — toggle the matching island (re-click deselects)
  siteCards.forEach(c => {
    c.addEventListener('click', () => toggle(c.dataset.for));
  });

  // Frame all three islands a bit closer as the starting view
  const framed = Object.values(polygons);
  if (framed.length) {
    map.fitBounds(L.featureGroup(framed).getBounds().pad(0.03), { animate: false });
  }
})();
