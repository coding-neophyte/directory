import { Redirect, Route } from 'react-router-dom'
import { useUser } from '../context/UserContext'

const PrivateRoute = ({ children, ...routerProps}) => {

    const { user } = useUser();

    return <Route {...routerProps} render={({ location }) => user ? (children) : <Redirect to={{ pathname: '/signin', state: { from: location }}} />} />
}

export default PrivateRoute;
