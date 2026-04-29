// 3.	E-commerce Discount Engine

// Create logic to calculate the final order amount. Apply discounts based on price range, 
// apply extra coupon discount if provided, and decide whether delivery is free or charged. 
// Output total discount, delivery charge, and final payable amount.

// Topics to use: If-else or switch, operators, functions, variables, control flow.



function getSlabDiscount(amount) {
  if (amount >= 5000) return { pct: 20, label: "Premium (₹5000+)" };
  if (amount >= 2000) return { pct: 15, label: "Standard (₹2000+)" };
  if (amount >= 1000) return { pct: 10, label: "Basic (₹1000+)" };
  if (amount >= 500)  return { pct: 5,  label: "Starter (₹500+)" };
  return { pct: 0, label: "No discount" };
}


const COUPONS = { SAVE10: 10, MEGA20: 20, FLAT50: 50 };

function getCouponDiscount(code, priceAfterSlab) {
  const upper = code.trim().toUpperCase();
  if (!upper) return { amount: 0, valid: null };             
  if (COUPONS[upper]) {
    return { amount: (COUPONS[upper] / 100) * priceAfterSlab, valid: true };
  }
  return { amount: 0, valid: false };                       
}


function getDelivery(finalAmount) {
  if (finalAmount >= 999) return 0;   
  if (finalAmount >= 500) return 49;
  return 99;
}


function calculateOrder(orderAmount, couponCode = "") {
  
  const slab = getSlabDiscount(orderAmount);
  const slabDiscount = (slab.pct / 100) * orderAmount;
  const afterSlab = orderAmount - slabDiscount;

  
  const coupon = getCouponDiscount(couponCode, afterSlab);
  const afterCoupon = afterSlab - coupon.amount;

  
  const delivery = getDelivery(afterCoupon);

  
  const totalDiscount = slabDiscount + coupon.amount;
  const finalPayable = afterCoupon + delivery;

  return {
    originalPrice:  orderAmount,
    slabDiscount:   slabDiscount,
    couponDiscount: coupon.amount,
    totalDiscount:  totalDiscount,
    deliveryCharge: delivery,
    finalPayable:   finalPayable,
    couponValid:    coupon.valid,
    slabLabel:      slab.label
  };
}


const result = calculateOrder(2250, "SAVE10");
console.log("Total Discount  :", "₹" + result.totalDiscount);
console.log("Delivery Charge :", result.deliveryCharge === 0 ? "Free" : "₹" + result.deliveryCharge);
console.log("Final Payable   :", "₹" + result.finalPayable);