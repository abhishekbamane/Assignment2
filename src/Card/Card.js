import "./Card.css";

const Card = (props) => {
  let sortedData = props.items.sort((a, b) => a.index - b.index);
  return (
    <div className="main">
      <table className="main-table">
        <tbody>
          <tr>
            <th>Index</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          {sortedData.map((d) => (
            <tr key={d.index}>
              <td>{d.index}</td>
              <td>{d.firstName}</td>
              <td>{d.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Card;
