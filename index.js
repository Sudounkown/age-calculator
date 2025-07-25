const form = document.getElementById('main-form')
const date = document.getElementById('date')
const display = document.getElementById('displaydiv')






form.addEventListener('submit', (e) => {
    e.preventDefault()
 
    const dob = date.value
    console.log(dob)
 
    const age = Math.floor((Date.now() - new Date(dob)) / (1000 * 60 * 60 * 24));

    const ageInYears = Math.floor(age/365)


    if (ageInYears <= 0){

        display.innerHTML = `<h2>You under 1 year old</h2>`
    } else if (ageInYears >= 1 ){

        display.innerHTML = `<h2>You are ${ageInYears} year(s) old<h2>`
    }

})