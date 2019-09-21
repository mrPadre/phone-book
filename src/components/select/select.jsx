import React from 'react';



const Select = (props) => {
    const htmlFor = props.label;
  return (
      <div className="select">
          <label className="select__label" htmlFor="htmlFor">{props.label}</label>
          <select className="select__input"
              id={htmlFor}
              value={props.value}
              onChange={props.onChange}
              name="avatar"
          >
              {props.options.map((option, index) => {
                  return (
                      <option
                          value={option.value}
                          id={option}
                          key={index}
                      >
                          {option.text}
                      </option>
                  )
              })}
          </select>
      </div>
  )
};
export default Select;