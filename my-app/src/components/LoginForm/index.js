import {Component} from 'react'
import { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
class LoginForm extends Component {
    state = {
        username: '',
        password: '',
        showSubmitError: false,
        errorMsg: '',
    }
    LoginSuccess = (jwtToken) => {
        Cookies.set('jwt_token', jwtToken, {expires: 5})
        const {history} =  this.props
        history.replace('/Home')

    }
    LoginFailure = (errorMsg) => {
        this.setState({showSubmitError: true, errorMsg})
    }
    onChangeUsername = (event) => {
        this.setState({username: event.target.value})
    }
    onChangePassword = (event) => {
        this.setState({password: event.target.value})
    }
    
    onSubmitButton = async event => {
        event.preventDefault()
        const {username, password} = this.state
        const userDetails = {username, password}
        const url = 'https://apis.ccbp.in/login'
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
        }
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)
        if (response.ok === true) {
            this.LoginSuccess(data.jwt_token)
        }
        else {
            this.LoginFailure(data.error_msg)
        }

    }
    
    render() {
        const jwtToken =  Cookies.get('jwt_token')
        if (jwtToken !== undefined) {
           return  <Redirect to='/home' />
        }
        const {username, password, showSubmitError, errorMsg} = this.state
        return (
            <div>
                <form onSubmit={this.onSubmitButton}>
                    <input type='text' placeholder='enter username'  value={username} onChange={this.onChangeUsername}/>
                    <input type='password' placeholder='enter password' value={password} onChange={this.onChangePassword}/>
                    {showSubmitError && <p>{errorMsg}</p>}
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default LoginForm