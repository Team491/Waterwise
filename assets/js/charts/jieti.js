(function(){
	
	var jieti = echarts.init(document.getElementById("jieti"));
var colors = ['#5793f3','orange','black','purple'];

option = {
    color: colors,

    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
   
    grid:{
        top:80,
        left:150
    },
    xAxis: [
        {
            boundaryGap : false,
            name:'kW·h',
            splitLine:{
                show:true,
            },
            type: 'category',
            data: ['0','80','140','240','500']
        }
    ],
    yAxis: [
       
        {
            type: 'value',
            name: '单价（元/kW·h）',
            min: 0,
            max: 1.5,
            position: 'left',
            axisLine: {
                onZero: true,
                lineStyle: {
                    color: colors[3]
                }
            }
        }
    ],
    series: [
       
        {
            name:'阶梯电价',
            type:'line',
            step: 'start',
            symbol:'none',
          
            data:[0.5, 0.6, 0.8, 1.2,1.2]
        }
    ]
};

jieti.setOption(option);

})();