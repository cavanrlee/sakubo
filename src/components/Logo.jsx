import React from "react";
import saKuboLogo from '/saKubo.svg';

const Logo = () => {
  return (
     <div className="card border-0 px-0 py-1">
          <div className="row">
               <div className="col-12 d-flex justify-center">
                    <img src={saKuboLogo} alt="saKubo" className='max-w-[55%]'/>
               </div>
          </div>
     </div>
  );
};

export default Logo;
