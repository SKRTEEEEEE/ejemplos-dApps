"use client"

import { useState } from "react";

// import { useState } from 'react'

// export default function ButtonPopUpInfo() {
//   const [showPopup, setShowPopup] = useState(false)

//   return (
//     <>
//       <button onClick={() => setShowPopup(true)}>
//         Click me
//       </button>

//       {showPopup && <Popup onClose={() => setShowPopup(false)} />}
//     </>
//   )
// }

// function Popup({ onClose }) {
//   return (
//     <div className="popup">
//       <div>Popup content here</div>
//       <button onClick={onClose}>Close</button> 
//     </div>
//   )
// }


const Popup = ({ id, onClose }) => {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
        }}
        onClick={onClose}
      >
        <div style={{
            display: 'flex',
            height: "80%",
            width: "80%",
            background: "white",
            borderRadius: "10px",
            padding: "20px",
            flexDirection: "column",
            
        }} className="">
            <ul style={{
                height: "40vw",
                
            }}>
                <li>id: {id}</li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            </div>
      </div>
    );
  };

  const ButtonPopUpInfo = ({ id, children }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    const openPopup = () => {
      setIsPopupOpen(true);
    };
  
    const closePopup = () => {
      setIsPopupOpen(false);
    };
  
    return (
      <div>
        <div  className="border-4 rounded-md border-secondary/20 hover:bg-white/20 hover:border-secondary/40 p-4" onClick={openPopup}>{children}</div>
        {isPopupOpen && <Popup id={id} onClose={closePopup} />}
      </div>
    );
  };
  
  export default ButtonPopUpInfo;