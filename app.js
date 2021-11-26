//When the user hits the button .show() class is toggled 
const dropMenu = () =>{
    document.getElementById("myDropdown").classList.toggle("show");

}

/* 
Here we check to see if an event took place on our dropdown button. If not, we create a variable to contain our
dropdown items via grabbing the dropdown div with class of dropdown-content. the variable dropDowns only contains one
item, so it seems odd to loop over it as if it were an array. Why not just modify dropDowns insted of dropDowns[i]?
Well, dropDowns returns an HTMLCollection [div#myDropdown.dropdown-content, myDropdown: div#myDropdown.dropdown-content], which 
is sort of an array. If we access the firt index of dropDowns i.e. dropDowns[0] we get the actual HTML element <div>...</div>
We look through that array of 1 element, use an if statment to check if the classList has .show, and if so, we remove it.
*/
window.onclick = function(event){
    if(!event.target.matches('.dropbtn')){
        let dropDowns = document.getElementsByClassName("dropdown-content");
        for(let i = 0; i < dropDowns.length; i++){
            let opendDropdowns = dropDowns[i];
            if(opendDropdowns.classList.contains('show')){
                opendDropdowns.classList.remove('show');
            }
        }
    }

}

