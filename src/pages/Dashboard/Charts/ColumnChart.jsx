import React, { useRef, useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const ColumnChart = () => {
  const [chartWidth, setChartWidth] = useState(0);
  const [chartHeight, setChartHeight] = useState(0);
  const chartRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        setChartWidth(chartRef.current.offsetWidth);
        setChartHeight(chartRef.current.offsetHeight);
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
      type: 'line'
    },
    title: {
      text: 'Comparativo Mensal: Real vs. Planejado',
      align: 'center',
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#263238'
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    // yaxis: {
    //   title: {
    //     text: 'Valores'
    //   }
    // },
    legend: {
      position: 'bottom'
    },
    // markers: {
    //   size: 4,
    //   hover: {
    //     size: 6
    //   }
    // },
    stroke: {
      curve: 'smooth'
    },
    grid: {
      show: true, // Defina como false para remover completamente as linhas de grade
      borderColor: '#e0e0e0', // Altere esta cor conforme necessário
      strokeDashArray: 4, // Ajuste para alterar o estilo das linhas (por exemplo, linhas tracejadas)
    },
    plotOptions: {
      bar: {
        borderRadius: 12, // Arredonda as bordas das barras
        borderWidth: 0, // Remove a borda das barras
        colors: {
          backgroundBarColors: ['#f3f4f5', '#fff'], // Cores de fundo das barras
          backgroundBarOpacity: 0,
          backgroundBarRadius: 0
        }
      }
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
    colors: ['#581D7C', '#00E396'] // Real (Azul) e Planejado (Verde)
  };

  const series = [
    {
      name: 'Real',
      type: 'column',
      data: [23, 34, 27, 45, 54, 33, 40, 65, 42, 55, 32, 41]
    },
    {
      name: 'Planejado',
      type: 'line',
      data: [30, 35, 25, 50, 55, 40, 45, 60, 50, 65, 35, 50]
    }
  ];

  return (
    <div className="chart-container--column" ref={chartRef}>
      <Chart options={options} series={series} type="line" height={chartHeight} width={chartWidth} />
    </div>
  );
}

export default ColumnChart;
