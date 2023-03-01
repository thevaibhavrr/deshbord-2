import React, { useEffect, useState } from "react";

function Table() {
  const [Details, setdetails] = useState([]);

  const backendData = async () => {
    try {
      const res = await fetch("/api/v1/users", {
        method: "get",
      });
      const resData = await res.json();
      console.log(resData)
      console.log(resData.userInputData)
      await setdetails(resData);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(()=>{
    backendData()
  })

  return (
    <div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="thead-light">
            <tr>
              <th>Postion</th>
              <th>Location</th>
              <th>Employment Type</th>
              <th>Salary Scale</th>
              <th>Tech Icon</th>
              <th>Job Describtion</th>
            </tr>
          </thead>
          <tbody>
            {Details.map((output) => (
              <tr>
                <td>{output.position}</td>
                <td>{output.location}</td>
                <td>{output.employment_Type}</td>
                <td>{output.salary_Scale}</td>
                <td>{output.tech_Icon}</td>
                <td>{output.job_Description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
