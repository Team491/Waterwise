/*----------------------sug-----------------------*/
//环形图
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
          data: ['预计节省目标', '实际节约电量'],
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
              name: '照明',
              max: 10
          }, {
              name: '电冰箱',
              max: 10
          }, {
              name: '电视机',
              max: 10
          }, {
              name: '洗衣机',
              max: 10
          }, {
              name: '空调',
              max: 10
          }]
      },
      series: [{
          name: '预算 vs 开销（Budget vs spending）',
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
              value: [5, 7, 2, 6, 5],
              name: '预计节省目标',
          }, {
              value: [2, 6, 2, 8, 6],
              name: '实际节约电量',
          }]
      }],
      color: ['#ef4b4c', '#b1eadb'],
      
  };

sug1.setOption(option);
})();


//嵌套环形图
(function(){
	
var sug2 = echarts.init(document.getElementById("sug2"));

 option = {
   
    tooltip : {
        trigger: 'axis'
    },
   
    toolbox: {
        show : true,
        feature : {
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
            data : ['电视','空调','洗衣机','插座']
        }
    ],
    yAxis : [
        {
             name : '电量(kW·h)',
            type : 'value'
        }
    ],
    series : [
       
        {
            name:'电量',
            type:'bar',
            data:[4,4,2,5],
        }
    ]
};
sug2.setOption(option);
})();

//饼状图
(function(){
	
var sug3 = echarts.init(document.getElementById("sug3"));



sug3.setOption(option);
})();


//南丁格尔玫瑰图
(function(){
	
var sug4 = echarts.init(document.getElementById("sug4"));



sug4.setOption(option);
})();