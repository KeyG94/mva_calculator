let output = document.querySelector('#output');
let outputAlcohol = document.querySelector('#output-alcohol');
let product = document.querySelector('#product');
let alcohol = document.querySelector('#alcohol');

product.addEventListener("keyup", function(){

    if(product.value){
        setTimeout(() => {
            findOriginalPrice()
        }, 100)
    } else {
        output.innerHTML = `
        <p>
        Pris uten mva: 
        </p>
        `;
    }
});

alcohol.addEventListener("keyup", function(){
    if(alcohol.value){
        setTimeout(() => {
            findOriginalPriceAlcohol()
        }, 100)
    } else {
        output.innerHTML = `
        <p>
        Pris uten mva: 
        </p>
        `;
    }
})

const findOriginalPrice = () => {
    let productPrice = product.value
    //first: findSum including mva.
    const price = parseFloat(productPrice);
    //Two: find mva is divided by 115
    //sum divide by findMva
    const findMva = price / 115;
    //new sum * 100
    const originalPrice = findMva * 100;
    //output
    output.innerHTML = `
    <p>Pris uten mva: ${originalPrice} NOK
    </p>`;
};   

const findOriginalPriceAlcohol = () => {
    let productPrice = alcohol.value;
    let output = outputAlcohol;
    //first: findSum including mva.
    const price = parseFloat(productPrice);
    //Two: find mva is divided by 125
    //sum divide by findMva
    const findMva = price / 125;
    //new sum * 100
    const originalPrice = findMva * 100;
    //output
    output.innerHTML = `
    <p>Pris uten mva: ${originalPrice} NOK
    </p>`;
};   