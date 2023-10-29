import { Link, Navigate, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Register = ({children}) => {
    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState('');
    const handleRegisterForm = e => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const name = form.get('name')
      const email = form.get('email')
      const password = form.get('password')

      console.log(name, email, password);

      if(password.length < 6){
          setRegisterError('Error: Password should be 6 characters long');
          return;
      }

      else if(!/^[!@#$%^&*()[\]{}|\\;:'"<>,.?/-_+=]+$/.test(password)) {
          setRegisterError('Error: Password should contain a special character.');
          return;
      }
      else if(!/[A-Z]/.test(password)){
          setRegisterError(' Error: Password should contain a uppercase character.')
          return;
      }


      
    
      createUser(email, password)
      .then(result => console.log(result.user),
      navigate('/')
      )
      .catch(error => {
          console.error(error)
          setRegisterError(error.message);
      });
      
  }
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-3xl text-center text-orange-500 font-bold ">
              Register
            </h1>


            <form onSubmit={handleRegisterForm} className="card-body">
           <div className="form-control">
                <label className="label">
                  <span className="label-text text-dark2 font-bold text-sm lg:text-xl">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered "
                  required
                />
              </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text text-dark2 font-bold text-sm lg:text-xl">Email</span>
               </label>
               <input
                 type="email"
                 name="email"
                 placeholder="Your email.."
                 className="input input-bordered "
                 required
               />
             </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text text-dark2 font-bold text-sm lg:text-xl">Password</span>
               </label>
               <input
                 type="password"
                 name="password"
                 placeholder="Your password.."
                 className="input input-bordered"
                 required
               />

               
           
             </div>
             <div className="form-control mt-3">
               <button className="btn bg-orange-500 font-bold">Register</button>
             </div>
           </form>

           {
                registerError && <p className='text-red text-center mb-2'>{registerError}</p>
            }
            <p className="text-center my-4">
              Already have an account!
              <Link to={"/login"}>
                <span className="text-orange-500 font-bold ml-1">Login Here</span>
              </Link>
            </p>
          
        </div>
      </div>
    </div>
    );
};

export default Register;

