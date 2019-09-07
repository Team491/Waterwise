/*----------------------柱状图-----------------------*/
//坐标轴刻度与标签对齐






(function(){
	
var T1 = echarts.init(document.getElementById("T1"));
option = {
    title : {
        text: '能耗占比',
        
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
            data: [{value: 54, name: '比率'}]
        }
    ]
};

setInterval(function () {
    option.series[0].data[0].value = 54 - 0;
    myChart.setOption(option, true);
},2000);

T1.setOption(option);
})();



//堆叠条形图
(function(){

var columnar2 = echarts.init(document.getElementById("columnar2"));

option = {
     title: {
		text: "2017.8邻里对比",
		x:'left'
	},
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: "{c}%"
    },
   
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['你','最高效邻居','平均量']
        }
    ],
    yAxis : [
        {
            type : 'value',
             show : false,
            name:'变化率 (%)',
            nameTextStyle: {
                //color: '#fff',
                fontSize: 16
            },
            axisLine: {
                lineStyle: {
                    color: '#c050',
                }
            },
        }
    ],
    series : [
        {
            name:'蒸发量',
            type:'bar',
            data:[128, 180, 246],
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                         
                         
                           '#9BCA63','#26C0C0','#27727B'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}'
                    }
                }
            }
        },
    ]
}; 
columnar2.setOption(option);
})();


//正负条形图
(function(){
	
var columnar3 = echarts.init(document.getElementById("columnar3"));

option = {
  title: {
		text: "2017.8用电量统计",
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
                formatter: '{value} KW·h'
            }
        }
    ],
    series : [
       
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            itemStyle: {normal: {areaStyle: {type: 'K·Wh'}}},
            data:[5.3, 2.98, 11.97, 14.45, 5.71, 21.24, 6.88, 3.96, 5.98, 2.69, 5.02, 5.48, 5.55, 3.38, 2.75, 4.24, 2.83, 4.01, 1.82, 2.82, 2.54, 3.81, 7.02, 5.29, 7.05, 3.86, 4.51, 3.79, 3.68, 4.34, 3.72]
        }
    ]
};

columnar3.setOption(option);
})();


//折柱混合
(function(){
	
var columnar4 = echarts.init(document.getElementById("columnar4"));

option = {
    title : {
        text: '周末用电量占比',
        subtext: '',
        x:'leftr'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
   
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
       
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 110],
            
            roseType : 'area',
            data:[
                {value:25.4, name:'第一周'},
                {value:18.6, name:'第二周'},
                {value:12, name:'第三周'},
                {value:34, name:'第四周'}
            
            ]
        }
    ]
};


columnar4.setOption(option);
})();



(function(){
	
var columnar5 = echarts.init(document.getElementById("columnar5"));
var timeData = [
    '2017.8.1', '2017.8.2', '2017.8.3', '2017.8.4', '2017.8.5', '2017.8.6', '2017.8.7', '2017.8.8', '2017.8.9', '2017.8.10', '2017.8.11', '2017.8.12', '2017.8.13', '2017.8.14', '2017.8.15', '2017.8.16', '2017.8.17', '2017.8.18', '2017.8.19', '2017.8.20', '2017.8.21', '2017.8.22', '2017.8.23', '2017.8.24', '2017.8.25', '2017.8.26', '2017.8.27', '2017.8.28', '2017.8.29', '2017.8.30', '2017.8.31'];

timeData = timeData.map(function (str) {
    return str.replace('2009/', '');
});

option = {
    title: {
        text: '用电量、温度关系图',
        subtext: '数据来自江苏省电力公司',
        x: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        }
    },
    legend: {
        data:['用电量','温度'],
        x: 'left'
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    axisPointer: {
        link: {xAxisIndex: 'all'}
    },
    dataZoom: [
        {
            show: true,
            realtime: true,
            start: 30,
            end: 70,
            xAxisIndex: [0, 1]
        },
        {
            type: 'inside',
            realtime: true,
            start: 30,
            end: 70,
            xAxisIndex: [0, 1]
        }
    ],
    grid: [{
        left: 50,
        right: 50,
        height: '35%'
    }, {
        left: 50,
        right: 50,
        top: '55%',
        height: '35%'
    }],
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: timeData
        },
        {
            gridIndex: 1,
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: timeData,
            position: 'top'
        }
    ],
    yAxis : [
        {
            name : '用电量(kW·h)',
            type : 'value',
            max : 25
        },
        {
            gridIndex: 1,
            name : '温度(C)',
            type : 'value',
            inverse: true
        }
    ],
    series : [
        {
            name:'用电量',
            type:'line',
            symbolSize: 8,
            hoverAnimation: false,
            data:[
               13.04, 8.52, 15.39, 19.86, 8.73, 4.25, 8.59, 3.93, 6.59, 8.38, 8.32, 8.41, 6.71, 6.48, 5.66, 8.98, 6.38, 6.43, 5.32, 5.18, 6.53, 7.29, 8.97, 10.2, 8.24, 6.75, 6.94, 5.11, 4.57, 6.24, 9.09 ]
        },
        {
            name:'温度',
            type:'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 8,
            hoverAnimation: false,
            data: [
                30, 30, 34, 36, 36, 35, 31, 26, 27, 27, 28, 28, 23, 24, 29, 28, 25, 25, 28, 28, 30, 31, 31, 28, 29, 29, 23, 24, 26, 26, 24 ]
        }
    ]
};
columnar5.setOption(option);
})();