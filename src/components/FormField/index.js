import React from "react";

function FormField({ label, type, value, name, onChange  }) {
    return (
        <div>
        <label>
          {label}
          <input
            type={type}
            value={value}
            nome={name}
            onChange={onChange}
          />
        </label>
      </div> 
    )
}

export default FormField; 