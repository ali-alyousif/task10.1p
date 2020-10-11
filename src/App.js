import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Form , Input , Header, Checkbox, Button, Radio} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import NewRequesterTaskItem from "./NewRequesterTaskItem"
import WorkDescriptionItem from "./WorkDescriptionItem"
import WorkRequirementItem from "./WorkRequirementItem"
import WorkSetupItem from "./WorkSetupItem"
import RadioButton from "./RadioButton/RadioButton"

function App() {

  return (
    <div>
      <NewRequesterTaskItem />

      <WorkDescriptionItem/>
  
      <WorkSetupItem />

      <WorkRequirementItem />
    
    </div>
  );

}

export default App;
