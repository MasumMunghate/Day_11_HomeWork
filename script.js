const calculate = document.querySelector(".calculate");
const Result = document.querySelector(".result");

calculate.addEventListener("click" , function(){
  console.log("Yes Click");
  const new_Div = document.createElement("div")
  new_Div.classList.add("result")
 
  console.log(new_Div);
  const Price = document.querySelector(".Price");
  const Discount = document.querySelector("#Discount");
  const total_People = document.querySelector(".total_People");
  
  let price_Value = Price.value;
  let Discount_Value = Discount.value;
  let total_People_Value = total_People.value;
  console.log(price_Value , Discount_Value , total_People_Value)
  
  let Second_Result_Value = (price_Value/100)*Discount_Value;
   let Actual_Result  =  Math.floor(Second_Result_Value/total_People_Value);
  console.log(Actual_Result)
  
   new_Div.innerHTML = `
     <lable>Tip is </lable>
      <p>${Actual_Result}</p>
  `
    Result.appendChild(new_Div);
})