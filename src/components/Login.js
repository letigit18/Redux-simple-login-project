import './style.css';
const Login = ()=>{
return(
    <div className="container">
        <h1>Login here</h1>
        <label htmlFor='username' className='form-control'>Username</label>
        <input type="text" name='username' className='form-control' id="username" placeholder='Enter your user name' />
        <label htmlFor='password' className="form-control">Password</label>
        <input type="text" name='password' className="form-control" id="password" placeholder='Enter password' />
        <button type='submit' className='btn'>Login</button>

    </div>
)
}

export default Login;