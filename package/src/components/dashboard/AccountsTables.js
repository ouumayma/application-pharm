import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"

const tableData = [
  {
    avatar: user1,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user2,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Lading pro React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user3,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Elite React",
    status: "holt",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user4,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user5,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Ample React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
];

const AccountsTables = ({accounts, account,setAccount}) => {
  
  const handleModify = async (id) => {
    try {
      // Find the account with the matching ID
      const foundAccount = accounts.find((acc) => acc.id === id);
      console.log(foundAccount)
      setAccount({
        name: foundAccount.name ,
        email: foundAccount.email ,
        password:foundAccount.password , // Password typically wouldn't be fetched for security reasons
        password_confirmation:foundAccount.password_confirmation, // Similarly, for confirmation
        role: foundAccount.role ,
        avatar:foundAccount.avatar
      });
      if (foundAccount) {
        // Set the account state with the found account's details
        setAccount({
          name: foundAccount.name || "",
          email: foundAccount.email || "",
          password: "", // Password typically wouldn't be fetched for security reasons
          password_confirmation: "", // Similarly, for confirmation
          role: foundAccount.role || "",
        });
        console.log(foundAccount)
      } else {
        console.log("Account not found");
      }
    } catch (error) {
      console.log(error);
    }
  };
  


  return (
    <div>
      <Card>
        <CardBody>
          {/* <CardTitle tag="h5">Project Listing</CardTitle> */}
          {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the projects
          </CardSubtitle> */}

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Employés</th>
                <th>Role</th>

                {/* <th>Status</th>
                <th>Weeks</th> */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.role}</td>
             
                  <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={()=>handleModify(tdata.id)}>
    <FontAwesomeIcon icon={faEdit} /> {/* Icon for Modify */}
    </button>
  <button className="btn btn-danger btn-sm"  >
    <FontAwesomeIcon icon={faTrashAlt} /> {/* Icon for Delete */}
  </button>
</td>

                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default AccountsTables;
