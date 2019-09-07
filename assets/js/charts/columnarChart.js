/*----------------------柱状图-----------------------*/
//坐标轴刻度与标签对齐



//折柱混合
(function(){
	
var columnar4 = echarts.init(document.getElementById("columnar4"));

option = {
    title : {
        text: '',
        subtext: '',
        x:'leftr'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
   
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
       
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 110],
            
            roseType : 'area',
            data:[
                {value:25.4, name:'Week1'},
                {value:18.6, name:'Week2'},
                {value:12, name:'Week3'},
                {value:34, name:'Week4'}
            
            ]
        }
    ]
};


columnar4.setOption(option);
})();