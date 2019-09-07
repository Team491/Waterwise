(function(){
	 var myChart = echarts.init(document.getElementById('wuyi'));

option = {
    
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['第一类','第二类','第三类','第四类','第五类','第六类','第七类','第八类']
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

	"2014/4/30","2014/5/1",	"2014/5/2"	,"2014/5/3"	,"2014/5/4"
   
              ]  
    },
    yAxis: {
        type: 'value'
    },
    series : [
	
      {
symbol: 'none',
name:'第一类',
type:'line',
stack: '总量',
data:[2.17590983,2.594521131,2.61298533,2.569486676,2.597611036]	  
},
{
symbol: 'none',
name:'第二类',
type:'line',
stack: '总量',
data:[4.374436842,5.216581287,5.194126316,7.781353216,5.229583626]},
{
symbol: 'none',
name:'第三类',
type:'line',
stack: '总量',

data:[8.935483333,8.852878472,8.872302778,9.154922222,8.663928472]},
{
symbol: 'none',
name:'第四类',
type:'line',
stack: '总量',
data:[3.490258967,3.801061263,3.853832712,3.912492539,3.741295839]},
{
symbol: 'none',
name:'第五类',
type:'line',
stack: '总量',
data:[6.775124161,6.836017114,6.892514765,6.467433893,6.77710906] },
 {
symbol: 'none',
name:'第六类',
type:'line',
stack: '总量',
data:[5.265499095,5.047846154,5.033569231,4.584159502,4.978670814]},
{
symbol: 'none',
name:'第七类',
type:'line',
stack: '总量',
data:[1.062742266,1.241078214,1.214164488,1.20748366,1.144223965]},
{
symbol: 'none',
name:'第八类',
type:'line',
stack: '总量',
data:[12.24071522,12.03232609,12.12721087,12.71817391,11.97978043]}



]
};

myChart.setOption(option);
})();
