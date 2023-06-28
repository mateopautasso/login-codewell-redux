import MainBtn from './MainBtn';
import Text from './Text';
import TextTermsConditions from './TextTermsConditions';
import LabelForm from './LabelForm';
import InputText from './InputForm';
import { useState } from 'react';
import fetchGetReq from '../services/fetch';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/userSlice/userSlice';

function Form() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setChekbox] = useState(false);
  const dispatch = useDispatch()

  const handleSetEmail = (e) => {
      setEmail(e.currentTarget.value)
  }
  const handleSetPassword = (e) => {
    setPassword(e.currentTarget.value)
  }
  const handleCheckbox = (e) => {
    setChekbox(e.currentTarget.checked)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const dataDB = await fetchGetReq('http://localhost:3000/user');
    // const registeredUser = dataDB.find((user) => user.email === email);
    // const userDefault = {
    //   email: 'ejemplo@gmail.com',
    //   password: '1234'
    // }

    // if(registeredUser !== undefined && registeredUser.password === password && checkbox) {
    //   dispatch(logIn({
    //     email,
    //     password,
    //   }))
    // } else if(email === userDefault.email && password === userDefault.password && checkbox) {
    //   console.log(email)
    //   dispatch(logIn({
    //     email,
    //     password,
    //   }))
    // } else {
    //   alert('¡Campos incompletos o incorrectos!')
    // }

    // Adaptación para que funcione sin petición fetch
    const userDefault = {
      email: 'ejemplo@gmail.com',
      password: '1234'
    }

    if(email === userDefault.email && password === userDefault.password && checkbox) {
      console.log(email)
      dispatch(logIn({
        email,
        password,
      }))
    } else {
      alert('¡Campos incompletos o incorrectos!')
    }
  }

  return (
    <form action="" className='form'>
        <div style={{width: '100%'}}>
          <LabelForm forInput='email' text='Email'/>
          <InputText typeInput='text' nameInput='email' idInput='email' placeholder='john@example.com' handleChange={handleSetEmail}/>
        </div>
        <div style={{width: '100%'}}>
          <LabelForm forInput='password' text='Password'/>
          <InputText typeInput='password' nameInput='password' idInput='password' placeholder='********' handleChange={handleSetPassword}/>
        </div>
        <div style={{display: 'flex', gap: '8px', alignItems: 'flex-start', lineHeight: '20px'}}>
          <input style={{width: '20px' ,height: '20px'}} type="checkbox" name="terms-conditions" id="terms-conditions" onClick={handleCheckbox}/>
            <Text text='By creating an account, you agree to the Terms & Conditions '>
              <TextTermsConditions text='Terms & Conditions'/>
            </Text>
        </div>
        <MainBtn text='Login' handleClick={handleSubmit}/>
    </form>
  )
}

export default Form;