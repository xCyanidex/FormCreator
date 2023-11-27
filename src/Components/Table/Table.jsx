

export default function Table() {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Number of Forms Created</th>
              <th>Credits Left</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Chris Evans</th>
              <td>20</td>
              <td>30</td>
            </tr>
            <tr>
              <th>Evan Bryce</th>
              <td>5</td>
              <td>40</td>
            </tr>
            <tr>
              <th>Angelina</th>
              <td>5</td>
              <td>20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
