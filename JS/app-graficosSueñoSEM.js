Apex.chart= {
locales: [{
  "name": "es",
  "options": {
    "months": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    "shortMonths": ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    "days": ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    "shortDays": ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
    "toolbar": {
        "exportToSVG": "Descargar SVG",
        "exportToPNG": "Descargar PNG",
        "menu": "Menu",
        "selection": "Seleccón",
        "selectionZoom": "Zoom",
        "zoomIn": "Zoom In",
        "zoomOut": "Zoom Out",
        "pan": "Panoramico",
        "reset": "Reset Zoom"
    }
  }
}],
defaultLocale: "es",
};






  //  Grafico de Duración, Distancia y Elevanción de cada entreno
dataFCBasalSEM=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11]
dataHrsSueñoSEM=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055]
dataPasosSEM=[68.30, 171.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25]
dataLabelsEntSEM=['01/07/2022', '01/14/2022', '01/21/2022', '01/28/2022', '02/04/2022', '02/11/2022', '02/18/2022', '02/25/2022', '03/03/2022', '03/10/2022', '03/17/2022', '03/24/2022',
'03/31/2022', '04/07/2022', '04/14/2022', '04/21/2022', '04/28/2022', '05/05/2022', '05/12/2022', '05/17/2022', '05/24/2022', '05/31/2022', '06/07/2022', '06/14/2022']

durElvDistEntreno(dataFCBasalSEM,dataHrsSueñoSEM, dataPasosSEM, dataLabelsEntSEM);

function durElvDistEntreno(dataFCBasalSEM,dataHrsSueñoSEM, dataPasosSEM, dataLabelsEntSEM) {
  
  var optionsControlSueñoSEM1 = {
    colors: ["#ffab00", "#9bcb3b", "#007bff"],
    series: [
     {
      name: 'FC Basal',
      type: 'line',
      data: dataFCBasalSEM
    },
    {
      name: 'Hrs de Sueño',
      type: 'bar',
      data: dataHrsSueñoSEM
    },
    {
      name: 'N° Pasos',
      type: 'line',
      data: dataPasosSEM
    },
    ],
    chart: {
      background: '#2b2c40',
      type: 'line',
      height: 420,
      zoom:{
      enabled: true,
      type: 'x',
      autoScaleYaxis: true
    },
      stacked: false,      
      toolbar: {
        autoSelected: 'pan',
        show: true,
        offsetX: -20,
        offsetY: -5,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true | '<img src="/static/icons/reset.png" width="20">',
          customIcons: []
        },
        export:{
          csv:{
            filename: 'FC Basal, Hrs de sueño y Pasos semanales'
          },
          svg:{
            filename: 'FC Basal, Hrs de sueño y Pasos semanales'
          },
          png:{
            filename: 'FC Basal, Hrs de sueño y Pasos semanales'
          }
        }
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '75%',
        borderRadius: 1
      }
    },
    fill: {
      opacity: [0.95, 0.65, 0.95],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
    },
    stroke: {
      width: [4, 3, 4],
      curve: 'smooth',
      colors: ["#ffab00", "#9bcb3b", "#007bff"],
    },
    title: {
      text: 'FC Basal, Hrs de sueño y Pasos semanales',
      offsetX: 10,
      style: {
        fontSize:  '16px',
        fontWeight:  600,
        fontFamily:  'montserrat',
        color:  '#cbcbe2'
      },
    },
    grid: {
      show: true,
      borderColor: '#191924',
      strokeDashArray: 0,
      position: 'back',
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      row: {
        colors: undefined,
        opacity: 0.1
      },
      column: {
        colors: undefined,
        opacity: 0.5
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 5,
      colors: ["#ffab00", "#9bcb3b", "#007bff"],
    strokeColors: ["#ffab00", "#9bcb3b", "#007bff"],
    },
    labels: dataLabelsEntSEM ,
    legend: {
      show: true,
      offsetY: 10,
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '14px',
      itemMargin: {
        horizontal: 17,
        vertical: 10
    },
      labels: {
        colors: '#fff',
        useSeriesColors: false
      }
    },
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          colors: ['#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2']
        }
      }

    },
    yaxis: [
      {
        axisTicks: {
          show: true,
          color: '#ffab00',
          offsetX: 10,
        },
        axisBorder: {
          show: true,
          color: '#ffab00',
          offsetX: -10,
        },
        labels: {
          rotate: 90,
          offsetX: -10,
          style: {
            colors: '#ffab00',
            fontSize:'10px'
          }
        },       
        tooltip: {
          enabled: false
        }
      },
      {
        opposite: true,
        axisTicks: {          
          show: true,
          color: '#9bcb3b',
          offsetX: 10,
        },
        axisBorder: {
          show: true,
          color: '#9bcb3b',
          offsetX: -5,
        },
        labels: {
          rotate: 90,
          offsetX: -5,
          style: {
            colors: '#9bcb3b',
            fontSize:'9px',
          },
        },       
      },
      {
        axisTicks: {
          show: true,
          color: '#007bff',
          offsetX: 10,
        },
        axisBorder: {
          show: true,
          color: '#007bff',
          offsetX: -10,
        },
        labels: {
          rotate: 90,
          offsetX: 8,
          style: {
            colors: '#007bff',
            fontSize:'9px',
          },
        },       
      },
      
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      },
    },
    // responsive: [{
    //   breakpoint: 950,
    //   options: {
    //     chart:{    
    //       height: 250,
    //       sparkline: {
    //     enabled: true},
    //     },
    //     markers: {
    //       size: 3
    //     },
    //     legend: {
    //       show: true,
    //       offsetY: -10
    //     },
    //     xaxis: {
    //       axisBorder: {
    //         show: false},
    //         axisTicks: {
    //           show: false},    
    //     },
    //     yaxis: [
    //       {
    //         axisTicks: {
    //           show: false,
    //           color: '#9bcb3b',
    //           offsetX: 10,
    //         },
    //         axisBorder: {
    //           show: false,
    //           color: '#9bcb3b',
    //           offsetX: -10,
    //         },
    //         labels: {
    //           show: false,
    //           rotate: 90,
    //           offsetX: -10,
    //           style: {
    //             colors: '#9bcb3b',
    //             fontSize:'10px'
    //           }
    //         },       
    //         tooltip: {
    //           enabled: false
    //         }
    //       },
    //       {
    //         opposite: false,
    //         axisTicks: {          
    //           show: false,
    //           color: '#b2e2f2',
    //           offsetX: 10,
    //         },
    //         axisBorder: {
    //           show: false,
    //           color: '#b2e2f2',
    //           offsetX: -5,
    //         },
    //         labels: {
    //           show: false,
    //           rotate: 90,
    //           offsetX: -5,
    //           style: {
    //             colors: '#b2e2f2',
    //             fontSize:'9px',
    //           },
    //         },       
    //       },
    //       {
    //         axisTicks: {
    //           show: false,
    //           color: '#007bff',
    //           offsetX: 10,
    //         },
    //         axisBorder: {
    //           show: false,
    //           color: '#007bff',
    //           offsetX: -10,
    //         },
    //         labels: {
    //           show: false,
    //           rotate: 90,
    //           offsetX: 8,
    //           style: {
    //             colors: '#007bff',
    //             fontSize:'9px',
    //           },
    //         },       
    //       },
          
    //     ],
    //   },
    // }]        
  };

  var ControlSueñoSEM1 = new ApexCharts(document.querySelector("#ControlSueño1"), optionsControlSueñoSEM1);
  ControlSueñoSEM1.render();  
  
}
  //FIN  Grafico de Duración, Distancia y Elevanción de cada entreno