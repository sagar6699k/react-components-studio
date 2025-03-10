import Login from "@/pages/auth/Login";
import React from "react";

const AuthLayout: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen bg-gradient-to-r from-blue-200 to-gray-950">
      <div className="w-4/5 h-4/5 bg-white rounded-2xl shadow-md flex">
        <div className="w-3/5 flex flex-col justify-center gap-4 rounded-tl-2xl rounded-bl-2xl bg-gradient-to-r from-gray-800 to-gray-500 p-16">
          <h1 className="text-white text-6xl font-bold text-left">Welcome,</h1>
          <p className="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            nihil, ipsum minus at, est, ex iste fuga tempore magnam delectus
            alias? Facere, dolorum hic est dolor molestias odit eveniet debitis
            explicabo inventore placeat, ea quo suscipit saepe laborum libero
            quae ullam iusto rerum veritatis excepturi exercitationem nemo, ad
            tempore. Voluptatum.
          </p>
        </div>
        <div className="w-2/5 flex justify-center items-center">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
