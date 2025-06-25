// Quais ações meu carrinho pode fazer

//CASOS DE USO
// -> adicionar item no carrinho
async function addItem(userCart, item){
    userCart.push(item);
}

// -> deletar item
async function deleteItem(userCart, name){

}

// -> remover um item
async function removeItem(userCart, index){

}

// -> calcular o total do carrinho
async function calculateTotal(userCart){
    return userCart.reduce((total, item) => total + item.subtotal(), 0);
}

export { addItem, calculateTotal, deleteItem, removeItem };