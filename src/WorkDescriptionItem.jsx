import React from 'react';
import { Form , Input, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function WorkDescriptionItem(props){
    return (
        <div>
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
        </div>
    )
}

export default WorkDescriptionItem;