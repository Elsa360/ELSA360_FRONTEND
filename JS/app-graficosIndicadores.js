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
dataFCMaxEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 40, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 37, 21, 44]
dataFCPromEnt=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055, 1241, 1067, 1222, 1343, 1021, 1241, 1056, 1027, 1243, 1044, 1255, 1141, 1167, 1022, 1243, 1021, 1141, 1256, 1027, 1143, 1037, 1221, 1244, 1422, 1344, 1555, 1041, 1067, 1222, 1543, 1321, 1241, 1056, 1027, 1243, 1144, 1255, 1441, 1067, 1222, 1043, 1021, 1241, 1556, 1027, 1043, 1244, 1355, 1441, 1067, 1222, 1443, 1021, 1241, 1456, 1027, 1243, 1344, 1055, 1241, 1467, 1322, 1043, 1421, 1641, 1756, 1027, 1243, 1237, 1021, 1044, 1222, 1044, 1155, 1041, 1267, 1022, 1443, 1021, 1241, 1256, 1327, 1243, 1044, 1455, 1041, 1267, 1322, 1343, 1021, 1241, 1056, 1027, 1243, 1144, 1555, 1041, 1267, 1022, 1343, 1021, 1241, 1256, 1127, 1043, 1344, 1055, 1241, 1067, 1122, 1043, 1221, 1641, 1356, 1027, 1243, 1037, 1221, 1644, 1022]
dataPotenciaMaxEnt=[68.30, 171.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25, 101.36, 79.30, 92.45, 101.35, 79.64, 92.52, 101.59, 79.36, 92.39, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.37, 101.21, 79.44, 92.22, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 95.64, 81.52, 104.59, 95.36, 81.39, 104.30, 95.25, 81.36, 104.30, 95.45, 81.35, 104.64, 95.52, 81.59, 104.36, 95.39, 81.30, 104.25, 95.36, 81.30, 104.45, 95.35, 81.64, 104.52, 95.59, 81.36, 104.39, 95.27, 81.41, 104.74, 77.32, 84.30, 99.25, 77.36, 84.30, 99.45, 77.35, 84.64, 99.52, 77.59, 84.36, 99.39, 77.30, 84.25, 99.36, 77.30, 84.45, 99.35, 77.64, 84.52, 99.59, 114.36, 86.39, 72.30, 114.25, 86.36, 72.30, 114.45, 86.35, 72.64, 114.52, 86.59, 72.36, 114.39, 86.30, 72.25, 114.36, 84.30, 110.45, 84.35, 110.64, 84.52, 110.59, 84.36, 110.39, 84.27, 110.41, 84.74, 110.32]
dataPotenciaPromEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 40, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 37, 21, 44]
dataVelocidadMaxEnt=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055, 1241, 1067, 1222, 1343, 1021, 1241, 1056, 1027, 1243, 1044, 1255, 1141, 1167, 1022, 1243, 1021, 1141, 1256, 1027, 1143, 1037, 1221, 1244, 1422, 1344, 1555, 1041, 1067, 1222, 1543, 1321, 1241, 1056, 1027, 1243, 1144, 1255, 1441, 1067, 1222, 1043, 1021, 1241, 1556, 1027, 1043, 1244, 1355, 1441, 1067, 1222, 1443, 1021, 1241, 1456, 1027, 1243, 1344, 1055, 1241, 1467, 1322, 1043, 1421, 1641, 1756, 1027, 1243, 1237, 1021, 1044, 1222, 1044, 1155, 1041, 1267, 1022, 1443, 1021, 1241, 1256, 1327, 1243, 1044, 1455, 1041, 1267, 1322, 1343, 1021, 1241, 1056, 1027, 1243, 1144, 1555, 1041, 1267, 1022, 1343, 1021, 1241, 1256, 1127, 1043, 1344, 1055, 1241, 1067, 1122, 1043, 1221, 1641, 1356, 1027, 1243, 1037, 1221, 1644, 1022]
dataVelocidadPromEnt=[8.30, 17.25, 9.36, 10.30, 9.45, 12.35, 10.64, 7.52, 12.59, 10.36, 9.39, 12.30, 11.25, 7.36, 12.30, 11.45, 9.35, 9.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25, 101.36, 79.30, 92.45, 101.35, 79.64, 92.52, 101.59, 79.36, 92.39, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.37, 101.21, 79.44, 92.22, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 95.64, 81.52, 104.59, 95.36, 81.39, 104.30, 95.25, 81.36, 104.30, 95.45, 81.35, 104.64, 95.52, 81.59, 104.36, 95.39, 81.30, 104.25, 95.36, 81.30, 104.45, 95.35, 81.64, 104.52, 95.59, 81.36, 104.39, 95.27, 81.41, 104.74, 77.32, 84.30, 99.25, 77.36, 84.30, 99.45, 77.35, 84.64, 99.52, 77.59, 84.36, 99.39, 77.30, 84.25, 99.36, 77.30, 84.45, 99.35, 77.64, 84.52, 99.59, 114.36, 86.39, 72.30, 114.25, 86.36, 72.30, 114.45, 86.35, 72.64, 114.52, 86.59, 72.36, 114.39, 86.30, 72.25, 114.36, 84.30, 110.45, 84.35, 110.64, 84.52, 110.59, 84.36, 110.39, 84.27, 110.41, 84.74, 110.32]
dataCadenciaMaxEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 40, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 37, 21, 44]
dataCadenciaPromEnt=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055, 1241, 1067, 1222, 1343, 1021, 1241, 1056, 1027, 1243, 1044, 1255, 1141, 1167, 1022, 1243, 1021, 1141, 1256, 1027, 1143, 1037, 1221, 1244, 1422, 1344, 1555, 1041, 1067, 1222, 1543, 1321, 1241, 1056, 1027, 1243, 1144, 1255, 1441, 1067, 1222, 1043, 1021, 1241, 1556, 1027, 1043, 1244, 1355, 1441, 1067, 1222, 1443, 1021, 1241, 1456, 1027, 1243, 1344, 1055, 1241, 1467, 1322, 1043, 1421, 1641, 1756, 1027, 1243, 1237, 1021, 1044, 1222, 1044, 1155, 1041, 1267, 1022, 1443, 1021, 1241, 1256, 1327, 1243, 1044, 1455, 1041, 1267, 1322, 1343, 1021, 1241, 1056, 1027, 1243, 1144, 1555, 1041, 1267, 1022, 1343, 1021, 1241, 1256, 1127, 1043, 1344, 1055, 1241, 1067, 1122, 1043, 1221, 1641, 1356, 1027, 1243, 1037, 1221, 1644, 1022]
dataLabelsEnt=['01/01/2022', '01/02/2022', '01/03/2022', '01/04/2022', '01/05/2022', '01/06/2022', '01/07/2022', '01/08/2022', '01/09/2022', '01/10/2022', '01/11/2022', '01/12/2022',
'01/13/2022', '01/14/2022', '01/15/2022', '01/16/2022', '01/17/2022', '01/18/2022', '01/19/2022', '01/20/2022', '01/21/2022', '01/22/2022', '01/23/2022', '01/24/2022',
'02/01/2022', '02/02/2022', '02/03/2022', '02/04/2022', '02/05/2022', '02/06/2022', '02/07/2022', '02/08/2022', '02/09/2022', '02/10/2022', '02/11/2022', '02/12/2022',
'02/13/2022', '02/14/2022', '02/15/2022', '02/16/2022', '02/17/2022', '02/18/2022', '02/19/2022', '02/20/2022', '02/21/2022', '02/22/2022', '02/23/2022', '02/24/2022',
'03/01/2022', '03/02/2022', '03/03/2022', '03/04/2022', '03/05/2022', '03/06/2022', '03/07/2022', '03/08/2022', '03/09/2022', '03/10/2022', '03/11/2022', '03/12/2022',
'03/13/2022', '03/14/2022', '03/15/2022', '03/16/2022', '03/17/2022', '03/18/2022', '03/19/2022', '03/20/2022', '03/21/2022', '03/22/2022', '03/23/2022', '03/24/2022',
'04/01/2022', '04/02/2022', '04/03/2022', '04/04/2022', '04/05/2022', '04/06/2022', '04/07/2022', '04/08/2022', '04/09/2022', '04/10/2022', '04/11/2022', '04/12/2022',
'04/13/2022', '04/14/2022', '04/15/2022', '04/16/2022', '04/17/2022', '04/18/2022', '04/19/2022', '04/20/2022', '04/21/2022', '04/22/2022', '04/23/2022', '04/24/2022',
'05/01/2022', '05/02/2022', '05/03/2022', '05/04/2022', '05/05/2022', '05/06/2022', '05/07/2022', '05/08/2022', '05/09/2022', '05/10/2022', '05/11/2022', '05/12/2022',
'05/13/2022', '05/14/2022', '05/15/2022', '05/16/2022', '05/17/2022', '05/18/2022', '05/19/2022', '05/20/2022', '05/21/2022', '05/22/2022', '05/23/2022', '05/24/2022',
'06/01/2022', '06/02/2022', '06/03/2022', '06/04/2022', '06/05/2022', '06/06/2022', '06/07/2022', '06/08/2022', '06/09/2022', '06/10/2022', '06/11/2022', '06/12/2022',
'06/13/2022', '06/14/2022', '06/15/2022', '06/16/2022', '06/17/2022', '06/18/2022', '06/19/2022', '06/20/2022', '06/21/2022', '06/22/2022', '06/23/2022', '06/24/2022'
]

durElvDistEntreno(
  dataFCMaxEnt,dataFCPromEnt, dataPotenciaMaxEnt, dataPotenciaPromEnt,dataVelocidadMaxEnt,dataVelocidadPromEnt,dataCadenciaMaxEnt,dataCadenciaPromEnt, dataLabelsEnt
  );

function durElvDistEntreno(
  dataFCMaxEnt,dataFCPromEnt, dataPotenciaMaxEnt, dataPotenciaPromEnt,dataVelocidadMaxEnt,dataVelocidadPromEnt,dataCadenciaMaxEnt,dataCadenciaPromEnt, dataLabelsEnt
  ) {
  
  var optionsTiemDisElvEntreno1 = {
    colors: ["#9bcb3b", "#b2e2f2", "#007bff", "#ff3e1d", "#ffab00","#F902EA","#FF7000","#E9B0F2"],
    series: [
     {
      name: 'FC Promedio',
      type: 'line',
      data: dataFCPromEnt
    },
    {
      name: 'FC Máxima',
      type: 'line',
      data: dataFCMaxEnt
    },
    {
      name: 'Potencia Máxima',
      type: 'line',
      data: dataPotenciaMaxEnt
    },
    {
      name: 'Potencia Promedio',
      type: 'line',
      data: dataPotenciaPromEnt
    }, {
      name: 'Velocidad Máxima',
      type: 'line',
      data: dataVelocidadMaxEnt
    },
    {
      name: 'Velocidad Promedio',
      type: 'line',
      data: dataVelocidadPromEnt
    }, {
      name: 'Cadencia Máxima',
      type: 'line',
      data: dataCadenciaMaxEnt
    }, {
      name: 'Cadencia Promedio',
      type: 'line',
      data: dataCadenciaPromEnt
    }],
    chart: {
      id: 'Chartbrush1',
      background: '#2b2c40',
      type: 'line',
      height: 500,
      stacked: false,
      
      toolbar: {
        autoSelected: 'pan',
        show: true,
        offsetX: -40,
        offsetY: 0,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false | '<img src="/static/icons/reset.png" width="20">',
          customIcons: []
        },
      }
    },
    title:{
      text: 'FC, potencia, velocidad y cadencia de tus entrenos',
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
        columnWidth: '75%',
        borderRadius: 2
      }
    },
    fill: {
      opacity: [0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75,0.75],
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
      width: [4, 4, 4, 4, 4, 4, 4, 4],
      curve: 'smooth',
      colors: ["#9bcb3b", "#b2e2f2", "#007bff", "#ff3e1d", "#ffab00","#F902EA","#FF7000","#E9B0F2"],
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
      colors: ["#9bcb3b", "#b2e2f2", "#007bff", "#ff3e1d", "#ffab00","#F902EA","#FF7000","#E9B0F2"],
    strokeColors: ["#9bcb3b", "#b2e2f2", "#007bff", "#ff3e1d", "#ffab00","#F902EA","#FF7000","#E9B0F2"],
    },
    labels: dataLabelsEnt ,
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
          color: '#9bcb3b',
          offsetX: 20,
        },
        axisBorder: {
          show: true,
          color: '#9bcb3b',
          offsetX: -15,
        },
        labels: {
          rotate: 90,
          offsetX: -20,
          style: {
            colors: '#9bcb3b',
            fontSize:'10px'
          }
        },       
        tooltip: {
          enabled: false
        }
      },
      {
        axisTicks: {
          show: true,
          color: '#b2e2f2',
          offsetX: 20,
        },
        axisBorder: {
          show: true,
          color: '#b2e2f2',
          offsetX: -15,
        },
        labels: {
          rotate: 90,
          offsetX: -15,
          style: {
            colors: '#b2e2f2',
            fontSize:'9px',
          },
        },       
      },
      {
        axisTicks: {
          show: true,
          color: '#007bff',
          offsetX: 20,
        },
        axisBorder: {
          show: true,
          color: '#007bff',
          offsetX: -15,
        },
        labels: {
          rotate: 90,
          offsetX: -15,
          style: {
            colors: '#007bff',
            fontSize:'9px',
          },
        },       
      },
      {
        axisTicks: {
          show: true,
          offsetX: 20,
          color: '#ff3e1d',
        },
        axisBorder: {
          show: true,
          color: '#ff3e1d',
          offsetX: -15,
        },
        labels: {
          rotate: 90,
          offsetX: -15,
          style: {
            colors: '#ff3e1d',
            fontSize:'9px'
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
          color: '#ffab00',
        },
        axisBorder: {
          show: true,
          offsetX: -15,
          color: '#ffab00',
        },
        labels: {
          rotate: 90,
          offsetX: -15,
          style: {
            colors: '#ffab00',
            fontSize:'9px'
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
          offsetX: 20,
          color: '##F902EA',
        },
        axisBorder: {
          show: true,
          color: '#F902EA',
          offsetX: -15,
        },
        labels: {
          rotate: 90,
          offsetX: -15,
          style: {
            colors: '#F902EA',
            fontSize:'9px'
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
          color: '#FF7000',
        },
        axisBorder: {
          show: true,
          color: '#FF7000',
          offsetX: -15,
        },
        labels: {
          rotate: 90,
          offsetX: -15,
          style: {
            colors: '#FF7000',
            fontSize:'9px'
          }
        },
        tooltip: {
          enabled: false,
          offsetX: 20,
        }
      },
      {
        axisTicks: {
          show: true,
          offsetX: 20,
          color: '#E9B0F2',
        },
        axisBorder: {
          show: true,
          color: '#E9B0F2',
          offsetX: -15,
        },
        labels: {
          rotate: 90,
          offsetX: -15,
          style: {
            colors: '#E9B0F2',
            fontSize:'9px'
          }
        },
        tooltip: {
          enabled: false
        }
      },
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      },
    }        
  };

  var TiemDisElvEntreno1 = new ApexCharts(document.querySelector("#TiemDisElvEntreno1"), optionsTiemDisElvEntreno1);
  TiemDisElvEntreno1.render();  
  TiemDisElvEntreno1.toggleSeries('FC Máxima')
  TiemDisElvEntreno1.toggleSeries('Velocidad Máxima')
  TiemDisElvEntreno1.toggleSeries('Cadencia Máxima')
  TiemDisElvEntreno1.toggleSeries('Cadencia Promedio')
  




  var optionsTiemDisElvEntreno2 = {
    colors: ["#9bcb3b", "#b2e2f2", "#007bff", "#ff3e1d", "#ffab00","#F902EA","#FF7000","#E9B0F2"],
    series: [
    {
      name: 'FC Máxima',
      type: 'line',
      data: dataFCMaxEnt
    }, {
      name: 'FC Promedio',
      type: 'line',
      data: dataFCPromEnt
    }, {
      name: 'Potencia Máxima',
      type: 'line',
      data: dataPotenciaMaxEnt
    },
    {
      name: 'Potencia Promedio',
      type: 'line',
      data: dataPotenciaPromEnt
    }, {
      name: 'Velocidad Máxima',
      type: 'line',
      data: dataVelocidadMaxEnt
    },
    {
      name: 'Velocidad Promedio',
      type: 'line',
      data: dataVelocidadPromEnt
    }, {
      name: 'Cadencia Máxima',
      type: 'line',
      data: dataCadenciaMaxEnt
    }, {
      name: 'Cadencia Promedio',
      type: 'line',
      data: dataCadenciaPromEnt
    }],
    chart: {
      id: 'Chartbrush2',
      height: 150,
      type: 'area',
      brush: {
        target: 'Chartbrush1',
        enabled: true,
      },
      selection: {
        enabled: true,
        fill: {
          color: '#cbcbe2',
          opacity: 0.3,
        },

        stroke: {
          color: '#fff',
          dasharray: 10,
          curve: 'smooth',
          width: 1,
          opacity: 1
        },

        xaxis: {
          min: new Date('1 Jun 2022').getTime(),
          max: new Date('14 Jun 2022').getTime()
        }
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '75%',
        borderRadius: 2
      }
    },
    stroke: {
      width: [1, 1, 1, 1, 1, 1, 1, 1],
      curve: 'smooth',
      colors: ["#9bcb3b", "#b2e2f2", "#007bff", "#ff3e1d", "#ffab00","#F902EA","#FF7000","#E9B0F2"],
    },
    labels: dataLabelsEnt,
    colors: ["#9bcb3b", "#b2e2f2", "#007bff", "#ff3e1d", "#ffab00","#F902EA","#FF7000","#E9B0F2"],
    fill: {
      opacity: [0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75,0.75],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
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
    xaxis: {
      type: 'datetime',
      tooltip: {
        enabled: false
      },
      labels: {
        style: {
          colors: ['#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2']
        }
      },      
    },
    yaxis: [
      {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: true,
          color: '#fff'
        },
        labels: {
          show:false,
          offsetX: -10,
          style: {
            colors: '#9bcb3b'
          }
        },
      },

      {        
        opposite: true,
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: true,
          color: '#fff'
        },
        labels: {
          show: false,
          offsetX: -15,
          style: {
            colors: '#ffab00',
          }
        },        
      },
      
    ],
    legend: {
      show: false,
      offsetX: 7,
      position: 'bottom',
      horizontalAlign: 'center',
      labels: {
        colors: '#fff',
        useSeriesColors: true
      }
    },    
  };

  var TiemDisElvEntreno2 = new ApexCharts(document.querySelector("#TiemDisElvEntreno2"), optionsTiemDisElvEntreno2);
  TiemDisElvEntreno2.render();
}
  //FIN  Grafico de Duración, Distancia y Elevanción de cada entreno