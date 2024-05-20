import React, { useRef, useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const BarChart = () => {
  const [chartWidth, setChartWidth] = useState(0);
  const chartRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        setChartWidth(chartRef.current.offsetWidth);
      }
    };

    window.addEventListener('resize', handleResize);

    // Set the initial width
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const options = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Top 5 Categorias',
      align: 'center',
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#263238'
      }
    },
    xaxis: {
      categories: ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4', 'Categoria 5'],
    },
    yaxis: {
      title: {
        text: 'Valores'
      }
    },
    legend: {
      position: 'bottom'
    },
    plotOptions: {
      bar: {
        borderRadius: 5, // Arredonda as bordas das barras
        horizontal: true, // Torna o gráfico de barras horizontal
      }
    },
    grid: {
      show: true,
      borderColor: '#e0e0e0',
      strokeDashArray: 4,
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: '100%'
        },
        legend: {
          position: 'bottom'
        }
      }
    }],
    colors: ['#008FFB'] // Cor das barras
  };

  const series = [
    {
      name: 'Valor',
      data: [70, 60, 50, 40, 30]
    }
  ];

  return (
    <div className="chart-container--bar" ref={chartRef}>
      <Chart options={options} series={series} type="bar" width={chartWidth} />
    </div>
  );
}

export default BarChart;
