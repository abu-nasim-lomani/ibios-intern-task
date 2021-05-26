import React, { useState } from 'react'

function ToDo() {

    const [updateData, setUpdateData] = useState(false);


    const handleUpdate = (e) => {
        const newData = { ...updateData }
        {
            updateData ==false  ? newData[e.target.id] = true: newData[e.target.id] = false; 
        }
        setUpdateData(newData);

    }
    console.log(updateData)

    return (
        <div>
            <table class="table table-striped col-md-10 m-auto border" >
                <thead>
                    <tr class="">
                        <th scope="col">Module Name</th>
                        <th scope="col">Activity Name</th>
                        <th scope="col">Create</th>
                        <th scope="col">View</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Approve</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Confiqure</td>
                        <td>Item Category</td>
                        <td><input type="checkbox" name="isCreate" id="isCreate" onChange={(e) => handleUpdate(e)} /></td>
                        <td><input type="checkbox" name="isView" id="isView" onChange={(e) => handleUpdate(e)} /></td>
                        <td><input type="checkbox" name="isView" id="isEdit" onChange={(e) => handleUpdate(e)} /></td>
                        <td><input type="checkbox" name="isDelete" id="isDelete" onChange={(e) => handleUpdate(e)} /></td>
                        <td><input type="checkbox" name="isApprove" id="isApprove" onChange={(e) => handleUpdate(e)} /></td>
                    </tr>
                    <tr>
                        <td>Confiqure</td>
                        <td>Item Category</td>
                        <td><input type="checkbox" name="isCreate" id="isCreate" onChange={(e) => handleUpdate(e)} /></td>
                        <td><input type="checkbox" name="isCreate" id="isCreate" onChange={(e) => handleUpdate(e)} /></td>
                        <td><input type="checkbox" name="isCreate" id="isCreate" onChange={(e) => handleUpdate(e)} /></td>
                        <td><input type="checkbox" name="isCreate" id="isCreate" onChange={(e) => handleUpdate(e)} /></td>
                        <td><input type="checkbox" name="isCreate" id="isCreate" onChange={(e) => handleUpdate(e)} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ToDo
