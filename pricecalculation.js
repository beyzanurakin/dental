function getZirconiumPrice() {
  var zirconiumPrice = 0;
  var theForm = document.forms['priceform'];
  var selectedPackages = theForm.elements['selectedPackages'];
}

function calculateTotal() {
  var calculatedPrice = getZirconiumPrice();
  var totalPrice = getElementById('totalPrice');
  totalPrice.style.display = 'block';
  totalPrice.innerHTML = calculatedPrice;
}

function hideTotal() {
  var totalPrice = getElementById('totalPrice');
  totalPrice.style.display = 'none';
}
