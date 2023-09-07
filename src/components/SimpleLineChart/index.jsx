import React, { PureComponent } from 'react';
import './style.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceArea } from 'recharts';



const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <>
                <div className="custom-tooltip--line-chart">
                    <p className="label">{`${payload[0].value} min`}</p>

                </div>

            </>
        );
    }

    return null;
};



export default class SimpleLineChart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            startX: null,
            endX: null,
            startY: null
        };
    }

    handleMouseHover = (event) => {
        const { isTooltipActive } = event
        const { activeTooltipIndex } = event

        if (isTooltipActive) {
            this.setState({ startX: activeTooltipIndex, endX: 8, startY: -50 })
        } else {
            this.setState({ startX: null, endX: null, startY: null });
        }
    };


    render() {
        const { startX, endX, startY } = this.state;

        return (
            <article className='area-chart-article'>
                <ResponsiveContainer>
                    {/* <ResponsiveContainer width="100%" height="100%"> */}

                    <LineChart
                        width={100}
                        // height={400}
                        data={this.props.data}
                        margin={{
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 15,
                        }}
                        onMouseMove={this.handleMouseHover}
                        onMouseLeave={() => {
                            this.setState({ startX: null, endX: null, startY: null });
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
                        <YAxis hide={true} domain={['dataMin-20', 'dataMax + 40']} />


                        <ReferenceArea
                            x1={startX}
                            x2={endX}
                            ifOverflow='visible'
                            y1={startY}
                            // y1={-20}
                            fill="rgba(0, 0, 0, 0.2)"
                        />
                        <Tooltip content={<CustomTooltip />} cursor={false} />
                        <Line type="natural" dot={false} dataKey="sessionLength" stroke="url(#Gradient01)" fill="#FF0000" strokeWidth={2} legendType='none' activeDot={{ stroke: 'white', strokeWidth: 2, r: 4, fill: 'white' }} />
                    </LineChart>
                </ResponsiveContainer>
            </article >
        );
    }
}
