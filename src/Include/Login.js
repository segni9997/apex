import React from "react";
import { Navbars } from "./Navbars";

function Login() {
  const student = [
    { name: "Abeni", Age: 45, year: 4, Dept: "Computer", bg: "#f2f2f2" },
    { name: "segni", Age: 45, year: 4, Dept: "Computer", bg: "#EF23ec" },
  ];

  return (
    <Navbars>
      {student.map((item, key) => {
        return (
          <div className="bg-red-800 text-white font-extrabold " key={key.name}>
            <h1 className="text-black">Name: {item.name}</h1>
            <h1>Age:{item.Age}</h1>
            <h1>Year:{item.year}</h1>
            <h1>Dept:{item.Dept}</h1>
          </div>
        );
      })}
    </Navbars>
  );
}

export default Login;
