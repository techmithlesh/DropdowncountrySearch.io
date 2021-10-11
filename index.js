document.addEventListener('DOMContentLoaded', () => {

    const selectDrop = document.querySelector('#countries');
    // const selectDrop = document.getElementById('countries'); target element using id
fetch('https://restcountries.com/v3.1/all').then(resp => {
    return resp.json();
}).then(data => {
    let output = "";
    data.forEach(country => {
        output += `<option>${country.name.common}</option>`;
    })

selectDrop.innerHTML = output;
}).catch(err => {
    console.log(err);
})

});