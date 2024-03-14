import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Doughnut, Line } from "react-chartjs-2";

import "./App.css";

import revenueData from "./data/revenueData.json";
import sourceData from "./data/sourceData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

export const App = () => {
  return (
    <div className="Card">
      <div className="dataCard revenueCard">
        <Line
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "Tiến độ",
                data: revenueData.map((data) => data.revenue),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Tiến độ",
              },
            },
          }}
        />
      </div>
      <div className="dataCard categoryCard">
        <Doughnut
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "a",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(0, 161, 65, 0.8)",
                  "rgba(44, 128, 255, 0.8)",
                  "rgba(226, 29, 18, 0.8)",
                  "rgba(220, 220, 220, 0.8)",
                ],
                borderWidth: 0,
              },
            ],
          }}
          options={{
            plugins: {
              legend:{
                position: 'bottom',
              },
              title: {
                text: "Tổng OKR",
              },
            },
            label:{
              show: true,
              total: {
                show: true,
                showAlways: true,
                fontSize: '20',
                color: 'black',
              },
            },
            dataLabels:{
              enabled:true,
          },   
          }}
        />
      </div>
    </div>
  );
};
