import React, { useState } from 'react';
import { type MRT_ColumnDef } from 'material-react-table';
import Button from '@mui/material/Button';

import { Table } from '../../shared/components/table/table';
import { CreateCourse } from './components/CreateCourse';
import { CourseCollectionType } from '../../shared/types/collections';


const columns: MRT_ColumnDef<Record<string, any>>[] = [
  { 

    accessorKey: 'name',
    header: 'Nombre',
    enableColumnOrdering: false,
    enableEditing: false, //disable editing on this column
    enableSorting: false,
    size: 150,
  },
  { 

    accessorKey: 'course',
    header: 'Apellido',
    enableColumnOrdering: false,
    enableEditing: false, //disable editing on this column
    enableSorting: false,
    size: 150,
  },
];




export const Courses: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState<CourseCollectionType[]>([]);

  const handleOpenCreate = (): void => {
    setOpen((state) => !state);
  }
  
  return (
    <>
      <Table 
        title="Profesores" 
        columns={columns} 
        data={data}  
        button={() => (
          <Button 
            onClick={handleOpenCreate}
            variant="contained">
              Registrar Materia
          </Button>
        )} 
      />
      <CreateCourse open={isOpen} onClose={handleOpenCreate} />
    </>
  );
}
