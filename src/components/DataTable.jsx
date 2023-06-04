import React, { useState } from 'react';

const Table = ({ data }) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(0);
  const pageSize = 10;

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedData = filteredData.sort((a, b) => {
    if (sortColumn) {
      const columnA = a[sortColumn];
      const columnB = b[sortColumn];
      if (columnA < columnB) {
        return sortOrder === 'asc' ? -1 : 1;
      }
      if (columnA > columnB) {
        return sortOrder === 'asc' ? 1 : -1;
      }
    }
    return 0;
  });

  const pageCount = Math.ceil(sortedData.length / pageSize);

  const paginatedData = sortedData.slice(
    page * pageSize,
    (page + 1) * pageSize
  );

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <table className="table-auto">
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>
              Name
              {sortColumn === 'name' && (
                <span>{sortOrder === 'asc' ? ' ▲' : ' ▼'}</span>
              )}
            </th>
            <th onClick={() => handleSort('age')}>
              Age
              {sortColumn === 'age' && (
                <span>{sortOrder === 'asc' ? ' ▲' : ' ▼'}</span>
              )}
            </th>
            <th onClick={() => handleSort('gender')}>
              Gender
              {sortColumn === 'gender' && (
                <span>{sortOrder === 'asc' ? ' ▲' : ' ▼'}</span>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center space-x-2">
        {Array.from({ length: pageCount }, (_, i) => (
          <button
            key={i}
            className={`${
              i === page ? 'bg-blue-500 text-white' : 'bg-gray-200'
            } px-3 py-1`}
            onClick={() => setPage(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Table;
