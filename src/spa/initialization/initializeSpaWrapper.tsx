import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import SpaFallback from 'fallbacks/spaFallback/spaFallback';
import { GET_CURRENT_USER_QUERY } from 'schema/user';
import { useCurrentUserContext } from 'context/currentUserContext/currentUserContext';

// This wrapper is responsible for initializing our SPA. Once all fetches, actions, etc have
// been performed, then the actual SPA can be rendered. In the meantime, we will load a spinner
// for the entire page. At the moment, the wrapper does the following on initialization:
//   * Performs a backend query to determine if the current user has already been authenticated
//     / has an existing session or not.
// Note: We are not using Suspense here because we cannot have transitions between fallbacks.

const initializeSpaWrapper = (WrappedComponent: React.FC): React.FC => {
  const WrappedSpa: React.FC = () => {
    const { called, data, loading } = useQuery(GET_CURRENT_USER_QUERY);

    const [isInitializationComplete, setIsInitializationComplete] = React.useState(false);

    const { isAuthenticated, setAuthenticationStatus, setCurrentUser } = useCurrentUserContext();

    if (called && !loading && !isInitializationComplete) {
      const { email, isAuthenticated: isUserAlreadyAuthenticated, username } = data.getCurrentUser;

      if (isUserAlreadyAuthenticated) {
        setCurrentUser({ email, username });
        setAuthenticationStatus(true);
      } else {
        setAuthenticationStatus(false);
      }

      setIsInitializationComplete(true);
    }

    return (
      <>
        {
          (isInitializationComplete && isAuthenticated !== null) && (
            <React.Suspense fallback={<div />}>
              <WrappedComponent />
            </React.Suspense>
          )
        }
        <SpaFallback />
      </>
    );
  };

  return WrappedSpa;
};

export default initializeSpaWrapper;
