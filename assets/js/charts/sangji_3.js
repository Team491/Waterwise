(function(){

var myChart = echarts.init(document.getElementById('sangji_xia_qiu'));

        // 指定图表的配置项和数据
        
		var option = {
       
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'sankey',
                layout: 'none',
                data: [
						{"name": "夏季第一类","itemStyle": { "normal": { "color": "#a22" }}},
						{"name": "夏季第二类","itemStyle": { "normal": { "color": "green" }}},
						{"name": "夏季第三类","itemStyle": { "normal": { "color": "blue" }}},
						{"name": "夏季第四类","itemStyle": { "normal": { "color": "yelow" }}},
						{"name": "夏季第五类","itemStyle": { "normal": { "color": "black" }}},
						{"name": "夏季第六类","itemStyle": { "normal": { "color": "#a22" }}},
						{"name": "秋季第一类","itemStyle": { "normal": { "color": "#a22" }}},
						{"name": "秋季第二类","itemStyle": { "normal": { "color": "blue" }}},
						{"name": "秋季第三类","itemStyle": { "normal": { "color": "#a22" }}},
						{"name": "秋季第四类","itemStyle": { "normal": { "color": "black" }}},
						{"name": "秋季第五类","itemStyle": { "normal": { "color": "#a22" }}},
						{"name": "秋季第六类","itemStyle": { "normal": { "color": "green" }}}
						 ],
                links: [
						  {"source": "夏季第一类", "target": "秋季第一类", "value": 0.018963338},
						  {"source": "夏季第一类", "target": "秋季第二类", "value": 0.308470291},
						  {"source": "夏季第一类", "target": "秋季第三类", "value": 0.494310999},
						  {"source": "夏季第一类", "target": "秋季第四类", "value": 0.113780025},
						  {"source": "夏季第一类", "target": "秋季第五类", "value": 0.003792668},
						  {"source": "夏季第一类", "target": "秋季第六类", "value": 0.06068268},
						  {"source": "夏季第二类", "target": "秋季第一类", "value": 0.309210526},
						  {"source": "夏季第二类", "target": "秋季第二类", "value": 0.164473684},
						  {"source": "夏季第二类", "target": "秋季第三类", "value": 0.043859649},
						  {"source": "夏季第二类", "target": "秋季第四类", "value": 0.004385965},
						  {"source": "夏季第二类", "target": "秋季第五类", "value": 0.021929825},
						  {"source": "夏季第二类", "target": "秋季第六类", "value": 0.456140351},
						  {"source": "夏季第三类", "target": "秋季第一类", "value": 0.150943396},
						  {"source": "夏季第三类", "target": "秋季第二类", "value": 0.34591195},
						  {"source": "夏季第三类", "target": "秋季第三类", "value": 0.136268344},
						  {"source": "夏季第三类", "target": "秋季第四类", "value": 0.035639413},
						  {"source": "夏季第三类", "target": "秋季第五类", "value": 0.004192872},
						  {"source": "夏季第三类", "target": "秋季第六类", "value": 0.327044025},
						  {"source": "夏季第四类", "target": "秋季第一类", "value": 0.013651877},
						  {"source": "夏季第四类", "target": "秋季第二类", "value": 0.459044369},
						  {"source": "夏季第四类", "target": "秋季第三类", "value": 0.37883959},
						  {"source": "夏季第四类", "target": "秋季第四类", "value": 0.064846416},
						  {"source": "夏季第四类", "target": "秋季第五类", "value": 0.001706485},
						  {"source": "夏季第四类", "target": "秋季第六类", "value": 0.081911263},
						  {"source": "夏季第五类", "target": "秋季第一类", "value": 0.006912442},
						  {"source": "夏季第五类", "target": "秋季第二类", "value": 0.034562212},
						  {"source": "夏季第五类", "target": "秋季第三类", "value": 0.235023041},
						  {"source": "夏季第五类", "target": "秋季第四类", "value": 0.714285714},
						  {"source": "夏季第五类", "target": "秋季第五类", "value": 0},
						  {"source": "夏季第五类", "target": "秋季第六类", "value": 0.00921659},
						  {"source": "夏季第六类", "target": "秋季第一类", "value": 0.38671875},
						  {"source": "夏季第六类", "target": "秋季第二类", "value": 0.08984375},
						  {"source": "夏季第六类", "target": "秋季第三类", "value": 0.01171875},
						  {"source": "夏季第六类", "target": "秋季第四类", "value": 0},
						  {"source": "夏季第六类", "target": "秋季第五类", "value": 0.26953125},
						  {"source": "夏季第六类", "target": "秋季第六类", "value": 0.2421875}
						  ],
				
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#61a0a8'
                    }
                },
                lineStyle: {
                    normal: {
                        curveness: 0.5,
						color: 'source',
						opacity:0.5
                    }
                }
            }
        ]
    }


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
})();
