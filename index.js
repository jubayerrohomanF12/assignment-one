// 1)

//1) Topic: Online Store Discount Calculator (If-Else Statement)
 
 function calculateDiscountedAmount(totalPurchaseAmount) {
    let discountPercentage = 0;
    let discountedAmount = 0;
  
    if (totalPurchaseAmount >= 50 && totalPurchaseAmount <= 100) {
      discountPercentage = 0.05; // 5% discount
    } else if (totalPurchaseAmount > 100 && totalPurchaseAmount <= 200) {
      discountPercentage = 0.1; // 10% discount
    } else if (totalPurchaseAmount > 200) {
      discountPercentage = 0.15; // 15% discount
    }
  
    if (discountPercentage > 0) {
      discountedAmount = totalPurchaseAmount * discountPercentage;
    }
  
    return {
      discountedAmount: discountedAmount,
      totalAmountWithDiscount: totalPurchaseAmount - discountedAmount,
    };
  }
  
  // Test the function
  const totalPurchaseAmount = 250;
  const result = calculateDiscountedAmount(totalPurchaseAmount);
  
  console.log("Total Purchase Amount: $" + totalPurchaseAmount.toFixed(2));
  console.log("Discounted Amount: $" + result.discountedAmount.toFixed(2));
  console.log("Total Amount + Discount: $" + result.totalAmountWithDiscount.toFixed(2));

  