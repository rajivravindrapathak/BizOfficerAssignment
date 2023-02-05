import React from "react";
import "./Dashboard.module.css"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Dashboard = () => {

    const data = [
        {name: "Active", value: "9"},
        {name: "Experied", value: "13"},
        {name: "Trial", value: "0"},
        {name: "Non Renewing", value: "2"},
        {name: "Nuturing", value: "1"},
        {name: "Cancelled", value: "1"}
    ]

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
                        <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
                    </BarChart>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </div>
     );
}
 
export default Dashboard;