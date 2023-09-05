import React, { PureComponent } from 'react';
import './style.scss'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




const positionLegend = {
    top: 30,
    right: 0,
}

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip--bar-chart">
                <p className="label">{`${payload[0].value}Kg`}</p>
                <p className="label">{`${payload[1].value}kCal`}</p>
            </div>
        );
    }

    return null;
};


const renderLegendText = (value) => {
    return <span style={{ color: "#74798C", marginRight: "20px", fontSize: "15px" }} > {value}</span >;
};

export default class SimpleBarChart extends PureComponent {
    render() {

        return (

            <article className='bar-chart-article'>
                {console.log("SimpleBarChart")}
                <ResponsiveContainer width="100%" height="100%" className="bar-chart-section">

                    <BarChart
                        width={200}
                        height={200}
                        data={this.props.data}
                        barGap={8}
                        margin={{
                            top: 60,
                            right: 50,
                            left: 30,
                            bottom: 30,
                        }}
                    >
                        <text x={30} y={40} fill="#20253A" fontWeight={500} textAnchor="left" dominantBaseline="central">
                            <tspan fontSize="15">Activité quotidienne</tspan>
                        </text>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="uniqueDay" axisLine={true} tickLine={false} tickMargin={20} tick={{ fontSize: '1vw', fontWeight: '500' }} />

                        <YAxis yAxisId="kilogram" orientation="right" tickCount={3} axisLine={false} tickLine={false} tickMargin={30} type="number" domain={['dataMin-0.5', 'dataMax + 0.5']} tick={{ color: '9B9EAC', fontSize: '1vw', fontWeight: '500' }} />
                        <YAxis yAxisId="calories" hide={true} orientation="left" domain={['dataMin-50', 'dataMax + 50']} />

                        <Tooltip content={<CustomTooltip />} />

                        <Legend align="right" verticalAlign='top' iconSize={8} wrapperStyle={positionLegend} formatter={renderLegendText} />
                        <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={8} legendType="circle" name="Poids (Kg)" unit="Kg" radius={[20, 20, 0, 0]} />
                        <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={8} legendType="circle" name="Calories brûlées (kCal)" unit="kCal" maxBarSize={1} radius={[20, 20, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </article>
        );
    }
}
