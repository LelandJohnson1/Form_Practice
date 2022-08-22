
window.onload=()=> {

let inputs=Array.from(document.getElementsByClassName('inputs'));
let select=document.querySelector('select');
let submit=document.querySelector('input[type=submit]'); 

inputs.forEach( item => {

    item.addEventListener('input',function check_validity() { 

        if (!item.validity.valid) {

            showerror(item,item.nextElementSibling); 
        }

        else if (item.validity.valid) {
            
            item.nextElementSibling.innerHTML='';
            item.style['background-color']='white';
            
        }
    
    });

});

submit.addEventListener('click' , function submit_state (event) {


for (let i=0; i<inputs.length; i++) {

    if (!inputs[i].validity.valid) {

        showerror(inputs[i],inputs[i].nextElementSibling);
        event.preventDefault();

        if (i==inputs.length-1) {return;}
    }

    else if (inputs[3].value !=inputs[4].value) {
        
        event.preventDefault(); 
        inputs[4].style['background-color']='red';
        inputs[4].nextElementSibling.innerHTML='Passwords do not match';
        
    }

    else if (i==inputs.length-1) {alert('hooray!'); return;}

}});


const showerror=(input,span)=> {

    input.style['background-color']='red';
//add invalid classes
    if (input.validity.tooLong) {span.innerHTML=input.validationMessage}

    else if (input.validity.tooShort) {span.innerHTML=input.validationMessage}

    else if (input.validity.typeMismatch) {span.innerHTML=input.validationMessage}

    else if (input.validity.valueMissing) {span.innerHTML=input.validationMessage}

    else if (input.validity.patternMismatch) {span.innerHTML=input.validationMessage}

}};

