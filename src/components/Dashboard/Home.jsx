import {useEffect, useState} from "react";
import {getAllUsers} from "../../services/auth";
import {Link} from "react-router-dom";

export default function Home(){

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
        // console.log(users);
    }, []);

    const fetchUsers = async () => {
        const response = await getAllUsers();
        setUsers(response);
        console.log(response);
    }
    const handleCreateUser = async (e) => {
        e.preventDefault();
        window.location = '/login';
    }
    return(
      <div>
          <div className="container p-5">
              <h1>List</h1>
              <button className="btn btn-primary m-2 p-2" onClick={handleCreateUser}>Add User</button>
              <table className="table table-striped">
                  <thead>
                  <tr>
                      <th scope="col">User id</th>
                      <th scope="col">Username</th>
                      <th scope="col">Email</th>
                      <th scope="col">Action</th>
                      {/*<th scope="col">Created By</th>*/}
                  </tr>
                  </thead>
                  <tbody>
                  {users.map((user,index) => (
                      <tr key={index}>
                          {/*<th scope="row">{index}</th>*/}
                          <td>{user.id}</td>
                          <td>{user.userName}</td>
                          <td>{user.email}</td>
                          <td>
                              <button className="btn" style={{"fontSize":"20px"}} ><Link to={`/userdetail/id=${user.id}`}><i className="bi bi-arrow-right-circle"></i></Link></button>
                          </td>
                          {/*<td>{user.createdAt}</td>*/}
                          {/*<td>@mdo</td>*/}
                      </tr>
                  ))}
                  </tbody>
              </table>
          </div>
      </div>
    );
}