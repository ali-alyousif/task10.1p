import React from 'react';
import { Form , Input, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function NewRequesterTaskItem(props){
    return (
        <div>
            <h3 class="ui block header"><strong>New Requester Task</strong></h3>

            <strong>Select Task Type: </strong>
            <input type="radio" value="Choice Task" name="tasktype" /> Choice Task  
            <input type="radio" value="Decision-Making Task" name="tasktype" /> Decision-Making Task  
            <input type="radio" value="Sentence-Level Task" name="tasktype" /> Sentence-Level Task  
        </div>
    )
}

export default NewRequesterTaskItem;