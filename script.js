// =========================================================
//  OVIS PROJECT — script.js
// =========================================================

// ─── TRANSLATIONS ─────────────────────────────────────────
const i18n = {
  en: {
    "nav.news": "News",
    "nav.project": "Project",
    "nav.bibliography": "Bibliography",
    "nav.discussion": "Discussion",
    "nav.contact": "Contact",
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
  },

  ca: {
    "nav.news": "Notícies",
    "nav.project": "Projecte",
    "nav.bibliography": "Bibliografia",
    "nav.discussion": "Discussió",
    "nav.contact": "Contacte",
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
  },

  es: {
    "nav.news": "Noticias",
    "nav.project": "Proyecto",
    "nav.bibliography": "Bibliografía",
    "nav.discussion": "Discusión",
    "nav.contact": "Contacto",
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
  },

  it: {
    "nav.news": "Notizie",
    "nav.project": "Progetto",
    "nav.bibliography": "Bibliografia",
    "nav.discussion": "Discussione",
    "nav.contact": "Contatto",
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
  mobileMenu.classList.toggle('open');
});

mobileMenu?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
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
