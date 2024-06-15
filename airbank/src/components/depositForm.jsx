import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, Button, Input } from "@nextui-org/react";
import BreadCrumbs from "./bread";
import Success from "./success"; // Assuming you have a similar success component or create one
import { useAmounts } from "../contextProvider"; // Ensure you have a similar context or create one

function DepositForm() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { airbankBalance, setAirbankBalance, airtimeBalance, setAirtimeBalance } = useAmounts();

  const handleDeposit = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
    console.log(isLoading);
    setIsLoading(false);
    setAirbankBalance(airbankBalance + amount);
    setAirtimeBalance(airtimeBalance - amount);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      navigate("/");
    }, 2000);
  };

  const handleChange = (e) => {
    setAmount(parseFloat(e.target.value) || 0); // Ensure 0 if empty or invalid number
  };

  return (
    <Card className={isSuccess ? "h-auto flex flex-col gap-4 lg:pr-24" : "w-80"}>
      {isSuccess ? (
        <CardBody>
          <Success />
        </CardBody>
      ) : (
        <>
          <CardHeader className="flex gap-3 flex-col">
            <h2 className="text-xl font-bold">Deposit</h2>
            <p className="text-small text-primary bg-primary/10 p-2 rounded-md">
              Deposit money into your Airbank Wallet to start saving money.
            </p>
            <BreadCrumbs path={["Deposit"]} className="justify-start" />
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <div className="flex flex-row gap-2 justify-between align-middle">
              <h5 className="text-sm w-1/2">Current Airbank Wallet Balance</h5>
              <p className='text-primary font-bold'>R {airbankBalance.toLocaleString()}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-xs">Enter Amount</h4>
              <Input
                isRequired
                type="number"
                label="Enter Amount"
                className="max-w-lg"
                value={amount === 0 ? "" : amount.toString()}
                onChange={handleChange}
              />
            </div>
          </CardBody>
          <CardFooter>
            <Button color="primary" variant="shadow" onPress={handleDeposit}>
              Deposit
            </Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
}

export default DepositForm;
