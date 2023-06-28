import './App.css';
import store from './redux/store'
import LoginContainer from './components/LoginContainer';
import fetchReq from './services/fetch';
import { Provider } from 'react-redux';

function App() {
    fetchReq()
  return (
    <Provider store={store}>
      <div className='main-container'>
        <LoginContainer />
      </div>
    </Provider>
  )
}

export default App;