const from = document.querySelector("form")

from.addEventListener("submit", (e) => {
    e.preventDefault()
    const weight = parseInt(document.querySelector("#weight").value)
    const height = parseInt(document.querySelector("#height").value) / 100
    const result = document.querySelector("#results")

    if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `<span>Please enter a valid weight ${weight}</spam>`
    } else if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = `<span>Please enter a valid height ${height}</span>`
    } else {
        const bmi = (weight / (height * height)).toFixed(2)
        let status = ""

        if (bmi < 18.5) {
            status = "Underweight"
        } else if (bmi >= 18.5 && bmi < 24.9) {
            status = "Normal weight"
        } else {
            status = "Overweight"
        }

        result.innerHTML = `<span>Your BMI is ${bmi} and you are classified as ${status}</span>`
    }


})