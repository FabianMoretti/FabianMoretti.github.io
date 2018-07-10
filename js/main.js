var audio;

//hide pause button

document.getElementById('pause').style.display = 'none';

//initialize
var initialize = (function(){
	var i = 0;
	return function(tumbler){
		if ( tumbler == 'next') {
			return ++i;
		}
		if ( tumbler == 'prev')
		return --i;
	}
 }());

initAudio(0);

//initializer function

function initAudio(index) {
	var a = document.querySelectorAll('ul > li');
	var element = a[index];
	var song = element.innerHTML;
	//create audio object
	audio = new Audio('media/' + song);
	for (var i = 0; i < a.length; i++) {
		a[i].classList.add("active");
		a[i].classList.remove("active");
	}
	element.classList.add("active");
}

//play button
    var play = document.getElementById('play');
 	play.onclick =function(){
 	audio.play();
 	play.style.display = 'none';
 	pause.style.display = 'block';
 };

//pause button
    var pause = document.getElementById('pause');
 	pause.onclick = function(){
 	audio.pause();
 	play.style.display = 'block';
 	pause.style.display = 'none';
 };

//Next Button
	var next = document.getElementById('next');
	next.onclick = function(){
    audio.pause();
    var next = initialize('next');
    play.style.display = 'none';
 	pause.style.display = 'block';
    initAudio(next);
 	audio.play();
};

//Prev Button
	var prev = document.getElementById('prev');
	prev.onclick = function(){
    audio.pause();
	var prev = initialize('prev');
    play.style.display = 'none';
 	pause.style.display = 'block';
    initAudio(prev);
 	audio.play();
};

//Volume Control
	var volume = document.getElementById('volume');
	volume.onchange = function(){
	audio.volume = parseFloat(this.value / 10);
};
