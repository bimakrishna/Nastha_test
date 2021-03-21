import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard'
import Addevent from './pages/Addevent'
import Navbar from './components/Navbar'
import DetailEvent from './pages/DetailEvent'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path exact ="/">
            <HomePage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/addevent">
            <Addevent />
          </Route>
          <Route path="/event/:id">
            <DetailEvent />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App