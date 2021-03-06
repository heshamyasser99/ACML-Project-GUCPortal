import React from 'react'
import axios from 'axios'

function DeleteDepartment() {
    return (
        <div>
            <div className="form-group">
                <label className="col-form-label">Department Name:</label>
                <input type="Text" min="1" className="form-control" placeholder="Default input" id="inputDefault0" required></input>
            </div>

            <button type="button" className="btn btn-primary" onClick={() => {
                var name = document.getElementById("inputDefault0").value;
                axios.delete('http://localhost:5000/HR/department', { headers: { "x-auth-token": localStorage.getItem('auth-token') }, data: { name: name } },
                ).then(async (response) => {
                    alert(response.data.msg);
                }
                ).catch((error) => {
                    console.log(localStorage);
                    if (error.response) {
                        alert(error.response.data.msg);
                    } else {
                        alert(error.msg);
                    }
                });

            }}>Delete Department</button>
        </div>
    );
}
export default DeleteDepartment;