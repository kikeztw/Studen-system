import { useState } from 'react';
import { NextPageWithLayout } from '../src/shared/types/page';
import { GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { getLayout } from '../src/shared/utils/get-layout';
import { Table } from '../src/shared/components/table/table';
import { CustomDialog } from '../src/shared/components/CustomDialog';

const columns: GridColDef[] = [
  { field: 'firstName', headerName: 'Nombre', width: 150 },
  { field: 'lastname', headerName: 'Apellido', width: 150 },
  {
    field: 'ci',
    headerName: 'Cedula',
    editable: false,
    width: 150
  },
  {
    field: 'phone',
    headerName: 'Telefono',
    editable: false,
    width: 150
  },
  {
    field: 'email',
    headerName: 'Correo',
    editable: false,
    width: 150
  },
  /*{
    field: 'status',
    headerName: 'Estado',
    sortable: false,
    width: 150
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },*/
];

const data = [
  { id: 1, lastname: 'Snow', firstName: 'Jon', phone: 353423434, email: 'test@test.com', ci: 353423434 },
  { id: 2, lastname: 'Lannister', firstName: 'Cersei', phone: 423423434,  email: 'test@test.com', ci: 353423434   },
  { id: 3, lastname: 'Lannister', firstName: 'Jaime', phone: 453423434,  email: 'test@test.com', ci: 353423434   },
  { id: 4, lastname: 'Stark', firstName: 'Arya', phone: 163423434,  email: 'test@test.com', ci: 353423434   },
  { id: 5, lastname: 'Targaryen', firstName: 'Daenerys', phone: 343234234,  email: 'test@test.com', ci: 353423434   },
  { id: 6, lastname: 'Melisandre', firstName: null, phone: 1534234340,  email: 'test@test.com', ci: 353423434   },
  { id: 7, lastname: 'Clifford', firstName: 'Ferrara', phone: 443423434,  email: 'test@test.com', ci: 353423434   },
  { id: 8, lastname: 'Frances', firstName: 'Rossini', phone: 363423434,  email: 'test@test.com', ci: 353423434   },
  { id: 9, lastname: 'Roxie', firstName: 'Harvey', phone: 653423434,  email: 'test@test.com', ci: 353423434   },
  { id: 10, lastname: 'Roxie', firstName: 'Harvey', phone: 653423434,  email: 'test@test.com', ci: 353423434   },
  { id: 92, lastname: 'Roxie', firstName: 'Harvey', phone: 653423434,  email: 'test@test.com', ci: 353423434   },
  { id: 93, lastname: 'Roxie', firstName: 'Harvey', phone: 653423434,  email: 'test@test.com', ci: 353423434   },
  { id: 49, lastname: 'Roxie', firstName: 'Harvey', phone: 653423434,  email: 'test@test.com', ci: 353423434   },
  { id: 39, lastname: 'Roxie', firstName: 'Harvey', phone: 653423434,  email: 'test@test.com', ci: 353423434   },
  { id: 95, lastname: 'Roxie', firstName: 'Harvey', phone: 653423434,  email: 'test@test.com', ci: 353423434   },
  { id: 96, lastname: 'Roxie', firstName: 'Harvey', phone: 653423434,  email: 'test@test.com', ci: 353423434   },

];

export const StudenView: NextPageWithLayout = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpenDialog = (): void => {
    setOpen((state) => !state);
  }
  return (
    <>
      <Table 
        title="Estudiantes"
        columns={columns} 
        data={data} 
        button={
          <Button onClick={handleOpenDialog} variant="contained">
            Registrar Estudiante
          </Button>} 
      />
      <CustomDialog 
        open={isOpen} 
        onClose={handleOpenDialog} 
        title="Agregar Estudiante">
          <TextField fullWidth label="Nombre" variant="filled" margin="normal" />
          <TextField fullWidth label="Apellido" variant="filled" margin="normal" />
          <TextField fullWidth label="Cedula" variant="filled" margin="normal" />
          <TextField fullWidth label="Telefono" variant="filled" margin="normal" />
          <TextField fullWidth label="Correo" variant="filled" margin="normal" />
      </CustomDialog>
    </>
  );
}

StudenView.getLayout = getLayout

export default StudenView;