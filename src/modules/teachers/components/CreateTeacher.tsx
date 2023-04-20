import React, { useState } from 'react';

import { TeacherForm, TeacherFormType } from './TeacherForm';

type CreateTeacherProps = {
  open: boolean;
  onClose: () => void;
}

export const CreateTeacher: React.FC<CreateTeacherProps> = ({
  open,
  onClose,
}) => {
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (value:  TeacherFormType) => {
    setLoading(true);
  }

  return (
    <TeacherForm
      open={open}
      isLoading={isLoading}
      onSubmit={onSubmit}
      onCloseModal={onClose}
      modalTitle="Agregar profesor"
    />
  );
}
