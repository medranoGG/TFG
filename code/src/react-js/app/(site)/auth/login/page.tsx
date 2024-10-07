import Login from "@/components/Users/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page - Solid SaaS Boilerplate",
  description: "This is Login page for Startup Pro",
  // other metadata
};

const SigninPage = () => {
  return (
      <>
        <Login />
      </>
  );
};

export default SigninPage;
