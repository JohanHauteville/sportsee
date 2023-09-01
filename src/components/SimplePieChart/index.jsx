import React, { PureComponent } from 'react';
import './style.scss'
import { PieChart, Pie, ResponsiveContainer } from 'recharts';


export default class SimplePieChart extends PureComponent {



    render() {
        return (
            <article className='pie-chart-article'>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                        <Pie data={Array(this.props.data)} dataKey="todayScore" cx="50%" cy="50%" cornerRadius={10} innerRadius={88} outerRadius={100} fill="#FF0000" startAngle={90} endAngle={((this.props.data.todayScore * 360) + 90)} />
                        <text x={"50%"} y={"50%"} fill="#20253A" fontWeight={500} textAnchor="middle" dominantBaseline="central">
                            <tspan x={"50%"} y={"45%"} fontSize="26">{this.props.data.todayScore * 100}%</tspan>
                            <tspan x={"50%"} y={"54%"} fontSize="16" fill='#74798C'>de votre</tspan>
                            <tspan x={"50%"} y={"62%"} fontSize="16" fill='#74798C'>objectif</tspan>

                        </text>
                    </PieChart>
                </ResponsiveContainer>
            </article>
        );
    }
}
