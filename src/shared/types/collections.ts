export type TeacherCollectionType = {
  id?: string;
  firstname: string;
  lastname: string;
  ci: string;
  phone: string;
  email: string;
  status?: 'Activo' | 'Inactivo';
};

export type CoordinatorCollectionType = {
  id?: string;
  firstname: string;
  lastname: string;
  ci: string;
  phone: string;
  email: string;
};

export type CourseCollectionType = {
  name: string;
  course: string;
  status?: 'Active' | 'Inactive',
}