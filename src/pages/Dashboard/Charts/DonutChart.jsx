import React, { useRef, useEffect, useState } from "react";
import Chart from "react-apexcharts";

const DonutChart = () => {
  const [chartWidth, setChartWidth] = useState(0);
  const chartRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        setChartWidth(chartRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    // Set the initial width
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const options = {
    chart: {
      type: "donut",
    },
    labels: ["Produto A", "Produto B", "Produto C", "Produto D"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    legend: {
      position: "bottom",
    },
    colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560"],
    title: {
      text: "Vendas por Produto",
      align: "center",
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#263238",
      },
    },
  };

  const series = [44, 55, 41, 17];

  return (
    <div className="chart-container" ref={chartRef}>
      <Chart
        options={options}
        series={series}
        type="donut"
        width={chartWidth}
      />
    </div>
  );
};

export default DonutChart;
