import React from 'react';
import { Form , Input, Button, TextArea } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Checkbox, useCheckboxState } from "reakit/Checkbox";

function WorkSetupItem(props){
    const checkbox = useCheckboxState({ state: [] });
    return (
        <div>
            <h3 class="ui block header">Setting Up Your Task</h3>
            {/* <div>
                
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
            </div> */}

            {/* <div>
                <Form>
            
                    <Form.Field inline>
                        <label>Decision Goal</label>
                        <Input placeholder='Enter the goal of the task' />
                    </Form.Field>

                    <Form.Field inline>
                        <label>Description</label>
                        <Input placeholder='add some description on the operations to undertake' />
                    </Form.Field>

                </Form>

            </div> */}
             <div>
                <Form>
                    <h3> Insert adiitional sentence case iniformation pertaining the task</h3>
                    <Form.Field inline>
                        <label>Description</label>
                        <TextArea placeholder="Add adduuibak niformation in a sentence case" />
                    </Form.Field>

                </Form>
                <h3></h3>
            </div>
        </div>
        
    )
}

export default WorkSetupItem;