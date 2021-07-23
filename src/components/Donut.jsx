import React, { Component } from 'react';
import ApexChart from "react-apexcharts";
import { profiles } from '../profiles';
import '../stylesheets/Donut.css';

class DonutChartCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options: {
                labels: profiles[0].data.map((x)=>{return x.label}),
                colors:['#F44336', '#E91E63', '#9C27B0'],
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



  render() {
    return (
      <div style={{ height: "200px" }}>
        <ApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width='500'
        />
      </div>
    );
  }
}
export default DonutChartCard;
