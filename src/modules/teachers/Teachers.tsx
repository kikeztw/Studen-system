import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { type MRT_ColumnDef } from 'material-react-table';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';

import { Table } from '../../shared/components/table/table';
import { TeacherCollectionType } from '../../shared/types/collections';
import { Teachers as TeacherOperation } from '../../shared/firebase/actions/teachers';
import { DeleteWarnModal } from '../../shared/components/DeleteWarnModal';
import { deleteTeacherById } from '../../shared/firebase/actions/teachers';

import { CreateTeacher } from './components/CreateTeacher';
import { EditTeacher } from './components/EditTeacher';

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
  const [isDeleting, setDeleting] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState<TeacherCollectionType>();
  const [data, setData] = useState<TeacherCollectionType[]>([]);
  const router= useRouter();
  const { enqueueSnackbar } = useSnackbar();

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

  const onDelete = (e: TeacherCollectionType): void =>{
    setDeleteRecord(e)
  }

  const onCloseDeteleModal = (): void => {
    setDeleteRecord(undefined);
  }

  const deleteTeacher = async (): Promise<void> => {
    setDeleting(true);
    try {
      await deleteTeacherById(deleteRecord?.id as string);
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
        title="Profesores" 
        columns={columns} 
        data={data}  
        onClickDelete={(e) => onDelete(e)}
        onClickEdit={(e: TeacherCollectionType) => {
          router.push({ pathname: 'teachers', query: { edit: e.id } })
        }}
        button={() => (
          <Button 
            onClick={handleOpenDialog}
            variant="contained">
              Registrar Profesor
          </Button>
        )} 
      />
     <CreateTeacher open={isOpen} onClose={handleOpenDialog} />
     <DeleteWarnModal 
        isLoading={isDeleting}
        onConfirm={deleteTeacher} 
        open={Boolean(deleteRecord)} 
        onClose={onCloseDeteleModal} 
      />
     <EditTeacher />
    </>
  );
}
