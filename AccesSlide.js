/**
AccesSlide
GPL licence
https://github.com/access42/AccesSlide
Copyright (c) 2015 Access42, access42.net
**/

// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later

var AccessSlide = ( function(){

	'use strict';

/**
Configuration
**/
var config = {
	/** Conteners **/
	Screen: {
		id: 'screen'
	},
	Banner: {
		id: 'banner'
	},
	NavBar: {
		id: 'navbar'
	},
	WrapperNav: {
		id: 'wrappernav'
	},
	Wrapper: {
		id: 'wrapper',
		classSettingLeft: 'Cagauche'
	},
	Flap: {
		id: 'volet'
	},
	Slide: {
		classSetting: 'slide'
	},
	Summary: {
		id: 'sommaire',
		classSettingFixed: 'fixed tool-block tool-block-summary',
		Ctitle: 'Ct'
	},
	Setting: {
		id: 'setting',
		Ctitle: 'Ctitle'
	},
	FormConfig: {
		id: 'FormConfig'
	},
	ConfigButton: {
		id: 'configbutton',
		classSetting: 'btn-group-settings'
	},
	LinearIndexTag: {
		classSetting: 'index'
	},
	LiveSlideTitle: {
		id: 'Dcourante'
	},
/** Effects 
	val: entry value name 
	classSetting: CSS classname effect,
	flap: true for flap effect
	slide: true for slide effect
	To set a new effect in four simples steps :
	1. Create a CSS class
	2. Create an entry in this section
	Example :
	NameOfEffect: {
		val: NameOfEffect,
		classSetting: 'yeah',
		flap: false,
		slide: true
	}
	3. Create an entry in the configuration lang file
	NameOfEffect: {
		help: 'the yeaaah effect' //text for option value in effects dropdown
	}
	Important : don't delete Eno entry
	**/
	// Noeffects
	Eno: { 
		val: 'Eno',
		flap: false,
		slide: false,
		group: 'Geffects'
	},
	// Fadein
	Efadin: {
		val: 'Efadin',
		classSetting: 'fadein', 
		flap: false,
		slide: true,
		group: 'Geffects' 
	},
	// Flap left to right
	Eleft: {
		val: 'Eleft',
		classSetting: 'ALTR',
		flap: true,
		slide: false,
		group: 'Geffects' 
	},
	// flap right to left
	Eright: {
		val: 'Eright',
		classSetting: 'ARTL',
		flap: true,
		slide: false,
		group: 'Geffects' 
	},
	// flap bottom to top
	Ebottom: { 
		val: 'Ebottom',
		classSetting: 'ATtoT',
		flap: true,
		slide: false,
		group: 'Geffects' 
	},
	// flap top to bottom
	Etop: { 
		val: 'Etop',
		classSetting: 'ATtoB',
		flap: true,
		slide: false,
		group: 'Geffects'
	},
	// Flash
	Flash: {
		val: 'Flash',
		classSetting: 'Flash',
		flap: true,
		slide: false,
		group: 'Geffects' 
	},
	// Scale
	Escale: {
		val: 'Escale',
		classSetting: 'Escale', 
		flap: false,
		slide: true,
		group: 'Geffects' 
	},
	// FLIP
	Flip: {
		val: 'Flip',
		classSetting: 'Flip', 
		flap: false,
		slide: true,
		group: 'Geffects' 
	},
	/** Players **/
	Stexte: {
		id: 'Stexte',
		file: 'bip_texte_masque'
	},
	Sdiapo: {
		id: 'Sdiapo',
		file: 'bip_diapo_on'
	},
	Sdiapo1: {
		id: 'Sdiapo1',
		file: 'bip_diapo1_on'
	},
	Sdiapoend: {
		id: 'Sdiapoend',
		file: 'bip_diapo_end'
	},
	Caudio: {
		id: 'Caudio'
	},
	/** Hidden Content Class **/
	HiddenContent: {
		classSetting: 'Cmasque'
	},
	/** Accessibility **/
	//vocalize slide number on total (1 on 4 for example)
	VocalizeNdiapo: { 
		id: 'VocalizeNdiapo',
		classSetting : 'input-setting',
		classHelpSetting: 'help',
		classLabelSetting: 'label-setting setting-sound',
		IconClass: 'icon icon-setting-sound',
		val: 0,
		group: 'Gaccess' 
	} ,
	//Play a sound (beep) when displaying hidden text
	SoundTxt: { 
		id: 'SoundTxt', 
		classSetting : 'input-setting',
		classHelpSetting: 'help',
		classLabelSetting: 'label-setting setting-sound',
		IconClass: 'icon icon-setting-sound',
		val: 0, 		
		group: 'Gaccess' 
	},
	//Play a sound (beep) when displaying a slide
	SoundSlide: { 
		id: 'SoundSlide', 
		classSetting : 'input-setting',
		classHelpSetting: 'help',
		classLabelSetting: 'label-setting setting-sound',
		IconClass: 'icon icon-setting-sound', 
		val: 0, 
		group: 'Gaccess' 
	},
	//Play a sound (beep) when displaying first slide
	SoundSlide1: { 
		id: 'SoundSlide1',  
		classSetting : 'input-setting',
		classHelpSetting: 'help',
		classLabelSetting: 'label-setting setting-sound',
		IconClass: 'icon icon-setting-sound',
		val: 0, 
		group: 'Gaccess' 
	},
	//Play a sound (beep) when displaying last slide
	SoundSlideEnd: { 
		id: 'SoundSlideEnd', 
		classSetting : 'input-setting',
		classHelpSetting: 'help',
		classLabelSetting: 'label-setting setting-sound',
		IconClass: 'icon icon-setting-sound',
		val: 0, 
		group: 'Gaccess' 
	},
	//Vocalize the heading of the current slide
	VocalizeTitle: { 
		id: 'VocalizeTitle', 
		classSetting : 'input-setting',
		classHelpSetting: 'help',
		classLabelSetting: 'label-setting setting-sound',
		IconClass: 'icon icon-setting-sound',
		val: 0, 		
		group : 'Gaccess' 
	},
	//Update the window heading
	UpWindowTitle: { 
		id: 'UpWindowTitle',
		classSetting : 'input-setting',
		classHelpSetting: 'help',
		classLabelSetting: 'label-setting setting-sound',
		IconClass: 'icon icon-setting-sound',		
		val: 0 , 
		group: 'Gaccess' 
	},
	//Skip to the "next" button on slideshow onload
	GotoBnext: { 
		id: 'GotoBnext',
		classSetting : 'input-setting',
		classHelpSetting: 'help',
		classLabelSetting: 'label-setting setting-next',
		IconClass: 'icon icon-setting-next',		
		val: 0,  
		group: 'Gaccess' 
	},
	//Deactivate click button function to go to next slide
	//Warning : deactivate spacebar function too
	Noclick:  { 
		id: 'Noclick',
		classSetting : 'input-setting',
		classHelpSetting: 'help',
		classLabelSetting: 'label-setting setting-mouse',
		IconClass: 'icon icon-setting-mouse',		
		val: 0,  
		group: 'Gaccess' 
	},
	/** Slideshow parameters **/
	// Display summary as :
	// 0 : no-modal window
	// 1 : modal window
	SumModOn: { 
		id: 'SumModOn',
		classSetting : 'input-setting',
		classHelpSetting: 'help',
		classLabelSetting: 'label-setting setting-summary',
		IconClass: 'icon icon-setting-summary',		
		val: 1,  
		group: 'Gslide' 
	},
	// Switch ModePlan=1 for Linear Layout
	ModePlan: { 
		id: 'ModePlan',
		classSetting : 'input-setting',
		classHelpSetting: 'help',
		classLabelSetting: 'label-setting setting-plan',
		IconClass: 'icon icon-setting-plan',		
		val: 0,   
		group: 'Gslide' 
	},
	/** Misceallanous **/
	// Setting configuration buttons
	Bsubmit: {
		id: 'setconfig',
		classSetting: 'btn-setting'
	},
	Bdefault: {
		id: 'resetconfig',
		classSetting: 'btn-setting'
	},
	//Close buttons
	Bclose: {
		idSummary: 'close',
		idConfig: 'Close2',
		classSetting: 'btn-close',
		iconClass: 'icon icon-close',
		fallbackClass : 'text',
		fallBackSrcImg:'img/close.png'
	},
	/** Setting navbar
		Setting navbar button and select
		classSetting : CSS classNames
		iconClass : CSS class for icon font injection
	**/
	Bprev: {
		id: 'prev',
		classSetting: 'tool-bar-elt btn btn-prev',
		iconClass: 'icon icon-prev',
		fallbackClass : 'text',
		fallBackSrcImg:'img/prev.png'
	},
	Bnext: {
		id: 'next',
		classSetting: 'tool-bar-elt btn btn-next',
		iconClass: 'icon icon-next',
		fallbackClass : 'text',
		fallBackSrcImg:'img/next.png'
	},
	Select:{
		id: 'tocP',
		classSetting: 'select-goto'
	},
	Bselect: {
		id: 'tocp',
		classSetting: 'btn btn-goto',
		iconClass: 'icon icon-goto',
		fallbackClass : 'text',
		fallBackSrcImg:'img/goto.png'
	},
	Btoc: {
		id: 'toc',
		classSetting: 'tool-bar-elt btn btn-block-summary',
		iconClass: 'icon icon-summary',
		fallbackClass : 'text',
		fallBackSrcImg:'img/summary.png'
	},
	Bconfig: {
		id: 'set',
		classSetting: 'tool-bar-elt btn btn-block-settings',
		iconClass: 'icon icon-settings',
		fallbackClass : 'text',
		fallBackSrcImg:'img/settings.png'
	},
	SelectWrapper: {
		id: 'Fgo',
		classSetting: 'tool-bar-elt'
	},
	TocSelect : {
		id: 'tocP',
	},
	SlideCounter: {
		id: 'cpt',
		idCurrent: 'current',
		idTotal: 'total',
		classSetting: 'tool-bar-elt slide-counter',
		currentClass: 'tool-bar-elt slide-counter-current',
		isHiddenClass: 'sr',
		totalClass: 'tool-bar-elt slide-counter-total'
	},
	IconFallBack: {
		classSetting: 'icon-fallback-text'
	},
	Ctitle:{
		classSetting: 'tool-block-title'
	}
}
/** End configuration setting **/
/** Global variables **/
// Modal config
var ConfigModOn = 1;
// Current Slide
var current = 0;
// Slide array
var TabSlide = [];
// Hidden content array
var TabTextSlide = [];
// Current hidden content
var Tcurrent = 0;
var Tcontrol = 0;
// Filter Tag clickable content
var TagListFiltre = new Array('BUTTON','A','SELECT','INPUT','AUDIO','VIDEO','TEXTAREA','LABEL');
// Slide dimensions
//var Slidew;
//var Slideh;
// flap dimension
//var Vheight = 100;
//var Vwidth;
// Modale window object (use for trapping focus and esc shutdown)
var openDial = null;
// Freeze hidden content if necessary
var TopenDial;
// Window title
var WTitre = document.title;
// CSS3 animation prefix
var pfx = ["webkit", "moz", "MS", "o", ""];
// Switch locale storage (for IE on local mode)
var Storage = 0;
// Base URL (used for reload the switch linear layout)
var BaseUrl;
/**
 Onload 
 **/
window.onload = function() {
	// Initialize UI controls and Config
	PushConfig();
	GetConfig();
	PushNavBar();
	// Initialize access config
	if( config.VocalizeNdiapo.val === 1 )$( config.SlideCounter.id ).setAttribute( 'aria-live', 'polite' );
	if( config.VocalizeNdiapo.val === 1 )$( config.SlideCounter.id ).setAttribute( 'aria-atomic', 'false' );
	if( config.GotoBnext.val === 1 )$( config.Bnext.id ).focus();
	if( config.SoundTxt.val === 1 )SetSon( config.Stexte.file, config.Stexte.id );
	if( config.SoundSlide.val === 1 )SetSon( config.Sdiapo.file, config.Sdiapo.id );
	if( config.SoundSlide1.val === 1 )SetSon( config.Sdiapo1.file, config.Sdiapo1.id );
	if( config.SoundSlideEnd.val === 1 )SetSon( config.Sdiapoend.file, config.Sdiapoend.id );
	// Initialize the slideshow array
	InitTabSlide();
	// Set the Toc index select
	TocP();
	/* Events manager */
	// Event click for next slide
	if( config.ModePlan.val === 0 && config.Noclick.val === 0 ){
		document.addEventListener( 'click', function( e ) {
			if ( TagListFiltre.indexOf( document.activeElement.tagName ) < 0 ) {
				GotoNext();	
			}
		}, true);
	}
	// Event Keys
	// Left: 37, Right :39, Spacebar: 32, Enter: 13, pageDown:34, pageUp:33 (for remote control), Open summary: ALT+0 ([2]48), Home:36, End:35, special previous slide for screen reader : SHIFT+Spacebar ([1]32).
	document.addEventListener( 'keydown', function( e ) {
			if ( key( e ) == 248 ) { OpenToc(); }
			if( config.ModePlan.val === 0 ){
				if ( key( e ) === 32 && config.Noclick.val === 0 ) { GotoNext(); e.preventDefault(); }
				if ( key( e ) === 39 || key( e ) === 34 ) { GotoNext(); e.preventDefault(); }
				if ( key( e ) === 37 || key( e ) === 33 || key( e ) == 132 ) { GotoPrev(); e.preventDefault(); }
				if ( key( e ) === 36 ) { current = 0; GotoSlide(); e.preventDefault(); }
				if ( key( e ) === 35 ) { current = TabSlide.length - 1; GotoSlide(); e.preventDefault(); }
				if ( key( e ) === 13 ) {
					if ( TagListFiltre.indexOf( document.activeElement.tagName ) < 0 ) {
						GotoNext();	
						e.preventDefault();
					}
			}
		}
	}, false);
	// Events Button 
	$( config.Bnext.id ).addEventListener( "click", GotoNext, false );
	$( config.Bprev.id ).addEventListener( "click", GotoPrev, false );
	// Event open/close TOC
	$( config.Btoc.id ).addEventListener( "click", OpenToc, false );
	$( config.Bclose.idSummary ).addEventListener( "click", CloseToc, false );
	// Event slide index select
	$( config.Select.id ).addEventListener( "change",function(){
		$( config.Bselect.id ).removeAttribute( 'disabled', 'disabled' );
	},false );
	$( config.Bselect.id ).addEventListener( "blur",function(){
			$( config.Select.id ).value = '';
			$( config.Bselect.id ).setAttribute( 'disabled','disabled' );
	},false);
	$( config.Bselect.id ).addEventListener( "click", Fgo, false );
	// Events open/close and save/reset Configuration 
	$( config.Bconfig.id ).addEventListener( "click", OpenConfig, false );
	$( config.Bclose.idConfig ).addEventListener( "click", CloseToc, false );
	$( config.Bsubmit.id ).addEventListener( "click", SetConfig, false );
	$( config.Bdefault.id ).addEventListener( "click", ResetConfig, false );	
	 // Trapping focus
	 if( config.SumModOn.val == 1 || ConfigModOn == 1 ){
		document.addEventListener( "focus", function( event ) {
			if ( openDial && !openDial.contains( event.target ) ) {
				event.stopPropagation();
				openDial.focus();
			}
		}, true);
	 }
	 // Close modals (ESC)
	document.addEventListener( "keydown", function( event ) {
		if ( openDial && key( event ) == 27 ) {
			CloseToc();
			openDial = null;
		}
	}, true );
	// Listener end flap animation
	PrefixedEvent( $( config.Flap.id ),"AnimationEnd", function(){ $( config.Flap.id ).removeAttribute( 'class' );} )
	// Get current slide when reload
	window.onbeforeunload=function(){
		try{
			sessionStorage.setItem( 'Scurrent', current );
		}
		catch(e){
			createCookie( 'Scurrent', current, 0 );
		}
	}
}
/** 
 Begin navigations functions 
**/
/* Initialize Slide array */
function InitTabSlide(){
	// Get current slide if exists
	try{
		current = parseInt( sessionStorage.Scurrent );
		sessionStorage.clear();
	}
	catch( e ){
		current = parseInt( readCookie( 'Scurrent' ) );
		eraseCookie( 'Scurrent' );
	}
	// Set slide array then display current slide if linear layout shutoff
	if( !current )current = 0;
	TabSlide = document.getElementsByClassName( config.Slide.classSetting );
	if( config.ModePlan.val === 0 ) NoSetTabSlide();
	$( config.SlideCounter.idCurrent ).firstChild.nodeValue = current + 1;
	if( config.VocalizeTitle.val === 1 )GetTitre();
	$( config.SlideCounter.idTotal ).firstChild.nodeValue = TabSlide.length;
	TabSlide[ current ].style.display = 'block';
	if( config.SoundSlide1.val === 1 && current === 0 )$( config.Sdiapo1.id ).play();
	if( config.UpWindowTitle.val === 1) MajTitreW();
	if( config.ModePlan.val === 0){
		document.body.style.height = '98.5%';
		$( config.Screen.id ).classList.remove( 'modeplan');
		// Hide header when first and last slide displaying
		if( current === 0 || current === TabSlide.length - 1 ) $( config.Banner.id ).style.top = '-10000px';
		//Animation play
		wow();
	}
	// Set linear layout mode and shutoff global effect
	else{
		$( config.Screen.id ).classList.add( 'modeplan');
		$( config.Screen.id ).setAttribute( 'data-effect', 'noEffect' );
		SetNSlide();
	}
	//Set slide TOC
	Toc();
}
/* Reset slides display*/
function NoSetTabSlide(){
	var RefEffect = $( config.Screen.id ).getAttribute( 'data-effect' );
	for( var i = 0, len = TabSlide.length ;i < len; i++ ){
		TabSlide[i].style.display = 'none';
		TabSlide[i].classList.remove( config[ RefEffect ].classSetting );
	}
	$( config.Flap.id ).classList.remove( config[ RefEffect ].classSetting );
}
/* Goto next/prev/current slide */
function GotoNext(){
	// If not hidden content run
	if( Tcontrol === 0 ){
		current += 1;
		if( current >= TabSlide.length )current -= 1;
		NoSetTabSlide();
		if( TabSlide[ current ] )TabSlide[ current ].style.display = 'block';
		SetAdaptive();
		// Hide header on first and last slide
		if( current === 0 || current === TabSlide.length - 1 ){
			$( config.Banner.id ).style.top = '-100000px';
		}
		else{
			$( config.Banner.id ).style.top = '4px';
		}
		wow();
		$( config.SlideCounter.idCurrent ).firstChild.nodeValue = current+1;
		ReScaleSummary();
		if( config.VocalizeTitle.val === 1)GetTitre();
		// Initialize hidden content array
		SetTabTextSlide();
	}
	// If hidden content run
	else{
		// Display hidden content
		if( TabTextSlide[ Tcurrent ] ) TabTextSlide[ Tcurrent ].style.visibility = 'visible';
		if( config.SoundTxt.val === 1) $( config.Stexte.id ).play();
		Tcurrent += 1;
		if( Tcurrent >= TabTextSlide.length ){
			Tcontrol = 0;
			Tcurrent = 0;
			TabTextSlide.length = 0;
		}
	}
}
function GotoPrev(){
	var Cprev = 1;
	// If not hidden content run
	if( Tcontrol === 0 ){
		current -= 1;
		if( current < 0 ) current = 0;
		NoSetTabSlide();
		if( TabSlide[ current ] )TabSlide[ current ].style.display = 'block';
		SetAdaptive();
		// Hide header on first and last slide		
		if( current === 0 || current === TabSlide.length-1 ){
			$( config.Banner.id ).style.top = '-1000000px';
		}
		else{
			$( config.Banner.id ).style.top = '4px';
		}
		wow();
		$( config.SlideCounter.idCurrent ).firstChild.nodeValue = current+1;
		ReScaleSummary();
		if( config.VocalizeTitle.val == 1 )GetTitre();
		// Initialize hidden content array
		SetTabTextSlide( Cprev );
	}
	else{
		// Display hidden content
		TabTextSlide[ Tcurrent ].style.visibility = 'hidden';
		if( config.SoundTxt.val === 1 ) $( config.Stexte.id ).play();
		Tcurrent += 1;
		if( Tcurrent >= TabTextSlide.length ){
			Tcontrol = 0;
			Tcurrent = 0;
			TabTextSlide.length = 0;
		}
	}
}
function GotoSlide(){
	// If not hidden content run or modal open
	if( Tcontrol === 0 || TopenDial === 1 ){
		if( current >= TabSlide.length )current = 0;
		NoSetTabSlide();
		if( TabSlide[ current ]) TabSlide[ current ].style.display = 'block';
		SetAdaptive();	
		// Hide header on first and last slide
		if( current === 0 || current === TabSlide.length-1 ){
			$( config.Banner.id ).style.top = '-100000px';
		}
		else{
			$( config.Banner.id ).style.top = '4px';
		}
		wow();
		$( config.SlideCounter.idCurrent ).firstChild.nodeValue = current+1;
		ReScaleSummary();
		if( config.VocalizeTitle.val === 1 ) GetTitre();
		// Initialize hidden content array
		SetTabTextSlide();
		TopenDial = null;
	}
	else{
		// Display hidden content
		TabTextSlide[ Tcurrent ].style.visibility = 'visible';
		if( config.SoundTxt.val === 1 )$( config.Stexte.id ).play();
		Tcurrent += 1;
		if( Tcurrent >= TabTextSlide.length ){
			Tcontrol = 0;
			Tcurrent = 0;
			TabTextSlide.length = 0;
		}
	}
}
/* Goto slide from index select */
function Fgo(){
	if( parseInt( $( config.TocSelect.id ) .value) > -1 ){
		current = parseInt( $( config.TocSelect.id ).value);
		GotoSlide();
		TopenDial = 1;
	}
	else{
		$( config.TocSelect.id ).focus();
	}
}
/* Goto slide from summary modal */
function FgoToc(){
	var e = this.getAttribute( 'data-slide' );
	current = parseInt( e );
	if( config.SumModOn.val === 1 ) CloseToc();
	if( config.ModePlan.val === 0 ){
		GotoSlide();
	}
	else{
		var Cid = BaseUrl + '#D' + e;
		window.location.href = Cid;
	}
	TopenDial = 1;
}
/* Initiliaze hidden content array */
function SetTabTextSlide( Cprev ){
	var target = TabSlide[ current ].querySelectorAll( '*' );
	var j = 0;
	for( var i = 0, len = target.length; i < len; i++ ){
		if( target[i].classList.contains( config.HiddenContent.classSetting )){
			TabTextSlide[j] = target[i];
			j++;
		}
	}
	if( TabTextSlide.length > 0 ){
		Tcontrol = 1;
			for( var i = 0, len = TabTextSlide.length; i < len; i++ ){
				Cprev === 1 ? TabTextSlide[i].style.visibility = 'visible' : TabTextSlide[i].style.visibility = 'hidden';
			}
		if( Cprev === 1 ) TabTextSlide.reverse();
	}
}
/* Set index select */
function TocP(){
	var Toption = document.createElement( 'OPTION' );
	var Cindex = document.createTextNode( '-' );
	Toption.setAttribute( 'value', '' );
	Toption.appendChild( Cindex );
	document.getElementById( config.TocSelect.id ).appendChild( Toption );
  	for( var i = 0, len = TabSlide.length; i < len ; i++ ){
		var Toption = document.createElement( 'OPTION' );
		var Index = i;
		var Cindex = document.createTextNode( Index + 1 );
		Toption.setAttribute( 'value', Index );
		Toption.appendChild( Cindex );
		document.getElementById( config.TocSelect.id ).appendChild( Toption );
	}
}
/* Set Summary modal */
function Toc(){
	var Txt = {};
	var Target;
	//Set summary title
	var Ctitle = document.createElement( 'H1' );
	Ctitle.setAttribute( 'id', config.Summary.Ctitle );
	Ctitle.appendChild( document.createTextNode( lang.SummaryTitle ) );
	var Cbutton = document.createElement( 'BUTTON' ); 
	Cbutton.setAttribute( 'type', 'button' );
	Cbutton.setAttribute( 'id', config.Bclose.idSummary );
	Ctitle.setAttribute( 'class', config.Ctitle.classSetting );
	Cbutton.className = config.Bclose.classSetting;
	//Icon implementation
	var CspanFallback = document.createElement( 'SPAN' );
	CspanFallback.className = config.IconFallBack.classSetting;
	var CspanIcon = document.createElement( 'SPAN' );
	CspanIcon.className = config.Bclose.iconClass;
	CspanIcon.setAttribute( 'aria-hidden', 'true' );
	var CspanText = document.createElement( 'IMG' );
	CspanText.src = config.Bclose.fallBackSrcImg;
	CspanText.setAttribute( 'alt', lang.Wclose );
	CspanText.className = config.Bclose.fallbackClass;
	CspanFallback.appendChild( CspanIcon );
	CspanFallback.appendChild( CspanText );	
	Cbutton.appendChild( CspanFallback );
	Ctitle.appendChild( Cbutton );
	$( config.Summary.id ).appendChild( Ctitle );
	//Set summary list
	for( var i = 0; i < TabSlide.length; i++ ){
		Target = TabSlide[i].querySelector( 'h2' );
		if( Target ){
			Txt[i] = Target.innerText || Target.textContent;
		}
		else{
			Txt[i] = TabSlide[i].getAttribute( 'aria-label' );
		}
	}
	var Cul = document.createElement( 'OL' );
	for( var i in Txt ){
		var Li = document.createElement( 'LI' );
		var Btn = document.createElement('BUTTON');
		Btn.setAttribute( 'type','button' );
		Btn.setAttribute( 'data-slide', i );
		Btn.addEventListener( 'click', FgoToc, false );
		var Stxt = document.createTextNode( Txt[i] );
		Btn.appendChild( Stxt );
		Li.appendChild( Btn );
		Cul.appendChild( Li );
	}
	$( config.Summary.id ).appendChild( Cul );
}
/* Open summary modal */
function OpenToc(){
	if( config.SumModOn.val === 1 ){
		$( config.Summary.id ).setAttribute( 'role', 'dialog' );
		$( config.Summary.id ).setAttribute( 'aria-labelledby', config.Summary.Ctitle );
	}
	else{
		if( config.ModePlan.val === 0){
			$( config.Wrapper.id ).style.width = '75%';
			$( config.Wrapper.id ).style.fontSize = '80%';
		}
		else{
		$( config.Wrapper.id ).setAttribute( 'class', config.Wrapper.classSettingLeft );
		}
	}
	$( config.Summary.id ).style.display = 'block';
	$( config.Bclose.idSummary ).focus();
	openDial = $( config.Summary.id );
	ReScaleSummary();
}
/* Open config modal */
function OpenConfig(){
	$( config.Setting.id ).style.display = 'block';
	$( config.Bclose.idConfig ).focus();
	openDial = $( config.Setting.id );
}
/* Close modal */
function CloseToc(){
	switch( openDial.getAttribute( 'id' ) ){
		case 'sommaire':
			$( config.Wrapper.id ).removeAttribute( 'style' );
			$( config.Summary.id ).style.display = 'none';
			$( config.Btoc.id ).focus();
		break
		case 'setting':
			$( config.Setting.id ).style.display = 'none';
			$( config.Bconfig.id ).focus();
		break;
	}
	if( config.ModePlan.val === 1 ) $( config.Wrapper.id ).removeAttribute( 'class' );
	openDial = null;
}
/* Rescale summary when first or last slide displaying */
function ReScaleSummary(){
	if( config.ModePlan.val === 0 ){
		if( current > 0 && current + 1 < TabSlide.length ){
			$( config.Summary.id ).style.top = '10%';
			$( config.Summary.id ).style.height = '85%';
		}
		else{
			$( config.Summary.id ).style.top = '0';
			$( config.Summary.id ).style.height = '95%';
		}
	}
	else{
		$( config.Summary.id ).style.top = '0';
		$( config.Summary.id ).setAttribute('class', config.Summary.classSettingFixed );
	}
}
/* Set index slide tag on linear layout mode */
function SetNSlide(){
	for( var i = 0, len = TabSlide.length; i < len; i++ ){
		var Ptag = document.createElement( 'P' );
		var Stag = document.createElement( 'SPAN' );
		var Txt = document.createTextNode( i + 1 + ' / ' + len );
		Stag.appendChild( Txt );
		Ptag.appendChild( Stag );
		Ptag.setAttribute( 'class', config.LinearIndexTag.classSetting );
		TabSlide[i].setAttribute( 'id', 'D' + i );
		TabSlide[i].appendChild( Ptag );
	}
}
/* Manage CSS3 effects */
function wow(){
	var RefEffect = $( config.Screen.id ).getAttribute( 'data-effect' );
	if( config[ RefEffect ].flap ){
		$( config.Flap.id ).classList.add( config[ RefEffect ].classSetting );
	}
	else if ( config[ RefEffect ].slide ){
		TabSlide[ current ].classList.add( config[ RefEffect ].classSetting );	
	}
	TabSlide[ current ].style.opacity = '1';		
}
/** End navigation functions **/
/**
 Begin adaptive functions 
 **/
/* Set adaptive sound and window title update */
function SetAdaptive(){
	if( config.SoundSlide.val === 1 && current != 0 ) $( config.Sdiapo.id ).play();
	if( config.SoundSlide1.val === 1 && current === 0) $( config.Sdiapo1.id ).play();
	if( config.SoundSlideEnd.val === 1 && current === TabSlide.length-1 ) $( config.Sdiapoend.id ).play();
	if( config.UpWindowTitle.val === 1 ) MajTitreW();	
}
/* Set audio compomnents */
function SetSon( file, Sid ){
	var Caudio = document.createElement( 'AUDIO' );
	Caudio.setAttribute( 'id', Sid );
	var Csource1 = document.createElement( 'SOURCE' );
	Csource1.setAttribute( 'src', 'sound/' + file + '.mp3' );
	Csource1.setAttribute( 'type', 'audio/mp3' );
	var Csource2 = document.createElement( 'SOURCE' );
	Csource2.setAttribute( 'src', 'sound/' + file + '.ogg' );
	Csource2.setAttribute( 'type', 'audio/ogg' );
	Caudio.appendChild( Csource1 );
	Caudio.appendChild( Csource2 );
	$( config.Caudio.id ).appendChild( Caudio );
}
/* Include Slide title (or aria-label value) in live region */
function GetTitre(){
	var target = TabSlide[ current ].childNodes;
	$( config.LiveSlideTitle.id ).innerHTML = '';
	if( target[1].tagName === 'H2' ){
		$( config.LiveSlideTitle.id ).innerHTML = target[1].innerHTML;
	} 
	else{
		var Txt = document.createTextNode( TabSlide[ current ].getAttribute( 'aria-label' ) );
		$( config.LiveSlideTitle.id ).appendChild( Txt );
	}
}
/* Update window title */
function MajTitreW(){
	document.title = '';
	var target = TabSlide[ current ].childNodes;
	if( target[1].tagName === 'H2' ){
		var Title = target[1].innerText || target[1].textContent;
	} 
	else{
		var Title = TabSlide[ current ].getAttribute( 'aria-label' );
	}
	document.title = Title + " | " + WTitre;
}
/** End adaptive functions **/
/**
 Begin UI components configuration
**/
/* Configuration managers */
function SetConfig(){
	var TabConfigRef = document.querySelectorAll( '#setting fieldset input, #setting fieldset select' );
	for ( var i = 0, len = TabConfigRef.length; i < len; i++ ){
		var ConfigRef = TabConfigRef[i].getAttribute( 'id' );
		var ValueRef;
		if( TabConfigRef[i].nodeName === 'INPUT' ){
			TabConfigRef[i].checked ? ValueRef = 1 : ValueRef = 0;
			config[ ConfigRef ].val = ValueRef;
		}
		if( TabConfigRef[i].nodeName === 'SELECT' ){
			ValueRef = TabConfigRef[i].value;
		}
		try{
			localStorage.setItem( ConfigRef, ValueRef );
		}
		catch(e){
			createCookie( ConfigRef, ValueRef, 0 );
		}
	}	
}
function ResetConfig(){
	var TabConfigRef = document.querySelectorAll( '#setting fieldset input, #setting fieldset select' );
	for ( var i = 0, len = TabConfigRef.length; i < len; i++){
		var ConfigRef = TabConfigRef[i].getAttribute( 'id' );
		try{
			localStorage.removeItem( ConfigRef );
		}
		catch(e){
			eraseCookie( ConfigRef );
		}
		if( TabConfigRef[i].nodeName === 'INPUT' ){
			if( config[ ConfigRef ].val === 1 ) TabConfigRef[i].setAttribute( 'checked', 'checked' );
		}
		else if( TabConfigRef[i].nodeName === 'SELECT' ){
			TabConfigRef[i].value = config.Eno.val;
		}
	}
}
function GetConfig(){
	// Get base url for reload the linear layout or slideshow mode
	var Url = window.location.href;
	Url.indexOf( '#' ) > 0 ? BaseUrl = BaseUrl=Url.slice( 0, Url.indexOf( '#' ) ) : BaseUrl = Url;
	$( config.FormConfig.id ).setAttribute( 'action', BaseUrl );
	// Set configuration parameters and update default checkbox and select value
	var TabConfigRef = document.querySelectorAll( '#setting fieldset input, #setting fieldset select' );
	for ( var i = 0; i < TabConfigRef.length; i++ ){
		var ConfigRef = TabConfigRef[i].getAttribute( 'id' );
		try{
			var ValueRef = localStorage.getItem( ConfigRef );
		}
		catch(e){
			var ValueRef = readCookie( ConfigRef );
		}
		if( ValueRef ){
			if( TabConfigRef[i].nodeName === 'INPUT' ){
				if( parseInt( ValueRef ) === 1) TabConfigRef[i].setAttribute( 'checked', 'checked' ); 		
				config[ ConfigRef ].val = parseInt( ValueRef );
			}
			else if( TabConfigRef[i].nodeName === 'SELECT' ){
				// update #wrapper data-effect
				$( config.Screen.id ).setAttribute( 'data-effect', ValueRef );
			}
		}
		if( TabConfigRef[i].nodeName === 'INPUT' ){		
			if( config[ ConfigRef ].val > 0 ) TabConfigRef[i].setAttribute( 'checked', 'checked' );
		}
		else if( TabConfigRef[i].nodeName === 'SELECT' ){
			TabConfigRef[i].value = ValueRef;
		}			
	}
}

//END MAJ

/* Configuration window */
function PushConfig(){
	// Set window title and close button
	var Ctitle = document.createElement( 'H1' );
	Ctitle.appendChild(document.createTextNode( lang.ConfigTitle ) );
	Ctitle.setAttribute( 'id', config.Setting.Ctitle );
	Ctitle.setAttribute( 'class', config.Ctitle.classSetting );	
	$( config.Setting.id ).setAttribute( 'aria-labelledby', config.Setting.Ctitle );
	var Cbutton = document.createElement( 'BUTTON' );
	Cbutton.setAttribute( 'type', 'button' );
	Cbutton.setAttribute( 'id', config.Bclose.idConfig );
	Cbutton.className = config.Bclose.classSetting;
	//Icon implementation
	var CspanFallback = document.createElement( 'SPAN' );
	CspanFallback.className = config.IconFallBack.classSetting;
	var CspanIcon = document.createElement( 'SPAN' );
	CspanIcon.className = config.Bclose.iconClass;
	CspanIcon.setAttribute( 'aria-hidden', 'true' );
	var CspanText = document.createElement( 'IMG' );
	CspanText.src = config.Bclose.fallBackSrcImg;
	CspanText.setAttribute( 'alt', lang.Wclose );
	CspanText.className = config.Bclose.fallbackClass;
	CspanFallback.appendChild( CspanIcon );
	CspanFallback.appendChild( CspanText );	
	Cbutton.appendChild( CspanFallback );
	// Set window title and close button
	Ctitle.appendChild(Cbutton);
	$( config.Setting.id ).appendChild(Ctitle);
	// Set the form
	var Cform = document.createElement('FORM');
	Cform.setAttribute( 'id', config.FormConfig.id );
	Cform.setAttribute( 'action', '' );
	// Set components
	// Accessibility
	var Cfieldset1 = document.createElement( 'FIELDSET' );
	var Clegend = document.createElement( 'LEGEND' );
	Clegend.appendChild( document.createTextNode( lang.Gaccess.legend ) );
	Cfieldset1.appendChild( Clegend );
	// Slide
	var Cfieldset2 = document.createElement( 'FIELDSET' );
	var Clegend = document.createElement( 'LEGEND' );
	Clegend.appendChild( document.createTextNode( lang.Gslide.legend ) );
	Cfieldset2.appendChild( Clegend );
	// Effects as a dropdown box
	var Cfieldset3 = document.createElement( 'FIELDSET' );
	var Clegend = document.createElement( 'LEGEND' );
	Clegend.appendChild( document.createTextNode( lang.Geffects.legend ) );
	Cfieldset3.appendChild( Clegend );
	var Cselect=document.createElement( 'SELECT' );
	Cselect.setAttribute( 'id', 'Effects' );
	var Clabel = document.createElement( 'label' );
	Clabel.setAttribute( 'for', 'Effects' );
	Clabel.appendChild( document.createTextNode( lang.LabelEffect ) );
	Cfieldset3.appendChild( Clabel );
	Cfieldset3.appendChild( document.createElement( 'BR' ) );
	Cfieldset3.appendChild( Cselect );
	Cfieldset3.appendChild( document.createElement( 'BR' ) );
	// Set configuration form and help elements
	for ( var param in config){
		switch( config[ param ].group ) {
			case 'Gaccess' :
				var Cinput = document.createElement( 'INPUT' );
				Cinput.setAttribute( 'id', config[ param ].id );
				Cinput.setAttribute( 'aria-describedby', 'help-' + config[ param ].id );
				Cinput.setAttribute( 'type', 'checkbox' );
				Cinput.className = config[ param ].classSetting;				
				var Clabel = document.createElement( 'LABEL' );
				Clabel.setAttribute( 'for', config[ param ].id );
				Clabel.className = config[ param].classLabelSetting;
				var IconSpan = document.createElement( 'SPAN' );
				IconSpan.setAttribute( 'aria-hidden', 'true' );
				IconSpan.className = config[ param ].IconClass;
				Clabel.appendChild( IconSpan );
				Clabel.appendChild( document.createTextNode( lang[ param ].label ) );
				var Cphelp = document.createElement( 'P' );
				Cphelp.setAttribute( 'id', 'help-' + config[ param ].id );
				Cphelp.setAttribute( 'class', config[ param ].classHelpSetting );
				Cphelp.appendChild( document.createTextNode( lang[ param ].help ) );
				// Set the form control
				Cfieldset1.appendChild( Cinput );
				Cfieldset1.appendChild( Cphelp );
				Cfieldset1.appendChild( Clabel );
				Cfieldset1.appendChild( document.createElement( 'BR' ) );
			break;
			case 'Gslide' :
				var Cinput = document.createElement( 'INPUT' );
				Cinput.setAttribute( 'id', config[ param ].id );
				Cinput.setAttribute( 'aria-describedby', 'help-' + config[ param ].id );
				Cinput.setAttribute( 'type', 'checkbox' );
				Cinput.className = config[ param ].classSetting;				
				var Clabel = document.createElement( 'LABEL' );
				Clabel.setAttribute( 'for', config[ param ].id );
				Clabel.className = config[ param].classLabelSetting;
				var IconSpan = document.createElement( 'SPAN' );
				IconSpan.setAttribute( 'aria-hidden', 'true' );
				IconSpan.className = config[ param ].IconClass;
				Clabel.appendChild( IconSpan );
				Clabel.appendChild( document.createTextNode( lang[ param ].label ) );
				var Cphelp = document.createElement( 'P' );
				Cphelp.setAttribute( 'id', 'help-' + config[ param ].id );
				Cphelp.setAttribute( 'class', config[ param ].classHelpSetting );
				Cphelp.appendChild( document.createTextNode( lang[ param ].help ) );
				// Set the form control
				Cfieldset2.appendChild( Cinput );
				Cfieldset2.appendChild( Cphelp );
				Cfieldset2.appendChild( Clabel );
				Cfieldset2.appendChild( document.createElement( 'BR' ) );
			break;
			// Special case : dropdown effects
			case 'Geffects' :
				var Coption = document.createElement( 'OPTION' );
				Coption.setAttribute( 'value', config[ param ].val );
				Coption.appendChild( document.createTextNode( lang[ param ].help ) );
				// Set the form control
				Cselect.appendChild( Coption );
			break;
		}
	}
	// Append components
	Cform.appendChild( Cfieldset1 );
	Cform.appendChild( Cfieldset2 );
	Cform.appendChild( Cfieldset3 );
	// Set controls button
	var Sdiv = document.createElement( 'DIV' );
	Sdiv.setAttribute( 'id', config.ConfigButton.id );	
	Sdiv.setAttribute( 'class', config.ConfigButton.classSetting );	
	var SButton = document.createElement( 'INPUT' );
	SButton.setAttribute( 'id', config.Bsubmit.id );
	SButton.setAttribute( 'class', config.Bsubmit.classSetting );
	SButton.setAttribute( 'type', 'submit' );
	SButton.setAttribute( 'title', lang.Bsubmit.title );
	SButton.setAttribute( 'value', lang.Bsubmit.value );
	Sdiv.appendChild( SButton );
	var SButton = document.createElement( 'INPUT' );
	SButton.setAttribute( 'id', config.Bdefault.id );
	SButton.setAttribute( 'class', config.Bdefault.classSetting );
	SButton.setAttribute( 'type', 'submit' );
	SButton.setAttribute( 'title', lang.Bdefault.title );
	SButton.setAttribute( 'value', lang.Bdefault.value );
	Sdiv.appendChild( SButton );
	Cform.appendChild( Sdiv );
	// Then set in window
	$( config.Setting.id ).appendChild( Cform );
}
/* Set the navbar */
function PushNavBar(){
	var Clist = document.createElement( 'UL' );
	Clist.setAttribute( 'id', config.NavBar.id );
	// Prev button
	var Cli = document.createElement( 'LI' );
	var Cbutton = document.createElement( 'BUTTON' );
	Cbutton.setAttribute( 'type', 'button' );
	Cbutton.setAttribute( 'id', config.Bprev.id );
	Cbutton.setAttribute( 'title', lang.Bprev.title );
	Cbutton.className = config.Bprev.classSetting;
	//Icon implementation
	var CspanFallback = document.createElement( 'SPAN' );
	CspanFallback.className = config.IconFallBack.classSetting;
	var CspanIcon = document.createElement( 'SPAN' );
	CspanIcon.className = config.Bprev.iconClass;
	CspanIcon.setAttribute( 'aria-hidden', 'true' );
	var CspanText = document.createElement( 'IMG' );
	CspanText.src = config.Bprev.fallBackSrcImg;
	CspanText.setAttribute( 'alt', lang.Bprev.title );
	CspanText.className = config.Bprev.fallbackClass;
	CspanFallback.appendChild( CspanIcon );
	CspanFallback.appendChild( CspanText );	
	Cbutton.appendChild( CspanFallback );
	Cli.appendChild( Cbutton );
	Clist.appendChild( Cli );
	// Select + button
	var Cli = document.createElement( 'LI' );
	var Cdiv = document.createElement( 'DIV' );
	Cdiv.setAttribute( 'id', config.SelectWrapper.id );
	Cdiv.className = config.SelectWrapper.classSetting;
	var Cselect = document.createElement( 'SELECT' );
	Cselect.setAttribute( 'id', config.Select.id );
	Cselect.setAttribute( 'title',lang.Select.title );
	Cselect.className = config.Select.classSetting;
	Cdiv.appendChild( Cselect );
	var Cbutton = document.createElement( 'BUTTON' );
	Cbutton.setAttribute( 'type','button' );
	Cbutton.setAttribute( 'id', config.Bselect.id );
	Cbutton.setAttribute( 'title', lang.Bselect.title );
	Cbutton.className = config.Bselect.classSetting;
	//Icon implementation
	var CspanFallback = document.createElement( 'SPAN' );
	CspanFallback.className = config.IconFallBack.classSetting;
	var CspanIcon = document.createElement( 'SPAN' );
	CspanIcon.className = config.Bselect.iconClass;
	CspanIcon.setAttribute( 'aria-hidden', 'true' );
	var CspanText = document.createElement( 'IMG' );
	CspanText.src = config.Bselect.fallBackSrcImg;
	CspanText.setAttribute( 'alt', lang.Bselect.title);
	CspanText.className = config.Bselect.fallbackClass;
	CspanFallback.appendChild( CspanIcon );
	CspanFallback.appendChild( CspanText );	
	Cbutton.appendChild( CspanFallback );
	Cdiv.appendChild( Cbutton );
	Cli.appendChild( Cdiv );
	Clist.appendChild( Cli );
	// Next
	var Cli = document.createElement( 'LI' );
	var Cbutton = document.createElement( 'BUTTON' );
	Cbutton.setAttribute( 'type', 'button' );
	Cbutton.setAttribute( 'id', config.Bnext.id );
	Cbutton.setAttribute( 'title', lang.Bnext.title );
	Cbutton.className = config.Bnext.classSetting;
	//Icon implementation
	var CspanFallback = document.createElement( 'SPAN' );
	CspanFallback.className = config.IconFallBack.classSetting;
	var CspanIcon = document.createElement( 'SPAN' );
	CspanIcon.className = config.Bnext.iconClass;
	CspanIcon.setAttribute( 'aria-hidden', 'true' );
	var CspanText = document.createElement( 'IMG' );
	CspanText.src = config.Bnext.fallBackSrcImg;
	CspanText.setAttribute ( 'alt', lang.Bnext.title);
	CspanText.className = config.Bnext.fallbackClass;
	CspanFallback.appendChild( CspanIcon );
	CspanFallback.appendChild( CspanText );	
	Cbutton.appendChild( CspanFallback );
	Cli.appendChild( Cbutton );
	Clist.appendChild( Cli );
	// Summary
	var Cli = document.createElement( 'LI' );
	var Cbutton = document.createElement( 'BUTTON' );
	Cbutton.setAttribute( 'type', 'button' );
	Cbutton.setAttribute( 'id', config.Btoc.id );
	Cbutton.setAttribute( 'title', lang.Btoc.title );
	Cbutton.className = config.Btoc.classSetting;
	//Icon implementation
	var CspanFallback = document.createElement( 'SPAN' );
	CspanFallback.className = config.IconFallBack.classSetting;
	var CspanIcon = document.createElement( 'SPAN' );
	CspanIcon.className = config.Btoc.iconClass;
	CspanIcon.setAttribute( 'aria-hidden', 'true' );
	var CspanText = document.createElement( 'IMG' );
	CspanText.src = config.Btoc.fallBackSrcImg;
	CspanText.setAttribute( 'alt', lang.Btoc.title );
	CspanText.className = config.Btoc.fallbackClass;
	CspanFallback.appendChild( CspanIcon );
	CspanFallback.appendChild( CspanText );	
	Cbutton.appendChild( CspanFallback );
	Cli.appendChild( Cbutton );
	Clist.appendChild( Cli );
	// Index
	var Cli = document.createElement( 'LI' );
	Cli.setAttribute( 'id', config.SlideCounter.id );
	Cli.className = config.SlideCounter.classSetting;
	var Cdiv = document.createElement( 'DIV' );
	var Cspan = document.createElement( 'SPAN' );
	Cspan.appendChild(document.createTextNode( '1' ));
	Cspan.setAttribute( 'id', config.SlideCounter.idCurrent );
	Cspan.className = config.SlideCounter.currentClass;
	Cdiv.appendChild( Cspan );
	var Cspan = document.createElement( 'SPAN' );
	Cspan.appendChild( document.createTextNode( lang.Ndxon ) );
	Cspan.className = config.SlideCounter.isHiddenClass;
	Cdiv.appendChild( Cspan );
	var Cspan = document.createElement( 'SPAN' );
	Cspan.setAttribute( 'id', config.SlideCounter.idTotal );
	Cspan.appendChild( document.createTextNode( '999' ) );
	Cspan.className = config.SlideCounter.totalClass;
	Cdiv.appendChild( Cspan );
	Cli.appendChild( Cdiv );
	Clist.appendChild( Cli );
	// Configuration
	var Cli = document.createElement( 'LI' );
	var Cbutton = document.createElement( 'BUTTON' );
	Cbutton.setAttribute( 'type', 'button' );
	Cbutton.setAttribute( 'id', config.Bconfig.id );
	Cbutton.setAttribute( 'title', lang.Bconfig.title );
	Cbutton.className = config.Bconfig.classSetting;
	//Icon implementation
	var CspanFallback = document.createElement( 'SPAN' );
	CspanFallback.className = config.IconFallBack.classSetting;
	var CspanIcon = document.createElement( 'SPAN' );
	CspanIcon.className = config.Bconfig.iconClass;
	CspanIcon.setAttribute( 'aria-hidden', 'true' );
	var CspanText = document.createElement( 'IMG' );
	CspanText.src = config.Bconfig.fallBackSrcImg;
	CspanText.setAttribute( 'alt', lang.Bconfig.title);
	CspanText.className = config.Bconfig.fallbackClass;
	CspanFallback.appendChild( CspanIcon );
	CspanFallback.appendChild( CspanText );
	Cbutton.appendChild( CspanFallback );
	Cli.appendChild( Cbutton );
	Clist.appendChild( Cli );
	// Include the navbar
	$( config.WrapperNav.id ).appendChild( Clist );
}
/** End UI components configuration **/
/**
 Begin utilities
**/
/* CSS 3 prefix manager (http://www.sitepoint.com/css3-animation-javascript-event-handlers/) */
function PrefixedEvent( anim, type, callback ) {
	for ( var p = 0; p < pfx.length; p++ ) {
		if ( !pfx[p] ) type = type.toLowerCase();
		anim.addEventListener( pfx[p] + type, callback, false);
	}
}
/* Shortcut to get element by e=id/tagname/classname and ndx=index (for tagname and classname case) */
function $( e, ndx ){
 var x;
 var elm;
 ndx ? x = ndx : x = 0;
 if( document.getElementById(e) ) elm = document.getElementById(e);
 if( document.getElementsByClassName(e)[x] ) elm = document.getElementsByClassName(e)[x];
 if( document.getElementsByTagName(e)[x] ) elm = document.getElementsByTagName(e)[x];
 return elm;
}
/* Get KeyCode */
// TAB:9, ESC:27, Left:37, Up:38, Right:39, Down:40, Spacebar:32, Enter:13
// pageDown:34, pageUp:33 (for remote control), Home:36, End:35
function key( event ){
	var Keyref;
	 var KeycodeTab = [9,13,27,32,33,34,35,36,37,38,39,40,48];
	 if( KeycodeTab.indexOf( event.keyCode ) > -1 ){
		Keyref = event.keyCode;
		if( event.altKey ){
			Keyref = '2' + event.keyCode;
		}
		else if( event.shiftKey ){
			Keyref = '1' + event.keyCode;
		}
	  return Keyref;
	 }
}
/* Cookies */
function createCookie( name, value, days ) {
	if ( days ) {
		var datetime = new Date();
		datetime.setTime( datetime.getTime() + ( days * 24 * 60 * 60 * 1000 ) );
		var expires = "; expires=" + datetime.toGMTString();
	}
	else var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie( name ) {
	var nameEQ = name + "=";
	var ca = document.cookie.split( ';' );
	for(var i = 0; i < ca.length; i++ ) {
		var c = ca[i];
		while ( c.charAt(0) == ' ' ) c = c.substring( 1, c.length );
		if ( c.indexOf( nameEQ ) == 0 ) return c.substring( nameEQ.length, c.length );
	}
	return null;
}
function eraseCookie( name ) {
	createCookie( name , "", -1 );
}
})();

// @license-end
