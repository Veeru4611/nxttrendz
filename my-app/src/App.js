import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
const App = () => (
    <BrowserRouter>
         <Switch>
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/Home' component={Home} />
         </Switch>
    </BrowserRouter>
)
export default App