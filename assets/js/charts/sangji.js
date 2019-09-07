(function(){

var myChart = echarts.init(document.getElementById('sangji_dong_chun'));

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
						{"name": "冬季第一类"},//,"itemStyle": { "normal": { "color": "#a22" }}
						{"name": "冬季第二类"},//"itemStyle": { "normal": { "color": "green" }}
						{"name": "冬季第三类"},
						{"name": "冬季第四类"},
						{"name": "冬季第五类"},
						{"name": "冬季第六类"},
						{"name": "春季第一类"},
						{"name": "春季第二类"},
						{"name": "春季第三类"},
						{"name": "春季第四类"},
						{"name": "春季第五类"},
						{"name": "春季第六类"}
						 ],
                links: [
						  {"source": "冬季第一类", "target": "春季第一类", "value": 0.02443609},
						  {"source": "冬季第一类", "target": "春季第二类", "value": 0.016917293},
						  {"source": "冬季第一类", "target": "春季第三类", "value": 0.473684211},
						  {"source": "冬季第一类", "target": "春季第四类", "value": 0.272556391},
						  {"source": "冬季第一类", "target": "春季第五类", "value": 0.065789474},
						  {"source": "冬季第一类", "target": "春季第六类", "value": 0.146616541},
						  {"source": "冬季第二类", "target": "春季第一类", "value": 0.678627145},
						  {"source": "冬季第二类", "target": "春季第二类", "value": 0.003120125},
						  {"source": "冬季第二类", "target": "春季第三类", "value": 0.017160686},
						  {"source": "冬季第二类", "target": "春季第四类", "value": 0.00624025},
						  {"source": "冬季第二类", "target": "春季第五类", "value": 0.001560062},
						  {"source": "冬季第二类", "target": "春季第六类", "value": 0.293291732},
						  {"source": "冬季第三类", "target": "春季第一类", "value": 0.005235602},
						  {"source": "冬季第三类", "target": "春季第二类", "value": 0.403141361},
						  {"source": "冬季第三类", "target": "春季第三类", "value": 0.036649215},
						  {"source": "冬季第三类", "target": "春季第四类", "value": 0.246073298},
						  {"source": "冬季第三类", "target": "春季第五类", "value": 0.298429319},
						  {"source": "冬季第三类", "target": "春季第六类", "value": 0.010471204},
						  {"source": "冬季第四类", "target": "春季第一类", "value": 0.109429569},
						  {"source": "冬季第四类", "target": "春季第二类", "value": 0.002328289},
						  {"source": "冬季第四类", "target": "春季第三类", "value": 0.298020955},
						  {"source": "冬季第四类", "target": "春季第四类", "value": 0.013969732},
						  {"source": "冬季第四类", "target": "春季第五类", "value": 0.009313155},
						  {"source": "冬季第四类", "target": "春季第六类", "value": 0.5669383},
						  {"source": "冬季第五类", "target": "春季第一类", "value": 0.004357298},
						  {"source": "冬季第五类", "target": "春季第二类", "value": 0.11328976},
						  {"source": "冬季第五类", "target": "春季第三类", "value": 0.183006536},
						  {"source": "冬季第五类", "target": "春季第四类", "value": 0.409586057},
						  {"source": "冬季第五类", "target": "春季第五类", "value": 0.202614379},
						  {"source": "冬季第五类", "target": "春季第六类", "value": 0.087145969},
						  {"source": "冬季第六类", "target": "春季第一类", "value": 0.040880503},
						  {"source": "冬季第六类", "target": "春季第二类", "value": 0.003144654},
						  {"source": "冬季第六类", "target": "春季第三类", "value": 0.405660377},
						  {"source": "冬季第六类", "target": "春季第四类", "value": 0.06918239},
						  {"source": "冬季第六类", "target": "春季第五类", "value": 0.066037736},
						  {"source": "冬季第六类", "target": "春季第六类", "value": 0.41509434}
						  ],
				
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#aaa'
                    }
                },
                lineStyle: {
                    normal: {
                        curveness: 0.5,
						color: 'target'
						//opacity:0.5
                    }
                }
            }
        ]
    }


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
})();

(function(){

var myChart = echarts.init(document.getElementById('sangji_chun_xia'));

        // 指定图表的配置项和数据
        
		var option = {
        title: {
            text: '春季到夏季'
        },
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

(function(){

var myChart = echarts.init(document.getElementById('sangji_xia_qiu'));

        // 指定图表的配置项和数据
        
		var option = {
        title: {
            text: '夏季到秋季'
        },
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
