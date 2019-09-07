//折线图堆叠

(function(){
	
	var day = echarts.init(document.getElementById("day"));
	
	option = {
    title: {
        text: '2017/9/16用电量分布',
        subtext: ''
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['0:00', '0:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30', '5:00', '5:30', '6:00', '6:30', '7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} kW·h'
        },
        axisPointer: {
            snap: true
        }
    },
    visualMap: {
        show: false,
        dimension: 0,
        pieces: [{
            lte: 14,
            color: 'green'
        }, {
            gt: 14,
            lte: 18,
            color: 'red'
        }, {
            gt: 18,
            lte: 36,
            color: 'green'
        }, {
            gt: 36,
            lte: 44,
            color: 'red'
        }, {
            gt: 44,
            color: 'green'
        }]
    },
    series: [
        {
            name:'用电量',
            type:'line',
            smooth: true,
            data: [0.017, 0.103, 0.022, 0.017, 0.086, 0.037, 0.017, 0.071, 0.054, 0.017, 0.052, 0.072, 0.017, 0.035, 0.16, 0.19, 0.26, 0.31, 0.177, 0.156, 0.082, 0.018, 0.017, 0.089, 0.033, 0.017, 0.077, 0.045, 0.017, 0.066, 0.057, 0.017, 0.05, 0.074, 0.017, 0.035, 0.176, 0.24, 0.31, 0.35, 0.42, 0.53, 0.31, 0.28, 0.062, 0.12, 0.098, 0.064, 0.017],
            markArea: {
                data: [ [{
                    name: '早高峰',
                    xAxis: '7:00'
                }, {
                    xAxis: '9:00'
                }], [{
                    name: '晚高峰',
                    xAxis: '18:00'
                }, {
                    xAxis: '22:00'
                }] ]
            }
        }
    ]
};


day.setOption(option);
})();