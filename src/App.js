import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  
  const [number, setNumber] = useState(0);
  const [mat, setMat] = useState();
  const [loading, setLoading] = useState(true);

  function matrix(n) {
    setLoading(true);
    var result = [];
    for (var i = 0; i < n; i++) {
      result.push(new Array(n).fill(0));
    }
    setMat(result);
  }

  const handleSubmit = () => {
    matrix(number);
    console.log(mat);
    setLoading(false);
  };

// console.log(excelData);
  return (
    <div className="App">
      <input
        onChange={(e) => setNumber(+e.target.value)}
        type="text"
        placeholder="Enter Number"
      />
      <button onClick={handleSubmit}>Submit</button>
      <div
        style={{
          border: "1px solid",
          width: "40%",
          height: "40%",
          margin: "auto",
          marginTop: "20px"
        }}
      >
        {!loading
          ? mat.map((e, i) => {
              return (
                <div
                  style={{
                    display: "flex"
                  }}
                >
                  {i % 2 === 0
                    ? e.map((x, y) => {
                        return (
                          <div
                            style={{
                              width: "8vw",
                              height: "8vh"
                            }}
                          >
                            {y % 2 === 0 ? (
                              <div
                                style={{
                                  backgroundColor: "white",
                                  width: "100%",
                                  height: "100%"
                                }}
                              ></div>
                            ) : (
                              <div
                                style={{
                                  backgroundColor: "black",
                                  width: "100%",
                                  height: "100%"
                                }}
                              ></div>
                            )}
                          </div>
                        );
                      })
                    : e.map((x, y) => {
                        return (
                          <div
                            style={{
                              border: "1px solid",
                              width: "8vw",
                              height: "8vh"
                            }}
                          >
                            {y % 2 === 1 ? (
                              <div
                                style={{
                                  backgroundColor: "white",
                                  width: "100%",
                                  height: "100%"
                                }}
                              ></div>
                            ) : (
                              <div
                                style={{
                                  backgroundColor: "black",
                                  width: "100%",
                                  height: "100%"
                                }}
                              ></div>
                            )}
                          </div>
                        );
                      })}
                </div>
              );
            })
          : "loading..."}
      </div><br/><br/><br/><br/>

    </div>
  );
}
