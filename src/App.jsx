import './App.css';
import store from './redux/store'
import LoginContainer from './components/LoginContainer';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className='main-container'>
        <LoginContainer />
      </div>
    </Provider>
  )
}

export default App;