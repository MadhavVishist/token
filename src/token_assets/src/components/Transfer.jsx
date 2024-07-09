import React, { useState } from "react";
import {Principal} from '@dfinity/principal';
import {token} from "../../../declarations/token";

function Transfer() {
  const [recepientId ,setId]= useState("");
  const [amount,setAmount]=useState("");
  const [disable ,setDisabled] = useState(false);
  const [feedBack , setFeedBack] = useState("");
  const [ishidden , setHidden] = useState(true);
  
  async function handleClick() {
    setHidden(true);
    const recepient = Principal.fromText(recepientId);
    const amountToTransfer = Number(amount);
    setDisabled(true);
    const result = await token.transfer(recepient,amountToTransfer);
    setFeedBack(result);
    setHidden(false);
    setDisabled(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={recepientId}
                onChange={(e)=>setId(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} 
          disabled={disable}>
            Transfer
          </button>
        </p>
        <p hidden= {ishidden}>{feedBack}</p>
      </div>
    </div>
  );
}

export default Transfer;
