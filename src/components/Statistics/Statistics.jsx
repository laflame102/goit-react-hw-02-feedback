export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <li>{good}</li>
        <li>{neutral}</li>
        <li>{bad}</li>
        <li>{total(good, neutral, bad)}</li>
        <li>
          Positive feedback:
          {' ' + positivePercentage(good, neutral, bad) + '%'}
        </li>
      </ul>
    </div>
  );
};
