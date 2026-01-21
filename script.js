const searchBAR = document.getElementByID('searchBAR');
searchBAR.addEventListener('keyup', e =>{
    let currentValue = e.target.value.toLowerCase();
    console.log(currentValue);
})
