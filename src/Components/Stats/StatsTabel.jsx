/* eslint-disable react/prop-types */


export default function StatsTabel(props) {
  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow">
      <div className="stat">
        <div className="stat-title">{props.title}</div>
        <div className="stat-value">{props.count}</div>
        <div className="stat-desc">{props.desc}</div>
      </div>
    </div>
  );
}
