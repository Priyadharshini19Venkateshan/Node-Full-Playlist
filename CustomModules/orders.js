//EXPORTING OF CLASS

class Orders{

    setOrderId=(id)=>{
     console.log(" order id received: "  +id);
      }

    setOrderName=(name)=>{
     console.log(" order name received: " + name);
      }  

}

module.exports.orders=Orders;