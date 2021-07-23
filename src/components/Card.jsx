import React from "react";
//import DonutChartCard from "../components/Donut";
import ErrorBoundry from '../components/ErrorBoundry';
import { profiles } from '../profiles';
import ApexChart from "react-apexcharts";
import { Paper } from "@material-ui/core";
import CloneBtn from '../components/Clone';
import '../stylesheets/App.css';

class App1 extends React.Component {

  constructor() {
    super();
    this.state = {
      profiles:[],
      options: {
                labels: profiles[0].data.map((x)=>{return x.label}),
                colors:['#692870', '#C0406B', '#F08F62'],
                plotOptions: {
                  pie: {
                    expandOnClick: false,
                    donut: {
                      labels: {
                        show: true,
                        name: {
                          show: true,
                          fontSize: "12px",
                          fontFamily: undefined,
                          offsetY: 0
                        },

                        total: {
                          show: true,
                          label: profiles[0].totalLabel,
                          color: "#999999",
                          formatter: (w) => {
                            return w.globals.seriesTotals.reduce((a, b) => { return a + b; }, 0);
                          }
                        }
                      }
                    }
                 }
               },
               legend: {
                 offsetY: 25,
                 offsetX:0
                },
               markers: {
                   width: 10,
                   height: 10,
                   colors: ['#063760', '#E91E63', '#9C27B0']
               },
               itemMargin: {
                   horizontal: 10
              },
              dataLabels: {
                enabled: false
              }
      },
      series: profiles[0].data.map((x)=>{return x.value})
    }
  }

  componentDidMount(){
    fetch(`./profiles.json`, {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
    .then((response) => response.json())
    .then((profiles) => this.setState({ profiles: profiles }));
  }

  render() {
    const { profiles } = this.state;
    console.log(this.state.profiles.profiles);
    return !profiles.length ?
      <h2 className='tc'>Loading Charts...</h2> :
      (
      <div className="App">
        <h2 className='tc'>Donut Chart Cards</h2>
        <Paper elevation={10} className="pie">
          <div className='ma3 flex justify-between'>
            <h2>{profiles.profiles[0].title}</h2>
            <CloneBtn />
          </div>
          <div style={{ height: "auto", width: "auto"}}>
            <ErrorBoundry>
              <ApexChart
                options={this.state.options}
                series={this.state.series}
                type="donut"
                width='400'
              />
            </ErrorBoundry>
          </div>
        </Paper>
      </div>
    );
  }
}

export default App1;

