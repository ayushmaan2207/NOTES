
// Sample products data
const products = [
    { id: "b1", name: "Omelette", price: 40 },
    { id: "b2", name: "Aloo Paratha", price: 30 },
    { id: "b3", name: "Vegetable Sandwich", price: 50 },
    { id: "b4", name: "Aloo Poori", price: 50 },
    { id: "b5", name: "Boiled Eggs", price: 40 },
    { id: "b6", name: "Panner Paratha", price: 40 },
    { id: "b7", name: "Mushroom Sandwich", price: 60 },
    { id: "b8", name: "Choole Bhature", price: 50 },
    
];

let cartItems = [];

//update cart
function updateCart() {
    const cartItemDiv = document.getElementById("cartitem");
    const totalElement = document.getElementById("total");

    // Clear previous cart items
    cartItemDiv.innerHTML = "";

    if (cartItems.length === 0) {
        cartItemDiv.textContent = "Your cart is empty";
        totalElement.textContent = "₹ 0";
    } else {
        let total = 0;

        cartItems.forEach((item, index) => {
            const cartItem = document.createElement("div");

            const removeButton = document.createElement("button");
            removeButton.textContent = "-";
            removeButton.addEventListener("click", () => removeCartItem(index));
            cartItem.appendChild(removeButton);

            const itemName = document.createElement("span");
            itemName.textContent = item.name;
            cartItem.appendChild(itemName);

            const itemPrice = document.createElement("div");
            itemPrice.textContent = `₹ ${item.price}`;
            cartItem.appendChild(itemPrice);

            cartItemDiv.appendChild(cartItem);

            total += item.price;
        });

        totalElement.textContent = `₹ ${total}`;
    }
}

//add a product to cart
function addToCart(productId) {
    const product = products.find((product) => product.id === productId);
    if (product) {
        cartItems.push(product);
        updateCart();
    }
}

//remove a cart item
function removeCartItem(index) {
    cartItems.splice(index, 1);

    // counter
    const ele = document.getElementById('cartb');
    cartb.innerText = cartItems.length;
    ele.style.background = "rgba(73, 73, 73, 0.379)";
    updateCart();
}

// Add event listeners to "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".button");

addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const productId = button.id;
        addToCart(productId);

        // counter
        const ele = document.getElementById('cartb');
        cartb.innerText = cartItems.length;
        ele.style.background = "rgba(73, 73, 73, 0.379)";
    });
});


//   cart pop up
const kart = document.querySelector(".kart");
const navmenu = document.querySelector(".nav-menu");
kart.addEventListener("click", () => {
    kart.classList.toggle("active");
    navmenu.classList.toggle("active");
})