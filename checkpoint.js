var item_list = document.getElementsByClassName("cart-list-item");
var cart_total_price = document.getElementById("cart-total-price");

//INIT
updateTotalPrice(item_list);

//ITEM LIST
for (var i = 0; i < item_list.length; i++) {
  var element = item_list[i];
  element.addEventListener("click", function (e) {
    //PARENT OF THE EVENT TARGET (ITEM)
    var parent = e.target.parentElement.parentElement;
    if (e.target.id === "plus") {
      //INCREMENT ITEM QUANTITY
      var item_quantity = parent.getElementsByClassName("quantity")[0];
      item_quantity.innerHTML++;
    } else if (e.target.id === "minus") {
      //DECREMENT ITEM QUANTITY
      var item_quantity = parent.getElementsByClassName("quantity")[0];
      item_quantity.innerHTML--;
      if (item_quantity.innerHTML < 1) item_quantity.innerHTML = 1;
    } else if (e.target.id === "cross") {
      //REMOVE ITEM
      parent.remove();
    } else if (e.target.id === "like") {
      //LIKE ITEM
      e.target.classList.toggle("active");
    }
    updateTotalPrice(item_list);
  });
}

function updateTotalPrice(list) {
  var cart_total = 0;
  console.log(list);
  for (var i = 0; i < list.length; i++) {
    var total = 0;
    var item_total = list[i].getElementsByClassName("item-price-total")[0];
    var item_price = list[i].getElementsByClassName("item-price")[0];
    var item_qte = list[i].getElementsByClassName("quantity")[0];
    if (item_total != undefined) {
      total = item_price.innerHTML * item_qte.innerHTML;
      item_total.innerHTML = total;
      cart_total += total;
    }
  }
  cart_total_price.innerHTML = cart_total;
}
