$("#slideshow > img:gt(0)").hide();
setInterval(function() {
 $('#slideshow > img:first')
 .fadeOut(1000)
 .next()
 .fadeIn(1000)
 .end()
 .appendTo('#slideshow');
}, 3000);


$(document).ready(function() {
$(".faq").hide();
$(".faqh3").click(function()
{
$(this).next(".faq").slideToggle(500);
});
});


$(document).ready(function() {
$(".fancybox").fancybox();
});


