import axios from 'axios';
export const getAllMovies = async() => {
   const res = await axios.get("/movie")
   .catch((err) => console.log(err));
   if(res.status!==200){
    return console.log("No Data");
   }
   const data = await res.data;
   return data;
};

export const sendUserAuthRequest =async (data,signup)=>{
   const res=await axios
   .post(`/user/${signup ? "signup" : "login"}`,{
      name:signup ? data.name : "",
      email:data.email,
      password:data.password,
   })
   .catch((err) => console.log(err));
   if (res.status!==200 && res.status!==201){
      console.log("Unexpected Error");
   }
   const resData =await res.data;
   return resData;
}
export const sendAdminAuthRequest =async (data)=>{
   const res=await axios
   .post("/admin/login",{
      email:data.email,
      password:data.password,
   })
   .catch((err) => console.log(err));

   if (res.status!==200 ){
      console.log("Unexpected Error");
   }
   const resData =await res.data;
   return resData;
}

export const getMovieDetails = async (id) => {
 const res =await axios.get(`/movie/${id}`).catch((err)=>console.log(err));
 if (res.status!==200 ){
   return console.log("Unexpected Error");
}
const resData =await res.data;
return resData;
};
export const newBooking = async (data) => {
   const res =await axios.post(`/booking/`,{
      movie:data.movie,
      seatNumber:data.seatNumber,
      date:data.date,
      user:localStorage.getItem("userId"),
   }).catch((err)=>console.log(err));
   if (res.status!==201 ){
     return console.log("Unexpected Error");
  }
  const resData =await res.data;
  return resData;
  };

  export const getUserBookings = async () => {
   const id =localStorage.getItem("userId");
   const res =await axios
   .get(`/user/bookings/${id}`)
   .catch((err)=>console.log(err));
   if (res.status!==200 ){
     return console.log("Unexpected Error");
  }
  const resData =await res.data;
  return resData;
  };

export const delBooking =async (id)=>{
   const res=await axios.delete(`/booking/${id}`).catch(err=>console.log(err));
   if(res.status!==200){
      return console.log("unexprted Error");
   }
   const resData =await res.data;
   return resData;
};

export const addMovie =async (data)=>{
   const res=await axios.post(`/movie`,{
      title:data.title,
      description:data.description,
      actors: data.actors,
      posterUrl: data.posterUrl,
      releaseDate:data.releaseDate ,
      featured:data.featured,
      admin:localStorage.getItem("adminId"),
   },
   {
      headers:{
         Authorization:`Bearer ${localStorage.getItem("token")}`
      }
   }
   ).catch(err=>console.log(err));
   if(res.status!==201){
      return console.log("unexprted Error");
   }
   const resData =await res.data;
   return resData;
};

export const getadmin = async () => {
   const id =localStorage.getItem("adminId");
   const res =await axios
   .get(`/admin/${id}`)
   .catch((err)=>console.log(err));
   if (res.status!==200 ){
     return console.log("Unexpected Error");
  }
  const resData =await res.data;
  return resData;
  };