import Balance from "../components/balance.jsx";
import { BarChart } from "../components/BarChart.jsx";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "../utils/data.js";
import { Card, CardBody } from "@nextui-org/react";
import { Link, Button} from "@nextui-org/react";
import { useAmounts } from "../contextProvider";

Chart.register(CategoryScale);

function Home() {
  const { airbankBalance, airtimeBalance } = useAmounts();

  const chartData = {
    labels: Data.map((data) => data.year), // Extracting year for labels
    datasets: [
      {
        label: "Amount Saved",
        data: Data.map((data) => data.amountSaved),
        backgroundColor: "#32a8fc",
        borderColor: "#32a8fc",
        borderWidth: 1,
      },
      {
        label: "Airtime Recharged",
        data: Data.map((data) => data.airtimeRecharged),
        backgroundColor: "#41d25a",
        borderColor: "#41d25a",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 p-4">
        <Balance type="Airbank Wallet" amount={airbankBalance} color="success" />
        <Balance type="Airtime" amount={airtimeBalance} color="secondary" />
      </div>
      <div className="flex flex-col md:flex-row gap-4 p-4">
        <div className="w-full md:w-1/2 lg:h-96">
          {/* 96 => 24rem or 384px, for the chart */}

          <Card className="w-full">
            <CardBody>
              <BarChart chartData={chartData} />
            </CardBody>
          </Card>
        </div>
        <div className=" lg:w-32 lg:h-96 flex flex-col gap-4 ">
          
            <Button
              href="/withdraw"
              as={Link}
              color="primary"
              showAnchorIcon
              variant="shadow"
            >
              Withdraw
            </Button>
            <Button
              href="/deposit"
              as={Link}
              color="success"
              showAnchorIcon
              variant="shadow"
            >
              Deposit
            </Button>
            <Button
              href="https://github.com/nextui-org/nextui"
              as={Link}
              color="danger"
              showAnchorIcon
              variant="shadow"
            >
              Buy
            </Button>
            <Button
              href="https://github.com/nextui-org/nextui"
              as={Link}
              color="secondary"
              showAnchorIcon
              variant="shadow"
            >
              Sas
            </Button>
        </div>
      </div>
    </>
  );
}

export default Home;
