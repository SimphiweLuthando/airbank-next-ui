import WithdrawForm from "../components/withdrawForm";
import BreadCrumbs from "../components/bread";

function Withdraw() {
  return (
    <div className="p-3 md:w-96 md:mx-auto h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-2 mb-3">
        <h1 className="text-2xl font-bold">Withdraw</h1>
        <BreadCrumbs path={["Withdraw"]} className="justify-start" />
      </div>
      <div>
        <WithdrawForm />
      </div>
    </div>
  );
}

export default Withdraw;
