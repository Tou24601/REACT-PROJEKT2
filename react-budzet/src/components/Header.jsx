import { useState, useEffect } from "react";
import Image from "../assets/icons8-us-dollar-circled-100.png";

const Header = ({ balance }) => {
  const [balanceMsg, setBalanceMsg] = useState("");

  useEffect(() => {
    if (balance === 0) {
      setBalanceMsg("Bilans wynosi zero");
    } else if (balance > 0) {
      setBalanceMsg(`Możesz jeszcze wydać ${balance} zł`);
    } else if (balance < 0) {
      setBalanceMsg(`Bilans jest ujemny. Jesteś na minusie ${balance * -1} zł`);
    }
  }, [balance]);

  return (
    <header className="text-center m-4">
      <img src={Image} alt="Dollar sign" className="img-thumbnail m-2" />
      <h1 className="m-4" id="balance">
        {balanceMsg}
      </h1>
    </header>
  );
};

export default Header;
