import React, { PureComponent } from 'react';
import './style.scss'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const data02 = [
    { name: 'A1', value: 0.82 },

];
const endAngleValue = (data02[0].value * 360) + 90
const percentage = data02[0].value * 100
console.log(endAngleValue)

export default class SimplePieChart extends PureComponent {

    render() {
        return (
            <article className='pie-chart-article'>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                        {/* <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" /> */}
                        <Pie data={data02} dataKey="value" cx="50%" cy="50%" name={percentage} cornerRadius={10} innerRadius={88} outerRadius={100} fill="#FF0000" startAngle={90} endAngle={endAngleValue} />
                        <text x={"50%"} y={"50%"} fill="#20253A" fontWeight={500} textAnchor="middle" dominantBaseline="central">
                            <tspan x={"50%"} y={"38%"} fontSize="26">{percentage}%</tspan>
                            <tspan x={"50%"} y={"50%"} fontSize="16" fill='#74798C'>de votre</tspan>
                            <tspan x={"50%"} y={"60%"} fontSize="16" fill='#74798C'>objectif</tspan>

                        </text>
                    </PieChart>
                </ResponsiveContainer>
            </article>
        );
    }
}
