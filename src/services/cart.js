// Quais ações meu carrinho pode fazer

//CASOS DE USO
// -> adicionar item no carrinho
async function addItem(userCart, item){
    userCart.push(item);
}

// -> deletar item
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

// -> remover um item
async function removeItem(userCart, index){

}

// -> calcular o total do carrinho
async function calculateTotal(userCart){
    const result = userCart.reduce((total, item) => total + item.subTotal(), 0);

    console.log(result);
}

export { addItem, calculateTotal, deleteItem, removeItem };