import { NextPageWithLayout } from '../src/shared/types/page';
import TextField from '@mui/material/TextField';

import { getLayout } from '../src/shared/utils/get-layout';
import { Student } from '../src/modules/student/Student';

export const StudenView: NextPageWithLayout = () => (
  <Student />
)

StudenView.getLayout = getLayout

export default StudenView;