import Header from "./Header"

const Login = () => {
  return (
    <div>
        <Header/>
        <div>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
                alt="logo"
            />
        </div>
        <form className="">
            <input type="text" placeholder="EmailAddress" className="p-2 m-2" />
            <input type="password" placeholder="EmailAddress" className="p-2 m-2" />
            <button className="p-4 m-4">Sign In</button>
        </form>
    </div>
  )
}

export default Login