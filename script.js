const searchBAR = document.getElementById('searchBAR');
searchBAR.addEventListener('keyup', e =>{
    let currentValue = e.target.value.toLowerCase();
    let resources = document.querySelectorAll('h1.display-5');
    resources.forEach(resource => {
        if (resource.textContent.toLowerCase().includes(currentValue)) {
            resource.parentNode.parentNode.parentNode.style.display = 'block'; 

        } else {
            resource.parentNode.parentNode.parentNode.style.display = 'none';
        }
    });
});
