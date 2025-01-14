import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allneworder, setAllneworder] = useState([]);
 useEffect(()=>{
  // http://localhost:3002     
  axios.get("https://zerodhaclonebackends.onrender.com/newOrder").then((res)=>{
    console.log(res.data);
     setAllneworder(res.data);
  });

 }, []);
  
    
  return (
   
//     <div className="orders">
//       <div className="no-orders">
//         <p>You haven't placed any orders today</p>

//         <Link to={"/"} className="btn">
//           Get started
//         </Link>
//       </div>
//     </div>
//   );
// };

<>
<h3 className="title">Positions ({allneworder.length})</h3>

<div className="order-table">
  <table>
    <tr>
      <th>name</th>
      <th>price</th>
      <th>Qty.</th>
      
    </tr>

    {allneworder.map((stock, index) => {
      // const curValue = stock.price * stock.qty;
      // const isProfit = curValue - stock.avg * stock.qty >= 0.0;
      // const profClass = isProfit ? "profit" : "loss";
      // const dayClass = stock.isLoss ? "loss" : "profit";

      return (
        <tr key={index}>
          <td>{stock.name}</td>
          <td>{stock.price}</td>
          <td>{stock.qty}</td>
          {/* <td>{stock.avg.toFixed(2)}</td>
          <td>{stock.price.toFixed(2)}</td>
          <td className={profClass}>
            {(curValue - stock.avg * stock.qty).toFixed(2)}
          </td>
          <td className={dayClass}>{stock.day}</td> */}
        </tr>
      );
    })}
  </table>
</div>
</>

  );


}
export default Orders;
