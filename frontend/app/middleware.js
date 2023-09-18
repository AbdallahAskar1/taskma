import { isAuthenticated } from '@/utils/isAuth';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const withAuth = WrappedComponent => {
  return (props) => {
    const Router = useRouter();
    const auth = isAuthenticated(); // Fetch user data from context, localStorage, or an API call

    useEffect(() => {
      if (!auth) {
        Router.replace('/login');
      }
    }, [auth]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
