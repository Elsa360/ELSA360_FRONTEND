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








  //  Grafico de tiempo en cada zona de cada entreno FC
dataTZ1FCMes=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23]
dataTZ2FCMes=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144]
dataTZ3FCMes=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30]
dataTZ4FCMes=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23]
dataTZ5FCMes=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144]
dataTZ6FCMes=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30]
dataLabelsMes=['01/01/2022', '02/01/2022', '03/01/2022', '04/01/2022', '05/01/2022', '06/01/2022', '07/01/2022', '08/01/2022', '09/01/2022', '10/01/2022', '11/01/2022', '12/01/2022']

TXZonaFCEntreno(
  dataTZ1FCMes,dataTZ2FCMes,dataTZ3FCMes,dataTZ4FCMes,dataTZ5FCMes,dataTZ6FCMes, dataLabelsMes
  );

function TXZonaFCEntreno(
  dataTZ1FCMes,dataTZ2FCMes,dataTZ3FCMes,dataTZ4FCEnt,dataTZ5FCMes,dataTZ6FCMes, dataLabelsMes
  ) {
  
  var optionsTXZonaFC1 = {
    colors:['#007bff','#4bc0c0','#9BCB3B','#ffab00','#ff3e1d','#6610f2'],
    series: [{      
      name: 'Zona 1',
      type: 'bar',
      data: dataTZ1FCMes
    }, 
    {
      name: 'Zona 2',
      type: 'bar',
      data: dataTZ2FCMes
    }, 
    {
      name: 'Zona 3',
      type: 'bar',
      data: dataTZ3FCMes
    },
    {
      name: 'Zona 4',
      type: 'bar',
      data: dataTZ4FCMes
      
    }, 
    {
      name: 'Zona 5',
      type: 'bar',
      data: dataTZ5FCMes
    }, 
    {
      name: 'Zona 6',
      type: 'bar',
      data: dataTZ6FCMes
    },
    ],
    chart: {
      background: '#2b2c40',
      type: 'line',
      height: 420,
      stacked: false,
      
      toolbar: {
        autoSelected: 'pan',
        show: true,
        offsetX: -40,
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
            filename: 'Tiempo mensual en cada zona de entreno (FC)'
          },
          svg:{
            filename: 'Tiempo mensual en cada zona de entreno (FC)'
          },
          png:{
            filename: 'Tiempo mensual en cada zona de entreno (FC)'
          }
        }
      }
    },
    title:{
      text: 'Tiempo mensual en cada zona de entreno (FC)',
      offsetX: 10,
      style:{
        fontSize:  '18px',
        fontWeight:  '500',
        fontFamily:  'montserrat',
        color:  '#cbcbe2'
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '70%',
        borderRadius: 1
      }
    },
    fill: {
      opacity: [0.55, 0.55, 0.55, 0.55, 0.55, 0.55],
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
      width: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      curve: 'smooth',
      colors:['#007bff','#4bc0c0','#9BCB3B','#ffab00','#ff3e1d','#6610f2'],
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
      size: 4,
      colors:['#007bff','#4bc0c0','#9BCB3B','#ffab00','#ff3e1d','#6610f2'],
    strokeColors: ['#007bff','#4bc0c0','#9BCB3B','#ffab00','#ff3e1d','#6610f2'],
    },
    labels: dataLabelsMes ,
    legend: {
      show: true,
      offsetY: 10,
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '14px',
      itemMargin: {
        horizontal: 25,
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
          color: '#cbcbe2',
          offsetX: 5,
        },
        axisBorder: {
          show: true,
          color: '#cbcbe2',
          offsetX: -5,
        },
        labels: {
          rotate: 90,
          offsetX: -5,
          style: {
            colors: '#cbcbe2',
            fontSize:'10px'
          }
        },       
        
      },     
      {
        opposite: true,
        axisTicks: {
          show: true,
          offsetX: 9,
          color: '#cbcbe2',
        },
        axisBorder: {
          show: true,
          offsetX: -10,
          color: '#cbcbe2',
        },
        labels: {
          rotate: 90,
          offsetX: -10,
          style: {
            colors: '#cbcbe2',
            fontSize:'9px'
          }
        },
      },           
    ],
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + " - (h:m:s)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (h:m:s)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (h:m:s)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (h:m:s)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (h:m:s)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (h:m:s)"
            }
          }
        }
      ],
      fixed: {
        enabled: true,
        shared: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 60,
        offsetX: 30
      },
    }        
  };

  var TXZonaFC1 = new ApexCharts(document.querySelector("#TXZonaFC1"), optionsTXZonaFC1);
  TXZonaFC1.render();  
  
}
  //FIN  Grafico de tiempo en cada zona de cada entreno FC






























//  Grafico de tiempo en cada zona de cada entreno Potencia
dataTZ1PotenciaMes=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 40, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 37, 21, 44]
dataTZ2PotenciaMes=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055, 1241, 1067, 1222, 1343, 1021, 1241, 1056, 1027, 1243, 1044, 1255, 1141, 1167, 1022, 1243, 1021, 1141, 1256, 1027, 1143, 1037, 1221, 1244, 1422, 1344, 1555, 1041, 1067, 1222, 1543, 1321, 1241, 1056, 1027, 1243, 1144, 1255, 1441, 1067, 1222, 1043, 1021, 1241, 1556, 1027, 1043, 1244, 1355, 1441, 1067, 1222, 1443, 1021, 1241, 1456, 1027, 1243, 1344, 1055, 1241, 1467, 1322, 1043, 1421, 1641, 1756, 1027, 1243, 1237, 1021, 1044, 1222, 1044, 1155, 1041, 1267, 1022, 1443, 1021, 1241, 1256, 1327, 1243, 1044, 1455, 1041, 1267, 1322, 1343, 1021, 1241, 1056, 1027, 1243, 1144, 1555, 1041, 1267, 1022, 1343, 1021, 1241, 1256, 1127, 1043, 1344, 1055, 1241, 1067, 1122, 1043, 1221, 1641, 1356, 1027, 1243, 1037, 1221, 1644, 1022]
dataTZ3PotenciaMes=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25, 101.36, 79.30, 92.45, 101.35, 79.64, 92.52, 101.59, 79.36, 92.39, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.37, 101.21, 79.44, 92.22, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 95.64, 81.52, 104.59, 95.36, 81.39, 104.30, 95.25, 81.36, 104.30, 95.45, 81.35, 104.64, 95.52, 81.59, 104.36, 95.39, 81.30, 104.25, 95.36, 81.30, 104.45, 95.35, 81.64, 104.52, 95.59, 81.36, 104.39, 95.27, 81.41, 104.74, 77.32, 84.30, 99.25, 77.36, 84.30, 99.45, 77.35, 84.64, 99.52, 77.59, 84.36, 99.39, 77.30, 84.25, 99.36, 77.30, 84.45, 99.35, 77.64, 84.52, 99.59, 114.36, 86.39, 72.30, 114.25, 86.36, 72.30, 114.45, 86.35, 72.64, 114.52, 86.59, 72.36, 114.39, 86.30, 72.25, 114.36, 84.30, 110.45, 84.35, 110.64, 84.52, 110.59, 84.36, 110.39, 84.27, 110.41, 84.74, 110.32]
dataTZ4PotenciaMes=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 40, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 37, 21, 44]
dataTZ5PotenciaMes=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055, 1241, 1067, 1222, 1343, 1021, 1241, 1056, 1027, 1243, 1044, 1255, 1141, 1167, 1022, 1243, 1021, 1141, 1256, 1027, 1143, 1037, 1221, 1244, 1422, 1344, 1555, 1041, 1067, 1222, 1543, 1321, 1241, 1056, 1027, 1243, 1144, 1255, 1441, 1067, 1222, 1043, 1021, 1241, 1556, 1027, 1043, 1244, 1355, 1441, 1067, 1222, 1443, 1021, 1241, 1456, 1027, 1243, 1344, 1055, 1241, 1467, 1322, 1043, 1421, 1641, 1756, 1027, 1243, 1237, 1021, 1044, 1222, 1044, 1155, 1041, 1267, 1022, 1443, 1021, 1241, 1256, 1327, 1243, 1044, 1455, 1041, 1267, 1322, 1343, 1021, 1241, 1056, 1027, 1243, 1144, 1555, 1041, 1267, 1022, 1343, 1021, 1241, 1256, 1127, 1043, 1344, 1055, 1241, 1067, 1122, 1043, 1221, 1641, 1356, 1027, 1243, 1037, 1221, 1644, 1022]
dataTZ6PotenciaMes=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25, 101.36, 79.30, 92.45, 101.35, 79.64, 92.52, 101.59, 79.36, 92.39, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.37, 101.21, 79.44, 92.22, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 95.64, 81.52, 104.59, 95.36, 81.39, 104.30, 95.25, 81.36, 104.30, 95.45, 81.35, 104.64, 95.52, 81.59, 104.36, 95.39, 81.30, 104.25, 95.36, 81.30, 104.45, 95.35, 81.64, 104.52, 95.59, 81.36, 104.39, 95.27, 81.41, 104.74, 77.32, 84.30, 99.25, 77.36, 84.30, 99.45, 77.35, 84.64, 99.52, 77.59, 84.36, 99.39, 77.30, 84.25, 99.36, 77.30, 84.45, 99.35, 77.64, 84.52, 99.59, 114.36, 86.39, 72.30, 114.25, 86.36, 72.30, 114.45, 86.35, 72.64, 114.52, 86.59, 72.36, 114.39, 86.30, 72.25, 114.36, 84.30, 110.45, 84.35, 110.64, 84.52, 110.59, 84.36, 110.39, 84.27, 110.41, 84.74, 110.32]


TXZonaPotenciaEntreno(
  dataTZ1PotenciaMes,dataTZ2PotenciaMes,dataTZ3PotenciaMes,dataTZ4PotenciaMes,dataTZ5PotenciaMes,dataTZ6PotenciaMes, dataLabelsMes
  );

function TXZonaPotenciaEntreno(
  dataTZ1PotenciaMes,dataTZ2PotenciaMes,dataTZ3PotenciaMes,dataTZ4PotenciaMes,dataTZ5PotenciaMes,dataTZ6PotenciaMes, dataLabelsMes
  ) {
  
  var optionsTXZonaPotencia1 = {
    colors:['#007bff','#4bc0c0','#9BCB3B','#ffab00','#ff3e1d','#6610f2'],
    series: [{      
      name: 'Zona 1',
      type: 'bar',
      data: dataTZ1PotenciaMes
    }, 
    {
      name: 'Zona 2',
      type: 'bar',
      data: dataTZ2PotenciaMes
    }, 
    {
      name: 'Zona 3',
      type: 'bar',
      data: dataTZ3PotenciaMes
    },
    {
      name: 'Zona 4',
      type: 'bar',
      data: dataTZ4PotenciaMes
      
    }, 
    {
      name: 'Zona 5',
      type: 'bar',
      data: dataTZ5PotenciaMes
    }, 
    {
      name: 'Zona 6',
      type: 'bar',
      data: dataTZ6PotenciaMes
    },
    ],
    chart: {
      id: 'Chartbrush7',
      background: '#2b2c40',
      type: 'line',
      height: 420,
      stacked: false,
      
      toolbar: {
        autoSelected: 'pan',
        show: true,
        offsetX: -40,
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
            filename: 'Tiempo mensual en cada zona de entreno (FTP)'
          },
          svg:{
            filename: 'Tiempo mensual en cada zona de entreno (FTP)'
          },
          png:{
            filename: 'Tiempo mensual en cada zona de entreno (FTP)'
          }
        }
      }
    },
    title:{
      text: 'Tiempo mensual en cada zona de entreno (FTP)',
      offsetX: 10,
      style:{
        fontSize:  '18px',
        fontWeight:  '500',
        fontFamily:  'montserrat',
        color:  '#cbcbe2'
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '70%',
        borderRadius: 1
      }
    },
    fill: {
      opacity: [0.55, 0.55, 0.55, 0.55, 0.55, 0.55],
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
      width: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      curve: 'smooth',
      colors:['#007bff','#4bc0c0','#9BCB3B','#ffab00','#ff3e1d','#6610f2'],
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
      size: 4,
      colors:['#007bff','#4bc0c0','#9BCB3B','#ffab00','#ff3e1d','#6610f2'],
    strokeColors: ['#007bff','#4bc0c0','#9BCB3B','#ffab00','#ff3e1d','#6610f2'],
    },
    labels: dataLabelsMes ,
    legend: {
      show: true,
      offsetY: 10,
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '14px',
      itemMargin: {
        horizontal: 25,
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
          color: '#cbcbe2',
          offsetX: 5,
        },
        axisBorder: {
          show: true,
          color: '#cbcbe2',
          offsetX: -5,
        },
        labels: {
          rotate: 90,
          offsetX: -5,
          style: {
            colors: '#cbcbe2',
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
          offsetX: 9,
          color: '#cbcbe2',
        },
        axisBorder: {
          show: true,
          offsetX: -10,
          color: '#cbcbe2',
        },
        labels: {
          rotate: 90,
          offsetX: -10,
          style: {
            colors: '#cbcbe2',
            fontSize:'9px'
          }
        },
        tooltip: {
          enabled: false
        }
      },           
    ],
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + " - (h:m:s)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (h:m:s)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (h:m:s)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (h:m:s)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (h:m:s)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (h:m:s)"
            }
          }
        }
      ],
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      },
    }        
  };

  var TXZonaPotencia1 = new ApexCharts(document.querySelector("#TXZonaPotencia1"), optionsTXZonaPotencia1);
  TXZonaPotencia1.render();  
}
  //FIN  Grafico de tiempo en cada zona de cada entreno POTENCIA






























//  Grafico de tiempo en cada zona de cada entreno velocidad
// dataTZ1VelocidadEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 40, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 37, 21, 44]
// dataTZ2VelocidadEnt=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055, 1241, 1067, 1222, 1343, 1021, 1241, 1056, 1027, 1243, 1044, 1255, 1141, 1167, 1022, 1243, 1021, 1141, 1256, 1027, 1143, 1037, 1221, 1244, 1422, 1344, 1555, 1041, 1067, 1222, 1543, 1321, 1241, 1056, 1027, 1243, 1144, 1255, 1441, 1067, 1222, 1043, 1021, 1241, 1556, 1027, 1043, 1244, 1355, 1441, 1067, 1222, 1443, 1021, 1241, 1456, 1027, 1243, 1344, 1055, 1241, 1467, 1322, 1043, 1421, 1641, 1756, 1027, 1243, 1237, 1021, 1044, 1222, 1044, 1155, 1041, 1267, 1022, 1443, 1021, 1241, 1256, 1327, 1243, 1044, 1455, 1041, 1267, 1322, 1343, 1021, 1241, 1056, 1027, 1243, 1144, 1555, 1041, 1267, 1022, 1343, 1021, 1241, 1256, 1127, 1043, 1344, 1055, 1241, 1067, 1122, 1043, 1221, 1641, 1356, 1027, 1243, 1037, 1221, 1644, 1022]
// dataTZ3VelocidadEnt=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25, 101.36, 79.30, 92.45, 101.35, 79.64, 92.52, 101.59, 79.36, 92.39, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.37, 101.21, 79.44, 92.22, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 95.64, 81.52, 104.59, 95.36, 81.39, 104.30, 95.25, 81.36, 104.30, 95.45, 81.35, 104.64, 95.52, 81.59, 104.36, 95.39, 81.30, 104.25, 95.36, 81.30, 104.45, 95.35, 81.64, 104.52, 95.59, 81.36, 104.39, 95.27, 81.41, 104.74, 77.32, 84.30, 99.25, 77.36, 84.30, 99.45, 77.35, 84.64, 99.52, 77.59, 84.36, 99.39, 77.30, 84.25, 99.36, 77.30, 84.45, 99.35, 77.64, 84.52, 99.59, 114.36, 86.39, 72.30, 114.25, 86.36, 72.30, 114.45, 86.35, 72.64, 114.52, 86.59, 72.36, 114.39, 86.30, 72.25, 114.36, 84.30, 110.45, 84.35, 110.64, 84.52, 110.59, 84.36, 110.39, 84.27, 110.41, 84.74, 110.32]
// dataTZ4VelocidadEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 40, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 37, 21, 44]
// dataTZ5VelocidadEnt=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055, 1241, 1067, 1222, 1343, 1021, 1241, 1056, 1027, 1243, 1044, 1255, 1141, 1167, 1022, 1243, 1021, 1141, 1256, 1027, 1143, 1037, 1221, 1244, 1422, 1344, 1555, 1041, 1067, 1222, 1543, 1321, 1241, 1056, 1027, 1243, 1144, 1255, 1441, 1067, 1222, 1043, 1021, 1241, 1556, 1027, 1043, 1244, 1355, 1441, 1067, 1222, 1443, 1021, 1241, 1456, 1027, 1243, 1344, 1055, 1241, 1467, 1322, 1043, 1421, 1641, 1756, 1027, 1243, 1237, 1021, 1044, 1222, 1044, 1155, 1041, 1267, 1022, 1443, 1021, 1241, 1256, 1327, 1243, 1044, 1455, 1041, 1267, 1322, 1343, 1021, 1241, 1056, 1027, 1243, 1144, 1555, 1041, 1267, 1022, 1343, 1021, 1241, 1256, 1127, 1043, 1344, 1055, 1241, 1067, 1122, 1043, 1221, 1641, 1356, 1027, 1243, 1037, 1221, 1644, 1022]
// dataTZ6VelocidadEnt=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25, 101.36, 79.30, 92.45, 101.35, 79.64, 92.52, 101.59, 79.36, 92.39, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.37, 101.21, 79.44, 92.22, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 95.64, 81.52, 104.59, 95.36, 81.39, 104.30, 95.25, 81.36, 104.30, 95.45, 81.35, 104.64, 95.52, 81.59, 104.36, 95.39, 81.30, 104.25, 95.36, 81.30, 104.45, 95.35, 81.64, 104.52, 95.59, 81.36, 104.39, 95.27, 81.41, 104.74, 77.32, 84.30, 99.25, 77.36, 84.30, 99.45, 77.35, 84.64, 99.52, 77.59, 84.36, 99.39, 77.30, 84.25, 99.36, 77.30, 84.45, 99.35, 77.64, 84.52, 99.59, 114.36, 86.39, 72.30, 114.25, 86.36, 72.30, 114.45, 86.35, 72.64, 114.52, 86.59, 72.36, 114.39, 86.30, 72.25, 114.36, 84.30, 110.45, 84.35, 110.64, 84.52, 110.59, 84.36, 110.39, 84.27, 110.41, 84.74, 110.32]


// TXZonaVelocidadEntreno(
//   dataTZ1VelocidadEnt,dataTZ2VelocidadEnt,dataTZ3VelocidadEnt,dataTZ4VelocidadEnt,dataTZ5VelocidadEnt,dataTZ6VelocidadEnt, dataLabelsEnt
//   );

// function TXZonaVelocidadEntreno(
//   dataTZ1VelocidadEnt,dataTZ2VelocidadEnt,dataTZ3VelocidadEnt,dataTZ4VelocidadEnt,dataTZ5VelocidadEnt,dataTZ6VelocidadEnt, dataLabelsEnt
//   ) {
  
//   var optionsTXZonaVelocidad1 = {
//     colors:['#007bff','rgb(75, 192, 192)','#9BCB3B','rgb(255, 171, 0)','#ff3e1d','#6610f2'],
//     series: [{      
//       name: 'Zona 1',
//       type: 'bar',
//       data: dataTZ1VelocidadEnt
//     }, 
//     {
//       name: 'Zona 2',
//       type: 'bar',
//       data: dataTZ2VelocidadEnt
//     }, 
//     {
//       name: 'Zona 3',
//       type: 'bar',
//       data: dataTZ3VelocidadEnt
//     },
//     {
//       name: 'Zona 4',
//       type: 'bar',
//       data: dataTZ4VelocidadEnt
      
//     }, 
//     {
//       name: 'Zona 5',
//       type: 'bar',
//       data: dataTZ5VelocidadEnt
//     }, 
//     {
//       name: 'Zona 6',
//       type: 'bar',
//       data: dataTZ6VelocidadEnt
//     },
//     ],
//     chart: {
//       id: 'Chartbrush9',
//       background: '#2b2c40',
//       type: 'line',
//       height: 420,
//       stacked: false,
      
//       toolbar: {
//         autoSelected: 'pan',
//         show: true,
//         offsetX: -40,
//         offsetY: -5,
//         tools: {
//           download: true,
//           selection: false,
//           zoom: false,
//           zoomin: false,
//           zoomout: false,
//           pan: false,
//           reset: false | '<img src="/static/icons/reset.png" width="20">',
//           customIcons: []
//         },
//         export:{
//           csv:{
//             filename: 'Tiempo en cada zona de cada entreno (Velocidad)'
//           },
//           svg:{
//             filename: 'Tiempo en cada zona de cada entreno (Velocidad)'
//           },
//           png:{
//             filename: 'Tiempo en cada zona de cada entreno (Velocidad)'
//           }
//         }
//       }
//     },
//     title:{
//       text: 'Tiempo en cada zona de cada entreno (Velocidad)',
//       offsetX: 10,
//       style:{
//         fontSize:  '18px',
//         fontWeight:  '500',
//         fontFamily:  'montserrat',
//         color:  '#cbcbe2'
//       }
//     },
//     plotOptions: {
//       bar: {
//         columnWidth: '70%',
//         borderRadius: 2
//       }
//     },
//     fill: {
//       opacity: [0.55, 0.55, 0.55, 0.55, 0.55, 0.55, 0.55,0.55, 0.55,0.55, 0.55],
//       gradient: {
//         inverseColors: false,
//         shade: 'light',
//         type: "vertical",
//         opacityFrom: 0.85,
//         opacityTo: 0.55,
//         stops: [0, 100, 100, 100]
//       }
//     },
//     stroke: {
//       width: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//       curve: 'smooth',
//       colors:['#007bff','rgb(75, 192, 192)','#9BCB3B','rgb(255, 171, 0)','#ff3e1d','#6610f2'],
//     },
//     grid: {
//       show: true,
//       borderColor: '#191924',
//       strokeDashArray: 0,
//       position: 'back',
//       xaxis: {
//         lines: {
//           show: false
//         }
//       },
//       yaxis: {
//         lines: {
//           show: true
//         }
//       },
//       row: {
//         colors: undefined,
//         opacity: 0.1
//       },
//       column: {
//         colors: undefined,
//         opacity: 0.5
//       },
//       padding: {
//         top: 0,
//         right: 0,
//         bottom: 0,
//         left: 0
//       }
//     },
//     dataLabels: {
//       enabled: false
//     },
//     markers: {
//       size: 4,
//       colors:['#007bff','rgb(75, 192, 192)','#9BCB3B','rgb(255, 171, 0)','#ff3e1d','#6610f2'],
//     strokeColors: ['#007bff','rgb(75, 192, 192)','#9BCB3B','rgb(255, 171, 0)','#ff3e1d','#6610f2'],
//     },
//     labels: dataLabelsEnt ,
//     legend: {
//       show: true,
//       offsetY: 10,
//       position: 'bottom',
//       horizontalAlign: 'center',
//       fontSize: '14px',
//       itemMargin: {
//         horizontal: 25,
//         vertical: 10
//     },
//       labels: {
//         colors: '#fff',
//         useSeriesColors: false
//       }
//     },
//     xaxis: {
//       type: 'datetime',
//       labels: {
//         style: {
//           colors: ['#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2']
//         }
//       }

//     },
//     yaxis: [
//       {
//         axisTicks: {
//           show: true,
//           color: '#cbcbe2',
//           offsetX: 5,
//         },
//         axisBorder: {
//           show: true,
//           color: '#cbcbe2',
//           offsetX: -5,
//         },
//         labels: {
//           rotate: 90,
//           offsetX: -5,
//           style: {
//             colors: '#cbcbe2',
//             fontSize:'10px'
//           }
//         },       
//         tooltip: {
//           enabled: false
//         }
//       },     
//       {
//         opposite: true,
//         axisTicks: {
//           show: true,
//           offsetX: 9,
//           color: '#cbcbe2',
//         },
//         axisBorder: {
//           show: true,
//           offsetX: -10,
//           color: '#cbcbe2',
//         },
//         labels: {
//           rotate: 90,
//           offsetX: -10,
//           style: {
//             colors: '#cbcbe2',
//             fontSize:'9px'
//           }
//         },
//         tooltip: {
//           enabled: false
//         }
//       },           
//     ],
//     tooltip: {
//       y: [
//         {
//           title: {
//             formatter: function (val) {
//               return val + " - (h:m:s)"
//             }
//           }
//         },
//         {
//           title: {
//             formatter: function (val) {
//               return val + " - (h:m:s)"
//             }
//           }
//         },
//         {
//           title: {
//             formatter: function (val) {
//               return val + " - (h:m:s)"
//             }
//           }
//         },
//         {
//           title: {
//             formatter: function (val) {
//               return val + " - (h:m:s)"
//             }
//           }
//         },
//         {
//           title: {
//             formatter: function (val) {
//               return val + " - (h:m:s)"
//             }
//           }
//         },
//         {
//           title: {
//             formatter: function (val) {
//               return val + " - (h:m:s)"
//             }
//           }
//         }
//       ],
//       fixed: {
//         enabled: true,
//         position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
//         offsetY: 30,
//         offsetX: 60
//       },
//     }        
//   };

//   var TXZonaVelocidad1 = new ApexCharts(document.querySelector("#TXZonaVelocidad1"), optionsTXZonaVelocidad1);
//   TXZonaVelocidad1.render();

// }
  //FIN  Grafico de tiempo en cada zona de cada entreno VELOCIDAD