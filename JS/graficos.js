// Line Chart
  // --------------------------------------------------------------------

  const lineChart = document.getElementById('lineChart');
  if (lineChart) {
    const lineChartVar = new Chart(lineChart, {
      type: 'line',
      data: {
        labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
        datasets: [
          {
            data: [80, 150, 180, 270, 210, 160, 160, 202, 265, 210, 270, 255, 290, 360, 375],
            label: 'Europe',
            borderColor: config.colors.danger,
            tension: 0.5,
            pointStyle: 'circle',
            backgroundColor: config.colors.danger,
            fill: false,
            pointRadius: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 5,
            pointBorderColor: 'transparent',
            pointHoverBorderColor: config.colors.white,
            pointHoverBackgroundColor: config.colors.danger
          },
          {
            data: [80, 125, 105, 130, 215, 195, 140, 160, 230, 300, 220, 170, 210, 200, 280],
            label: 'Asia',
            borderColor: config.colors.primary,
            tension: 0.5,
            pointStyle: 'circle',
            backgroundColor: config.colors.primary,
            fill: false,
            pointRadius: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 5,
            pointBorderColor: 'transparent',
            pointHoverBorderColor: config.colors.white,
            pointHoverBackgroundColor: config.colors.primary
          },
          {
            data: [80, 99, 82, 90, 115, 115, 74, 75, 130, 155, 125, 90, 140, 130, 180],
            label: 'Africa',
            borderColor: yellowColor,
            tension: 0.5,
            pointStyle: 'circle',
            backgroundColor: yellowColor,
            fill: false,
            pointRadius: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 5,
            pointBorderColor: 'transparent',
            pointHoverBorderColor: config.colors.white,
            pointHoverBackgroundColor: yellowColor
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              color: borderColor,
              borderColor: borderColor
            },
            ticks: {
              color: axisColor
            }
          },
          y: {
            scaleLabel: {
              display: true
            },
            min: 0,
            max: 400,
            ticks: {
              color: axisColor,
              stepSize: 100
            },
            grid: {
              color: borderColor,
              borderColor: borderColor
            }
          }
        },
        plugins: {
          tooltip: {
            // Updated default tooltip UI
            rtl: isRtl,
            backgroundColor: config.colors.white,
            titleColor: config.colors.black,
            bodyColor: config.colors.black,
            borderWidth: 1,
            borderColor: borderColor
          },
          legend: {
            position: 'top',
            align: 'start',
            rtl: isRtl,
            labels: {
              usePointStyle: true,
              padding: 35,
              boxWidth: 6,
              color: axisColor
            }
          }
        }
      }
    });
  }