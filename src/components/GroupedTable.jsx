import React, { useEffect, useState } from 'react';
import TableComponent from './TableComponent';
import { getData } from '../api/apiService';

const GroupedTable = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  // Fetch data using the centralized API function from apiService.jsx
  useEffect(() => {
    getData()
      .then((response) => {
        setData(response.data);  // Axios automatically parses the JSON data
        setLoading(false);       // Once data is loaded, set loading to false
      })
      .catch((error) => {
        console.error('Error loading JSON data:', error);  // Handle any errors
      });
  }, []);

  const groupedColumns = React.useMemo(
    () => [
      {
        header: 'Letters',
        columns: [
          { header: 'a', accessorKey: 'a' },
          { header: 'b', accessorKey: 'b' },
        ],
      },
      {
        header: 'Numbers',
        columns: [
          { header: '1', accessorKey: '1' },
          { header: '2', accessorKey: '2' },
        ],
      },
      {
        header: 'Mixed',
        columns: [
          { header: 'x0', accessorKey: 'x0' },
        ],
      },
    ],
    []
  );

    // Display a loading message until data is fetched
    if (loading) {
        return <div>Loading...</div>;
      }

      return (
        <div className="table-container">
          <TableComponent columns={groupedColumns} data={data} />
        </div>
      );
};

export default GroupedTable;
