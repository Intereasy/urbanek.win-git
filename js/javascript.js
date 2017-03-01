// JavaScript Document
/*window.onscroll = function(){
	var items = [].slice.call(document.querySelectorAll('[data-parallax]'));
	items.forEach(function(element){
		element.style["-webkit-transform"] = "translateY("+(window.pageYOffset/parseInt(element.getAttribute('data-parallax')))+"px)";
	});

}*/
var startRank=true;
function rank(rankPosition5){
	var rank5= document.getElementsByClassName("rank5");
			var i =0;
	function delay(){
		setTimeout(function(){
			var safe = rank5[rankPosition5].innerHTML;
			rank5[0].innerHTML=safe+="<span style='font-size:30px;color:red;'>&#8902;</span>";
			console.log("*");
			i++;
			if (i<5){
				delay();

			}
		},500);
	}
	delay();
}
var target;
function colorMenu(){

	// grab the initial top offset of the navigation
	var sticky_navigation_offset_top = $('.nav_all').offset().top;
	var nav_offset_top_a2 =$("#parallax3").offset().top-50;
	var nav_offset_top_a3 = $("#parallax2").offset().top-50;

	// our function that decides weather the navigation bar should have "fixed" css position or not.
	var sticky_navigation = function(){
		var scroll_top = $(window).scrollTop(); // our current vertical position from the top

		// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
		if (scroll_top > sticky_navigation_offset_top) {
			$('.nav_all').css({ 'position': 'fixed', 'top':'0'});
			$("#nav_a1").css({'color':'yellow'});
			$("#nav_a2").css({'color':'white'});
			$("#nav_a3").css({'color':'white'});
		} else {
			$('.nav_all').css({'position': 'relative'});
		}
		if (scroll_top > nav_offset_top_a2){
			$("#nav_a2").css({'color':'orange'})
			$("#nav_a1").css({'color':'white'});
			$("#nav_a3").css({'color':'white'});
		}
		if (scroll_top > nav_offset_top_a3){

			$("#nav_a2").css({'color':'white'})
			$("#nav_a1").css({'color':'white'});
			$("#nav_a3").css({'color':'#90EE90'});

		}


	};



	// run our function on load
	sticky_navigation();

	// and run it again every time you scroll
	$(window).scroll(function() {
		 sticky_navigation();
	});

}

function myFunctionParallax() {
var offsetTopParallax2 =document.getElementById("parallax2").offsetTop;

	
    if ((document.body.scrollTop > offsetTopParallax2 || document.documentElement.scrollTop > offsetTopParallax2) && startRank==true) {
startRank=false;
		rank(0);
    } else {

    }
}


window.onscroll = function() {myFunctionParallax()};


function main() {
	colorMenu();

	/*window.addEventListener('scroll', function(e) {
		last_known_scroll_position = window.scrollY;
			if (!ticking) {
				window.requestAnimationFrame(function() {
				doSomething(last_known_scroll_position);
				ticking = false;
			});
		}
		ticking = true;
	});
	*/


	console.log('ok main');
		// animateScroll.js
		var navLink1 = document.getElementById("nav_a1");
		navLink1.onclick = function() {
			target=document.getElementById("parallax");
			animateScroll(target, 2000, 'easeInQuart', 10, top);
			console.log('ok');
		}
				var navLink2 = document.getElementById("nav_a2");
		navLink2.onclick = function() {
			target=document.getElementById("parallax3");
			animateScroll(target, 2000, 'easeInQuart', 10, top);
			console.log('ok');
		}
				var navLink3 = document.getElementById("nav_a3");
		navLink3.onclick = function() {
			target=document.getElementById("parallax2");
			animateScroll(target, 2000, 'easeInQuart', 10, top);
			console.log('ok');
		}
	}

window.onload = main;
