import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { type MRT_ColumnDef } from 'material-react-table';
import { useRouter } from 'next/router';

import { Table } from '../../shared/components/table/table';
import { GradesCollectionTye, StudentCollectionTye } from '../../shared/types/collections';
import { getStudentByCI, Students } from '../../shared/firebase/actions/student';

import { CreateGrades } from './components/CreateGrades';
import { StudenDetail } from './components/StudenDetail';


const columns: MRT_ColumnDef<Record<string, any>>[] = [
  { 

    accessorKey: 'course',
    header: 'Materia',
    enableColumnOrdering: false,
    enableEditing: false, //disable editing on this column
    enableSorting: false,
    size: 150,
  },
  { 

    accessorKey: 'value',
    header: 'Nota',
    enableColumnOrdering: false,
    enableEditing: false, //disable editing on this column
    enableSorting: false,
    size: 150,
  },
];


type GradesProps = {
  isDisabledRegister?: boolean;
}

export const Grades: React.FC<GradesProps> = ({
  isDisabledRegister
}) => {
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState<StudentCollectionTye>();
  const [grades, setGrades] = useState<GradesCollectionTye[]>([]);
  const router = useRouter();

  const handleOpenDialog = (): void => {
    setOpen((state) => !state);
  }

  const getInitialData = async (): Promise<void> => {
    if(typeof router.query.ci !== 'string'){
      return;
    }
    const response = await getStudentByCI(router.query.ci);
    if(response){
      setData(response);
    }
  }

  useEffect(() => {
    getInitialData();

    if(typeof router.query.ci === 'string'){
      Students.subscription(
        (value) => {
          value.forEach((item) => {
            const _data = item.data();
            if(_data.ci === router.query.ci){
              setGrades(_data.grades || []);
            }
          })
        },
        {
          fieldPath: 'ci',
          opStr: '==',
          value: router.query.ci
        }
      )
    }

    return () => {
      Students.remove_subscription();
    }
  }, [router.query]);


  return (
    <>
      <StudenDetail data={data} />
      <Table 
        title="Nota del Estudiante" 
        columns={columns} 
        data={grades}  
        button={
          !isDisabledRegister ? 
            () => (
            <Button 
              onClick={handleOpenDialog}
              variant="contained">
                Registrar Nota
            </Button>
            ): undefined
        } 
      />
     {!isDisabledRegister && <CreateGrades data={data} open={isOpen} onClose={handleOpenDialog} />}
    </>
  );
}
