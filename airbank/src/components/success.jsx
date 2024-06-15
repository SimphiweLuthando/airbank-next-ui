function Success() {
  return (
    <div className=" flex flex-col gap-2">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid meet"
        className="pb-4"
      >
        <circle
          fill="none"
          stroke="#17c964"
          strokeWidth="20"
          cx="200"
          cy="200"
          r="190"
          strokeLinecap="round"
          transform="rotate(-90 200 200)"
          className="circle"
        />
        <polyline
          fill="none"
          stroke="#17c964"
          points="88,214 173,284 304,138"
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="tick"
        />
      </svg>

      <div className="flex flex-col gap-2 text-success-100 bg-success-300 p-4 rounded-lg">
        <h4>Success</h4>
        <p>Your Airbank Wallet has been updated</p>
      </div>
    </div>
  );
}

export default Success;
