# Day_11_HomeWork

start by getting references to specific HTML elements using document.querySelector. calculate refers to a button with the class "calculate", and Result refers to an element with the class "result".

An event listener is added to the "Calculate" button. When the button is clicked, the function inside the event listener is executed.

Inside the function, "Yes Click" is logged to the console. This helps you see that the button click is being recognized.

A new <div> element is created using document.createElement("div").

The class "result" is added to the new <div> using classList.add("result").

The references to input fields (Price, Discount, and total_People) are obtained using document.querySelector.

Values are extracted from these input fields (Price.value, Discount.value, total_People.value) and stored in variables.

A tip amount is calculated based on the price, discount, and total people. This amount is stored in the Actual_Result variable.

The content of the new <div> is set using a template literal. It contains a label "Tip is" and the calculated tip amount.

The new <div> is appended to the element with class "result" using Result.appendChild(new_Div).
