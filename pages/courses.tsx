import { NextPageWithLayout } from '../src/shared/types/page';

import { getLayout } from '../src/shared/utils/get-layout';
import { Courses } from '../src/modules/courses/Courses';

export const CoursesView: NextPageWithLayout = () => (
  <Courses />
);

CoursesView.getLayout = getLayout

export default CoursesView;