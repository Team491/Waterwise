//national
(function(){
    
    var myChart = echarts.init(document.getElementById("National"));
            
            var data1 = [
                { name: '河北', value: 3314 },
                { name: '山西', value: 1823 },
                { name: '江西', value: 1019 },
                { name: '湖南', value: 1431 },
                { name: '贵州', value: 1174 },
                { name: '福建', value: 1856 },
                { name: '甘肃', value: 1095 },
                { name: '云南', value: 1529 },
                { name: '广西', value: 1308 },
                { name: '湖北', value: 1657 },
                { name: '西藏', value: 34 },
                { name: '宁夏', value: 849 },
                { name: '新疆', value: 1900 },
                { name: '青海', value: 723 },
                { name: '内蒙古', value: 2417 },
                { name: '天津', value: 794 },
                { name: '海南', value: 252 },
                { name: '辽宁', value: 2039 }
                        ];

            var data2 = [

                { name: '安徽', value: 1585 },
                { name: '山东', value: 4223 },
                { name: '江苏', value: 5013 },
                { name: '浙江', value: 3506 },
                { name: '陕西', value: 1226 },
                { name: '四川', value: 2015 },
                { name: '重庆', value: 867 },
                { name: '吉林', value: 668 },
                { name: '黑龙江', value: 859 },
                { name: '河南', value: 2920 }
                        ];

            var data3 = [
                 { name: '广东', value: 5235 },
                 { name: '上海', value: 1369 },
                 { name: '北京', value: 937 }
                        ];

            var geoCoordMap = {
                '西藏': [91.11, 29.97],
                '上海': [121.48, 31.22],
                '福建': [119.3, 26.08],
                '广西': [108.33, 22.84],
                '山西': [112.53, 37.87],
                '云南': [102.73, 25.04],
                '辽宁': [123.38, 41.8],
                '吉林': [125.35, 43.88],
                '宁夏': [106.27, 38.47],
                '江西': [115.89, 28.68],
                '青海': [101.74, 36.56],
                '内蒙古': [111.65, 40.82],
                '四川': [104.06, 30.67],
                '陕西': [108.95, 34.27],
                '重庆': [106.54, 29.59],
                '江苏': [118.78, 32.04],
                '贵州': [106.71, 26.57],
                '北京': [116.46, 39.92],
                '新疆': [87.68, 43.77],
                '浙江': [120.19, 30.26],
                '山东': [117, 36.65],
                '甘肃': [103.73, 36.03],
                '天津': [117.2, 39.13],
                '河南': [113.65, 34.76],
                '黑龙江': [126.63, 45.75],
                '河北': [114.48, 38.03],
                '湖南': [113, 28.21],
                '安徽': [117.27, 31.86],
                '广东': [113.23, 23.16],
                '海南': [110.23, 20.02],
                '湖北': [114.31, 30.52]

            };

            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            };

            var option = {
                backgroundColor: '#404a59',
                title: {
                    text: '全国社会用电量',
                    subtext:'2017年9月',
                    left: 'center',
                    textStyle: {
                        color: '#e0e6ef'
                    }
                },
                tooltip: {
                    trigger: 'item'
                },
                geo: {
                    map: 'china',
                    label: {
                    emphasis: {
                    show: false
                                }
                                },
                    roam: true,
                    layoutCenter: ['50%', '50%'],
                    layoutSize:"130%",
                    itemStyle: {
                    normal: {
                    color: 'rgba(51, 69, 89, .5)',
                    borderColor: 'rgba(100,149,237,1)'
                                    },
                    emphasis: {
                    color: 'rgba(37, 43, 61, .5)'
                                }
                            }
                    },
                series: [
                    {
                        name: '低负荷',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(data1),
                        symbolSize: 10,
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        //地图上显示的文字
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'top',
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#4acdae',
                                shadowBlur: 10,
                                shadowColor: 'black'
                            }
                        },
                        zlevel: 1
                    }, {
                        name: '中负荷',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(data2),
                        symbolSize: 15,
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'top',
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#ffcc00',
                                shadowBlur: 10,
                                shadowColor: 'black'
                            }
                        },
                        zlevel: 1
                    },
                    {
                        name: '高负荷',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(data3),
                        symbolSize: 20,
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'top',
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#ff3300',
                                shadowBlur: 10,
                                shadowColor: 'black'
                            }
                        },
                        zlevel: 1
                    }
                ]
            };


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
})();