// Grafico de progreso
var option = {
    chart: {
      height: 200,
      type: "radialBar"
    },
    
    series: [67],
    
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "70%"
        },
       
        dataLabels: {
          showOn: "always",
          name: {
            offsetY: -7,
            show: true,
            color: "#9BCB3B",
            fontSize: "13px"
          },
          value: {
            offsetY: 3,
            color: "#cbcbe2",
            fontSize: "18px",
            show: true
          }
        }
      }
    },
  
    fill: {
        colors: ['#9BCB3B']
      },
  
    stroke: {
      lineCap: "round",
    },
    labels: ["Progreso"]
  };
  
  var progreso = new ApexCharts(document.querySelector("#progreso"), option);
  
  progreso.render();
  //FIN Grafico de progreso























  // grafico tipo PIE
var opcionesPIE = {
    series: [25, 15, 44, 55, 41, 17],
    colors: ['#007bff', '#4bc0c0', '#9bcb3b', '#ffab00', '#ff3e1d', '#6610f2'],
    chart: {      
    width: '100%',
    type: 'pie',
  },
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],  
  fill: {
    colors: ['#007bff', '#4bc0c0', '#9bcb3b', '#ffab00', '#ff3e1d', '#6610f2'],
  },  
  plotOptions: {    
    pie: {
      customScale: 1,
      dataLabels: {
        offset: 10
      }      
    }
  },
  title: {
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: true,
    style: {
        fontSize: '10px',
        fontWeight: 'bold',
        colors: ['#fff']
      },
    formatter(val, opts) {
      const name = opts.w.globals.labels[opts.seriesIndex]
      return [name, val.toFixed(1) + '%']
    },
    background: {
      enabled: true,
      foreColor: '#191924',
      padding: 5,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: '#fff',
      opacity: 0.8,
      dropShadow: {
        enabled: false,
        top: 1,
        left: 1,
        blur: 1,
        color: 'fff',
        opacity: 0.1
      }
    },
    dropShadow: {
      enabled: false,
      top: 1,
      left: 1,
      blur: 1,
      color: 'fff',
      opacity: 1
  }
  },
  legend:{
    show:true,
    position: 'bottom', 
    horizontalAlign: 'center',
    labels:{
      colors: '#fff',
      useSeriesColors: false
  
    }
  },
  tooltip: {
    enabled: true,
    fillSeriesColor: true,
    style: {
      fontSize: '12px',
      colors: ['#191924']
    },
  }
  
  };
  
  var pie = new ApexCharts(document.querySelector("#pie"), opcionesPIE);
  pie.render(); 
  //Fin grafico tipo PIE


























  //DONA GRafico
var optionsDONA1 = {
    colors: ['#007bff', '#4bc0c0', '#9bcb3b', '#ffab00', '#ff3e1d'],
    series: [44, 55, 41, 17, 15],
    labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Lemon'],
    chart: {
    type: 'donut',
    height: '250px'
  },
  legend:{
    show: false,
    position:'bottom'
  },
  plotOptions: {
    pie: {
      customScale: 1,
      donut: {
        size: '50%'
      }
    }
  },
  dataLabels: {
    enabled: true,  
    dropShadow: {
      enabled: false
    },
    style: {
      fontSize: '13px',
      fontFamily: 'montserrat',
      fontWeight: '700',
      colors: ['#ffffff']
  },
  }
  };
  
  var DONA1 = new ApexCharts(document.querySelector("#DONA1"), optionsDONA1);
  DONA1.render();
  //FIN DONA Grafico
  
  
  
  
  
  
  
  //DONA GRafico
  var optionsDONA2 = {
    colors: ['#6610f2', '#4bc0c0', '#9bcb3b', '#ffab00', '#ff3e1d'],
    series: [44, 55, 41, 17, 15],
    labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Lemon'],
    chart: {
    type: 'donut',
    height: '250px'
  },
  legend:{
    show: false,
    position:'bottom'
  },
  plotOptions: {
    pie: {
      customScale: 1,
      donut: {
        size: '50%'
      }
    }
  },
  dataLabels: {
    enabled: true,  
    dropShadow: {
      enabled: false
    },
    style: {
      fontSize: '13px',
      fontFamily: 'montserrat',
      fontWeight: '700',
      colors: ['#ffffff']
  },
  }
  };
  
  var DONA2 = new ApexCharts(document.querySelector("#DONA2"), optionsDONA2);
  DONA2.render();
  //FIN DONA Grafico
  
  
  
  
  
  
  
  //DONA GRafico
  var optionsDONA3 = {
    colors: ['#007bff', '#6610f2', '#9bcb3b', '#ffab00', '#ff3e1d'],
    series: [44, 55, 41, 17, 15],
    labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Lemon'],
    chart: {
    type: 'donut',
    height: '250px'
  },
  legend:{
    show: false,
    position:'bottom'
  },
  plotOptions: {
    pie: {
      customScale: 1,
      donut: {
        size: '50%'
      }
    }
  },
  dataLabels: {
    enabled: true,  
    dropShadow: {
      enabled: false
    },
    style: {
      fontSize: '13px',
      fontFamily: 'montserrat',
      fontWeight: '700',
      colors: ['#ffffff']
  },
  }
  };
  
  var DONA3 = new ApexCharts(document.querySelector("#DONA3"), optionsDONA3);
  DONA3.render();
  //FIN DONA Grafico
  
  




















 
 
 
//  Grafico de Duración, Distancia y Elevanción de cada entreno
 var optionsTiemDisElvEntreno1 = {
    colors: ["#9bcb3b", "#ffab00","#007bff"],
    series: [{
        name: 'Duración (h:m:s)',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 40, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 37, 21, 44]
      }, {
        name: 'Desnivel positivo (mts)',
        type: 'area',
        data: [1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055, 1241, 1067, 1222, 1343, 1021, 1241, 1056, 1027, 1243, 1044, 1255, 1141, 1167, 1022, 1243, 1021, 1141, 1256, 1027, 1143, 1037, 1221, 1244, 1422, 1344, 1555, 1041, 1067, 1222, 1543, 1321, 1241, 1056, 1027, 1243, 1144, 1255, 1441, 1067, 1222, 1043, 1021, 1241, 1556, 1027, 1043, 1244, 1355, 1441, 1067, 1222, 1443, 1021, 1241, 1456, 1027, 1243, 1344, 1055, 1241, 1467, 1322, 1043, 1421, 1641, 1756, 1027, 1243, 1237, 1021, 1044, 1222, 1044, 1155, 1041, 1267, 1022, 1443, 1021, 1241, 1256, 1327, 1243, 1044, 1455, 1041, 1267, 1322, 1343, 1021, 1241, 1056, 1027, 1243, 1144, 1555, 1041, 1267, 1022, 1343, 1021, 1241, 1256, 1127, 1043, 1344, 1055, 1241, 1067, 1122, 1043, 1221, 1641, 1356, 1027, 1243, 1037, 1221, 1644, 1022]
      }, {
        name: 'Distancia (Km)',
        type: 'line',
        data: [68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25, 101.36, 79.30, 92.45, 101.35, 79.64, 92.52, 101.59, 79.36, 92.39, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.37, 101.21, 79.44, 92.22, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 95.64, 81.52, 104.59, 95.36, 81.39, 104.30, 95.25, 81.36, 104.30, 95.45, 81.35, 104.64, 95.52, 81.59, 104.36, 95.39, 81.30, 104.25, 95.36, 81.30, 104.45, 95.35, 81.64, 104.52, 95.59, 81.36, 104.39, 95.27, 81.41, 104.74, 77.32, 84.30, 99.25, 77.36, 84.30, 99.45, 77.35, 84.64, 99.52, 77.59, 84.36, 99.39, 77.30, 84.25, 99.36, 77.30, 84.45, 99.35, 77.64, 84.52, 99.59, 114.36, 86.39, 72.30, 114.25, 86.36, 72.30, 114.45, 86.35, 72.64, 114.52, 86.59, 72.36, 114.39, 86.30, 72.25, 114.36, 84.30, 110.45, 84.35, 110.64, 84.52, 110.59, 84.36, 110.39, 84.27, 110.41, 84.74, 110.32]
      }],
    chart: {
    id: 'Chartbrush1',
    type: 'line',
    height: 350,
    stacked: false,
    toolbar: {
      autoSelected: 'pan',
      show: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '70%',
      borderRadius: 2
    }
  },
  fill: {
    opacity: [0.75, 0.25, 1],
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
    width: [0,2,4],
    curve: 'smooth',
    colors: ["#9bcb3b", "#ffab00","#007bff"]
  },
  grid:{
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
    size: 0
  },
  labels: ['01/01/2022', '01/02/2022', '01/03/2022', '01/04/2022', '01/05/2022', '01/06/2022', '01/07/2022', '01/08/2022', '01/09/2022', '01/10/2022', '01/11/2022', '01/12/2022', 
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
],
legend: {  
    show:true,
    offsetX: 7,
    position: 'bottom', 
    horizontalAlign: 'center',
    labels:{
      colors: '#fff',
      useSeriesColors: true
    }
  },
  xaxis: {          
    type: 'datetime',
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: [
    {
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#9bcb3b'
      },
      labels: {
        offsetX: -10,
        style: {
          colors: '#9bcb3b'
        }
      },
      title: {
        text: "Duración (hrs)",
        style: {
          color: '#9bcb3b',
          fontWeight:  '600',
          fontFamily:  'montserrat',
        }
      },
      tooltip: {
        enabled: true
      }
    },

    {
      seriesName: 'Desnivel (mts)',
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#ffab00'
      },
      labels: {
        offsetX: -15,
        style: {
          colors: '#ffab00',
        }
      },
      title: {
        text: "Desnivel (mts)",
        style: {
          color: '#ffab00',
          fontWeight:  '600',
          fontFamily:  'montserrat',
        }
      },
    },

    {
      seriesName: 'Distancia (Km)',
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#007bff'
      },
      labels: {
        offsetX: -18,
        style: {
          colors: '#007bff',
        },
      },
      title: {
        text: "Distancia (Km)",
        style: {
          color: '#007bff',
          fontWeight:  '600',
          fontFamily:  'montserrat',          
        }
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
  },
  };

  var TiemDisElvEntreno1 = new ApexCharts(document.querySelector("#TiemDisElvEntreno1"), optionsTiemDisElvEntreno1);
  TiemDisElvEntreno1.render();





  var optionsTiemDisElvEntreno2 = {
    colors: ["#9bcb3b", "#ffab00","#007bff"],
    series: [{
        name: 'Duración (h:m:s)',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 40, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 37, 21, 44]
      }, {
        name: 'Desnivel positivo (mts)',
        type: 'area',
        data: [1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055, 1241, 1067, 1222, 1343, 1021, 1241, 1056, 1027, 1243, 1044, 1255, 1141, 1167, 1022, 1243, 1021, 1141, 1256, 1027, 1143, 1037, 1221, 1244, 1422, 1344, 1555, 1041, 1067, 1222, 1543, 1321, 1241, 1056, 1027, 1243, 1144, 1255, 1441, 1067, 1222, 1043, 1021, 1241, 1556, 1027, 1043, 1244, 1355, 1441, 1067, 1222, 1443, 1021, 1241, 1456, 1027, 1243, 1344, 1055, 1241, 1467, 1322, 1043, 1421, 1641, 1756, 1027, 1243, 1237, 1021, 1044, 1222, 1044, 1155, 1041, 1267, 1022, 1443, 1021, 1241, 1256, 1327, 1243, 1044, 1455, 1041, 1267, 1322, 1343, 1021, 1241, 1056, 1027, 1243, 1144, 1555, 1041, 1267, 1022, 1343, 1021, 1241, 1256, 1127, 1043, 1344, 1055, 1241, 1067, 1122, 1043, 1221, 1641, 1356, 1027, 1243, 1037, 1221, 1644, 1022]
      }, {
        name: 'Distancia (Km)',
        type: 'line',
        data: [68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25, 101.36, 79.30, 92.45, 101.35, 79.64, 92.52, 101.59, 79.36, 92.39, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.37, 101.21, 79.44, 92.22, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 95.64, 81.52, 104.59, 95.36, 81.39, 104.30, 95.25, 81.36, 104.30, 95.45, 81.35, 104.64, 95.52, 81.59, 104.36, 95.39, 81.30, 104.25, 95.36, 81.30, 104.45, 95.35, 81.64, 104.52, 95.59, 81.36, 104.39, 95.27, 81.41, 104.74, 77.32, 84.30, 99.25, 77.36, 84.30, 99.45, 77.35, 84.64, 99.52, 77.59, 84.36, 99.39, 77.30, 84.25, 99.36, 77.30, 84.45, 99.35, 77.64, 84.52, 99.59, 114.36, 86.39, 72.30, 114.25, 86.36, 72.30, 114.45, 86.35, 72.64, 114.52, 86.59, 72.36, 114.39, 86.30, 72.25, 114.36, 84.30, 110.45, 84.35, 110.64, 84.52, 110.59, 84.36, 110.39, 84.27, 110.41, 84.74, 110.32]
      }],
    chart: {
    id: 'Chartbrush2',
    height: 150,
    type: 'area',
    brush:{
      target: 'Chartbrush1',
      enabled: true,      
    },
    selection: {
      enabled: true,
      fill: {       
        color:'#cbcbe2',
        opacity: 0.3,  
      },

      stroke: {
        color:'#fff',
        dasharray: 10,
        curve: 'smooth', 
        width: 1,
        opacity: 1                                     
      },

      xaxis: {
        min: new Date('10 Jun 2022').getTime(),
        max: new Date('24 Jun 2022').getTime()
      }
    },
  },
  labels: ['01/01/2022', '01/02/2022', '01/03/2022', '01/04/2022', '01/05/2022', '01/06/2022', '01/07/2022', '01/08/2022', '01/09/2022', '01/10/2022', '01/11/2022', '01/12/2022', 
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
],
colors: ["#9bcb3b", "#ffab00","#007bff"],
fill: {
    opacity: [0.75, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
  },
  grid:{
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
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: [
    {
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#9bcb3b'
      },
      labels: {
        offsetX: -10,
        style: {
          colors: '#9bcb3b'
        }
      },
      title: {
        text: "Duración (hrs)",
        style: {
          color: '#9bcb3b',
          fontWeight:  '600',
          fontFamily:  'montserrat',
        }
      },
      tooltip: {
        enabled: true
      }
    },

    {
      seriesName: 'Desnivel (mts)',
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#ffab00'
      },
      labels: {
        offsetX: -15,
        style: {
          colors: '#ffab00',
        }
      },
      title: {
        text: "Desnivel (mts)",
        style: {
          color: '#ffab00',
          fontWeight:  '600',
          fontFamily:  'montserrat',
        }
      },
    },

    {
      seriesName: 'Distancia (Km)',
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#007bff'
      },
      labels: {
        offsetX: -18,
        style: {
          colors: '#007bff',
        },
      },
      title: {
        text: "Distancia (Km)",
        style: {
          color: '#007bff',
          fontWeight:  '600',
          fontFamily:  'montserrat',          
        }
      }
    },
  ],
  legend: {  
    show:true,
    offsetX: 7,
    position: 'bottom', 
    horizontalAlign: 'center',
    labels:{
      colors: '#fff',
      useSeriesColors: true
    }
  },
  };

  var TiemDisElvEntreno2 = new ApexCharts(document.querySelector("#TiemDisElvEntreno2"), optionsTiemDisElvEntreno2);
  TiemDisElvEntreno2.render();
  //FIN  Grafico de Duración, Distancia y Elevanción de cada entreno





















// Grafico de duración: Acumulado y promedio de cada semana
var optionsDuraAcumYPromSem1 = {
    colors:['#9BCB3B','#ffab00'],
    series: [{
    name: 'Acumulada semanal (hh:mm:ss)',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160, 440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
  }, {
    name: 'Promedio semanal (hh:mm:ss)',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16, 23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }],
    chart: {
    height: 350,
    type: 'line',
    toolbar:{
      show:true,
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
  labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6', 'Sem 7', 'Sem 8', 'Sem 9', 'Sem 10', 'Sem 11', 'Sem 12', 'Sem 13', 'Sem 14', 'Sem 15', 'Sem 16', 'Sem 17', 'Sem 18', 'Sem 19', 'Sem 20', 'Sem 21', 'Sem 22', 'Sem 23', 'Sem 24',],
  xaxis: {
    type: '',
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2', '#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
  },
  yaxis: [{
    title: {
      text: 'Acumulado semanal (hh:mm:ss)',
      style: {
        color:'#9BCB3B'
      }
    },  
    labels:{      
      style:{
      colors:['#cbcbe2']
    },
    },
  }, {
    opposite: true,
    title: {
      text: 'Promedio semanal (hh:mm:ss)',
      style: {
        color:'#ffab00'
      }
    },  
    labels:{      
      style:{
      colors:['#cbcbe2']
      }
    }
  }],
  legend: {
    show:true,
    offsetY: -17,
    position: 'bottom', 
    horizontalAlign: 'center',
    labels:{
       colors: '#cbcbe2',
       useSeriesColors: true
      },
  },
  grid:{
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
  
  var DuraAcumYPromSem1 = new ApexCharts(document.querySelector("#DuraAcumYPromSem1"), optionsDuraAcumYPromSem1);
  DuraAcumYPromSem1.render();
//FIN Grafico de duración: Acumulado y promedio de cada semana










// Grafico de duración: Acumulado y promedio de cada mes
var optionsDuraAcumYPromSem2 = {
    colors:['#9BCB3B','#ff3e1d'],
    series: [{
    name: 'Acumulada mensual (hh:mm:ss)',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
  }, {
    name: 'Promedio mensual (hh:mm:ss)',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }],
    chart: {
    height: 350,
    type: 'line',
    toolbar:{
      show:true,
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
  labels: ['Mes 1', 'Mes 2', 'Mes 3', 'Mes 4', 'Mes 5', 'Mes 6','Mes 7', 'Mes 8', 'Mes 9', 'Mes 10', 'Mes 11', 'Mes 12'],
  xaxis: {
    type: '',
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
  },
  yaxis: [{
    title: {
      text: 'Acumulado mensual (hh:mm:ss)',
      style: {
        color:'#9BCB3B'
      }
    },  
    labels:{      
      style:{
      colors:['#cbcbe2']
    },
    },
  }, {
    opposite: true,
    title: {
      text: 'Promedio mensual (hh:mm:ss)',
      style: {
        color:'#ff3e1d'
      }
    },  
    labels:{      
      style:{
      colors:['#cbcbe2']
      }
    }
  }],
  legend: {
    show:true,
    offsetY: 0,
    position: 'bottom', 
    horizontalAlign: 'center',
    labels:{
       colors: '#cbcbe2',
       useSeriesColors: true
      },
  },
  grid:{
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
  
  var DuraAcumYPromSem2 = new ApexCharts(document.querySelector("#DuraAcumYPromSem2"), optionsDuraAcumYPromSem2);
  DuraAcumYPromSem2.render();
//FIN Grafico de duración: Acumulado y promedio de cada mes















// Grafico de duración: Acumulado y promedio de cada macrociclo
var optionsDuraAcumYPromSem3 = {
    colors:['#9BCB3B','#007bff'],
    series: [{
    name: 'Acumulada por macrociclo (hh:mm:ss)',
    type: 'column',
    data: [440, 505, 414, 671]
  }, {
    name: 'Promedio por macrociclo (hh:mm:ss)',
    type: 'line',
    data: [23, 42, 35, 27]
  }],
    chart: {
    height: 350,
    type: 'line',
    toolbar:{
      show:true,
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
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
  },
  yaxis: [{
    title: {
      text: 'Acumulado por macrociclo (hh:mm:ss)',
      style: {
        color:'#9BCB3B'
      }
    },  
    labels:{      
      style:{
      colors:['#cbcbe2']
    },
    },
  }, {
    opposite: true,
    title: {
      text: 'Promedio por macrociclo (hh:mm:ss)',
      style: {
        color:'#007bff'
      }
    },  
    labels:{      
      style:{
      colors:['#cbcbe2']
      }
    }
  }],
  legend: {
    show:true,
    offsetY: 0,
    position: 'bottom', 
    horizontalAlign: 'center',
    labels:{
       colors: '#cbcbe2',
       useSeriesColors: true
      },
  },
  grid:{
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
  
  var DuraAcumYPromSem3 = new ApexCharts(document.querySelector("#DuraAcumYPromSem3"), optionsDuraAcumYPromSem3);
  DuraAcumYPromSem3.render();
//FIN Grafico de duración: Acumulado y promedio de cada mes















// Grafico de distancia: Acumulada y promedio de cada semana
var optionsDistAcumYPromSem1 = {
    colors:['#ffab00','#9BCB3B'],
    series: [{
    name: 'Acumulada semanal (Km)',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160, 440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
  }, {
    name: 'Promedio semanal (Km)',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16, 23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }],
    chart: {
    height: 350,
    type: 'line',
    toolbar:{
      show:true,
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
  labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6', 'Sem 7', 'Sem 8', 'Sem 9', 'Sem 10', 'Sem 11', 'Sem 12', 'Sem 13', 'Sem 14', 'Sem 15', 'Sem 16', 'Sem 17', 'Sem 18', 'Sem 19', 'Sem 20', 'Sem 21', 'Sem 22', 'Sem 23', 'Sem 24',],
  xaxis: {
    type: '',
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2', '#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
  },
  yaxis: [{
    title: {
      text: 'Acumulada semanal (Km)',
      style: {
        color:'#ffab00'
      }
    },  
    labels:{      
      style:{
      colors:['#cbcbe2']
    },
    },
  }, {
    opposite: true,
    title: {
      text: 'Promedio semanal (Km)',
      style: {
        color:'#9BCB3B'
      }
    },  
    labels:{      
      style:{
      colors:['#cbcbe2']
      }
    }
  }],
  legend: {
    show:true,
    offsetY: -17,
    position: 'bottom', 
    horizontalAlign: 'center',
    labels:{
       colors: '#cbcbe2',
       useSeriesColors: true
      },
  },
  grid:{
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
//FIN Grafico de distancia: Acumulada y promedio de cada semana





// Grafico de distancia: Acumulada y promedio de cada mes
var optionsDistAcumYPromSem2 = {
    colors:['#007bff','#9BCB3B'],
    series: [{
    name: 'Acumulada mensual (Km)',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413,440, 505, 414, 671, 227, 413]
  }, {
    name: 'Promedio mensual (Km)',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 23, 42, 35, 27, 43, 22]
  }],
    chart: {
    height: 350,
    type: 'line',
    toolbar:{
      show:true,
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
  labels: ['Mes 1', 'Mes 2', 'Mes 3', 'Mes 4', 'Mes 5', 'Mes 6','Mes 7', 'Mes 8', 'Mes 9', 'Mes 10', 'Mes 11', 'Mes 12'],
  xaxis: {
    type: '',
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
  },
  yaxis: [{
    title: {
      text: 'Acumulada mensual (Km)',
      style: {
        color:'#007bff'
      }
    },  
    labels:{      
      style:{
      colors:['#cbcbe2']
    },
    },
  }, {
    opposite: true,
    title: {
      text: 'Promedio mensual (Km)',
      style: {
        color:'#9BCB3B'
      }
    },  
    labels:{      
      style:{
      colors:['#cbcbe2']
      }
    }
  }],
  legend: {
    show:true,
    offsetY: 0,
    position: 'bottom', 
    horizontalAlign: 'center',
    labels:{
       colors: '#cbcbe2',
       useSeriesColors: true
      },
  },
  grid:{
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
    colors:['#4bc0c0','#9BCB3B'],
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
    toolbar:{
      show:true,
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
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
  },
  yaxis: [{
    title: {
      text: 'Acumulada por mesociclo (Km)',
      style: {
        color:'#4bc0c0'
      }
    },  
    labels:{      
      style:{
      colors:['#cbcbe2']
    },
    },
  }, {
    opposite: true,
    title: {
      text: 'Promedio por mesociclo (Km)',
      style: {
        color:'#9BCB3B'
      }
    },  
    labels:{      
      style:{
      colors:['#cbcbe2']
      }
    }
  }],
  legend: {
    show:true,
    offsetY: 0,
    position: 'bottom', 
    horizontalAlign: 'center',
    labels:{
       colors: '#cbcbe2',
       useSeriesColors: true
      },
  },
  grid:{
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
//FIN Grafico de distancia: Acumulada y promedio de cada mesociclo