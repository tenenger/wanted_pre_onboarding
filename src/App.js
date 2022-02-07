import React from "react";
import "./App.css";

import AutoComplete from "./component/AutoComplete";
import ClickToEdit from "./component/ClickToEdit";
import Modal from "./component/Modal";
import Tab from "./component/Tab";
import Toggle from "./component/Toggle";
import Tag from "./component/Tag";

function App() {
  return (
    <div className="app">
      <Toggle />
      <Modal />
      <Tab />
      <Tag />
      <AutoComplete />
      <ClickToEdit />
    </div>
  );
}
export default App;
