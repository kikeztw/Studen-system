import { NextPageWithLayout } from '../src/shared/types/page';
import Container from '@mui/material/Container';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

import { getLayout } from '../src/shared/utils/get-layout';
import { Table } from '../src/shared/components/table/table';

const columns: GridColDef[] = [
  { field: 'firstName', headerName: 'Nombre', flex: 1 },
  // {
  //   field: 'ci',
  //   headerName: 'Cedula',
  //   flex: 1,
  //   editable: false,
  // },
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
  { id: 1, lastname: 'Snow', firstName: 'Matematica', grade: 3, email: 'test@test.com', ci: 353423434 },
  { id: 2, lastname: 'Lannister', firstName: 'Fisica', grade: 4,  email: 'test@test.com', ci: 353423434   },
  { id: 3, lastname: 'Lannister', firstName: 'Quimica', grade: 4,  email: 'test@test.com', ci: 353423434   },
  { id: 4, lastname: 'Stark', firstName: 'Castellano', grade: 1,  email: 'test@test.com', ci: 353423434   },
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
  return (
    <Table 
      title="Materias"
      columns={columns} 
      data={data} 
      button={<Button variant="contained">Registrar Materia</Button>} 
    />
  );
}

CoursesView.getLayout = getLayout

export default CoursesView;