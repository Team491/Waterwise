//province


(function(){
    
    var myChart = echarts.init(document.getElementById("Province"));
    
    var option = {  
          backgroundColor: '#404a59',
          title: {  
          text : '江苏省各地市用电负荷', 
          subtext:'2014年', 
          left: 'center',
           textStyle: {
                color: '#FFFFFF'
          }
          }, 

          
          tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c} (亿kWh)'
          },

           visualMap: {
            min: 0,
            max: 1300,
            text:['高负荷','低负荷'],
            textStyle: {
                color: '#FFFFFF'},
            realtime: false,
            calculable: true,
            inRange: {
                color: ['lightskyblue','yellow', 'orangered']
             }
            },
            
            
          series: [  
            {  
              name: '江苏省',  
                type: 'map',  
                mapType: 'jiangsu',  
                selectedMode : 'single',  
                itemStyle:{  
                    normal:{label:{show:true}},  
                    emphasis:{label:{show:true}}  
                },
                data:[
                    {name: '南京市', value: 470.50},
                    {name: '镇江市', value: 209.41},
                    {name: '常州市', value: 395.06},
                    {name: '无锡市', value: 598.18},
                    {name: '苏州市', value: 1268.12},
                    {name: '扬州市', value: 204.36},
                    {name: '泰州市', value: 232.30},
                    {name: '南通市', value: 333.23},
                    {name: '徐州市', value: 332.47},
                    {name: '淮安市', value: 151.53},
                    {name: '宿迁市', value: 146.38},
                    {name: '盐城市', value: 278.55},
                    {name: '连云港市', value: 157.51}
                ],  
            }]  
          };  
        myChart.setOption(option);
})();