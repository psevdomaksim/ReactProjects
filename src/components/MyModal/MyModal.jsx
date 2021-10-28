import React from "react";

const MyModal = ({ visible, setVisible, children }) => {

  return(
  <>
      <div className={visible?"modal open":"modal"}>
       <div className="modal-content ">
       <i className="material-icons right"
               onClick={()=>setVisible(false)}>close
               </i>
           <div className="modal-body">{children} </div>
       </div> 

     </div>
     <div className={visible?"modal-overlay open-overlay":"modal-overlay"}></div>
     </>
  );
};

export default MyModal;
