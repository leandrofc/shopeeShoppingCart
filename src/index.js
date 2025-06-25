import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to the your Shopee cart!");

const item1 = await createItem("Hotweels ferrari", 20.99, 1);
const item2 = await createItem("Hotweels lamborguini", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myWishList, item2);

console.log("Shopee Cart total is:")
await cartService.calculateTotal(myCart);