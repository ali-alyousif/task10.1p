import React from 'react';
import { Form , Input, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Checkbox, useCheckboxState } from "reakit/Checkbox";

function WorkSetupItem(props){
    const checkbox = useCheckboxState({ state: [] });
    return (
        <div>
            <h3 class="ui block header">Setting Up Your Task</h3>
            <p> Select at Quliltues that describe Your task</p>
           <div>Choices: {checkbox.state.join(", ")}</div>
            <label>
                <Checkbox {...checkbox} value="Urgent" />
                Urgent
            </label>
            <h3></h3>
            <label>
                <Checkbox {...checkbox} value="Long Term" />
                Long Term
            </label>
            <h3></h3>
            <label>
                <Checkbox {...checkbox} value="Scheduled" />
                Scheduled
            </label>
            <h3></h3>
            <label>
                <Checkbox {...checkbox} value="Overdue" />
                Overdue
            </label>
            <h3></h3>
            <label>
                <Checkbox {...checkbox} value="indoor project" />
                Indoor Project
            </label>
            <h3></h3>
        </div>
        
    )
}

export default WorkSetupItem;