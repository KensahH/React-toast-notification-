import React from "react";
import "./style.css"
import{useState} from "react";
export default function App() {
const[infoToast, setinfoToast] = useState(false)
const[successToast, setsuccessToast] = useState(false)
const[warningToast, setwarningToast] = useState(false)
const[errorToast, seterrorToast] = useState(false)

const handleClick=()=>{
  setinfoToast(!infoToast) 
}
const Close=()=>{
  setinfoToast(false);
}

const handleClickSuccess=()=>{
  setsuccessToast(!successToast)
}
const  closeSuccess =()=>{
  setsuccessToast(false)
}
const handleClickWarning=()=>{
  setwarningToast(!warningToast)
}
const closeWarning=()=>{
  setwarningToast(false)
}

const handleClickError=()=>{
seterrorToast(!errorToast)
}
const closeError=()=>{
seterrorToast(false)
}
  return (
    <div>
      <div className="toast">
        {infoToast?
        <div className="infoToast">
          <h2 className="info">Info</h2>
          <p className="infoTime"> 11mins ago</p>
          <div onClick={Close}className="infoMark">&times;</div>
          <p className="infoMessage"> Hello, world! This is an info toast messsage.</p> 
            </div>:""}
            {successToast?
<div className="successToast">
  <h2 className="success"> success</h2>
<p className="successTime"> 11mins ago</p>
<div onClick={closeSuccess} className="successMark">&times;</div>
<p className="successMessage"> Hello, world! This is a success toast message</p>

</div>:""}
{warningToast?
<div className="warningToast">
  <h2 className="warning"> warning</h2>
  <p className="warningTime"> 11mins ago</p>
  <div onClick={closeWarning}className="warningMark">&times;</div>
  <p className="warningMessage"> Hello, world! This is a success toast message</p>

</div>:""}

{errorToast?
<div className="errorToast">
  <h2 className="error">error</h2>
  <p className="errorTime"> 11mins ago</p>
  <div onClick={closeError}className="errorMark">&times;</div>
  <p className="errorMessage"> Hello, world ! This is an error toast message</p>


</div>:""}






      </div>
      <button  onClick={handleClick}className="infoBtn">Info</button>
      <button onClick={handleClickSuccess} className="successBtn">Success</button>
      <button onClick={handleClickWarning} className="warningBtn">Warning</button>
      <button onClick={handleClickError} className="errorBtn">Error</button>
    </div>
  );
}
