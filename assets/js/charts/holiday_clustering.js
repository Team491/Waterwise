(function(){
	 var myChart = echarts.init(document.getElementById('chunjie'));

option = {
    
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['第一类','第二类','第三类','第四类','第五类','第六类','第七类','第八类','第九类']
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

	"2014/1/25",
		   "2014/1/26",	"2014/1/27",	"2014/1/28",	"2014/1/29",	"2014/1/30",	
		   "2014/1/31","2014/2/1",	"2014/2/2"	,"2014/2/3"	,"2014/2/4",	"2014/2/5",
        	 "2014/2/6"
   
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
data:[9.260106776,9.089648785,9.689197558,9.590493817,11.58814816,8.338024703,6.204753088,5.24345679,5.558024694,8.379074064,10.1152469,17.10228399,17.40030865]
	  
},
{
symbol: 'none',
name:'第二类',
type:'line',
stack: '总量',
data:[1.823168495,1.64981685,1.533369965,1.411666664,1.280515566,1.158904575,1.084761901,1.096556772,1.034871795,1.111336999,1.100421244,1.196776556,1.409120877]
},
{
symbol: 'none',
name:'第三类',
type:'line',
stack: '总量',

data:[11.3546237,11.12580641,11.09860214,9.51548389,7.57548385,4.863548402,2.548279563,1.740322584,1.813978491,1.944946224,2.016881715,2.781075278,5.025806437]
},
{
symbol: 'none',
name:'第四类',
type:'line',
stack: '总量',
data:[6.072339174,5.763859648,5.429883049,4.975438589,5.005731007,3.449415193,2.950409353,2.661111108,2.75017545,3.611754391,5.410877201,10.67181288,14.22602337]
},
{
symbol: 'none',
name:'第五类',
type:'line',
stack: '总量',
data:[10.09641956,9.670025392,9.675742198,10.35015629,11.9057422,13.35699218,9.991093726,9.30906248,9.353476547,10.15003907,10.34957031,10.53703128,11.39746092]
 },
 {
symbol: 'none',
name:'第六类',
type:'line',
stack: '总量',
data:[6.072339174,5.763859648,5.429883049,4.975438589,5.005731007,3.449415193,2.950409353,2.661111108,2.75017545,3.611754391,5.410877201,10.67181288,14.22602337]
},
{
symbol: 'none',
name:'第七类',
type:'line',
stack: '总量',
data:[6.072339174,5.763859648,5.429883049,4.975438589,5.005731007,3.449415193,2.950409353,2.661111108,2.75017545,3.611754391,5.410877201,10.67181288,14.22602337]
},
{
symbol: 'none',
name:'第八类',
type:'line',
stack: '总量',
data:[6.072339174,5.763859648,5.429883049,4.975438589,5.005731007,3.449415193,2.950409353,2.661111108,2.75017545,3.611754391,5.410877201,10.67181288,14.22602337]
},
{
symbol: 'none',
name:'第九类',
type:'line',
stack: '总量',
data:[6.072339174,5.763859648,5.429883049,4.975438589,5.005731007,3.449415193,2.950409353,2.661111108,2.75017545,3.611754391,5.410877201,10.67181288,14.22602337]
}


]
};

myChart.setOption(option);
})();

(function(){
	 var myChart = echarts.init(document.getElementById('wuyi'));

option = {
    title: {
        text: '五一'
    },
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

(function(){
	 var myChart = echarts.init(document.getElementById('national'));

option = {
    title: {
        text: '国庆节'
    },
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









