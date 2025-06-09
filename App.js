import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from './AuthContext';
import Login from './Login';
import Home from './Home';

// This component will be rendered *inside* AuthProvider
const MainApp = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      {user ? <Home /> : <Login />}
    </div>
  );
};

// Wrap MainApp with AuthProvider so context is available
const App = () => (
  <AuthProvider>
    <MainApp />
  </AuthProvider>
);

export default App;
