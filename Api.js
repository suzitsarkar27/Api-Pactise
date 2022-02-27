const countryInfro = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
    .then(res => res.json())
    .then(data=> displayData(data))
}

const displayData = recive => {
//    1 lofe diye o kora jay
    //  recive.forEach(event => {
    //     console.log(event.name)
    // });
    // 2 abar slice diye o kora jay 
    const main = document.getElementById('main')
    const fristData = recive.slice(0,10)
    
    fristData.forEach(event => {
        const div = document.createElement('div')
        console.log(event)
        div.style.boxShadow = " 0 7px 30px -10px rgba(150,170,180,0.5";
        div.className=('col-col-md-6 col-lg-4 text-center mb-3 text-danger')
        div.innerHTML = `
        <h3> ${event.name}</h3>
        <h3> ${event.temperament}</h3>
       
        <h3>${event.weight.imperial}</h3>
        <img width='400px'height='250px'src="${event.image.url}">
       
       
        `
        main.appendChild(div)
    });
   
}