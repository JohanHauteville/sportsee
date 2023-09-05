import React, { PureComponent } from 'react';
import './style.scss'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';


export default class SimpleRadarChart extends PureComponent {

  render() {
    return (
      <article className='radar-chart-article'>
        {console.log("SimpleRadarChart")}

        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={this.props.data} margin={{ top: 0, right: 30, bottom: 0, left: 30 }} startAngle={30} endAngle={-330}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 12 }} />
            <Radar dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.7} />
          </RadarChart>
        </ResponsiveContainer>
      </article >
    );
  }
}
