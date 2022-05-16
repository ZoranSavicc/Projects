let AllTotal = 0

function addToCart(element){
    let mainEl = element.closest('.single-item');
    let price = mainEl.querySelector('.price').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let quantity = mainEl.querySelector('input').value;
    let cartItems = document.querySelector('.cart-items');

    if(parseInt(quantity) > 0){
        price = parseInt(price.substring(1));
        let total = price*parseInt(quantity);
        AllTotal += total;

        cartItems.innerHTML += `<div class="cart-single-item">
                                 <h3>${name}</h3>
                                 <p>${price} x ${quantity} = $<span>${total}</span></p>
                                 <button onclick="removeFromCart(this)" class="remove-item">Remove</button>
                              </div>`;

        document.querySelector('.total').innerText = `Total: ${AllTotal}`;

        element.innerHTML = 'Added';
        element.setAttribute('disabled','true');
    }
    else{
        alert('Must be greater than 0');
    }
}

function removeFromCart(element){
    let mainEl = element.closest('.cart-single-item');
    let price = mainEl.querySelector('p span').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let vegetables = document.querySelectorAll('.single-item')

    AllTotal -= parseInt(price);

    document.querySelector('.total').innerText = `Total: ${AllTotal}`;

    mainEl.remove();

    vegetables.forEach(function(vege){
        if(vege.querySelector('.si-content h3').innerText === name){
            vege.querySelector('.actions input').value = 0;
            vege.querySelector('.actions button').removeAttribute('disabled');
            vege.querySelector('.actions button').innerHTML = 'Add';
        }
    })
}