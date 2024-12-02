import { useState, useEffect } from "react";
import "./SignUp.module.css";
import { useRoutes } from "react-router-dom";
import Themeroutes from "../routes/Router";
import { Link, useNavigate,useParams } from 'react-router-dom'
function SignUp
() {
    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        type:"",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [type, setType] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate=useNavigate()// Initialize the navigation hook
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    
    const Test = () => {
        const routing = useRoutes(Themeroutes);
      
        return <div className="dark">{routing}</div>;
      
      
        
      };


  
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form behavior
        // Perform form validation and processing logic here
        // setFormErrors(validate(formValues));
        // setIsSubmit(true);
        
        // navigate("/starter"); // Navigate to the desired route (replace with your path
        navigate("/dashboard"); 
 
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors, formValues, isSubmit]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Those passwords didn’t match. Try again.";
        }
        return errors;
    };

    return (
        <>
            <div className="bgImg"></div>
            <div className="container">
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div className="ui message success">
                        Signed in successfully
                    </div>
                ) : (
                    console.log("Entered Details", formValues)
                )}

<form onSubmit={handleSubmit}>
    <h1>Sign Up</h1>
    <div className="ui divider"></div>
    <div className="ui form">
        <div className="field">
            <label>Username</label>
            <input
                type="text"
                name="username"
                placeholder="Choose a username"
                value={formValues.username}
                onChange={handleChange}
            />
        </div>
        <p>{formErrors.username}</p>
        <div className="field">
            <label>Email</label>
            <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
            />
        </div>
        <p>{formErrors.email}</p>
        <div className="field">
            <label>Password</label>
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
            />
        </div>
        <p>{formErrors.password}</p>
        <div className="field">
            <label>Confirm Password</label>
            <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formValues.confirmPassword}
                onChange={handleChange}
            />
        </div>
        <p>{formErrors.confirmPassword}</p>
        <div className="field">
            <label>Role</label>
            <select
                name="role"
                value={type}
                onChange={(e) => setType(e.target.value)} // Update the state
            >
                <option value="">Select a role</option>
                <option value="medecin">Medecin</option>
                <option value="patient">Patient</option>
                <option value="pharmacien">Pharmacien</option>
                <option value="super admin">Super Admin</option>
            </select>
        </div>
        <p>{formErrors.role}</p>
        <button className="fluid ui button blue">Submit</button>
    </div>
</form>

                <div className="text">
                    Already have an account? <span>Login</span>
                </div>
            </div>{" "}
        </>
    );
}

export default SignUp;
