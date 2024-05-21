import React, { useRef, useEffect, useState } from "react";
import Chart from "react-apexcharts";

const BarChart = () => {
  const [chartWidth, setChartWidth] = useState(0);
  const [chartHeight, setChartHeight] = useState(0);
  const chartRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setChartWidth(width / 6);
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
      type: "bar",
    },
    // title: {
    //   text: "Top 5 Categorias",
    //   align: "center",
    //   style: {
    //     fontSize: "20px",
    //     fontWeight: "bold",
    //     color: "#263238",
    //   },
    // },
    xaxis: {
      categories: ["Cat 1", "Cat 2", "Cat 3", "Cat 4", "Cat 5"],
    },
    // yaxis: {
    //   title: {
    //     text: "Valores",
    //   },
    // },
    legend: {
      position: "bottom",
    },
    plotOptions: {
      bar: {
        borderRadius: 5, // Arredonda as bordas das barras
        horizontal: true, // Torna o gráfico de barras horizontal
      },
    },
    grid: {
      show: true,
      borderColor: "#e0e0e0",
      strokeDashArray: 4,
    },
    colors: ["#581D7C"], // Cor das barras
  };

  const series = [
    {
      name: "Valor",
      data: [70, 60, 50, 40, 30],
    },
  ];

  return (
    <div className="chart-container-bar" ref={chartRef}>
      <h2>Ranking Categorias</h2>
      <Chart options={options} series={series} height={"100%"} type="bar" />
    </div>
  );
};

export default BarChart;
