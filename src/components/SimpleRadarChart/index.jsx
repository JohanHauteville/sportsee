import React, { PureComponent } from 'react';
import './style.scss'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    value: 80,
    kind: "cardio"
  },
  {
    value: 120,
    kind: "energy"
  },
  {
    value: 140,
    kind: 'endurance'
  },
  {
    value: 50,
    kind: 'strenght'
  },
  {
    value: 200,
    kind: 'speed'
  },
  {
    value: 90,
    kind: 'intensity'
  }
];

export default class SimpleRadarChart extends PureComponent {

  render() {
    return (
      <article className='radar-chart-article'>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data} margin={{ top: 0, right: 30, bottom: 0, left: 30 }} startAngle={30} endAngle={-330}>
            <PolarGrid radialLines={false} />
            {/* <PolarGrid radialLines={false} polarRadius={[0, 10, 27, 49, 72, 95]} /> */}
            <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 12 }} />
            {/* <PolarRadiusAxis /> */}
            <Radar dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.7} />
          </RadarChart>
        </ResponsiveContainer>
      </article >
    );
  }
}
