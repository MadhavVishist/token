import React,{useState} from "react";
import {token, canisterId, createActor} from "../../../declarations/token";
import { AuthClient } from "@dfinity/auth-client";

function Faucet() {

  const [isDisabled,setDisable]= useState(false);
  const [buttonText, setText] = useState("Give ME");

  async function handleClick(event) {
    setDisable(true); 

    // const authClient= await AuthClient.create();
    // const identity = await authClient.getIdentity();
    // const authentictedCanister= createActor(canisterId,{
    //   agentOptions :{
    //     identity,
    //   },
    // });

    const result =  await token.payOut();
    setText(result);
    // setDisable(false);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free DAngela tokens here! Claim 10,000 VISH tokens to your account.</label>
      <p className="trade-buttons">
        <button 
        disabled={isDisabled}
        id="btn-payout" 
        onClick={handleClick}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
