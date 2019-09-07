(function(){

var myChart = echarts.init(document.getElementById('sangji_chun_xia'));

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
						{"name": "春季第一类","itemStyle": { "normal": { "color": "#a22" }}},
						{"name": "春季第二类","itemStyle": { "normal": { "color": "green" }}},
						{"name": "春季第三类","itemStyle": { "normal": { "color": "blue" }}},
						{"name": "春季第四类","itemStyle": { "normal": { "color": "yelow" }}},
						{"name": "春季第五类","itemStyle": { "normal": { "color": "black" }}},
						{"name": "春季第六类","itemStyle": { "normal": { "color": "#a22" }}},
						{"name": "夏季第一类","itemStyle": { "normal": { "color": "#a22" }}},
						{"name": "夏季第二类","itemStyle": { "normal": { "color": "blue" }}},
						{"name": "夏季第三类","itemStyle": { "normal": { "color": "blue" }}},
						{"name": "夏季第四类","itemStyle": { "normal": { "color": "green" }}},
						{"name": "夏季第五类","itemStyle": { "normal": { "color": "#a22" }}},
						{"name": "夏季第六类","itemStyle": { "normal": { "color": "#a22" }}}
						 ],
                links: [
						  {"source": "春季第一类", "target": "夏季第一类", "value": 0.302867384},
						  {"source": "春季第一类", "target": "夏季第二类", "value": 0.007168459},
						  {"source": "春季第一类", "target": "夏季第三类", "value": 0.037634409},
						  {"source": "春季第一类", "target": "夏季第四类", "value": 0.111111111},
						  {"source": "春季第一类", "target": "夏季第五类", "value": 0.539426523},
						  {"source": "春季第一类", "target": "夏季第六类", "value": 0.001792115},
						  {"source": "春季第二类", "target": "夏季第一类", "value": 0.013986014},
						  {"source": "春季第二类", "target": "夏季第二类", "value": 0.265734266},
						  {"source": "春季第二类", "target": "夏季第三类", "value": 0.090909091},
						  {"source": "春季第二类", "target": "夏季第四类", "value": 0},
						  {"source": "春季第二类", "target": "夏季第五类", "value": 0.020979021},
						  {"source": "春季第二类", "target": "夏季第六类", "value": 0.608391608},
						  {"source": "春季第三类", "target": "夏季第一类", "value": 0.221921516},
						  {"source": "春季第三类", "target": "夏季第二类", "value": 0.213802436},
						  {"source": "春季第三类", "target": "夏季第三类", "value": 0.255751015},
						  {"source": "春季第三类", "target": "夏季第四类", "value": 0.208389716},
						  {"source": "春季第三类", "target": "夏季第五类", "value": 0.02165088},
						  {"source": "春季第三类", "target": "夏季第六类", "value": 0.078484438},
						  {"source": "春季第四类", "target": "夏季第一类", "value": 0.057416268},
						  {"source": "春季第四类", "target": "夏季第二类", "value": 0.456937799},
						  {"source": "春季第四类", "target": "夏季第三类", "value": 0.220095694},
						  {"source": "春季第四类", "target": "夏季第四类", "value": 0.031100478},
						  {"source": "春季第四类", "target": "夏季第五类", "value": 0.023923445},
						  {"source": "春季第四类", "target": "夏季第六类", "value": 0.210526316},
						  {"source": "春季第五类", "target": "夏季第一类", "value": 0.218604651},
						  {"source": "春季第五类", "target": "夏季第二类", "value": 0.144186047},
						  {"source": "春季第五类", "target": "夏季第三类", "value": 0.311627907},
						  {"source": "春季第五类", "target": "夏季第四类", "value": 0.227906977},
						  {"source": "春季第五类", "target": "夏季第五类", "value": 0.065116279},
						  {"source": "春季第五类", "target": "夏季第六类", "value": 0.03255814},
						  {"source": "春季第六类", "target": "夏季第一类", "value": 0.415318231},
						  {"source": "春季第六类", "target": "夏季第二类", "value": 0.036677454},
						  {"source": "春季第六类", "target": "夏季第三类", "value": 0.102481122},
						  {"source": "春季第六类", "target": "夏季第四类", "value": 0.332254585},
						  {"source": "春季第六类", "target": "夏季第五类", "value": 0.097087379},
						  {"source": "春季第六类", "target": "夏季第六类", "value": 0.01618123}
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

