import { useState } from 'react';
import Button from '@mui/material/Button';
import { type MRT_ColumnDef } from 'material-react-table';

import { Table } from '../../shared/components/table/table';

import { CreateCoordinador } from './components/CreateCoordinador';

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
    accessorKey: 'user.email',
    header: 'Correo',
    enableColumnOrdering: false,
    enableEditing: false, //disable editing on this column
    enableSorting: false,
    size: 150,
  },
];

export const CoordinatorsView: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpenDialog = (): void => {
    setOpen((state) => !state);
  }

  return (
    <>
      <Table 
        title="Profesores" 
        columns={columns} 
        data={[]}  
        button={() => (
          <Button 
            onClick={handleOpenDialog}
            variant="contained">
              Registrar Coordinador
          </Button>
        )} 
      />
      <CreateCoordinador onClose={handleOpenDialog} open={isOpen} />
    </>
  );
}
