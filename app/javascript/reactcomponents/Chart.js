import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, Text
} from 'recharts';

const data = [
  {
    name: 'A', uv: 0, pv: 2400, amt: 2400,
  },
  {
    name: 'B', uv: 0.2472, pv: 1398, amt: 2210,
  },
  {
    name: 'C', uv: 0.8342, pv: 9800, amt: 2290,
  },
  {
    name: 'D', uv: 1.7612, pv: 3908, amt: 2000,
  },
  {
    name: 'E', uv: 2.5542, pv: 4800, amt: 2181,
  },
  {
    name: 'F', uv: 2.9147, pv: 3800, amt: 2500,
  },
  {
    name: 'G', uv: 2.5542, pv: 4300, amt: 2100,
  },
  {
    name: 'H', uv: 2.5542, pv: 4300, amt: 2100,
  },
  {
    name: 'I', uv: 1.7612, pv: 3800, amt: 2500,
  },
  {
    name: 'J', uv: 0.8342, pv: 4300, amt: 2100,
  },
  {
    name: 'K', uv: 0.2472, pv: 4300, amt: 2100,
  },
  {
    name: 'L', uv: 0, pv: 4300, amt: 2100,
  }
];

const CustomizedLabelB = () => {
    return (
        <Text
            x={0}
            y={0}
            dx={-250}
            dy={30}
            textAnchor="start"
            width={200}
            transform="rotate(-90)"
            //scaleToFit={true}
        >
            Time to Burn
        </Text>
    );
};

class Chart extends React.Component {
  render() {
      return (
        <LineChart
          width={600}
          height={400}
          data={data}
          margin={{
            top: 20, right: 20, bottom: 30, left: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name">
            <Label value="Time of the Day" offset={-20} position="insideBottom" />
          </XAxis>
          <YAxis label={<CustomizedLabelB />} />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      );
    }
}

export default Chart;
