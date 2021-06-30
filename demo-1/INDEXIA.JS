let price = document.getElementById("price");
let usd = document.getElementById("usd");
let ngn = document.getElementById("ngn");


price.addEventListener('input', ()=>{
    ngn.value = usd.value * price.value;
    usd.value = ngn.value / price.value;
})

usd.addEventListener('input', () => {
    ngn.value = usd.value * price.value;
});
ngn.addEventListener('input', () => {
    usd.value = ngn.value / price.value;
})
