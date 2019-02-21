import * as React from "react";
import data from "../../../Data/table.json";

class BulkData extends React.Component<any, any> {
  render() {
    return (
      <table>
        <tbody>
          {
            data.map((row, index) => (
              <tr key={index}>
                <td>{row.guid}</td>
                <td>{row.balance}</td>
                <td>{row.age}</td>
                <td>{row.eyeColor}</td>
                <td>{row.name}</td>
                <td>{row.gender}</td>
                <td>{row.company}</td>
                <td>{row.email}</td>
                <td>{row.phone}</td>
                <td>{row.address}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

export default BulkData;
