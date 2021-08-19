import {
    Route,
    Redirect
} from 'react-router-dom';

export function LoginRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() =>
        localStorage.accessToken ? (
          <>
        
            {children}
          </>
        ):
        (
          <Redirect
            to={{
              pathname: '/login',
              // state: { from: location }
            }}
          />
        )
      }
    ></Route>
    
  );
}
