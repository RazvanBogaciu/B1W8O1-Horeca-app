const fris = 2.00;
const bier = 3.00; 
const wijn = 4.00;
const snack8 = 5.00;
const snack16 = 10.00;
var totaalfris = 0
var totaalbier = 0
var totaalwijn = 0
var totaalsnack8 = 0
var totaalsnack16 = 0
var looping = true 
while (looping == true ) {
var bestelling = prompt("Wat wilt u bestellen ? je kunt kiezen uit: (bier,fris of wijn)") 



if (bestelling == 'bier'  ) {
    totaalbier = prompt ('Hoeveel ' +bestelling+' wilt u toevoegen aan uw bestelling? ')
    }

else if (bestelling == 'fris' ) {
    totaalfris = prompt ('Hoeveel ' +bestelling+' wilt u toevoegen aan uw bestelling? ')
}

else if  (bestelling == 'wijn') {
    totaalwijn = prompt ('Hoeveel ' +bestelling+' wilt u toevoegen aan uw bestelling? ')
}
else if (bestelling == 'snack') {
    var snack = prompt ('Hoeveel bitterballen wilt u toevoegen (8 of 16)?')

    if (snack == 8) {
        totaalsnack8 = prompt ('Hoeveel bitterbalschalen van 8 wilt u bestellen?')
        alert ('U heeft' +' '+ totaalsnack8 + ' ' + 'bitterbalschalen van 8 stuks toegevoegd')
     
    }
    else if(snack == 16) {
        totaalsnack16 = prompt ('Hoeveel bitterbalschalen van 16 wilt u bestellen?')
        alert ('U heeft' +' '+ totaalsnack16 + ' ' + 'bitterbalschalen van 16 stuks toegevoegd')	
       
    }
}
else {
     alert ("an error has occurred")
     }
var stop = prompt ("Zou u nog iets willen bestellen? ja , nee")
         if (stop == "ja") {
        
        }

         else if (stop == "nee") {
        
        var prijsfris = fris * totaalfris
		var prijsbier = bier * totaalbier
        var prijswijn = wijn * totaalwijn
        var prijssnack8 = snack8 * totaalsnack8
        var prijssnack16 = snack16 * totaalsnack16
        
        document.write('<a class="berekening">Bedankt voor het bestellen bij snackbar Barbapapa uw bestelling staat hier op de bon. <br><br>')

		document.write('U heeft ' + totaalfris +  ' fris besteld.' + '<br>')
        document.write(totaalfris +  ' x €2,00 '+ ' = ' + '€' + prijsfris + '<br><br>')
        
		document.write('U heeft ' +  totaalbier +  ' bier besteld.' + '<br>')
        document.write(totaalbier +  ' x €3,00 '+ ' ' + ' = ' + '€' + prijsbier + '<br><br>')		
        
		document.write('U heeft '  + totaalwijn +  ' wijn besteld.' + '<br>')
        document.write(totaalwijn +  ' x €4,00 '+ ' = €' + prijswijn + '<br><br>')
 
        document.write('U heeft ' +  totaalsnack8 + ' van 8 bitterballen besteld.' + '<br>')
        document.write(totaalsnack8 +  'x €5,00 '+ ' = ' + '€' + prijssnack8 + '<br><br>')	
 
		document.write('U heeft ' +  totaalsnack16 + ' van 16 bitterballen besteld.' + '<br>')
        document.write(totaalsnack16 + ' ' + 'x €10,00 '+ '  = ' + '€' + prijssnack16 + '<br><br>')
    
		document.write('totaal prijs = €' + ' ' + (prijsfris + prijsbier + prijswijn + prijssnack8 + prijssnack16)+ '<br><br> </a> ')	


        looping = false 
        }
        
         else {
         alert ("an error has occurred")
        }
     }
 

