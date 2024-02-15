import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { ModalContextApi } from "../../context/ModalContext";
import "./modal.css"

// ---making login comonent outside root
//======= createPortal to create element outside root hierachy========
// this ---createPortal(element,target that html element)
const Modal = ({ children }) => {

    let {toggle,handleToggle}=useContext(ModalContextApi);

  return createPortal(
    <>
      <section id="modal-container">
           <div className="btn-holder">
               <button onClick={handleToggle} className="modal-btn">{toggle?"close":"open"}</button>
            </div>
            {
             toggle?<>{children}</>:""
          }
        </section>
    </>,
    document.getElementById("modal")
  );
  //--- see in index.html file there <div id="modal"></div>
};

export default Modal;
