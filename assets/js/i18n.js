/* ============================================================
   Translations — EN / FR
   Usage: add data-i18n="key" to any HTML element
   ============================================================ */

const translations = {
  en: {
    /* ── Navigation ── */
    "nav.about":       "About",
    "nav.research":    "Research",
    "nav.talks":       "Talks",
    "nav.team":        "Team",
    "nav.teaching":    "Teaching",
    "nav.experiments": "Experiments",

    /* ── Home / Hero ── */
    "hero.subtitle":   "PhD Student in Engineering Sciences – Fluid Mechanics & Physics<br/>IUSTI Laboratory, Aix-Marseille University",
    "hero.bio1":       "I am a PhD student specializing in numerical and experimental studies of confined fires, with applications to firefighter interventions. My research focuses on the prediction of fire curves using advanced data assimilation techniques and computational modeling, combining fluid mechanics, heat transfer, and applied mathematics.",
    "hero.bio2":       "Beyond research, I am committed to sharing my knowledge through mentoring, scientific publications, conferences, and applied projects that have a tangible impact on fire safety.",
    "hero.contact":    "Contact Me",
    "hero.cv":         "CV",

    /* ── CV Modal ── */
    "cv.title":        "Curriculum Vitae",
    "cv.download":     "Download",

    /* ── About ── */
    "about.title":     "About Me",
    "about.p1":        "I am a PhD student in Engineering Sciences at Aix-Marseille University, conducting my research at the IUSTI Laboratory. My work focuses on the study of confined fires, combining experimental investigations and numerical modeling to better understand fire dynamics and improve prediction capabilities.",
    "about.p2":        "Beyond my academic research, I am also a volunteer firefighter. This field experience strongly shapes my scientific approach, as I aim to bridge the gap between theoretical modeling and real-world fire intervention scenarios.",
    "about.p3":        "My research interests include fire dynamics, data assimilation, and predictive modeling, with the objective of developing tools that can support safer and more efficient firefighting operations.",
    "about.p4":        "More broadly, I am driven by the desire to connect science and practice, contributing to both fundamental understanding and practical applications in fire safety.",
    "about.edu.title": "Education",
    "about.edu.phd":   "PhD in Engineering Sciences – Fluid Mechanics and Physics",
    "about.edu.phd.sub":    "Aix-Marseille University · 2023 — Present",
    "about.edu.master":     "Master's Degree in Fire Science and Fire Safety Engineering",
    "about.edu.master.sub": "Aix-Marseille University · 2021 — 2023",
    "about.interests.title": "Research Interests",
    "about.tag1": "Numerical Fire Modeling",
    "about.tag2": "Data Assimilation",
    "about.tag3": "Fire Safety and Intervention",
    "about.tag4": "Fluid Mechanics & Heat Transfer",

    /* ── Research ── */
    "research.title": "Research Projects & Publications",
    "research.intro": "My research focuses on the numerical and experimental study of confined fires, with applications for firefighter interventions. I specialize in predicting fire curves using data assimilation techniques and experimental validation.",

    /* ── Talks ── */
    "talks.title": "Public Talks & Presentations",
    "talks.intro": "Sharing research through conferences and seminars is a vital part of my academic work. Here are some key presentations I have delivered on fire dynamics, numerical modeling, and data assimilation.",
    "talks.1.title": "Application of Incremental 4D-Var for Real-Time Prediction of a Fire Enclosure Oscillatory Dynamics",
    "talks.1.date":  "October 2024 · European Symposium on Fire Safety Science",
    "talks.1.desc":  "Presented research on real-time prediction of oscillatory dynamics in enclosure fires using Incremental 4D-Var data assimilation combined with a simplified well-mixed reactor model and experimental data from the literature.",

    /* ── Team ── */
    "team.title":     "Research Team & Collaborators",
    "team.intro":     "Research is a collaborative effort. I am fortunate to work with brilliant minds at the IUSTI Laboratory and beyond.",
    "team.supervisors": "Supervisors",
    "team.sup1.name": "Prof. Olivier Vauquelin",
    "team.sup1.role": "Director of Research, IUSTI",
    "team.sup2.name": "Dr. Kevin Varrall",
    "team.sup2.role": "Assistant Professor, IUSTI",
    "team.lab.title": "The Laboratory",
    "team.lab.desc.iusti":  "The IUSTI Laboratory (Institut Universitaire des Systèmes Thermiques Industriels) is a joint research unit between CNRS and Aix-Marseille University, specializing in heat transfer, fluid mechanics, and complex systems.",
    "team.lab.desc.cerisc":  "The CERISC (Centre d’études et de recherche interdisciplinaires sur la sécurité civile) at ENSOSP focuses on firefighter training, civil safety, and emergency response.",

    /* ── Teaching ── */
    "teaching.title": "Teaching & Mentorship",
    "teaching.intro": "Passionate about education, I actively contribute to teaching and mentoring activities at Aix-Marseille University and in professional firefighter training programs.",
    "teaching.uni.title": "University Teaching",
    "teaching.uni.course": "BUT Hygiene, Safety & Environment (HSE)",
    "teaching.uni.detail": "Teaching Contract (CME) · Aix-Marseille University · 2024–2026 · 64 h/year<br/>Preparation and delivery of tutorials (TD) and lab sessions (TP) encouraging student participation.<br/>Individual student support and guidance on progress.<br/>Development of pedagogical methods to facilitate understanding and application of scientific concepts.",
    "teaching.ff.title": "Firefighter Training",
    "teaching.ff.school": "National Fire Officers Academy (École Nationale Supérieure des Officiers de Sapeurs-Pompiers)",
    "teaching.ff.detail": "Training program · Aix-en-Provence · 2023–2026<br/>Design and delivery of courses on scientific research methodology.<br/>Individual and group supervision of trainees, guiding data collection, analysis, and report writing.<br/>Development of pedagogical and organizational skills to transmit scientific and practical knowledge effectively.",
    "teaching.mentorship.title": "Mentorship",
    "teaching.mentorship.desc":  "I mentor Bachelor and Master students on research projects, including both numerical and experimental studies. I guide them through numerical modeling, data analysis, experimental design, and scientific writing, emphasizing individualized mentorship and collaborative learning to support their development.",

    /* ── Experiments ── */
    "exp.title": "Experimental Gallery",
    "exp.intro": "A selection of images showcasing my experimental work across fire safety, fluid mechanics, and thermal studies.",
    "exp.1.title": "Helium Jet Impact on an Inclined Wall",
    "exp.1.desc":  "Experimental visualization of a helium jet impinging on an inclined wall. The experiment highlights the jet deflection, mixing mechanisms, and flow structures generated by the interaction between the buoyant helium jet and the solid surface.",
    "exp.2.title": "Wood Thermal Degradation with Sliding Cone Calorimeter",
    "exp.2.desc":  "Experimental study of wood thermal degradation using a vertically mounted sample exposed to a sliding cone calorimeter. The movable heating system allows the heat flux to be adjusted during the experiment, enabling the observation of ignition, flame spread, and pyrolysis behavior under varying thermal conditions.",
    "exp.3.title": "Wood Flame in a Scaled Firefighter Training Compartment",
    "exp.3.desc":  "Experimental visualization of a wood flame burning inside a reduced-scale model of a firefighter training compartment. The flame develops in the combustion chamber, while a hot smoke layer propagates through the observation corridor.",
    "exp.4.title": "Backdraft Phenomenon",
    "exp.4.desc":  "Visualization of the backdraft phenomenon during a firefighter training exercise in a controlled compartment, highlighting rapid flame propagation and smoke ignition.",

    /* ── Footer ── */
    "footer.affiliation": "PhD Student in Engineering Sciences – Fluid Mechanics and Physics<br/>Aix-Marseille University<br/>IUSTI Laboratory",
    "footer.location":    "Aix-Marseille University, Marseille, France",
    "footer.contact":     "Contact me via email",
    "footer.copy":        "© 2026 Oualid IKHOU — Built with passion",
  },

  fr: {
    /* ── Navigation ── */
    "nav.about":       "À propos",
    "nav.research":    "Recherche",
    "nav.talks":       "Conférences",
    "nav.team":        "Équipe",
    "nav.teaching":    "Enseignement",
    "nav.experiments": "Expériences",

    /* ── Home / Hero ── */
    "hero.subtitle":   "Doctorant en Sciences de l'Ingénieur – Mécanique des Fluides & Physique<br/>Laboratoire IUSTI, Aix-Marseille Université",
    "hero.bio1":       "Je suis doctorant spécialisé dans l'étude numérique et expérimentale des incendies confinés, avec des applications pour les interventions des sapeurs-pompiers. Mes recherches portent sur la prédiction des courbes d'incendie à l'aide de techniques avancées d'assimilation de données et de modélisation numérique, en combinant la mécanique des fluides, le transfert de chaleur et les mathématiques appliquées.",
    "hero.bio2":       "Au-delà de la recherche, je m’engage à partager mes connaissances par le mentorat, les publications scientifiques, les conférences et des projets appliqués qui ont un impact concret sur la sécurité incendie.",
    "hero.contact":    "Me contacter",
    "hero.cv":         "CV",

    /* ── CV Modal ── */
    "cv.title":        "Curriculum Vitae",
    "cv.download":     "Télécharger",

    /* ── About ── */
    "about.title":     "À propos de moi",
    "about.p1":        "Je suis doctorant en Sciences de l'Ingénieur à Aix-Marseille Université, où je mène mes recherches au laboratoire IUSTI. Mes travaux portent sur l'étude des incendies confinés, en combinant des investigations expérimentales et une modélisation numérique pour mieux comprendre la dynamique des incendies et améliorer les capacités de prédiction.",
    "about.p2":        "Au-delà de mes recherches académiques, je suis également sapeur-pompier volontaire. Cette expérience de terrain façonne fortement mon approche scientifique, car je cherche à combler le fossé entre la modélisation théorique et les scénarios réels d'intervention incendie.",
    "about.p3":        "Mes intérêts de recherche incluent la dynamique des incendies, l'assimilation de données et la modélisation prédictive, avec pour objectif de développer des outils pouvant soutenir des opérations de lutte contre l'incendie plus sûres et plus efficaces.",
    "about.p4":        "Plus largement, je suis animé par le désir de connecter la science et la pratique, en contribuant à la fois à la compréhension fondamentale et aux applications pratiques de la sécurité incendie.",
    "about.edu.title": "Formation",
    "about.edu.phd":   "Doctorat en Sciences de l'Ingénieur – Mécanique des Fluides et Physique",
    "about.edu.phd.sub":    "Aix-Marseille Université · 2023 — Présent",
    "about.edu.master":     "Master en Science du Feu et Ingénierie de la Sécurité Incendie",
    "about.edu.master.sub": "Aix-Marseille Université · 2021 — 2023",
    "about.interests.title": "Thèmes de recherche",
    "about.tag1": "Modélisation numérique des incendies",
    "about.tag2": "Assimilation de données",
    "about.tag3": "Sécurité incendie et intervention",
    "about.tag4": "Mécanique des fluides & transfert de chaleur",

    /* ── Research ── */
    "research.title": "Projets de recherche & Publications",
    "research.intro": "Mes recherches portent sur l'étude numérique et expérimentale des incendies confinés, avec des applications pour les interventions des sapeurs-pompiers. Je me spécialise dans la prédiction des courbes d'incendie par assimilation de données et validation expérimentale.",

    /* ── Talks ── */
    "talks.title": "Conférences & Présentations",
    "talks.intro": "Le partage de la recherche lors de conférences et séminaires est une part essentielle de mon travail académique. Voici quelques présentations clés sur la dynamique des incendies, la modélisation numérique et l'assimilation de données.",
    "talks.1.title": "Application de la méthode 4D-Var incrémentale pour la prédiction en temps réel de la dynamique oscillatoire d'un incendie confiné",
    "talks.1.date":  "Octobre 2024 · Symposium Européen sur la Science de la Sécurité Incendie",
    "talks.1.desc":  "Présentation de recherches sur la prédiction en temps réel de la dynamique oscillatoire des incendies confinés à l'aide de l'assimilation de données 4D-Var incrémentale, combinée à un modèle simplifié de réacteur bien mélangé et à des données expérimentales de la littérature.",

    /* ── Team ── */
    "team.title":     "Équipe de recherche & Collaborateurs",
    "team.intro":     "La recherche est un effort collaboratif. J'ai la chance de travailler avec des personnes brillantes au laboratoire IUSTI et au-delà.",
    "team.supervisors": "Directeurs de thèse",
    "team.sup1.name": "Prof. Olivier Vauquelin",
    "team.sup1.role": "Directeur de recherche, IUSTI",
    "team.sup2.name": "Dr. Kevin Varrall",
    "team.sup2.role": "Maître de conférences, IUSTI",
    "team.lab.title": "Le Laboratoire",
    "team.lab.desc.iusti": "Le Laboratoire IUSTI (Institut Universitaire des Systèmes Thermiques Industriels) est une unité de recherche conjointe du CNRS et de l’Université Aix-Marseille, spécialisée dans le transfert de chaleur, la mécanique des fluides et les systèmes complexes.",
    "team.lab.desc.cerisc": "Le CERISC (Centre d’études et de recherche interdisciplinaires sur la sécurité civile) à l’ENSOSP se concentre sur la formation des sapeurs-pompiers, la sécurité civile et la réponse aux situations d’urgence.",
    /* ── Teaching ── */
    "teaching.title": "Enseignement & Mentorat",
    "teaching.intro": "Passionné par l'éducation, je contribue activement aux activités d'enseignement et de mentorat à Aix-Marseille Université et dans les programmes de formation des sapeurs-pompiers.",
    "teaching.uni.title": "Enseignement universitaire",
    "teaching.uni.course": "BUT Hygiène, Sécurité & Environnement (HSE)",
    "teaching.uni.detail": "Contrat d'enseignement (CME) · Aix-Marseille Université · 2024–2026 · 64 h/an<br/>Préparation et dispense de travaux dirigés (TD) et travaux pratiques (TP) favorisant la participation des étudiants.<br/>Soutien individuel et accompagnement des étudiants dans leur progression.<br/>Développement de méthodes pédagogiques pour faciliter la compréhension et l'application des concepts scientifiques.",
    "teaching.ff.title": "Formation des sapeurs-pompiers",
    "teaching.ff.school": "École Nationale Supérieure des Officiers de Sapeurs-Pompiers",
    "teaching.ff.detail": "Programme de formation · Aix-en-Provence · 2023–2026<br/>Conception et dispense de cours sur la méthodologie de la recherche scientifique.<br/>Encadrement individuel et collectif des stagiaires, guidant la collecte de données, l'analyse et la rédaction de rapports.<br/>Développement de compétences pédagogiques et organisationnelles pour transmettre des connaissances scientifiques et pratiques.",
    "teaching.mentorship.title": "Mentorat",
    "teaching.mentorship.desc":  "J'encadre des étudiants en licence et en master sur des projets de recherche, incluant des études numériques et expérimentales. Je les guide dans la modélisation numérique, l'analyse de données, la conception expérimentale et la rédaction scientifique, en mettant l'accent sur un mentorat individualisé.",

    /* ── Experiments ── */
    "exp.title": "Galerie Expérimentale",
    "exp.intro": "Une sélection d'images illustrant mes travaux expérimentaux en sécurité incendie, mécanique des fluides et études thermiques.",
    "exp.1.title": "Impact d'un jet d'hélium sur une paroi inclinée",
    "exp.1.desc":  "Visualisation expérimentale d'un jet d'hélium heurtant une paroi inclinée. L'expérience met en évidence la déviation du jet, les mécanismes de mélange et les structures d'écoulement générés par l'interaction entre le jet d'hélium flottant et la surface solide.",
    "exp.2.title": "Dégradation thermique du bois avec cône calorimètre coulissant",
    "exp.2.desc":  "Étude expérimentale de la dégradation thermique du bois avec un échantillon monté verticalement exposé à un cône calorimètre coulissant. Le système de chauffage mobile permet d'ajuster le flux thermique pendant l'expérience, permettant d'observer l'ignition, la propagation des flammes et le comportement de pyrolyse.",
    "exp.3.title": "Flamme de bois dans un compartiment à échelle réduite",
    "exp.3.desc":  "Visualisation expérimentale d'une flamme de bois brûlant dans un modèle à échelle réduite d'un compartiment d'entraînement des sapeurs-pompiers. La flamme se développe dans la chambre de combustion tandis qu'une couche de fumée chaude se propage dans le couloir d'observation.",
    "exp.4.title": "Phénomène de Backdraft",
    "exp.4.desc":  "Visualisation du phénomène de backdraft lors d'un exercice d'entraînement de sapeurs-pompiers dans un compartiment contrôlé, mettant en évidence la propagation rapide des flammes et l'inflammation des fumées.",

    /* ── Footer ── */
    "footer.affiliation": "Doctorant en Sciences de l'Ingénieur – Mécanique des Fluides et Physique<br/>Aix-Marseille Université<br/>Laboratoire IUSTI",
    "footer.location":    "Aix-Marseille Université, Marseille, France",
    "footer.contact":     "Me contacter par email",
    "footer.copy":        "© 2026 Oualid IKHOU — Conçu avec passion",
  }
};

/* ── Apply translations ───────────────────────────────────── */
function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update <html lang>
  document.documentElement.lang = lang;

  // Highlight active flag
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Persist choice
  localStorage.setItem('lang', lang);
}

/* ── Init ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Default: saved pref → browser lang → EN
  const saved    = localStorage.getItem('lang');
  const browser  = navigator.language.startsWith('fr') ? 'fr' : 'en';
  const initLang = saved || browser;

  applyLang(initLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
});
