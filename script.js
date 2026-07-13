// =========================================================
//  OVIS PROJECT — script.js
// =========================================================

// ─── TRANSLATIONS ─────────────────────────────────────────
const i18n = {
  en: {
    "nav.ovis": "OVIS",
    "nav.arqueo": "Archaeology News",
    "nav.institutions": "Institutions",
    "nav.discussion": "Discussion",
    "nav.contact": "Contact",
    "about.more": "Read more about the project →",
    "news.ovis.eyebrow": "Project Updates",
    "news.ovis.title": "Latest from OVIS",
    "news.arqueo.eyebrow": "Field & Science",
    "news.arqueo.title": "Archaeology News",
    "news.all": "See all →",
    "arqueo.news.1.title": "EAA 2025 — Annual Meeting in Lisbon",
    "arqueo.news.1.desc": "The European Association of Archaeologists holds its 31st annual meeting, with sessions on zooarchaeology and insular Mediterranean prehistory.",
    "arqueo.news.2.title": "New review on Bronze Age pastoralism in the Western Mediterranean",
    "arqueo.news.2.desc": "A landmark synthesis article published in Journal of World Prehistory revises current models of livestock management in island contexts.",
    "hero.subtitle": "Unravelling livestock diet and mobility across the Bronze–Iron Age transition in the Western Mediterranean",
    "hero.scroll": "Scroll",
    "intro.islands": "Island groups studied",
    "intro.periods": "Archaeological periods",
    "intro.samples": "Faunal samples",
    "intro.partners": "Research institutions",
    "news.title": "Latest Updates",
    "tag.publication": "Publication",
    "tag.fieldwork": "Fieldwork",
    "tag.laboratory": "Laboratory",
    "tag.conference": "Conference",
    "news.readmore": "Read more →",
    "news.1.title": "New isotopic study published in Journal of Archaeological Science",
    "news.1.desc": "A new article on livestock mobility during the Bronze–Iron Age transition in insular contexts has been published, presenting preliminary OVIS data.",
    "news.2.title": "Fieldwork campaign in Sardinia",
    "news.2.desc": "New excavation and sampling campaign for the OVIS project, with international collaboration from three partner institutions.",
    "news.3.title": "Isotopic analysis of new dental samples underway",
    "news.3.desc": "The laboratory has begun analysis of new dental samples from Menorca and Sardinia, focusing on strontium and oxygen isotopes.",
    "news.4.title": "Presentation at the International Isotope Meeting",
    "news.4.desc": "Preliminary OVIS results were presented at an international stable isotopes congress, generating significant interest from the community.",
    "project.title": "About OVIS",
    "project.q1": "What is OVIS?",
    "project.p1": "OVIS (Origins of Variability in Island Systems) is a Marie Skłodowska-Curie Actions fellowship investigating the diet, mobility, and management of ovicaprids — sheep and goats — across the Western Mediterranean islands during the Bronze and Iron Ages.",
    "project.q2": "Why does it matter?",
    "project.p2": "Island communities in the ancient Mediterranean developed distinct strategies for managing livestock, shaped by geography, trade routes, and cultural exchange. By applying stable isotope analysis to faunal remains, OVIS reconstructs these strategies with unprecedented resolution.",
    "project.q3": "Methodology",
    "project.p3": "The project combines zooarchaeological analysis with multi-isotope approaches (carbon, nitrogen, oxygen, strontium) on dental and bone remains. Sites in Menorca, Sardinia, and Sicily are compared to build a regional picture of pastoral practices.",
    "project.funded": "Funded by",
    "project.grant": "Grant agreement",
    "project.duration": "Duration",
    "project.host": "Host institution",
    "project.pi": "Principal Investigator",
    "bib.title": "Key References",
    "bib.all": "All",
    "bib.ovis": "OVIS Publications",
    "bib.isotopes": "Stable Isotopes",
    "bib.zoo": "Zooarchaeology",
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
    "footer.orcid": "ORCID Profile",
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
    "inst.uib.tag": "Collaborating Institution · Palma, Spain",
    "inst.uib.name": "Universitat de les Illes Balears",
    "inst.uib.desc": "The UIB provides access to Balearic Islands archaeological collections and expertise in Balearic Bronze Age prehistory. Key collaborators include researchers in the zooarchaeology and prehistory groups.",
  },

  ca: {
    "nav.ovis": "OVIS",
    "nav.arqueo": "Notícies Arqueologia",
    "nav.institutions": "Institucions",
    "nav.discussion": "Discussió",
    "nav.contact": "Contacte",
    "about.more": "Llegir més sobre el projecte →",
    "news.ovis.eyebrow": "Actualitat del Projecte",
    "news.ovis.title": "Darreres notícies OVIS",
    "news.arqueo.eyebrow": "Camp i Ciència",
    "news.arqueo.title": "Notícies d'Arqueologia",
    "news.all": "Veure totes →",
    "arqueo.news.1.title": "EAA 2025 — Reunió Anual a Lisboa",
    "arqueo.news.1.desc": "L'Associació Europea d'Arqueòlegs celebra la seva 31a reunió anual, amb sessions sobre zooarqueologia i prehistòria insular mediterrània.",
    "arqueo.news.2.title": "Nova revisió sobre el pastoralisme del Bronze al Mediterrani Occidental",
    "arqueo.news.2.desc": "Un article de síntesi publicat al Journal of World Prehistory revisa els models actuals de gestió ramadera en contextos insulars.",
    "hero.subtitle": "Desxifrant la dieta i la mobilitat del bestiar durant la transició Bronze–Ferro en el Mediterrani occidental",
    "hero.scroll": "Desplaça",
    "intro.islands": "Grups d'illes estudiats",
    "intro.periods": "Períodes arqueològics",
    "intro.samples": "Mostres de fauna",
    "intro.partners": "Institucions associades",
    "news.title": "Darreres novetats",
    "tag.publication": "Publicació",
    "tag.fieldwork": "Treball de camp",
    "tag.laboratory": "Laboratori",
    "tag.conference": "Conferència",
    "news.readmore": "Llegir més →",
    "news.1.title": "Nou estudi isotòpic publicat al Journal of Archaeological Science",
    "news.1.desc": "S'ha publicat un nou article sobre la mobilitat del bestiar durant la transició Bronze–Ferro en contextos insulars, amb dades preliminars del projecte OVIS.",
    "news.2.title": "Campanya de treball de camp a Sardenya",
    "news.2.desc": "Nova campanya d'excavació i recollida de mostres per al projecte OVIS, amb col·laboració internacional de tres institucions associades.",
    "news.3.title": "Anàlisi isotòpica de noves mostres dentals en curs",
    "news.3.desc": "El laboratori ha iniciat l'anàlisi de noves mostres dentals procedents de Menorca i Sardenya, centrant-se en isòtops d'estronci i oxigen.",
    "news.4.title": "Presentació a l'International Isotope Meeting",
    "news.4.desc": "Els resultats preliminars del projecte OVIS es van presentar en un congrés internacional d'isòtops estables, generant un gran interès.",
    "project.title": "Sobre OVIS",
    "project.q1": "Què és OVIS?",
    "project.p1": "OVIS (Origins of Variability in Island Systems) és una beca Marie Skłodowska-Curie Actions que investiga la dieta, la mobilitat i la gestió dels ovicàprids — ovelles i cabres — a les illes del Mediterrani occidental durant l'Edat del Bronze i del Ferro.",
    "project.q2": "Per què és important?",
    "project.p2": "Les comunitats insulars del Mediterrani antic van desenvolupar estratègies peculiars per gestionar el bestiar, condicionades per la geografia, les rutes comercials i l'intercanvi cultural. Aplicant l'anàlisi d'isòtops estables a les restes de fauna, OVIS reconstrueix aquestes estratègies amb una resolució sense precedents.",
    "project.q3": "Metodologia",
    "project.p3": "El projecte combina l'anàlisi zooarqueològica amb enfocaments multi-isotòpics (carboni, nitrogen, oxigen, estronci) sobre restes dentals i òssies. S'estudien jaciments de Menorca, Sardenya i Sicília per construir una visió regional de les pràctiques pastorals.",
    "project.funded": "Finançat per",
    "project.grant": "Acord de subvenció",
    "project.duration": "Durada",
    "project.host": "Institució d'acollida",
    "project.pi": "Investigadora principal",
    "bib.title": "Referències clau",
    "bib.all": "Totes",
    "bib.ovis": "Publicacions OVIS",
    "bib.isotopes": "Isòtops estables",
    "bib.zoo": "Zooarqueologia",
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
    "footer.orcid": "Perfil ORCID",
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
    "inst.uib.tag": "Institució col·laboradora · Palma, Espanya",
    "inst.uib.name": "Universitat de les Illes Balears",
    "inst.uib.desc": "La UIB proporciona accés a col·leccions arqueològiques de les Illes Balears i experiència en la prehistòria de l'edat del bronze balear. Els col·laboradors clau inclouen investigadors dels grups de zooarqueologia i prehistòria.",
  },

  es: {
    "nav.ovis": "OVIS",
    "nav.arqueo": "Noticias Arqueología",
    "nav.institutions": "Instituciones",
    "nav.discussion": "Discusión",
    "nav.contact": "Contacto",
    "about.more": "Leer más sobre el proyecto →",
    "news.ovis.eyebrow": "Actualidad del Proyecto",
    "news.ovis.title": "Últimas noticias OVIS",
    "news.arqueo.eyebrow": "Campo y Ciencia",
    "news.arqueo.title": "Noticias de Arqueología",
    "news.all": "Ver todas →",
    "arqueo.news.1.title": "EAA 2025 — Reunión Anual en Lisboa",
    "arqueo.news.1.desc": "La Asociación Europea de Arqueólogos celebra su 31ª reunión anual, con sesiones sobre zooarqueología y prehistoria insular mediterránea.",
    "arqueo.news.2.title": "Nueva revisión sobre el pastoralismo del Bronce en el Mediterráneo Occidental",
    "arqueo.news.2.desc": "Un artículo de síntesis publicado en Journal of World Prehistory revisa los modelos actuales de gestión ganadera en contextos insulares.",
    "hero.subtitle": "Desentrañando la dieta y la movilidad del ganado durante la transición Bronze–Hierro en el Mediterráneo occidental",
    "hero.scroll": "Desplazar",
    "intro.islands": "Grupos de islas estudiados",
    "intro.periods": "Períodos arqueológicos",
    "intro.samples": "Muestras de fauna",
    "intro.partners": "Instituciones asociadas",
    "news.title": "Últimas novedades",
    "tag.publication": "Publicación",
    "tag.fieldwork": "Trabajo de campo",
    "tag.laboratory": "Laboratorio",
    "tag.conference": "Conferencia",
    "news.readmore": "Leer más →",
    "news.1.title": "Nuevo estudio isotópico publicado en Journal of Archaeological Science",
    "news.1.desc": "Se ha publicado un nuevo artículo sobre la movilidad del ganado durante la transición Bronze–Hierro en contextos insulares, con datos preliminares del proyecto OVIS.",
    "news.2.title": "Campaña de trabajo de campo en Cerdeña",
    "news.2.desc": "Nueva campaña de excavación y recogida de muestras para el proyecto OVIS, con colaboración internacional de tres instituciones asociadas.",
    "news.3.title": "Análisis isotópico de nuevas muestras dentales en curso",
    "news.3.desc": "El laboratorio ha iniciado el análisis de nuevas muestras dentales procedentes de Menorca y Cerdeña, centradas en isótopos de estroncio y oxígeno.",
    "news.4.title": "Presentación en el International Isotope Meeting",
    "news.4.desc": "Los resultados preliminares del proyecto OVIS se presentaron en un congreso internacional de isótopos estables, generando un gran interés.",
    "project.title": "Sobre OVIS",
    "project.q1": "¿Qué es OVIS?",
    "project.p1": "OVIS (Origins of Variability in Island Systems) es una beca Marie Skłodowska-Curie Actions que investiga la dieta, la movilidad y la gestión de los ovicápridos — ovejas y cabras — en las islas del Mediterráneo occidental durante las Edades del Bronce y del Hierro.",
    "project.q2": "¿Por qué es importante?",
    "project.p2": "Las comunidades insulares del Mediterráneo antiguo desarrollaron estrategias distintivas para gestionar el ganado, condicionadas por la geografía, las rutas comerciales y el intercambio cultural. Aplicando el análisis de isótopos estables a los restos de fauna, OVIS reconstruye estas estrategias con una resolución sin precedentes.",
    "project.q3": "Metodología",
    "project.p3": "El proyecto combina el análisis zooarqueológico con enfoques multi-isotópicos (carbono, nitrógeno, oxígeno, estroncio) sobre restos dentales y óseos. Se estudian yacimientos de Menorca, Cerdeña y Sicilia para construir una visión regional de las prácticas pastorales.",
    "project.funded": "Financiado por",
    "project.grant": "Acuerdo de subvención",
    "project.duration": "Duración",
    "project.host": "Institución anfitriona",
    "project.pi": "Investigadora principal",
    "bib.title": "Referencias clave",
    "bib.all": "Todas",
    "bib.ovis": "Publicaciones OVIS",
    "bib.isotopes": "Isótopos estables",
    "bib.zoo": "Zooarqueología",
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
    "footer.orcid": "Perfil ORCID",
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
    "inst.uib.tag": "Institución colaboradora · Palma, España",
    "inst.uib.name": "Universitat de les Illes Balears",
    "inst.uib.desc": "La UIB proporciona acceso a colecciones arqueológicas de las Islas Baleares y experiencia en la prehistoria de la Edad del Bronce balear. Los colaboradores clave incluyen investigadores de los grupos de zooarqueología y prehistoria.",
  },

  it: {
    "nav.ovis": "OVIS",
    "nav.arqueo": "Notizie Archeologia",
    "nav.institutions": "Istituzioni",
    "nav.discussion": "Discussione",
    "nav.contact": "Contatto",
    "about.more": "Scopri di più sul progetto →",
    "news.ovis.eyebrow": "Aggiornamenti del Progetto",
    "news.ovis.title": "Ultime notizie OVIS",
    "news.arqueo.eyebrow": "Scienza e Territorio",
    "news.arqueo.title": "Notizie di Archeologia",
    "news.all": "Vedi tutte →",
    "arqueo.news.1.title": "EAA 2025 — Riunione Annuale a Lisbona",
    "arqueo.news.1.desc": "L'Associazione Europea degli Archeologi tiene il suo 31° incontro annuale, con sessioni su archeozoologia e preistoria insulare mediterranea.",
    "arqueo.news.2.title": "Nuova rassegna sul pastoralismo dell'Età del Bronzo nel Mediterraneo Occidentale",
    "arqueo.news.2.desc": "Un articolo di sintesi pubblicato nel Journal of World Prehistory rivede i modelli attuali di gestione del bestiame in contesti insulari.",
    "hero.subtitle": "Svelare la dieta e la mobilità del bestiame durante la transizione Bronzo–Ferro nel Mediterraneo occidentale",
    "hero.scroll": "Scorri",
    "intro.islands": "Gruppi di isole studiate",
    "intro.periods": "Periodi archeologici",
    "intro.samples": "Campioni faunistici",
    "intro.partners": "Istituzioni partner",
    "news.title": "Ultime novità",
    "tag.publication": "Pubblicazione",
    "tag.fieldwork": "Lavoro sul campo",
    "tag.laboratory": "Laboratorio",
    "tag.conference": "Conferenza",
    "news.readmore": "Leggi di più →",
    "news.1.title": "Nuovo studio isotopico pubblicato sul Journal of Archaeological Science",
    "news.1.desc": "È stato pubblicato un nuovo articolo sulla mobilità del bestiame durante la transizione Bronzo–Ferro in contesti insulari, con dati preliminari del progetto OVIS.",
    "news.2.title": "Campagna di lavoro sul campo in Sardegna",
    "news.2.desc": "Nuova campagna di scavo e raccolta campioni per il progetto OVIS, con collaborazione internazionale di tre istituzioni partner.",
    "news.3.title": "Analisi isotopica di nuovi campioni dentali in corso",
    "news.3.desc": "Il laboratorio ha avviato l'analisi di nuovi campioni dentali provenienti da Minorca e Sardegna, con focus su isotopi di stronzio e ossigeno.",
    "news.4.title": "Presentazione all'International Isotope Meeting",
    "news.4.desc": "I risultati preliminari del progetto OVIS sono stati presentati a un congresso internazionale di isotopi stabili, suscitando grande interesse.",
    "project.title": "Sul progetto OVIS",
    "project.q1": "Cos'è OVIS?",
    "project.p1": "OVIS (Origins of Variability in Island Systems) è una borsa di studio Marie Skłodowska-Curie Actions che indaga la dieta, la mobilità e la gestione degli ovicaprini — pecore e capre — nelle isole del Mediterraneo occidentale durante l'Età del Bronzo e del Ferro.",
    "project.q2": "Perché è importante?",
    "project.p2": "Le comunità insulari del Mediterraneo antico hanno sviluppato strategie distintive per la gestione del bestiame, influenzate dalla geografia, dalle rotte commerciali e dagli scambi culturali. Applicando l'analisi degli isotopi stabili ai resti faunistici, OVIS ricostruisce queste strategie con una risoluzione senza precedenti.",
    "project.q3": "Metodologia",
    "project.p3": "Il progetto combina l'analisi zooarcheologica con approcci multi-isotopici (carbonio, azoto, ossigeno, stronzio) su resti dentali e ossei. Si confrontano siti di Minorca, Sardegna e Sicilia per costruire un quadro regionale delle pratiche pastorali.",
    "project.funded": "Finanziato da",
    "project.grant": "Accordo di sovvenzione",
    "project.duration": "Durata",
    "project.host": "Istituzione ospitante",
    "project.pi": "Ricercatrice principale",
    "bib.title": "Riferimenti chiave",
    "bib.all": "Tutti",
    "bib.ovis": "Pubblicazioni OVIS",
    "bib.isotopes": "Isotopi stabili",
    "bib.zoo": "Zooarcheologia",
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
    "footer.orcid": "Profilo ORCID",
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
    "inst.uib.tag": "Istituzione collaboratrice · Palma, Spagna",
    "inst.uib.name": "Universitat de les Illes Balears",
    "inst.uib.desc": "L'UIB fornisce accesso alle collezioni archeologiche delle Isole Baleari e competenze sulla preistoria dell'età del bronzo baleare. Tra i principali collaboratori figurano ricercatori dei gruppi di archeozoologia e preistoria.",
  }
};

// ─── LANGUAGE SWITCHER ────────────────────────────────────
let currentLang = 'en';

function applyLang(lang) {
  currentLang = lang;
  const dict = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      // Preserve inner <em> tags in news titles
      if (key.endsWith('.title') && el.querySelector('em')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

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
    const suffix = el.getAttribute('data-suffix') || '';
    const target = parseFloat(raw);
    const dur    = 3800;
    const start  = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / dur, 1);
      const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.round(target * eased) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = raw + suffix;
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
    menorca:  { center: [39.95, 4.05],  zoom: 10, label: 'Menorca',  culture: 'Balearic Islands — Talayotic culture', query: 'Menorca island Spain'  },
    mallorca: { center: [39.62, 2.95],  zoom: 9,  label: 'Mallorca', culture: 'Balearic Islands — Talayotic culture', query: 'Mallorca island Spain'  },
    sardinia: { center: [40.12, 9.07],  zoom: 8,  label: 'Sardinia', culture: 'Italy — Nuragic culture',              query: 'Sardinia island Italy'  },
  };

  // Polygon styles
  const styleDefault = { color: '#c4a882', weight: 1.5, fillColor: '#c4a882', fillOpacity: 0.20 };
  const styleActive  = { color: '#4a5240', weight: 2,   fillColor: '#4a5240', fillOpacity: 0.55 };

  // Init map
  const map = L.map('leaflet-map', {
    minZoom: 4, maxZoom: 12,
    scrollWheelZoom: false,
    zoomControl: true,
  });

  // ── Vista general: cambia aquí para mover el encuadre ──
  const overviewCenter = [40.0, 6.5];
  const overviewZoom   = 6;
  map.setView(overviewCenter, overviewZoom);

  // CartoDB Voyager tiles
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd', maxZoom: 20,
  }).addTo(map);

  // Fetch real island outline from Nominatim OSM
  async function fetchShape(query) {
    try {
      const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=geojson&polygon_geojson=1&limit=1&polygon_threshold=0.005`;
      const res = await fetch(url, { headers: { 'Accept-Language': 'en' } });
      const data = await res.json();
      const geom = data.features[0]?.geometry;
      if (!geom) return null;
      // If MultiPolygon, keep only the largest polygon (main island)
      if (geom.type === 'MultiPolygon') {
        geom.coordinates = [geom.coordinates.reduce((a, b) =>
          b[0].length > a[0].length ? b : a
        )];
      }
      return geom;
    } catch (e) { return null; }
  }

  // Load all island shapes in parallel
  const shapes = await Promise.all(
    Object.values(sites).map(s => fetchShape(s.query))
  );

  // Create GeoJSON layers
  const polygons = {};
  Object.keys(sites).forEach((key, i) => {
    if (!shapes[i]) return;
    const layer = L.geoJSON({ type: 'Feature', geometry: shapes[i] }, {
      style: styleDefault,
    }).addTo(map);
    polygons[key] = layer;
    layer.on('click', () => { userInteracted = true; clearTimeout(timer); activate(key, false); });
    layer.bindPopup(`<h4>${sites[key].label}</h4><p class="pop-culture">${sites[key].culture}</p>`);
  });

  // Activate site
  let userInteracted = false;
  function activate(name, flyTo = true) {
    Object.entries(polygons).forEach(([key, p]) => p.setStyle(key === name ? styleActive : styleDefault));
    siteCards.forEach(c => c.classList.toggle('active', c.dataset.for === name));
    if (flyTo) map.flyTo(sites[name].center, sites[name].zoom, { duration: 1.2 });
  }

  // Card clicks
  siteCards.forEach(c => {
    c.addEventListener('click', () => {
      userInteracted = true;
      clearTimeout(timer);
      activate(c.dataset.for, true);
    });
  });

  // ── Auto-cycle: 10s overview → 5s per island → repeat ──
  const siteList = ['menorca', 'mallorca', 'sardinia'];
  let timer = null;

  function showOverview() {
    Object.values(polygons).forEach(p => p.setStyle(styleDefault));
    siteCards.forEach(c => c.classList.remove('active'));
    map.flyTo(overviewCenter, overviewZoom, { duration: 1.4 });
  }

  function runCycle() {
    if (userInteracted) return;
    showOverview();
    let step = 0;
    function next() {
      if (userInteracted) return;
      if (step < siteList.length) {
        activate(siteList[step], true);
        step++;
        timer = setTimeout(next, 5000);
      } else {
        runCycle();
      }
    }
    timer = setTimeout(next, 10000);
  }

  const mapSection = document.querySelector('.section--map');
  if (mapSection) {
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !userInteracted) {
        runCycle();
      } else {
        clearTimeout(timer);
        showOverview();
      }
    }, { threshold: 0.3 }).observe(mapSection);
  }
})();
