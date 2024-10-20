import React from "react";
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";

const Header = () => {
  return (
    
     <div className="header-holder">
       <header className="container">
        <Logo className="logo" />
        <h1 className="title">
          Todo List Application{" "}
        </h1>
        <ThemeToggler />
      </header>
     </div>
  
  );
};

export default Header;
