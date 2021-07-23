import React, { Component } from 'react';
import ApexChart from "react-apexcharts";
import { profiles } from '../profiles';
import '../stylesheets/Donut.css';

const DonutChartCard = ({profiles}) => {

  let series = [];
  let categories = [];

for (let x = 0; x < profiles.length; x++) {
  series.push({
    name: testData[x].cell_id,
    data: testData[x].rsrq
  });
  categories.concat(testData[x].datetime);
}
}
export default DonutChartCard;
