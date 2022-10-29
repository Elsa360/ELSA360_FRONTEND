// grafico de progreso
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
  labels: ["Progress"]
};

var progreso = new ApexCharts(document.querySelector("#progreso"), option);

progreso.render();
//FIN grafico de progreso






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



// grafico LineasStacked1
var options12 = {
    series: [{
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    id: 'fb',
    group: 'social',
    type: 'area',
    height: 150
  },
  colors: ['#ff3e1d'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width:2,
    curve: 'smooth',
    colors:['#ff3e1d']      //--ROJO--//                      
  },
  title: {
    text: 'Forecast',
    align: 'left',
    style: {
      color: '#cbcbe2'
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
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Agos', 'Sept'],
    labels:{
      style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  },
  };

  var chart1 = new ApexCharts(document.querySelector("#chart1"), options12);
  chart1.render();
//FIN grafico LineasStacked1



  
  
// grafico LineasStacked2
  var optionsLine2 = {
    series: [{
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    id: 'tw',
    group: 'social',
    type: 'area',
    height: 150
  },
  colors: ['rgb(253, 172, 52)'],   //--AMARILLO--// 
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width:2,
    curve: 'smooth',
    colors:['rgb(253, 172, 52)']                           
  },
  title: {
    text: 'Forecast',
    align: 'left',
    style: {
      color: '#cbcbe2'
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
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Agos', 'Sept'],
    labels:{
      style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  },
  };

  var chartLine2 = new ApexCharts(document.querySelector("#chartLine2"), optionsLine2);
  chartLine2.render();
//FIN grafico LineasStacked2



  
  
  
// grafico LineasStacked3  
  var optionsArea = {
    series: [{
    name:"horas",    
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    id: 'yt',
    group: 'social',
    type: 'area',
    height: 150
  },
  colors: ['#9BCB3B'],    //--VERDE--// 
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width:2,
    curve: 'smooth',
    colors:['#9BCB3B']                            
  },
  title: {
    text: 'Forecast',
    align: 'left',
    style: {
      color: '#cbcbe2'
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
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Agos', 'Sept'],
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  },
  };

  var chartArea = new ApexCharts(document.querySelector("#chartArea"), optionsArea);
  chartArea.render();
//FIN grafico LineasStacked3





// grafico LineasStacked4
  var optionsArea10 = {
    series: [{
    name:"horas",    
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    id: 'yt',
    group: 'social',
    type: 'area',
    height: 150
  },
  colors: ['#6610f2'],    //--MORADO--// 
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width:2,
    curve: 'smooth',
    colors:['#6610f2']                            
  },
  title: {
    text: 'Forecast',
    align: 'left',
    style: {
      color: '#cbcbe2'
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
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Agos', 'Sept'],
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  },
  };

  var chartArea10 = new ApexCharts(document.querySelector("#chartArea10"), optionsArea10);
  chartArea10.render();
  //FIN grafico LineasStacked4









  // grafico LineasStacked5
var options120 = {
    series: [{
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    id: 'fb',
    group: 'social',
    type: 'area',
    height: 150
  },
  colors: ['#ff3e1d'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width:2,
    curve: 'smooth',
    colors:['#ff3e1d']                            
  },
  title: {
    text: 'Forecast',
    align: 'left',
    style: {
      color: '#cbcbe2'
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
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Agos', 'Sept'],
    labels:{
      style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  },
  };

  var chart2 = new ApexCharts(document.querySelector("#chart2"), options120);
  chart2.render();
//FIN grafico LineasStacked5




  
  
  // grafico LineasStacked6
  var optionsLine20 = {
    series: [{
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    id: 'tw',
    group: 'social',
    type: 'area',
    height: 150
  },
  colors: ['rgb(253, 172, 52)'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width:2,
    curve: 'smooth',
    colors:['rgb(253, 172, 52)']                            
  },
  title: {
    text: 'Forecast',
    align: 'left',
    style: {
      color: '#cbcbe2'
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
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Agos', 'Sept'],
    labels:{
      style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  },
  };

  var chartLine3 = new ApexCharts(document.querySelector("#chartLine3"), optionsLine20);
  chartLine3.render();
//FIN grafico LineasStacked6



  
  
  
  // grafico LineasStacked7
  var optionsArea0 = {
    series: [{
    name:"horas",    
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    id: 'yt',
    group: 'social',
    type: 'area',
    height: 150
  },
  colors: ['#9BCB3B'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width:2,
    curve: 'smooth',
    colors:['#9BCB3B']                            
  },
  title: {
    text: 'Forecast',
    align: 'left',
    style: {
      color: '#cbcbe2'
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
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Agos', 'Sept'],
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  },
  };

  var chartArea1 = new ApexCharts(document.querySelector("#chartArea1"), optionsArea0);
  chartArea1.render();
//FIN grafico LineasStacked7





// grafico LineasStacked8
  var optionsArea100 = {
    series: [{
    name:"horas",    
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    id: 'yt',
    group: 'social',
    type: 'area',
    height: 150
  },
  colors: ['#6610f2'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width:2,
    curve: 'smooth',
    colors:['#6610f2']                            
  },
  title: {
    text: 'Forecast',
    align: 'left',
    style: {
      color: '#cbcbe2'
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
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Agos', 'Sept'],
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  },
  };

  var chartArea2 = new ApexCharts(document.querySelector("#chartArea2"), optionsArea100);
  chartArea2.render();
  //FIN grafico LineasStacked8










// grafico LineasStacked9
var options1201 = {
    series: [{
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    id: 'fb',
    group: 'social',
    type: 'area',
    height: 150
  },
  colors: ['#ff3e1d'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width:2,
    curve: 'smooth',
    colors:['#ff3e1d']                            
  },
  title: {
    text: 'Forecast',
    align: 'left',
    style: {
      color: '#cbcbe2'
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
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Agos', 'Sept'],
    labels:{
      style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  },
  };

  var chartLine4 = new ApexCharts(document.querySelector("#chartLine4"), options1201);
  chartLine4.render();
//FIN grafico LineasStacked9
  



  
  
// grafico LineasStacked10  
  var optionsLine201 = {
    series: [{
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    id: 'tw',
    group: 'social',
    type: 'area',
    height: 150
  },
  colors: ['rgb(253, 172, 52)'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width:2,
    curve: 'smooth',
    colors:['rgb(253, 172, 52)']                            
  },
  title: {
    text: 'Forecast',
    align: 'left',
    style: {
      color: '#cbcbe2'
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
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Agos', 'Sept'],
    labels:{
      style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  },
  };

  var chartArea3 = new ApexCharts(document.querySelector("#chartArea3"), optionsLine201);
  chartArea3.render();
//FIN grafico LineasStacked10



  
  
  
// grafico LineasStacked11  
  var optionsArea01 = {
    series: [{
    name:"horas",    
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    id: 'yt',
    group: 'social',
    type: 'area',
    height: 150
  },
  colors: ['#9BCB3B'],

  dataLabels: {
    enabled: false,
  },
  stroke: {
    width:2,
    curve: 'smooth',
    colors:['#9BCB3B']                            
  },
  title: {
    text: 'Forecast',
    align: 'left',
    style: {
      color: '#cbcbe2'
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
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Agos', 'Sept'],
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  },
  };

  var chartArea4 = new ApexCharts(document.querySelector("#chartArea4"), optionsArea01);
  chartArea4.render();
//FIN grafico LineasStacked11



// grafico LineasStacked12
  var optionsArea1001 = {
    series: [{
    name:"horas",    
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    id: 'yt',
    group: 'social',
    type: 'area',
    height: 150
  },
  colors: ['#6610f2'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width:2,
    curve: 'smooth',
    colors:['#6610f2'], 
  },
  title: {
    text: 'Forecast',
    align: 'left',
    style: {
      color: '#cbcbe2'
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
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Agos', 'Sept'],
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  },
  };

  var chart3 = new ApexCharts(document.querySelector("#chart3"), optionsArea1001);
  chart3.render();
  //FIN grafico LineasStacked12






// BRUSH grafico
  var optionsbrush1 = {
    series: [{
      name: 'Km',
    data: [[1327359600000,30.95],
    [1327446000000,31.34],
    [1327532400000,31.18],
    [1327618800000,31.05],
    [1327878000000,31.00],
    [1327964400000,30.95],
    [1328050800000,31.24],
    [1328137200000,31.29],
    [1328223600000,31.85],
    [1328482800000,31.86],
    [1328569200000,32.28],
    [1328655600000,32.10],
    [1328742000000,32.65],
    [1328828400000,32.21],
    [1329087600000,32.35],
    [1329174000000,32.44],
    [1329260400000,32.46],
    [1329346800000,32.86],
    [1329433200000,32.75],
    [1329778800000,32.54],
    [1329865200000,32.33],
    [1329951600000,32.97],
    [1330038000000,33.41],
    [1330297200000,33.27],
    [1330383600000,33.27],
    [1330470000000,32.89],
    [1330556400000,33.10],
    [1330642800000,33.73],
    [1330902000000,33.22],
    [1330988400000,31.99],
    [1331074800000,32.41],
    [1331161200000,33.05],
    [1331247600000,33.64],
    [1331506800000,33.56],
    [1331593200000,34.22],
    [1331679600000,33.77],
    [1331766000000,34.17],
    [1331852400000,33.82],
    [1332111600000,34.51],
    [1332198000000,33.16],
    [1332284400000,33.56],
    [1332370800000,33.71],
    [1332457200000,33.81],
    [1332712800000,34.40],
    [1332799200000,34.63],
    [1332885600000,34.46],
    [1332972000000,34.48],
    [1333058400000,34.31],
    [1333317600000,34.70],
    [1333404000000,34.31],
    [1333490400000,33.46],
    [1333576800000,33.59],
    [1333922400000,33.22],
    [1334008800000,32.61],
    [1334095200000,33.01],
    [1334181600000,33.55],
    [1334268000000,33.18],
    [1334527200000,32.84],
    [1334613600000,33.84],
    [1334700000000,33.39],
    [1334786400000,32.91],
    [1334872800000,33.06],
    [1335132000000,32.62],
    [1335218400000,32.40],
    [1335304800000,33.13],
    [1335391200000,33.26],
    [1335477600000,33.58],
    [1335736800000,33.55],
    [1335823200000,33.77],
    [1335909600000,33.76],
    [1335996000000,33.32],
    [1336082400000,32.61],
    [1336341600000,32.52],
    [1336428000000,32.67],
    [1336514400000,32.52],
    [1336600800000,31.92],
    [1336687200000,32.20],
    [1336946400000,32.23],
    [1337032800000,32.33],
    [1337119200000,32.36],
    [1337205600000,32.01],
    [1337292000000,31.31],
    [1337551200000,32.01],
    [1337637600000,32.01],
    [1337724000000,32.18],
    [1337810400000,31.54],
    [1337896800000,31.60],
    [1338242400000,32.05],
    [1338328800000,31.29],
    [1338415200000,31.05],
    [1338501600000,29.82],
    [1338760800000,30.31],
    [1338847200000,30.70],
    [1338933600000,31.69],
    [1339020000000,31.32],
    [1339106400000,31.65],
    [1339365600000,31.13],
    [1339452000000,31.77],
    [1339538400000,31.79],
    [1339624800000,31.67],
    [1339711200000,32.39],
    [1339970400000,32.63],
    [1340056800000,32.89],
    [1340143200000,31.99],
    [1340229600000,31.23],
    [1340316000000,31.57],
    [1340575200000,30.84],
    [1340661600000,31.07],
    [1340748000000,31.41],
    [1340834400000,31.17],
    [1340920800000,32.37],
    [1341180000000,32.19],
    [1341266400000,32.51],
    [1341439200000,32.53],
    [1341525600000,31.37],
    [1341784800000,30.43],
    [1341871200000,30.44],
    [1341957600000,30.20],
    [1342044000000,30.14],
    [1342130400000,30.65],
    [1342389600000,30.40],
    [1342476000000,30.65],
    [1342562400000,31.43],
    [1342648800000,31.89],
    [1342735200000,31.38],
    [1342994400000,30.64],
    [1343080800000,30.02],
    [1343167200000,30.33],
    [1343253600000,30.95],
    [1343340000000,31.89],
    [1343599200000,31.01],
    [1343685600000,30.88],
    [1343772000000,30.69],
    [1343858400000,30.58],
    [1343944800000,32.02],
    [1344204000000,32.14],
    [1344290400000,32.37],
    [1344376800000,32.51],
    [1344463200000,32.65],
    [1344549600000,32.64],
    [1344808800000,32.27],
    [1344895200000,32.10],
    [1344981600000,32.91],
    [1345068000000,33.65],
    [1345154400000,33.80],
    [1345413600000,33.92],
    [1345500000000,33.75],
    [1345586400000,33.84],
    [1345672800000,33.50],
    [1345759200000,32.26],
    [1346018400000,32.32],
    [1346104800000,32.06],
    [1346191200000,31.96],
    [1346277600000,31.46],
    [1346364000000,31.27],
    [1346709600000,31.43],
    [1346796000000,32.26],
    [1346882400000,32.79],
    [1346968800000,32.46],
    [1347228000000,32.13],
    [1347314400000,32.43],
    [1347400800000,32.42],
    [1347487200000,32.81],
    [1347573600000,33.34],
    [1347832800000,33.41],
    [1347919200000,32.57],
    [1348005600000,33.12],
    [1348092000000,34.53],
    [1348178400000,33.83],
    [1348437600000,33.41],
    [1348524000000,32.90],
    [1348610400000,32.53],
    [1348696800000,32.80],
    [1348783200000,32.44],
    [1349042400000,32.62],
    [1349128800000,32.57],
    [1349215200000,32.60],
    [1349301600000,32.68],
    [1349388000000,32.47],
    [1349647200000,32.23],
    [1349733600000,31.68],
    [1349820000000,31.51],
    [1349906400000,31.78],
    [1349992800000,31.94],
    [1350252000000,32.33],
    [1350338400000,33.24],
    [1350424800000,33.44],
    [1350511200000,33.48],
    [1350597600000,33.24],
    [1350856800000,33.49],
    [1350943200000,33.31],
    [1351029600000,33.36],
    [1351116000000,33.40],
    [1351202400000,34.01],
    [1351638000000,34.02],
    [1351724400000,34.36],
    [1351810800000,34.39],
    [1352070000000,34.24],
    [1352156400000,34.39],
    [1352242800000,33.47],
    [1352329200000,32.98],
    [1352415600000,32.90],
    [1352674800000,32.70],
    [1352761200000,32.54],
    [1352847600000,32.23],
    [1352934000000,32.64],
    [1353020400000,32.65],
    [1353279600000,32.92],
    [1353366000000,32.64],
    [1353452400000,32.84],
    [1353625200000,33.40],
    [1353884400000,33.30],
    [1353970800000,33.18],
    [1354057200000,33.88],
    [1354143600000,34.09],
    [1354230000000,34.61],
    [1354489200000,34.70],
    [1354575600000,35.30],
    [1354662000000,35.40],
    [1354748400000,35.14],
    [1354834800000,35.48],
    [1355094000000,35.75],
    [1355180400000,35.54],
    [1355266800000,35.96],
    [1355353200000,35.53],
    [1355439600000,37.56],
    [1355698800000,37.42],
    [1355785200000,37.49],
    [1355871600000,38.09],
    [1355958000000,37.87],
    [1356044400000,37.71],
    [1356303600000,37.53],
    [1356476400000,37.55],
    [1356562800000,37.30],
    [1356649200000,36.90],
    [1356908400000,37.68],
    [1357081200000,38.34],
    [1357167600000,37.75],
    [1357254000000,38.13],
    [1357513200000,37.94],
    [1357599600000,38.14],
    [1357686000000,38.66],
    [1357772400000,38.62],
    [1357858800000,38.09],
    [1358118000000,38.16],
    [1358204400000,38.15],
    [1358290800000,37.88],
    [1358377200000,37.73],
    [1358463600000,37.98],
    [1358809200000,37.95],
    [1358895600000,38.25],
    [1358982000000,38.10],
    [1359068400000,38.32],
    [1359327600000,38.24],
    [1359414000000,38.52],
    [1359500400000,37.94],
    [1359586800000,37.83],
    [1359673200000,38.34],
    [1359932400000,38.10],
    [1360018800000,38.51],
    [1360105200000,38.40],
    [1360191600000,38.07],
    [1360278000000,39.12],
    [1360537200000,38.64],
    [1360623600000,38.89],
    [1360710000000,38.81],
    [1360796400000,38.61],
    [1360882800000,38.63],
    [1361228400000,38.99],
    [1361314800000,38.77],
    [1361401200000,38.34],
    [1361487600000,38.55],
    [1361746800000,38.11],
    [1361833200000,38.59],
    [1361919600000,39.60],]
  }],
    chart: {
    id: 'Chartbrush1',
    type: 'line',
    height: 230,
    toolbar: {
      autoSelected: 'pan',
      show: false
    }
  },
  colors: ['#9BCB3B'],
  stroke: {
    width: 2,
    curve: 'smooth',
    colors:['#9BCB3B']
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
  fill: {
    opacity: 1,
  },
  markers: {
    size: 0
  },
  xaxis: {          
    type: 'datetime',
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  },
  };

  var brush1 = new ApexCharts(document.querySelector("#brush1"), optionsbrush1);
  brush1.render();










  var optionsLinebrush2 = {
    series: [{  
      name: 'Km',
    data: [[1327359600000,30.95],
    [1327446000000,31.34],
    [1327532400000,31.18],
    [1327618800000,31.05],
    [1327878000000,31.00],
    [1327964400000,30.95],
    [1328050800000,31.24],
    [1328137200000,31.29],
    [1328223600000,31.85],
    [1328482800000,31.86],
    [1328569200000,32.28],
    [1328655600000,32.10],
    [1328742000000,32.65],
    [1328828400000,32.21],
    [1329087600000,32.35],
    [1329174000000,32.44],
    [1329260400000,32.46],
    [1329346800000,32.86],
    [1329433200000,32.75],
    [1329778800000,32.54],
    [1329865200000,32.33],
    [1329951600000,32.97],
    [1330038000000,33.41],
    [1330297200000,33.27],
    [1330383600000,33.27],
    [1330470000000,32.89],
    [1330556400000,33.10],
    [1330642800000,33.73],
    [1330902000000,33.22],
    [1330988400000,31.99],
    [1331074800000,32.41],
    [1331161200000,33.05],
    [1331247600000,33.64],
    [1331506800000,33.56],
    [1331593200000,34.22],
    [1331679600000,33.77],
    [1331766000000,34.17],
    [1331852400000,33.82],
    [1332111600000,34.51],
    [1332198000000,33.16],
    [1332284400000,33.56],
    [1332370800000,33.71],
    [1332457200000,33.81],
    [1332712800000,34.40],
    [1332799200000,34.63],
    [1332885600000,34.46],
    [1332972000000,34.48],
    [1333058400000,34.31],
    [1333317600000,34.70],
    [1333404000000,34.31],
    [1333490400000,33.46],
    [1333576800000,33.59],
    [1333922400000,33.22],
    [1334008800000,32.61],
    [1334095200000,33.01],
    [1334181600000,33.55],
    [1334268000000,33.18],
    [1334527200000,32.84],
    [1334613600000,33.84],
    [1334700000000,33.39],
    [1334786400000,32.91],
    [1334872800000,33.06],
    [1335132000000,32.62],
    [1335218400000,32.40],
    [1335304800000,33.13],
    [1335391200000,33.26],
    [1335477600000,33.58],
    [1335736800000,33.55],
    [1335823200000,33.77],
    [1335909600000,33.76],
    [1335996000000,33.32],
    [1336082400000,32.61],
    [1336341600000,32.52],
    [1336428000000,32.67],
    [1336514400000,32.52],
    [1336600800000,31.92],
    [1336687200000,32.20],
    [1336946400000,32.23],
    [1337032800000,32.33],
    [1337119200000,32.36],
    [1337205600000,32.01],
    [1337292000000,31.31],
    [1337551200000,32.01],
    [1337637600000,32.01],
    [1337724000000,32.18],
    [1337810400000,31.54],
    [1337896800000,31.60],
    [1338242400000,32.05],
    [1338328800000,31.29],
    [1338415200000,31.05],
    [1338501600000,29.82],
    [1338760800000,30.31],
    [1338847200000,30.70],
    [1338933600000,31.69],
    [1339020000000,31.32],
    [1339106400000,31.65],
    [1339365600000,31.13],
    [1339452000000,31.77],
    [1339538400000,31.79],
    [1339624800000,31.67],
    [1339711200000,32.39],
    [1339970400000,32.63],
    [1340056800000,32.89],
    [1340143200000,31.99],
    [1340229600000,31.23],
    [1340316000000,31.57],
    [1340575200000,30.84],
    [1340661600000,31.07],
    [1340748000000,31.41],
    [1340834400000,31.17],
    [1340920800000,32.37],
    [1341180000000,32.19],
    [1341266400000,32.51],
    [1341439200000,32.53],
    [1341525600000,31.37],
    [1341784800000,30.43],
    [1341871200000,30.44],
    [1341957600000,30.20],
    [1342044000000,30.14],
    [1342130400000,30.65],
    [1342389600000,30.40],
    [1342476000000,30.65],
    [1342562400000,31.43],
    [1342648800000,31.89],
    [1342735200000,31.38],
    [1342994400000,30.64],
    [1343080800000,30.02],
    [1343167200000,30.33],
    [1343253600000,30.95],
    [1343340000000,31.89],
    [1343599200000,31.01],
    [1343685600000,30.88],
    [1343772000000,30.69],
    [1343858400000,30.58],
    [1343944800000,32.02],
    [1344204000000,32.14],
    [1344290400000,32.37],
    [1344376800000,32.51],
    [1344463200000,32.65],
    [1344549600000,32.64],
    [1344808800000,32.27],
    [1344895200000,32.10],
    [1344981600000,32.91],
    [1345068000000,33.65],
    [1345154400000,33.80],
    [1345413600000,33.92],
    [1345500000000,33.75],
    [1345586400000,33.84],
    [1345672800000,33.50],
    [1345759200000,32.26],
    [1346018400000,32.32],
    [1346104800000,32.06],
    [1346191200000,31.96],
    [1346277600000,31.46],
    [1346364000000,31.27],
    [1346709600000,31.43],
    [1346796000000,32.26],
    [1346882400000,32.79],
    [1346968800000,32.46],
    [1347228000000,32.13],
    [1347314400000,32.43],
    [1347400800000,32.42],
    [1347487200000,32.81],
    [1347573600000,33.34],
    [1347832800000,33.41],
    [1347919200000,32.57],
    [1348005600000,33.12],
    [1348092000000,34.53],
    [1348178400000,33.83],
    [1348437600000,33.41],
    [1348524000000,32.90],
    [1348610400000,32.53],
    [1348696800000,32.80],
    [1348783200000,32.44],
    [1349042400000,32.62],
    [1349128800000,32.57],
    [1349215200000,32.60],
    [1349301600000,32.68],
    [1349388000000,32.47],
    [1349647200000,32.23],
    [1349733600000,31.68],
    [1349820000000,31.51],
    [1349906400000,31.78],
    [1349992800000,31.94],
    [1350252000000,32.33],
    [1350338400000,33.24],
    [1350424800000,33.44],
    [1350511200000,33.48],
    [1350597600000,33.24],
    [1350856800000,33.49],
    [1350943200000,33.31],
    [1351029600000,33.36],
    [1351116000000,33.40],
    [1351202400000,34.01],
    [1351638000000,34.02],
    [1351724400000,34.36],
    [1351810800000,34.39],
    [1352070000000,34.24],
    [1352156400000,34.39],
    [1352242800000,33.47],
    [1352329200000,32.98],
    [1352415600000,32.90],
    [1352674800000,32.70],
    [1352761200000,32.54],
    [1352847600000,32.23],
    [1352934000000,32.64],
    [1353020400000,32.65],
    [1353279600000,32.92],
    [1353366000000,32.64],
    [1353452400000,32.84],
    [1353625200000,33.40],
    [1353884400000,33.30],
    [1353970800000,33.18],
    [1354057200000,33.88],
    [1354143600000,34.09],
    [1354230000000,34.61],
    [1354489200000,34.70],
    [1354575600000,35.30],
    [1354662000000,35.40],
    [1354748400000,35.14],
    [1354834800000,35.48],
    [1355094000000,35.75],
    [1355180400000,35.54],
    [1355266800000,35.96],
    [1355353200000,35.53],
    [1355439600000,37.56],
    [1355698800000,37.42],
    [1355785200000,37.49],
    [1355871600000,38.09],
    [1355958000000,37.87],
    [1356044400000,37.71],
    [1356303600000,37.53],
    [1356476400000,37.55],
    [1356562800000,37.30],
    [1356649200000,36.90],
    [1356908400000,37.68],
    [1357081200000,38.34],
    [1357167600000,37.75],
    [1357254000000,38.13],
    [1357513200000,37.94],
    [1357599600000,38.14],
    [1357686000000,38.66],
    [1357772400000,38.62],
    [1357858800000,38.09],
    [1358118000000,38.16],
    [1358204400000,38.15],
    [1358290800000,37.88],
    [1358377200000,37.73],
    [1358463600000,37.98],
    [1358809200000,37.95],
    [1358895600000,38.25],
    [1358982000000,38.10],
    [1359068400000,38.32],
    [1359327600000,38.24],
    [1359414000000,38.52],
    [1359500400000,37.94],
    [1359586800000,37.83],
    [1359673200000,38.34],
    [1359932400000,38.10],
    [1360018800000,38.51],
    [1360105200000,38.40],
    [1360191600000,38.07],
    [1360278000000,39.12],
    [1360537200000,38.64],
    [1360623600000,38.89],
    [1360710000000,38.81],
    [1360796400000,38.61],
    [1360882800000,38.63],
    [1361228400000,38.99],
    [1361314800000,38.77],
    [1361401200000,38.34],
    [1361487600000,38.55],
    [1361746800000,38.11],
    [1361833200000,38.59],
    [1361919600000,39.60],]
  }],
    chart: {
    id: 'Chartbrush2',
    height: 130,
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
        min: new Date('26 Dec 2012').getTime(),
        max: new Date('26 Feb 2013').getTime()
      }
    },


  },
  colors: ['#9BCB3B'],
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.91,
      opacityTo: 0.1,
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
  yaxis: {
    show: true, 
    tickAmount: 3,                          
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  }, 
  };

  var brush2 = new ApexCharts(document.querySelector("#brush2"), optionsLinebrush2);
  brush2.render();
  // fin BRUSH grafico










  // BRUSH grafico
  var optionsbrush3 = {
    series: [{
      name: 'km',
    data: [[1327359600000,30.95],
    [1327446000000,31.34],
    [1327532400000,31.18],
    [1327618800000,31.05],
    [1327878000000,31.00],
    [1327964400000,30.95],
    [1328050800000,31.24],
    [1328137200000,31.29],
    [1328223600000,31.85],
    [1328482800000,31.86],
    [1328569200000,32.28],
    [1328655600000,32.10],
    [1328742000000,32.65],
    [1328828400000,32.21],
    [1329087600000,32.35],
    [1329174000000,32.44],
    [1329260400000,32.46],
    [1329346800000,32.86],
    [1329433200000,32.75],
    [1329778800000,32.54],
    [1329865200000,32.33],
    [1329951600000,32.97],
    [1330038000000,33.41],
    [1330297200000,33.27],
    [1330383600000,33.27],
    [1330470000000,32.89],
    [1330556400000,33.10],
    [1330642800000,33.73],
    [1330902000000,33.22],
    [1330988400000,31.99],
    [1331074800000,32.41],
    [1331161200000,33.05],
    [1331247600000,33.64],
    [1331506800000,33.56],
    [1331593200000,34.22],
    [1331679600000,33.77],
    [1331766000000,34.17],
    [1331852400000,33.82],
    [1332111600000,34.51],
    [1332198000000,33.16],
    [1332284400000,33.56],
    [1332370800000,33.71],
    [1332457200000,33.81],
    [1332712800000,34.40],
    [1332799200000,34.63],
    [1332885600000,34.46],
    [1332972000000,34.48],
    [1333058400000,34.31],
    [1333317600000,34.70],
    [1333404000000,34.31],
    [1333490400000,33.46],
    [1333576800000,33.59],
    [1333922400000,33.22],
    [1334008800000,32.61],
    [1334095200000,33.01],
    [1334181600000,33.55],
    [1334268000000,33.18],
    [1334527200000,32.84],
    [1334613600000,33.84],
    [1334700000000,33.39],
    [1334786400000,32.91],
    [1334872800000,33.06],
    [1335132000000,32.62],
    [1335218400000,32.40],
    [1335304800000,33.13],
    [1335391200000,33.26],
    [1335477600000,33.58],
    [1335736800000,33.55],
    [1335823200000,33.77],
    [1335909600000,33.76],
    [1335996000000,33.32],
    [1336082400000,32.61],
    [1336341600000,32.52],
    [1336428000000,32.67],
    [1336514400000,32.52],
    [1336600800000,31.92],
    [1336687200000,32.20],
    [1336946400000,32.23],
    [1337032800000,32.33],
    [1337119200000,32.36],
    [1337205600000,32.01],
    [1337292000000,31.31],
    [1337551200000,32.01],
    [1337637600000,32.01],
    [1337724000000,32.18],
    [1337810400000,31.54],
    [1337896800000,31.60],
    [1338242400000,32.05],
    [1338328800000,31.29],
    [1338415200000,31.05],
    [1338501600000,29.82],
    [1338760800000,30.31],
    [1338847200000,30.70],
    [1338933600000,31.69],
    [1339020000000,31.32],
    [1339106400000,31.65],
    [1339365600000,31.13],
    [1339452000000,31.77],
    [1339538400000,31.79],
    [1339624800000,31.67],
    [1339711200000,32.39],
    [1339970400000,32.63],
    [1340056800000,32.89],
    [1340143200000,31.99],
    [1340229600000,31.23],
    [1340316000000,31.57],
    [1340575200000,30.84],
    [1340661600000,31.07],
    [1340748000000,31.41],
    [1340834400000,31.17],
    [1340920800000,32.37],
    [1341180000000,32.19],
    [1341266400000,32.51],
    [1341439200000,32.53],
    [1341525600000,31.37],
    [1341784800000,30.43],
    [1341871200000,30.44],
    [1341957600000,30.20],
    [1342044000000,30.14],
    [1342130400000,30.65],
    [1342389600000,30.40],
    [1342476000000,30.65],
    [1342562400000,31.43],
    [1342648800000,31.89],
    [1342735200000,31.38],
    [1342994400000,30.64],
    [1343080800000,30.02],
    [1343167200000,30.33],
    [1343253600000,30.95],
    [1343340000000,31.89],
    [1343599200000,31.01],
    [1343685600000,30.88],
    [1343772000000,30.69],
    [1343858400000,30.58],
    [1343944800000,32.02],
    [1344204000000,32.14],
    [1344290400000,32.37],
    [1344376800000,32.51],
    [1344463200000,32.65],
    [1344549600000,32.64],
    [1344808800000,32.27],
    [1344895200000,32.10],
    [1344981600000,32.91],
    [1345068000000,33.65],
    [1345154400000,33.80],
    [1345413600000,33.92],
    [1345500000000,33.75],
    [1345586400000,33.84],
    [1345672800000,33.50],
    [1345759200000,32.26],
    [1346018400000,32.32],
    [1346104800000,32.06],
    [1346191200000,31.96],
    [1346277600000,31.46],
    [1346364000000,31.27],
    [1346709600000,31.43],
    [1346796000000,32.26],
    [1346882400000,32.79],
    [1346968800000,32.46],
    [1347228000000,32.13],
    [1347314400000,32.43],
    [1347400800000,32.42],
    [1347487200000,32.81],
    [1347573600000,33.34],
    [1347832800000,33.41],
    [1347919200000,32.57],
    [1348005600000,33.12],
    [1348092000000,34.53],
    [1348178400000,33.83],
    [1348437600000,33.41],
    [1348524000000,32.90],
    [1348610400000,32.53],
    [1348696800000,32.80],
    [1348783200000,32.44],
    [1349042400000,32.62],
    [1349128800000,32.57],
    [1349215200000,32.60],
    [1349301600000,32.68],
    [1349388000000,32.47],
    [1349647200000,32.23],
    [1349733600000,31.68],
    [1349820000000,31.51],
    [1349906400000,31.78],
    [1349992800000,31.94],
    [1350252000000,32.33],
    [1350338400000,33.24],
    [1350424800000,33.44],
    [1350511200000,33.48],
    [1350597600000,33.24],
    [1350856800000,33.49],
    [1350943200000,33.31],
    [1351029600000,33.36],
    [1351116000000,33.40],
    [1351202400000,34.01],
    [1351638000000,34.02],
    [1351724400000,34.36],
    [1351810800000,34.39],
    [1352070000000,34.24],
    [1352156400000,34.39],
    [1352242800000,33.47],
    [1352329200000,32.98],
    [1352415600000,32.90],
    [1352674800000,32.70],
    [1352761200000,32.54],
    [1352847600000,32.23],
    [1352934000000,32.64],
    [1353020400000,32.65],
    [1353279600000,32.92],
    [1353366000000,32.64],
    [1353452400000,32.84],
    [1353625200000,33.40],
    [1353884400000,33.30],
    [1353970800000,33.18],
    [1354057200000,33.88],
    [1354143600000,34.09],
    [1354230000000,34.61],
    [1354489200000,34.70],
    [1354575600000,35.30],
    [1354662000000,35.40],
    [1354748400000,35.14],
    [1354834800000,35.48],
    [1355094000000,35.75],
    [1355180400000,35.54],
    [1355266800000,35.96],
    [1355353200000,35.53],
    [1355439600000,37.56],
    [1355698800000,37.42],
    [1355785200000,37.49],
    [1355871600000,38.09],
    [1355958000000,37.87],
    [1356044400000,37.71],
    [1356303600000,37.53],
    [1356476400000,37.55],
    [1356562800000,37.30],
    [1356649200000,36.90],
    [1356908400000,37.68],
    [1357081200000,38.34],
    [1357167600000,37.75],
    [1357254000000,38.13],
    [1357513200000,37.94],
    [1357599600000,38.14],
    [1357686000000,38.66],
    [1357772400000,38.62],
    [1357858800000,38.09],
    [1358118000000,38.16],
    [1358204400000,38.15],
    [1358290800000,37.88],
    [1358377200000,37.73],
    [1358463600000,37.98],
    [1358809200000,37.95],
    [1358895600000,38.25],
    [1358982000000,38.10],
    [1359068400000,38.32],
    [1359327600000,38.24],
    [1359414000000,38.52],
    [1359500400000,37.94],
    [1359586800000,37.83],
    [1359673200000,38.34],
    [1359932400000,38.10],
    [1360018800000,38.51],
    [1360105200000,38.40],
    [1360191600000,38.07],
    [1360278000000,39.12],
    [1360537200000,38.64],
    [1360623600000,38.89],
    [1360710000000,38.81],
    [1360796400000,38.61],
    [1360882800000,38.63],
    [1361228400000,38.99],
    [1361314800000,38.77],
    [1361401200000,38.34],
    [1361487600000,38.55],
    [1361746800000,38.11],
    [1361833200000,38.59],
    [1361919600000,39.60],]
  }],
    chart: {
    id: 'Chartbrush3',
    type: 'line',
    height: 230,
    toolbar: {
      autoSelected: 'pan',
      show: false
    }
  },
  colors: ['rgb(253, 172, 52)'],
  stroke: {
    width: 3,
    curve: 'smooth',
    colors:['rgb(253, 172, 52)']
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
  fill: {
    opacity: 1,
  },
  markers: {
    size: 0
  },
  xaxis: {          
    type: 'datetime',
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  },
  };

  var brush3 = new ApexCharts(document.querySelector("#brush3"), optionsbrush3);
  brush3.render();










  var optionsLinebrush4 = {
    series: [{  
      name: 'km',
    data: [[1327359600000,30.95],
    [1327446000000,31.34],
    [1327532400000,31.18],
    [1327618800000,31.05],
    [1327878000000,31.00],
    [1327964400000,30.95],
    [1328050800000,31.24],
    [1328137200000,31.29],
    [1328223600000,31.85],
    [1328482800000,31.86],
    [1328569200000,32.28],
    [1328655600000,32.10],
    [1328742000000,32.65],
    [1328828400000,32.21],
    [1329087600000,32.35],
    [1329174000000,32.44],
    [1329260400000,32.46],
    [1329346800000,32.86],
    [1329433200000,32.75],
    [1329778800000,32.54],
    [1329865200000,32.33],
    [1329951600000,32.97],
    [1330038000000,33.41],
    [1330297200000,33.27],
    [1330383600000,33.27],
    [1330470000000,32.89],
    [1330556400000,33.10],
    [1330642800000,33.73],
    [1330902000000,33.22],
    [1330988400000,31.99],
    [1331074800000,32.41],
    [1331161200000,33.05],
    [1331247600000,33.64],
    [1331506800000,33.56],
    [1331593200000,34.22],
    [1331679600000,33.77],
    [1331766000000,34.17],
    [1331852400000,33.82],
    [1332111600000,34.51],
    [1332198000000,33.16],
    [1332284400000,33.56],
    [1332370800000,33.71],
    [1332457200000,33.81],
    [1332712800000,34.40],
    [1332799200000,34.63],
    [1332885600000,34.46],
    [1332972000000,34.48],
    [1333058400000,34.31],
    [1333317600000,34.70],
    [1333404000000,34.31],
    [1333490400000,33.46],
    [1333576800000,33.59],
    [1333922400000,33.22],
    [1334008800000,32.61],
    [1334095200000,33.01],
    [1334181600000,33.55],
    [1334268000000,33.18],
    [1334527200000,32.84],
    [1334613600000,33.84],
    [1334700000000,33.39],
    [1334786400000,32.91],
    [1334872800000,33.06],
    [1335132000000,32.62],
    [1335218400000,32.40],
    [1335304800000,33.13],
    [1335391200000,33.26],
    [1335477600000,33.58],
    [1335736800000,33.55],
    [1335823200000,33.77],
    [1335909600000,33.76],
    [1335996000000,33.32],
    [1336082400000,32.61],
    [1336341600000,32.52],
    [1336428000000,32.67],
    [1336514400000,32.52],
    [1336600800000,31.92],
    [1336687200000,32.20],
    [1336946400000,32.23],
    [1337032800000,32.33],
    [1337119200000,32.36],
    [1337205600000,32.01],
    [1337292000000,31.31],
    [1337551200000,32.01],
    [1337637600000,32.01],
    [1337724000000,32.18],
    [1337810400000,31.54],
    [1337896800000,31.60],
    [1338242400000,32.05],
    [1338328800000,31.29],
    [1338415200000,31.05],
    [1338501600000,29.82],
    [1338760800000,30.31],
    [1338847200000,30.70],
    [1338933600000,31.69],
    [1339020000000,31.32],
    [1339106400000,31.65],
    [1339365600000,31.13],
    [1339452000000,31.77],
    [1339538400000,31.79],
    [1339624800000,31.67],
    [1339711200000,32.39],
    [1339970400000,32.63],
    [1340056800000,32.89],
    [1340143200000,31.99],
    [1340229600000,31.23],
    [1340316000000,31.57],
    [1340575200000,30.84],
    [1340661600000,31.07],
    [1340748000000,31.41],
    [1340834400000,31.17],
    [1340920800000,32.37],
    [1341180000000,32.19],
    [1341266400000,32.51],
    [1341439200000,32.53],
    [1341525600000,31.37],
    [1341784800000,30.43],
    [1341871200000,30.44],
    [1341957600000,30.20],
    [1342044000000,30.14],
    [1342130400000,30.65],
    [1342389600000,30.40],
    [1342476000000,30.65],
    [1342562400000,31.43],
    [1342648800000,31.89],
    [1342735200000,31.38],
    [1342994400000,30.64],
    [1343080800000,30.02],
    [1343167200000,30.33],
    [1343253600000,30.95],
    [1343340000000,31.89],
    [1343599200000,31.01],
    [1343685600000,30.88],
    [1343772000000,30.69],
    [1343858400000,30.58],
    [1343944800000,32.02],
    [1344204000000,32.14],
    [1344290400000,32.37],
    [1344376800000,32.51],
    [1344463200000,32.65],
    [1344549600000,32.64],
    [1344808800000,32.27],
    [1344895200000,32.10],
    [1344981600000,32.91],
    [1345068000000,33.65],
    [1345154400000,33.80],
    [1345413600000,33.92],
    [1345500000000,33.75],
    [1345586400000,33.84],
    [1345672800000,33.50],
    [1345759200000,32.26],
    [1346018400000,32.32],
    [1346104800000,32.06],
    [1346191200000,31.96],
    [1346277600000,31.46],
    [1346364000000,31.27],
    [1346709600000,31.43],
    [1346796000000,32.26],
    [1346882400000,32.79],
    [1346968800000,32.46],
    [1347228000000,32.13],
    [1347314400000,32.43],
    [1347400800000,32.42],
    [1347487200000,32.81],
    [1347573600000,33.34],
    [1347832800000,33.41],
    [1347919200000,32.57],
    [1348005600000,33.12],
    [1348092000000,34.53],
    [1348178400000,33.83],
    [1348437600000,33.41],
    [1348524000000,32.90],
    [1348610400000,32.53],
    [1348696800000,32.80],
    [1348783200000,32.44],
    [1349042400000,32.62],
    [1349128800000,32.57],
    [1349215200000,32.60],
    [1349301600000,32.68],
    [1349388000000,32.47],
    [1349647200000,32.23],
    [1349733600000,31.68],
    [1349820000000,31.51],
    [1349906400000,31.78],
    [1349992800000,31.94],
    [1350252000000,32.33],
    [1350338400000,33.24],
    [1350424800000,33.44],
    [1350511200000,33.48],
    [1350597600000,33.24],
    [1350856800000,33.49],
    [1350943200000,33.31],
    [1351029600000,33.36],
    [1351116000000,33.40],
    [1351202400000,34.01],
    [1351638000000,34.02],
    [1351724400000,34.36],
    [1351810800000,34.39],
    [1352070000000,34.24],
    [1352156400000,34.39],
    [1352242800000,33.47],
    [1352329200000,32.98],
    [1352415600000,32.90],
    [1352674800000,32.70],
    [1352761200000,32.54],
    [1352847600000,32.23],
    [1352934000000,32.64],
    [1353020400000,32.65],
    [1353279600000,32.92],
    [1353366000000,32.64],
    [1353452400000,32.84],
    [1353625200000,33.40],
    [1353884400000,33.30],
    [1353970800000,33.18],
    [1354057200000,33.88],
    [1354143600000,34.09],
    [1354230000000,34.61],
    [1354489200000,34.70],
    [1354575600000,35.30],
    [1354662000000,35.40],
    [1354748400000,35.14],
    [1354834800000,35.48],
    [1355094000000,35.75],
    [1355180400000,35.54],
    [1355266800000,35.96],
    [1355353200000,35.53],
    [1355439600000,37.56],
    [1355698800000,37.42],
    [1355785200000,37.49],
    [1355871600000,38.09],
    [1355958000000,37.87],
    [1356044400000,37.71],
    [1356303600000,37.53],
    [1356476400000,37.55],
    [1356562800000,37.30],
    [1356649200000,36.90],
    [1356908400000,37.68],
    [1357081200000,38.34],
    [1357167600000,37.75],
    [1357254000000,38.13],
    [1357513200000,37.94],
    [1357599600000,38.14],
    [1357686000000,38.66],
    [1357772400000,38.62],
    [1357858800000,38.09],
    [1358118000000,38.16],
    [1358204400000,38.15],
    [1358290800000,37.88],
    [1358377200000,37.73],
    [1358463600000,37.98],
    [1358809200000,37.95],
    [1358895600000,38.25],
    [1358982000000,38.10],
    [1359068400000,38.32],
    [1359327600000,38.24],
    [1359414000000,38.52],
    [1359500400000,37.94],
    [1359586800000,37.83],
    [1359673200000,38.34],
    [1359932400000,38.10],
    [1360018800000,38.51],
    [1360105200000,38.40],
    [1360191600000,38.07],
    [1360278000000,39.12],
    [1360537200000,38.64],
    [1360623600000,38.89],
    [1360710000000,38.81],
    [1360796400000,38.61],
    [1360882800000,38.63],
    [1361228400000,38.99],
    [1361314800000,38.77],
    [1361401200000,38.34],
    [1361487600000,38.55],
    [1361746800000,38.11],
    [1361833200000,38.59],
    [1361919600000,39.60],]
  }],
    chart: {
    id: 'Chartbrush4',
    height: 130,
    type: 'area',
    brush:{
      target: 'Chartbrush3',
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
        min: new Date('26 Dec 2012').getTime(),
        max: new Date('26 Feb 2013').getTime()
      }
    },


  },
  colors: ['rgb(253, 172, 52)'],
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.91,
      opacityTo: 0.1,
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
  yaxis: {
    show: true, 
    tickAmount: 3,                          
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  }, 
  };

  var brush4 = new ApexCharts(document.querySelector("#brush4"), optionsLinebrush4);
  brush4.render();
  // fin BRUSH grafico















  // BRUSH grafico
  var optionsbrush5 = {
    series: [{
      name: 'km',
    data: [[1327359600000,30.95],
    [1327446000000,31.34],
    [1327532400000,31.18],
    [1327618800000,31.05],
    [1327878000000,31.00],
    [1327964400000,30.95],
    [1328050800000,31.24],
    [1328137200000,31.29],
    [1328223600000,31.85],
    [1328482800000,31.86],
    [1328569200000,32.28],
    [1328655600000,32.10],
    [1328742000000,32.65],
    [1328828400000,32.21],
    [1329087600000,32.35],
    [1329174000000,32.44],
    [1329260400000,32.46],
    [1329346800000,32.86],
    [1329433200000,32.75],
    [1329778800000,32.54],
    [1329865200000,32.33],
    [1329951600000,32.97],
    [1330038000000,33.41],
    [1330297200000,33.27],
    [1330383600000,33.27],
    [1330470000000,32.89],
    [1330556400000,33.10],
    [1330642800000,33.73],
    [1330902000000,33.22],
    [1330988400000,31.99],
    [1331074800000,32.41],
    [1331161200000,33.05],
    [1331247600000,33.64],
    [1331506800000,33.56],
    [1331593200000,34.22],
    [1331679600000,33.77],
    [1331766000000,34.17],
    [1331852400000,33.82],
    [1332111600000,34.51],
    [1332198000000,33.16],
    [1332284400000,33.56],
    [1332370800000,33.71],
    [1332457200000,33.81],
    [1332712800000,34.40],
    [1332799200000,34.63],
    [1332885600000,34.46],
    [1332972000000,34.48],
    [1333058400000,34.31],
    [1333317600000,34.70],
    [1333404000000,34.31],
    [1333490400000,33.46],
    [1333576800000,33.59],
    [1333922400000,33.22],
    [1334008800000,32.61],
    [1334095200000,33.01],
    [1334181600000,33.55],
    [1334268000000,33.18],
    [1334527200000,32.84],
    [1334613600000,33.84],
    [1334700000000,33.39],
    [1334786400000,32.91],
    [1334872800000,33.06],
    [1335132000000,32.62],
    [1335218400000,32.40],
    [1335304800000,33.13],
    [1335391200000,33.26],
    [1335477600000,33.58],
    [1335736800000,33.55],
    [1335823200000,33.77],
    [1335909600000,33.76],
    [1335996000000,33.32],
    [1336082400000,32.61],
    [1336341600000,32.52],
    [1336428000000,32.67],
    [1336514400000,32.52],
    [1336600800000,31.92],
    [1336687200000,32.20],
    [1336946400000,32.23],
    [1337032800000,32.33],
    [1337119200000,32.36],
    [1337205600000,32.01],
    [1337292000000,31.31],
    [1337551200000,32.01],
    [1337637600000,32.01],
    [1337724000000,32.18],
    [1337810400000,31.54],
    [1337896800000,31.60],
    [1338242400000,32.05],
    [1338328800000,31.29],
    [1338415200000,31.05],
    [1338501600000,29.82],
    [1338760800000,30.31],
    [1338847200000,30.70],
    [1338933600000,31.69],
    [1339020000000,31.32],
    [1339106400000,31.65],
    [1339365600000,31.13],
    [1339452000000,31.77],
    [1339538400000,31.79],
    [1339624800000,31.67],
    [1339711200000,32.39],
    [1339970400000,32.63],
    [1340056800000,32.89],
    [1340143200000,31.99],
    [1340229600000,31.23],
    [1340316000000,31.57],
    [1340575200000,30.84],
    [1340661600000,31.07],
    [1340748000000,31.41],
    [1340834400000,31.17],
    [1340920800000,32.37],
    [1341180000000,32.19],
    [1341266400000,32.51],
    [1341439200000,32.53],
    [1341525600000,31.37],
    [1341784800000,30.43],
    [1341871200000,30.44],
    [1341957600000,30.20],
    [1342044000000,30.14],
    [1342130400000,30.65],
    [1342389600000,30.40],
    [1342476000000,30.65],
    [1342562400000,31.43],
    [1342648800000,31.89],
    [1342735200000,31.38],
    [1342994400000,30.64],
    [1343080800000,30.02],
    [1343167200000,30.33],
    [1343253600000,30.95],
    [1343340000000,31.89],
    [1343599200000,31.01],
    [1343685600000,30.88],
    [1343772000000,30.69],
    [1343858400000,30.58],
    [1343944800000,32.02],
    [1344204000000,32.14],
    [1344290400000,32.37],
    [1344376800000,32.51],
    [1344463200000,32.65],
    [1344549600000,32.64],
    [1344808800000,32.27],
    [1344895200000,32.10],
    [1344981600000,32.91],
    [1345068000000,33.65],
    [1345154400000,33.80],
    [1345413600000,33.92],
    [1345500000000,33.75],
    [1345586400000,33.84],
    [1345672800000,33.50],
    [1345759200000,32.26],
    [1346018400000,32.32],
    [1346104800000,32.06],
    [1346191200000,31.96],
    [1346277600000,31.46],
    [1346364000000,31.27],
    [1346709600000,31.43],
    [1346796000000,32.26],
    [1346882400000,32.79],
    [1346968800000,32.46],
    [1347228000000,32.13],
    [1347314400000,32.43],
    [1347400800000,32.42],
    [1347487200000,32.81],
    [1347573600000,33.34],
    [1347832800000,33.41],
    [1347919200000,32.57],
    [1348005600000,33.12],
    [1348092000000,34.53],
    [1348178400000,33.83],
    [1348437600000,33.41],
    [1348524000000,32.90],
    [1348610400000,32.53],
    [1348696800000,32.80],
    [1348783200000,32.44],
    [1349042400000,32.62],
    [1349128800000,32.57],
    [1349215200000,32.60],
    [1349301600000,32.68],
    [1349388000000,32.47],
    [1349647200000,32.23],
    [1349733600000,31.68],
    [1349820000000,31.51],
    [1349906400000,31.78],
    [1349992800000,31.94],
    [1350252000000,32.33],
    [1350338400000,33.24],
    [1350424800000,33.44],
    [1350511200000,33.48],
    [1350597600000,33.24],
    [1350856800000,33.49],
    [1350943200000,33.31],
    [1351029600000,33.36],
    [1351116000000,33.40],
    [1351202400000,34.01],
    [1351638000000,34.02],
    [1351724400000,34.36],
    [1351810800000,34.39],
    [1352070000000,34.24],
    [1352156400000,34.39],
    [1352242800000,33.47],
    [1352329200000,32.98],
    [1352415600000,32.90],
    [1352674800000,32.70],
    [1352761200000,32.54],
    [1352847600000,32.23],
    [1352934000000,32.64],
    [1353020400000,32.65],
    [1353279600000,32.92],
    [1353366000000,32.64],
    [1353452400000,32.84],
    [1353625200000,33.40],
    [1353884400000,33.30],
    [1353970800000,33.18],
    [1354057200000,33.88],
    [1354143600000,34.09],
    [1354230000000,34.61],
    [1354489200000,34.70],
    [1354575600000,35.30],
    [1354662000000,35.40],
    [1354748400000,35.14],
    [1354834800000,35.48],
    [1355094000000,35.75],
    [1355180400000,35.54],
    [1355266800000,35.96],
    [1355353200000,35.53],
    [1355439600000,37.56],
    [1355698800000,37.42],
    [1355785200000,37.49],
    [1355871600000,38.09],
    [1355958000000,37.87],
    [1356044400000,37.71],
    [1356303600000,37.53],
    [1356476400000,37.55],
    [1356562800000,37.30],
    [1356649200000,36.90],
    [1356908400000,37.68],
    [1357081200000,38.34],
    [1357167600000,37.75],
    [1357254000000,38.13],
    [1357513200000,37.94],
    [1357599600000,38.14],
    [1357686000000,38.66],
    [1357772400000,38.62],
    [1357858800000,38.09],
    [1358118000000,38.16],
    [1358204400000,38.15],
    [1358290800000,37.88],
    [1358377200000,37.73],
    [1358463600000,37.98],
    [1358809200000,37.95],
    [1358895600000,38.25],
    [1358982000000,38.10],
    [1359068400000,38.32],
    [1359327600000,38.24],
    [1359414000000,38.52],
    [1359500400000,37.94],
    [1359586800000,37.83],
    [1359673200000,38.34],
    [1359932400000,38.10],
    [1360018800000,38.51],
    [1360105200000,38.40],
    [1360191600000,38.07],
    [1360278000000,39.12],
    [1360537200000,38.64],
    [1360623600000,38.89],
    [1360710000000,38.81],
    [1360796400000,38.61],
    [1360882800000,38.63],
    [1361228400000,38.99],
    [1361314800000,38.77],
    [1361401200000,38.34],
    [1361487600000,38.55],
    [1361746800000,38.11],
    [1361833200000,38.59],
    [1361919600000,39.60],]
  }],
    chart: {
    id: 'Chartbrush5',
    type: 'line',
    height: 230,
    toolbar: {
      autoSelected: 'pan',
      show: false
    }
  },
  stroke: {
    width: 3,
    curve: 'smooth',
    colors:['#ff3e1d']
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
  fill: {
    opacity: 1,
  },
  markers: {
    size: 0
  },
  xaxis: {          
    type: 'datetime',
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  },
  };

  var brush5 = new ApexCharts(document.querySelector("#brush5"), optionsbrush5);
  brush5.render();










  var optionsLinebrush6 = {
    series: [{  
      name: 'km',
    data: [[1327359600000,30.95],
    [1327446000000,31.34],
    [1327532400000,31.18],
    [1327618800000,31.05],
    [1327878000000,31.00],
    [1327964400000,30.95],
    [1328050800000,31.24],
    [1328137200000,31.29],
    [1328223600000,31.85],
    [1328482800000,31.86],
    [1328569200000,32.28],
    [1328655600000,32.10],
    [1328742000000,32.65],
    [1328828400000,32.21],
    [1329087600000,32.35],
    [1329174000000,32.44],
    [1329260400000,32.46],
    [1329346800000,32.86],
    [1329433200000,32.75],
    [1329778800000,32.54],
    [1329865200000,32.33],
    [1329951600000,32.97],
    [1330038000000,33.41],
    [1330297200000,33.27],
    [1330383600000,33.27],
    [1330470000000,32.89],
    [1330556400000,33.10],
    [1330642800000,33.73],
    [1330902000000,33.22],
    [1330988400000,31.99],
    [1331074800000,32.41],
    [1331161200000,33.05],
    [1331247600000,33.64],
    [1331506800000,33.56],
    [1331593200000,34.22],
    [1331679600000,33.77],
    [1331766000000,34.17],
    [1331852400000,33.82],
    [1332111600000,34.51],
    [1332198000000,33.16],
    [1332284400000,33.56],
    [1332370800000,33.71],
    [1332457200000,33.81],
    [1332712800000,34.40],
    [1332799200000,34.63],
    [1332885600000,34.46],
    [1332972000000,34.48],
    [1333058400000,34.31],
    [1333317600000,34.70],
    [1333404000000,34.31],
    [1333490400000,33.46],
    [1333576800000,33.59],
    [1333922400000,33.22],
    [1334008800000,32.61],
    [1334095200000,33.01],
    [1334181600000,33.55],
    [1334268000000,33.18],
    [1334527200000,32.84],
    [1334613600000,33.84],
    [1334700000000,33.39],
    [1334786400000,32.91],
    [1334872800000,33.06],
    [1335132000000,32.62],
    [1335218400000,32.40],
    [1335304800000,33.13],
    [1335391200000,33.26],
    [1335477600000,33.58],
    [1335736800000,33.55],
    [1335823200000,33.77],
    [1335909600000,33.76],
    [1335996000000,33.32],
    [1336082400000,32.61],
    [1336341600000,32.52],
    [1336428000000,32.67],
    [1336514400000,32.52],
    [1336600800000,31.92],
    [1336687200000,32.20],
    [1336946400000,32.23],
    [1337032800000,32.33],
    [1337119200000,32.36],
    [1337205600000,32.01],
    [1337292000000,31.31],
    [1337551200000,32.01],
    [1337637600000,32.01],
    [1337724000000,32.18],
    [1337810400000,31.54],
    [1337896800000,31.60],
    [1338242400000,32.05],
    [1338328800000,31.29],
    [1338415200000,31.05],
    [1338501600000,29.82],
    [1338760800000,30.31],
    [1338847200000,30.70],
    [1338933600000,31.69],
    [1339020000000,31.32],
    [1339106400000,31.65],
    [1339365600000,31.13],
    [1339452000000,31.77],
    [1339538400000,31.79],
    [1339624800000,31.67],
    [1339711200000,32.39],
    [1339970400000,32.63],
    [1340056800000,32.89],
    [1340143200000,31.99],
    [1340229600000,31.23],
    [1340316000000,31.57],
    [1340575200000,30.84],
    [1340661600000,31.07],
    [1340748000000,31.41],
    [1340834400000,31.17],
    [1340920800000,32.37],
    [1341180000000,32.19],
    [1341266400000,32.51],
    [1341439200000,32.53],
    [1341525600000,31.37],
    [1341784800000,30.43],
    [1341871200000,30.44],
    [1341957600000,30.20],
    [1342044000000,30.14],
    [1342130400000,30.65],
    [1342389600000,30.40],
    [1342476000000,30.65],
    [1342562400000,31.43],
    [1342648800000,31.89],
    [1342735200000,31.38],
    [1342994400000,30.64],
    [1343080800000,30.02],
    [1343167200000,30.33],
    [1343253600000,30.95],
    [1343340000000,31.89],
    [1343599200000,31.01],
    [1343685600000,30.88],
    [1343772000000,30.69],
    [1343858400000,30.58],
    [1343944800000,32.02],
    [1344204000000,32.14],
    [1344290400000,32.37],
    [1344376800000,32.51],
    [1344463200000,32.65],
    [1344549600000,32.64],
    [1344808800000,32.27],
    [1344895200000,32.10],
    [1344981600000,32.91],
    [1345068000000,33.65],
    [1345154400000,33.80],
    [1345413600000,33.92],
    [1345500000000,33.75],
    [1345586400000,33.84],
    [1345672800000,33.50],
    [1345759200000,32.26],
    [1346018400000,32.32],
    [1346104800000,32.06],
    [1346191200000,31.96],
    [1346277600000,31.46],
    [1346364000000,31.27],
    [1346709600000,31.43],
    [1346796000000,32.26],
    [1346882400000,32.79],
    [1346968800000,32.46],
    [1347228000000,32.13],
    [1347314400000,32.43],
    [1347400800000,32.42],
    [1347487200000,32.81],
    [1347573600000,33.34],
    [1347832800000,33.41],
    [1347919200000,32.57],
    [1348005600000,33.12],
    [1348092000000,34.53],
    [1348178400000,33.83],
    [1348437600000,33.41],
    [1348524000000,32.90],
    [1348610400000,32.53],
    [1348696800000,32.80],
    [1348783200000,32.44],
    [1349042400000,32.62],
    [1349128800000,32.57],
    [1349215200000,32.60],
    [1349301600000,32.68],
    [1349388000000,32.47],
    [1349647200000,32.23],
    [1349733600000,31.68],
    [1349820000000,31.51],
    [1349906400000,31.78],
    [1349992800000,31.94],
    [1350252000000,32.33],
    [1350338400000,33.24],
    [1350424800000,33.44],
    [1350511200000,33.48],
    [1350597600000,33.24],
    [1350856800000,33.49],
    [1350943200000,33.31],
    [1351029600000,33.36],
    [1351116000000,33.40],
    [1351202400000,34.01],
    [1351638000000,34.02],
    [1351724400000,34.36],
    [1351810800000,34.39],
    [1352070000000,34.24],
    [1352156400000,34.39],
    [1352242800000,33.47],
    [1352329200000,32.98],
    [1352415600000,32.90],
    [1352674800000,32.70],
    [1352761200000,32.54],
    [1352847600000,32.23],
    [1352934000000,32.64],
    [1353020400000,32.65],
    [1353279600000,32.92],
    [1353366000000,32.64],
    [1353452400000,32.84],
    [1353625200000,33.40],
    [1353884400000,33.30],
    [1353970800000,33.18],
    [1354057200000,33.88],
    [1354143600000,34.09],
    [1354230000000,34.61],
    [1354489200000,34.70],
    [1354575600000,35.30],
    [1354662000000,35.40],
    [1354748400000,35.14],
    [1354834800000,35.48],
    [1355094000000,35.75],
    [1355180400000,35.54],
    [1355266800000,35.96],
    [1355353200000,35.53],
    [1355439600000,37.56],
    [1355698800000,37.42],
    [1355785200000,37.49],
    [1355871600000,38.09],
    [1355958000000,37.87],
    [1356044400000,37.71],
    [1356303600000,37.53],
    [1356476400000,37.55],
    [1356562800000,37.30],
    [1356649200000,36.90],
    [1356908400000,37.68],
    [1357081200000,38.34],
    [1357167600000,37.75],
    [1357254000000,38.13],
    [1357513200000,37.94],
    [1357599600000,38.14],
    [1357686000000,38.66],
    [1357772400000,38.62],
    [1357858800000,38.09],
    [1358118000000,38.16],
    [1358204400000,38.15],
    [1358290800000,37.88],
    [1358377200000,37.73],
    [1358463600000,37.98],
    [1358809200000,37.95],
    [1358895600000,38.25],
    [1358982000000,38.10],
    [1359068400000,38.32],
    [1359327600000,38.24],
    [1359414000000,38.52],
    [1359500400000,37.94],
    [1359586800000,37.83],
    [1359673200000,38.34],
    [1359932400000,38.10],
    [1360018800000,38.51],
    [1360105200000,38.40],
    [1360191600000,38.07],
    [1360278000000,39.12],
    [1360537200000,38.64],
    [1360623600000,38.89],
    [1360710000000,38.81],
    [1360796400000,38.61],
    [1360882800000,38.63],
    [1361228400000,38.99],
    [1361314800000,38.77],
    [1361401200000,38.34],
    [1361487600000,38.55],
    [1361746800000,38.11],
    [1361833200000,38.59],
    [1361919600000,39.60],]
  }],
    chart: {
    id: 'Chartbrush6',
    height: 130,
    type: 'area',
    brush:{
      target: 'Chartbrush5',
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
        min: new Date('26 Dec 2012').getTime(),
        max: new Date('26 Feb 2013').getTime()
      }
    },


  },
  colors: ['#ff3e1d'],
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.91,
      opacityTo: 0.1,
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
  yaxis: {
    show: true, 
    tickAmount: 3,                          
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  }, 
  };

  var brush6 = new ApexCharts(document.querySelector("#brush6"), optionsLinebrush6);
  brush6.render();
  // fin BRUSH grafico











// grafico varias barras
  var optionszonaPorEntreno1 = {
    colors:['#007bff','rgb(75, 192, 192)','#9BCB3B','rgb(255, 171, 0)','#ff3e1d','#6610f2'],
    series: [{
    name: 'Zona 1',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  }, {
    name: 'Zona 2',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Zona 3',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  },{
    name: 'Zona 4',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Zona 5',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Zona 6',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
    chart: {
    type: 'bar',
    height: 250
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 1.5,
    colors: ['transparent']
  },
  legend:{    
    show:true,
    fontWeight: 700,
    position: 'bottom', 
    horizontalAlign: 'center',
    labels:{
      colors: '#fff',
      useSeriesColors: true
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
    categories: ['Ene','Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Agos', 'Sep', 'Oct', 'Nov', 'Dic'],
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
  },
  yaxis: {
    title: {
      text: 'Tiempo (minutos)',
      style: {
        color:'#cbcbe2'
      }
    },    
    labels:{      
      style:{
      colors:['#cbcbe2']
    }
    }
  },  
  fill: {
    opacity: 1,
    
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return " " + val + " %"
      }
    }
  }
  };

  var zonaPorEntreno1 = new ApexCharts(document.querySelector("#zonaPorEntreno1"), optionszonaPorEntreno1);
  zonaPorEntreno1.render();
  // Fin grafico varias barras











  // grafico varias barras
  var optionszonaPorEntreno2 = {
    colors:['#007bff','rgb(75, 192, 192)','#9BCB3B','rgb(255, 171, 0)','#ff3e1d','#6610f2'],
    series: [{
    name: 'Zona 1',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  }, {
    name: 'Zona 2',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Zona 3',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  },{
    name: 'Zona 4',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Zona 5',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Zona 6',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
    chart: {
    type: 'bar',
    height: 250
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 1.5,
    colors: ['transparent']
  },
  legend:{    
    show:true,
    fontWeight: 700,
    position: 'bottom', 
    horizontalAlign: 'center',
    labels:{
      colors: '#fff',
      useSeriesColors: true
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
    categories: ['Ene','Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Agos', 'Sep', 'Oct', 'Nov', 'Dic'],
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
  },
  yaxis: {
    title: {
      text: 'Tiempo (minutos)',
      style: {
        color:'#cbcbe2'
      }
    },
    
    labels:{      
      style:{
      colors:['#cbcbe2']
    }
    }
  },
  
  fill: {
    opacity: 1,
    
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return " " + val + " %"
      }
    }
  }
  };

  var zonaPorEntreno2 = new ApexCharts(document.querySelector("#zonaPorEntreno2"), optionszonaPorEntreno2);
  zonaPorEntreno2.render();
  // Fin grafico varias barras










  // grafico varias barras
  var optionszonaPorEntreno3 = {
    colors:['#007bff','rgb(75, 192, 192)','#9BCB3B','rgb(255, 171, 0)','#ff3e1d','#6610f2'],
    series: [{
    name: 'Zona 1',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  }, {
    name: 'Zona 2',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Zona 3',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  },{
    name: 'Zona 4',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Zona 5',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Zona 6',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
    chart: {
    type: 'bar',
    height: 250
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 1.5,
    colors: ['transparent']
  },
  legend:{    
    show:true,
    fontWeight: 700,
    position: 'bottom', 
    horizontalAlign: 'center',
    labels:{
      colors: '#fff',
      useSeriesColors: true
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
    categories: ['Ene','Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Agos', 'Sep', 'Oct', 'Nov', 'Dic'],
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
  },
  yaxis: {
    title: {
      text: 'Tiempo (minutos)',
      style: {
        color:'#cbcbe2'
      }
    },
    
    labels:{      
      style:{
      colors:['#cbcbe2']
    }
    }
  },
  
  fill: {
    opacity: 1,
    
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return " " + val + " %"
      }
    }
  }
  };

  var zonaPorEntreno3 = new ApexCharts(document.querySelector("#zonaPorEntreno3"), optionszonaPorEntreno3);
  zonaPorEntreno3.render();
  // Fin grafico varias barras











  // zoomable grafico
  var optionsZoomable1 = {
    series: [{
    name: 'FCMax',
    data: [[1327359600000,30.95],
    [1327446000000,31.34],
    [1327532400000,31.18],
    [1327618800000,31.05],
    [1327878000000,31.00],
    [1327964400000,30.95],
    [1328050800000,31.24],
    [1328137200000,31.29],
    [1328223600000,31.85],
    [1328482800000,31.86],
    [1328569200000,32.28],
    [1328655600000,32.10],
    [1328742000000,32.65],
    [1328828400000,32.21],
    [1329087600000,32.35],
    [1329174000000,32.44],
    [1329260400000,32.46],
    [1329346800000,32.86],
    [1329433200000,32.75],
    [1329778800000,32.54],
    [1329865200000,32.33],
    [1329951600000,32.97],
    [1330038000000,33.41],
    [1330297200000,33.27],
    [1330383600000,33.27],
    [1330470000000,32.89],
    [1330556400000,33.10],
    [1330642800000,33.73],
    [1330902000000,33.22],
    [1330988400000,31.99],
    [1331074800000,32.41],
    [1331161200000,33.05],
    [1331247600000,33.64],
    [1331506800000,33.56],
    [1331593200000,34.22],
    [1331679600000,33.77],
    [1331766000000,34.17],
    [1331852400000,33.82],
    [1332111600000,34.51],
    [1332198000000,33.16],
    [1332284400000,33.56],
    [1332370800000,33.71],
    [1332457200000,33.81],
    [1332712800000,34.40],
    [1332799200000,34.63],
    [1332885600000,34.46],
    [1332972000000,34.48],
    [1333058400000,34.31],
    [1333317600000,34.70],
    [1333404000000,34.31],
    [1333490400000,33.46],
    [1333576800000,33.59],
    [1333922400000,33.22],
    [1334008800000,32.61],
    [1334095200000,33.01],
    [1334181600000,33.55],
    [1334268000000,33.18],
    [1334527200000,32.84],
    [1334613600000,33.84],
    [1334700000000,33.39],
    [1334786400000,32.91],
    [1334872800000,33.06],
    [1335132000000,32.62],
    [1335218400000,32.40],
    [1335304800000,33.13],
    [1335391200000,33.26],
    [1335477600000,33.58],
    [1335736800000,33.55],
    [1335823200000,33.77],
    [1335909600000,33.76],
    [1335996000000,33.32],
    [1336082400000,32.61],
    [1336341600000,32.52],
    [1336428000000,32.67],
    [1336514400000,32.52],
    [1336600800000,31.92],
    [1336687200000,32.20],
    [1336946400000,32.23],
    [1337032800000,32.33],
    [1337119200000,32.36],
    [1337205600000,32.01],
    [1337292000000,31.31],
    [1337551200000,32.01],
    [1337637600000,32.01],
    [1337724000000,32.18],
    [1337810400000,31.54],
    [1337896800000,31.60],
    [1338242400000,32.05],
    [1338328800000,31.29],
    [1338415200000,31.05],
    [1338501600000,29.82],
    [1338760800000,30.31],
    [1338847200000,30.70],
    [1338933600000,31.69],
    [1339020000000,31.32],
    [1339106400000,31.65],
    [1339365600000,31.13],
    [1339452000000,31.77],
    [1339538400000,31.79],
    [1339624800000,31.67],
    [1339711200000,32.39],
    [1339970400000,32.63],
    [1340056800000,32.89],
    [1340143200000,31.99],
    [1340229600000,31.23],
    [1340316000000,31.57],
    [1340575200000,30.84],
    [1340661600000,31.07],
    [1340748000000,31.41],
    [1340834400000,31.17],
    [1340920800000,32.37],
    [1341180000000,32.19],
    [1341266400000,32.51],
    [1341439200000,32.53],
    [1341525600000,31.37],
    [1341784800000,30.43],
    [1341871200000,30.44],
    [1341957600000,30.20],
    [1342044000000,30.14],
    [1342130400000,30.65],
    [1342389600000,30.40],
    [1342476000000,30.65],
    [1342562400000,31.43],
    [1342648800000,31.89],
    [1342735200000,31.38],
    [1342994400000,30.64],
    [1343080800000,30.02],
    [1343167200000,30.33],
    [1343253600000,30.95],
    [1343340000000,31.89],
    [1343599200000,31.01],
    [1343685600000,30.88],
    [1343772000000,30.69],
    [1343858400000,30.58],
    [1343944800000,32.02],
    [1344204000000,32.14],
    [1344290400000,32.37],
    [1344376800000,32.51],
    [1344463200000,32.65],
    [1344549600000,32.64],
    [1344808800000,32.27],
    [1344895200000,32.10],
    [1344981600000,32.91],
    [1345068000000,33.65],
    [1345154400000,33.80],
    [1345413600000,33.92],
    [1345500000000,33.75],
    [1345586400000,33.84],
    [1345672800000,33.50],
    [1345759200000,32.26],
    [1346018400000,32.32],
    [1346104800000,32.06],
    [1346191200000,31.96],
    [1346277600000,31.46],
    [1346364000000,31.27],
    [1346709600000,31.43],
    [1346796000000,32.26],
    [1346882400000,32.79],
    [1346968800000,32.46],
    [1347228000000,32.13],
    [1347314400000,32.43],
    [1347400800000,32.42],
    [1347487200000,32.81],
    [1347573600000,33.34],
    [1347832800000,33.41],
    [1347919200000,32.57],
    [1348005600000,33.12],
    [1348092000000,34.53],
    [1348178400000,33.83],
    [1348437600000,33.41],
    [1348524000000,32.90],
    [1348610400000,32.53],
    [1348696800000,32.80],
    [1348783200000,32.44],
    [1349042400000,32.62],
    [1349128800000,32.57],
    [1349215200000,32.60],
    [1349301600000,32.68],
    [1349388000000,32.47],
    [1349647200000,32.23],
    [1349733600000,31.68],
    [1349820000000,31.51],
    [1349906400000,31.78],
    [1349992800000,31.94],
    [1350252000000,32.33],
    [1350338400000,33.24],
    [1350424800000,33.44],
    [1350511200000,33.48],
    [1350597600000,33.24],
    [1350856800000,33.49],
    [1350943200000,33.31],
    [1351029600000,33.36],
    [1351116000000,33.40],
    [1351202400000,34.01],
    [1351638000000,34.02],
    [1351724400000,34.36],
    [1351810800000,34.39],
    [1352070000000,34.24],
    [1352156400000,34.39],
    [1352242800000,33.47],
    [1352329200000,32.98],
    [1352415600000,32.90],
    [1352674800000,32.70],
    [1352761200000,32.54],
    [1352847600000,32.23],
    [1352934000000,32.64],
    [1353020400000,32.65],
    [1353279600000,32.92],
    [1353366000000,32.64],
    [1353452400000,32.84],
    [1353625200000,33.40],
    [1353884400000,33.30],
    [1353970800000,33.18],
    [1354057200000,33.88],
    [1354143600000,34.09],
    [1354230000000,34.61],
    [1354489200000,34.70],
    [1354575600000,35.30],
    [1354662000000,35.40],
    [1354748400000,35.14],
    [1354834800000,35.48],
    [1355094000000,35.75],
    [1355180400000,35.54],
    [1355266800000,35.96],
    [1355353200000,35.53],
    [1355439600000,37.56],
    [1355698800000,37.42],
    [1355785200000,37.49],
    [1355871600000,38.09],
    [1355958000000,37.87],
    [1356044400000,37.71],
    [1356303600000,37.53],
    [1356476400000,37.55],
    [1356562800000,37.30],
    [1356649200000,36.90],
    [1356908400000,37.68],
    [1357081200000,38.34],
    [1357167600000,37.75],
    [1357254000000,38.13],
    [1357513200000,37.94],
    [1357599600000,38.14],
    [1357686000000,38.66],
    [1357772400000,38.62],
    [1357858800000,38.09],
    [1358118000000,38.16],
    [1358204400000,38.15],
    [1358290800000,37.88],
    [1358377200000,37.73],
    [1358463600000,37.98],
    [1358809200000,37.95],
    [1358895600000,38.25],
    [1358982000000,38.10],
    [1359068400000,38.32],
    [1359327600000,38.24],
    [1359414000000,38.52],
    [1359500400000,37.94],
    [1359586800000,37.83],
    [1359673200000,38.34],
    [1359932400000,38.10],
    [1360018800000,38.51],
    [1360105200000,38.40],
    [1360191600000,38.07],
    [1360278000000,39.12],
    [1360537200000,38.64],
    [1360623600000,38.89],
    [1360710000000,38.81],
    [1360796400000,38.61],
    [1360882800000,38.63],
    [1361228400000,38.99],
    [1361314800000,38.77],
    [1361401200000,38.34],
    [1361487600000,38.55],
    [1361746800000,38.11],
    [1361833200000,38.59],
    [1361919600000,39.60],]
  }],
    chart: {
    type: 'area',    
    stacked: false,
    height: 250,
    zoom: {
      type: 'x',
      enabled: true,
      autoScaleYaxis: true
    },
    toolbar: {
      autoSelected: 'zoom',


    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: { 
    width: 1.5,                                 
  },
  markers: {
    size: 0,
  },
  colors: ['#9BCB3B'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.91,
      opacityTo: 0,
      stops: [0, 90, 100]
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
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    },
    title: {
      text: 'Price',
      style: {
        color:'#cbcbe2'
      }
    },
  },
  xaxis: {          
    type: 'datetime',
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  tooltip: {
    shared: false,
    y: {
      formatter: function (val) {
        return (val / 1000000).toFixed(0)
      }
    }
  }
  };

  var Zoomable1 = new ApexCharts(document.querySelector("#Zoomable1"), optionsZoomable1);
  Zoomable1.render();
  // fin zoomable grafico














  // zoomable grafico
  var optionsZoomable2 = {
    series: [{
    name: 'FCMax',
    data: [[1327359600000,30.95],
    [1327446000000,31.34],
    [1327532400000,31.18],
    [1327618800000,31.05],
    [1327878000000,31.00],
    [1327964400000,30.95],
    [1328050800000,31.24],
    [1328137200000,31.29],
    [1328223600000,31.85],
    [1328482800000,31.86],
    [1328569200000,32.28],
    [1328655600000,32.10],
    [1328742000000,32.65],
    [1328828400000,32.21],
    [1329087600000,32.35],
    [1329174000000,32.44],
    [1329260400000,32.46],
    [1329346800000,32.86],
    [1329433200000,32.75],
    [1329778800000,32.54],
    [1329865200000,32.33],
    [1329951600000,32.97],
    [1330038000000,33.41],
    [1330297200000,33.27],
    [1330383600000,33.27],
    [1330470000000,32.89],
    [1330556400000,33.10],
    [1330642800000,33.73],
    [1330902000000,33.22],
    [1330988400000,31.99],
    [1331074800000,32.41],
    [1331161200000,33.05],
    [1331247600000,33.64],
    [1331506800000,33.56],
    [1331593200000,34.22],
    [1331679600000,33.77],
    [1331766000000,34.17],
    [1331852400000,33.82],
    [1332111600000,34.51],
    [1332198000000,33.16],
    [1332284400000,33.56],
    [1332370800000,33.71],
    [1332457200000,33.81],
    [1332712800000,34.40],
    [1332799200000,34.63],
    [1332885600000,34.46],
    [1332972000000,34.48],
    [1333058400000,34.31],
    [1333317600000,34.70],
    [1333404000000,34.31],
    [1333490400000,33.46],
    [1333576800000,33.59],
    [1333922400000,33.22],
    [1334008800000,32.61],
    [1334095200000,33.01],
    [1334181600000,33.55],
    [1334268000000,33.18],
    [1334527200000,32.84],
    [1334613600000,33.84],
    [1334700000000,33.39],
    [1334786400000,32.91],
    [1334872800000,33.06],
    [1335132000000,32.62],
    [1335218400000,32.40],
    [1335304800000,33.13],
    [1335391200000,33.26],
    [1335477600000,33.58],
    [1335736800000,33.55],
    [1335823200000,33.77],
    [1335909600000,33.76],
    [1335996000000,33.32],
    [1336082400000,32.61],
    [1336341600000,32.52],
    [1336428000000,32.67],
    [1336514400000,32.52],
    [1336600800000,31.92],
    [1336687200000,32.20],
    [1336946400000,32.23],
    [1337032800000,32.33],
    [1337119200000,32.36],
    [1337205600000,32.01],
    [1337292000000,31.31],
    [1337551200000,32.01],
    [1337637600000,32.01],
    [1337724000000,32.18],
    [1337810400000,31.54],
    [1337896800000,31.60],
    [1338242400000,32.05],
    [1338328800000,31.29],
    [1338415200000,31.05],
    [1338501600000,29.82],
    [1338760800000,30.31],
    [1338847200000,30.70],
    [1338933600000,31.69],
    [1339020000000,31.32],
    [1339106400000,31.65],
    [1339365600000,31.13],
    [1339452000000,31.77],
    [1339538400000,31.79],
    [1339624800000,31.67],
    [1339711200000,32.39],
    [1339970400000,32.63],
    [1340056800000,32.89],
    [1340143200000,31.99],
    [1340229600000,31.23],
    [1340316000000,31.57],
    [1340575200000,30.84],
    [1340661600000,31.07],
    [1340748000000,31.41],
    [1340834400000,31.17],
    [1340920800000,32.37],
    [1341180000000,32.19],
    [1341266400000,32.51],
    [1341439200000,32.53],
    [1341525600000,31.37],
    [1341784800000,30.43],
    [1341871200000,30.44],
    [1341957600000,30.20],
    [1342044000000,30.14],
    [1342130400000,30.65],
    [1342389600000,30.40],
    [1342476000000,30.65],
    [1342562400000,31.43],
    [1342648800000,31.89],
    [1342735200000,31.38],
    [1342994400000,30.64],
    [1343080800000,30.02],
    [1343167200000,30.33],
    [1343253600000,30.95],
    [1343340000000,31.89],
    [1343599200000,31.01],
    [1343685600000,30.88],
    [1343772000000,30.69],
    [1343858400000,30.58],
    [1343944800000,32.02],
    [1344204000000,32.14],
    [1344290400000,32.37],
    [1344376800000,32.51],
    [1344463200000,32.65],
    [1344549600000,32.64],
    [1344808800000,32.27],
    [1344895200000,32.10],
    [1344981600000,32.91],
    [1345068000000,33.65],
    [1345154400000,33.80],
    [1345413600000,33.92],
    [1345500000000,33.75],
    [1345586400000,33.84],
    [1345672800000,33.50],
    [1345759200000,32.26],
    [1346018400000,32.32],
    [1346104800000,32.06],
    [1346191200000,31.96],
    [1346277600000,31.46],
    [1346364000000,31.27],
    [1346709600000,31.43],
    [1346796000000,32.26],
    [1346882400000,32.79],
    [1346968800000,32.46],
    [1347228000000,32.13],
    [1347314400000,32.43],
    [1347400800000,32.42],
    [1347487200000,32.81],
    [1347573600000,33.34],
    [1347832800000,33.41],
    [1347919200000,32.57],
    [1348005600000,33.12],
    [1348092000000,34.53],
    [1348178400000,33.83],
    [1348437600000,33.41],
    [1348524000000,32.90],
    [1348610400000,32.53],
    [1348696800000,32.80],
    [1348783200000,32.44],
    [1349042400000,32.62],
    [1349128800000,32.57],
    [1349215200000,32.60],
    [1349301600000,32.68],
    [1349388000000,32.47],
    [1349647200000,32.23],
    [1349733600000,31.68],
    [1349820000000,31.51],
    [1349906400000,31.78],
    [1349992800000,31.94],
    [1350252000000,32.33],
    [1350338400000,33.24],
    [1350424800000,33.44],
    [1350511200000,33.48],
    [1350597600000,33.24],
    [1350856800000,33.49],
    [1350943200000,33.31],
    [1351029600000,33.36],
    [1351116000000,33.40],
    [1351202400000,34.01],
    [1351638000000,34.02],
    [1351724400000,34.36],
    [1351810800000,34.39],
    [1352070000000,34.24],
    [1352156400000,34.39],
    [1352242800000,33.47],
    [1352329200000,32.98],
    [1352415600000,32.90],
    [1352674800000,32.70],
    [1352761200000,32.54],
    [1352847600000,32.23],
    [1352934000000,32.64],
    [1353020400000,32.65],
    [1353279600000,32.92],
    [1353366000000,32.64],
    [1353452400000,32.84],
    [1353625200000,33.40],
    [1353884400000,33.30],
    [1353970800000,33.18],
    [1354057200000,33.88],
    [1354143600000,34.09],
    [1354230000000,34.61],
    [1354489200000,34.70],
    [1354575600000,35.30],
    [1354662000000,35.40],
    [1354748400000,35.14],
    [1354834800000,35.48],
    [1355094000000,35.75],
    [1355180400000,35.54],
    [1355266800000,35.96],
    [1355353200000,35.53],
    [1355439600000,37.56],
    [1355698800000,37.42],
    [1355785200000,37.49],
    [1355871600000,38.09],
    [1355958000000,37.87],
    [1356044400000,37.71],
    [1356303600000,37.53],
    [1356476400000,37.55],
    [1356562800000,37.30],
    [1356649200000,36.90],
    [1356908400000,37.68],
    [1357081200000,38.34],
    [1357167600000,37.75],
    [1357254000000,38.13],
    [1357513200000,37.94],
    [1357599600000,38.14],
    [1357686000000,38.66],
    [1357772400000,38.62],
    [1357858800000,38.09],
    [1358118000000,38.16],
    [1358204400000,38.15],
    [1358290800000,37.88],
    [1358377200000,37.73],
    [1358463600000,37.98],
    [1358809200000,37.95],
    [1358895600000,38.25],
    [1358982000000,38.10],
    [1359068400000,38.32],
    [1359327600000,38.24],
    [1359414000000,38.52],
    [1359500400000,37.94],
    [1359586800000,37.83],
    [1359673200000,38.34],
    [1359932400000,38.10],
    [1360018800000,38.51],
    [1360105200000,38.40],
    [1360191600000,38.07],
    [1360278000000,39.12],
    [1360537200000,38.64],
    [1360623600000,38.89],
    [1360710000000,38.81],
    [1360796400000,38.61],
    [1360882800000,38.63],
    [1361228400000,38.99],
    [1361314800000,38.77],
    [1361401200000,38.34],
    [1361487600000,38.55],
    [1361746800000,38.11],
    [1361833200000,38.59],
    [1361919600000,39.60],]
  }],
    chart: {
    type: 'area',    
    stacked: false,
    height: 250,
    zoom: {
      type: 'x',
      enabled: true,
      autoScaleYaxis: true
    },
    toolbar: {
      autoSelected: 'zoom',
      

    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: { 
    width: 1.5,                                 
  },
  markers: {
    size: 0,
  },
  colors: ['rgb(253, 172, 52)'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.91,
      opacityTo: 0,
      stops: [0, 90, 100]
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
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    },
    title: {
      text: 'Price',
      style: {
        color:'#cbcbe2'
      }
    },
  },
  xaxis: {          
    type: 'datetime',
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  tooltip: {
    shared: false,
    y: {
      formatter: function (val) {
        return (val / 1000000).toFixed(0)
      }
    }
  }
  };

  var Zoomable2 = new ApexCharts(document.querySelector("#Zoomable2"), optionsZoomable2);
  Zoomable2.render();
  // fin zoomable grafico














  // zoomable grafico
  var optionsZoomable3 = {
    series: [{
    name: 'FCMax',
    data: [[1327359600000,30.95],
    [1327446000000,31.34],
    [1327532400000,31.18],
    [1327618800000,31.05],
    [1327878000000,31.00],
    [1327964400000,30.95],
    [1328050800000,31.24],
    [1328137200000,31.29],
    [1328223600000,31.85],
    [1328482800000,31.86],
    [1328569200000,32.28],
    [1328655600000,32.10],
    [1328742000000,32.65],
    [1328828400000,32.21],
    [1329087600000,32.35],
    [1329174000000,32.44],
    [1329260400000,32.46],
    [1329346800000,32.86],
    [1329433200000,32.75],
    [1329778800000,32.54],
    [1329865200000,32.33],
    [1329951600000,32.97],
    [1330038000000,33.41],
    [1330297200000,33.27],
    [1330383600000,33.27],
    [1330470000000,32.89],
    [1330556400000,33.10],
    [1330642800000,33.73],
    [1330902000000,33.22],
    [1330988400000,31.99],
    [1331074800000,32.41],
    [1331161200000,33.05],
    [1331247600000,33.64],
    [1331506800000,33.56],
    [1331593200000,34.22],
    [1331679600000,33.77],
    [1331766000000,34.17],
    [1331852400000,33.82],
    [1332111600000,34.51],
    [1332198000000,33.16],
    [1332284400000,33.56],
    [1332370800000,33.71],
    [1332457200000,33.81],
    [1332712800000,34.40],
    [1332799200000,34.63],
    [1332885600000,34.46],
    [1332972000000,34.48],
    [1333058400000,34.31],
    [1333317600000,34.70],
    [1333404000000,34.31],
    [1333490400000,33.46],
    [1333576800000,33.59],
    [1333922400000,33.22],
    [1334008800000,32.61],
    [1334095200000,33.01],
    [1334181600000,33.55],
    [1334268000000,33.18],
    [1334527200000,32.84],
    [1334613600000,33.84],
    [1334700000000,33.39],
    [1334786400000,32.91],
    [1334872800000,33.06],
    [1335132000000,32.62],
    [1335218400000,32.40],
    [1335304800000,33.13],
    [1335391200000,33.26],
    [1335477600000,33.58],
    [1335736800000,33.55],
    [1335823200000,33.77],
    [1335909600000,33.76],
    [1335996000000,33.32],
    [1336082400000,32.61],
    [1336341600000,32.52],
    [1336428000000,32.67],
    [1336514400000,32.52],
    [1336600800000,31.92],
    [1336687200000,32.20],
    [1336946400000,32.23],
    [1337032800000,32.33],
    [1337119200000,32.36],
    [1337205600000,32.01],
    [1337292000000,31.31],
    [1337551200000,32.01],
    [1337637600000,32.01],
    [1337724000000,32.18],
    [1337810400000,31.54],
    [1337896800000,31.60],
    [1338242400000,32.05],
    [1338328800000,31.29],
    [1338415200000,31.05],
    [1338501600000,29.82],
    [1338760800000,30.31],
    [1338847200000,30.70],
    [1338933600000,31.69],
    [1339020000000,31.32],
    [1339106400000,31.65],
    [1339365600000,31.13],
    [1339452000000,31.77],
    [1339538400000,31.79],
    [1339624800000,31.67],
    [1339711200000,32.39],
    [1339970400000,32.63],
    [1340056800000,32.89],
    [1340143200000,31.99],
    [1340229600000,31.23],
    [1340316000000,31.57],
    [1340575200000,30.84],
    [1340661600000,31.07],
    [1340748000000,31.41],
    [1340834400000,31.17],
    [1340920800000,32.37],
    [1341180000000,32.19],
    [1341266400000,32.51],
    [1341439200000,32.53],
    [1341525600000,31.37],
    [1341784800000,30.43],
    [1341871200000,30.44],
    [1341957600000,30.20],
    [1342044000000,30.14],
    [1342130400000,30.65],
    [1342389600000,30.40],
    [1342476000000,30.65],
    [1342562400000,31.43],
    [1342648800000,31.89],
    [1342735200000,31.38],
    [1342994400000,30.64],
    [1343080800000,30.02],
    [1343167200000,30.33],
    [1343253600000,30.95],
    [1343340000000,31.89],
    [1343599200000,31.01],
    [1343685600000,30.88],
    [1343772000000,30.69],
    [1343858400000,30.58],
    [1343944800000,32.02],
    [1344204000000,32.14],
    [1344290400000,32.37],
    [1344376800000,32.51],
    [1344463200000,32.65],
    [1344549600000,32.64],
    [1344808800000,32.27],
    [1344895200000,32.10],
    [1344981600000,32.91],
    [1345068000000,33.65],
    [1345154400000,33.80],
    [1345413600000,33.92],
    [1345500000000,33.75],
    [1345586400000,33.84],
    [1345672800000,33.50],
    [1345759200000,32.26],
    [1346018400000,32.32],
    [1346104800000,32.06],
    [1346191200000,31.96],
    [1346277600000,31.46],
    [1346364000000,31.27],
    [1346709600000,31.43],
    [1346796000000,32.26],
    [1346882400000,32.79],
    [1346968800000,32.46],
    [1347228000000,32.13],
    [1347314400000,32.43],
    [1347400800000,32.42],
    [1347487200000,32.81],
    [1347573600000,33.34],
    [1347832800000,33.41],
    [1347919200000,32.57],
    [1348005600000,33.12],
    [1348092000000,34.53],
    [1348178400000,33.83],
    [1348437600000,33.41],
    [1348524000000,32.90],
    [1348610400000,32.53],
    [1348696800000,32.80],
    [1348783200000,32.44],
    [1349042400000,32.62],
    [1349128800000,32.57],
    [1349215200000,32.60],
    [1349301600000,32.68],
    [1349388000000,32.47],
    [1349647200000,32.23],
    [1349733600000,31.68],
    [1349820000000,31.51],
    [1349906400000,31.78],
    [1349992800000,31.94],
    [1350252000000,32.33],
    [1350338400000,33.24],
    [1350424800000,33.44],
    [1350511200000,33.48],
    [1350597600000,33.24],
    [1350856800000,33.49],
    [1350943200000,33.31],
    [1351029600000,33.36],
    [1351116000000,33.40],
    [1351202400000,34.01],
    [1351638000000,34.02],
    [1351724400000,34.36],
    [1351810800000,34.39],
    [1352070000000,34.24],
    [1352156400000,34.39],
    [1352242800000,33.47],
    [1352329200000,32.98],
    [1352415600000,32.90],
    [1352674800000,32.70],
    [1352761200000,32.54],
    [1352847600000,32.23],
    [1352934000000,32.64],
    [1353020400000,32.65],
    [1353279600000,32.92],
    [1353366000000,32.64],
    [1353452400000,32.84],
    [1353625200000,33.40],
    [1353884400000,33.30],
    [1353970800000,33.18],
    [1354057200000,33.88],
    [1354143600000,34.09],
    [1354230000000,34.61],
    [1354489200000,34.70],
    [1354575600000,35.30],
    [1354662000000,35.40],
    [1354748400000,35.14],
    [1354834800000,35.48],
    [1355094000000,35.75],
    [1355180400000,35.54],
    [1355266800000,35.96],
    [1355353200000,35.53],
    [1355439600000,37.56],
    [1355698800000,37.42],
    [1355785200000,37.49],
    [1355871600000,38.09],
    [1355958000000,37.87],
    [1356044400000,37.71],
    [1356303600000,37.53],
    [1356476400000,37.55],
    [1356562800000,37.30],
    [1356649200000,36.90],
    [1356908400000,37.68],
    [1357081200000,38.34],
    [1357167600000,37.75],
    [1357254000000,38.13],
    [1357513200000,37.94],
    [1357599600000,38.14],
    [1357686000000,38.66],
    [1357772400000,38.62],
    [1357858800000,38.09],
    [1358118000000,38.16],
    [1358204400000,38.15],
    [1358290800000,37.88],
    [1358377200000,37.73],
    [1358463600000,37.98],
    [1358809200000,37.95],
    [1358895600000,38.25],
    [1358982000000,38.10],
    [1359068400000,38.32],
    [1359327600000,38.24],
    [1359414000000,38.52],
    [1359500400000,37.94],
    [1359586800000,37.83],
    [1359673200000,38.34],
    [1359932400000,38.10],
    [1360018800000,38.51],
    [1360105200000,38.40],
    [1360191600000,38.07],
    [1360278000000,39.12],
    [1360537200000,38.64],
    [1360623600000,38.89],
    [1360710000000,38.81],
    [1360796400000,38.61],
    [1360882800000,38.63],
    [1361228400000,38.99],
    [1361314800000,38.77],
    [1361401200000,38.34],
    [1361487600000,38.55],
    [1361746800000,38.11],
    [1361833200000,38.59],
    [1361919600000,39.60],]
  }],
    chart: {
    type: 'area',    
    stacked: false,
    height: 250,
    zoom: {
      type: 'x',
      enabled: true,
      autoScaleYaxis: true
    },
    toolbar: {
      autoSelected: 'zoom',
      

    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: { 
    width: 1.5,                                 
  },
  markers: {
    size: 0,
  },
  colors: ['#ff3e1d'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.91,
      opacityTo: 0,
      stops: [0, 90, 100]
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
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    },
    title: {
      text: 'Price',
      style: {
        color:'#cbcbe2'
      }
    },
  },
  xaxis: {          
    type: 'datetime',
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  tooltip: {
    shared: false,
    y: {
      formatter: function (val) {
        return (val / 1000000).toFixed(0)
      }
    }
  }
  };

  var Zoomable3 = new ApexCharts(document.querySelector("#Zoomable3"), optionsZoomable3);
  Zoomable3.render();
  // fin zoomable grafico









  // dashed grafico
  var optionsDashed1 = {
    series: [{
      name: "Duración de la sesión",
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    },
    {
      name: "Vistas",
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
    },
    {
      name: 'Visitas totales',
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
    }
  ],
  colors: ['#9BCB3B','#ffab00','#ff3e1d'],
    chart: {
    height: 250,
    type: 'line',
    zoom: {
      enabled: false
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [3, 2, 2],
    curve: 'straight',
    dashArray: [0, 8, 5],
    colors: ['#9BCB3B','#ffab00','#ff3e1d']

  },
  title: {
  },
  legend: {
    tooltipHoverFormatter: function(val, opts) {
      return val + ': ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
    },
    show:true,
    position: 'bottom', 
    horizontalAlign: 'center',
    labels:{
      colors: '#fff',
      useSeriesColors: true
    }
  },
  markers: {
    size: 0,
    hover: {
      sizeOffset: 6
    }
  },
  xaxis: {
    categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan'],
      labels:{
        style:{
          colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
      }
      }  
  },
  yaxis: {    
    labels:{      
      style:{
      colors:['#cbcbe2']
    }
    }
  },
  tooltip: {
    y: [
      {
        title: {
          formatter: function (val) {
            return val + " (mins)"
          }
        }
      },
      {
        title: {
          formatter: function (val) {
            return val + " per session"
          }
        }
      },
      {
        title: {
          formatter: function (val) {
            return val;
          }
        }
      }
    ]
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

  var Dashed1 = new ApexCharts(document.querySelector("#Dashed1"), optionsDashed1);
  Dashed1.render();
  // fin dashed grafico







  // dashed grafico
  var optionsDashed2 = {
    series: [{
      name: "Duración de la sesión",
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    },
    {
      name: "Vistas",
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
    },
    {
      name: 'Visitas totales',
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
    }
  ],
  colors: ['rgb(102, 16, 242)','#ffab00','#ff3e1d'],
    chart: {
    height: 250,
    type: 'line',
    zoom: {
      enabled: false
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [3, 2, 2],
    curve: 'straight',
    dashArray: [0, 8, 5],
    colors: ['rgb(102, 16, 242)','#ffab00','#ff3e1d']

  },
  title: {
  },
  legend: {
    tooltipHoverFormatter: function(val, opts) {
      return val + ': ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
    },
    show:true,
    position: 'bottom', 
    horizontalAlign: 'center',
    labels:{
      colors: '#fff',
      useSeriesColors: true
    }
  },
  markers: {
    size: 0,
    hover: {
      sizeOffset: 6
    }
  },
  xaxis: {
    categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan'],
      labels:{
        style:{
          colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
      }
      }  
  },
  yaxis: {    
    labels:{      
      style:{
      colors:['#cbcbe2']
    }
    }
  },
  tooltip: {
    y: [
      {
        title: {
          formatter: function (val) {
            return val + " (mins)"
          }
        }
      },
      {
        title: {
          formatter: function (val) {
            return val + " per session"
          }
        }
      },
      {
        title: {
          formatter: function (val) {
            return val;
          }
        }
      }
    ]
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

  var Dashed2 = new ApexCharts(document.querySelector("#Dashed2"), optionsDashed2);
  Dashed2.render();
  // fin dashed grafico







  // dashed grafico
  var optionsDashed3 = {
    series: [{
      name: "Duración de la sesión",
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    },
    {
      name: "Vistas",
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
    },
    {
      name: 'Visitas totales',
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
    }
  ],
    colors: ['#03c3ec','#ffab00','#ff3e1d'],
    chart: {
    height: 250,
    type: 'line',
    zoom: {
      enabled: false
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [3, 2, 2],
    curve: 'straight',
    dashArray: [0, 8, 5],
    colors: ['#03c3ec','#ffab00','#ff3e1d']

  },
  title: {
  },
  legend: {
    tooltipHoverFormatter: function(val, opts) {
      return val + ': ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
    },
    show:true,
    position: 'bottom', 
    horizontalAlign: 'center',
    labels:{
      colors: '#fff',
      useSeriesColors: true
    }
  },
  markers: {
    size: 0,
    hover: {
      sizeOffset: 6
    }
  },
  xaxis: {
    categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan'],
      labels:{
        style:{
          colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
      }
      }  
  },
  yaxis: {    
    labels:{      
      style:{
      colors:['#cbcbe2']
    }
    }
  },
  tooltip: {
    y: [
      {
        title: {
          formatter: function (val) {
            return val + " (mins)"
          }
        }
      },
      {
        title: {
          formatter: function (val) {
            return val + " per session"
          }
        }
      },
      {
        title: {
          formatter: function (val) {
            return val;
          }
        }
      }
    ]
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

  var Dashed3 = new ApexCharts(document.querySelector("#Dashed3"), optionsDashed3);
  Dashed3.render();
  // fin dashed grafico












// splinegrafico
  var optionsSpline1 = {
    series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    colors: ['#9BCB3B','#ffab00'],
    chart: {
    height: 250,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width:2
  },
  title: {
  },
  legend: {
    tooltipHoverFormatter: function(val, opts) {
      return val + ': ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
    },
    show:true,
    position: 'bottom', 
    horizontalAlign: 'center',
    labels:{
      colors: '#fff',
      useSeriesColors: true
    }
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    } 
  },
  yaxis: {    
    labels:{      
      style:{
      colors:['#cbcbe2']
    }
    }
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
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

  var Spline1 = new ApexCharts(document.querySelector("#Spline1"), optionsSpline1);
  Spline1.render();
  //Fin splinegrafico








// splinegrafico
  var optionsSpline2 = {
    series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    colors: ['#9BCB3B','#ff3e1d'],
    chart: {
      height: 250,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width:2
    },
    title: {
    },
    legend: {
      tooltipHoverFormatter: function(val, opts) {
        return val + ': ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
      },
      show:true,
      position: 'bottom', 
      horizontalAlign: 'center',
      labels:{
        colors: '#fff',
        useSeriesColors: true
      }
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
      labels:{
        style:{
          colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
      }
      } 
    },
    yaxis: {    
      labels:{      
        style:{
        colors:['#cbcbe2']
      }
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
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

  var Spline2 = new ApexCharts(document.querySelector("#Spline2"), optionsSpline2);
  Spline2.render();
//Fin splinegrafico







// splinegrafico
  var optionsSpline3 = {
    series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    colors: ['#9BCB3B','rgb(102, 16, 242)'],
    chart: {
      height: 250,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    title: {
    },
    legend: {
      tooltipHoverFormatter: function(val, opts) {
        return val + ': ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
      },
      show:true,
      position: 'bottom', 
      horizontalAlign: 'center',
      labels:{
        colors: '#fff',
        useSeriesColors: true
      }
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
      labels:{
        style:{
          colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
      }
      } 
    },
    yaxis: {    
      labels:{      
        style:{
        colors:['#cbcbe2']
      }
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
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

  var Spline3 = new ApexCharts(document.querySelector("#Spline3"), optionsSpline3);
  Spline3.render();
//Fin splinegrafico












//DateXisgrafico
  var optionsDateXis1 = {
    series: [{
    data: [
      [1327359600000,30.95],
      [1327446000000,31.34],
      [1327532400000,31.18],
      [1327618800000,31.05],
      [1327878000000,31.00],
      [1327964400000,30.95],
      [1328050800000,31.24],
      [1328137200000,31.29],
      [1328223600000,31.85],
      [1328482800000,31.86],
      [1328569200000,32.28],
      [1328655600000,32.10],
      [1328742000000,32.65],
      [1328828400000,32.21],
      [1329087600000,32.35],
      [1329174000000,32.44],
      [1329260400000,32.46],
      [1329346800000,32.86],
      [1329433200000,32.75],
      [1329778800000,32.54],
      [1329865200000,32.33],
      [1329951600000,32.97],
      [1330038000000,33.41],
      [1330297200000,33.27],
      [1330383600000,33.27],
      [1330470000000,32.89],
      [1330556400000,33.10],
      [1330642800000,33.73],
      [1330902000000,33.22],
      [1330988400000,31.99],
      [1331074800000,32.41],
      [1331161200000,33.05],
      [1331247600000,33.64],
      [1331506800000,33.56],
      [1331593200000,34.22],
      [1331679600000,33.77],
      [1331766000000,34.17],
      [1331852400000,33.82],
      [1332111600000,34.51],
      [1332198000000,33.16],
      [1332284400000,33.56],
      [1332370800000,33.71],
      [1332457200000,33.81],
      [1332712800000,34.40],
      [1332799200000,34.63],
      [1332885600000,34.46],
      [1332972000000,34.48],
      [1333058400000,34.31],
      [1333317600000,34.70],
      [1333404000000,34.31],
      [1333490400000,33.46],
      [1333576800000,33.59],
      [1333922400000,33.22],
      [1334008800000,32.61],
      [1334095200000,33.01],
      [1334181600000,33.55],
      [1334268000000,33.18],
      [1334527200000,32.84],
      [1334613600000,33.84],
      [1334700000000,33.39],
      [1334786400000,32.91],
      [1334872800000,33.06],
      [1335132000000,32.62],
      [1335218400000,32.40],
      [1335304800000,33.13],
      [1335391200000,33.26],
      [1335477600000,33.58],
      [1335736800000,33.55],
      [1335823200000,33.77],
      [1335909600000,33.76],
      [1335996000000,33.32],
      [1336082400000,32.61],
      [1336341600000,32.52],
      [1336428000000,32.67],
      [1336514400000,32.52],
      [1336600800000,31.92],
      [1336687200000,32.20],
      [1336946400000,32.23],
      [1337032800000,32.33],
      [1337119200000,32.36],
      [1337205600000,32.01],
      [1337292000000,31.31],
      [1337551200000,32.01],
      [1337637600000,32.01],
      [1337724000000,32.18],
      [1337810400000,31.54],
      [1337896800000,31.60],
      [1338242400000,32.05],
      [1338328800000,31.29],
      [1338415200000,31.05],
      [1338501600000,29.82],
      [1338760800000,30.31],
      [1338847200000,30.70],
      [1338933600000,31.69],
      [1339020000000,31.32],
      [1339106400000,31.65],
      [1339365600000,31.13],
      [1339452000000,31.77],
      [1339538400000,31.79],
      [1339624800000,31.67],
      [1339711200000,32.39],
      [1339970400000,32.63],
      [1340056800000,32.89],
      [1340143200000,31.99],
      [1340229600000,31.23],
      [1340316000000,31.57],
      [1340575200000,30.84],
      [1340661600000,31.07],
      [1340748000000,31.41],
      [1340834400000,31.17],
      [1340920800000,32.37],
      [1341180000000,32.19],
      [1341266400000,32.51],
      [1341439200000,32.53],
      [1341525600000,31.37],
      [1341784800000,30.43],
      [1341871200000,30.44],
      [1341957600000,30.20],
      [1342044000000,30.14],
      [1342130400000,30.65],
      [1342389600000,30.40],
      [1342476000000,30.65],
      [1342562400000,31.43],
      [1342648800000,31.89],
      [1342735200000,31.38],
      [1342994400000,30.64],
      [1343080800000,30.02],
      [1343167200000,30.33],
      [1343253600000,30.95],
      [1343340000000,31.89],
      [1343599200000,31.01],
      [1343685600000,30.88],
      [1343772000000,30.69],
      [1343858400000,30.58],
      [1343944800000,32.02],
      [1344204000000,32.14],
      [1344290400000,32.37],
      [1344376800000,32.51],
      [1344463200000,32.65],
      [1344549600000,32.64],
      [1344808800000,32.27],
      [1344895200000,32.10],
      [1344981600000,32.91],
      [1345068000000,33.65],
      [1345154400000,33.80],
      [1345413600000,33.92],
      [1345500000000,33.75],
      [1345586400000,33.84],
      [1345672800000,33.50],
      [1345759200000,32.26],
      [1346018400000,32.32],
      [1346104800000,32.06],
      [1346191200000,31.96],
      [1346277600000,31.46],
      [1346364000000,31.27],
      [1346709600000,31.43],
      [1346796000000,32.26],
      [1346882400000,32.79],
      [1346968800000,32.46],
      [1347228000000,32.13],
      [1347314400000,32.43],
      [1347400800000,32.42],
      [1347487200000,32.81],
      [1347573600000,33.34],
      [1347832800000,33.41],
      [1347919200000,32.57],
      [1348005600000,33.12],
      [1348092000000,34.53],
      [1348178400000,33.83],
      [1348437600000,33.41],
      [1348524000000,32.90],
      [1348610400000,32.53],
      [1348696800000,32.80],
      [1348783200000,32.44],
      [1349042400000,32.62],
      [1349128800000,32.57],
      [1349215200000,32.60],
      [1349301600000,32.68],
      [1349388000000,32.47],
      [1349647200000,32.23],
      [1349733600000,31.68],
      [1349820000000,31.51],
      [1349906400000,31.78],
      [1349992800000,31.94],
      [1350252000000,32.33],
      [1350338400000,33.24],
      [1350424800000,33.44],
      [1350511200000,33.48],
      [1350597600000,33.24],
      [1350856800000,33.49],
      [1350943200000,33.31],
      [1351029600000,33.36],
      [1351116000000,33.40],
      [1351202400000,34.01],
      [1351638000000,34.02],
      [1351724400000,34.36],
      [1351810800000,34.39],
      [1352070000000,34.24],
      [1352156400000,34.39],
      [1352242800000,33.47],
      [1352329200000,32.98],
      [1352415600000,32.90],
      [1352674800000,32.70],
      [1352761200000,32.54],
      [1352847600000,32.23],
      [1352934000000,32.64],
      [1353020400000,32.65],
      [1353279600000,32.92],
      [1353366000000,32.64],
      [1353452400000,32.84],
      [1353625200000,33.40],
      [1353884400000,33.30],
      [1353970800000,33.18],
      [1354057200000,33.88],
      [1354143600000,34.09],
      [1354230000000,34.61],
      [1354489200000,34.70],
      [1354575600000,35.30],
      [1354662000000,35.40],
      [1354748400000,35.14],
      [1354834800000,35.48],
      [1355094000000,35.75],
      [1355180400000,35.54],
      [1355266800000,35.96],
      [1355353200000,35.53],
      [1355439600000,37.56],
      [1355698800000,37.42],
      [1355785200000,37.49],
      [1355871600000,38.09],
      [1355958000000,37.87],
      [1356044400000,37.71],
      [1356303600000,37.53],
      [1356476400000,37.55],
      [1356562800000,37.30],
      [1356649200000,36.90],
      [1356908400000,37.68],
      [1357081200000,38.34],
      [1357167600000,37.75],
      [1357254000000,38.13],
      [1357513200000,37.94],
      [1357599600000,38.14],
      [1357686000000,38.66],
      [1357772400000,38.62],
      [1357858800000,38.09],
      [1358118000000,38.16],
      [1358204400000,38.15],
      [1358290800000,37.88],
      [1358377200000,37.73],
      [1358463600000,37.98],
      [1358809200000,37.95],
      [1358895600000,38.25],
      [1358982000000,38.10],
      [1359068400000,38.32],
      [1359327600000,38.24],
      [1359414000000,38.52],
      [1359500400000,37.94],
      [1359586800000,37.83],
      [1359673200000,38.34],
      [1359932400000,38.10],
      [1360018800000,38.51],
      [1360105200000,38.40],
      [1360191600000,38.07],
      [1360278000000,39.12],
      [1360537200000,38.64],
      [1360623600000,38.89],
      [1360710000000,38.81],
      [1360796400000,38.61],
      [1360882800000,38.63],
      [1361228400000,38.99],
      [1361314800000,38.77],
      [1361401200000,38.34],
      [1361487600000,38.55],
      [1361746800000,38.11],
      [1361833200000,38.59],
      [1361919600000,39.60],
    ]
  }],
    colors: ['#9BCB3B'],
    chart: {
    id: 'area-datetime',
    type: 'area',
    height: 250,
    zoom: {
      autoScaleYaxis: true
    }
  },
  annotations: {
    yaxis: [{
      y: 35,
      strokeDashArray: 3,
      fillColor: '#fff',
      borderColor: '#fff',
      label: {
        show: true,
        text: 'Velocidad Promedio',
        style: {
          color: "#fff",
          background: '#191924'
        }
      }
    }],
    xaxis: [{
      x: new Date('14 Nov 2012').getTime(),
      strokeDashArray: 1,
      fillColor: '#fff',
      borderColor: '#fff',
      yAxisIndex: 0,
      label: {
        show: true,
        text: 'Fondo / Prueba',
        style: {
          color: "#fff",
          background: '#191924'
        }
      }
    }]
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width:2
  },
  title: {
  },
  markers: {
    size: 0,
    style: 'hollow',
  },
  xaxis: {
    type: 'datetime',
    min: new Date('01 Mar 2012').getTime(),
    tickAmount: 6,
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    } 
  },
  tooltip: {
    x: {
      format: 'dd MMM yyyy'
    }
  },
  yaxis: {    
    labels:{      
      style:{
      colors:['#cbcbe2']
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.91,
      opacityTo: 0,
      stops: [0,90, 100]
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
  };

  var DateXis1 = new ApexCharts(document.querySelector("#DateXis1"), optionsDateXis1);
  DateXis1.render();


  var resetCssClasses = function(activeEl) {
  var els = document.querySelectorAll('button')
  Array.prototype.forEach.call(els, function(el) {
    el.classList.remove('active1')
  })

  activeEl.target.classList.add('active1')
}

document
  .querySelector('#one_month1')
  .addEventListener('click', function(e) {
    resetCssClasses(e)

    DateXis1.zoomX(
      new Date('28 Jan 2013').getTime(),
      new Date('27 Feb 2013').getTime()
    )
  })

document
  .querySelector('#six_months1')
  .addEventListener('click', function(e) {
    resetCssClasses(e)

    DateXis1.zoomX(
      new Date('27 Sep 2012').getTime(),
      new Date('27 Feb 2013').getTime()
    )
  })

document
  .querySelector('#one_year1')
  .addEventListener('click', function(e) {
    resetCssClasses(e)
    DateXis1.zoomX(
      new Date('27 Feb 2012').getTime(),
      new Date('27 Feb 2013').getTime()
    )
  })

document.querySelector('#ytd1').addEventListener('click', function(e) {
  resetCssClasses(e)

  DateXis1.zoomX(
    new Date('01 Jan 2013').getTime(),
    new Date('27 Feb 2013').getTime()
  )
})

document.querySelector('#all1').addEventListener('click', function(e) {
  resetCssClasses(e)

  DateXis1.zoomX(
    new Date('23 Jan 2012').getTime(),
    new Date('27 Feb 2013').getTime()
  )
})
//Fin DateXisgrafico















//DateXisgrafico
var optionsDateXis2 = {
  series: [{
  data: [
    [1327359600000,30.95],
    [1327446000000,31.34],
    [1327532400000,31.18],
    [1327618800000,31.05],
    [1327878000000,31.00],
    [1327964400000,30.95],
    [1328050800000,31.24],
    [1328137200000,31.29],
    [1328223600000,31.85],
    [1328482800000,31.86],
    [1328569200000,32.28],
    [1328655600000,32.10],
    [1328742000000,32.65],
    [1328828400000,32.21],
    [1329087600000,32.35],
    [1329174000000,32.44],
    [1329260400000,32.46],
    [1329346800000,32.86],
    [1329433200000,32.75],
    [1329778800000,32.54],
    [1329865200000,32.33],
    [1329951600000,32.97],
    [1330038000000,33.41],
    [1330297200000,33.27],
    [1330383600000,33.27],
    [1330470000000,32.89],
    [1330556400000,33.10],
    [1330642800000,33.73],
    [1330902000000,33.22],
    [1330988400000,31.99],
    [1331074800000,32.41],
    [1331161200000,33.05],
    [1331247600000,33.64],
    [1331506800000,33.56],
    [1331593200000,34.22],
    [1331679600000,33.77],
    [1331766000000,34.17],
    [1331852400000,33.82],
    [1332111600000,34.51],
    [1332198000000,33.16],
    [1332284400000,33.56],
    [1332370800000,33.71],
    [1332457200000,33.81],
    [1332712800000,34.40],
    [1332799200000,34.63],
    [1332885600000,34.46],
    [1332972000000,34.48],
    [1333058400000,34.31],
    [1333317600000,34.70],
    [1333404000000,34.31],
    [1333490400000,33.46],
    [1333576800000,33.59],
    [1333922400000,33.22],
    [1334008800000,32.61],
    [1334095200000,33.01],
    [1334181600000,33.55],
    [1334268000000,33.18],
    [1334527200000,32.84],
    [1334613600000,33.84],
    [1334700000000,33.39],
    [1334786400000,32.91],
    [1334872800000,33.06],
    [1335132000000,32.62],
    [1335218400000,32.40],
    [1335304800000,33.13],
    [1335391200000,33.26],
    [1335477600000,33.58],
    [1335736800000,33.55],
    [1335823200000,33.77],
    [1335909600000,33.76],
    [1335996000000,33.32],
    [1336082400000,32.61],
    [1336341600000,32.52],
    [1336428000000,32.67],
    [1336514400000,32.52],
    [1336600800000,31.92],
    [1336687200000,32.20],
    [1336946400000,32.23],
    [1337032800000,32.33],
    [1337119200000,32.36],
    [1337205600000,32.01],
    [1337292000000,31.31],
    [1337551200000,32.01],
    [1337637600000,32.01],
    [1337724000000,32.18],
    [1337810400000,31.54],
    [1337896800000,31.60],
    [1338242400000,32.05],
    [1338328800000,31.29],
    [1338415200000,31.05],
    [1338501600000,29.82],
    [1338760800000,30.31],
    [1338847200000,30.70],
    [1338933600000,31.69],
    [1339020000000,31.32],
    [1339106400000,31.65],
    [1339365600000,31.13],
    [1339452000000,31.77],
    [1339538400000,31.79],
    [1339624800000,31.67],
    [1339711200000,32.39],
    [1339970400000,32.63],
    [1340056800000,32.89],
    [1340143200000,31.99],
    [1340229600000,31.23],
    [1340316000000,31.57],
    [1340575200000,30.84],
    [1340661600000,31.07],
    [1340748000000,31.41],
    [1340834400000,31.17],
    [1340920800000,32.37],
    [1341180000000,32.19],
    [1341266400000,32.51],
    [1341439200000,32.53],
    [1341525600000,31.37],
    [1341784800000,30.43],
    [1341871200000,30.44],
    [1341957600000,30.20],
    [1342044000000,30.14],
    [1342130400000,30.65],
    [1342389600000,30.40],
    [1342476000000,30.65],
    [1342562400000,31.43],
    [1342648800000,31.89],
    [1342735200000,31.38],
    [1342994400000,30.64],
    [1343080800000,30.02],
    [1343167200000,30.33],
    [1343253600000,30.95],
    [1343340000000,31.89],
    [1343599200000,31.01],
    [1343685600000,30.88],
    [1343772000000,30.69],
    [1343858400000,30.58],
    [1343944800000,32.02],
    [1344204000000,32.14],
    [1344290400000,32.37],
    [1344376800000,32.51],
    [1344463200000,32.65],
    [1344549600000,32.64],
    [1344808800000,32.27],
    [1344895200000,32.10],
    [1344981600000,32.91],
    [1345068000000,33.65],
    [1345154400000,33.80],
    [1345413600000,33.92],
    [1345500000000,33.75],
    [1345586400000,33.84],
    [1345672800000,33.50],
    [1345759200000,32.26],
    [1346018400000,32.32],
    [1346104800000,32.06],
    [1346191200000,31.96],
    [1346277600000,31.46],
    [1346364000000,31.27],
    [1346709600000,31.43],
    [1346796000000,32.26],
    [1346882400000,32.79],
    [1346968800000,32.46],
    [1347228000000,32.13],
    [1347314400000,32.43],
    [1347400800000,32.42],
    [1347487200000,32.81],
    [1347573600000,33.34],
    [1347832800000,33.41],
    [1347919200000,32.57],
    [1348005600000,33.12],
    [1348092000000,34.53],
    [1348178400000,33.83],
    [1348437600000,33.41],
    [1348524000000,32.90],
    [1348610400000,32.53],
    [1348696800000,32.80],
    [1348783200000,32.44],
    [1349042400000,32.62],
    [1349128800000,32.57],
    [1349215200000,32.60],
    [1349301600000,32.68],
    [1349388000000,32.47],
    [1349647200000,32.23],
    [1349733600000,31.68],
    [1349820000000,31.51],
    [1349906400000,31.78],
    [1349992800000,31.94],
    [1350252000000,32.33],
    [1350338400000,33.24],
    [1350424800000,33.44],
    [1350511200000,33.48],
    [1350597600000,33.24],
    [1350856800000,33.49],
    [1350943200000,33.31],
    [1351029600000,33.36],
    [1351116000000,33.40],
    [1351202400000,34.01],
    [1351638000000,34.02],
    [1351724400000,34.36],
    [1351810800000,34.39],
    [1352070000000,34.24],
    [1352156400000,34.39],
    [1352242800000,33.47],
    [1352329200000,32.98],
    [1352415600000,32.90],
    [1352674800000,32.70],
    [1352761200000,32.54],
    [1352847600000,32.23],
    [1352934000000,32.64],
    [1353020400000,32.65],
    [1353279600000,32.92],
    [1353366000000,32.64],
    [1353452400000,32.84],
    [1353625200000,33.40],
    [1353884400000,33.30],
    [1353970800000,33.18],
    [1354057200000,33.88],
    [1354143600000,34.09],
    [1354230000000,34.61],
    [1354489200000,34.70],
    [1354575600000,35.30],
    [1354662000000,35.40],
    [1354748400000,35.14],
    [1354834800000,35.48],
    [1355094000000,35.75],
    [1355180400000,35.54],
    [1355266800000,35.96],
    [1355353200000,35.53],
    [1355439600000,37.56],
    [1355698800000,37.42],
    [1355785200000,37.49],
    [1355871600000,38.09],
    [1355958000000,37.87],
    [1356044400000,37.71],
    [1356303600000,37.53],
    [1356476400000,37.55],
    [1356562800000,37.30],
    [1356649200000,36.90],
    [1356908400000,37.68],
    [1357081200000,38.34],
    [1357167600000,37.75],
    [1357254000000,38.13],
    [1357513200000,37.94],
    [1357599600000,38.14],
    [1357686000000,38.66],
    [1357772400000,38.62],
    [1357858800000,38.09],
    [1358118000000,38.16],
    [1358204400000,38.15],
    [1358290800000,37.88],
    [1358377200000,37.73],
    [1358463600000,37.98],
    [1358809200000,37.95],
    [1358895600000,38.25],
    [1358982000000,38.10],
    [1359068400000,38.32],
    [1359327600000,38.24],
    [1359414000000,38.52],
    [1359500400000,37.94],
    [1359586800000,37.83],
    [1359673200000,38.34],
    [1359932400000,38.10],
    [1360018800000,38.51],
    [1360105200000,38.40],
    [1360191600000,38.07],
    [1360278000000,39.12],
    [1360537200000,38.64],
    [1360623600000,38.89],
    [1360710000000,38.81],
    [1360796400000,38.61],
    [1360882800000,38.63],
    [1361228400000,38.99],
    [1361314800000,38.77],
    [1361401200000,38.34],
    [1361487600000,38.55],
    [1361746800000,38.11],
    [1361833200000,38.59],
    [1361919600000,39.60],
  ]
}],
  colors: ['#ffab00'],
  chart: {
  id: 'area-datetime',
  type: 'area',
  height: 250,
  zoom: {
    autoScaleYaxis: true
  }
},
annotations: {
  yaxis: [{
    y: 35,
    strokeDashArray: 3,
    fillColor: '#fff',
    borderColor: '#fff',
    label: {
      show: true,
      text: 'Velocidad Promedio',
      style: {
        color: "#fff",
        background: '#191924'
      }
    }
  }],
  xaxis: [{
    x: new Date('14 Nov 2012').getTime(),
    strokeDashArray: 1,
    fillColor: '#fff',
    borderColor: '#fff',
    yAxisIndex: 0,
    label: {
      show: true,
      text: 'Fondo / Prueba',
      style: {
        color: "#fff",
        background: '#191924'
      }
    }
  }]
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth',
  width:2
},
title: {
},
markers: {
  size: 0,
  style: 'hollow',
},
xaxis: {
  type: 'datetime',
  min: new Date('01 Mar 2012').getTime(),
  tickAmount: 6,
  labels:{
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  }
  } 
},
tooltip: {
  x: {
    format: 'dd MMM yyyy'
  }
},
yaxis: {    
  labels:{      
    style:{
    colors:['#cbcbe2']
  }
  }
},
fill: {
  type: 'gradient',
  gradient: {
    shadeIntensity: 1,
    inverseColors: false,
    opacityFrom: 0.91,
    opacityTo: 0,
    stops: [0,90, 100]
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
};

var DateXis2 = new ApexCharts(document.querySelector("#DateXis2"), optionsDateXis2);
DateXis2.render();


var resetCssClasses = function(activeEl) {
var els = document.querySelectorAll('button')
Array.prototype.forEach.call(els, function(el) {
  el.classList.remove('active1')
})

activeEl.target.classList.add('active1')
}

document
.querySelector('#one_month2')
.addEventListener('click', function(e) {
  resetCssClasses(e)

  DateXis2.zoomX(
    new Date('28 Jan 2013').getTime(),
    new Date('27 Feb 2013').getTime()
  )
})

document
.querySelector('#six_months2')
.addEventListener('click', function(e) {
  resetCssClasses(e)

  DateXis2.zoomX(
    new Date('27 Sep 2012').getTime(),
    new Date('27 Feb 2013').getTime()
  )
})

document
.querySelector('#one_year2')
.addEventListener('click', function(e) {
  resetCssClasses(e)
  DateXis2.zoomX(
    new Date('27 Feb 2012').getTime(),
    new Date('27 Feb 2013').getTime()
  )
})

document.querySelector('#ytd2').addEventListener('click', function(e) {
resetCssClasses(e)

DateXis2.zoomX(
  new Date('01 Jan 2013').getTime(),
  new Date('27 Feb 2013').getTime()
)
})

document.querySelector('#all2').addEventListener('click', function(e) {
resetCssClasses(e)

DateXis2.zoomX(
  new Date('23 Jan 2012').getTime(),
  new Date('27 Feb 2013').getTime()
)
})
//Fin DateXisgrafico



















//DateXisgrafico
var optionsDateXis3 = {
  series: [{
  data: [
    [1327359600000,30.95],
    [1327446000000,31.34],
    [1327532400000,31.18],
    [1327618800000,31.05],
    [1327878000000,31.00],
    [1327964400000,30.95],
    [1328050800000,31.24],
    [1328137200000,31.29],
    [1328223600000,31.85],
    [1328482800000,31.86],
    [1328569200000,32.28],
    [1328655600000,32.10],
    [1328742000000,32.65],
    [1328828400000,32.21],
    [1329087600000,32.35],
    [1329174000000,32.44],
    [1329260400000,32.46],
    [1329346800000,32.86],
    [1329433200000,32.75],
    [1329778800000,32.54],
    [1329865200000,32.33],
    [1329951600000,32.97],
    [1330038000000,33.41],
    [1330297200000,33.27],
    [1330383600000,33.27],
    [1330470000000,32.89],
    [1330556400000,33.10],
    [1330642800000,33.73],
    [1330902000000,33.22],
    [1330988400000,31.99],
    [1331074800000,32.41],
    [1331161200000,33.05],
    [1331247600000,33.64],
    [1331506800000,33.56],
    [1331593200000,34.22],
    [1331679600000,33.77],
    [1331766000000,34.17],
    [1331852400000,33.82],
    [1332111600000,34.51],
    [1332198000000,33.16],
    [1332284400000,33.56],
    [1332370800000,33.71],
    [1332457200000,33.81],
    [1332712800000,34.40],
    [1332799200000,34.63],
    [1332885600000,34.46],
    [1332972000000,34.48],
    [1333058400000,34.31],
    [1333317600000,34.70],
    [1333404000000,34.31],
    [1333490400000,33.46],
    [1333576800000,33.59],
    [1333922400000,33.22],
    [1334008800000,32.61],
    [1334095200000,33.01],
    [1334181600000,33.55],
    [1334268000000,33.18],
    [1334527200000,32.84],
    [1334613600000,33.84],
    [1334700000000,33.39],
    [1334786400000,32.91],
    [1334872800000,33.06],
    [1335132000000,32.62],
    [1335218400000,32.40],
    [1335304800000,33.13],
    [1335391200000,33.26],
    [1335477600000,33.58],
    [1335736800000,33.55],
    [1335823200000,33.77],
    [1335909600000,33.76],
    [1335996000000,33.32],
    [1336082400000,32.61],
    [1336341600000,32.52],
    [1336428000000,32.67],
    [1336514400000,32.52],
    [1336600800000,31.92],
    [1336687200000,32.20],
    [1336946400000,32.23],
    [1337032800000,32.33],
    [1337119200000,32.36],
    [1337205600000,32.01],
    [1337292000000,31.31],
    [1337551200000,32.01],
    [1337637600000,32.01],
    [1337724000000,32.18],
    [1337810400000,31.54],
    [1337896800000,31.60],
    [1338242400000,32.05],
    [1338328800000,31.29],
    [1338415200000,31.05],
    [1338501600000,29.82],
    [1338760800000,30.31],
    [1338847200000,30.70],
    [1338933600000,31.69],
    [1339020000000,31.32],
    [1339106400000,31.65],
    [1339365600000,31.13],
    [1339452000000,31.77],
    [1339538400000,31.79],
    [1339624800000,31.67],
    [1339711200000,32.39],
    [1339970400000,32.63],
    [1340056800000,32.89],
    [1340143200000,31.99],
    [1340229600000,31.23],
    [1340316000000,31.57],
    [1340575200000,30.84],
    [1340661600000,31.07],
    [1340748000000,31.41],
    [1340834400000,31.17],
    [1340920800000,32.37],
    [1341180000000,32.19],
    [1341266400000,32.51],
    [1341439200000,32.53],
    [1341525600000,31.37],
    [1341784800000,30.43],
    [1341871200000,30.44],
    [1341957600000,30.20],
    [1342044000000,30.14],
    [1342130400000,30.65],
    [1342389600000,30.40],
    [1342476000000,30.65],
    [1342562400000,31.43],
    [1342648800000,31.89],
    [1342735200000,31.38],
    [1342994400000,30.64],
    [1343080800000,30.02],
    [1343167200000,30.33],
    [1343253600000,30.95],
    [1343340000000,31.89],
    [1343599200000,31.01],
    [1343685600000,30.88],
    [1343772000000,30.69],
    [1343858400000,30.58],
    [1343944800000,32.02],
    [1344204000000,32.14],
    [1344290400000,32.37],
    [1344376800000,32.51],
    [1344463200000,32.65],
    [1344549600000,32.64],
    [1344808800000,32.27],
    [1344895200000,32.10],
    [1344981600000,32.91],
    [1345068000000,33.65],
    [1345154400000,33.80],
    [1345413600000,33.92],
    [1345500000000,33.75],
    [1345586400000,33.84],
    [1345672800000,33.50],
    [1345759200000,32.26],
    [1346018400000,32.32],
    [1346104800000,32.06],
    [1346191200000,31.96],
    [1346277600000,31.46],
    [1346364000000,31.27],
    [1346709600000,31.43],
    [1346796000000,32.26],
    [1346882400000,32.79],
    [1346968800000,32.46],
    [1347228000000,32.13],
    [1347314400000,32.43],
    [1347400800000,32.42],
    [1347487200000,32.81],
    [1347573600000,33.34],
    [1347832800000,33.41],
    [1347919200000,32.57],
    [1348005600000,33.12],
    [1348092000000,34.53],
    [1348178400000,33.83],
    [1348437600000,33.41],
    [1348524000000,32.90],
    [1348610400000,32.53],
    [1348696800000,32.80],
    [1348783200000,32.44],
    [1349042400000,32.62],
    [1349128800000,32.57],
    [1349215200000,32.60],
    [1349301600000,32.68],
    [1349388000000,32.47],
    [1349647200000,32.23],
    [1349733600000,31.68],
    [1349820000000,31.51],
    [1349906400000,31.78],
    [1349992800000,31.94],
    [1350252000000,32.33],
    [1350338400000,33.24],
    [1350424800000,33.44],
    [1350511200000,33.48],
    [1350597600000,33.24],
    [1350856800000,33.49],
    [1350943200000,33.31],
    [1351029600000,33.36],
    [1351116000000,33.40],
    [1351202400000,34.01],
    [1351638000000,34.02],
    [1351724400000,34.36],
    [1351810800000,34.39],
    [1352070000000,34.24],
    [1352156400000,34.39],
    [1352242800000,33.47],
    [1352329200000,32.98],
    [1352415600000,32.90],
    [1352674800000,32.70],
    [1352761200000,32.54],
    [1352847600000,32.23],
    [1352934000000,32.64],
    [1353020400000,32.65],
    [1353279600000,32.92],
    [1353366000000,32.64],
    [1353452400000,32.84],
    [1353625200000,33.40],
    [1353884400000,33.30],
    [1353970800000,33.18],
    [1354057200000,33.88],
    [1354143600000,34.09],
    [1354230000000,34.61],
    [1354489200000,34.70],
    [1354575600000,35.30],
    [1354662000000,35.40],
    [1354748400000,35.14],
    [1354834800000,35.48],
    [1355094000000,35.75],
    [1355180400000,35.54],
    [1355266800000,35.96],
    [1355353200000,35.53],
    [1355439600000,37.56],
    [1355698800000,37.42],
    [1355785200000,37.49],
    [1355871600000,38.09],
    [1355958000000,37.87],
    [1356044400000,37.71],
    [1356303600000,37.53],
    [1356476400000,37.55],
    [1356562800000,37.30],
    [1356649200000,36.90],
    [1356908400000,37.68],
    [1357081200000,38.34],
    [1357167600000,37.75],
    [1357254000000,38.13],
    [1357513200000,37.94],
    [1357599600000,38.14],
    [1357686000000,38.66],
    [1357772400000,38.62],
    [1357858800000,38.09],
    [1358118000000,38.16],
    [1358204400000,38.15],
    [1358290800000,37.88],
    [1358377200000,37.73],
    [1358463600000,37.98],
    [1358809200000,37.95],
    [1358895600000,38.25],
    [1358982000000,38.10],
    [1359068400000,38.32],
    [1359327600000,38.24],
    [1359414000000,38.52],
    [1359500400000,37.94],
    [1359586800000,37.83],
    [1359673200000,38.34],
    [1359932400000,38.10],
    [1360018800000,38.51],
    [1360105200000,38.40],
    [1360191600000,38.07],
    [1360278000000,39.12],
    [1360537200000,38.64],
    [1360623600000,38.89],
    [1360710000000,38.81],
    [1360796400000,38.61],
    [1360882800000,38.63],
    [1361228400000,38.99],
    [1361314800000,38.77],
    [1361401200000,38.34],
    [1361487600000,38.55],
    [1361746800000,38.11],
    [1361833200000,38.59],
    [1361919600000,39.60],
  ]
}],
  colors: ['#ff3e1d'],
  chart: {
  id: 'area-datetime',
  type: 'area',
  height: 250,
  zoom: {
    autoScaleYaxis: true
  }
},
annotations: {
  yaxis: [{
    y: 35,
    strokeDashArray: 3,
    fillColor: '#fff',
    borderColor: '#fff',
    label: {
      show: true,
      text: 'Velocidad Promedio',
      style: {
        color: "#fff",
        background: '#191924'
      }
    }
  }],
  xaxis: [{
    x: new Date('14 Nov 2012').getTime(),
    strokeDashArray: 1,
    fillColor: '#fff',
    borderColor: '#fff',
    yAxisIndex: 0,
    label: {
      show: true,
      text: 'Fondo / Prueba',
      style: {
        color: "#fff",
        background: '#191924'
      }
    }
  }]
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth',
  width:2
},
title: {
},
markers: {
  size: 0,
  style: 'hollow',
},
xaxis: {
  type: 'datetime',
  min: new Date('01 Mar 2012').getTime(),
  tickAmount: 12,
  labels:{
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  }
  } 
},
tooltip: {
  x: {
    format: 'dd MMM yyyy'
  }
},
yaxis: {    
  labels:{      
    style:{
    colors:['#cbcbe2']
  }
  }
},
fill: {
  type: 'gradient',
  gradient: {
    shadeIntensity: 1,
    inverseColors: false,
    opacityFrom: 0.91,
    opacityTo: 0,
    stops: [0,90, 100]
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
};

var DateXis3 = new ApexCharts(document.querySelector("#DateXis3"), optionsDateXis3);
DateXis3.render();


var resetCssClasses = function(activeEl) {
var els = document.querySelectorAll('button')
Array.prototype.forEach.call(els, function(el) {
  el.classList.remove('active1')
})

activeEl.target.classList.add('active1')
}

document
.querySelector('#one_month3')
.addEventListener('click', function(e) {
  resetCssClasses(e)

  DateXis3.zoomX(
    new Date('28 Jan 2013').getTime(),
    new Date('27 Feb 2013').getTime()
  )
})

document
.querySelector('#six_months3')
.addEventListener('click', function(e) {
  resetCssClasses(e)

  DateXis3.zoomX(
    new Date('27 Sep 2012').getTime(),
    new Date('27 Feb 2013').getTime()
  )
})

document
.querySelector('#one_year3')
.addEventListener('click', function(e) {
  resetCssClasses(e)
  DateXis3.zoomX(
    new Date('27 Feb 2012').getTime(),
    new Date('27 Feb 2013').getTime()
  )
})

document.querySelector('#ytd3').addEventListener('click', function(e) {
resetCssClasses(e)

DateXis3.zoomX(
  new Date('01 Jan 2013').getTime(),
  new Date('27 Feb 2013').getTime()
)
})

document.querySelector('#all3').addEventListener('click', function(e) {
resetCssClasses(e)

DateXis3.zoomX(
  new Date('23 Jan 2012').getTime(),
  new Date('27 Feb 2013').getTime()
)
})
//Fin DateXisgrafico













//columnGrafico
var optionsColumnGra1 = {
  series: [{
  name: 'Inflación',
  data: [2.3, 3.1, 4.0, 10.1, 14.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2, 1, 10, 13]
}],
  chart: {
  height: 250,
  type: 'bar',
},
fill: {
  opacity: 1,
  colors:['#9BCB3B']
},
plotOptions: {
  bar: {
    borderRadius: 10,
    dataLabels: {
      position: 'top', // top, center, bottom
    },
  }
},
dataLabels: {
  enabled: true,
  // formatter: function (val) {
  //   return val + "%";
  // },
  offsetY: -20,
  style: {
    fontSize: '12px',
    colors: ["#cbcbe2"]
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
  categories: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Agos", "Sep", "Oct", "Nov", "Dic"],
  position: 'bottom',
  labels:{
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2', '#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  }
  },
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  },
  crosshairs: {
    fill: {
      type: 'gradient',
      gradient: {
        colorFrom: '#fff',
        colorTo: '#cbcbe2',
        stops: [0, 100],
        opacityFrom: 0.6,
        opacityTo: 0.3,
      }
    }
  },
  tooltip: {
    enabled: true,
  }
},
yaxis: {
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  labels: {
    show: true,
    style:{
      colors:['#cbcbe2']
    },
    // formatter: function (val) {
    //   return val + "%";
    // }
  }

},
title: {
  // text: 'Monthly Inflation in Argentina, 2002',
  // floating: true,
  // offsetY: 235,
  // align: 'center',
  // style: {
  //   color: '#fff'
  // }
}
};

var ColumnGra1 = new ApexCharts(document.querySelector("#ColumnGra1"), optionsColumnGra1);
ColumnGra1.render();
//Fin columnGrafico










//columnGrafico
var optionsColumnGra2 = {
  series: [{
  name: 'Inflación',
  data: [2.3, 3.1, 4.0, 10.1, 14.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
}],
  chart: {
  height: 250,
  type: 'bar',
},
fill: {
  opacity: 1,
  colors:['rgb(255, 171, 0)']
},
plotOptions: {
  bar: {
    borderRadius: 10,
    dataLabels: {
      position: 'top', // top, center, bottom
    },
  }
},
dataLabels: {
  enabled: true,
  // formatter: function (val) {
  //   return val + "%";
  // },
  offsetY: -20,
  style: {
    fontSize: '12px',
    colors: ["#cbcbe2"]
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
  categories: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Agos", "Sep", "Oct", "Nov", "Dic"],
  position: 'bottom',
  labels:{
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  }
  },
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  },
  crosshairs: {
    fill: {
      type: 'gradient',
      gradient: {
        colorFrom: '#fff',
        colorTo: '#cbcbe2',
        stops: [0, 100],
        opacityFrom: 0.6,
        opacityTo: 0.3,
      }
    }
  },
  tooltip: {
    enabled: true,
  }
},
yaxis: {
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  labels: {
    show: true,
    style:{
      colors:['#cbcbe2']
    },
    // formatter: function (val) {
    //   return val + "%";
    // }
  }

},
title: {
  // text: 'Monthly Inflation in Argentina, 2002',
  // floating: true,
  // offsetY: 235,
  // align: 'center',
  // style: {
  //   color: '#fff'
  // }
}
};

var ColumnGra2 = new ApexCharts(document.querySelector("#ColumnGra2"), optionsColumnGra2);
ColumnGra2.render();
//Fin columnGrafico










//columnGrafico
var optionsColumnGra3 = {
  series: [{
  name: 'Inflación',
  data: [2.3, 3.1, 4.0, 10.1, 14.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
}],
  chart: {
  height: 250,
  type: 'bar',
},
fill: {
  opacity: 1,
  colors:['#ff3e1d']
},
plotOptions: {
  bar: {
    borderRadius: 10,
    dataLabels: {
      position: 'top', // top, center, bottom
    },
  }
},
dataLabels: {
  enabled: true,
  // formatter: function (val) {
  //   return val + "%";
  // },
  offsetY: -20,
  style: {
    fontSize: '12px',
    colors: ["#cbcbe2"]
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
  categories: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Agos", "Sep", "Oct", "Nov", "Dic"],
  position: 'bottom',
  labels:{
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  }
  },
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  },
  crosshairs: {
    fill: {
      type: 'gradient',
      gradient: {
        colorFrom: '#fff',
        colorTo: '#cbcbe2',
        stops: [0, 100],
        opacityFrom: 0.6,
        opacityTo: 0.3,
      }
    }
  },
  tooltip: {
    enabled: true,
  }
},
yaxis: {
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  labels: {
    show: true,
    style:{
      colors:['#cbcbe2']
    },
    // formatter: function (val) {
    //   return val + "%";
    // }
  }

},
title: {
  // text: 'Monthly Inflation in Argentina, 2002',
  // floating: true,
  // offsetY: 235,
  // align: 'center',
  // style: {
  //   color: '#fff'
  // }
}
};

var ColumnGra3 = new ApexCharts(document.querySelector("#ColumnGra3"), optionsColumnGra3);
ColumnGra3.render();
//Fin columnGrafico















//StackedcolumnGrafico
var optionsStackedColumn1 = {
  colors:['#9BCB3B','rgb(75, 192, 192)','rgb(255, 171, 0)','#ff3e1d','#007bff'],
  series: [{
  name: 'Resistencia',
  data: [44, 55, 41, 67, 22, 43]
}, {
  name: 'Agilidad',
  data: [13, 23, 20, 8, 13, 27]
}, {
  name: 'Fuerza',
  data: [11, 17, 15, 15, 21, 14]
}, {
  name: 'Potencia',
  data: [21, 7, 25, 13, 22, 8]
},{
  name: 'Velocidad',
  data: [21, 7, 25, 13, 22, 10]
}],
  chart: {
  type: 'bar',
  height: 250,
  stacked: true,
  toolbar: {
    show: false
  },
  zoom: {
    enabled: false 
  }
},
responsive: [{
  breakpoint: 480,
  options: {
    legend: {
      position: 'bottom'
    }
  }
}],
dataLabels: {
  enabled: true,
  style: {
    fontSize: '11px',
    fontWeight:'100',
    colors: ["#ffffff"]
  }
},
plotOptions: {
  bar: {
    columnWidth: '50%',
    horizontal: false,
    borderRadius: 10,
    dataLabels: {
      total: {
        enabled: true,
        style: {
          fontSize: '13px',
          fontWeight: 900,
          color: '#cbcbe2' 
        }
      }
    }
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
xaxis: {
  type: 'datetime',
  categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
    '01/05/2011 GMT', '01/06/2011 GMT'],
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
},
yaxis: {
  title: {
    // text: 'Tiempo (minutos)',
    style: {
      color:'#cbcbe2'
    }
  },
  
  labels:{      
    style:{
    colors:['#cbcbe2']
  }
  }
},
legend: {  
  show:true,
  position: 'bottom', 
  horizontalAlign: 'center',
  labels:{
    colors: '#fff',
    useSeriesColors: true
  }
},
fill: {
  opacity: 1,
  
}
};

var StackedColumn1 = new ApexCharts(document.querySelector("#StackedColumn1"), optionsStackedColumn1);
StackedColumn1.render();
//Fin StackedcolumnGrafico










//StackedcolumnGrafico
var optionsStackedColumn2 = {
  colors:['#9BCB3B','rgb(75, 192, 192)','rgb(255, 171, 0)','#ff3e1d','#007bff'],
  series: [{
  name: 'Resistencia',
  data: [43, 56, 43, 68, 25, 44]
}, {
  name: 'Agilidad',
  data: [14, 24, 21, 9, 14, 28]
}, {
  name: 'Fuerza',
  data: [12, 18, 16, 17, 22, 15]
}, {
  name: 'Potencia',
  data: [22, 8, 26, 14, 23, 9]
},{
  name: 'Velocidad',
  data: [23, 8, 26, 14, 23, 12]
}],
  chart: {
  type: 'bar',
  height: 250,
  stacked: true,
  toolbar: {
    show: true
  },
  zoom: {
    enabled: true
  }
},
responsive: [{
  breakpoint: 480,
  options: {
    legend: {
      position: 'bottom'
    }
  }
}],
dataLabels: {
  enabled: true,
  style: {
    fontSize: '11px',
    fontWeight:'100',
    colors: ["#ffffff"]
  }
},
plotOptions: {
  bar: {
    columnWidth: '50%',
    horizontal: false,
    borderRadius: 10,
    dataLabels: {
      total: {
        enabled: true,
        style: {
          fontSize: '13px',
          fontWeight: 900,
          color: '#cbcbe2' 
        }
      }
    }
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
xaxis: {
  type: 'datetime',
  categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
    '01/05/2011 GMT', '01/06/2011 GMT'],
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
},
yaxis: {
  title: {
    // text: 'Tiempo (minutos)',
    style: {
      color:'#cbcbe2'
    }
  },
  
  labels:{      
    style:{
    colors:['#cbcbe2']
  }
  }
},
legend: {  
  show:true,
    position: 'bottom', 
    horizontalAlign: 'center',
    labels:{
      colors: '#cbcbe2',
      useSeriesColors:true
    },
  position: 'bottom'
},
fill: {
  opacity: 1,
}
};

var StackedColumn2 = new ApexCharts(document.querySelector("#StackedColumn2"), optionsStackedColumn2);
StackedColumn2.render();
//Fin StackedcolumnGrafico










//StackedcolumnGrafico
var optionsStackedColumn3 = {
  colors:['#9BCB3B','rgb(75, 192, 192)','rgb(255, 171, 0)','#ff3e1d','#007bff'],
  series: [{
  name: 'Resistencia',
  data: [45, 58, 44, 69, 27, 45]
}, {
  name: 'Agilidad',
  data: [15, 25, 22, 10, 15, 29]
}, {
  name: 'Fuerza',
  data: [13, 19, 17, 18, 23, 16]
}, {
  name: 'Potencia',
  data: [25, 9, 28, 17, 25, 10]
},{
  name: 'Velocidad',
  data: [25, 10, 28, 18, 25, 11]
}],
  chart: {
  type: 'bar',
  height: 250,
  stacked: true,
  toolbar: {
    show: true
  },
  zoom: {
    enabled: true
  }
},
responsive: [{
  breakpoint: 480,
  options: {
    legend: {
      position: 'bottom'
    }
  }
}],
dataLabels: {
  enabled: true,
  style: {
    fontSize: '11px',
    fontWeight:'100',
    colors: ["#ffffff"]
  }
},
plotOptions: {
  bar: {
    columnWidth: '50%',
    horizontal: false,
    borderRadius: 10,
    dataLabels: {
      total: {
        enabled: true,
        style: {
          fontSize: '13px',
          fontWeight: 900,
          color: '#cbcbe2' 
        }
      }
    }
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
xaxis: {
  type: 'datetime',
  categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
    '01/05/2011 GMT', '01/06/2011 GMT'],
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
},
yaxis: {
  title: {
    // text: 'Tiempo (minutos)',
    style: {
      color:'#cbcbe2'
    }
  },  
  labels:{      
    style:{
    colors:['#cbcbe2']
  }
  }
},
legend: {
  show:true,
    position: 'bottom', 
    horizontalAlign: 'center',
    labels:{
      colors: '#cbcbe2',
      useSeriesColors: true
    },
},
fill: {
  opacity: 1,
}
};

var StackedColumn3 = new ApexCharts(document.querySelector("#StackedColumn3"), optionsStackedColumn3);
StackedColumn3.render();
//Fin StackedcolumnGrafico












// GroupedLabelsBar
var optionsGroupedLabelsBar1 = {
  series: [{
  name: "sales",
  data: [{
    x: 'Q1',
    y: 400
  }, {
    x: 'Q2',
    y: 430
  }, {
    x: 'Q3',
    y: 448
  }, {
    x: 'Q4',
    y: 470
  }, {
    x: 'Q1',
    y: 540
  }, {
    x: 'Q2',
    y: 580
  }, {
    x: 'Q3',
    y: 690
  }, {
    x: 'Q4',
    y: 690
  }]
}],
  chart: {
  type: 'bar',
  height: 280
},
fill: {
  opacity: 1,
  colors:['#9BCB3B']
},
plotOptions: {
  bar: {
    borderRadius: 10,
    columnWidth:'50%',
    dataLabels: {
      position: 'top', // top, center, bottom
    },
  }
},
dataLabels: {
  enabled: true,
  // formatter: function (val) {
  //   return val + "%";
  // },
  offsetY: -20,
  style: {
    fontSize: '13px',
    colors: ["#cbcbe2"]
  }
},
xaxis: {
  type: 'category',
  labels: {
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  },
    // formatter: function(val) {
    //   return "Q" + dayjs(val).quarter()
    // }
  },
  crosshairs: {
    fill: {
      type: 'gradient',
      gradient: {
        colorFrom: '#fff',
        colorTo: '#cbcbe2',
        stops: [0, 100],
        opacityFrom: 0.6,
        opacityTo: 0.3,
      }
    }
  },
  tooltip: {
    enabled: true,
  },
  group: {
    style: {
      fontSize: '13px',
      fontWeight: 700,
      colors:['#9bcb3b','#9bcb3b']
    },
    groups: [
      { title: '2019', cols: 4 },
      { title: '2020', cols: 4 }
    ]
  }
},
yaxis: {
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  labels: {
    show: true,
    style:{
      colors:['#cbcbe2']
    },
  }

},
title: {
    // text: 'Grouped Labels on the X-axis',
},
tooltip: {
  x: {
    // formatter: function(val) {
    //   return "Q" + dayjs(val).quarter() + " " + dayjs(val).format("YYYY")
    // }  
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
}
};

var GroupedLabelsBar1 = new ApexCharts(document.querySelector("#GroupedLabelsBar1"), optionsGroupedLabelsBar1);
GroupedLabelsBar1.render();
// fin GroupedLabelsBar










// GroupedLabelsBar
var optionsGroupedLabelsBar2 = {
  series: [{
  name: "sales",
  data: [{
    x: 'Q1',
    y: 400
  }, {
    x: 'Q2',
    y: 430
  }, {
    x: 'Q3',
    y: 448
  }, {
    x: 'Q4',
    y: 470
  }, {
    x: 'Q1',
    y: 540
  }, {
    x: 'Q2',
    y: 580
  }, {
    x: 'Q3',
    y: 690
  }, {
    x: 'Q4',
    y: 690
  }]
}],
  chart: {
  type: 'bar',
  height: 280
},
fill: {
  opacity: 1,
  colors:['rgb(255, 171, 0)']
},
plotOptions: {
  bar: {
    borderRadius: 10,
    columnWidth: '50%',
    dataLabels: {
      position: 'top', // top, center, bottom
    },
  }
},
dataLabels: {
  enabled: true,
  // formatter: function (val) {
  //   return val + "%";
  // },
  offsetY: -20,
  style: {
    fontSize: '13px',
    colors: ["#cbcbe2"]
  }
},
xaxis: {
  type: 'category',
  labels: {
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  },
    // formatter: function(val) {
    //   return "Q" + dayjs(val).quarter()
    // }
  },
  crosshairs: {
    fill: {
      type: 'gradient',
      gradient: {
        colorFrom: '#fff',
        colorTo: '#cbcbe2',
        stops: [0, 100],
        opacityFrom: 0.6,
        opacityTo: 0.3,
      }
    }
  },
  tooltip: {
    enabled: true,
  },
  group: {
    style: {
      fontSize: '13px',
      fontWeight: 700,
      colors:['rgb(255, 171, 0)','rgb(255, 171, 0)']
    },
    groups: [
      { title: '2019', cols: 4 },
      { title: '2020', cols: 4 }
    ]
  }
},
yaxis: {
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  labels: {
    show: true,
    style:{
      colors:['#cbcbe2']
    },
  }

},
title: {
    // text: 'Grouped Labels on the X-axis',
},
tooltip: {
  x: {
    // formatter: function(val) {
    //   return "Q" + dayjs(val).quarter() + " " + dayjs(val).format("YYYY")
    // }  
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
}
};

var GroupedLabelsBar2 = new ApexCharts(document.querySelector("#GroupedLabelsBar2"), optionsGroupedLabelsBar2);
GroupedLabelsBar2.render();
// fin GroupedLabelsBar










// GroupedLabelsBar
var optionsGroupedLabelsBar3 = {
  series: [{
  name: "sales",
  data: [{
    x: 'Q1',
    y: 400
  }, {
    x: 'Q2',
    y: 430
  }, {
    x: 'Q3',
    y: 448
  }, {
    x: 'Q4',
    y: 470
  }, {
    x: 'Q1',
    y: 540
  }, {
    x: 'Q2',
    y: 580
  }, {
    x: 'Q3',
    y: 690
  }, {
    x: 'Q4',
    y: 690
  },
]
}],
  chart: {
  type: 'bar',
  height: 280
},
fill: {
  opacity: 1,
  colors:['#ff3e1d']
},
plotOptions: {
  bar: {
    borderRadius: 10,
    columnWidth: '50%',
    dataLabels: {
      position: 'top', // top, center, bottom
    },
  }
},
dataLabels: {
  enabled: true,
  // formatter: function (val) {
  //   return val + "%";
  // },
  offsetY: -20,
  style: {
    fontSize: '13px',
    colors: ["#cbcbe2"]
  }
},
xaxis: {
  type: 'category',
  labels: {
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  },    
  },
  crosshairs: {
    fill: {
      type: 'gradient',
      gradient: {
        colorFrom: '#fff',
        colorTo: '#cbcbe2',
        stops: [0, 100],
        opacityFrom: 0.6,
        opacityTo: 0.3,
      }
    }
  },
  tooltip: {
    enabled: true,
  },
  group: {
    style: {
      fontSize: '13px',
      fontWeight: 700,
      colors:['#ff3e1d','#ff3e1d']
    },
    groups: [
      { title: '2019', cols: 4 },
      { title: '2020', cols: 4 }
    ]
  }
},
yaxis: {
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  labels: {
    show: true,
    style:{
      colors:['#cbcbe2']
    },
  }
},
title: {
    // text: 'Grouped Labels on the X-axis',
},
tooltip: {
  x: {
    // formatter: function(val) {
    //   return "Q" + dayjs(val).quarter() + " " + dayjs(val).format("YYYY")
    // }  
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
}
};

var GroupedLabelsBar3 = new ApexCharts(document.querySelector("#GroupedLabelsBar3"), optionsGroupedLabelsBar3);
GroupedLabelsBar3.render();
// fin GroupedLabelsBar









// ColumnWithMarker
var optionsColumnWithMarker1 = {
  series: [
  {
    name: 'Actual',
    data: [
      {
        x: '2011',
        y: 1292,
        goals: [
          {
            name: 'Expected',
            value: 1400,
            strokeHeight: 5,
            strokeColor: '#fff'
          }
        ]
      },
      {
        x: '2012',
        y: 4432,
        goals: [
          {
            name: 'Expected',
            value: 5400,
            strokeHeight: 5,
            strokeColor: '#fff'
          }
        ]
      },
      {
        x: '2013',
        y: 5423,
        goals: [
          {
            name: 'Expected',
            value: 5200,
            strokeHeight: 5,
            strokeColor: '#fff'
          }
        ]
      },
      {
        x: '2014',
        y: 6653,
        goals: [
          {
            name: 'Expected',
            value: 6500,
            strokeHeight: 5,
            strokeColor: '#fff'
          }
        ]
      },
      {
        x: '2015',
        y: 8133,
        goals: [
          {
            name: 'Expected',
            value: 6600,
            strokeHeight: 5,
            strokeColor: '#fff'
          }
        ]
      },
      {
        x: '2016',
        y: 7132,
        goals: [
          {
            name: 'Expected',
            value: 7500,
            strokeHeight: 5,
            strokeColor: '#fff'
          }
        ]
      },
      {
        x: '2017',
        y: 7332,
        goals: [
          {
            name: 'Expected',
            value: 8700,
            strokeHeight: 5,
            strokeColor: '#fff'
          }
        ]
      },
      {
        x: '2018',
        y: 6553,
        goals: [
          {
            name: 'Expected',
            value: 7300,
            strokeHeight: 5,
            strokeDashArray: 0,
            strokeColor: '#fff'
          }
        ]
      }
    ]
  }
],
  chart: {
  height: 280,
  type: 'bar'
},
plotOptions: {
  bar: {
    borderRadius: 10,
    columnWidth: '50%'
  }
},
colors: ['#9BCB3B', '#fff'],
dataLabels: {
  enabled: false
},
legend: {
  show: true,
  position: 'bottom',
  horizontalAlign: 'center',
  showForSingleSeries: true,
  labels:{
    colors: '#cbcbe2',
    useSeriesColors: true
  },
  customLegendItems: ['Actual', 'Expected'],  
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
  position: 'bottom',
  labels:{
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  }
  },
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  },
  crosshairs: {
    fill: {
      type: 'gradient',
      gradient: {
        colorFrom: '#fff',
        colorTo: '#cbcbe2',
        stops: [0, 100],
        opacityFrom: 0.6,
        opacityTo: 0.3,
      }
    }
  },
  tooltip: {
    enabled: false,
  }
},
yaxis: {
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  labels: {
    show: true,
    style:{
      colors:['#cbcbe2']
    },
    // formatter: function (val) {
    //   return val + "%";
    // }
  }

},
tooltip: {
  enabled: true,
  theme: 'dark',
  marker:{
    show: true,
  }  
}
};

var ColumnWithMarker1 = new ApexCharts(document.querySelector("#ColumnWithMarker1"), optionsColumnWithMarker1);
ColumnWithMarker1.render();
//Fin ColumnWithMarker










// ColumnWithMarker
var optionsColumnWithMarker2 = {
  series: [
  {
    name: 'Actual',
    data: [
      {
        x: '2011',
        y: 1292,
        goals: [
          {
            name: 'Expected',
            value: 1400,
            strokeHeight: 5,
            strokeColor: '#fff'
          }
        ]
      },
      {
        x: '2012',
        y: 4432,
        goals: [
          {
            name: 'Expected',
            value: 5400,
            strokeHeight: 5,
            strokeColor: '#fff'
          }
        ]
      },
      {
        x: '2013',
        y: 5423,
        goals: [
          {
            name: 'Expected',
            value: 5200,
            strokeHeight: 5,
            strokeColor: '#fff'
          }
        ]
      },
      {
        x: '2014',
        y: 6653,
        goals: [
          {
            name: 'Expected',
            value: 6500,
            strokeHeight: 5,
            strokeColor: '#fff'
          }
        ]
      },
      {
        x: '2015',
        y: 8133,
        goals: [
          {
            name: 'Expected',
            value: 6600,
            strokeHeight: 5,
            strokeColor: '#fff'
          }
        ]
      },
      {
        x: '2016',
        y: 7132,
        goals: [
          {
            name: 'Expected',
            value: 7500,
            strokeHeight: 5,
            strokeColor: '#fff'
          }
        ]
      },
      {
        x: '2017',
        y: 7332,
        goals: [
          {
            name: 'Expected',
            value: 8700,
            strokeHeight: 5,
            strokeColor: '#fff'
          }
        ]
      },
      {
        x: '2018',
        y: 6553,
        goals: [
          {
            name: 'Expected',
            value: 7300,
            strokeHeight: 5,
            strokeDashArray: 0,
            strokeColor: '#fff'
          }
        ]
      }
    ]
  }
],
  chart: {
  height: 280,
  type: 'bar'
},
plotOptions: {
  bar: {
    borderRadius: 10,
    columnWidth: '50%'
  }
},
colors: ['rgb(255, 171, 0)', '#fff'],
dataLabels: {
  enabled: false
},
legend: {
  show: true,
  position: 'bottom',
  horizontalAlign: 'center',
  showForSingleSeries: true,
  labels:{
    colors: '#cbcbe2',
    useSeriesColors: true
  },
  customLegendItems: ['Actual', 'Expected'],
  
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
  position: 'bottom',
  labels:{
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  }
  },
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  },
  crosshairs: {
    fill: {
      type: 'gradient',
      gradient: {
        colorFrom: '#fff',
        colorTo: '#cbcbe2',
        stops: [0, 100],
        opacityFrom: 0.6,
        opacityTo: 0.3,
      }
    }
  },
  tooltip: {
    enabled: false,
  }
},
yaxis: {
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  labels: {
    show: true,
    style:{
      colors:['#cbcbe2']
    },
    // formatter: function (val) {
    //   return val + "%";
    // }
  }

},
tooltip: {
  enabled: true,
  theme: 'dark',
  marker:{
    show: true,
  }  
}
};

var ColumnWithMarker2 = new ApexCharts(document.querySelector("#ColumnWithMarker2"), optionsColumnWithMarker2);
ColumnWithMarker2.render();
//Fin ColumnWithMarker









// ColumnWithMarker
var optionsColumnWithMarker3 = {
  series: [
  {
    name: 'Actual',
    data: [
      {
        x: '2011',
        y: 1292,
        goals: [
          {
            name: 'Expected',
            value: 1400,
            strokeHeight: 5,
            strokeColor: '#fff'
          }
        ]
      },
      {
        x: '2012',
        y: 4432,
        goals: [
          {
            name: 'Expected',
            value: 5400,
            strokeHeight: 5,
            strokeColor: '#fff'
          }
        ]
      },
      {
        x: '2013',
        y: 5423,
        goals: [
          {
            name: 'Expected',
            value: 5200,
            strokeHeight: 5,
            strokeColor: '#fff'
          }
        ]
      },
      {
        x: '2014',
        y: 6653,
        goals: [
          {
            name: 'Expected',
            value: 6500,
            strokeHeight: 5,
            strokeColor: '#fff'
          }
        ]
      },
      {
        x: '2015',
        y: 8133,
        goals: [
          {
            name: 'Expected',
            value: 6600,
            strokeHeight: 5,
            strokeColor: '#fff'
          }
        ]
      },
      {
        x: '2016',
        y: 7132,
        goals: [
          {
            name: 'Expected',
            value: 7500,
            strokeHeight: 5,
            strokeColor: '#fff'
          }
        ]
      },
      {
        x: '2017',
        y: 7332,
        goals: [
          {
            name: 'Expected',
            value: 8700,
            strokeHeight: 5,
            strokeColor: '#fff'
          }
        ]
      },
      {
        x: '2018',
        y: 6553,
        goals: [
          {
            name: 'Expected',
            value: 7300,
            strokeHeight: 5,
            strokeDashArray: 0,
            strokeColor: '#fff'
          }
        ]
      }
    ]
  }
],
  chart: {
  height: 280,
  type: 'bar'
},
plotOptions: {
  bar: {
    borderRadius: 10,
    columnWidth: '50%'
  }
},
colors: ['#ff3e1d', '#fff'],
dataLabels: {
  enabled: false
},
legend: {
  show: true,
  position: 'bottom',
  horizontalAlign: 'center',
  showForSingleSeries: true,
  labels:{
    colors: '#cbcbe2',
    useSeriesColors: true
  },
  customLegendItems: ['Actual', 'Expected']  
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
  position: 'bottom',
  labels:{
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  }
  },
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  },
  crosshairs: {
    fill: {
      type: 'gradient',
      gradient: {
        colorFrom: '#fff',
        colorTo: '#cbcbe2',
        stops: [0, 100],
        opacityFrom: 0.6,
        opacityTo: 0.3,
      }
    }
  },
  tooltip: {
    enabled: false,
  }
},
yaxis: {
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  labels: {
    show: true,
    style:{
      colors:['#cbcbe2']
    },
    // formatter: function (val) {
    //   return val + "%";
    // }
  }

},
tooltip: {
  enabled: true,
  theme: 'dark',
  marker:{
    show: true,
  }  
}
};

var ColumnWithMarker3 = new ApexCharts(document.querySelector("#ColumnWithMarker3"), optionsColumnWithMarker3);
ColumnWithMarker3.render();
//Fin ColumnWithMarker










// tresLineasGrafico
var optionsLineAdwordsGra1 = {
  chart: {
    height: 250,
    type: 'line',
    zoom: {
      enabled: false
    },
    
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  colors: ['#9BCB3B', 'rgb(255, 171, 0)','#ff3e1d'],
  series: [{
      name: "Music",
      data: [1, 15, 26, 20, 33, 27]
    },
    {
      name: "Photos",
      data: [3, 33, 21, 42, 19, 32]
    },
    {
      name: "Files",
      data: [0, 39, 52, 11, 29, 43]
    }
  ],
  title: {
    
  },
  subtitle: {
    
  },
  markers: {
    size: 6,
    strokeWidth: 0,
    hover: {
      size: 9
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
  labels: ['01/15/2002', '01/16/2002', '01/17/2002', '01/18/2002', '01/19/2002', '01/20/2002'],
  xaxis: {
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: true,
      style:{
        colors:['#cbcbe2']
      },
    }  
  },
  legend: {  
    show:true,
    position: 'bottom', 
    horizontalAlign: 'center',
    labels:{
      colors: '#fff',
      useSeriesColors: true
    }
  }
}

var AdwordsGra1 = new ApexCharts(document.querySelector('#AdwordsGra1'), optionsLineAdwordsGra1);
AdwordsGra1.render();
//Fin tresLineasGrafico







// tresLineasGrafico
var optionsLineAdwordsGra2 = {
  chart: {
    height: 250,
    type: 'line',
    zoom: {
      enabled: false
    },
    
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  colors: ['#9BCB3B', '#007bff','#4bc0c0'],
  series: [{
      name: "Music",
      data: [1, 15, 26, 20, 33, 27]
    },
    {
      name: "Photos",
      data: [3, 33, 21, 42, 19, 32]
    },
    {
      name: "Files",
      data: [0, 39, 52, 11, 29, 43]
    }
  ],
  title: {
    
  },
  subtitle: {
    
  },
  markers: {
    size: 6,
    strokeWidth: 0,
    hover: {
      size: 9
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
  labels: ['01/15/2002', '01/16/2002', '01/17/2002', '01/18/2002', '01/19/2002', '01/20/2002'],
  xaxis: {
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: true,
      style:{
        colors:['#cbcbe2']
      },
    }  
  },
  legend: {
    show: false,
    position: 'bottom',
    horizontalAlign: 'right',
    offsetY: -20
  }
}

var AdwordsGra2 = new ApexCharts(document.querySelector('#AdwordsGra2'), optionsLineAdwordsGra2);
AdwordsGra2.render();
//Fin tresLineasGrafico







// tresLineasGrafico
var optionsLineAdwordsGra3 = {
  chart: {
    height: 250,
    type: 'line',
    zoom: {
      enabled: false
    },    
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  colors: ['#9BCB3B', '#6610f2','#ffab00'],
  series: [{
      name: "Music",
      data: [1, 15, 26, 20, 33, 27]
    },
    {
      name: "Photos",
      data: [3, 33, 21, 42, 19, 32]
    },
    {
      name: "Files",
      data: [0, 39, 52, 11, 29, 43]
    }
  ],
  title: {
    
  },
  subtitle: {
    
  },
  markers: {
    size: 6,
    strokeWidth: 0,
    hover: {
      size: 9
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
  labels: ['01/15/2002', '01/16/2002', '01/17/2002', '01/18/2002', '01/19/2002', '01/20/2002'],
  xaxis: {
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: true,
      style:{
        colors:['#cbcbe2']
      },
    }  
  },
  legend: {
    show: false,
    position: 'bottom',
    horizontalAlign: 'right',
    offsetY: -20
  }
}

var AdwordsGra3 = new ApexCharts(document.querySelector('#AdwordsGra3'), optionsLineAdwordsGra3);
AdwordsGra3.render();
//Fin tresLineasGrafico













// ScatterPointGra
var optionsScatterPointGra1 = {
  colors: ['#9BCB3B', '#4bc0c0','#ffab00','#ff3e1d','#007bff'],
  series: [{
    name: 'Resistencia',
    data: [[1354143600000,30.09],
    [1354230000000,30.61],
    [1354489200000,30.70],
    [1354575600000,31.30],
    [1354662000000,31.40]]
  },
  {
    name: 'Agilidad',
    data: [[1354143600000,31.09],
    [1354230000000,31.61],
    [1354489200000,31.70],
    [1354575600000,32.30],
    [1354662000000,32.40]]
  },
  {
    name: 'Fuerza',
    data: [[1354143600000,32.09],
    [1354230000000,32.61],
    [1354489200000,32.70],
    [1354575600000,33.30],
    [1354662000000,33.40]]
  },
  {
    name: 'Potencia',
    data: [[1354143600000,33.09],
    [1354230000000,24.61],
    [1354489200000,24.70],
    [1354575600000,24.30],
    [1354662000000,24.40]]
  },
  {
    name: 'Velocidad',
    data: [[1354143600000,34.09],
    [1354230000000,34.61],
    [1354489200000,34.70],
    [1354575600000,35.30],
    [1354662000000,35.40]]
  },
],
  chart: {
  height: 250,
  type: 'scatter',
  zoom: {
    type: 'xy'
  }
},
dataLabels: {
  enabled: false
},
grid: {
  show: true,
    borderColor: '#191924',
  xaxis: {
    lines: {
      show: true
    }
  },
  yaxis: {
    lines: {
      show: true
    }
  },
  padding: {
    top: 0,
    right: 20,
    bottom: 0,
    left: 20
}  
},
xaxis: {
  type: 'datetime',
  labels:{
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  }
  },
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  },
  tooltip: {
    enabled: false
  }
},
yaxis: {
  max: 70,
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  labels: {
    show: true,
    style:{
      colors:['#cbcbe2']
    },
  }
},
legend: {
  show: true,
  position: 'bottom',
  horizontalAlign: 'center',
  offsetY: 7,
  labels:{
    colors: '#cbcbe2',
    useSeriesColors: true
  }
}
};

var ScatterPointGra1 = new ApexCharts(document.querySelector("#ScatterPointGra1"), optionsScatterPointGra1);
ScatterPointGra1.render();
// FIN ScatterPointGra









// ScatterPointGra
var optionsScatterPointGra2 = {
  colors: ['#9BCB3B', '#4bc0c0','#ffab00','#ff3e1d','#007bff'],
  series: [{
    name: 'Resistencia',
    data: [[1354143600000,30.09],
    [1354230000000,30.61],
    [1354489200000,30.70],
    [1354575600000,31.30],
    [1354662000000,31.40]]
  },
  {
    name: 'Agilidad',
    data: [[1354143600000,31.09],
    [1354230000000,31.61],
    [1354489200000,31.70],
    [1354575600000,32.30],
    [1354662000000,32.40]]
  },
  {
    name: 'Fuerza',
    data: [[1354143600000,32.09],
    [1354230000000,32.61],
    [1354489200000,32.70],
    [1354575600000,33.30],
    [1354662000000,33.40]]
  },
  {
    name: 'Potencia',
    data: [[1354143600000,33.09],
    [1354230000000,24.61],
    [1354489200000,24.70],
    [1354575600000,24.30],
    [1354662000000,24.40]]
  },
  {
    name: 'Velocidad',
    data: [[1354143600000,34.09],
    [1354230000000,34.61],
    [1354489200000,34.70],
    [1354575600000,35.30],
    [1354662000000,35.40]]
  },
],
  chart: {
  height: 250,
  type: 'scatter',
  zoom: {
    type: 'xy'
  }
},
dataLabels: {
  enabled: false
},
grid: {
  show: true,
    borderColor: '#191924',
  xaxis: {
    lines: {
      show: true
    }
  },
  yaxis: {
    lines: {
      show: true
    }
  },
  padding: {
    top: 0,
    right: 20,
    bottom: 0,
    left: 20
}  
},
xaxis: {
  type: 'datetime',
  labels:{
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  }
  },
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  },
  tooltip: {
    enabled: false
  }
},
yaxis: {
  max: 70,
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  labels: {
    show: true,
    style:{
      colors:['#cbcbe2']
    },
  }
},
legend: {
  show: true,
  position: 'bottom',
  horizontalAlign: 'center',
  offsetY: 7,
  labels:{
    colors: '#cbcbe2',
    useSeriesColors: true
  }
}
};

var ScatterPointGra2 = new ApexCharts(document.querySelector("#ScatterPointGra2"), optionsScatterPointGra2);
ScatterPointGra2.render();
// FIN ScatterPointGra









// ScatterPointGra
var optionsScatterPointGra3 = {
  colors: ['#9BCB3B', '#4bc0c0','#ffab00','#ff3e1d','#007bff'],
  series: [{
    name: 'Resistencia',
    data: [[1354143600000,30.09],
    [1354230000000,30.61],
    [1354489200000,30.70],
    [1354575600000,31.30],
    [1354662000000,31.40]]
  },
  {
    name: 'Agilidad',
    data: [[1354143600000,31.09],
    [1354230000000,31.61],
    [1354489200000,31.70],
    [1354575600000,32.30],
    [1354662000000,32.40]]
  },
  {
    name: 'Fuerza',
    data: [[1354143600000,32.09],
    [1354230000000,32.61],
    [1354489200000,32.70],
    [1354575600000,33.30],
    [1354662000000,33.40]]
  },
  {
    name: 'Potencia',
    data: [[1354143600000,33.09],
    [1354230000000,24.61],
    [1354489200000,24.70],
    [1354575600000,24.30],
    [1354662000000,24.40]]
  },
  {
    name: 'Velocidad',
    data: [[1354143600000,34.09],
    [1354230000000,34.61],
    [1354489200000,34.70],
    [1354575600000,35.30],
    [1354662000000,35.40]]
  },
],
  chart: {
  height: 250,
  type: 'scatter',
  zoom: {
    type: 'xy'
  }
},
dataLabels: {
  enabled: false
},
grid: {
  show: true,
    borderColor: '#191924',
  xaxis: {
    lines: {
      show: true
    }
  },
  yaxis: {
    lines: {
      show: true
    }
  },
  padding: {
    top: 0,
    right: 20,
    bottom: 0,
    left: 20
}  
},
xaxis: {
  type: 'datetime',
  labels:{
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  }
  },
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  },
  tooltip: {
    enabled: false
  }
},
yaxis: {
  max: 70,
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  labels: {
    show: true,
    style:{
      colors:['#cbcbe2']
    },
  }
},
legend: {
  show: true,
  position: 'bottom',
  horizontalAlign: 'center',
  offsetY: 7,
  labels:{
    colors: '#cbcbe2',
    useSeriesColors: true
  }
}
};

var ScatterPointGra3 = new ApexCharts(document.querySelector("#ScatterPointGra3"), optionsScatterPointGra3);
ScatterPointGra3.render();
// FIN ScatterPointGra









// BUBBLE Grafico   
var optionsbublleGra1 = {
  colors: ['#9BCB3B', '#4bc0c0','#ffab00','#ff3e1d','#007bff'],
  series: [{
  name: 'Resistencia',
  data: [[1346364000000,31.27],
  [1346709600000,51,43],
  [1346796000000,52,26],
  [1346882400000,52,79],
  [1346968800000,52,46],
  [1347228000000,52,13],
  [1347314400000,52,43],
  [1347400800000,52,42],
  [1347487200000,52,81],
  [1347573600000,53,34],
  [1347832800000,53,41],
  [1347919200000,52,57],
  [1348005600000,53,12],
  [1348092000000,54,53],
  [1348178400000,53,83],
  [1348437600000,53,41],
  [1348524000000,52,90],
  [1348610400000,52,53],
  [1348696800000,52,80],
  [1348783200000,52,44],
  [1349042400000,52,62],
  [1349128800000,52,57],
  [1349215200000,52,60],
  [1349301600000,52,68],
  [1349388000000,52,47],]
},
{
  name: 'Agilidad',
  data: [[1346364000000,10,27],
  [1346709600000,3,10],
  [1346796000000,2,26],
  [1346882400000,2,79],
  [1346968800000,2,46],
  [1347228000000,2,13],
  [1347314400000,2,43],
  [1347400800000,5,2],
  [1347487200000,2,81],
  [1347573600000,3,34],
  [1347832800000,3,41],
  [1347919200000,2,57],
  [1348005600000,3,12],
  [1348092000000,4,53],
  [1348178400000,3,83],
  [1348437600000,3,41],
  [1348524000000,2,90],
  [1348610400000,2,53],
  [1348696800000,2,80],
  [1348783200000,2,44],
  [1349042400000,2,62],
  [1349128800000,2,57],
  [1349215200000,2,60],
  [1349301600000,2,68],
  [1349388000000,2,47],]
},
{
  name: 'Fuerza',
  data: [[1346364000000,31.27],
  [1346709600000,41,43],
  [1346796000000,42,26],
  [1346882400000,42,79],
  [1346968800000,42,46],
  [1347228000000,42,13],
  [1347314400000,42,43],
  [1347400800000,42,42],
  [1347487200000,42,81],
  [1347573600000,43,34],
  [1347832800000,43,41],
  [1347919200000,42,57],
  [1348005600000,43,12],
  [1348092000000,44,53],
  [1348178400000,43,83],
  [1348437600000,43,41],
  [1348524000000,42,90],
  [1348610400000,42,53],
  [1348696800000,42,80],
  [1348783200000,42,44],
  [1349042400000,42,62],
  [1349128800000,42,57],
  [1349215200000,42,60],
  [1349301600000,42,68],
  [1349388000000,42,47],]
},
{
  name: 'Potencia',
  data: [[1346364000000,31.27],
  [1346709600000,21,43],
  [1346796000000,22,26],
  [1346882400000,22,79],
  [1346968800000,22,46],
  [1347228000000,22,13],
  [1347314400000,22,43],
  [1347400800000,22,42],
  [1347487200000,22,81],
  [1347573600000,23,34],
  [1347832800000,23,41],
  [1347919200000,22,57],
  [1348005600000,23,12],
  [1348092000000,24,53],
  [1348178400000,23,83],
  [1348437600000,23,41],
  [1348524000000,22,90],
  [1348610400000,22,53],
  [1348696800000,22,80],
  [1348783200000,22,44],
  [1349042400000,22,62],
  [1349128800000,22,57],
  [1349215200000,22,60],
  [1349301600000,22,68],
  [1349388000000,22,47],]
},
{
  name: 'Velocidad',
  data: [[1346364000000,31.27],
  [1346709600000,11,43],
  [1346796000000,12,26],
  [1346882400000,12,79],
  [1346968800000,12,46],
  [1347228000000,12,13],
  [1347314400000,12,43],
  [1347400800000,12,42],
  [1347487200000,12,81],
  [1347573600000,13,34],
  [1347832800000,13,41],
  [1347919200000,12,57],
  [1348005600000,13,12],
  [1348092000000,14,53],
  [1348178400000,13,83],
  [1348437600000,13,41],
  [1348524000000,12,90],
  [1348610400000,12,53],
  [1348696800000,12,80],
  [1348783200000,12,44],
  [1349042400000,12,62],
  [1349128800000,12,57],
  [1349215200000,12,60],
  [1349301600000,12,68],
  [1349388000000,12,47],]
}],
  chart: {
    height: 350,
    type: 'bubble',
},
dataLabels: {
    enabled: false
},
fill: {
    opacity: 0.8
},
title: {
    text: 'Simple Bubble Chart',
    align: 'left',
    offsetX: 10,
    style: {
      fontSize:  '14px',
      fontWeight:  500,
      fontFamily:  'montserrat',
      color:  '#cbcbe2'
    },
},
xaxis: {
    tickAmount: 12, 
    type: 'datetime',
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    tooltip: {
      enabled: false
    }
},
yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: true,
      style:{
        colors:['#cbcbe2']
      },
    }
},
legend: {
  show: true,
  position: 'bottom',
  horizontalAlign: 'center',
  offsetY: 7,
  labels:{
    colors: '#cbcbe2',
    useSeriesColors: true
  }
}
};

var bublleGra1 = new ApexCharts(document.querySelector("#bublleGra1"), optionsbublleGra1);
bublleGra1.render();
// FIN BUBBLE Grafico









// BUBBLE Grafico   
var optionsbublleGra2 = {
  colors: ['#9BCB3B', '#4bc0c0','#ffab00','#ff3e1d','#007bff'],
  series: [{
  name: 'Resistencia',
  data: [[1346364000000,31.27],
  [1346709600000,51,43],
  [1346796000000,52,26],
  [1346882400000,52,79],
  [1346968800000,52,46],
  [1347228000000,52,13],
  [1347314400000,52,43],
  [1347400800000,52,42],
  [1347487200000,52,81],
  [1347573600000,53,34],
  [1347832800000,53,41],
  [1347919200000,52,57],
  [1348005600000,53,12],
  [1348092000000,54,53],
  [1348178400000,53,83],
  [1348437600000,53,41],
  [1348524000000,52,90],
  [1348610400000,52,53],
  [1348696800000,52,80],
  [1348783200000,52,44],
  [1349042400000,52,62],
  [1349128800000,52,57],
  [1349215200000,52,60],
  [1349301600000,52,68],
  [1349388000000,52,47],]
},
{
  name: 'Agilidad',
  data: [[1346364000000,10,27],
  [1346709600000,3,10],
  [1346796000000,2,26],
  [1346882400000,2,79],
  [1346968800000,2,46],
  [1347228000000,2,13],
  [1347314400000,2,43],
  [1347400800000,5,2],
  [1347487200000,2,81],
  [1347573600000,3,34],
  [1347832800000,3,41],
  [1347919200000,2,57],
  [1348005600000,3,12],
  [1348092000000,4,53],
  [1348178400000,3,83],
  [1348437600000,3,41],
  [1348524000000,2,90],
  [1348610400000,2,53],
  [1348696800000,2,80],
  [1348783200000,2,44],
  [1349042400000,2,62],
  [1349128800000,2,57],
  [1349215200000,2,60],
  [1349301600000,2,68],
  [1349388000000,2,47],]
},
{
  name: 'Fuerza',
  data: [[1346364000000,31.27],
  [1346709600000,41,43],
  [1346796000000,42,26],
  [1346882400000,42,79],
  [1346968800000,42,46],
  [1347228000000,42,13],
  [1347314400000,42,43],
  [1347400800000,42,42],
  [1347487200000,42,81],
  [1347573600000,43,34],
  [1347832800000,43,41],
  [1347919200000,42,57],
  [1348005600000,43,12],
  [1348092000000,44,53],
  [1348178400000,43,83],
  [1348437600000,43,41],
  [1348524000000,42,90],
  [1348610400000,42,53],
  [1348696800000,42,80],
  [1348783200000,42,44],
  [1349042400000,42,62],
  [1349128800000,42,57],
  [1349215200000,42,60],
  [1349301600000,42,68],
  [1349388000000,42,47],]
},
{
  name: 'Potencia',
  data: [[1346364000000,31.27],
  [1346709600000,21,43],
  [1346796000000,22,26],
  [1346882400000,22,79],
  [1346968800000,22,46],
  [1347228000000,22,13],
  [1347314400000,22,43],
  [1347400800000,22,42],
  [1347487200000,22,81],
  [1347573600000,23,34],
  [1347832800000,23,41],
  [1347919200000,22,57],
  [1348005600000,23,12],
  [1348092000000,24,53],
  [1348178400000,23,83],
  [1348437600000,23,41],
  [1348524000000,22,90],
  [1348610400000,22,53],
  [1348696800000,22,80],
  [1348783200000,22,44],
  [1349042400000,22,62],
  [1349128800000,22,57],
  [1349215200000,22,60],
  [1349301600000,22,68],
  [1349388000000,22,47],]
},
{
  name: 'Velocidad',
  data: [[1346364000000,31.27],
  [1346709600000,11,43],
  [1346796000000,12,26],
  [1346882400000,12,79],
  [1346968800000,12,46],
  [1347228000000,12,13],
  [1347314400000,12,43],
  [1347400800000,12,42],
  [1347487200000,12,81],
  [1347573600000,13,34],
  [1347832800000,13,41],
  [1347919200000,12,57],
  [1348005600000,13,12],
  [1348092000000,14,53],
  [1348178400000,13,83],
  [1348437600000,13,41],
  [1348524000000,12,90],
  [1348610400000,12,53],
  [1348696800000,12,80],
  [1348783200000,12,44],
  [1349042400000,12,62],
  [1349128800000,12,57],
  [1349215200000,12,60],
  [1349301600000,12,68],
  [1349388000000,12,47],]
}],
  chart: {
    height: 350,
    type: 'bubble',
},
dataLabels: {
    enabled: false
},
fill: {
    opacity: 0.8
},
title: {
    text: 'Simple Bubble Chart',
    align: 'left',
    offsetX: 10,
    style: {
      fontSize:  '14px',
      fontWeight:  500,
      fontFamily:  'montserrat',
      color:  '#cbcbe2'
    },
},
xaxis: {
    tickAmount: 12, 
    type: 'datetime',
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    tooltip: {
      enabled: false
    }
},
yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: true,
      style:{
        colors:['#cbcbe2']
      },
    }
},
legend: {
  show: true,
  position: 'bottom',
  horizontalAlign: 'center',
  offsetY: 7,
  labels:{
    colors: '#cbcbe2',
    useSeriesColors: true
  }
}
};

var bublleGra2 = new ApexCharts(document.querySelector("#bublleGra2"), optionsbublleGra2);
bublleGra2.render();
// FIN BUBBLE Grafico









// BUBBLE Grafico   
var optionsbublleGra3 = {
  colors: ['#9BCB3B', '#4bc0c0','#ffab00','#ff3e1d','#007bff'],
  series: [{
  name: 'Resistencia',
  data: [[1346364000000,31.27],
  [1346709600000,51,43],
  [1346796000000,52,26],
  [1346882400000,52,79],
  [1346968800000,52,46],
  [1347228000000,52,13],
  [1347314400000,52,43],
  [1347400800000,52,42],
  [1347487200000,52,81],
  [1347573600000,53,34],
  [1347832800000,53,41],
  [1347919200000,52,57],
  [1348005600000,53,12],
  [1348092000000,54,53],
  [1348178400000,53,83],
  [1348437600000,53,41],
  [1348524000000,52,90],
  [1348610400000,52,53],
  [1348696800000,52,80],
  [1348783200000,52,44],
  [1349042400000,52,62],
  [1349128800000,52,57],
  [1349215200000,52,60],
  [1349301600000,52,68],
  [1349388000000,52,47],]
},
{
  name: 'Agilidad',
  data: [[1346364000000,10,27],
  [1346709600000,3,10],
  [1346796000000,2,26],
  [1346882400000,2,79],
  [1346968800000,2,46],
  [1347228000000,2,13],
  [1347314400000,2,43],
  [1347400800000,5,2],
  [1347487200000,2,81],
  [1347573600000,3,34],
  [1347832800000,3,41],
  [1347919200000,2,57],
  [1348005600000,3,12],
  [1348092000000,4,53],
  [1348178400000,3,83],
  [1348437600000,3,41],
  [1348524000000,2,90],
  [1348610400000,2,53],
  [1348696800000,2,80],
  [1348783200000,2,44],
  [1349042400000,2,62],
  [1349128800000,2,57],
  [1349215200000,2,60],
  [1349301600000,2,68],
  [1349388000000,2,47],]
},
{
  name: 'Fuerza',
  data: [[1346364000000,31.27],
  [1346709600000,41,43],
  [1346796000000,42,26],
  [1346882400000,42,79],
  [1346968800000,42,46],
  [1347228000000,42,13],
  [1347314400000,42,43],
  [1347400800000,42,42],
  [1347487200000,42,81],
  [1347573600000,43,34],
  [1347832800000,43,41],
  [1347919200000,42,57],
  [1348005600000,43,12],
  [1348092000000,44,53],
  [1348178400000,43,83],
  [1348437600000,43,41],
  [1348524000000,42,90],
  [1348610400000,42,53],
  [1348696800000,42,80],
  [1348783200000,42,44],
  [1349042400000,42,62],
  [1349128800000,42,57],
  [1349215200000,42,60],
  [1349301600000,42,68],
  [1349388000000,42,47],]
},
{
  name: 'Potencia',
  data: [[1346364000000,31.27],
  [1346709600000,21,43],
  [1346796000000,22,26],
  [1346882400000,22,79],
  [1346968800000,22,46],
  [1347228000000,22,13],
  [1347314400000,22,43],
  [1347400800000,22,42],
  [1347487200000,22,81],
  [1347573600000,23,34],
  [1347832800000,23,41],
  [1347919200000,22,57],
  [1348005600000,23,12],
  [1348092000000,24,53],
  [1348178400000,23,83],
  [1348437600000,23,41],
  [1348524000000,22,90],
  [1348610400000,22,53],
  [1348696800000,22,80],
  [1348783200000,22,44],
  [1349042400000,22,62],
  [1349128800000,22,57],
  [1349215200000,22,60],
  [1349301600000,22,68],
  [1349388000000,22,47],]
},
{
  name: 'Velocidad',
  data: [[1346364000000,31.27],
  [1346709600000,11,43],
  [1346796000000,12,26],
  [1346882400000,12,79],
  [1346968800000,12,46],
  [1347228000000,12,13],
  [1347314400000,12,43],
  [1347400800000,12,42],
  [1347487200000,12,81],
  [1347573600000,13,34],
  [1347832800000,13,41],
  [1347919200000,12,57],
  [1348005600000,13,12],
  [1348092000000,14,53],
  [1348178400000,13,83],
  [1348437600000,13,41],
  [1348524000000,12,90],
  [1348610400000,12,53],
  [1348696800000,12,80],
  [1348783200000,12,44],
  [1349042400000,12,62],
  [1349128800000,12,57],
  [1349215200000,12,60],
  [1349301600000,12,68],
  [1349388000000,12,47],]
}],
  chart: {
    height: 350,
    type: 'bubble',
},
dataLabels: {
    enabled: false
},
fill: {
    opacity: 0.8
},
title: {
    text: 'Simple Bubble Chart',
    align: 'left',
    offsetX: 10,
    style: {
      fontSize:  '14px',
      fontWeight:  500,
      fontFamily:  'montserrat',
      color:  '#cbcbe2'
    },
},
xaxis: {
    tickAmount: 12, 
    type: 'datetime',
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    tooltip: {
      enabled: false
    }
},
yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: true,
      style:{
        colors:['#cbcbe2']
      },
    }
},
legend: {
  show: true,
  position: 'bottom',
  horizontalAlign: 'center',
  offsetY: 7,
  labels:{
    colors: '#cbcbe2',
    useSeriesColors: true
  }
}
};

var bublleGra3 = new ApexCharts(document.querySelector("#bublleGra3"), optionsbublleGra3);
bublleGra3.render();
// FIN BUBBLE Grafico









// BARRAS HORIZONTALES
var optionshoriBarGra1 = {
  colors: ['#9BCB3B', '#4bc0c0','#ffab00','#ff3e1d','#007bff'],
  series: [{
  name: 'Resistencia',
  data: [44, 55, 41, 37, 22, 43, 21]
}, {
  name: 'Agilidad',
  data: [53, 32, 33, 52, 13, 43, 32]
}, {
  name: 'Fuerza',
  data: [12, 17, 11, 9, 15, 11, 20]
}, {
  name: 'Potencia',
  data: [9, 7, 5, 8, 6, 9, 4]
}, {
  name: 'Velocidad',
  data: [25, 12, 19, 32, 25, 24, 10]
}],
  chart: {
  type: 'bar',
  height: 350,
  stacked: true,
},
plotOptions: {
  bar: {
    borderRadius: 5,
    horizontal: true,
    dataLabels: {
      total: {
        enabled: true,
        offsetX: 0,
        style: {
          fontSize: '13px',
          fontWeight: 900,
          color: '#cbcbe2'
        }
      }
    }
  },
},
dataLabels: {
  enabled: true,
  style: {
    fontSize: '11px',
    fontWeight:'100',
    colors: ["#ffffff"]
  }
},
stroke: {
  width: 1,
  colors: ['transparent'],
  
},
title: {
  text: 'Fiction Books Sales',
  align: 'left',
    offsetX: 10,
    offsetY: 0,
    floating: false,
    style: {
      fontSize:  '14px',
      fontWeight:  '600',
      fontFamily:  'montserrat',
      color:  '#cbcbe2'
    },
},
xaxis: {
  categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
  labels: {
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  },
    formatter: function (val) {
      return val + "Km"
    }
  }
},
yaxis: {
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  labels: {
    show: true,
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  }
  },
  
},
tooltip: {
  y: {
    formatter: function (val) {
      return val + "Km"
    }
  }
},
fill: {
  opacity: 1
},
legend: {
  show: true,
  position: 'bottom',
  horizontalAlign: 'center',
  labels: {
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

var horiBarGra1 = new ApexCharts(document.querySelector("#horiBarGra1"), optionshoriBarGra1);
horiBarGra1.render();
// FIN BARRAS HORIZONTALES








// BARRAS HORIZONTALES
var optionshoriBarGra2 = {
  colors: ['#9BCB3B', '#4bc0c0','#ffab00','#ff3e1d','#007bff'],
  series: [{
  name: 'Resistencia',
  data: [44, 55, 41, 37, 22, 43, 21]
}, {
  name: 'Agilidad',
  data: [53, 32, 33, 52, 13, 43, 32]
}, {
  name: 'Fuerza',
  data: [12, 17, 11, 9, 15, 11, 20]
}, {
  name: 'Potencia',
  data: [9, 7, 5, 8, 6, 9, 4]
}, {
  name: 'Velocidad',
  data: [25, 12, 19, 32, 25, 24, 10]
}],
  chart: {
  type: 'bar',
  height: 350,
  stacked: true,
},
plotOptions: {
  bar: {
    borderRadius: 5,
    horizontal: true,
    dataLabels: {
      total: {
        enabled: true,
        offsetX: 0,
        style: {
          fontSize: '13px',
          fontWeight: 900,
          color: '#cbcbe2'
        }
      }
    }
  },
},
dataLabels: {
  enabled: true,
  style: {
    fontSize: '11px',
    fontWeight:'100',
    colors: ["#ffffff"]
  }
},
stroke: {
  width: 1,
  colors: ['transparent'],
  
},
title: {
  text: 'Fiction Books Sales',
  align: 'left',
    offsetX: 10,
    offsetY: 0,
    floating: false,
    style: {
      fontSize:  '14px',
      fontWeight:  '600',
      fontFamily:  'montserrat',
      color:  '#cbcbe2'
    },
},
xaxis: {
  categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
  labels: {
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  },
    formatter: function (val) {
      return val + "Km"
    }
  }
},
yaxis: {
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  labels: {
    show: true,
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  }
  },
  
},
tooltip: {
  y: {
    formatter: function (val) {
      return val + "Km"
    }
  }
},
fill: {
  opacity: 1
},
legend: {
  show: true,
  position: 'bottom',
  horizontalAlign: 'center',
  labels: {
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

var horiBarGra2 = new ApexCharts(document.querySelector("#horiBarGra2"), optionshoriBarGra2);
horiBarGra2.render();
// FIN BARRAS HORIZONTALES








// BARRAS HORIZONTALES
var optionshoriBarGra3 = {
  colors: ['#9BCB3B', '#4bc0c0','#ffab00','#ff3e1d','#007bff'],
  series: [{
  name: 'Resistencia',
  data: [44, 55, 41, 37, 22, 43, 21]
}, {
  name: 'Agilidad',
  data: [53, 32, 33, 52, 13, 43, 32]
}, {
  name: 'Fuerza',
  data: [12, 17, 11, 9, 15, 11, 20]
}, {
  name: 'Potencia',
  data: [9, 7, 5, 8, 6, 9, 4]
}, {
  name: 'Velocidad',
  data: [25, 12, 19, 32, 25, 24, 10]
}],
  chart: {
  type: 'bar',
  height: 350,
  stacked: true,
},
plotOptions: {
  bar: {
    borderRadius: 5,
    horizontal: true,
    dataLabels: {
      total: {
        enabled: true,
        offsetX: 0,
        style: {
          fontSize: '13px',
          fontWeight: 900,
          color: '#cbcbe2'
        }
      }
    }
  },
},
dataLabels: {
  enabled: true,
  style: {
    fontSize: '11px',
    fontWeight:'100',
    colors: ["#ffffff"]
  }
},
stroke: {
  width: 1,
  colors: ['transparent'],
  
},
title: {
  text: 'Fiction Books Sales',
  align: 'left',
    offsetX: 10,
    offsetY: 0,
    floating: false,
    style: {
      fontSize:  '14px',
      fontWeight:  '600',
      fontFamily:  'montserrat',
      color:  '#cbcbe2'
    },
},
xaxis: {
  categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
  labels: {
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  },
    formatter: function (val) {
      return val + "Km"
    }
  }
},
yaxis: {
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  labels: {
    show: true,
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  }
  },
  
},
tooltip: {
  y: {
    formatter: function (val) {
      return val + "Km"
    }
  }
},
fill: {
  opacity: 1
},
legend: {
  show: true,
  position: 'bottom',
  horizontalAlign: 'center',
  labels: {
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

var horiBarGra3 = new ApexCharts(document.querySelector("#horiBarGra3"), optionshoriBarGra3);
horiBarGra3.render();
// FIN BARRAS HORIZONTALES








// multiAxisLineLine Grafico
var optionsmultiAxisLineLine1 = {
  
  chart: {
    height: 350,
    type: "line",
    stacked: false,
    toolbar:{
      show: true
    },
  },
  dataLabels: {
    enabled: false
  },
  colors: ["#9bcb3b", "#ffab00"],
  series: [
    {
      name: "Series A",
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    },
    {
      name: "Series B",
      data: [20, 29, 37, 36, 44, 45, 50, 58]
    }
  ],
  stroke: {
    width: [3, 3]
  },
  xaxis: {
    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    tooltip: {
      enabled: false
    }
  },
  yaxis: [
    {
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true,
        color: "#9bcb3b"
      },
      tooltip: true,
      labels: {
        style: {
          colors: "#9bcb3b"
        }
      },
      title: {
        text: "Series A",
        style: {
          color: "#9bcb3b"
        }
      }
    },
    {
      opposite: true,
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true,
        color: "#ffab00"
      },
      labels: {
        style: {
          colors: "#ffab00"
        }
      },
      title: {
        text: "Series B",
        style: {
          color: "#ffab00"
        }
      }
    }
  ],
  tooltip: {
    enabled:true,
    shared: true,
    intersect: false,
    
  },
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
  }
};

var multiAxisLineLine1 = new ApexCharts(document.querySelector("#multiAxisLineLine1"), optionsmultiAxisLineLine1);
multiAxisLineLine1.render();
// FIN multiAxisLineLine Grafico










// multiAxisLineLine Grafico
var optionsmultiAxisLineLine2 = {
  
  chart: {
    height: 350,
    type: "line",
    stacked: false,
    toolbar:{
      show: true
    },
  },
  dataLabels: {
    enabled: false
  },
  colors: ["#9bcb3b", "#ff3e1d"],
  series: [
    {
      name: "Series A",
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    },
    {
      name: "Series B",
      data: [20, 29, 37, 36, 44, 45, 50, 58]
    }
  ],
  stroke: {
    width: [3, 3]
  },
  xaxis: {
    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    tooltip: {
      enabled: false
    }
  },
  yaxis: [
    {
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true,
        color: "#9bcb3b"
      },
      tooltip: true,
      labels: {
        style: {
          colors: "#9bcb3b"
        }
      },
      title: {
        text: "Series A",
        style: {
          color: "#9bcb3b"
        }
      }
    },
    {
      opposite: true,
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true,
        color: "#ff3e1d"
      },
      labels: {
        style: {
          colors: "#ff3e1d"
        }
      },
      title: {
        text: "Series B",
        style: {
          color: "#ff3e1d"
        }
      }
    }
  ],
  tooltip: {
    enabled:true,
    shared: true,
    intersect: false,
    
  },
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
  }
};

var multiAxisLineLine2 = new ApexCharts(document.querySelector("#multiAxisLineLine2"), optionsmultiAxisLineLine2);
multiAxisLineLine2.render();
// FIN multiAxisLineLine Grafico










// multiAxisLineLine Grafico
var optionsmultiAxisLineLine3 = {
  
  chart: {
    height: 350,
    type: "line",
    stacked: false,
    toolbar:{
      show: true
    },
  },
  dataLabels: {
    enabled: false
  },
  colors: ["#9bcb3b", "#007bff"],
  series: [
    {
      name: "Series A",
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    },
    {
      name: "Series B",
      data: [20, 29, 37, 36, 44, 45, 50, 58]
    }
  ],
  stroke: {
    width: [3, 3]
  },
  xaxis: {
    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    tooltip: {
      enabled: false
    }
  },
  yaxis: [
    {
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true,
        color: "#9bcb3b"
      },
      tooltip: true,
      labels: {
        style: {
          colors: "#9bcb3b"
        }
      },
      title: {
        text: "Series A",
        style: {
          color: "#9bcb3b"
        }
      }
    },
    {
      opposite: true,
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true,
        color: "#007bff"
      },
      labels: {
        style: {
          colors: "#007bff"
        }
      },
      title: {
        text: "Series B",
        style: {
          color: "#007bff"
        }
      }
    }
  ],
  tooltip: {
    enabled:true,
    shared: true,
    intersect: false,
    
  },
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
  }
};

var multiAxisLineLine3 = new ApexCharts(document.querySelector("#multiAxisLineLine3"), optionsmultiAxisLineLine3);
multiAxisLineLine3.render();
// FIN multiAxisLineLine Grafico










// multiAxisLineArea Grafico
var optionsmultiAxisLineArea1 = {
  colors: ["#9bcb3b", "#ffab00"],
  series: [{
  name: 'Series A',
  type: 'area',
  data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
}, {
  name: 'Series B',
  type: 'line',
  data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
}],
  chart: {
  height: 350,
  type: 'line',
},
stroke: {
  curve: 'smooth',
  width: [3, 3]
},
fill: {
  type:'solid',
  opacity: [0.35, 1],
},
labels: ['Dec 01', 'Dec 02','Dec 03','Dec 04','Dec 05','Dec 06','Dec 07','Dec 08','Dec 09 ','Dec 10','Dec 11'],
markers: {
  size: 0
},
xaxis: {
  labels:{
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  }
  },
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  },
  tooltip: {
    enabled: false
  }
},
yaxis: [
  {
    axisTicks: {
      show: true
    },
    axisBorder: {
      show: true,
      color: "#9bcb3b"
    },
    tooltip: true,
    labels: {
      style: {
        colors: "#9bcb3b"
      }
    },
    title: {
      text: "Series A",
      style: {
        color: "#9bcb3b"
      }
    }
  },
  {
    opposite: true,
    axisTicks: {
      show: true
    },
    axisBorder: {
      show: true,
      color: "#ffab00",
    },
    labels: {
      style: {
        colors: "#ffab00"
      }
    },
    title: {
      text: "Series B",
      style: {
        color: "#ffab00"
      }
    }
  },
],
tooltip: {
  shared: true,
  intersect: false,
  y: {
    formatter: function (y) {
      if(typeof y !== "undefined") {
        return  y.toFixed(0) + " points";
      }
      return y;
    }
  }
},
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
}
};

var multiAxisLineArea1 = new ApexCharts(document.querySelector("#multiAxisLineArea1"), optionsmultiAxisLineArea1);
multiAxisLineArea1.render();
// FIN multiAxisLineArea Grafico










// multiAxisLineArea Grafico
var optionsmultiAxisLineArea2 = {
  colors: ["#9bcb3b", "#ff3e1d"],
  series: [{
  name: 'Series A',
  type: 'area',
  data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
}, {
  name: 'Series B',
  type: 'line',
  data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
}],
  chart: {
  height: 350,
  type: 'line',
},
stroke: {
  curve: 'smooth',
  width: [3, 3]
},
fill: {
  type:'solid',
  opacity: [0.35, 1],
},
labels: ['Dec 01', 'Dec 02','Dec 03','Dec 04','Dec 05','Dec 06','Dec 07','Dec 08','Dec 09 ','Dec 10','Dec 11'],
markers: {
  size: 0
},
xaxis: {
  labels:{
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  }
  },
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  },
  tooltip: {
    enabled: false
  }
},
yaxis: [
  {
    axisTicks: {
      show: true
    },
    axisBorder: {
      show: true,
      color: "#9bcb3b"
    },
    tooltip: true,
    labels: {
      style: {
        colors: "#9bcb3b"
      }
    },
    title: {
      text: "Series A",
      style: {
        color: "#9bcb3b"
      }
    }
  },
  {
    opposite: true,
    axisTicks: {
      show: true
    },
    axisBorder: {
      show: true,
      color: "#ff3e1d",
    },
    labels: {
      style: {
        colors: "#ff3e1d"
      }
    },
    title: {
      text: "Series B",
      style: {
        color: "#ff3e1d"
      }
    }
  },
],
tooltip: {
  shared: true,
  intersect: false,
  y: {
    formatter: function (y) {
      if(typeof y !== "undefined") {
        return  y.toFixed(0) + " points";
      }
      return y;
    }
  }
},
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
}
};

var multiAxisLineArea2 = new ApexCharts(document.querySelector("#multiAxisLineArea2"), optionsmultiAxisLineArea2);
multiAxisLineArea2.render();
// FIN multiAxisLineArea Grafico










// multiAxisLineArea Grafico
var optionsmultiAxisLineArea3 = {
  colors: ["#9bcb3b", "#007bff"],
  series: [{
  name: 'Series A',
  type: 'area',
  data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
}, {
  name: 'Series B',
  type: 'line',
  data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
}],
  chart: {
  height: 350,
  type: 'line',
},
stroke: {
  curve: 'smooth',
  width: [3, 3]
},
fill: {
  type:'solid',
  opacity: [0.35, 1],
},
labels: ['Dec 01', 'Dec 02','Dec 03','Dec 04','Dec 05','Dec 06','Dec 07','Dec 08','Dec 09 ','Dec 10','Dec 11'],
markers: {
  size: 0
},
xaxis: {
  labels:{
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  }
  },
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  },
  tooltip: {
    enabled: false
  }
},
yaxis: [
  {
    axisTicks: {
      show: true
    },
    axisBorder: {
      show: true,
      color: "#9bcb3b"
    },
    tooltip: true,
    labels: {
      style: {
        colors: "#9bcb3b"
      }
    },
    title: {
      text: "Series A",
      style: {
        color: "#9bcb3b"
      }
    }
  },
  {
    opposite: true,
    axisTicks: {
      show: true
    },
    axisBorder: {
      show: true,
      color: "#007bff",
    },
    labels: {
      style: {
        colors: "#007bff"
      }
    },
    title: {
      text: "Series B",
      style: {
        color: "#007bff"
      }
    }
  },
],
tooltip: {
  shared: true,
  intersect: false,
  y: {
    formatter: function (y) {
      if(typeof y !== "undefined") {
        return  y.toFixed(0) + " points";
      }
      return y;
    }
  }
},
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
}
};

var multiAxisLineArea3 = new ApexCharts(document.querySelector("#multiAxisLineArea3"), optionsmultiAxisLineArea3);
multiAxisLineArea3.render();
// FIN multiAxisLineArea Grafico










// multiAxisLineAreaBar Grafico
var optionsmultiAxisLineAreaBar1 = {
  colors: ["#9bcb3b", "#ffab00","#007bff"],
  series: [{
  name: 'TEAM A',
  type: 'column',
  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
}, {
  name: 'TEAM B',
  type: 'area',
  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
}, {
  name: 'TEAM C',
  type: 'line',
  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
}],
  chart: {
  height: 350,
  type: 'line',
  stacked: false,
},
stroke: {
  width: [0, 2, 4],
  curve: 'smooth'
},
plotOptions: {
  bar: {
    columnWidth: '50%',
    borderRadius: 8
  }
},
fill: {
  opacity: [0.85, 0.25, 1],
  gradient: {
    inverseColors: false,
    shade: 'light',
    type: "vertical",
    opacityFrom: 0.85,
    opacityTo: 0.55,
    stops: [0, 100, 100, 100]
  }
},
labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
  '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
],
markers: {
  size: 0
},
xaxis: {
  type: 'datetime',
  labels: {
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  },    
  },  
},
yaxis: {
  title: {
    text: 'Points',
    style:{
      color: '#cbcbe2'
    }
  },
  min: 0,
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  labels: {
    show: true,
    style:{
      colors:['#cbcbe2']
    },
  }
},
tooltip: {
  shared: true,
  intersect: false,
  y: {
    formatter: function (y) {
      if (typeof y !== "undefined") {
        return y.toFixed(0) + " points";
      }
      return y;
    }
  }
},
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
}
};

var multiAxisLineAreaBar1 = new ApexCharts(document.querySelector("#multiAxisLineAreaBar1"), optionsmultiAxisLineAreaBar1);
multiAxisLineAreaBar1.render();
// FIN multiAxisLineAreaBar Grafico





// multiAxisLineAreaBar Grafico
var optionsmultiAxisLineAreaBar2 = {
  colors: ["#9bcb3b", "#ff3e1d","#007bff"],
  series: [{
  name: 'TEAM A',
  type: 'column',
  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
}, {
  name: 'TEAM B',
  type: 'area',
  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
}, {
  name: 'TEAM C',
  type: 'line',
  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
}],
  chart: {
  height: 350,
  type: 'line',
  stacked: false,
},
stroke: {
  width: [0, 2, 4],
  curve: 'smooth'
},
plotOptions: {
  bar: {
    columnWidth: '50%',
    borderRadius: 8
  }
},
fill: {
  opacity: [0.85, 0.25, 1],
  gradient: {
    inverseColors: false,
    shade: 'light',
    type: "vertical",
    opacityFrom: 0.85,
    opacityTo: 0.55,
    stops: [0, 100, 100, 100]
  }
},
labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
  '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
],
markers: {
  size: 0
},
xaxis: {
  type: 'datetime',
  labels: {
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  },    
  },  
},
yaxis: {
  title: {
    text: 'Points',
    style:{
      color: '#cbcbe2'
    }
  },
  min: 0,
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  labels: {
    show: true,
    style:{
      colors:['#cbcbe2']
    },
  }
},
tooltip: {
  shared: true,
  intersect: false,
  y: {
    formatter: function (y) {
      if (typeof y !== "undefined") {
        return y.toFixed(0) + " points";
      }
      return y;
    }
  }
},
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
}
};

var multiAxisLineAreaBar2 = new ApexCharts(document.querySelector("#multiAxisLineAreaBar2"), optionsmultiAxisLineAreaBar2);
multiAxisLineAreaBar2.render();
// FIN multiAxisLineAreaBar Grafico




// multiAxisLineAreaBar Grafico
var optionsmultiAxisLineAreaBar3 = {
  colors: ["#9bcb3b", "#6610f2","#ffab00"],
  series: [{
  name: 'TEAM A',
  type: 'column',
  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
}, {
  name: 'TEAM B',
  type: 'area',
  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
}, {
  name: 'TEAM C',
  type: 'line',
  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
}],
  chart: {
  height: 350,
  type: 'line',
  stacked: false,
},
stroke: {
  width: [0, 2, 4],
  curve: 'smooth'
},
plotOptions: {
  bar: {
    columnWidth: '50%',
    borderRadius: 8
  }
},

fill: {
  opacity: [0.85, 0.25, 1],
  gradient: {
    inverseColors: false,
    shade: 'light',
    type: "vertical",
    opacityFrom: 0.85,
    opacityTo: 0.55,
    stops: [0, 100, 100, 100]
  }
},
labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
  '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
],
markers: {
  size: 0
},
xaxis: {
  type: 'datetime',
  labels: {
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  },    
  },  
},
yaxis: {
  title: {
    text: 'Points',
    style:{
      color: '#cbcbe2'
    }
  },
  min: 0,
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  labels: {
    show: true,
    style:{
      colors:['#cbcbe2']
    },
  }
},
tooltip: {
  shared: true,
  intersect: false,
  y: {
    formatter: function (y) {
      if (typeof y !== "undefined") {
        return y.toFixed(0) + " points";
      }
      return y;

    }
  }
},
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
}
};

var multiAxisLineAreaBar3 = new ApexCharts(document.querySelector("#multiAxisLineAreaBar3"), optionsmultiAxisLineAreaBar3);
multiAxisLineAreaBar3.render();
// FIN multiAxisLineAreaBar Grafico












// multiYAxisLineBarBar Grafico
var optionsmultiYAxisLineBarBar1 = {
  colors: ["#9bcb3b", "#007bff","#ffab00"],
  series: [{
  name: 'Income',
  type: 'column',
  data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
}, {
  name: 'Cashflow',
  type: 'column',
  data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
}, {
  name: 'Revenue',
  type: 'line',
  data: [20, 29, 37, 36, 44, 45, 50, 58]
}],
  chart: {
  height: 350,
  type: 'line',
  stacked: false,
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
dataLabels: {
  enabled: false
},
stroke: {
  width: [1, 1, 3]
},
xaxis: {
  categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  labels:{
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
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
      style: {
        colors: '#9bcb3b',
      }
    },
    title: {
      text: "Income (thousand crores)",
      style: {
        color: '#9bcb3b',
      }
    },
    tooltip: {
      enabled: true
    }
  },
  {
    seriesName: 'Income',
    opposite: true,
    axisTicks: {
      show: true,
    },
    axisBorder: {
      show: true,
      color: '#007bff'
    },
    labels: {
      style: {
        colors: '#007bff',
      }
    },
    title: {
      text: "Operating Cashflow (thousand crores)",
      style: {
        color: '#007bff',
      }
    },
  },
  {
    seriesName: 'Revenue',
    opposite: true,
    axisTicks: {
      show: true,
    },
    axisBorder: {
      show: true,
      color: '#ffab00'
    },
    labels: {
      style: {
        colors: '#ffab00',
      },
    },
    title: {
      text: "Revenue (thousand crores)",
      style: {
        color: '#ffab00',
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
legend: {
  show:true,
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

var multiYAxisLineBarBar1 = new ApexCharts(document.querySelector("#multiYAxisLineBarBar1"), optionsmultiYAxisLineBarBar1);
multiYAxisLineBarBar1.render();
// FIN multiYAxisLineBarBar Grafico











// multiYAxisLineBarBar Grafico
var optionsmultiYAxisLineBarBar2 = {
  colors: ["#9bcb3b", "#4bc0c0","#ffab00"],
  series: [{
  name: 'Income',
  type: 'column',
  data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
}, {
  name: 'Cashflow',
  type: 'column',
  data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
}, {
  name: 'Revenue',
  type: 'line',
  data: [20, 29, 37, 36, 44, 45, 50, 58]
}],
  chart: {
  height: 350,
  type: 'line',
  stacked: false,
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
dataLabels: {
  enabled: false
},
stroke: {
  width: [1, 1, 3]
},
xaxis: {
  categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  labels:{
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
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
      style: {
        colors: '#9bcb3b',
      }
    },
    title: {
      text: "Income (thousand crores)",
      style: {
        color: '#9bcb3b',
      }
    },
    tooltip: {
      enabled: true
    }
  },
  {
    seriesName: 'Income',
    opposite: true,
    axisTicks: {
      show: true,
    },
    axisBorder: {
      show: true,
      color: '#4bc0c0'
    },
    labels: {
      style: {
        colors: '#4bc0c0',
      }
    },
    title: {
      text: "Operating Cashflow (thousand crores)",
      style: {
        color: '#4bc0c0',
      }
    },
  },
  {
    seriesName: 'Revenue',
    opposite: true,
    axisTicks: {
      show: true,
    },
    axisBorder: {
      show: true,
      color: '#ffab00'
    },
    labels: {
      style: {
        colors: '#ffab00',
      },
    },
    title: {
      text: "Revenue (thousand crores)",
      style: {
        color: '#ffab00',
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
legend: {
  show:true,
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

var multiYAxisLineBarBar2 = new ApexCharts(document.querySelector("#multiYAxisLineBarBar2"), optionsmultiYAxisLineBarBar2);
multiYAxisLineBarBar2.render();
// FIN multiYAxisLineBarBar Grafico











// multiYAxisLineBarBar Grafico
var optionsmultiYAxisLineBarBar3 = {
  colors: ["#9bcb3b", "#6610f2","#ffab00"],
  series: [{
  name: 'Income',
  type: 'column',
  data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
}, {
  name: 'Cashflow',
  type: 'column',
  data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
}, {
  name: 'Revenue',
  type: 'line',
  data: [20, 29, 37, 36, 44, 45, 50, 58]
}],
  chart: {
  height: 350,
  type: 'line',
  stacked: false,
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
dataLabels: {
  enabled: false
},
stroke: {
  width: [1, 1, 3]
},
xaxis: {
  categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  labels:{
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
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
      style: {
        colors: '#9bcb3b',
      }
    },
    title: {
      text: "Income (thousand crores)",
      style: {
        color: '#9bcb3b',
      }
    },
    tooltip: {
      enabled: true
    }
  },
  {
    seriesName: 'Income',
    opposite: true,
    axisTicks: {
      show: true,
    },
    axisBorder: {
      show: true,
      color: '#6610f2'
    },
    labels: {
      style: {
        colors: '#6610f2',
      }
    },
    title: {
      text: "Operating Cashflow (thousand crores)",
      style: {
        color: '#6610f2',
      }
    },
  },
  {
    seriesName: 'Revenue',
    opposite: true,
    axisTicks: {
      show: true,
    },
    axisBorder: {
      show: true,
      color: '#ffab00'
    },
    labels: {
      style: {
        colors: '#ffab00',
      },
    },
    title: {
      text: "Revenue (thousand crores)",
      style: {
        color: '#ffab00',
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
legend: {
  show:true,
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

var multiYAxisLineBarBar3 = new ApexCharts(document.querySelector("#multiYAxisLineBarBar3"), optionsmultiYAxisLineBarBar3);
multiYAxisLineBarBar3.render();
// FIN multiYAxisLineBarBar Grafico














// multiYAxisLineBar Grafico
var optionsmultiYAxisLineBar1 = {
  colors:['#9BCB3B','#ffab00'],
  series: [{
  name: 'Website Blog',
  type: 'column',
  data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
}, {
  name: 'Social Media',
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
  enabledOnSeries: [1]
},
labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
xaxis: {
  type: 'datetime',
  labels:{
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  }
  }
},
yaxis: [{
  title: {
    text: 'Website Blog',
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
    text: 'Social Media',
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

var multiYAxisLineBar1 = new ApexCharts(document.querySelector("#multiYAxisLineBar1"), optionsmultiYAxisLineBar1);
multiYAxisLineBar1.render();
// FIN multiYAxisLineBar Grafico











// multiYAxisLineBar Grafico
var optionsmultiYAxisLineBar2 = {
  colors:['#9BCB3B','#ff3e1d'],
  series: [{
  name: 'Website Blog',
  type: 'column',
  data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
}, {
  name: 'Social Media',
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
  enabledOnSeries: [1]
},
labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
xaxis: {
  type: 'datetime',
  labels:{
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  }
  }
},
yaxis: [{
  title: {
    text: 'Website Blog',
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
    text: 'Social Media',
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

var multiYAxisLineBar2 = new ApexCharts(document.querySelector("#multiYAxisLineBar2"), optionsmultiYAxisLineBar2);
multiYAxisLineBar2.render();
// FIN multiYAxisLineBar Grafico










// multiYAxisLineBar Grafico
var optionsmultiYAxisLineBar3 = {
  colors:['#9BCB3B','#007bff'],
  series: [{
  name: 'Website Blog',
  type: 'column',
  data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
}, {
  name: 'Social Media',
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
  enabledOnSeries: [1]
},
labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
xaxis: {
  type: 'datetime',
  labels:{
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  }
  }
},
yaxis: [{
  title: {
    text: 'Website Blog',
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
    text: 'Social Media',
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

var multiYAxisLineBar3 = new ApexCharts(document.querySelector("#multiYAxisLineBar3"), optionsmultiYAxisLineBar3);
multiYAxisLineBar3.render();
// FIN multiYAxisLineBar Grafico
















// elevacionPos Grafico   
var optionselevacionPos1 = {
  colors: ["#9bcb3b"],
  series: [{
  name: "STOCK ABC",
  data: [31, 40, 28, 51, 42, 109, 100]
}],
  chart: {
  type: 'area',
  height: 350,
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'straight',
  width: 2
},
xaxis: {
  type: 'datetime',
  categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
  labels:{
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  }
  },
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  },
  tooltip: {
    enabled: false
  }
},
yaxis: {
  opposite: true,
  labels:{      
    style:{
    colors:['#cbcbe2']
  }
  }
},
legend: {
  horizontalAlign: 'left'
}
};

var elevacionPos1 = new ApexCharts(document.querySelector("#elevacionPos1"), optionselevacionPos1);
elevacionPos1.render();
// FIN elevacionPos Grafico










// elevacionPos Grafico  
var optionselevacionPos2 = {
  colors: ["#ffab00"],
  series: [{
  name: "STOCK ABC",
  data: [31, 40, 28, 51, 42, 109, 100]
}],
  chart: {
  type: 'area',
  height: 350,
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'straight',
  width: 2
},
xaxis: {
  type: 'datetime',
  categories: ["2018-09-19", "2018-09-20", "2018-09-21", "2018-09-22", "2018-09-23", "2018-09-24"],
  labels:{
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  }
  },
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  },
  tooltip: {
    enabled: false
  }
},
yaxis: {
  opposite: true,
  labels:{      
    style:{
    colors:['#cbcbe2']
  }
  }
},
legend: {
  horizontalAlign: 'left'
}
};

var elevacionPos2 = new ApexCharts(document.querySelector("#elevacionPos2"), optionselevacionPos2);
elevacionPos2.render();
// FIN elevacionPos Grafico










// elevacionPos Grafico  
var optionselevacionPos3 = {
  colors: ["#ff3e1d"],
  series: [{
  name: "STOCK ABC",
  data: [31, 40, 28, 51, 42, 109, 100]
}],
  chart: {
  type: 'area',
  height: 350,
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'straight',
  width: 2
},
xaxis: {
  type: 'datetime',
  categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
  labels:{
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  }
  },
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  },
  tooltip: {
    enabled: false
  }
},
yaxis: {
  opposite: true,
  labels:{      
    style:{
    colors:['#cbcbe2']
  }
  }
},
legend: {
  horizontalAlign: 'left'
}
};

var elevacionPos3 = new ApexCharts(document.querySelector("#elevacionPos3"), optionselevacionPos3);
elevacionPos3.render();
// FIN elevacionPos Grafico










// barrasHoriTxZona
var optionsbarrasHoriTxZona1 = {
  series: [{
  name: 'Horas',  
  data: [400, 430, 448, 470, 540, 580]
}],
  chart: {
  type: 'bar',
  height: 350
},
plotOptions: {
  bar: {
    barHeight: '75%',
    borderRadius: 7,
    distributed: true,
    horizontal: true,
    dataLabels: {
      position: 'bottom'
    },
  }
},
colors: ['#007bff', '#4bc0c0', '#9bcb3b', '#ffab00', '#ff3e1d', '#6610f2'],
dataLabels: {
  enabled: true,
  textAnchor: 'start',
  style: {
    fontSize: '14px',
    colors: ['#fff']
  },
  formatter: function (val, opt) {
    return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val + " hr"
  },
  offsetX: 0,
  dropShadow: {
    enabled: false
  }
},
stroke: {
  width: 2,
  colors: ['transparent']
},
xaxis: {
  categories: ['Zona 1', 'Zona 2', 'Zona 3', 'Zona 4', 'Zona 5', 'Zona 6'],
  labels:{
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  }
  } 
},
yaxis: {
  labels: {
    show: false
  }
},
tooltip: {
  theme: 'dark',
  x: {
    show: false
  },
  y: {
    title: {
      formatter: function () {
        return ''
      }
    }
  }
},
legend: {  
  show:true,
  position: 'bottom', 
  horizontalAlign: 'center',
  labels:{
    colors: '#fff',
    useSeriesColors: true
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
};

var barrasHoriTxZona1 = new ApexCharts(document.querySelector("#barrasHoriTxZona1"), optionsbarrasHoriTxZona1);
barrasHoriTxZona1.render();
// FIN barrasHoriTxZona









// barrasHoriTxZona
var optionsbarrasHoriTxZona2 = {
  series: [{
  name: 'Horas',  
  data: [400, 430, 448, 470, 540, 580]
}],
  chart: {
  type: 'bar',
  height: 350
},
plotOptions: {
  bar: {
    barHeight: '75%',
    borderRadius: 7,
    distributed: true,
    horizontal: true,
    dataLabels: {
      position: 'bottom'
    },
  }
},
colors: ['#007bff', '#4bc0c0', '#9bcb3b', '#ffab00', '#ff3e1d', '#6610f2'],
dataLabels: {
  enabled: true,
  textAnchor: 'start',
  style: {
    fontSize: '14px',
    colors: ['#fff']
  },
  formatter: function (val, opt) {
    return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val + " hr"
  },
  offsetX: 0,
  dropShadow: {
    enabled: false
  }
},
stroke: {
  width: 2,
  colors: ['transparent']
},
xaxis: {
  categories: ['Zona 1', 'Zona 2', 'Zona 3', 'Zona 4', 'Zona 5', 'Zona 6'],
  labels:{
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  }
  } 
},
yaxis: {
  labels: {
    show: false
  }
},
tooltip: {
  theme: 'dark',
  x: {
    show: false
  },
  y: {
    title: {
      formatter: function () {
        return ''
      }
    }
  }
},
legend: {  
  show:true,
  position: 'bottom', 
  horizontalAlign: 'center',
  labels:{
    colors: '#fff',
    useSeriesColors: true
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
};

var barrasHoriTxZona2 = new ApexCharts(document.querySelector("#barrasHoriTxZona2"), optionsbarrasHoriTxZona2);
barrasHoriTxZona2.render();
// FIN barrasHoriTxZona









// barrasHoriTxZona
var optionsbarrasHoriTxZona3 = {
  series: [{
  name: 'Horas',  
  data: [400, 430, 448, 470, 540, 580]
}],
  chart: {
  type: 'bar',
  height: 350
},
plotOptions: {
  bar: {
    barHeight: '75%',
    borderRadius: 7,
    distributed: true,
    horizontal: true,
    dataLabels: {
      position: 'bottom'
    },
  }
},
colors: ['#007bff', '#4bc0c0', '#9bcb3b', '#ffab00', '#ff3e1d', '#6610f2'],
dataLabels: {
  enabled: true,
  textAnchor: 'start',
  style: {
    fontSize: '14px',
    colors: ['#fff']
  },
  formatter: function (val, opt) {
    return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val + " hr"
  },
  offsetX: 0,
  dropShadow: {
    enabled: false
  }
},
stroke: {
  width: 2,
  colors: ['transparent']
},
xaxis: {
  categories: ['Zona 1', 'Zona 2', 'Zona 3', 'Zona 4', 'Zona 5', 'Zona 6'],
  labels:{
    style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
  }
  } 
},
yaxis: {
  labels: {
    show: false
  }
},
tooltip: {
  theme: 'dark',
  x: {
    show: false
  },
  y: {
    title: {
      formatter: function () {
        return ''
      }
    }
  }
},
legend: {  
  show:true,
  position: 'bottom', 
  horizontalAlign: 'center',
  labels:{
    colors: '#fff',
    useSeriesColors: true
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
};

var barrasHoriTxZona3 = new ApexCharts(document.querySelector("#barrasHoriTxZona3"), optionsbarrasHoriTxZona3);
barrasHoriTxZona3.render();
// FIN barrasHoriTxZona









//RadialBarChart
var optionsRadialBarChart1 = {
  colors: ['#007bff', '#9bcb3b', '#ffab00', '#ff3e1d'],
  series: [44, 55, 68, 83],
  chart: {
  height: 250,
  type: 'radialBar',
},
plotOptions: {
  radialBar: {
    dataLabels: {
      name: {
        fontSize: '16px',
        offsetY: -6
      },
      value: {
        fontSize: '20px',
        fontWeight: '700',
        color: '#cbcbe2',
        offsetY: 10
      },
      total: {
        show: true,
        label: 'Total',
        color: '#cbcbe2',
        fontSize: '16px',
        formatter: function (w) {
          return 250
        }
      }
    }
  }
},
labels: ['Resistencia', 'Oranges', 'Bananas', 'Berries'],
};

var RadialBarChart1 = new ApexCharts(document.querySelector("#RadialBarChart1"), optionsRadialBarChart1);
RadialBarChart1.render();
//FIN RadialBarChart






//RadialBarChart
var optionsRadialBarChart2 = {
  colors: ['#4bc0c0', '#9bcb3b', '#ffab00', '#ff3e1d'],
  series: [44, 55, 68, 83],
  chart: {
  height: 250,
  type: 'radialBar',
},
plotOptions: {
  radialBar: {
    dataLabels: {
      name: {
        fontSize: '16px',
        offsetY: -6
      },
      value: {
        fontSize: '20px',
        fontWeight: '700',
        color: '#cbcbe2',
        offsetY: 10
      },
      total: {
        show: true,
        label: 'Total',
        color: '#cbcbe2',
        fontSize: '16px',
        formatter: function (w) {
          return 250
        }
      }
    }
  }
},
labels: ['Resistencia', 'Oranges', 'Bananas', 'Berries'],
};

var RadialBarChart2 = new ApexCharts(document.querySelector("#RadialBarChart2"), optionsRadialBarChart2);
RadialBarChart2.render();
//FIN RadialBarChart






//RadialBarChart
var optionsRadialBarChart3 = {
  colors: ['#9bcb3b', '#ffab00', '#ff3e1d', '#6610f2'],
  series: [44, 55, 68, 83],
  chart: {
  height: 250,
  type: 'radialBar',
},
plotOptions: {
  radialBar: {
    dataLabels: {
      name: {
        fontSize: '16px',
        offsetY: -6
      },
      value: {
        fontSize: '20px',
        fontWeight: '700',
        color: '#cbcbe2',
        offsetY: 10
      },
      total: {
        show: true,
        label: 'Total',
        color: '#cbcbe2',
        fontSize: '16px',
        formatter: function (w) {
          return 250
        }
      }
    }
  }
},
labels: ['Resistencia', 'Oranges', 'Bananas', 'Berries'],
};

var RadialBarChart3 = new ApexCharts(document.querySelector("#RadialBarChart3"), optionsRadialBarChart3);
RadialBarChart3.render();
//FIN RadialBarChart