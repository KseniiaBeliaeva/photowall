import React from "react";
import ReactDOM from "react-dom";

const tasks = ['take out the trash', 'shovel the driveway', 'walk the dog'];
const element =
    <div>
        <h1>Task list</h1>
      <ol>
       {tasks.map((task, index) => <li key={index}> {task} </li>)} {/*createElement method*/}
    {/* <li>{tasks[0]}</li>  {/* whenever we want to write javascript expressions and include them in these tags they must be enclosed by {}
    <li>{tasks[1]}</li>
    <li>{tasks[2]}</li> */}
      </ol>
    </div>    

ReactDOM.render(element, document.getElementById('root'));


