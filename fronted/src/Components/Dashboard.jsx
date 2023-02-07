import React from "react";
import "./Dashboard.module.css"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { LineChart, Line } from 'recharts';


const Dashboard = () => {

    const data = [
        {name: "Active", count: "9"},
        {name: "Experied", count: "13"},
        {name: "Trial", count: "0"},
        {name: "Non Renewing", count: "2"},
        {name: "Nuturing", count: "1"},
        {name: "Cancelled", count: "1"}
    ]

    const data1 = [
        {
          name: 'Active',
          uv: 3000,
          pv: 3000,
          amt: 3000,
        },
        {
          name: 'Experied',
          uv: 3000,
          pv: 3000,
          amt: 3000,
        },
        {
          name: 'Trial',
          uv: 3000,
          pv: 3000,
          amt: 2290,
        },
        {
          name: 'Non Renewing',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Nuturing',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Cancelled',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        }
      ];

      let maxVal = 0xFFFFFF; // 16777215
// let randomNumber = Math.random() * maxVal;

    return ( 
        <div>
            <div className="mainDiv">
                <div className="div1">
                    <button className="btn">
                        <div>
                            <div>
                                <h5>unassin cases</h5>
                                <h1>2</h1>
                            </div>
                        </div>
                            <span></span>
                    </button>
                </div>
                <div className="div2">
                    <button className="btn">
                        <div>
                            <div>
                                <h5>unassin cases</h5>
                                <h1>2</h1>
                            </div>
                        </div>
                            <span></span>
                    </button>
                </div>
                <div className="div3">
                    <button className="btn">
                        <div>
                            <div>
                                <h5>unassin cases</h5>
                                <h1>2</h1>
                            </div>
                        </div>
                            <span></span>
                    </button>
                </div>
                <div className="div4">
                    <button className="btn">
                        <div>
                            <div>
                                <h5>unassin cases</h5>
                                <h1>2</h1>
                            </div>
                        </div>
                            <span></span>
                    </button>
                </div>
                <div className="div5">
                    <button className="btn">
                        <div>
                            <div>
                                <h5>unassin cases</h5>
                                <h1>2</h1>
                            </div>
                        </div>
                            <span></span>
                    </button>
                </div>
                <div className="div6">
                    <button className="btn">
                        <div>
                            <div>
                                <h5>unassin cases</h5>
                                <h1>2</h1>
                            </div>
                        </div>
                            <span></span>
                    </button>
                </div>
                <div className="div7">
                    <button className="btn">
                        <div>
                            <div>
                                <h5>unassin cases</h5>
                                <h1>2</h1>
                            </div>
                        </div>
                            <span></span>
                    </button>
                </div>
                <div className="div8">
                    <button className="btn">
                        <div>
                            <div>
                                <h5>unassin cases</h5>
                                <h1>2</h1>
                            </div>
                        </div>
                            <span></span>
                    </button>
                </div>
                <div className="div9">
                    <button className="btn">
                        <div>
                            <div>
                                <h5>unassin cases</h5>
                                <h1>2</h1>
                            </div>
                        </div>
                            <span></span>
                    </button>
                </div>
                <div className="div10">
                    <button className="btn">
                        <div>
                            <div>
                                <h5>unassin cases</h5>
                                <h1>2</h1>
                            </div>
                        </div>
                            <span></span>
                    </button>
                </div>
                <div className="div11">
                    <button className="btn">
                        <div>
                            <div>
                                <h5>unassin cases</h5>
                                <h1>2</h1>
                            </div>
                        </div>
                            <span></span>
                    </button>
                </div>
                <div className="div12">
                    <button className="btn">
                        <div>
                            <div>
                                <h5>unassin cases</h5>
                                <h1>2</h1>
                            </div>
                        </div>
                            <span></span>
                    </button>
                </div>
                <div className="div13">
                    <button className="btn">
                        <div>
                            <div>
                                <h5>unassin cases</h5>
                                <h1>2</h1>
                            </div>
                        </div>
                            <span></span>
                    </button>
                </div>
                <div className="div14">
                    <button className="btn">
                        <div>
                            <div>
                                <h5>unassin cases</h5>
                                <h1>2</h1>
                            </div>
                        </div>
                            <span></span>
                    </button>
                </div>
            </div>

            <div className="secmainDiv">
                <div className="bar1">
                    <div>
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            barSize={20}
                            >
                            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar dataKey="count" fill="#8884d8" background={{ fill: `Math.random() * maxVal` }} />
                        </BarChart>
                    </div>
                    <div>
                        <LineChart
                            width={500}
                            height={300}
                            data={data1}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                    </div>
                </div>
                <div className="bar1">
                    <div>
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            barSize={20}
                            >
                            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar dataKey="count" fill="#8884d8" background={{ fill: '#eee' }} />
                        </BarChart>
                    </div>
                    <div>
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            barSize={20}
                            >
                            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar dataKey="count" fill="#8884d8" background={{ fill: '#eee' }} />
                        </BarChart>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Dashboard;