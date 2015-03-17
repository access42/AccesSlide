/* This file may contains your javascript features */
function changeColors (newCSS){
  document.getElementById('currentCSS').href = 'css/themes/'+newCSS+('.css');
};


	var n = document.getElementById('wrappernav');
	n.classList.add('is-closed');
	function navi() {
		
		if (window.matchMedia("(max-width:40em)").matches && document.getElementById("toggle-nav")==undefined) {			
			n.insertAdjacentHTML('afterBegin','<button id="toggle-nav" class="toogle-btn"><span class="icon-fallback-text"><span class="icon icon-plus" aria-hidden="true"></span><span class="text">Voir les liens</span></span></button>');

			
			t = document.getElementById('toggle-nav');  
			t.onclick=function(){
				n.classList.toggle('is-closed');
			}
		}
		if (window.matchMedia("(min-width:40em)").matches && document.getElementById("toggle-nav")) {
			document.getElementById("toggle-nav").outerHTML="";
		}
		
	}

	navi();
	window.addEventListener('resize', navi);
