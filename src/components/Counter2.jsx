import CountUp from 'react-countup'; // ===================================================

// ===================================================
const Counter2 = ({
  amount,
  title
}) => {
  return <div className="col-6 col-lg-3">
      <h3 className="counter counter-lg text-white">
        <CountUp end={amount} suffix='+'/>
      </h3>
      <p>{title}</p>
    </div>;
};

export default Counter2;