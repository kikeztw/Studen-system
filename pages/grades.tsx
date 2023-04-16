import { useState } from 'react';
import { NextPageWithLayout } from '../src/shared/types/page';
import { GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { getLayout } from '../src/shared/utils/get-layout';
import { Table } from '../src/shared/components/table/table';
import { CustomDialog } from '../src/shared/components/CustomDialog';

const columns: GridColDef[] = [
  { field: 'firstName', headerName: 'Nombre' },
  {
    field: 'ci',
    headerName: 'Cedula',
    editable: false,
  },
  {
    field: 'email',
    headerName: 'Correo',
    editable: false,
  },
  {
    field: 'grade',
    headerName: 'Nota',
    sortable: false,
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const data = [
  { id: 1, lastname: 'Snow', firstName: 'Jon', grade: 3, email: 'test@test.com', ci: 353423434 },
  { id: 2, lastname: 'Lannister', firstName: 'Cersei', grade: 4,  email: 'test@test.com', ci: 353423434   },
  { id: 3, lastname: 'Lannister', firstName: 'Jaime', grade: 4,  email: 'test@test.com', ci: 353423434   },
  { id: 4, lastname: 'Stark', firstName: 'Arya', grade: 1,  email: 'test@test.com', ci: 353423434   },
  { id: 5, lastname: 'Targaryen', firstName: 'Daenerys', grade: 3,  email: 'test@test.com', ci: 353423434   },
  { id: 6, lastname: 'Melisandre', firstName: 'Pedro', grade: 10,  email: 'test@test.com', ci: 353423434   },
  { id: 7, lastname: 'Clifford', firstName: 'Ferrara', grade: 4,  email: 'test@test.com', ci: 353423434   },
  { id: 8, lastname: 'Frances', firstName: 'Rossini', grade: 3,  email: 'test@test.com', ci: 353423434   },
  { id: 9, lastname: 'Roxie', firstName: 'Harvey', grade: 6,  email: 'test@test.com', ci: 353423434   },
  { id: 10, lastname: 'Roxie', firstName: 'Harvey', grade: 6,  email: 'test@test.com', ci: 353423434   },
  { id: 92, lastname: 'Roxie', firstName: 'Harvey', grade: 6,  email: 'test@test.com', ci: 353423434   },
  { id: 93, lastname: 'Roxie', firstName: 'Harvey', grade: 6,  email: 'test@test.com', ci: 353423434   },
  { id: 49, lastname: 'Roxie', firstName: 'Harvey', grade: 6,  email: 'test@test.com', ci: 353423434   },
  { id: 39, lastname: 'Roxie', firstName: 'Harvey', grade: 6,  email: 'test@test.com', ci: 353423434   },
  { id: 95, lastname: 'Roxie', firstName: 'Harvey', grade: 6,  email: 'test@test.com', ci: 353423434   },
  { id: 96, lastname: 'Roxie', firstName: 'Harvey', grade: 6,  email: 'test@test.com', ci: 353423434   },

];

export const GradesView: NextPageWithLayout = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpenDialog = (): void => {
    setOpen((state) => !state);
  }
  return (
    <>
      <Table 
        title="Notas"
        columns={columns} 
        data={data} 
        button={
          <Button onClick={handleOpenDialog} variant="contained">
            Subir Nota
          </Button>
        } 
      />
      <CustomDialog 
        open={isOpen} 
        onClose={handleOpenDialog} 
        title="Asignar Nota">
        <TextField fullWidth label="Alumno" variant="filled" margin="normal" />
        <TextField fullWidth label="Materia" variant="filled" margin="normal" />
        <TextField fullWidth label="Nota" variant="filled" margin="normal" />
      </CustomDialog>
    </>
  );
}

GradesView.getLayout = getLayout

export default GradesView;