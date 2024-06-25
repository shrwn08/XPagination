import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import EmployeeTable from "./Components/EmployeeTable";

function App() {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await axios.get(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );
        // console.log(response);
        // setEmployeeData(response.data);
        if (response.status === 200) {
          setEmployeeData(response.data);
        }
      } catch (error) {
        console.log("unable to fetch data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <EmployeeTable data={employeeData} />
    </div>
  );
}

export default App;
