var slideIndex = 1; var tax; var noTax; var m = 0;
function start() {
	showDivs(slideIndex);
	noTax = document.getElementById("noTaxes");
	tax = document.getElementById("taxes");
}
function currentDiv(n) { showDivs(slideIndex = n); }
function showDivs(n) {
   	var x = document.getElementsByClassName("carousel");
	var dots = document.getElementsByClassName("btn");
	for (var i = 0; i < x.length; i++) { x[i].style.display = "none"; }
    for (i = 0; i < dots.length; i++) { dots[i].className = dots[i].className.replace(" text-decoration-underline", ""); }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " text-decoration-underline";
}
function calc(n) {
	m += n;
	noTax.innerHTML = "Estimate Min Total: $" +m;
	tax.innerHTML = "Estimate Min Total +Tax: $" +(m+(m*0.13));
}
window.addEventListener("load", start, false);