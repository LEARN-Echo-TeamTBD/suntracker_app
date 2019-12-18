import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, Text
} from 'recharts'

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
        >
            UV Index
        </Text>
    );
};

class Chart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            forecastData: null
        }
    }

    componentDidMount() {
        const getPosition = function (options) {
            return new Promise(function (resolve, reject) {
                navigator.geolocation.getCurrentPosition(resolve, reject, options)
            })
        }
        getPosition()
            .then(({ coords }) => {
                this.getUVapi(coords)
            })
            .catch((err) => {
                console.error(err.message)
            }
        )
    }

    getUVapi = ({ latitude, longitude }) => {
        fetch(`/uvapi?uv_api[latitude]=${latitude}&uv_api[longitude]=${longitude}&uv_api[route]=forecast`, {
            method: 'GET',
            headers: {
                "Content-type":"application/json"
            }
        }).then(resp => {
            if(resp.status !== 200){ throw({message: "Could not perform search. Please try again"})}
            return resp.json()
        }).then((data)=>{
            const forecastData = data.result.map( elm =>
                {
                    const date = new Date(elm.uv_time)
                    const name = date.getHours() >= 12 ? `${date.getHours() - 12}PM` : `${date.getHours()}AM`
                    return {
                        uv: elm.uv,
                        name
                    }
                })
            this.setState({
              forecastData,
              isLoading: false
            })
        })
        .catch((error)=>{
            this.setState({ error: `Sorry, there was a problem.  ${error.message}`})
        })
    }

  render() {
      if (this.state.isLoading){
          return (
              <React.Fragment>
                  <div>
                      <h1>Forecasting chart is loading... </h1>
                  </div>
              </React.Fragment>
          )
      }
      return (
        <LineChart
          width={600}
          height={400}
          data={this.state.forecastData}
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
