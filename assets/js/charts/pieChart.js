/*----------------------饼状图-----------------------*/
//环形图
(function(){
	
var pie1 = echarts.init(document.getElementById("pie1"));

option = {
    title : {
        text: '2016年各月用电量',
       
    },
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
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis : [
        {
             name : '用电量(kW·h)',
            type : 'value'
        }
    ],
    series : [
       
        {
            name:'降水量',
            type:'bar',
            data:[516, 400, 258, 216, 219, 249, 358, 245, 205, 215, 256, 349],
            markPoint : {
                data : [
                    {name : '年最高', value : 516, xAxis: 0, yAxis: 516},
                    {name : '年最低', value : 205, xAxis: 8, yAxis: 205}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
};

pie1.setOption(option);
})();


//嵌套环形图
(function(){
	
var pie2 = echarts.init(document.getElementById("pie2"));

option = {
    title : {
        text: '2016各季度用电情况',
       

    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:693, name:'春季'},
                {value:852, name:'夏季'},
                {value:676, name:'秋季'},
                {value:1121, name:'冬季'}
                
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
pie2.setOption(option);
})();


//饼状图
(function(){
	
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


//南丁格尔玫瑰图
(function(){
	
var pie4 = echarts.init(document.getElementById("pie4"));



pie4.setOption(option);
})();