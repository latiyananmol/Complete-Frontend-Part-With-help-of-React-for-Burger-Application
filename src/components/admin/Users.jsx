import React from "react";
import me from "../../assets/anmol.jpeg";

const Users = () => {
  const arr = [1,2,3,4,5];
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Role</th>
              <th>Since</th>
          
            </tr>
          </thead>
          <tbody>
            {arr.map((i, key) => (
              <tr key={key}>
                <td> #aasdgad</td>
                <td>Anmol</td>
                <td> <img src={me}/> </td>
                <td>Admin</td>
                <td>{"24-03-2023"}</td>
                {/* <td>
                  {" "}
                  <Link to={`/order/${"qwer"}`}>
                    <AiOutlineEye />
                  </Link>{" "}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default Users;
