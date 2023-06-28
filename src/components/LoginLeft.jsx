import './styles/LoginLeft.css';
import img from '../assets/iPhone Mockup.png';
import MainTitle from './MainTitle';
import Text from './Text';

function LoginLeft() {
  const stylesImg = {
    position: 'absolute',
    width: '90%',
    minHeight: '550px',
    bottom: '0',
    left: '5%'
  }
  return (
    <div className='login-left'>
      <div className='title-container'>
        <MainTitle text='Gradie' color='white'/>
        <Text text='Beautiful gradients in seconds' color='lightblue'/>
      </div>
      <img style={stylesImg} src={img} alt="" />
    </div>
  )
}

export default LoginLeft