import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

export const FlatButton = ({ stateProp, type, text = "Live &lt;~&gt;" }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
    type: type || "primary",
  });

  return (
    <div
      className={`border border-solid inline-flex items-start gap-[10px] px-[16px] py-[8px] relative ${
        state.type === "secondary" ? "border-gray" : "border-primary"
      } ${
        state.type === "primary" && state.state === "hover"
          ? "bg-[#c778dd33]"
          : state.type === "secondary" && state.state === "hover"
          ? "bg-[#abb2bf33]"
          : ""
      }`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
        <div
        className={`[font-family:'Fira_Code-Medium',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[16px] font-medium leading-[normal] relative ${
            state.type === "secondary" ? "text-gray" : "text-white"
        }`}
        >
        {state.type === "primary" && <>{text}</>}

        {state.type === "secondary" && <>Demo |&gt;</>}
    </div>
    </div>
  );
};

function reducer(state, action) {
  // eslint-disable-next-line default-case
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

FlatButton.propTypes = {
  stateProp: PropTypes.oneOf(["hover", "default"]),
  type: PropTypes.oneOf(["primary", "secondary"]),
  text: PropTypes.string,
};
