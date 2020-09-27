exports.AmountCalculate=(data,type)=>{

    var TotalAmount=0;
    console.log("AMountCAlculate");
    console.log(type);
    
  

    data.forEach(element => {
   
        TotalAmount+=element[`${type}`];
    });
    

    return TotalAmount;

}