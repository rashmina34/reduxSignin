import React from "react";

const Checkbox = props => {
  return (
    <div className={`field ${!!props.error ? 'error' : ''}`} >
      <label className="custom-control custom-checkbox">
        <input
          type="checkbox"
          name={props.name}
          className="custom-control-input"
          onChange={props.handleChangeEvent}
          checked={props.isChecked}
          defaultChecked={props.defaultChecked}
        />
        <span className="custom-control-indicator"/>
        <span className="custom-control-description">{props.label}
          { props.term &&
            <a href={props.url} target="_blank"> {' '}
            {props.term} </a>
          }
       </span>
      </label>
      {props.error && <span data-tooltip={props.error} ><i className="icon-exclamation-triangle red" /></span>}
    </div>
  );
};

export default Checkbox;
