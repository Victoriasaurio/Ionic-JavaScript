const productName = document.querySelector('#product-name');
const productPrice = document.querySelector('#product-price');
const btnSave = document.querySelector('#btn-save');
const btnReset = document.querySelector('#btn-reset');

//ION-LIST
const product = document.querySelector('#product');

/**Function that create a new card of to product */
const createProduct = (name, price) => {
    const card = document.createElement('ion-card');
    const productItem = document.createElement('ion-card-content');
    productItem.textContent = name + ' --> $' + price; //Agrega el texto a la targeta
    card.appendChild(productItem); //Agrega 'card-content' a 'card'
    product.appendChild(card); //'card' es agregado a 'ion-list'
}

/**Alerts */
const presentAlert = () => {
    //Creación del elemento alert || Despliega ventana-alert
    const alert = document.createElement('ion-alert');
    alert.header = 'Invalid data';
    alert.subHeader = 'Please verify your inputs';
    alert.message = 'Incorrect name or price';
    alert.buttons = ['OK'];

    document.body.appendChild(alert); //Se agrega el elemento al HTML
    return alert.present(); //Llama a su método para que la alerta aparezca
}

/**Function --> Recibe un string y valida los espacios */
const isEmpty = str => !str.trim().length; //Diferente de vacío

/**Clean the inputs */
const clearInputs = () => {
    productName.value = '';
    productPrice.value = '';
}

/**Saves a new product */
btnSave.addEventListener('click', e => {
    e.preventDefault();

    const name = productName.value;
    const price = productPrice.value;

    //Verifica los campos vacíos
    if (isEmpty(name) || price <= 0 || isEmpty(price)) {
        presentAlert();
        return;
    }

    createProduct(name, price);
    clearInputs();
});

/**Reset inputs */
btnReset.addEventListener('click', clearInputs);