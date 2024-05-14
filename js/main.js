// variables declaration
var allProuducts = document.querySelectorAll(".products .add-to-bag");
var ShoppingBag = document.querySelector(".total-price");
var totalPrice = 0;
var checkOut = document.getElementById("check-out");
var x = 0;

// Logic
allProuducts.forEach(function (item) {
    item.onclick = function() {
        x = +(item.getAttribute("price"));
        ShoppingBag.innerHTML += (item.getAttribute("text"))+ " " + x + "LE" + "<br/>";
        totalPrice += x;
        }
    }
    
)
// Event
checkOut.onclick = function (){
    ShoppingBag.innerHTML = totalPrice + "LE";
}
