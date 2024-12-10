import React from "react";
import AuthForm from "../Auth/Auth-form";
import { sendAdminAuthRequest } from "../../api-helpers/api-helpers";
import { useDispatch } from "react-redux";
import { adminActions } from "../../store/intex";

const Admin = ()=>{
    const onResReseaved = (data)=>{
        console.log(data);
        dispatch(adminActions.login());
        localStorage.setItem("adminId",data.id);
        localStorage.setItem("token",data.token);
      }
    const dispatch =useDispatch();
    const getData=(data)=>{
        console.log("admin",data);
        sendAdminAuthRequest(data.Inputs)
        .then(onResReseaved)
        .catch(err=> console.log(err));
    }
    return (
    <div>
        <AuthForm onSubmit={getData} isAdmin={true}/>
    </div>
    );
};

export default Admin;