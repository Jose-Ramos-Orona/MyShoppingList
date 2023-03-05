import React from "react";
import AppStyled from "./AppStyled";

const App = (): JSX.Element => {
  return (
    <AppStyled>
      <div className="row flex-center flex-middle">
        <div className="container paper border border-success padding-large margin-large">
          <h1 className="title">MY SHOPPING LIST</h1>
        </div>
      </div>
    </AppStyled>
  );
};

export default App;
