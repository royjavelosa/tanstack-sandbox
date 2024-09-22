import React, { useState } from 'react';
import { useReactTable, getCoreRowModel } from '@tanstack/react-table';
import './table.css'; 

const TableComponent = ({ columns, data }) => {
  const [pinnedRowId, setPinnedRowId] = useState(null);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleRowClick = (rowId) => {
    setPinnedRowId(prevPinnedRowId => prevPinnedRowId === rowId ? null : rowId);
  };

  return (
    <table className="pin-hover-table">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} colSpan={header.colSpan}>
                {header.isPlaceholder ? null : header.column.columnDef.header}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            onClick={() => handleRowClick(row.id)}
            className={pinnedRowId === row.id ? 'pinned' : ''}
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>{cell.getValue()}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
