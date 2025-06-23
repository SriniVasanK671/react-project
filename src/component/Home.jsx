import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/ListUser"); 
  };

  return (
    <div >
      <h1 >Welcome to the Home Page</h1>
      <p className="text-lg text-gray-700 mb-6">
        This is a basic home component using React. Customize it as you like!
      </p>
      <button 
        onClick={handleClick} 
        
      >
        Next
      </button>
    </div>
  );
}

export default Home;
