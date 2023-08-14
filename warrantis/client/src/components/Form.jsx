import { useState } from "react";

export default function Form(){
   const [years,setYears ]=useState(0);
   const today = new Date()
   function setExpiry() {
    const expiryDate = new Date(today);
    expiryDate.setFullYear(expiryDate.getFullYear() + years);
    return expiryDate;
}
    return(
    <div className="container">
        <h2>Send Warranty</h2>
        <form id="warrantyForm">
            <label for="buyerAddress">customer Address</label>
            <input type="text" id="buyerAddress" name="buyerAddress" required/>

            <label for="productInfo">Product Info</label>
            <input type="text" id="productInfo" name="productInfo" required/>

            <label for="startDate">Start Date</label>
            <input value = {today.toISOString().split('T')[0]}type="text" id="startDate" name="startDate" readonly/>

            <label for="expiryDate">Expiry Date</label>
            <input value =  {setExpiry().toISOString().split('T')[0]} type="text" id="expiryDate" name="expiryDate" readonly/>
            <div>
                <button type="button" onClick={()=>setYears(1)}>1 Year</button>
                <button type="button" onClick={()=>setYears(2)}>2 Years</button>
                <button type="button" onClick={()=>setYears(5)}>5 Years</button>
                <button type="button" onClick={()=>setYears(10)}>10 Years</button>
            </div>
            <br/>
            <button type="submit">Send Warranty</button>
        </form>
    </div>
    

    );
}