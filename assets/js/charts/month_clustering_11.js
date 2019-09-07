(function(){
	 var myChart = echarts.init(document.getElementById('month11_cluster_5'));

option = {
    
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['第一类中心曲线','第二类中心曲线','第三类中心曲线','第四类中心曲线','第五类中心曲线']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
       show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'line', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
	 calculable : true,
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [

"2014/11/1",	"2014/11/2"	,"2014/11/3"	,"2014/11/4",	"2014/11/5",
        	 "2014/11/6",	"2014/11/7",	"2014/11/8",	"2014/11/9"	,"2014/11/10"	,
		    "2014/11/11",	"2014/11/12",	"2014/11/13",	"2014/11/14",	"2014/11/15",	
		   "2014/11/16",	"2014/11/17",	"2014/11/18",	"2014/11/19",	"2014/11/20",	
		   "2014/11/21",	"2014/11/22",	"2014/11/23",	"2014/11/24",	"2014/11/25",
		   "2014/11/26",	"2014/11/27",	"2014/11/28",	"2014/11/29",	"2014/11/30"
		 
   
              ]  
    },
    yAxis: {
        type: 'value'
    },
    series : [
	
      {
symbol: 'none',
name:'第一类中心曲线',
type:'line',
stack: '总量',
data:[1.580778267,1.463318649,1.373759178,1.34753304,1.336020558,1.337988253,1.385859031,1.483864464,1.448423789,1.360266814,1.352711013,1.318665786,1.312555066,1.326182085,1.388002937,1.385007342,1.294684288,1.29123348,1.297444934,1.348281938,1.322630543,1.42418649,1.43788649,1.352709251,1.352662702,1.343744934,1.350015125,1.443201615,1.566373421,1.563245668]
},
{
symbol: 'none',
name:'第二类中心曲线',
type:'line',
stack: '总量',

data:[7.32525,7.26435,6.530375,6.714125,6.7744,6.842625,6.89749275,7.63519175,7.98061225,7.3287855,7.22523325,7.3673,7.2178,7.249325,7.826925,8.05158225,7.32563325,7.26165,7.621775,7.444275,7.180675,7.61175,7.85185,7.4123465,7.51724175,7.59317575,7.42696875,7.682845,8.25504025,8.99109225]
},
{
symbol: 'none',
name:'第三类中心曲线',
type:'line',
stack: '总量',

data:[3.447344045,3.31010397,2.983402647,2.949971645,3.003100189,2.981030246,2.99859707,3.306072401,3.438846597,3.197455104,3.155437051,3.127967864,3.089234405,3.130340926,3.374166635,3.417124764,3.107967864,3.118395936,3.17920293,3.111635161,3.109099338,3.357763043,3.481219282,3.320274102,3.293128544,3.211427221,3.352230624,3.336273251,3.640269376,3.939062382]
},
{
symbol: 'none',
name:'第四类中心曲线',
type:'line',
stack: '总量',
data:[10.13946429,10.56053571,10.07715536,9.905059821,10.39883929,9.942410714,10.13910714,10.75821429,11.73544643,11.47982143,11.02348214,11.34875,11.18803571,11.04366071,11.10383929,11.854375,11.23633929,11.54589286,11.46285714,11.41776786,10.97875,11.29,11.70821429,10.98973214,11.67071429,11.34133929,11.49705357,11.59053571,12.06339286,12.50276786]
},
{
symbol: 'none',
name:'第五类中心曲线',
type:'line',
stack: '总量',
data:[5.199893191,5.099319092,4.63046729,4.588170895,4.682857143,4.610387183,4.676421896,5.216414286,5.462583445,5.02706275,4.994192256,5.062632043,4.867948732,4.977788117,5.371411883,5.43823765,4.962643525,4.928130841,5.207036048,5.035313752,4.995674232,5.186809079,5.430761015,5.224339119,5.228266622,5.161246996,5.178571429,5.356328438,5.64100721,6.195880374]
}
 ]
};

myChart.setOption(option);
})();