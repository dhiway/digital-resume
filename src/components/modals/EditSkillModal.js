import React, { useState } from "react";
import "./modal.css";

const EditSkillModal = (props) => {
  const [valueArr, setValueArr] = useState('');

  const EditCredentials = () => {
    if (valueArr!==''){
      try{
        JSON.parse(valueArr)
        props.setCredentialArr(arr => [...arr,JSON.parse(valueArr)]);
        props.setVisiblity(false)
      }catch{
        document.getElementById('modal-textarea').value = ''
        document.getElementById('modal-textarea').placeholder = 'Please input a json'
      }
    }
  };
  return (
    <div className="modal-bg">
      <div className="modal-center">
        <span className="modal-close" onClick={() => props.setVisiblity(false)}>
          X
        </span>
        <h6>{props.title}</h6>

        <div className="modal-form">
          <textarea
            id="modal-textarea"
            className="modal-textbox"
            type="text"
            placeholder="Copy your VC here..."
            onChange={(e) => setValueArr(e.target.value)}
            onKeyDown={e=>{
              if(e.code==='Enter'){
                EditCredentials()
              }
            }}
          />
          <button onClick={EditCredentials} className="modal-submit">Add</button>
        </div>
      </div>
    </div>
  );
};

export default EditSkillModal;
