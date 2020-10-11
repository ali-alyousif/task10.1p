import React from 'react';
import { Form , Input, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function WorkSetupItem(props){
    return (
        <div>
            <h3 class="ui block header">Setting up your Task</h3>
            <h4> Input for choice tasks:</h4>

            <div class="ui checked checkbox">
            <input type="checkbox" checked="" class="hidden" readonly="" tabindex="0"/>
            <label>This checkbox comes pre-checked</label>
            </div>

        </div>
    )
}

export default WorkSetupItem;