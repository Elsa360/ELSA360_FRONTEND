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
  dataTZ1FCEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11]
  dataTZ2FCEnt=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055]
  dataTZ3FCEnt=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25]
  dataTZ4FCEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11]
  dataTZ5FCEnt=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055]
  dataTZ6FCEnt=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25]
  dataLabelsEnt=['01/01/2022', '01/02/2022', '01/03/2022', '01/04/2022', '01/05/2022', '01/06/2022', '01/07/2022', '01/08/2022', '01/09/2022', '01/10/2022', '01/11/2022', '01/12/2022',
  '01/13/2022', '01/14/2022', '01/15/2022', '01/16/2022', '01/17/2022', '01/18/2022', '01/19/2022', '01/20/2022', '01/21/2022', '01/22/2022', '01/23/2022', '01/24/2022',]
  
  TXZonaFCEntreno(
    dataTZ1FCEnt,dataTZ2FCEnt,dataTZ3FCEnt,dataTZ4FCEnt,dataTZ5FCEnt,dataTZ6FCEnt, dataLabelsEnt
    );
  
  function TXZonaFCEntreno(
    dataTZ1FCEnt,dataTZ2FCEnt,dataTZ3FCEnt,dataTZ4FCEnt,dataTZ5FCEnt,dataTZ6FCEnt, dataLabelsEnt
    ) {
    
    var optionsTXZonaFC1 = {
      colors:['#007bff','#4bc0c0','#9BCB3B','#ffab00','#ff3e1d','#6610f2'],
      series: [{      
        name: 'Zona 1',
        type: 'bar',
        data: dataTZ1FCEnt
      }, 
      {
        name: 'Zona 2',
        type: 'bar',
        data: dataTZ2FCEnt
      }, 
      {
        name: 'Zona 3',
        type: 'bar',
        data: dataTZ3FCEnt
      },
      {
        name: 'Zona 4',
        type: 'bar',
        data: dataTZ4FCEnt
        
      }, 
      {
        name: 'Zona 5',
        type: 'bar',
        data: dataTZ5FCEnt
      }, 
      {
        name: 'Zona 6',
        type: 'bar',
        data: dataTZ6FCEnt
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
              filename: 'Tiempo semanal en cada zona de entreno (FC)'
            },
            svg:{
              filename: 'Tiempo semanal en cada zona de entreno (FC)'
            },
            png:{
              filename: 'Tiempo semanal en cada zona de entreno (FC)'
            }
          }
        }
      },
      title:{
        text: 'Tiempo semanal en cada zona de entreno (FC)',
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
      labels: dataLabelsEnt ,
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
  dataTZ1PotenciaEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11]
  dataTZ2PotenciaEnt=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055]
  dataTZ3PotenciaEnt=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25]
  dataTZ4PotenciaEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11]
  dataTZ5PotenciaEnt=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055]
  dataTZ6PotenciaEnt=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25]
  
  
  TXZonaPotenciaEntreno(
    dataTZ1PotenciaEnt,dataTZ2PotenciaEnt,dataTZ3PotenciaEnt,dataTZ4PotenciaEnt,dataTZ5PotenciaEnt,dataTZ6PotenciaEnt, dataLabelsEnt
    );
  
  function TXZonaPotenciaEntreno(
    dataTZ1PotenciaEnt,dataTZ2PotenciaEnt,dataTZ3PotenciaEnt,dataTZ4PotenciaEnt,dataTZ5PotenciaEnt,dataTZ6PotenciaEnt, dataLabelsEnt
    ) {
    
    var optionsTXZonaPotencia1 = {
      colors:['#007bff','#4bc0c0','#9BCB3B','#ffab00','#ff3e1d','#6610f2'],
      series: [{      
        name: 'Zona 1',
        type: 'bar',
        data: dataTZ1PotenciaEnt
      }, 
      {
        name: 'Zona 2',
        type: 'bar',
        data: dataTZ2PotenciaEnt
      }, 
      {
        name: 'Zona 3',
        type: 'bar',
        data: dataTZ3PotenciaEnt
      },
      {
        name: 'Zona 4',
        type: 'bar',
        data: dataTZ4PotenciaEnt
        
      }, 
      {
        name: 'Zona 5',
        type: 'bar',
        data: dataTZ5PotenciaEnt
      }, 
      {
        name: 'Zona 6',
        type: 'bar',
        data: dataTZ6PotenciaEnt
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
              filename: 'Tiempo semanal en cada zona de entreno (FTP)'
            },
            svg:{
              filename: 'Tiempo semanal en cada zona de entreno (FTP)'
            },
            png:{
              filename: 'Tiempo semanal en cada zona de entreno (FTP)'
            }
          }
        }
      },
      title:{
        text: 'Tiempo semanal en cada zona de entreno (FTP)',
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
      labels: dataLabelsEnt ,
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
  // dataTZ1VelocidadEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11]
  // dataTZ2VelocidadEnt=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055]
  // dataTZ3VelocidadEnt=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25]
  // dataTZ4VelocidadEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11]
  // dataTZ5VelocidadEnt=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055]
  // dataTZ6VelocidadEnt=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25]
  
  
  // TXZonaVelocidadEntreno(
  //   dataTZ1VelocidadEnt,dataTZ2VelocidadEnt,dataTZ3VelocidadEnt,dataTZ4VelocidadEnt,dataTZ5VelocidadEnt,dataTZ6VelocidadEnt, dataLabelsEnt
  //   );
  
  // function TXZonaVelocidadEntreno(
  //   dataTZ1VelocidadEnt,dataTZ2VelocidadEnt,dataTZ3VelocidadEnt,dataTZ4VelocidadEnt,dataTZ5VelocidadEnt,dataTZ6VelocidadEnt, dataLabelsEnt
  //   ) {
    
  //   var optionsTXZonaVelocidad1 = {
  //     colors:['#007bff','#4bc0c0','#9BCB3B','#ffab00','#ff3e1d','#6610f2'],
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
  //           selection: true,
  //           zoom: true,
  //           zoomin: true,
  //           zoomout: true,
  //           pan: true,
  //           reset: true | '<img src="/static/icons/reset.png" width="20">',
  //           customIcons: []
  //         },
  //         export:{
  //           csv:{
  //             filename: 'Tiempo semanal en cada zona de entreno (Velocidad)'
  //           },
  //           svg:{
  //             filename: 'Tiempo semanal en cada zona de entreno (Velocidad)'
  //           },
  //           png:{
  //             filename: 'Tiempo semanal en cada zona de entreno (Velocidad)'
  //           }
  //         }
  //       }
  //     },
  //     title:{
  //       text: 'Tiempo semanal en cada zona de entreno (Velocidad)',
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
  //         borderRadius: 1
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
  //       colors:['#007bff','#4bc0c0','#9BCB3B','#ffab00','#ff3e1d','#6610f2'],
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
  //       colors:['#007bff','#4bc0c0','#9BCB3B','#ffab00','#ff3e1d','#6610f2'],
  //     strokeColors: ['#007bff','#4bc0c0','#9BCB3B','#ffab00','#ff3e1d','#6610f2'],
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