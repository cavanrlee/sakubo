import React from "react";
import saKuboLogo from '/saKubo.svg';

const Logo = () => {
  return (
     <div className="card border-0 p-0">
          <div className="row">
               <div className="col-12 d-flex justify-center">
                    <img src={saKuboLogo} alt="saKubo" className='max-w-75'/>
               </div>
          </div>
     </div>
  );
};

export default Logo;
