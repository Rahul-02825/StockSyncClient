import React from 'react';

const Login = () => {

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");



    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Email:", email);
    //     console.log("Password:", password);
    //     // Add your login logic here
    //   };



  return (
    <div className="flex min-h-screen bg-purple-300 items-center text-center justify-center">
       
      <div className="rounded-lg shadow-lg relative bg-white p-16 w-[400px] h-[200px]">

        <h2 className="font-bold text-2xl">Login to continue</h2>
        {/* Buttons at the middle of top-left and top-right corners */}
        <button className="text-xl rounded-lg ml-4 absolute top-0 left-2 translate-y-1/2 bg-purple-300 p-2">
          Supplier
        </button>
        <button className="text-xl rounded-lg mr-4 absolute top-0 right-2 translate-y-1/2 bg-purple-300 p-2">
          Consumer
        </button>


        {/* <form>
          
          <div className="flex items-center">
            <FaEnvelope className="text-gray-600 mr-2 text-xl" />
            <input type="email" placeholder='Enter your mail' className="rounded-lg shadow lg px-5 py-2" />
          </div>

          <div className="flex items-center">
            <FaLock className="text-gray-600 mr-2 text-xl" />
            <input type="password" placeholder='Enter the password' className="rounded-lg shadow lg px-5 py-2" />
          </div>
          
          <div className="items-center">
            <button className="bg-purple-400 text-white px-8 py-4 hover:bg-purple-700"> 
                    Submit
            </button>

          </div>

        </form> */}
      </div>
    </div>
  );
};

export default Login;


// import React, { useState } from 'react';
// import { FaEnvelope, FaLock } from "react-icons/fa";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Email:", email);
//     console.log("Password:", password);
//     // Add your login logic here
//   };

//   return (
//     <div className="flex min-h-screen bg-purple-300 items-center justify-center">
//       <div className="rounded-lg shadow-lg relative bg-white p-8 w-[400px]">
//         {/* Buttons at the middle of top-left and top-right corners */}
//         <button className="absolute top-2 left-2 bg-purple-300 p-2 rounded-lg">
//           Supplier
//         </button>
//         <button className="absolute top-2 right-2 bg-purple-300 p-2 rounded-lg">
//           Consumer
//         </button>

//         {/* Login Form */}
//         <h2 className="text-center text-xl font-bold mb-6">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="flex items-center mb-4">
//             <FaEnvelope className="text-gray-600 mr-2 text-xl" />
//             <div className="flex-grow">
//               <label className="text-lg font-medium">Email</label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-lg"
//                 required
//               />
//             </div>
//           </div>

//           <div className="flex items-center mb-4">
//             <FaLock className="text-gray-600 mr-2 text-xl" />
//             <div className="flex-grow">
//               <label className="text-lg font-medium">Password</label>
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-lg"
//                 required
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-purple-500 text-white py-2 rounded-lg mt-4 hover:bg-purple-600"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
