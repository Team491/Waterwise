(function(){
	
var columnar3 = echarts.init(document.getElementById("columnar3"));

option = {
  title: {
		text: "Your water usage statistics",
		x:'left'
	},
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['2017.8.1', '2017.8.2', '2017.8.3', '2017.8.4', '2017.8.5', '2017.8.6', '2017.8.7', '2017.8.8', '2017.8.9', '2017.8.10', '2017.8.11', '2017.8.12', '2017.8.13', '2017.8.14', '2017.8.15', '2017.8.16', '2017.8.17', '2017.8.18', '2017.8.19', '2017.8.20', '2017.8.21', '2017.8.22', '2017.8.23', '2017.8.24', '2017.8.25', '2017.8.26', '2017.8.27', '2017.8.28', '2017.8.29', '2017.8.30', '2017.8.31']
        }
    ],
    yAxis : [
        {
            type : 'value',
          axisLabel : {
                formatter: '{value} t'
            }
        }
    ],
    series : [
       
        {
            name:'Comsumption Amount',
            type:'line',
            stack: '',
            itemStyle: {normal: {areaStyle: {type: 'Comsumption Amount'}}},
            data:[5.3, 2.98, 11.97, 14.45, 5.71, 21.24, 6.88, 3.96, 5.98, 2.69, 5.02, 5.48, 5.55, 3.38, 2.75, 4.24, 2.83, 4.01, 1.82, 2.82, 2.54, 3.81, 7.02, 5.29, 7.05, 3.86, 4.51, 3.79, 3.68, 4.34, 3.72]
        }
    ]
};

columnar3.setOption(option);
})();


(function(){
	
var sug1 = echarts.init(document.getElementById("sug1"));

   var option = {
      tooltip: {},
      legend: {
          top: 20,
          itemWidth: 12,
          itemHeight: 12,
          orient: 'vertical',
          left: 'right',
          data: ['Expect Savage Goal', 'Actual Savage'],
          textStyle: {
              color: 'black'
          }
      },
      radar: {
          radius: '50%',
          splitNumber: 8,
          axisLine: {
              lineStyle: {
                  color: 'black',
                  opacity: .2
              }
          },
          splitLine: {
              lineStyle: {
                  color: 'black',
                  opacity: .2
              }
          },
          splitArea: {
              areaStyle: {
                  color: 'rgba(127,95,132,.3)',
                  opacity: 1,
                  shadowBlur: 45,
                  shadowColor: 'rgba(0,0,0,.5)',
                  shadowOffsetX: 0,
                  shadowOffsetY: 15,
              }
          },
          indicator: [{
              name: 'Laundry Machine',
              max: 100
          }, {
              name: 'Tap in Kitchen',
              max: 100
          }, {
              name: 'Tap in Balcony',
              max: 100
          }, {
              name: 'Dish Washer',
              max: 100
          }, {
              name: 'Tap in Bashroom',
              max: 100
          }]
      },
      series: [{
          name: 'Goal vs spending',
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
              normal: {
                  shadowBlur: 13,
                  shadowColor: 'rgba(0,0,0,.2)',
                  shadowOffsetX: 0,
                  shadowOffsetY: 10,
                  opacity: 1
              }
          },
          data: [{
              value: [50, 70, 12, 61, 15],
              name: 'Expect Savage Goal',
          }, {
              value: [28, 68, 20, 85, 12],
              name: 'Actual Savage',
          }]
      }],
      color: ['#ef4b4c', '#b1eadb'],
      
  };

sug1.setOption(option);
})();
(function(){


(function(){

var T1 = echarts.init(document.getElementById("T1"));
option = {
    title : {
        text: 'Comsumption Evaluation',
        
    },
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
        
    series: [
        {
            name: '',
            type: 'gauge',
            detail: {formatter:'{value}%'},
            data: [{value: 54, name: ''}]
        }
    ]
};

setInterval(function () {
    option.series[0].data[0].value = 54 - 0;
    myChart.setOption(option, true);
},2000);

T1.setOption(option);
})();
        

var pie3 = echarts.init(document.getElementById("pie3"));

option = {
    backgroundColor:'white',
        title: {
            text: '各月电费',
           
            textStyle: {
                color: 'black'
            }
        },
         grid:{
            x:'4%',
         /*x2:'80%',
            y2:'1%'*/
        },
        xAxis: [{
            
            name:'单位：元',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'bottom',
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'black',
                    fontSize: 12,
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#57617f',
                    width: 1,
                    type: 'solid',
                },
            },
        }],
        yAxis: [{
             
            type: 'value',
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'black',
                    fontSize: 12,
                },
            },
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            
        } ],
        series: [{
            type: 'bar',
            name:'信任销售',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            itemStyle:{
                 normal: {
                    color: '#e68b55',
                    barBorderRadius: [0, 18, 18, 0],

                },
            },
            data: [258,200,129, 108, 109.5, 124.5, 179, 122.5, 102.5, 107.5, 128, 174.5]
        }]
    };

pie3.setOption(option);
})();
