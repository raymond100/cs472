function calcTip() {
    const subtotalElem = document.querySelector('#subtotal');
    const tipElem = document.querySelector('#tip')
    const totalElem = document.getElementById('total');
    const subtotal = parseFloat(subtotalElem.value);
    const tip = parseFloat(tipElem.value);
    let total = 0;

    if (subtotal == null || subtotal == "" || subtotal < 0 || tip < 0) {
        totalElem.innerHTML = 'Seriously!!!'
    } else {
        total = subtotal + (subtotal * tip / 100);
        totalElem.innerHTML = total ? '$' + total : 'Please enter numerical value.';
    }

    if (total > 0) {
        console.log(total);
        totalElem.style.color = 'green';
    } else {
        totalElem.style.color = 'red';
    }
}