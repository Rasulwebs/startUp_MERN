import React from 'react';
import "./Update.scss"
import { useState } from 'react';

const Update = () => {
    function handlersubmit(e) {
        e.preventDefault();

        alert("SMS yuborildi")
        setData(true)
    }
    const [data , setData] = useState(false)
    return (
      <>
        <div className="update-container">
          <form className="update" onSubmit={handlersubmit}>
            <h2 className="text-center text-white">UPDATE</h2>
            <input type="email" placeholder="Enter you email"  />
            
                        {
                            data? <input type="password" placeholder="Enter verify Code" /> : ""
              }
 
            <input type={"submit"} value="Send"/>
          </form>
        </div>
      </>
    );
};

export default Update;