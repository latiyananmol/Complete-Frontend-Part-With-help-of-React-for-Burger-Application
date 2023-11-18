import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="login">
      <motion.button
        initial={{
          y: "-100vh",
        }}
        animate={{
          y: "0",
        }}
      >
        Login with Google
        <FcGoogle />
      </motion.button>
    </div>
  );
};

export default Login;
