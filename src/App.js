import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Form , Input , Header, Button, Radio} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import RadioButton from "./RadioButton/RadioButton"

function App() {

  return (
    <div>
      <h3 class="ui block header"><strong>New Requester Task</strong></h3>
      <div>
        <strong>Select Task Type: </strong>
        <input type="radio" value="Choice Task" name="tasktype" /> Choice Task  
        <input type="radio" value="Decision-Making Task" name="tasktype" /> Decision-Making Task  
        <input type="radio" value="Sentence-Level Task" name="tasktype" /> Sentence-Level Task  
      </div>

      <h3 class="ui block header">Decribe your Task to Workers</h3>
      <Form>
      
        <Form.Field inline>
          <label>Title</label>
          <Input placeholder='Enter Task Title ' />
        </Form.Field>

        <Form.Field inline>
          <label>Description</label>
          <Input placeholder='Enter TaskDescription' />
        </Form.Field>

        <Form.Field inline>
          <label> Expiry Date</label>
          <Input />
        </Form.Field>

      </Form>

      <h3 class="ui block header">Setting up your Task</h3>
      <div>
        <h3>.</h3>
        <h3>. Dynamic section</h3>
        <h3>.</h3>
      </div>

      <div>
        <h3 class="ui block header">Work Rquirement</h3>
        <Form>
          <div>
            <strong>Require Master Worksers: </strong>
            <input type="radio" value="Yes" name="tasktype" /> Yes  
            <input type="radio" value="No" name="tasktype" /> No 
          </div>

          <Form.Field inline>
            <label>Rewards Per Person</label>
            <Input />
          </Form.Field>

          <Form.Field inline>
            <label>Number of workers</label>
            <Input  />
          </Form.Field>
          <Button floated='right'>Save</Button>
       </Form>

    
      </div>
    </div>
  );

}

export default App;
