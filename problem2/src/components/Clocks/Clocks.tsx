const Clocks = () => {
  return (
    <div className="relative w-[50%]">
      <div className="clock">
        <div className="center-nut"></div>
        <div className="center-nut2"></div>
        <div className="indicators">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="sec-hand">
          <div className="sec"></div>
        </div>
        <div className="min-hand">
          <div className="min"></div>
        </div>
        <div className="hour-hand">
          <div className="hr"></div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Clocks;
