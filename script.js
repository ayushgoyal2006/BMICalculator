const form = document.querySelector('form')

// If we load the value outside the form it takes just after loading the page, Hence the empty values

form.addEventListener('submit' , (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector("#result")
    
    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML = "Please enter a valid height ! "
    }else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML = "Please enter a valid weight ! "
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        result.textContent = `BMI : ${bmi}`;
    }
})