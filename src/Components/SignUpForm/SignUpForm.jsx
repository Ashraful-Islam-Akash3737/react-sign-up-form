import { useState } from "react";


function SignUpForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    // const [user, setUser] = useState({});


    const handleSignUp = (e) => {
        e.preventDefault();
        if (!isChecked) {
            return;
        }
        // const user = {
        //     name: name,
        //     email: email,
        //     password: password,
        //     confirmPassword: confirmPassword

        // }
        setIsSignUp(true);

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-0 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-4 bg-white p-8 rounded-lg shadow-md">
                <div>
                    <h2 className="text-center text-3xl font-bold text-gray-800">Sign Up</h2>
                </div>
                <form  onSubmit={(e) => handleSignUp(e)}  className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm space-y-4 text-start text-xl font-semibold">
                        <div className="">
                            <label htmlFor="username" className="sr-only">Username</label>Username:
                            <input onChange={(e) => setName(e.target.value)} id="username" name="username" type="text" autoComplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" />
                        </div>
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>Email address:
                            <input onChange={(e) => setEmail(e.target.value)} id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>Password:
                            <input onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                        </div>
                        <div>
                            <label htmlFor="password-confirm" className="sr-only">Confirm Password</label>Confirm Password:
                            <input onChange={(e) => setConfirmPassword(e.target.value)} id="password-confirm" name="password-confirm" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" />
                        </div>
                        <input onChange={(e)=>setIsChecked(e.target.checked)} type="checkbox" required name="" id="" /> <span  className="text-sm font-medium mr-2" >DO you agree with our terms nd condition?</span>
                    </div>

                    

                    <div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
            {
                isSignUp && isChecked && <div className="text-white fixed top-0 flex justify-center items-center h-screen w-full bg-purple-700">
                    <div className="w-1/3 h-2/3 rounded bg-purple-300 text-center">
                        <h1 className="text-2xl font-bold text-center my-4">You asr successfully submitted the form.</h1>
                        <div className="text-xl bg-black w-11/12 p-4 rounded mx-auto  font-semibold text-center my-2">
                            UserName: {name} <br />
                            Email: {email} <br />
                            Password: {password} <br />
                            Confirm Password: {confirmPassword}
                        </div>
                    </div>
                </div>
            }

        </div>
    );
}

export default SignUpForm;
