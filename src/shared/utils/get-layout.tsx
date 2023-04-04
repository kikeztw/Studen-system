import { ReactElement } from 'react';

import { Layout } from '../components/layout/Layout';

export const getLayout = (page: ReactElement): React.ReactNode =>{
  return (
    <Layout>
      {page}
    </Layout>
  )
}
