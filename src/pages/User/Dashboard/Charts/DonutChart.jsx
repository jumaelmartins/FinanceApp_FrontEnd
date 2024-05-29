import React, { useRef, useEffect, useState } from "react";
import Chart from "react-apexcharts";

const DonutChart = ({ title, labels, values, colors }) => {
  const [chartWidth, setChartWidth] = useState(0);
  const [chartHeight, setChartHeight] = useState(0);
  const chartRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setChartWidth(width / 9.5);
      if (chartRef.current) {
        setChartHeight(chartRef.current.offsetHeight);
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
    labels: labels.map((label) => label),
    
    legend: {
      position: "bottom",
    },
    colors: colors.map((color) => color),
    // title: {
    //   text: title,
    //   align: "center",
    //   style: {
    //     fontSize: "20px",
    //     fontWeight: "bold",
    //     color: "#26003D",
    //   },
    // },
  };

  const series = values.map((serie) => serie);

  return (
    <div className="donut-chart-container" ref={chartRef}>
      <h2>{title}</h2>
      <Chart height={"100%"} options={options} series={series} type="donut" />
    </div>
  );
};

export default DonutChart;
