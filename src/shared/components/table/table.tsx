import React from 'react';
import MaterialReactTable, {
  type MRT_Row,
  type MRT_ColumnDef,
} from 'material-react-table';
import {
  Box,
  IconButton,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';


type Table<T = {}> = {
  data: T[];
  columns: MRT_ColumnDef<Record<string, any>>[];
  title?: string;
  onClickDelete?: (value: T) => void;
  onClickEdit?: (value: T) => void;
  button?: () => React.ReactNode;
};

export const Table: React.FC<Table> = ({ button, data, onClickDelete, columns, onClickEdit }) => {
  return (
    <>
      <MaterialReactTable
        displayColumnDefOptions={{
          'mrt-row-actions': {
            muiTableHeadCellProps: {
              align: 'center',
            },
            size: 120,
          },
        }}
        columns={columns}
        data={data}
        editingMode="modal" //default
        enableColumnOrdering
        enableEditing
        muiTableProps={{ style: { paddingTop: 15 }}}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <IconButton onClick={() => onClickEdit?.(row.original)}>
              <Edit />
            </IconButton>
            <IconButton color="error" onClick={() => onClickDelete?.(row.original)}>
              <Delete />
            </IconButton>
          </Box>
        )}
        renderTopToolbarCustomActions={button}
      />
    </>
  );
};