import React, { useState } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { Table } from '../../shared/components/table/table';
import { CreateMateriaForm } from './components/CreateMateriaForm';

const columns: GridColDef[] = [
  { field: 'firstName', headerName: 'Nombre' },
  {
    field: 'lastname',
    headerName: 'Curso',
    editable: false,
  },
];

const data = [
  { id: 1, lastname: '1er año', firstName: 'Matematica', grade: 3, email: 'test@test.com', ci: 353423434 },
  { id: 2, lastname: '2do año', firstName: 'Fisica', grade: 4,  email: 'test@test.com', ci: 353423434   },
  { id: 3, lastname: '3er año ', firstName: 'Quimica', grade: 4,  email: 'test@test.com', ci: 353423434   },
  { id: 4, lastname: '4to año', firstName: 'Castellano', grade: 1,  email: 'test@test.com', ci: 353423434   },
];

export const Courses: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpenDialog = (): void => {
    setOpen((state) => !state);
  }
  
  return (
    <>
      {/* <Table 
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
      /> */}
      <CreateMateriaForm open={isOpen} onClose={handleOpenDialog} />
    </>
  );
}
