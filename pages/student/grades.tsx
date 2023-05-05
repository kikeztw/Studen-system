import { NextPageWithLayout } from '../../src/shared/types/page';
import TextField from '@mui/material/TextField';

import { getLayout } from '../../src/shared/utils/get-layout';
import { Grades } from '../../src/modules/grades/Grades';

export const GradesView: NextPageWithLayout = () => (
  <Grades />
)

GradesView.getLayout = getLayout

export default GradesView;