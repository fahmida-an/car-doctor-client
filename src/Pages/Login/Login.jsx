import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
const Login = () => {

  const {logInUser} = useContext(AuthContext);

const navigate = useNavigate();
// const location = useLocation();

const handleLoginForm = e =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
    logInUser(email, password)
    .then(result => 
      console.log(result),
      navigate( '/')
    )
    .catch((error) =>
    console.log(error)
    )
  

}
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-3xl text-center text-orange-500 font-bold ">
              Login
            </h1>
            <form onSubmit={handleLoginForm} className="card-body">
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
                  <span className="label-text  font-bold text-sm lg:text-xl">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your password.."
                  className="input input-bordered "
                  required
                />
                <label className="label mt-2">
                  <a href="#" className="label-text-alt  link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-orange-500 font-bold ">Login</button>
              </div>
            </form>
            <p className="text-center my-4">
              New to here!
              <Link to={"/signup"}>
                <span className="text-orange-500 font-bold ml-1">Register</span>
              </Link>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
