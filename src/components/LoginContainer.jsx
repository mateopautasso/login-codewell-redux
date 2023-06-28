import './styles/LoginContainer.css';
import LoginLeft from './LoginLeft';
import LoginRight from './LoginRight';

export default function LoginContainer() {
  return (
    <div className='login-container'>
        <LoginLeft />
        <LoginRight />
    </div>
  )
}
