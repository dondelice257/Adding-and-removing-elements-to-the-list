const list = document.querySelector("ol"); 
const input = document.querySelector("input"); 
const button = document.querySelector("button");234
function action() { 
  if(input.value != ""){ 
    const newEl = document.createElement("li"); 
    newEl.innerHTML=input.value; 
    list.appendChild(newEl); 
    const newi = document.createElement("span"); 
    newi.innerHTML="x" newEl.appendChild(newi); 
    const close = document.querySelectorAll("span"); 
    for(let i=0; i<close.length; i++){ 
      close[i].addEventListener("click", function(){ 
        close[i].parentElement.style.opacity="0" 
        setTimeout(function () { 
          close[i].parentElement.style.display="none" 
        }
                  ) 
      }
                               ) 
    } 
  } 
} 
button.addEventListener("click", action)
