var lang={
	/** Accessibility **/
	//vocalize slide number on total (1 on 4 for example)
	VocalizeNdiapo: { 
		label: 'Slide number', 
		help: 'Vocalise slide numbers when displayed' 
	} ,
	//Play a sound (beep) when displaying hidden text
	SoundTxt: { 
		label: 'Hidden content', 
		help: 'Broadcast a beep when displaying hidden content' 
	},
	//Play a sound (beep) when displaying a slide
	SoundSlide: { 
		label: 'Slide', 
		help: 'Broadcast a beep when displaying a slide'
	},
	//Play a sound (beep) when displaying first slide
	SoundSlide1: { 
		label: 'First Slide', 
		help: 'Broadcast a beep when displaying first slide'
	},
	//Play a sound (beep) when displaying last slide
	SoundSlideEnd: { 
		label: 'Last Slide', 
		help: 'Broadcast a beep when displaying last slide'  
	},
	//Vocalize the heading of the current slide
	VocalizeTitle: { 
		label: 'Heading', 
		help: 'Vocalize the heading of the current slide'
	},
	//Update the window heading
	UpWindowTitle: { 
		label: 'Window heading', 
		help: 'Update the window heading when a slide is displayed' 
	},
	//Skip to the "next" button on slideshow onload
	GotoBnext: { 
		label: 'Next button', 
		help: 'Gives the focus to the next button when the slideshow is onload' 
	},
	//Deactivate click button function to go to next slide
	//Warning : deactivate spacebar function too
	Noclick:  { 
		label: 'Click', 
		help: 'Removes the click action (and the space bar) to display the next slide.'
	},
	/** Slideshow parameters **/
	// Display summary as modal window
	SumModOn: {
		label: 'Summary', 
		help: 'Display the summary as a modal window'
	},
	// Switch CSS3=1 or JS=0 for shutter animation
	AnimCssOn: {
		label: 'Sweep effect', 
		help: 'Use CSS3 for sweep effect'
	},
	// Switch ModePlan=1 for Linear Layout
	ModePlan: {
		label: 'Linear layout', 
		help: 'Use the linear layout to display the slides in linear succession'
	},
	/** Effects **/
	// Effects select label
	LabelEffect: 'Animation type',
	// Noeffects
	Eno: {
		help: 'No effect'
	},
	// Fade in
	Efadin: {
		help: 'Gradual appearance'
	},
	// Scale
	Escale: {
		help: 'Scale'
	},
	// Flash
	Flash: {
		help: 'Flash appearance'
	},
	// Flip
	Flip: {
		help: 'Flip appearance'
	},
	// Shutter left
	Eleft: {
		help: 'Sweep to left'
	},
	// Shutter rigth
	Eright: {
		help: 'Sweep to right'
	},
	// Shutter bottom
	Ebottom: { 
		help: 'Sweep to bottom'
	},
	// Shutter top
	Etop: { 
		help: 'Sweep to top'
	},
	// Group Legend
	Gaccess: { 
		legend: 'Accessibility' 
	},
	Gslide: { 
		legend: 'Slideshow' 
	},
	Geffects: { 
		legend: 'Effects' 
	},
	/** Misceallanous **/
	// Setting configuration windows modal properties
	ConfigTitle: 'Configuration',
	SummaryTitle: 'Summary',
	Wclose: 'Close',
	// Setting buttons
	Bsubmit: {
		title:'Save the configuration', 
		value: 'Save' 
	},
	Bdefault: {
		title:'Default configuration', 
		value: 'Default' 
	},
	// Setting navbar button and select
	// Ndxon = expression "on" in "1 on 4" for vocalization numbers slide 
	Bprev: {
		title: 'Previous',
		alt: 'Previous'
	},
	Bnext: {
		title: 'Next',
		alt: 'Next'
	},
	Select:{
		title: 'Go to slide N°'
	},
	Bselect: {
		title: 'Display the slide',
		alt: 'Display the slide'
	},
	Btoc: {
		title: 'Summary',
		alt: 'Summary'
	},
	Bconfig: {
		title: 'Configuration',
		alt: 'Configuration'
	},
	Ndxon: 'on'
}
