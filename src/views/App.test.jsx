import App from "../App";
import { render } from '@testing-library/react'
import { UserProvider } from "../context/UserContext";
import { ProfileProvider} from '../context/ProfileContext'
import { MemoryRouter } from 'react-router-dom'

jest.mock('../context/UserContext')
jest.mock('../context/ProfileContext')
jest.mock('../services/users')
jest.mock('../services/profiles')

test('redner app and components', () => {
    const { container } = render(
        <UserProvider>
            <ProfileProvider>
    <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter></ProfileProvider></UserProvider>)





    expect(container).toMatchSnapshot();

})
