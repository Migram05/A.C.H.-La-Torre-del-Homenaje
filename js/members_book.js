var front = document.querySelector('.face-front');
var back = document.querySelector('.face-back');
var flip = document.querySelector('.book-content');
var pages = document.querySelectorAll('.page');
var cover = document.querySelectorAll('#portada');

var contZindex = 2;
var customZindex = 1;

for (var i = 0; i < pages.length; i++) {
	pages[i].style.zIndex = customZindex;
	customZindex--;

	pages[i].addEventListener('click', function(e){

		var tgt = e.target;
		var unoThis = this;

		unoThis.style.zIndex = contZindex;
		contZindex++;

		if (tgt.getAttribute('class') == 'face-front') {
			unoThis.style.zIndex = contZindex;
			contZindex +=20;
			setTimeout(function(){
				unoThis.style.transform = 'rotateY(-180deg)';
			}, 50);
		}
		if (tgt.getAttribute("class") == 'face-back') {
			unoThis.style.zIndex = contZindex;
			contZindex +=20;

			setTimeout(function(){
				unoThis.style.transform = 'rotateY(0deg)';
			}, 50);
		}

		/*if (tgt.getAttribute('id') == 'portada') {
			flip.classList.remove("trnsf-reset");
			flip.classList.add("trnsf");
		}
		else if (tgt.getAttribute('id') == 'trsf') {
			flip.classList.remove("trnsf");
			flip.classList.add("trnsf-reset");
		}
		else if (tgt.getAttribute('id') == 'trsfInv') {
			flip.classList.remove("trnsf");
			flip.classList.add("trnsf-inv");
		}
		else if (tgt.getAttribute('id') == 'portada-back') {
			flip.classList.add("trnsf");
			flip.classList.remove("trnsf-inv");
		}*/
	});
}

