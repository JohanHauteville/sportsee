import React, { PureComponent } from 'react';
import './style.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceArea } from 'recharts';



const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip--line-chart">
                <p className="label">{`${payload[0].value} min`}</p>
            </div>
        );
    }

    return null;
};

export default class SimpleLineChart extends PureComponent {
    render() {
        return (
            <article className='area-chart-article'>
                {console.log("SimpleLineChart")}
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={400}
                        data={this.props.data}
                        margin={{
                            top: 10,
                            right: 0,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        {/* Dégradé de la ligne de tracé */}
                        <defs>
                            <linearGradient id="Gradient01">
                                <stop offset="10%" stopColor="#FFF" stopOpacity="0.3" />
                                <stop offset="90%" stopColor="#FFF" />
                            </linearGradient>
                        </defs>

                        <text x={30} y={30} fill="#ffffff" opacity={0.5} fontWeight={500} textAnchor="left" dominantBaseline="central" >
                            <tspan x={30} y={30} fontSize="15">Durée moyenne des</tspan>
                            <tspan x={30} y={60} fontSize="15">sessions</tspan>

                        </text>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: '1vw', fontWeight: '500', fill: '#fff', opacity: "0.5" }} includeHidden={true} />
                        <YAxis hide={true} domain={['dataMin-20', 'dataMax + 20']} />
                        <ReferenceArea x1={150} x2={180} y1={200} y2={300} stroke="black" strokeOpacity={0.3} />
                        {/* <Tooltip content={<CustomTooltip />} position={{ y: 0 }} /> */}
                        <Tooltip content={<CustomTooltip />} />
                        <Line type="natural" dot={false} dataKey="sessionLength" stroke="url(#Gradient01)" fill="#FF0000" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </article >
        );
    }
}
