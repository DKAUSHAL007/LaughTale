import { SignUp } from "@clerk/nextjs";
export default function Page(){
    return <SignUp appearance = {{
        elements:{
            card:'border-white rounded-lg transition bg-black',
            dividerLine:'bg-white',
            formButtonPrimary:"bg-purple-700 hover:bg-purple-600 text-white",
        }
    }} />
}