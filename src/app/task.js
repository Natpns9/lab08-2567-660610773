function Task(task) {
  
    let Style = {};
    if (task.isDone) {
      Style = {"text-decoration":"line-through"};
    }
  
    return(
      <div className="d-flex p-3 gap-2 align-items-center border-bottom">
        <span style = {Style}> {task.task} </span>
        <button className="btn btn-success">Done</button>
        <button className="btn btn-danger">Delete</button>
      </div>
      );
  }
  
  export default Task