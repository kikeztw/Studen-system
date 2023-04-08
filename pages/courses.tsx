import { useState } from 'react';
import { NextPageWithLayout } from '../src/shared/types/page';
import { GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { getLayout } from '../src/shared/utils/get-layout';
import { Table } from '../src/shared/components/table/table';
import { Dialog } from '../src/shared/components/dialog';

const columns: GridColDef[] = [
  { field: 'firstName', headerName: 'Nombre' },
  {
    field: 'lastname',
    headerName: 'Curso',
    editable: false,
  },
  // {
  //   field: 'email',
  //   headerName: 'Correo',
  //   flex: 1,
  //   editable: false,
  // },
  // {
  //   field: 'grade',
  //   headerName: 'Nota',
  //   sortable: false,
  //   flex: 1,
  //   // valueGetter: (params: GridValueGetterParams) =>
  //   //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const data = [
  { id: 1, lastname: '1er anio', firstName: 'Matematica', grade: 3, email: 'test@test.com', ci: 353423434 },
  { id: 2, lastname: '2do anio', firstName: 'Fisica', grade: 4,  email: 'test@test.com', ci: 353423434   },
  { id: 3, lastname: '3er anio ', firstName: 'Quimica', grade: 4,  email: 'test@test.com', ci: 353423434   },
  { id: 4, lastname: '4to anio', firstName: 'Castellano', grade: 1,  email: 'test@test.com', ci: 353423434   },
  // { id: 5, lastname: 'Targaryen', firstName: 'Daenerys', grade: 3,  email: 'test@test.com', ci: 353423434   },
  // { id: 6, lastname: 'Melisandre', firstName: null, grade: 10,  email: 'test@test.com', ci: 353423434   },
  // { id: 7, lastname: 'Clifford', firstName: 'Ferrara', grade: 4,  email: 'test@test.com', ci: 353423434   },
  // { id: 8, lastname: 'Frances', firstName: 'Rossini', grade: 3,  email: 'test@test.com', ci: 353423434   },
  // { id: 9, lastname: 'Roxie', firstName: 'Harvey', grade: 6,  email: 'test@test.com', ci: 353423434   },
  // { id: 10, lastname: 'Roxie', firstName: 'Harvey', grade: 6,  email: 'test@test.com', ci: 353423434   },
  // { id: 92, lastname: 'Roxie', firstName: 'Harvey', grade: 6,  email: 'test@test.com', ci: 353423434   },
  // { id: 93, lastname: 'Roxie', firstName: 'Harvey', grade: 6,  email: 'test@test.com', ci: 353423434   },
  // { id: 49, lastname: 'Roxie', firstName: 'Harvey', grade: 6,  email: 'test@test.com', ci: 353423434   },
  // { id: 39, lastname: 'Roxie', firstName: 'Harvey', grade: 6,  email: 'test@test.com', ci: 353423434   },
  // { id: 95, lastname: 'Roxie', firstName: 'Harvey', grade: 6,  email: 'test@test.com', ci: 353423434   },
  // { id: 96, lastname: 'Roxie', firstName: 'Harvey', grade: 6,  email: 'test@test.com', ci: 353423434   },

];

export const CoursesView: NextPageWithLayout = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpenDialog = (): void => {
    setOpen((state) => !state);
  }
  return (
    <>
      <Table 
        title="Materias"
        columns={columns} 
        data={data} 
        button={
          <Button 
            onClick={handleOpenDialog}
            variant="contained">
              Registrar Materia
          </Button>
        } 
      />
      <Dialog 
        open={isOpen} 
        onClose={handleOpenDialog} 
        title="Agregar profesor">
          <TextField fullWidth label="Nombre" variant="filled" margin="normal" />
          <TextField fullWidth label="Curso" variant="filled" margin="normal" />
      </Dialog>
    </>
  );
}

CoursesView.getLayout = getLayout

export default CoursesView;