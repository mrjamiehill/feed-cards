$("button#firstrelevant").on("click", function() {
	$("section#first").addClass('animated bounceOutLeft');;
});
$("button#secondrelevant").on("click", function() {
	$("section#second").addClass('animated bounceOutLeft');
});
$("button#thirdrelevant").on("click", function() {
	$("section#third").addClass('animated bounceOutLeft');
});

$("button#fourthrelevant").on("click", function() {
	$("section#fourth").addClass('animated bounceOutLeft');
});

$("button#fifthrelevant").on("click", function() {
	$("section#fifth").addClass('animated bounceOutLeft');
});


$("button#fifthnotuseful").on("click", function() {
	$("section#fifth").addClass('animated bounceOutRight');
});



$("button#fourthnotuseful").on("click", function() {
	$("section#fourth").addClass('animated bounceOutRight');
});

$("button#thirdnotuseful").on("click", function() {
	$("section#third").addClass('animated bounceOutRight');
});

$("button#secondnotuseful").on("click", function() {
	$("section#second").addClass('animated bounceOutRight');
});
$("button#firstnotuseful").on("click", function() {
	$("section#first").addClass('animated bounceOutRight');
});

