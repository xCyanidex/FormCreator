import TextInput from "../../Components/Inputs/TextInput";
import { useState } from "react";

 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
 import loginData from "../../Data/LoginCredentials"

export default function Login() {

    const notify = () => toast("Username and Password is Correct!");
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
    // Check if the entered username and password match any object in the loginData array
    const matchingUser = loginData.find(
      (user) =>
        user.username === formData.userName &&
        user.password === formData.password
    );

    if (matchingUser) {
      // Successful login
      notify();
      console.log("User Role:", matchingUser.role);
      // Additional actions, e.g., set user role, redirect, etc.
    } else {
      // Failed login
      errorNotify();
      console.log("Invalid username or password");
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
