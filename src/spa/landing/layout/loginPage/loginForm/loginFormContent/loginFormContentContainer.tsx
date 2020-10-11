// NOTE: This container is definitely doing WAY TOO MUCH in one single script / component. A
// refactor could definitely be used to make this more readable / digestible.

import * as React from 'react';
import { useHistory } from 'react-router';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import Form from 'forms/form/form';
import handleError from 'server/errors/handleError';
import { CREATE_USER_MUTATION, GET_CURRENT_USER_QUERY, LOGIN_USER_MUTATION } from 'schema/user';
import { FormProp } from 'types/formTypes';
import { useCurrentUserContext } from 'context/currentUserContext/currentUserContext';
import { useLoginContext } from 'context/loginContext/loginContext';
import LoginFormContentComponent from './loginFormContentComponent';
import './loginFormContent.less';

/* eslint-disable brace-style */
const LoginFormContentContainer: React.FC = () => {
  const history = useHistory();

  // ----- QUERIES & MUTATIONS ----- //

  const [createUser] = useMutation(CREATE_USER_MUTATION);
  const [getCurrentUserQuery, { called, data, loading }] = useLazyQuery(
    GET_CURRENT_USER_QUERY, { fetchPolicy: 'no-cache' },
  );
  const [loginUser] = useMutation(LOGIN_USER_MUTATION);

  // ----- STATE ----- //

  const { setAuthenticationStatus, setCurrentUser } = useCurrentUserContext();

  const {
    formStatus,
    setAlertMessage,
    setIsAuthenticationWaiting,
    setSignUpStatus,
  } = useLoginContext();

  // ----- HANDLERS ----- //

  // Function that gets invoked when the user clicks on the 'login' button
  const handleLogin = async (form: FormProp): Promise<void> => {
    const values = form.getFieldsValue();
    try {
      setIsAuthenticationWaiting(true);

      // try to login the user / auth the user to the backend
      await loginUser({
        variables: {
          email: values.emailOrUsername,
          password: values.password,
        },
      });

      // ask the backend if the user is now authenticated
      getCurrentUserQuery();

      setIsAuthenticationWaiting(false);
      history.push('/');
    } catch (error) {
      setIsAuthenticationWaiting(false);

      // If a 401 status is returned, notify the user that they have provided the incorrect creds
      const { status } = handleError(error);
      if (status === 401) {
        setAlertMessage('email or password is incorrect');
      }
    }
  };

  // Function that gets invoked when the user clicks on the 'signup' button in order to create a
  // user
  const handleSignUp = async (form: FormProp): Promise<void> => {
    const values = form.getFieldsValue();
    try {
      setIsAuthenticationWaiting(true);

      // try to create the new user with the backend
      await createUser({
        variables: {
          email: values.loginEmail,
          password: values.loginPassword,
          username: values.loginUsername,
        },
      });

      // ask the backend if the user is now authenticated
      getCurrentUserQuery();

      setIsAuthenticationWaiting(false);
    } catch (error) {
      setIsAuthenticationWaiting(false);

      // If a 400 status is returned, notify the user that their password is not strong enough
      const { message, status } = handleError(error);
      if (status === 400) {
        console.log('*************');
        console.log(message);
        console.log('*************');
        if (message === 'invalid username') {
          setSignUpStatus('invalid username');
        }
        if (message === 'duplicate username') {
          setSignUpStatus('duplicate username');
        }
        if (message === 'weak password') {
          setSignUpStatus('weak password');
        }
        if (message === 'duplicate email') {
          setSignUpStatus('duplicate email');
        }
      }
    }
  };

  // Function that gets invoked when the 'submit' button is invoked, whichever button that may be
  const handleSubmit = (form: FormProp): void => {
    // If the user has forgotten their creds, send them an email to have them reset their
    // creds when they click on the 'reset password' button
    if (formStatus === 'forgot') {
      console.log('forgot submit handler');
    }

    // if the user clicks login, try to log them in
    else if (formStatus === 'login') {
      handleLogin(form);
    }

    // if the user clicks 'sign up', register them to the db
    else if (formStatus === 'signUp') {
      handleSignUp(form);
    }

    // Throw an error for anything else
    else {
      throw new Error('Unexpected status');
    }
  };

  // ----- DATA HANDLING ----- //

  // After the user tries to login, if the back-end says they are authenticated, then update
  // their status on the front end as authenticated and push them towards the app
  if (called && !loading) {
    const { email, isAuthenticated, username } = data.getCurrentUser;
    if (isAuthenticated) {
      setCurrentUser({ email, username });
      setAuthenticationStatus(true);
    }

    // Note: the else block should never be reached because when attempting to login the user, the
    // server should either 1. successfully login the user, and thus they are authenticated,
    // or 2. return a 401 error, which is already handled in `handleLogin`. Thus, this block
    // should never be reached and should probably be thrown to an error reporting tool such
    // as sentry.
    else {
      throw new Error('Unable to authenticate');
    }
  }

  // ----- COMPONENT ----- //

  return (
    <Form onSubmit={handleSubmit} type="login">
      <LoginFormContentComponent />
    </Form>
  );
};

export default LoginFormContentContainer;
