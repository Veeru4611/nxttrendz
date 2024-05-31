import Cookies from 'js-cookie'
import { withRouter } from 'react-router-dom'
const Header = (props) => {
    
    const Logout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')

    }
    return (
        <div>
            <button onClick={Logout}>Logout</button>
        </div>
    )

}
export default withRouter(Header)