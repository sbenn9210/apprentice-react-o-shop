import React from 'react';
import { Link } from 'react-router-dom';

function Table({ data, columns, editable, editUrl }) {
  const renderRows = (data, columns) => {
    if (data) {
      return data.map((row, index) => (
        <tr key={index}>
          {columns.map((column) => (
            <td key={column.name}>
              {editable && column.name === 'editable' ? (
                <Link to={`${editUrl}/${row.id}`}>Edit</Link>
              ) : (
                row[column.name]
              )}
            </td>
          ))}
        </tr>
      ));
    }
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {columns.map((heading) => (
              <th scope="col" key={heading.name}>
                {heading.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{renderRows(data, columns)}</tbody>
      </table>
    </div>
  );
}

export default Table;
