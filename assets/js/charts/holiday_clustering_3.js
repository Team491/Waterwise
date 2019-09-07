(function(){
	 var myChart = echarts.init(document.getElementById('national'));

option = {
    
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['第一类','第二类','第三类','第四类','第五类','第六类']
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

	"2014/9/30","2014/10/1","2014/10/2"	,"2014/10/3","2014/10/4","2014/10/5", "2014/10/6",	"2014/10/7",	"2014/10/8"
   
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
data:[3.758431846,3.586296743,3.453534379,3.416212304,3.442424608,3.519610495,3.64278649,3.785783233,3.509829916]},
{
symbol: 'none',
name:'第二类',
type:'line',
stack: '总量',
data:[6.881986301,7.392363014,6.984417808,7.147636986,7.056433562,7.17667226,7.27609589,7.343434589,6.847266096]},
{
symbol: 'none',
name:'第三类',
type:'line',
stack: '总量',

data:[1.001811594,0.909516908,0.824516908,0.851642512,0.867536232,0.851835749,0.895748792,0.936805314,0.986330918]},
{
symbol: 'none',
name:'第四类',
type:'line',
stack: '总量',
data:[10.53627907,11.01860465,10.40674419,10.63116279,10.95976744,11.26581395,11.27813953,11.55857209,10.34554186]},
{
symbol: 'none',
name:'第五类',
type:'line',
stack: '总量',
data:[5.10897651,5.146825503,4.915654362,4.839110738,4.956998993,5.06820755,5.05583406,5.283039765,4.957519128]},
 {
symbol: 'none',
name:'第六类',
type:'line',
stack: '总量',
data:[2.455121065,2.348292978,2.171138015,2.125359685,2.128573487,2.189078935,2.332263559,2.591277603,2.470587288]}
 


]
};

myChart.setOption(option);
})();









