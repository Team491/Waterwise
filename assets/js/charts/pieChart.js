/*----------------------饼状图-----------------------*/
//环形图
(function(){
	
var neighbourComparing = echarts.init(document.getElementById("neighbourComparing"));
option = {
    backgroundColor:'white',
        title: {
            text: 'Neighbour Comparing',
           
            textStyle: {
                color: 'black'
            }
        },
         grid:{
            x:'4%',
        },
        xAxis: [{
            name:'t',
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
            position: 'right',
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
            data: ['Yuou','Wenbo','Lei','Zeo','Wenye','Hanying'],
            
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
            data: [2.58,2.0,1.29, 1.08, 1.05, 1.25]
        }]
    };

neighbourComparing.setOption(option);
})();
