import Header from '../Header'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
const Home = () => {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
        return <Redirect to={'/login'} />
    }
    return (
        <>
        <Header />
        <div>
            <h1>welcome to the new world</h1>
            <p>on the way to another page</p>
        </div>
        </>
    )
}
export default Home