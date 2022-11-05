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











// grafico de duraciòn, distancia y desnivel semanal
dataDuracionAcumSem=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11]
dataDuracionPromSem=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11]

dataDesnivelAcumSem=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055]
dataDesnivelPromSem=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055]

dataDistanciaAcumSem=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25]
dataDistanciaPromSem=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25]

dataFCMaxPromSem=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11]
dataFCPromPromSem=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11]

dataPotenciaMaxPromSem=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055]
dataPotenciaPromPromSem=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25]

dataVelocidadMaxPromSem=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055]
dataVelocidadPromPromSem=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25]

dataCadenciaMaxPromSem=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055]
dataCadenciaPromPromSem=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25]
dataLabelsSem=['01/01/2022', '01/02/2022', '01/03/2022', '01/04/2022', '01/05/2022', '01/06/2022', '01/07/2022', '01/08/2022', '01/09/2022', '01/10/2022', '01/11/2022', '01/12/2022', '01/13/2022', '01/14/2022', '01/15/2022', '01/16/2022', '01/17/2022', '01/18/2022', '01/19/2022', '01/20/2022', '01/21/2022', '01/22/2022', '01/23/2022', '01/24/2022']

durElvDistSemana(
  dataDuracionAcumSem, dataDuracionPromSem, dataDesnivelAcumSem, dataDesnivelPromSem, dataDistanciaAcumSem, dataDistanciaPromSem,dataFCMaxPromSem, dataFCPromPromSem,dataPotenciaMaxPromSem,dataPotenciaPromPromSem,dataVelocidadMaxPromSem,dataVelocidadPromPromSem,dataCadenciaMaxPromSem,dataCadenciaPromPromSem, dataLabelsSem
  );

function durElvDistSemana(
  dataDuracionAcumSem, dataDuracionPromSem, dataDesnivelAcumSem, dataDesnivelPromSem, dataDistanciaAcumSem, dataDistanciaPromSem,dataFCMaxPromSem, dataFCPromPromSem,dataPotenciaMaxPromSem,dataPotenciaPromPromSem,dataVelocidadMaxPromSem,dataVelocidadPromPromSem,dataCadenciaMaxPromSem,dataCadenciaPromPromSem, dataLabelsSem
  ) {


var optionsDistAcumYPromSem1 = {
  colors: ["#9bcb3b", "#9bcb3b", "#b2e2f2","#b2e2f2", "#007bff","#007bff", "#ff3e1d", "#ffab00", "#4bc0c0", "#fff", "#F902EA","#FF7000","#E9B0F2", "#F2EB07"],
    series: [
      {
      name: 'Duración Acumulada',
      type: 'bar',
      data: dataDuracionAcumSem
    }, {
      name: 'Duración Promedio',
      type: 'line',
      data: dataDuracionPromSem
    }, {
      name: 'Desnivel Positivo Acumulado',
      type: 'bar',
      data: dataDesnivelAcumSem
    },
    {
      name: 'Desnivel Positivo Promedio',
      type: 'line',
      data: dataDesnivelPromSem
    }, {
      name: 'Distancia Acumulada',
      type: 'bar',
      data: dataDistanciaAcumSem
    }, {
      name: 'Distancia Promedio',
      type: 'line',
      data: dataDistanciaPromSem
    },
    {
      name: 'FC Max Promedio',
      type: 'line',
      data: dataFCMaxPromSem
    }, {
      name: 'FC Promedio',
      type: 'line',
      data: dataFCPromPromSem
    }, {
      name: 'Potencia Max Promedio',
      type: 'line',
      data: dataPotenciaMaxPromSem
    },
    {
      name: 'Potencia Promedio',
      type: 'line',
      data: dataPotenciaPromPromSem
    }, {
      name: 'Velocidad Max Promedio',
      type: 'line',
      data: dataVelocidadMaxPromSem
    }, {
      name: 'Velocidad Promedio',
      type: 'line',
      data: dataVelocidadPromPromSem
    },
    {
      name: 'Cadencia Max Promedio',
      type: 'line',
      data: dataCadenciaMaxPromSem
    }, {
      name: 'Cedencia Promedio',
      type: 'line',
      data: dataCadenciaPromPromSem
    }],
  chart: {
    height: 550,
    type: 'bar',
    zoom:{
      enabled: true,
      type: 'x',
      autoScaleYaxis: true
    },
    toolbar: {
      show: true,
      autoSelected:'zoom',
      offsetX:-20,
      offsetY:-20,
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
    }
  },
  tooltip: {
    fixed: {
      enabled: true,
      shared: true,
      position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
      offsetY: 30,
      offsetX: 60
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '70%',
      borderRadius: 2
    }
  },
  fill: {
    opacity: [0.70, 0.75, 0.70, 0.75, 0.70, 0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      opacityFrom: 0.1,
      opacityTo: 0.01,
      stops: [0, 100, 100, 100]
    }
  },
  stroke: {
    width: [0, 3, 0, 3, 0, 3,3,3,3,3,3,3,3,3],
    curve: 'smooth',
    colors: ["#9bcb3b", "#9bcb3b", "#b2e2f2","#b2e2f2", "#007bff","#007bff", "#ff3e1d", "#ffab00", "#4bc0c0", "#fff", "#F902EA","#FF7000","#E9B0F2", "#F2EB07"],
  },
  dataLabels: {
    enabled: false   
  },
  markers: {
    size: 4,
    colors: ["#9bcb3b", "#9bcb3b", "#b2e2f2","#b2e2f2", "#007bff","#007bff", "#ff3e1d", "#ffab00", "#4bc0c0", "#fff", "#F902EA","#FF7000","#E9B0F2", "#F2EB07"],
    strokeColors: ["#9bcb3b", "#9bcb3b", "#b2e2f2","#b2e2f2", "#007bff","#007bff", "#ff3e1d", "#ffab00", "#4bc0c0", "#fff", "#F902EA","#FF7000","#E9B0F2", "#F2EB07"],
  },
  labels: dataLabelsSem,
  xaxis: {
    type: 'datetime',
    labels: {
      style: {
        colors: ['#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2']
      }
    },
    group: {
      style: {
        fontSize: '13px',
        fontWeight: 400,
        colors: ['#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2',]
      },
      groups: [
        { title: 'Macrociclo 1', cols: 3 },
        { title: 'Macrociclo 2', cols: 3 },
        { title: 'Macrociclo 3', cols: 3},
        { title: 'Macrociclo 4', cols: 3}
      ]
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
        color: '#4bc0c0',
      },
      axisBorder: {
        show: true,
        color: '#4bc0c0',
        offsetX: -15,
      },
      labels: {
        rotate: 90,
        offsetX: -15,
        style: {
          colors: '#4bc0c0',
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
      },
      axisBorder: {
        show: true,
        color: '#fff',
        offsetX: -15,
      },
      labels: {
        rotate: 90,
        offsetX: -15,
        style: {
          colors: '#fff',
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
        color: '#F902EA',
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
        color: '#FF7000'
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
        enabled: false
      }
    },
    {
      opposite: true,
      axisTicks: {
        show: true,
        offsetX: 20,
        color: '#E9B0F2'
      },
      axisBorder: {
        show: true,
        color: '#E9B0F2',
        offsetX: -15
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
    {
      opposite: true,
      axisTicks: {
        show: true,
        offsetX: 9,
        color: '#F2EB07'
      },
      axisBorder: {
        show: true,
        color: '#F2EB07',
        offsetX: -15,
      },
      labels: {
        rotate: 90,
        offsetX: -15,
        style: {
          colors: '#F2EB07',
          fontSize:'9px'
        }
      },
      tooltip: {
        enabled: false
      }
    },
  ],
  legend: {
    show: true,
    offsetY: 10,
    position: 'bottom',
    horizontalAlign: 'center',
    fontSize: '12px',
    itemMargin: {
      horizontal: 25,
      vertical: 10
  },
    labels: {
      colors: '#fff',
      useSeriesColors: false
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
  
};

var DistAcumYPromSem1 = new ApexCharts(document.querySelector("#DistAcumYPromSem1"), optionsDistAcumYPromSem1);
DistAcumYPromSem1.render();
}
//FIN grafico de duraciòn, distancia y desnivel semanal
































// Grafico de distancia: Acumulada y promedio de cada mes
var optionsDistAcumYPromSem2 = {
  colors: ['#007bff', '#9BCB3B'],
  series: [{
    name: 'Acumulada mensual (Km)',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 440, 505, 414, 671, 227, 413]
  }, {
    name: 'Promedio mensual (Km)',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 23, 42, 35, 27, 43, 22]
  }],
  chart: {
    height: 350,
    type: 'bar',
    toolbar: {
      show: true,
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
  stroke: {
    width: [0, 3]
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1],
    style: {
      colors: ['#9BCB3B']
  },
    background: {
      enabled: true,
      foreColor: '#ffffff',
      padding: 5,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: '#ffffff',
      opacity: 1,
    }
  },
  labels: ['Mes 1', 'Mes 2', 'Mes 3', 'Mes 4', 'Mes 5', 'Mes 6', 'Mes 7', 'Mes 8', 'Mes 9', 'Mes 10', 'Mes 11', 'Mes 12'],
  xaxis: {
    type: 'category',
    labels: {
      style: {
        colors: ['#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2']
      }
    },
    group: {
      style: {
        fontSize: '13px',
        fontWeight: 400,
        colors: ['#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2',]
      },
      groups: [
        { title: 'Macrociclo 1', cols: 3 },
        { title: 'Macrociclo 2', cols: 3 },
        { title: 'Macrociclo 3', cols: 3 },
        { title: 'Macrociclo 4', cols: 3 }
      ]
    }
  },
  yaxis: [{
    title: {
      text: 'Acumulada mensual (Km)',
      style: {
        color: '#007bff'
      }
    },
    labels: {
      style: {
        colors: ['#cbcbe2']
      },
    },
  }, {
    opposite: true,
    title: {
      text: 'Promedio mensual (Km)',
      style: {
        color: '#9BCB3B'
      }
    },
    labels: {
      style: {
        colors: ['#cbcbe2']
      }
    }
  }],
  legend: {
    show: true,
    offsetY: 0,
    position: 'bottom',
    horizontalAlign: 'center',
    labels: {
      colors: '#cbcbe2',
      useSeriesColors: true
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
};

var DistAcumYPromSem2 = new ApexCharts(document.querySelector("#DistAcumYPromSem2"), optionsDistAcumYPromSem2);
DistAcumYPromSem2.render();
//FIN Grafico de distancia: Acumulada y promedio de cada mes





















// Grafico de distancia: Acumulada y promedio de cada mesociclo
var optionsDistAcumYPromSem3 = {
  colors: ['#4bc0c0', '#9BCB3B'],
  series: [{
    name: 'Acumulada por mesociclo (Km)',
    type: 'column',
    data: [440, 505, 414, 671]
  }, {
    name: 'Promedio por mesociclo (Km)',
    type: 'line',
    data: [23, 42, 35, 27]
  }],
  chart: {
    height: 350,
    type: 'line',
    toolbar: {
      show: true,
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
  stroke: {
    width: [0, 3]
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1],
    background: {
      enabled: true,
      foreColor: '#ffffff',
      padding: 5,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: '#ffffff',
      opacity: 1,
    }
  },
  labels: ['Macrociclo 1', 'Macrociclo 2', 'Macrociclo 3', 'Macrociclo 4'],
  xaxis: {
    type: '',
    labels: {
      style: {
        colors: ['#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2']
      }
    }
  },
  yaxis: [{
    title: {
      text: 'Acumulada por mesociclo (Km)',
      style: {
        color: '#4bc0c0'
      }
    },
    labels: {
      style: {
        colors: ['#cbcbe2']
      },
    },
  }, {
    opposite: true,
    title: {
      text: 'Promedio por mesociclo (Km)',
      style: {
        color: '#9BCB3B'
      }
    },
    labels: {
      style: {
        colors: ['#cbcbe2']
      }
    }
  }],
  legend: {
    show: true,
    offsetY: 0,
    position: 'bottom',
    horizontalAlign: 'center',
    labels: {
      colors: '#cbcbe2',
      useSeriesColors: true
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
};

var DistAcumYPromSem3 = new ApexCharts(document.querySelector("#DistAcumYPromSem3"), optionsDistAcumYPromSem3);
DistAcumYPromSem3.render();
DistAcumYPromSem3.toggleSeries('Promedio por mesociclo (Km)')
//FIN Grafico de distancia: Acumulada y promedio de cada mesociclo