import React from "react";

const Dropdown = ({title,options,func}) => {
  return (
    <div className="wrapper font-semibold text-xl" >
      <select defaultValue='0'  className="custom-select" onChange={func} >
        <option className="select" value="0" disabled>
          {title}
        </option>
        {options.map((o,i)=>
            <option key={i} value={o}>{o.toUpperCase()}</option>
        )}
      </select>
    </div>
  );
};

export default Dropdown;
