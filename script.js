/// here we have to catch all the data which we have Entered
let form=document.getElementById("main-form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    let colorName=form.color.value;
    console.log(colorName);
    let modelName=form.modelName.value;
    console.log(modelName);
    let price=form.price.value;
    let quantity1=form.qunatityPro.value;
    console.log(price*quantity1);
    //// here we need to add all the elemnts in the given table
    let srNo=1;
    let productName=document.getElementById("product-name1");
    productName.innerHTML=modelName;
});