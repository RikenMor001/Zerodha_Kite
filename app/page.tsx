import { ChangeEvent } from "react"


export default function home(){
  return <div className="flex justify-center items-center bg-black min-h-screen text-white">
    <div className="rounded-lg shadow-lg w-96 bg-gray-900">
      <div className="flex flex-col justify-center items-center font-lightweight text-xl">
        <div>
          //kite symbol
        </div>
          Login to kite
          <div>

          </div>
      </div>
    </div>
  </div>
}

interface LoginProps{
  placeholder: string
  type: string  
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function Input({ placeholder, type, onChange}: LoginProps){
  return <div>

  </div>
}


// export default function Login() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black text-white">
//       <div className="w-96 bg-gray-800 p-8 rounded-lg shadow-lg">
//         <div className="flex flex-col items-center mb-6">
//           <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-xl font-bold">
//             RC
//           </div>
//           <p className="mt-4 text-lg">HPD412</p>
//           <a href="#" className="text-blue-400 text-sm mt-2 hover:underline">
//             Change user
//           </a>
//         </div>
//         <form>
//           <div className="mb-4">
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
//           >
//             Login
//           </button>
//         </form>
//         <div className="text-center mt-4">
//           <a href="#" className="text-gray-400 text-sm hover:underline">
//             Forgot user ID or password?
//           </a>
//         </div>
//         <div className="mt-6 text-center text-gray-400">
//           <p className="text-sm">
//             Don't have an account?{" "}
//             <a href="#" className="text-blue-400 hover:underline">
//               Signup now!
//             </a>
//           </p>
//         </div>
//         <div className="mt-6 text-center text-gray-500 text-xs">
//           Zerodha Broking Limited: Member of NSE, BSE - SEBI Reg. no. INZ000031633, CDSL - SEBI Reg. no. IN-DP-431-2019 | Zerodha Commodities Pvt. Ltd.: MCX - SEBI Reg. no. INZ000038238 | Smart Online Dispute Resolution | SEBI SCORES
//         </div>
//       </div>
//     </div>
//   );
// }
