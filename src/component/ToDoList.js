import React, { useState } from 'react';

function ToDoList() {
    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState(false,);
    const [data, setData] = useState({ name: "", email: "" });



    const handleChange = (e) => {
        const newData = { ...data }
        newData[e.target.id] = e.target.value;
        setData(newData);

    }


    const handleAdd = () => {
        taskFilter();
        const taskDetails = {
            id: Math.floor(Math.random() * 1000),
            value: data
        }

        if (task !== false) {
            console.log('email already use')
        }
        else {
            setTaskList([...taskList, taskDetails]);
        }
    }



    function taskFilter() {
        taskList.filter((t) => {
            if (t.value.email === data.email) {
                setTask(true)
            }
            else {
                setTask(false)
            }
        })
    }


    const handleDelete = (e, key) => {
        e.preventDefault();
        setTaskList(taskList.filter((t) => t.id !== key));
    }



    return (
        <div>

            <div>
                {task ? <p>This email already use</p>:''}
                <input type="text" placeholder="your name" onChange={(e) => handleChange(e)} value={data.name} name="name" id="name" />
                <input type="email" placeholder="your Email" onChange={(e) => handleChange(e)} value={data.email} name="name" id="email" />
                <button onClick={handleAdd}>Add</button>
            </div>

            <div className="w-50 m-auto pt-5">
                <table class="table table-sm border text-left">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    {taskList !== [] ?
                        taskList.map((task) => (
                            <tbody>
                                <td>{task.value.name}</td>
                                <td>{task.value.email}</td>
                                <td><button onClick={(e) => handleDelete(e, task.id)}>Delete</button></td>
                            </tbody>
                        ))
                        : []}

                </table>
            </div>



        

        </div>

    )
}

export default ToDoList
