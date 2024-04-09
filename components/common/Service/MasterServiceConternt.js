import React from "react";

const MasterServiceContent = ({
  link,
  title,
  service,
  btn,
  marijuana,
  lastChild,
  color,
}) => {
  console.log({color})
  return (
    
    <div
      className={`${!marijuana ? "media" : ""} ${
        lastChild ? "border-0 m-0" : ""
      }`}>
    <div className="service2">
      <div 
      // dangerouslySetInnerHTML={{ __html: link }}
       className="service-svg" style={{backgroundColor: color}}>
       <i className={link} style={{fontSize:"40px", color:"white", marginTop:"13px",}}></i>
       </div>
      </div>
      <div className="media-body">
        <h4>{title}</h4>
        <p>{service}</p>
        <h5 style={{marginTop:"30px", textAlign:"end"}}>
          <a href="#">
          {btn}
          <i class="fa fa-arrow-circle-right" style={{marginLeft: "10px"}}></i>
          </a>
          </h5>
      </div>
    </div>
  );
};

export default MasterServiceContent;
