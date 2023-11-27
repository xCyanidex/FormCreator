import TextInput from "../../Components/Inputs/TextInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
 import loginData from "../../Data/LoginCredentials"


export default function Login() {
  const navigate = useNavigate(); 


    const errorNotify = () => toast.error("Invalid username or password!");
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const formChange = (e) => {
   
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const matchingUser = loginData.find(
      (user) =>
        user.username === formData.userName &&
        user.password === formData.password
    );

    if (matchingUser) {

      if (matchingUser.role=="admin"){

        navigate(`/AdminDashboard?userId=${matchingUser.userId}`);
      }else if(matchingUser.role=="manager"){
    navigate(`/ManagerDashboard?userId=${matchingUser.userId}`);
      }else if(matchingUser.role=="user"){
    navigate(`/UserDashboard?userId=${matchingUser.userId}`);
      }
    } else {
      // Failed login
      errorNotify();

    }
  };
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <form action="" onSubmit={handleSubmit}>
          <div className=" space-y-5">
            <TextInput
              placeholder="Enter Username"
              label="Enter Username"
              name="userName"
              value={formData.userName}
              onChange={formChange}
              type="text"
            />
            <TextInput
              placeholder="Enter Password"
              label="Enter Password"
              name="password"
              value={formData.password}
              onChange={formChange}
              type="password"
            />
            <div className="flex align-items-center justify-center">
              <button className="btn btn-neutral">Login</button>
            </div>
          </div>
        </form>
        <ToastContainer/>
      </div>
    </>
  );
}
