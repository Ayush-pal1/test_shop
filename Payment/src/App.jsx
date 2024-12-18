import  { useRazorpay, RazorpayOrderOptions }from "react-razorpay";
const App=()=>{
  const {Razorpay} = useRazorpay();

   const paynow= async()=>{
    const response= await fetch('http://localhost:8080/order')
    const data=await response.json()

    const options ={
      amount:data.amount,
      order_id:data.order_Id,
      key: "rzp_test_g9ZEaeaH7eJahx", 
      currency: "INR",
      name: "Ecommerce",
      description: "React cousre",
      image: "https://img.freepik.com/free-vector/letter-t-colorful-gradient-logo-design_474888-2228.jpg?t=st=1731881660~exp=1731885260~hmac=433e0f1f8de8a035770138f296084d3f130f7af7fe70e16d84586664ceef06b1&w=900", 
    
    handler: function (response) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    prefill: {
      name: "Ravi kumar",
      email: "youremail@example.com",
      contact: "9682683582",
    }
    
    };
    const razor= new Razorpay(options)
    razor.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    razor.open()
  
}
   return (
    <div>
      <h1>Mera Payment bhai</h1>
      <button onClick={paynow}>Click me</button>
    </div>
   )
  }
export default App