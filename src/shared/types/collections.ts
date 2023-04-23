export type TeacherCollectionType = {
  id?: string;
  firstname: string;
  lastname: string;
  ci: string;
  phone: string;
  email: string;
  status?: 'Activo' | 'Inactivo';
};