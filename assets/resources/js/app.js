var $j = jQuery.noConflict();

/**
* Text effect
*/
$j('.text').typed({
    strings: ["a Curiosity.", "an Adaptability.", "a Software Engineer.", "Fernando."],
    typeSpeed: 25,
    callback: function(){
        initShowText();
    }
});

function initShowText(){
    $j('.hero-text').addClass('show-text');
}
