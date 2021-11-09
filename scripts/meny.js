$(document).ready(generateMenu);

function generateMenu() {
 //Hitta rätt div och skapa en UL
var nyUl = document.createElement('ul'); //Skapa UL 
var receptDiv = $('#receptmeny').find('div');//Spara rätt div i en variabel
receptDiv.append(nyUl); //Lägg till Ul i div
var receptUL = receptDiv.find('ul'); //Skapa en variabel av den nya UL för att lägga in recepten

//Loopa genom h4 för att ge dem id 
//Li skall ha <a> med lika attr href="#menyVal[i]" och id="menyVal[i]".

$('.post').find('h4').each(function(index) {
    $(this).attr('id', 'menyVal' + (index + 1)) //Loopa igenom array av h4 och ge dem id baserat på deras index
    var menyRubrik = $(this).html(); //Sätt en var som håller aktuell h4's html innehåll
    receptUL.append('<li><a href=' + '#menyVal' + (index + 1) +'>' + menyRubrik + '</a></li>'); //Lägg till ID och text som li element i UL baserat på aktuell index.
});



//Lägg till div med checkbox och spantext före receptmeny.
var checkDiv = document.createElement('div');
checkDiv.innerHTML = '<input id="checkruta" type="checkbox"><span> Aktivera scrollanimering</span>'
$("#receptmeny").before(checkDiv);

//Lägg till jquery ui med scripttag för att använda dess easingmetoder
var nyScript = document.createElement('script');
nyScript.type = 'text/javascript';
nyScript.src = 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js';
$('head').append(nyScript);
//Sätt default animeringsattribut till easeOutCubic
jQuery.easing.def = 'easeOutCubic';

//Funktion för att se om kryssrutan ovan är markerad eller ej
    var $document = $('html, body');
    $("#checkruta").on('change', function() {
        if(this.checked) {
            //Om checkboxen är markerad så är animationen för dokumentet aktiv
            $('a[href^="#"]').click(function () {
                $document.animate({
                    scrollTop: $( $.attr(this, 'href') ).offset().top //Scrollas vertikalt, ner till target från toppen
                }, 2000); //Animeringen tar 2s innan den är framme
                return false;
            });
            //Är den ej ikryssad tas alla eventlisteners bort från länkar
        } else {
            $('a[href^="#"]').off();
        }
    })
}
