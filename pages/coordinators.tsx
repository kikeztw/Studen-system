import { NextPageWithLayout } from '../src/shared/types/page';


import { getLayout } from '../src/shared/utils/get-layout';
import { CoordinatorsView } from '../src/modules/coordinators/CoordinatorsView';

export const TeacherView: NextPageWithLayout = () => (
  <CoordinatorsView />
);

TeacherView.getLayout = getLayout

export default TeacherView;