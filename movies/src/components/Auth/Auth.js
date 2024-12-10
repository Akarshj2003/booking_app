import React from 'react'
import AuthForm from './Auth-form'
import { sendUserAuthRequest } from '../../api-helpers/api-helpers';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/intex';

const Auth = () => {
  const dispatch =useDispatch();
  const onResReseaved = (data)=>{
    console.log(data);
    dispatch(userActions.login());
    localStorage.setItem("userId",data.id);
  }
  const getData=(data)=>{
    console.log("auth:",data);
    sendUserAuthRequest(data.Inputs,data.signup)
    .then(onResReseaved)
    .catch(err=> console.log(err));
  }
  return (
   <div>
    <AuthForm onSubmit={getData} isAdmin={false}/>
    </div>
  )
}

export default Auth