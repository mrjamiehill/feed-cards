// Firstly we are listening for a click event on an image
// Use dollar sign to talk to jquery
// ("section img") <- find all html img tags inside section tags

$("a").on("click", function(){
	
	// When the click event is heard we want to show our lightbox div
	$("abstract").slide(350);

	// I want to swap out the image with the default one with whatever on I have just clicked on.

	// create a variable (var) with a label for the image source (imageSrc) and assign a value to it (=) talk to jquery ($) find this actual element that has triggered this onclick event (this) and then find the attribute called src.
	var imageSrc = $(this).attr("src");

	// console.log(imageSrc); 

	// finally we want to add the new image source to the lightbox images src attribute.

	$("div#lightbox img").attr("src", imageSrc);

});//End of on click event