// 1.

var num1=3
var num2=5
var result=num1+num2

document.write("<h3>Sum Of ",num1," and ",num2," is ",result)

var num1=3
var num2=5
var result=num1-num2

document.write("<h3>Substract Of ",num1," and ",num2," is ",result)

var num1=3
var num2=5
var result=num1*num2

document.write("<h3>Multiply Of ",num1," and ",num2," is ",result)

var num1=3
var num2=5
var result=num1/num2

document.write("<h3>Division Of ",num1," and ",num2," is ",result)

var num1=3
var num2=5
var result=num1%num2

document.write("<h3>Modulus Of ",num1," and ",num2," is ",result)

// 2.

var var1
var var2=5
document.write("<h3>Value after variable declaration is: ",var1)
document.write("<h3>Initial Value: ",var2)
var var2incr=++var2
document.write("<h3>Value after increment is: ",var2incr)
var var2incr=var2+7

document.write("<h3>Value after addition is: ",var2incr)
var var2incr=var2incr-1
document.write("<h3>Value after decrement is: ",var2incr)

var var2incr=var2incr%6
document.write("<h3>The remindar is: ",var2incr)

var ticketPrice=600
var persons=5
var bill=ticketPrice*persons

document.write("<h3>Total cost to buy ",persons," tickets to a movie is: ",bill,"PKR")

var table=4
document.write("<h1> Table of 4")
document.write('<h2>',table,' X ',1,' = ',table*1)
document.write('<h2>',table,' X ',2,' = ',table*2)
document.write('<h2>',table,' X ',3,' = ',table*3)
document.write('<h2>',table,' X ',4,' = ',table*4)
document.write('<h2>',table,' X ',5,' = ',table*5)
document.write('<h2>',table,' X ',6,' = ',table*6)
document.write('<h2>',table,' X ',7,' = ',table*7)
document.write('<h2>',table,' X ',8,' = ',table*8)
document.write('<h2>',table,' X ',9,' = ',table*9)
document.write('<h2>',table,' X ',10,' = ',table*10)



document.write("<h1>Shopping Cart</h1><br>")
var price_item1=650
var price_item2=100
var qty_item1=3
var qty_item2=7
var shippingCharges=100
var item1=price_item1*qty_item1
var item2=price_item2*qty_item2

document.write("Price of Item 1 is ",price_item1,"<br>")
document.write("Quantity of Item 1 is ",qty_item1,"<br>")
document.write("Price of Item 2 is ",price_item2,"<br>")
document.write("Quantity of Item 2 is ",qty_item2,"<br>")
document.write("Shipping charges ",shippingCharges,"<br>")
document.write("Total cost of your order is ",item1+item2+shippingCharges)


document.write("<h1>Marks Sheet</h1><br>")
var totalMarks=980
var obtainedMarks=804
var percentage=obtainedMarks/totalMarks*100
document.write("Total Marks: ",totalMarks,"<br>")
document.write("Marks Obtained: ",obtainedMarks,"<br>")

document.write("Percentage: ",percentage,"%")