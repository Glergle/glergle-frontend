import React, {useContext} from 'react';
import { AuthContext } from '../AuthContext';

const Login = () => {
  const [state, setState] = useContext(AuthContext);
  return(
    <div>
      <h1>Login</h1>
      <button onClick={() => setState(state => ({...state, isAuthenticated: state.isAuthenticated === null ? true : !state.isAuthenticated}))}>
        {state.isAuthenticated ? 'Logout' : 'Login'} here
      </button>
    </div>
  )
}

export default Login;