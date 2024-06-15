//form for withdrawing money from airbank to your bank account
import { useNavigate } from 'react-router-dom';
import { Input, Button, Card, CardBody } from "@nextui-org/react";
import { useState } from "react";
import Success from "./success";
import { useAmounts } from "../contextProvider";

function WithdrawForm() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const { airbankBalance, setAirbankBalance } = useAmounts();

  const handleWithdraw = () => {
    setIsSuccess(true);
    setAirbankBalance(airbankBalance - amount);
    setTimeout(() => {
      setIsSuccess(false);
      navigate("/");
    }, 2000);

  };

  const handleChange = (e) => {
    setAmount(parseFloat(e.target.value) || 0); // Ensure 0 if empty or invalid number
  };

  return (
    <Card  className={isSuccess && "h-auto flex flex-col gap-4 lg:pr-24"}>
      {isSuccess ? (
        <CardBody >
          <Success />
        </CardBody>
      ) : (
        <CardBody className="flex flex-col gap-4">
          <div className="flex flex-row gap-2 justify-between align-middle">
            <h5 className="text-sm w-1/2">Current Airbank Wallet Balance</h5>
            <p className='text-primary font-bold'>R {airbankBalance}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-sm">Enter Amount to Withdraw</h4>
            <Input
              isRequired
              type="number"
              label="Enter Amount"
              className="max-w-lg"
              value={amount === 0 ? "" : amount.toString()} // Handle display of zero value
              onChange={handleChange}
            />
          </div>
          <Button color="primary" variant="shadow" onPress={handleWithdraw}>
            Withdraw
          </Button>
        </CardBody>
      )}
    </Card>
  );
}

export default WithdrawForm;
