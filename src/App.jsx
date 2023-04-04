import React from "react";
import Api from "./services/ApiConfig";

import Routes from "./Routes";

function App() {
  Api.get("/api/xz")
    .then((r) => console.log(r.data))
    .catch((e) => console.log(e.message));
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
