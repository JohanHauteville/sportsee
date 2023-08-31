import React, { PureComponent } from 'react';
import './style.scss'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

const data = [
    {
        name: '1',
        calories: 240,
        kilogram: 70,

    },
    {
        name: '2',
        calories: 220,
        kilogram: 69,

    },
    {
        name: '3',
        calories: 280,
        kilogram: 70,

    },
    {
        name: '4',
        calories: 500,
        kilogram: 70,
        amt: 2000,
    },
    {
        name: '5',
        calories: 160,
        kilogram: 69,

    },
    {
        name: '6',
        calories: 162,
        kilogram: 69,

    },
    {
        name: '7',
        calories: 390,
        kilogram: 69,

    },
];

const legendMargin = { top: 0, left: 0, right: 0, bottom: 20 }
// const positionToolTip = { x: 100, y: 140 }


const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${payload[0].value}Kg`}</p>
                <p className="label">{`${payload[1].value}kCal`}</p>
            </div>
        );
    }

    return null;
};


const renderLegendText = (value) => {
    return <span style={{ color: "#74798C", marginRight: "20px" }} > {value}</span >;
};

const getPath = (x, y, width, height) => {
    return `M${x + 5},${y + 5}
  
    A5,5,0,0,1,${x + 5},${y}
  
    L${x + 5}, ${y}
    A5,5,0,0,1,${x + width},${y + 5}
  
    L${x + width}, ${y + height}
    A5,5,0,0,1,${x + 5},${y + height + 5}
  
    L${x + 5}, ${y + height + 5}
    A5,5,0,0,1,${x + 5},${y + height + 5}
    
    Z`;
};



const RoundedBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';


    render() {
        return (
            <ResponsiveContainer width="100%" height="60%">

                <BarChart
                    width={200}
                    height={100}
                    data={data}
                    barGap={8}
                    // label="bonjour"
                    // barSize={1}
                    // barCategoryGap={0}
                    // legendType="cross"
                    margin={{
                        top: 5,
                        right: 50,
                        left: 20,
                        bottom: 20,
                    }}
                >

                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={true} tickLine={false} tickMargin={30} scale='point' padding={{ top: 0, right: 15, bottom: 0, left: 15 }}>
                        <Label value="Pages of my website" offset={300} position="outside" />
                    </XAxis>
                    <YAxis yAxisId="kilogram" orientation="right" tickCount={4} axisLine={false} tickLine={false} tickMargin={30} type="number" domain={['dataMin-1', 'dataMax + 1']} />
                    <YAxis yAxisId="calories" orientation="right" tickCount={3} axisLine={false} tickLine={false} tickMargin={30} type="number" domain={['dataMin-5', 'dataMax + 50']} tick={false} />

                    {/* <YAxis dataKey="kilogram" /> */}

                    <Tooltip content={<CustomTooltip />} />

                    <Legend align="right" verticalAlign='top' iconSize={8} margin={legendMargin} formatter={renderLegendText} />
                    <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={10} legendType="circle" name="Poids (Kg)" unit="Kg" radius={[20, 20, 0, 0]} />
                    <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={10} legendType="circle" name="Calories brûlées (kCal)" unit="kCal" maxBarSize={1} radius={[20, 20, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
