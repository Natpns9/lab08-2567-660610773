import Header from "./header.js"
import TaskInput from "./taskInput.js";
import Task from "./task.js"
import Footer from "./footer.js";

export default function Home() {
  const task = [
    {id:1,task:"Read a book",isDone:true},
    {id:2,task:"Take a shower",isDone:false},
    {id:3,task:"Sleep",isDone:false},
  ];
  return (
    <div className="container mx-auto">
        <Header></Header>
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        <TaskInput></TaskInput>

        <Task {...task[0]} />
        <Task {...task[1]} />
        <Task {...task[2]} />


      </div>
    <Footer year = "2024" name = "Panisa Pathapee" studentID = "660610773">
    </Footer>

    </div>
  );
}