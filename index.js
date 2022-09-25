let score = 0;
var htextarea = document.getElementById("h-textarea");
var htextarea_total = parseInt(htextarea.value);
var gtextarea = document.getElementById("g-textarea");
var gtextarea_total = parseInt(htextarea.value);
alert (htextarea_total)
alert(gtextarea_total)

function btn_click()
{
//alert (event.target.id)
alert ('inside main btnclick')
 switch (event.target.id) { 
   case 'h-button1': 
     htextarea_total +=1;
     break;
   case 'h-button2': 
     htextarea_total +=2;
     break;
   case 'h-button3': 
     htextarea_total +=3;
     break;
   case 'g-button1': 
     gtextarea_total +=1;
     break;
   case 'g-button2': 
     gtextarea_total +=2;
     break;
   case 'g-button3': 
     gtextarea_total +=3;
     break;
   case 'reset-button':
     resetgame();
//     gtextarea_value =0;
//     htextarea_value = 0;  
    default:
    break; 
 } 
   
 htextarea.value = htextarea_total.toString();   
 gtextarea.value = gtextarea_total.toString();
 if (htextarea_total > gtextarea_total)
   {
     htextarea.style.color =  'green';
     gtextarea.style.color =  'blue';      
   }
 else
   {
    if (htextarea_total < gtextarea_total ) {  
       gtextarea.style.color =  'green';
       htextarea.style.color =  'blue';  
    }
    else {
        gtextarea.style.color =  'blue';
       htextarea.style.color =  'blue';  
    }   
   }

}

function resetgame() {
    htextarea_total = 0;
    gtextarea_total = 0;
    
    alert (document.getElementById("h-textarea").value)
    alert (document.getElementById("g-textarea").value)
}