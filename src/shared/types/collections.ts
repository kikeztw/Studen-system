export type CollectionBasicType = {
  id?: string;
  createAt?: string;
  updateAt?: string;
}

export type TeacherCollectionType = CollectionBasicType & {
  firstname: string;
  lastname: string;
  ci: string;
  phone: string;
  email: string;
  status?: 'Activo' | 'Inactivo';
};

export type CoordinatorCollectionType = CollectionBasicType& {
  firstname: string;
  lastname: string;
  ci: string;
  phone: string;
  email: string;
};

export type CourseCollectionType = CollectionBasicType & {
  name: string;
  course: string;
  status?: 'Active' | 'Inactive',
}

export type StudentCollectionTye = CollectionBasicType & {
  firstname: string;
  lastname: string;
  ci: string;
  email: string;
  status?: 'Active' | 'Inactive',
  course: string;
}