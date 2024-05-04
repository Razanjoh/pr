document.addEventListener("DOMContentLoaded", function() {
    var buyButton1 = document.getElementById("buyNowBtn");
    var buyButton2 = document.getElementById("buyNowBtn2");
    var buyButton3 = document.getElementById("buyNowBtn3");
    var buyButton4 = document.getElementById("buyNowBtn4");
    var buyButton5 = document.getElementById("buyNowBtn5");
    var buyButton6 = document.getElementById("buyNowBtn6");
  
    buyButton1.addEventListener("click", function() {
      alert("تمت إضافة المنتج الأول إلى السلة");
    });
  
    buyButton2.addEventListener("click", function() {
      alert("تمت إضافة المنتج الثاني إلى السلة");
    });
  
    buyButton3.addEventListener("click", function() {
      alert("تمت إضافة المنتج الثالث إلى السلة");
    });
  
    buyButton4.addEventListener("click", function() {
      alert("تمت إضافة المنتج الرابع إلى السلة");
    });
  
    buyButton5.addEventListener("click", function() {
      alert("تمت إضافة المنتج الخامس إلى السلة");
    });
  
    buyButton6.addEventListener("click", function() {
      alert("تمت إضافة المنتج السادس إلى السلة");
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    var buyButton1 = document.getElementById("buyNowBtn");
    var buyButton2 = document.getElementById("buyNowBtn2");
    var buyButton3 = document.getElementById("buyNowBtn3");
    var buyButton4 = document.getElementById("buyNowBtn4");
    var buyButton5 = document.getElementById("buyNowBtn5");
    var buyButton6 = document.getElementById("buyNowBtn6");
  
    var cartCounter = 0;
    var cartCounterElement = document.getElementById("cartCounter");
  
    buyButton1.addEventListener("click", function() {
      alert("تمت إضافة المنتج الأول إلى السلة");
      cartCounter++;
      cartCounterElement.textContent = cartCounter;
    });
  
    buyButton2.addEventListener("click", function() {
      alert("تمت إضافة المنتج الثاني إلى السلة");
      cartCounter++;
      cartCounterElement.textContent = cartCounter;
    });
  
    buyButton3.addEventListener("click", function() {
      alert("تمت إضافة المنتج الثالث إلى السلة");
      cartCounter++;
      cartCounterElement.textContent = cartCounter;
    });
  
    buyButton4.addEventListener("click", function() {
      alert("تمت إضافة المنتج الرابع إلى السلة");
      cartCounter++;
      cartCounterElement.textContent = cartCounter;
    });
  
    buyButton5.addEventListener("click", function() {
      alert("تمت إضافة المنتج الخامس إلى السلة");
      cartCounter++;
      cartCounterElement.textContent = cartCounter;
    });
  
    buyButton6.addEventListener("click", function() {
      alert("تمت إضافة المنتج السادس إلى السلة");
      cartCounter++;
      cartCounterElement.textContent = cartCounter;
    });
  });
 document.getElementById("buyNowBtn").addEventListener("click", function() {
      var product = {
        name: "هودي ابيض-اسود",
        price: 25.00
      };
      
      addToCart(product);
    });

    function addToCart(product) {
      console.log("تمت إضافة المنتج " + product.name + " إلى السلة");
    }  
  