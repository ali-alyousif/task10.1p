import React from 'react';
import { Form , Input, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function WorkRequirementItem(props){
    return (
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
    )
}

export default WorkRequirementItem;