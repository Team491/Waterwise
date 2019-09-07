(function(){
	
	var jianfeng= echarts.init(document.getElementById("jianfeng"));
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
            name:'时间',
            splitLine:{
                show:true,
            },
            type: 'category',
            data: ['0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00',]
        }
    ],
    yAxis: [
       
        {
            type: 'value',
            name: '单价（元/kW·h）',
            min: 0,
            max: 1.2,
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
          
            data:[0.5,0.5,0.5,0.5,0.5,0.5,0.7,0.7,0.7,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.8,0.8,0.8,0.8,0.8,0.5,0.5,0.5,0.5]
        }
    ]
};


jianfeng.setOption(option);

})();