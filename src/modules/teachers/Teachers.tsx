import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { type MRT_ColumnDef } from 'material-react-table';

import { Table } from '../../shared/components/table/table';
import { TeacherCollectionType } from '../../shared/types/collections';
import { getAllTeachers, Teachers as TeacherOperation } from '../../shared/firebase/actions/teachers';

import { CreateTeacher } from './components/CreateTeacher';

const columns: MRT_ColumnDef<Record<string, any>>[] = [
  { 

    accessorKey: 'firstname',
    header: 'Nombre',
    enableColumnOrdering: false,
    enableEditing: false, //disable editing on this column
    enableSorting: false,
    size: 150,
  },
  { 

    accessorKey: 'lastname',
    header: 'Apellido',
    enableColumnOrdering: false,
    enableEditing: false, //disable editing on this column
    enableSorting: false,
    size: 150,
  },
  { 
    accessorKey: 'ci',
    header: 'Cedula',
    enableColumnOrdering: false,
    enableEditing: false, //disable editing on this column
    enableSorting: false,
    size: 150,
  },
  { 
    accessorKey: 'phone',
    header: 'Telefono',
    enableColumnOrdering: false,
    enableEditing: false, //disable editing on this column
    enableSorting: false,
    size: 150,
  },
  { 
    accessorKey: 'email',
    header: 'Correo',
    enableColumnOrdering: false,
    enableEditing: false, //disable editing on this column
    enableSorting: false,
    size: 150,
  },
  { 
    accessorKey: 'status',
    header: 'Estado',
    enableColumnOrdering: false,
    enableEditing: false, //disable editing on this column
    enableSorting: false,
    size: 150,
  },
];


export const Teachers: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState<TeacherCollectionType[]>([]);

  const handleOpenDialog = (): void => {
    setOpen((state) => !state);
  }

  useEffect(() => {
    TeacherOperation.subscription((element) => {
      const data: TeacherCollectionType[] = [];
      element.forEach((item) => {
        data.push({ ...item.data(), id: item.id });
      })
      setData(data);
    });

    return() => {
      TeacherOperation.remove_subscription();
    }
  }, []);

  return (
    <>
      <Table 
        title="Profesores" 
        columns={columns} 
        data={data}  
        onClickEdit={(e) => console.log(e)}
        button={() => (
          <Button 
            onClick={handleOpenDialog}
            variant="contained">
              Registrar Profesor
          </Button>
        )} 
      />
     <CreateTeacher open={isOpen} onClose={handleOpenDialog} />
    </>
  );
}
