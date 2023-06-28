import './styles/LoginRight.css';
import MainTitle from './MainTitle';
import MainBtn from './MainBtn';
import Form from './Form';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../redux/userSlice/userSlice';

function LoginRight() {
  const { email } = useSelector(store => store.user)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logOut())
  } 

  const stylesP = {marginTop: '4px', fontSize: '1.2rem', color: 'grey'}

  return (
    <div className='login-right'>
      {
        email ? <MainTitle text='Welcome!' /> : <MainTitle text='Login' />
      }
      {
        !email && 
        <div>
          <p style={stylesP}>Datos - Email: ejemplo@gmail.com, Contraseña: 1234</p>
          <p style={stylesP}>(En local funciona con una llamada fetch a un json a través de la librería json-server)</p>
        </div>
      }
      {
        email ? <MainBtn text='Sign out' handleClick={handleLogout}/> : <Form />
      }
      
    </div>
  )
}

export default LoginRight