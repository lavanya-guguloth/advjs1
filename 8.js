if (true) {
  let x = 10;
  var y = 20;
}
console.log(y); // ✅ 20
console.log(x); 
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile.user?.details?.email);  // "test@mail.com"
console.log(profile.user?.details?.phone);  
const data = {
  product: {
    name: "Laptop"
    // No specs object here
  }
};


console.log(data.product?.specs?.ram); 