import { NextPageWithLayout } from '../src/shared/types/page';

import { getLayout } from '../src/shared/utils/get-layout';
import { Teachers } from '../src/modules/teachers/Teachers';

export const TeacherView: NextPageWithLayout = () => (
  <Teachers />
)

TeacherView.getLayout = getLayout

export default TeacherView;