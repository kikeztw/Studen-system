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


type Table<T> = {
  data: T[];
  columns: MRT_ColumnDef<Record<string, any>>[];
  title?: string;
  onClickDelete?: (value: T) => void;
  onClickEdit?: (value: T) => void;
  button?: () => React.ReactNode;
};

export const Table = <T extends Record<string, any>,>({ button, data, onClickDelete, columns, onClickEdit }: Table<T>): React.ReactElement => {
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
            <IconButton onClick={() => onClickEdit?.(row.original as T)}>
              <Edit />
            </IconButton>
            <IconButton color="error" onClick={() => onClickDelete?.(row.original as T)}>
              <Delete />
            </IconButton>
          </Box>
        )}
        renderTopToolbarCustomActions={button}
      />
    </>
  );
};