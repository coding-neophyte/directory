import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';
import Home from './views/Home';
import SignIn from './components/SignIn';
import Profile from './views/Profile';
import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
import { UserProvider } from './context/UserContext';
import { ProfileProvider } from './context/ProfileContext';

import EditProfile from './components/EditProfile';
import Header from './components/Header';

export default function App() {
  return (
    <UserProvider>
      <ProfileProvider>
      <Router>
        <Header />
        <Switch>
            <Route exact path='/signin'>
                <SignIn />
            </Route>
            <Route exact path='/signup'>
                <SignUp />
            </Route>
            <Route exact path='/'>
                <Home />
            </Route>
            <PrivateRoute exact path='/profile'>
                <Profile  />
            </PrivateRoute>
            <PrivateRoute exact path='/profile/edit'>
                <EditProfile />
            </PrivateRoute>
        </Switch>
      </Router>
            </ProfileProvider>
      </UserProvider>
    )
}
