import React from 'react';
import { useReactTable, getCoreRowModel } from '@tanstack/react-table';
import './table.css';

const SimpleTable = () => {
  const data = React.useMemo(
    () => [
      { a: 'Row 1', b: 'Row 1', 1: 10, 2: 20, x0: 'X0-1' },
      { a: 'Row 2', b: 'Row 2', 1: 30, 2: 40, x0: 'X0-2' },
      { a: 'Row 3', b: 'Row 3', 1: 50, 2: 60, x0: 'X0-3' },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { header: 'a', accessorKey: 'a' },
      { header: 'b', accessorKey: 'b' },
      { header: '1', accessorKey: '1' },
      { header: '2', accessorKey: '2' },
      { header: 'x0', accessorKey: 'x0' },
    ],
    []
  );

  // Create table instance
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder ? null : header.column.columnDef.header}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>{cell.column.columnDef.accessorKey ? cell.getValue() : ''}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SimpleTable;
