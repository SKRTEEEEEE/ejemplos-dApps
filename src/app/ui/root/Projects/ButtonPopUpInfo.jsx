"use client"

import { dataProjects } from "@/const/const";
import { useState } from "react";
import style from "./ButtonPop.module.css"


const Popup = ({ id, onClose }) => {
  const data = dataProjects.find((item) => item.id === id)
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
        <div  className={style.main}>
            <section className={style.first}>
              <h2 className="text-secondary md:text-5xl text-4xl font-bold my-2">{data?.title}</h2>
              <p>{data?.description}</p>
              <h3 className="text-secondary text-2xl font-bold my-2">Casos de uso</h3>
              <ul className={style.second}>
                {data?.usos?.map((uso, index) => (
    <li className="my-2" key={index}>{uso}</li>
  ))}
            </ul>
            </section>
            <section className={style.second}>
              <h3 className="text-secondary text-2xl font-bold">Instrucciones de uso</h3>
              <p className="my-2 text-xs"><i>Para aprender a interactuar con la blockchain ves a la sección: Aprender sobre blockchain</i></p>
              <ul className={style.instrucciones}>
                {data?.instrucciones?.map((instruccion, index) => (
    <li className="text-xs md:text-md" key={index}>{instruccion}</li>
  ))}
              </ul>
              
            </section>
           
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
        <div  className="border-4 rounded-md text-sm xl:text-2xl border-secondary/20 hover:bg-white/20 hover:border-secondary/40 p-4" onClick={openPopup}>{children}</div>
        {isPopupOpen && <Popup id={id} onClose={closePopup} />}
      </div>
    );
  };
  
  export default ButtonPopUpInfo;