// node: id dir name bule hole null error dekaibe

// 1 button event handler set 
// 2 get input value
const serchButton=()=>{
    const inputValue = document.getElementById('input-value')
    const error=document.getElementById('error')
    const inputValueText = parseFloat(inputValue.value);
    
    //  error handelung not a string or emptey sting 
    if (isNaN(inputValueText) || inputValueText=='') {
        error.innerText = "Pleasse Type a Valid Number"
        inputValue.value = '';  
    }
    else if (inputValueText <= 0) {
        error.innerText = "Pleasse Type a Valid Number"
        inputValue.value = '';  
    } 
        if (inputValueText>52) {
            error.innerText = "Pleasse Type agin not pouend of number"
            inputValue.value = ''; 

        } else {
            fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValueText}`)
        .then(res => res.json())
        .then(data => cartDisplay(data))
          inputValue.value = '';
        }
   
    
}
const cartDisplay = (cards) => {
    console.log(cards)
 
}