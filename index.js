let score = 0;
let htextarea = document.getElementById("h-textarea");
let htextarea_value = parseInt(htextarea.value);
let gtextarea = document.getElementById("g-textarea");
let gtextarea_value = parseInt(htextarea.value);
//alert (htextarea_value)

function btn_click()
{
//alert (event.target.id)
 switch (event.target.id) { 
   case 'h-button1': 
     htextarea_value +=1;
     break;
   case 'h-button2': 
     htextarea_value +=2;
     break;
   case 'h-button3': 
     htextarea_value +=3;
     break;
   case 'g-button1': 
     gtextarea_value +=1;
     break;
   case 'g-button2': 
     gtextarea_value +=2;
     break;
   case 'g-button3': 
     gtextarea_value +=3;
     break;
 } 
   
 htextarea.textContent = htextarea_value;   
 gtextarea.textContent = gtextarea_value;
 if (htextarea_value > gtextarea_value)
   {
     htextarea.style.color =  'green';
     gtextarea.style.color =  'blue';      
   }
 else
   {
    if (htextarea_value < gtextarea_value ) {  
       gtextarea.style.color =  'green';
       htextarea.style.color =  'blue';  
    }
    else {
        gtextarea.style.color =  'blue';
       htextarea.style.color =  'blue';  
    }   
   }  
}