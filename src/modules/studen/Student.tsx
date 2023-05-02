import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { type MRT_ColumnDef } from 'material-react-table';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';

import { Table } from '../../shared/components/table/table';
import { StudentCollectionTye } from '../../shared/types/collections';
import { Teachers as TeacherOperation } from '../../shared/firebase/actions/teachers';
import { DeleteWarnModal } from '../../shared/components/DeleteWarnModal';
import { Students } from '../../shared/firebase/actions/student';

import { CreateStudent } from './components/CreateStudent';
import { EditStuden } from './components/EditStuden';

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
    accessorKey: 'email',
    header: 'Correo',
    enableColumnOrdering: false,
    enableEditing: false, //disable editing on this column
    enableSorting: false,
    size: 150,
  },
  { 
    accessorKey: 'course',
    header: 'Año',
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


export const Student: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [isDeleting, setDeleting] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState<StudentCollectionTye>();
  const [data, setData] = useState<StudentCollectionTye[]>([]);
  const router= useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const handleOpenDialog = (): void => {
    setOpen((state) => !state);
  }

  useEffect(() => {
    Students.subscription((element) => {
      const data: StudentCollectionTye[] = [];
      element.forEach((item) => {
        data.push({ ...item.data(), id: item.id });
      })
      setData(data);
    });

    return() => {
      TeacherOperation.remove_subscription();
    }
  }, []);

  const onDelete = (e: StudentCollectionTye): void =>{
    setDeleteRecord(e)
  }

  const onCloseDeteleModal = (): void => {
    setDeleteRecord(undefined);
  }

  const deleteTeacher = async (): Promise<void> => {
    setDeleting(true);
    try {
      // await deleteTeacherById(deleteRecord?.id as string);
      setDeleteRecord(undefined);
      enqueueSnackbar('Profesor borrado con exito', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar('Something is wrong', { variant: 'error' });
    }
    setDeleting(false);
  }

  return (
    <>
      <Table 
        title="Estudiantes" 
        columns={columns} 
        data={data}  
        onClickDelete={(e) => onDelete(e)}
        onClickEdit={(e: StudentCollectionTye) => {
          router.push({ pathname: 'students', query: { edit: e.id } })
        }}
        button={() => (
          <Button 
            onClick={handleOpenDialog}
            variant="contained">
              Registrar Estudiante
          </Button>
        )} 
      />
     <CreateStudent open={isOpen} onClose={handleOpenDialog} />
     <DeleteWarnModal 
        isLoading={isDeleting}
        onConfirm={deleteTeacher} 
        open={Boolean(deleteRecord)} 
        onClose={onCloseDeteleModal} 
      />
     <EditStuden />
    </>
  );
}
