import React from "react";

export default function Spinner() {
  const { spinnerStyle } = stylers;
  return (
    <div>
      <div style={spinnerStyle}>
        <div class="preloader-wrapper big active">
          <div class="spinner-layer spinner-blue-only">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div>
            <div class="gap-patch">
              <div class="circle"></div>
            </div>
            <div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
        </div>
      </div>
      <div style={spinnerStyle}>
        <span> Carregando...</span>
      </div>
    </div>
  );
}

const stylers = {
  spinnerStyle: {
    textAlign: "center",
    margin: "20px 0",
  },
};
