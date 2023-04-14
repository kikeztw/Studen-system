import { NextPageWithLayout } from '../src/shared/types/page';

import { SignIn } from '../src/modules/signin/SignIn';

export const SignInView: NextPageWithLayout = () => {
  return (
    <SignIn />
  );
}

export default SignInView;