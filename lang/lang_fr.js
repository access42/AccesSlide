var lang={
	/** Accessibility **/
	//vocalize slide number on total (1 on 4 for example)
	VocalizeNdiapo: { 
		label: 'Numéro de diapo', 
		help: 'Vocalise les numéros des diapositives lors de leur affichage' 
	} ,
	//Play a sound (beep) when displaying hidden text
	SoundTxt: { 
		label: 'Textes masqués', 
		help: 'Émet un bip lors de l\'affichage des textes masqués' 
	},
	//Play a sound (beep) when displaying a slide
	SoundSlide: { 
		label: 'Diapo', 
		help: 'Émet un bip lors de l\'affichage des diapos'
	},
	//Play a sound (beep) when displaying first slide
	SoundSlide1: { 
		label: 'Diapo début', 
		help: 'Émet un bip lors de l\'affichage de la première diapo'
	},
	//Play a sound (beep) when displaying last slide
	SoundSlideEnd: { 
		label: 'Diapo fin', 
		help: 'Émet un bip lors de l\'affichage de la dernière diapo'  
	},
	//Vocalize the title of the current slide
	VocalizeTitle: { 
		label: 'Titre', 
		help: 'Vocalise le titre de la diapo courante'
	},
	//Update the window title
	UpWindowTitle: { 
		label: 'Titre fenêtre', 
		help: 'Met à jour le titre de la fenêtre à l\'affichage d\'une diapo' 
	},
	//Skip to the "next" button on slideshow onload
	GotoBnext: { 
		label: 'Bouton suivant', 
		help: 'Donne le focus sur le bouton suivant lors de l\'affichage du diaporama' 
	},
	//Deactivate click button function to go to next slide
	//Warning : deactivate spacebar function too
	Noclick:  { 
		label: 'Clic', 
		help: 'Désactive l\'action du clic (et de la barre d\'espace) pour afficher la diapo suivante.'
	},
	/** Slideshow parameters **/
	// Display summary as :
	// 0 : no-modal window
	// 1 : modal window
	SumModOn: {
		label: 'Sommaire', 
		help: 'Afficher le sommaire comme une fenêtre modale'
	},
	// Switch CSS3=1 or JS=0 for shutter animation
	AnimCssOn: {
		label: 'Balayage', 
		help: 'Utiliser CSS3 pour les effets de balayage'
	},
	// Switch ModePlan=1 for Linear Layout
	ModePlan: {
		label: 'Mode plan', 
		help: 'Utiliser le mode plan pour afficher les diapos en succession linéaire'
	},
	/** Effects **/
	// Effects select label
	LabelEffect: 'Type d\'animation',
	// Noeffects
	Eno: {
		help: 'Pas d\'effet'
	},
	// Fade in
	Efadin: {
		help: 'Apparition progressive'
	},
	// Scale
	Escale: {
		help: 'Échelle'
	},
	// Flash
	Flash: {
		help: 'Apparition flash'
	},
	// Flip
	Flip: {
		help: 'Apparition flip'
	},
	// Shutter left
	Eleft: {
		help: 'Balayage vers la gauche'
	},
	// Shutter rigth
	Eright: {
		help: 'Balayage vers la droite'
	},
	// Shutter bottom
	Ebottom: { 
		help: 'Balayage vers le bas'
	},
	// Shutter top
	Etop: { 
		help: 'Balayage vers le haut'
	},
	// Group Legend
	Gaccess: { 
		legend: 'Accessibilité' 
	},
	Gslide: { 
		legend: 'Diaporama' 
	},
	Geffects: { 
		legend: 'Effets' 
	},
	/** Misceallanous **/
	// Setting configuration windows modal properties
	ConfigTitle: 'Paramètres',
	SummaryTitle: 'Sommaire',
	Wclose: 'Fermer',
	// Setting buttons
	Bsubmit: {
		title:'Enregistrer la configuration', 
		value: 'Enregistrer' 
	},
	Bdefault: {
		title:'Configuration par défaut', 
		value: 'Défaut' 
	},
	// Setting navbar button and select
	// Ndxon = expression "on" in "1 on 4" for vocalization numbers slide 
	Bprev: {
		title: 'Précédent',
		alt: 'Précédent'
	},
	Bnext: {
		title: 'Suivant',
		alt: 'Suivant'
	},
	Select:{
		title: 'Aller à la diapo numéro '
	},
	Bselect: {
		title: 'Afficher la diapo',
		alt: 'Afficher la diapo'
	},
	Btoc: {
		title: 'Table des matières',
		alt: 'Table des matières'
	},
	Bconfig: {
		title: 'Configuration',
		alt: 'Configuration'
	},
	Ndxon: 'sur'
}
