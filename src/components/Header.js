import React from "react";

const Header = ({ handleDarkMode }) => {
  return (
    <div className="header">
      <h1>Quick-Notes...</h1>
      <button
        onClick={() => 
            handleDarkMode(
                (previousDarkMode) => !previousDarkMode
            )
        }
        className="mode-button"
      >
        Change mode
      </button>
    </div>
  );
};

export default Header;
