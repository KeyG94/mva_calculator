let output = document.querySelector('#output');
let product = document.querySelector('#product');

product.addEventListener("keyup", function(){

    if(product.value){
        setTimeout(() => {
            findOriginalPrice()
        }, 500)
    } else {
        output.innerHTML = `
        <p>
        Tast in prisen på produktet du ønsker å finne pris uten moms i feltet over.
        </p>
        `;
    }
});

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