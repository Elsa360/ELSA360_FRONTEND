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
    dataVolumnSemanal=[2, 1, 2, 2, 3, 0, 7]
    dataDias=['L','M','M','J','V','S','D']
    
    durElvDistEntreno(
        dataVolumnSemanal, dataDias
      );
    
    function durElvDistEntreno(
        dataVolumnSemanal, dataDias
      ) {
      
      var optionsVolumenSemanal = {
        colors: ["#9bcb3b"],
        series: [{
          name: 'Disponibilidad',
          type: 'bar',
          data: dataVolumnSemanal
        }, 
        ],
        chart: {
          background: '#2b2c40',
          type: 'bar',
          height: 80,     
          toolbar: {
            show: false,            
          }
        },
        title:{
          text: undefined,          
        },
        plotOptions: {
            bar: {
              barHeight: '80%',
              columnWidth: '75%',
              startingShape: 'rounded',
              endingShape: 'rounded',
              borderRadius: 2,
              distributed: true
            }
          },
        fill: {
          opacity: [0.55],
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
          width: [2,],
          curve: 'smooth',
          colors: ["#9bcb3b"],
        },
        grid: {
            show: false,
            padding: {
              top: -20,
              bottom: -12,
              left: -10,
              right: 0
            }
          },
        dataLabels: {
          enabled: false
        },        
        labels: dataDias ,
        legend: {
          show: false,          
        },
        xaxis: {
          type: 'category',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            style: {
              colors: ['#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2']
            }
          }
    
        },
        yaxis: [   
          {
            axisTicks: {
              show: false,
              color: '#9bcb3b',
              offsetX: 10,
            },
            axisBorder: {
              show: false,
              color: '#9bcb3b',
              offsetX: -10,
            },
            labels: {
              show: false,  
              rotate: 90,
              offsetX: -10,
              style: {
                colors: '#9bcb3b',
                fontSize:'10px'
              }
            },       
            tooltip: {
              enabled: false
            }
          },         
        ],
        tooltip: {
            enabled: true,     
            y: [
                {
                    formatter: function (val) {
                      return val + " hrs"
                    }
                },                
              ]     
        }        
      };
    
      var VolumenSemanal = new ApexCharts(document.querySelector("#VolumenSemanal"), optionsVolumenSemanal);
      VolumenSemanal.render(); 
      
    }
      //FIN  Grafico de Duración, Distancia y Elevanción de cada entreno 