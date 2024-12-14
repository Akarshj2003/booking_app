import React from 'react'
import AuthForm from './Auth-form'
import { sendUserAuthRequest } from '../../api-helpers/api-helpers';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/intex';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const nav =useNavigate();
  const dispatch =useDispatch();
  const onResReseaved = (data)=>{
    console.log(data);
    dispatch(userActions.login());
    localStorage.setItem("userId",data.id);
    nav("/");
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