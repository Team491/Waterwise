(function(){
	 var myChart = echarts.init(document.getElementById('winter_cluster_9'));

option = {
    title: {
        text: '冬季'
    },
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
           // dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line' ,'line', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
	 calculable : true,
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
"2014/1/1",	"2014/1/2"	,"2014/1/3"	,"2014/1/4",	"2014/1/5",
        	 "2014/1/6",	"2014/1/7",	"2014/1/8",	"2014/1/9"	,"2014/1/10"	,
		    "2014/1/11",	"2014/1/12",	"2014/1/13",	"2014/1/14",	"2014/1/15",	
		   "2014/1/16",	"2014/1/17",	"2014/1/18",	"2014/1/19",	"2014/1/20",	
		   "2014/1/21",	"2014/1/22",	"2014/1/23",	"2014/1/24",	"2014/1/25",
		   "2014/1/26",	"2014/1/27",	"2014/1/28",	"2014/1/29",	"2014/1/30",	
		   "2014/1/31",
"2014/2/1",	"2014/2/2"	,"2014/2/3"	,"2014/2/4",	"2014/2/5",
        	 "2014/2/6",	"2014/2/7",	"2014/2/8",	"2014/2/9"	,"2014/2/10"	,
		    "2014/2/11",	"2014/2/12",	"2014/2/13",	"2014/2/14",	"2014/2/15",	
		   "2014/2/16",	"2014/2/17",	"2014/2/18",	"2014/2/19",	"2014/2/20",	
		   "2014/2/21",	"2014/2/22",	"2014/2/23",	"2014/2/24",	"2014/2/25",
		   "2014/2/26",	"2014/2/27",	"2014/2/28"	
   
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
data:[5.341132639,4.208102016,4.209220564,5.152639504,5.129830651,4.359551622,4.746439116,5.553946779,5.290820974,5.321667327,6.6348504,6.267290332,5.858661313,5.727209681,5.543275415,5.201612889,5.235771782,6.200258048,6.379467744,5.542491929,5.699891138,6.13529356,5.663383084,5.11729193,5.472483471,5.314825795,5.316392741,5.22040321,6.405322586,5.782862892,4.447661292,4.056895175,3.934879035,5.417983876,6.275645169,8.904758058,10.64383062,12.27354842,12.59213708,14.43979836,13.56225805,12.89431451,12.04705645,11.82548387,10.18052421,8.7256855,10.1530645,8.895086307,10.77606852,9.137435478,7.436167771,7.02367821,6.182132657,5.804323779,5.213096767,5.373987895,5.284215729,5.052638299,5.544530256]
},
{
symbol: 'none',
name:'第二类',
type:'line',
stack: '总量',
data:[1.759786868,1.71976667,1.62649394,1.776514142,1.704212929,1.559156561,1.592772929,1.606222224,1.582964646,1.594240806,1.74602828,1.676151513,1.670712931,1.618915147,1.587333536,1.558458385,1.596510913,1.733832323,1.672343433,1.582762627,1.615601414,1.601681207,1.562471918,1.545722022,1.641878784,1.579595957,1.520262626,1.565959594,1.710487875,1.817822014,1.643575752,1.569535352,1.446969703,1.519454549,1.561676765,1.726909088,1.690585854,1.678323237,1.660080808,1.709474748,1.650741614,1.720370304,1.631751716,1.698030301,1.68725253,1.677367875,1.738404041,1.780795959,1.937516767,1.77094364,1.705723634,1.770383433,1.74540788,1.753236362,1.645718987,1.675861008,1.653667676,1.696502218,1.771372319]
},
{
symbol: 'none',
name:'第三类',
type:'line',
stack: '总量',
data:[9.816448328,8.334730677,7.994897348,9.573264015,9.496597342,8.51309734,8.826583024,9.570192023,9.93683065,9.692023339,10.94528164,11.17237064,10.4920277,10.52043736,10.49216966,10.01700802,9.246002342,11.00559901,10.93755334,10.05173334,10.2726,10.33033331,9.610400001,9.253928658,9.675002365,9.304298654,9.378800008,9.726800026,11.77233334,10.96163334,8.337666665,7.676499992,8.183899979,9.142066668,9.783033335,12.51803335,13.53476669,14.18413331,14.22750002,16.33359998,15.38710004,14.68953334,14.73320001,14.71259997,12.5396,11.99733336,13.13056671,12.20816666,14.02589999,12.69276668,11.81083333,10.50336666,9.976395338,9.650016653,8.858581015,9.328245656,8.933088673,9.011833659,9.850988643]
},

{symbol: 'none',
name:'第四类',
type:'line',
stack: '总量',
data:[9.412000022,7.839578125,7.808093753,8.43043751,8.704921879,8.061484386,8.132656215,8.928750008,9.757489059,9.661992214,10.84578123,10.10015621,10.08843748,9.809999995,10.38609372,9.409531259,8.518749978,8.675468795,9.194453121,7.821953133,8.042265611,8.026718756,7.193359353,6.707656272,6.314687503,6.121640605,5.188359358,4.244218753,3.61374999,2.526093753,1.719609371,1.713437498,1.67875,1.822421866,2.144218742,2.901874984,3.905624995,4.928046897,4.939218766,6.274999988,7.688203109,8.579140598,8.982187507,8.906484374,7.499296889,7.852031244,9.804609372,9.09082577,10.62914061,9.323749956,8.807656274,8.200521116,7.752203127,7.859511697,7.202603921,7.683496088,7.44397264,7.547850019,7.562562508]  
},


{symbol: 'none',
name:'第五类',
type:'line',
stack: '总量',
data:[8.533388912,7.706618842,7.45074709,8.297265108,8.156182548,7.352319944,7.627379524,8.063723836,8.001391685,7.963791127,9.179165107,9.174024088,8.083259847,8.07286455,8.102022165,7.86801662,7.933656511,8.885789471,8.663213292,7.987091406,8.115872584,8.215484764,7.867423804,7.590969537,7.965789475,7.778781164,7.789141268,8.208282554,9.47199446,9.818698045,7.752326863,7.157673139,6.967285334,7.889501382,7.955346249,8.925041557,9.421855927,9.1400831,8.768891961,10.34684212,9.583050943,9.383878117,9.374591127,9.390745707,8.976933226,8.791994455,9.246202214,8.306680056,9.267396132,8.477061494,8.279621326,7.872972016,8.010023553,7.891565652,7.080307179,7.221435478,7.109846531,6.932733788,7.356650412]
},

{symbol: 'none',
name:'第六类',
type:'line',
stack: '总量',
data:[3.881822521,3.515692186,3.353814246,3.632112247,3.748038744,3.310283306,3.339394336,3.661670295,3.736114086,3.60691593,3.936735383,4.016032161,3.781925738,3.751051606,3.656631695,3.681103519,3.537030171,3.951050387,3.753150235,3.453315471,3.527881013,3.501121132,3.342664631,3.401347625,3.475451757,3.365712099,3.308529866,3.478131699,3.79722818,3.869601838,3.041301689,2.885191423,2.960964774,3.018468606,3.115176111,3.708437982,3.883797857,4.179678412,4.307304753,4.99408884,4.720280097,4.482475807,4.380612554,4.442006135,4.280719746,4.111975502,4.260214402,3.944414851,4.547850999,4.012787136,3.767501534,3.58713951,3.578101684,3.548433691,3.350956667,3.333585454,3.335118064,3.350282388,3.486097863]},


{symbol: 'none',
name:'第七类',
type:'line',
stack: '总量',
data:[14.80555908,12.13825986,12.12950073,13.59592412,14.02658103,12.44373424,12.63957372,14.63869785,14.29293134,14.146946,15.52271237,15.75847878,14.6752671,15.37658105,15.01072999,14.68154304,13.77119191,15.50865698,15.24169705,14.1422803,14.83580875,14.95036496,14.37080297,13.14204377,13.48802922,13.31832114,13.5157665,13.80496349,14.78474453,14.11218979,11.30007296,10.24766422,10.12408759,12.07540147,12.96678834,16.30321169,17.53445248,18.25051097,18.34934308,20.50883203,19.56094897,19.33773724,18.8826278,19.28788315,17.61591239,17.6216372,18.45833353,16.86334961,18.10496936,17.11736716,16.42520073,15.67334378,15.20728467,14.53945763,13.12935623,13.1842336,12.49197076,12.47332117,12.85632627]
},


{symbol: 'none',
name:'第八类',
type:'line',
stack: '总量',
data:[5.769945764,5.006558751,5.033723402,5.614466028,5.579279718,4.956086827,5.07996015,5.471555626,5.41144176,5.691985264,6.264947493,6.250920284,5.571954598,5.761210227,5.755362213,5.480882671,5.386715765,6.012044884,6.12044178,5.462855985,5.489638826,5.605352511,5.260207979,5.225005378,5.446736738,5.128439176,5.040433288,5.311403819,5.875077993,5.690883892,4.482547664,4.212616978,4.260727907,4.67355286,4.695216642,5.729618731,6.014159454,6.562790283,6.418024271,7.251403805,6.845892554,6.630779897,6.670103979,6.733188911,5.97847487,6.333951472,6.574991336,6.043958917,6.855823222,6.143656855,5.590982318,5.458493769,5.698957015,5.68560572,4.937194112,5.241959266,4.935505027,5.08847037,5.343906581]
},


{symbol: 'none',
name:'第九类',
type:'line',
stack: '总量',
data:[12.90257427,10.86735943,10.71003966,11.84069301,12.94630396,10.91640994,11.64336634,12.57534652,14.15793463,13.48541287,14.14792081,14.64475254,13.23775544,13.83225742,13.90722767,13.1023763,11.80821783,12.83966042,13.05732672,12.46118814,13.26336638,13.13613861,12.9054455,10.91316832,10.85702973,10.15089107,9.897524804,8.608415874,6.291782202,4.477920817,2.969306929,2.245544543,2.602376238,3.364356432,4.34673269,7.625049561,10.67396046,12.29306923,12.58561486,15.05526438,15.64326733,15.76415846,15.70306931,14.69376239,13.36138611,14.10069307,14.45613873,13.18186734,14.94310196,14.95576235,14.02301989,12.52613866,11.7627723,12.27069306,10.99356436,11.00158413,10.83544559,9.631485165,10.61336633]}


]
};

myChart.setOption(option);
})();




(function(){
	 var myChart = echarts.init(document.getElementById('spring_cluster_5'));

option = {
    title: {
        text: '春季'
    },
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

"2014/3/1",	"2014/3/2"	,"2014/3/3"	,"2014/3/4",	"2014/3/5",
        	 "2014/3/6",	"2014/3/7",	"2014/3/8",	"2014/3/9"	,"2014/3/10"	,
		    "2014/3/11",	"2014/3/12",	"2014/3/13",	"2014/3/14",	"2014/3/15",	
		   "2014/3/16",	"2014/3/17",	"2014/3/18",	"2014/3/19",	"2014/3/20",	
		   "2014/3/21",	"2014/3/22",	"2014/3/23",	"2014/3/24",	"2014/3/25",
		   "2014/3/26",	"2014/3/27",	"2014/3/28",	"2014/3/29",	"2014/3/30",	
		   "2014/3/31"	,
"2014/4/1",	"2014/4/2"	,"2014/4/3"	,"2014/4/4",	"2014/4/5",
        	 "2014/4/6",	"2014/4/7",	"2014/4/8",	"2014/4/9"	,"2014/4/10"	,
		    "2014/4/11",	"2014/4/12",	"2014/4/13",	"2014/4/14",	"2014/4/15",	
		   "2014/4/16",	"2014/4/17",	"2014/4/18",	"2014/4/19",	"2014/4/20",	
		   "2014/4/21",	"2014/4/22",	"2014/4/23",	"2014/4/24",	"2014/4/25",
		   "2014/4/26",	"2014/4/27",	"2014/4/28",	"2014/4/29",	"2014/4/30",			
"2014/5/1",	"2014/5/2"	,"2014/5/3"	,"2014/5/4",	"2014/5/5",
        	 "2014/5/6",	"2014/5/7",	"2014/5/8",	"2014/5/9"	,"2014/5/10"	,
		    "2014/5/11",	"2014/5/12",	"2014/5/13",	"2014/5/14",	"2014/5/15",	
		   "2014/5/16",	"2014/5/17",	"2014/5/18",	"2014/5/19",	"2014/5/20",	
		   "2014/5/21",	"2014/5/22",	"2014/5/23",	"2014/5/24",	"2014/5/25",
		   "2014/5/26",	"2014/5/27",	"2014/5/28",	"2014/5/29",	"2014/5/30",	
		   "2014/5/31"

   
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
data:[8.303055573,8.261578429,6.524357358,6.4471668,6.473299867,6.750110866,6.922994185,7.616899477,7.071780491,6.060549101,5.695119258,6.190140573,5.990839536,5.765358402,5.768717832,5.691756977,5.114452071,4.945169509,5.133744961,5.186001546,5.036996387,5.318691472,5.338876349,4.926038763,5.06406383,5.020383586,4.697928551,4.809529852,5.082329333,5.055763443,4.58995711,4.528480103,4.530215765,4.55911292,4.489883596,4.486529716,4.603828037,4.944532435,4.562112784,4.670137333,4.548608016,4.606111884,4.96414148,5.071209826,4.523864212,4.431974806,4.54994832,4.624143282,4.725615633,5.14243062,5.221123902,4.851313307,4.634985142,4.673277649,4.494958656,4.697296253,4.930072739,5.281496382,4.596500646,4.534366537,4.563447545,4.755762661,4.772510465,4.808112274,4.633954134,4.440551809,4.36236615,4.485875581,4.498277907,4.341067054,4.806175323,4.962545607,4.428224806,4.39635491,4.57139832,4.364431266,4.385192894,4.692557752,4.715121318,4.405032558,4.426878811,4.506750517,4.507098191,4.525682558,4.959764212,5.068493411,4.678432429,4.782607752,5.067290439,5.845333592,6.431790956,6.810694057]
},
{
symbol: 'none',
name:'第二类中心曲线',
type:'line',
stack: '总量',

data:[4.971542721,4.622879496,4.031521519,3.85766889,3.767933844,3.920625254,4.081857773,4.503554747,4.342131919,3.738356571,3.638412218,3.852742721,3.72292889,3.56414788,3.698146668,3.658203435,3.433701416,3.298229901,3.384343844,3.27113495,3.287447275,3.434736667,3.479737577,3.287956462,3.367701622,3.270383136,3.274407478,3.306336363,3.478667475,3.397134446,3.140129299,3.151004448,3.126411109,3.091934748,3.115389597,3.170749697,3.141802224,3.326157678,3.101048287,3.168882428,3.138114947,3.203114652,3.407289298,3.422396166,3.113308283,3.113920909,3.104537677,3.194393535,3.24617202,3.576514646,3.537970808,3.293284545,3.135617172,3.118490202,3.091789091,3.186347576,3.422363232,3.533644444,3.103390202,3.088645556,3.106456667,3.253755859,3.298244848,3.391113636,3.24203404,3.068370505,3.056590404,3.101106263,3.157303636,3.068638384,3.416061414,3.452906667,3.164961414,3.183945859,3.231633636,3.11103404,3.202363838,3.333490505,3.400853232,3.17559596,3.183022323,3.261206566,3.310997374,3.290002424,3.541391414,3.672782727,3.479005657,3.487525152,3.762915253,4.300711818,4.869362727,4.804489091]},
{
symbol: 'none',
name:'第三类中心曲线',
type:'line',
stack: '总量',

data:[10.76728502,10.86421958,8.884999285,8.80881233,9.010708938,9.138264493,8.954949999,9.643170521,9.857287678,8.623846127,8.135027775,8.404161834,8.107630198,8.055967169,8.633130674,8.458414001,7.539600245,7.365182132,7.622735761,7.554861103,7.412053128,8.004881634,8.037716911,7.238091786,7.430445671,7.321643952,6.973314482,7.272156532,7.431768372,7.434158462,6.882426821,6.886640584,6.942308938,6.873077287,6.605105548,6.623372932,6.633550719,7.259999274,6.83462246,6.924276099,6.852296368,6.686263548,6.913775852,7.437999521,6.609379227,6.515772222,6.76443285,6.771842512,6.7950157,7.220211111,7.650179952,6.963641063,6.982547101,6.81733913,6.810715459,6.82261715,7.122898068,7.535507488,6.824533575,6.574125121,6.687163527,6.867619082,6.796842271,6.959274155,6.879352657,6.597871981,6.704114493,6.702759179,6.484734783,6.342876329,6.767383333,7.09109686,6.417483333,6.466401691,6.526408454,6.3038843,6.272427053,6.602442995,6.683370531,6.227318841,6.33066715,6.379249517,6.306331643,6.243160628,6.681960628,6.798302174,6.541344686,6.545783816,6.759189614,7.282672464,7.865660386,8.1603157]
},
{
symbol: 'none',
name:'第四类中心曲线',
type:'line',
stack: '总量',
data:[2.384703265,2.324569465,1.964123437,1.928248437,1.899145454,1.994301278,1.983369603,2.252540195,2.073125852,1.851838208,1.737966904,1.824312497,1.785524573,1.74333622,1.755506112,1.804283807,1.647665058,1.617740621,1.673781957,1.598950993,1.651109517,1.706446876,1.725955539,1.64044858,1.630952268,1.616923436,1.577887215,1.650267469,1.791756391,1.723979975,1.60399403,1.593481248,1.555458806,1.566330539,1.541144601,1.644810086,1.642767044,1.634894034,1.617049576,1.585819458,1.609962499,1.619897871,1.705363921,1.697309941,1.538579688,1.569451989,1.532565199,1.541707528,1.569951989,1.77409375,1.711602841,1.655486364,1.513532244,1.59682571,1.535404545,1.617883807,1.73446804,1.725456108,1.56769304,1.57639929,1.598829119,1.684389631,1.714224006,1.71218679,1.64010696,1.540764631,1.575874006,1.573879972,1.636475568,1.647081392,1.735720028,1.744610085,1.595656534,1.644552415,1.665889205,1.621109659,1.641196875,1.743971733,1.796454545,1.663008097,1.670014062,1.728765767,1.756329545,1.742837074,1.864114205,1.965150142,1.861478977,1.874684659,2.003659659,2.185714631,2.502846733,2.598588068]},
{
symbol: 'none',
name:'第五类中心曲线',
type:'line',
stack: '总量',
data:[13.73016956,14.41720345,12.83822032,12.43840169,12.38782448,12.55194747,12.79874997,13.43962708,14.27192795,12.37499997,12.23568984,12.40855931,11.85254741,12.11491528,12.21288137,12.79703395,11.17788135,11.25514581,11.18480425,11.33177964,11.53277791,12.13315253,11.81884156,10.91716951,11.10220336,10.87652541,10.82974577,10.84368048,11.08924152,11.14412714,10.39101103,10.47888393,10.79359329,10.34257036,10.37636185,10.06508644,9.843616112,10.80864068,10.3020517,10.3548695,10.05052287,9.53616947,10.12486523,10.90726948,9.969450847,9.844612712,9.653133051,10.17225932,10.25659153,10.58691949,11.29984322,10.6072678,10.30106525,10.07717627,10.35049068,10.28830847,10.41918814,11.1928322,10.38949153,9.850859322,9.825137288,10.2047339,10.23258475,10.27644492,9.974668644,9.494535593,9.691694068,10.00099492,9.571025424,9.286433051,9.586559322,10.15940763,9.419627119,9.400665254,9.451602542,9.434947458,9.418362712,9.360674576,10.11069237,9.153258475,9.757045763,9.417787288,9.022829661,9.011231356,9.447855932,9.790398305,9.112637288,9.143282203,9.513621186,10.02260678,10.58669492,10.80912458]}
    ]
};

myChart.setOption(option);
})();


(function(){
	 var myChart = echarts.init(document.getElementById('summer_cluster_7'));

option = {
    title: {
        text: '夏季'
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

"2014/6/1",	"2014/6/2"	,"2014/6/3"	,"2014/6/4",	"2014/6/5",
        	 "2014/6/6",	"2014/6/7",	"2014/6/8",	"2014/6/9"	,"2014/6/10"	,
		    "2014/6/11",	"2014/6/12",	"2014/6/13",	"2014/6/14",	"2014/6/15",	
		   "2014/6/16",	"2014/6/17",	"2014/6/18",	"2014/6/19",	"2014/6/20",	
		   "2014/6/21",	"2014/6/22",	"2014/6/23",	"2014/6/24",	"2014/6/25",
		   "2014/6/26",	"2014/6/27",	"2014/6/28",	"2014/6/29",	"2014/6/30",	
"2014/7/1",	"2014/7/2"	,"2014/7/3"	,"2014/7/4",	"2014/7/5",
        	 "2014/7/6",	"2014/7/7",	"2014/7/8",	"2014/7/9"	,"2014/7/10"	,
		    "2014/7/11",	"2014/7/12",	"2014/7/13",	"2014/7/14",	"2014/7/15",	
		   "2014/7/16",	"2014/7/17",	"2014/7/18",	"2014/7/19",	"2014/7/20",	
		   "2014/7/21",	"2014/7/22",	"2014/7/23",	"2014/7/24",	"2014/7/25",
		   "2014/7/26",	"2014/7/27",	"2014/7/28",	"2014/7/29",	"2014/7/30",	
		   "2014/7/31",
"2014/8/1",	"2014/8/2"	,"2014/8/3"	,"2014/8/4",	"2014/8/5",
        	 "2014/8/6",	"2014/8/7",	"2014/8/8",	"2014/8/9"	,"2014/8/10"	,
		    "2014/8/11",	"2014/8/12",	"2014/8/13",	"2014/8/14",	"2014/8/15",	
		   "2014/8/16",	"2014/8/17",	"2014/8/18",	"2014/8/19",	"2014/8/20",	
		   "2014/8/21",	"2014/8/22",	"2014/8/23",	"2014/8/24",	"2014/8/25",
		   "2014/8/26",	"2014/8/27",	"2014/8/28",	"2014/8/29",	"2014/8/30",	
		   "2014/8/31"

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
data:[3.606329114,3.242691519,2.993583544,3.030445823,3.10593481,3.217578734,3.520738228,3.70949557,3.337008987,3.328221139,3.321878734,3.29854038,3.435146076,3.848600759,3.868364557,3.250816456,3.110808228,3.127796835,3.182177848,3.162711139,3.282400633,3.340632025,3.171152785,3.245314937,3.297665063,3.180211139,3.064059241,3.312603544,3.524342405,3.285562658,3.269955443,3.173199114,3.226376582,3.171292658,3.267371266,3.181367342,3.05293557,3.098495696,3.308566835,3.675857848,4.294263797,4.035405316,3.408785316,3.408441013,3.374785443,3.227043671,3.444713671,4.030070253,5.314027722,6.265743924,6.731888354,7.526573671,7.680569747,6.43246,4.190835316,3.956431392,3.672054937,3.559417722,4.220531646,5.582594937,4.791236582,4.015392405,3.990043418,5.481887342,6.165769241,7.132157595,6.282088608,4.354808354,3.316544304,3.382708861,3.23761481,3.171829114,3.149620253,3.142479241,3.028166709,3.075417722,3.285235063,3.121954177,3.053105443,3.000839114,3.067392405,3.158,3.411822785,3.943531646,3.839370759,3.410088608,3.369544304,3.183940886,3.177081392,3.094441266,3.188705949,3.36764557]
	  },
{
symbol: 'none',
name:'第二类',
type:'line',
stack: '总量',

data:[9.568236187,7.820271206,7.192846304,7.338150973,7.536822568,8.280003502,9.700510506,10.53535681,9.500908171,9.416473152,9.430989105,9.344983658,10.15168599,12.25064514,11.30040506,8.391926459,7.622626848,7.598696887,8.355611673,8.616794163,8.552838911,8.83366965,8.516905837,9.190528405,8.534568482,7.738170039,7.789103891,8.908131128,10.02268482,9.474980545,8.357081712,7.931984436,8.788832685,8.639984825,7.837499611,8.127220623,8.263125681,9.041555642,10.24928288,12.32270934,14.62859922,12.06363268,9.985596498,10.77587549,10.44785992,9.436342412,11.01719844,13.49579767,17.34361868,19.20817121,19.93715292,21.00712607,21.01504553,18.86224125,12.4777821,12.31167315,11.05723735,11.47521401,13.99863813,17.26883268,15.16708171,12.79175097,13.20984436,17.45447471,18.22548638,19.84918288,18.27719844,13.83342412,9.10233463,9.140856031,8.596614786,9.028365759,8.845358755,8.192691051,7.401806615,8.004046693,8.763035019,7.709377432,7.399961089,7.55844358,7.707276265,8.166070039,9.686653696,12.18797665,10.85618677,9.312178988,9.302412451,7.864307782,7.342561479,7.605167315,7.753589494,8.166553696]},

{
symbol: 'none',
name:'第三类',
type:'line',
stack: '总量',

data:[5.99,4.92529979,4.382188235,4.370093908,4.629813025,4.973543067,5.94257584,6.47612395,5.808991176,5.700637605,5.759373109,5.645659244,6.291731723,7.887535294,7.013994538,5.108931513,4.700728571,4.58337563,5.023702731,5.117287395,5.166984244,5.234984454,5.128144538,5.500228782,5.210732983,4.865558403,4.707310084,5.253361345,6.015861345,5.873571429,5.249930882,5.032770168,5.248959874,5.223452521,5.00772458,5.070942227,5.007922269,5.457312815,6.257736765,8.228877521,10.51528193,8.230988866,6.391631303,6.964730042,6.733014496,5.953920798,7.269673109,10.19064643,13.79825147,16.61474307,18.12404979,19.61784328,19.37182773,16.94913866,9.131155462,8.82487395,7.550210084,8.131995798,11.10140756,15.16317227,12.86197479,9.646008403,9.699012605,14.26975105,16.51205525,18.40787815,16.24758403,10.81962185,6.236638655,5.832836134,5.599516807,5.630189076,5.568641387,5.15312605,4.81220063,5.003529412,5.491764706,4.920768277,4.826253571,4.733235294,4.756302521,5.222310924,6.126638655,8.595315126,7.259201681,6.060987395,6.061701681,5.043448319,4.953581303,4.755988235,4.918665966,5.144551891]
},
{
symbol: 'none',
name:'第四类',
type:'line',
stack: '总量',
data:[4.247915254,3.615179153,3.276449831,3.210502203,3.244505763,3.430906441,4.020148644,4.347468644,3.877625593,3.752448814,3.786128305,3.79196322,4.141080847,5.177692712,4.731698305,3.676711864,3.397355932,3.397583559,3.499457627,3.563731525,3.731331695,3.790220339,3.530229661,3.777467797,3.627057288,3.504560339,3.338472712,3.639269492,4.150286441,3.863150847,3.661218644,3.493296102,3.596183051,3.627034407,3.752688136,3.558879831,3.563395254,3.71862678,4.13004661,5.090188644,6.614406271,5.604017458,4.222006102,4.479958644,4.340823051,4.026992542,4.767244407,6.561447288,9.282966102,11.40757627,12.22549712,13.60198305,13.69008712,11.54873441,6.250630508,5.829,5.090718475,5.064799492,6.913775085,10.19536441,8.267955763,6.192457627,6.254830508,9.565898305,11.06169254,12.73483051,10.85479661,7.013135593,4.250762712,4.154881356,3.935355932,3.899454746,3.79840678,3.639169492,3.506878983,3.454389831,3.773508475,3.561728814,3.426610169,3.37697339,3.409966102,3.498881356,4.019050847,5.302423729,4.806542373,4.07,3.974542373,3.627692542,3.651457627,3.412274576,3.50929661,3.803610169]   
},
{
symbol: 'none',
name:'第五类',
type:'line',
stack: '总量',
data:[2.065940046,1.780877117,1.690775973,1.646915332,1.649429062,1.750061785,1.830005263,1.922293593,1.759919451,1.709743021,1.675840275,1.660031579,1.705846224,2.015910984,1.97173913,1.620045767,1.484668192,1.48811968,1.620351487,1.671464302,1.717072311,1.689784897,1.575701373,1.636222426,1.576516018,1.604127689,1.57858238,1.628237529,1.701944851,1.543292449,1.474722883,1.44646087,1.42933135,1.505317391,1.5092254,1.427492906,1.318435011,1.3755254,1.434330435,1.550863844,1.676868421,1.66222151,1.532663158,1.433228375,1.430768421,1.395409153,1.416053776,1.611326773,2.074075744,2.448588787,2.43291968,2.548320137,2.672802059,2.292347597,1.713423112,1.77841167,1.768832952,1.530248513,1.660585812,2.037240275,1.860610069,1.501240275,1.710366133,2.231081922,2.258481922,2.590045767,2.264256293,1.718554462,1.38993135,1.432677346,1.437116705,1.348924485,1.377437071,1.325080092,1.338473455,1.387551487,1.458672769,1.396475973,1.301372998,1.290447826,1.317276888,1.337175515,1.439540503,1.731949657,1.652356979,1.446315789,1.413043478,1.361578947,1.317475286,1.37504508,1.392810069,1.469954233]
},
{
symbol: 'none',
name:'第六类',
type:'line',
stack: '总量',
data:[6.914422222,6.080355556,5.499415778,5.610248222,5.695812444,5.969749556,6.67055,6.929059333,6.467356889,6.454639111,6.389485111,6.251335333,6.591829111,7.730662889,7.259838667,6.117377778,5.802591111,5.805129778,5.958428222,6.074813111,6.217709556,6.350627778,5.900692667,6.172229556,6.015338889,5.799675111,5.702475111,6.190964,6.722652889,6.360795556,6.080017778,5.969236889,6.117474,6.031680222,5.929567556,6.109913556,5.966284889,6.00943,6.438611111,7.135819111,7.972732667,7.453351111,6.567817778,6.59384,6.346306667,6.092728889,6.588128889,7.580973333,9.2094,10.70026978,10.75901489,11.88331756,12.14294822,10.43357778,7.2336,7.2536,6.939533333,6.549911111,7.660888889,9.518777778,8.420666667,7.140688889,7.232644444,9.142373556,10.27374289,11.02664444,10.29691111,7.896288889,5.916244444,6.100422222,5.943711111,5.799096222,5.836622222,5.663933333,5.3922,5.591822222,5.964044444,5.614688889,5.471688889,5.468377778,5.591355556,5.6848,6.208088889,7.444311111,6.912755556,6.392044444,6.299022222,5.764911111,5.711666667,5.630259333,5.751688889,6.167133333]
}
]
};




myChart.setOption(option);
})();



(function(){
	 var myChart = echarts.init(document.getElementById('autumn_cluster_5'));

option = {
    title: {
        text: '秋季'
    },
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
"2014/9/1",	"2014/9/2"	,"2014/9/3"	,"2014/9/4",	"2014/9/5",
        	 "2014/9/6",	"2014/9/7",	"2014/9/8",	"2014/9/9"	,"2014/9/10"	,
		    "2014/9/11",	"2014/9/12",	"2014/9/13",	"2014/9/14",	"2014/9/15",	
		   "2014/9/16",	"2014/9/17",	"2014/9/18",	"2014/9/19",	"2014/9/20",	
		   "2014/9/21",	"2014/9/22",	"2014/9/23",	"2014/9/24",	"2014/9/25",
		   "2014/9/26",	"2014/9/27",	"2014/9/28",	"2014/9/29",	"2014/9/30",	
"2014/10/1",	"2014/10/2"	,"2014/10/3"	,"2014/10/4",	"2014/10/5",
        	 "2014/10/6",	"2014/10/7",	"2014/10/8",	"2014/10/9"	,"2014/10/10"	,
		    "2014/10/11",	"2014/10/12",	"2014/10/13",	"2014/10/14",	"2014/10/15",	
		   "2014/10/16",	"2014/10/17",	"2014/10/18",	"2014/10/19",	"2014/10/20",	
		   "2014/10/21",	"2014/10/22",	"2014/10/23",	"2014/10/24",	"2014/10/25",
		   "2014/10/26",	"2014/10/27",	"2014/10/28",	"2014/10/29",	"2014/10/30",	
		   "2014/10/31",
"2014/11/1",	"2014/11/2"	,"2014/11/3"	,"2014/11/4",	"2014/11/5",
        	 "2014/11/6",	"2014/11/7",	"2014/11/8",	"2014/11/9"	,"2014/11/10"	,
		    "2014/11/11",	"2014/11/12",	"2014/11/13",	"2014/11/14",	"2014/11/15",	
		   "2014/11/16",	"2014/11/17",	"2014/11/18",	"2014/11/19",	"2014/11/20",	
		   "2014/11/21",	"2014/11/22",	"2014/11/23",	"2014/11/24",	"2014/11/25",
		   "2014/11/26",	"2014/11/27",	"2014/11/28",	"2014/11/29",	"2014/11/30",	
		   "2014/11/31"

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
data:[6.367287785,6.322215321,6.07259089,6.070645342,6.041202484,6.619018219,6.803355694,7.202294617,6.755212629,6.501838302,6.302877019,6.211957971,6.460399586,6.619263561,6.048640373,6.091936439,6.173465217,6.152919876,6.000010559,6.236525052,6.329349896,5.983721532,6.270020704,6.058716356,5.951532091,5.961558799,6.626438923,6.402650104,6.503498965,6.01057971,5.839167702,5.44942029,5.518757764,5.429340373,5.645407246,5.770973085,6.224291718,5.87459089,5.972412629,5.924184886,5.937478882,6.236848861,5.8640853,5.850890269,6.044546584,6.110621118,6.109213251,6.091573499,6.434800414,6.171748861,6.277436853,6.01859648,6.033195238,6.020774327,6.237432712,6.440931677,6.187308489,6.202546584,6.529565217,6.531801242,6.597743271,7.015175983,7.068530021,6.290975983,6.450738509,6.517039337,6.587556936,6.545128571,7.22479648,7.57273706,6.952075569,6.840959213,7.032587992,6.795877019,6.855514079,7.409875776,7.619177847,7.001704555,6.856977226,7.239565217,7.084761905,6.880082816,7.176480331,7.488012422,6.969627329,7.126045549,7.197089648,7.013861284,7.201672878,7.851206004,8.397418841]},
	  {
symbol: 'none',
name:'第二类中心曲线',
type:'line',
stack: '总量',

	  data:[3.107247423,3.06142268,2.923344639,2.934482784,2.995637423,3.330504948,3.550581237,3.66972134,3.347435464,3.168314021,3.008170309,3.011573918,3.182657629,3.18235134,2.883480928,2.887987938,2.890992474,2.919516598,2.838003402,2.933809485,3.00285268,2.827168454,2.872536082,2.827720206,2.881867732,2.901319588,3.146010309,3.032329897,3.088010309,2.831494845,2.88057732,2.74856701,2.711625876,2.715486289,2.794414433,2.817208351,2.927672062,2.745952577,2.740974124,2.764583918,2.787138247,3.02493299,2.682712474,2.688041856,2.655824742,2.728888247,2.725721649,2.834506186,2.93192268,2.813563918,2.833985567,2.715187732,2.69968732,2.689540206,2.889010309,2.888886598,2.705154639,2.717690722,2.766463918,2.891587629,2.938979381,3.163835052,3.017814433,2.76842268,2.722123711,2.742020619,2.730938144,2.751119278,3.096200619,3.192566701,2.969358247,2.902185155,2.899257732,2.860706907,2.904361546,3.167121959,3.151265979,2.910628866,2.880958763,2.952742268,2.919257732,2.858388763,3.109137423,3.182360825,3.050020619,3.024948454,2.979371134,3.062649485,3.065484536,3.309958763,3.596917526]}
,
	  {
symbol: 'none',
name:'第三类中心曲线',
type:'line',
stack: '总量',

	  data:[8.775887705,8.774098361,8.686639344,8.567868852,8.748795902,8.936251639,9.03847541,9.994248361,9.460593443,9.204727049,8.683278689,8.581905738,8.778442623,9.442704918,8.88352459,8.906817213,8.943278689,8.912622951,8.916147541,9.079098361,9.254402459,8.953086885,8.841147541,8.757131148,9.047643443,8.980737705,9.763360656,9.633032787,8.700163934,8.67352459,8.579180328,7.651393443,7.721229508,8.091639344,8.277868852,8.776147541,9.472857377,8.999822131,9.086180328,9.157704918,9.061854098,9.518415574,8.940491803,9.16522541,9.353032787,9.308114754,9.186803279,9.576393443,9.834262295,9.284836066,9.38204918,9.409508197,9.420327869,9.507868852,9.63352459,10.03819672,9.397622951,9.764918033,9.544262295,9.730737705,9.735983607,10.16081967,10.45303279,10.0502459,9.81942623,10.1152459,9.914836066,10.20188525,10.36655738,11.24674508,10.87230902,10.52754098,10.71885246,10.99713115,10.69032787,10.49090164,11.35163934,10.53311475,10.89786885,10.82418033,10.70827869,10.45827869,11.00254098,11.11934426,10.35597213,10.87554672,10.61619672,10.8764959,10.86008197,10.96584918,11.67445574]},
	  {
symbol: 'none',
name:'第四类中心曲线',
type:'line',
stack: '总量',
	  data:[4.585674091,4.566705744,4.300774091,4.328884291,4.420687339,4.798537984,5.088590973,5.501810434,4.949855334,4.752417468,4.480308441,4.473818875,4.654294138,4.645919812,4.327766706,4.226115358,4.218530481,4.34180762,4.223412309,4.286413482,4.395744314,4.177754982,4.26479871,4.223481829,4.239132474,4.24940211,4.669320047,4.55059789,4.564794842,4.231524033,4.161008206,4.022543962,3.975322392,4.05729027,4.091862016,4.190869168,4.328808206,4.033658617,4.035903634,4.025667878,4.074094373,4.395293904,4.065910317,3.957504924,4.070143025,4.115223681,4.160688746,4.271465416,4.503371161,4.23297585,4.356445487,4.103188746,4.074876905,4.045756155,4.290058617,4.39887456,4.228921454,4.142977726,4.387397421,4.512624385,4.583845252,4.884009379,4.730726846,4.286072685,4.249695193,4.38978898,4.273505275,4.359531067,4.822197304,5.047332943,4.673751465,4.691694842,4.675781243,4.472496249,4.564665885,4.932189332,5.002004689,4.538499414,4.571679836,4.751918757,4.596869871,4.569062134,4.773505275,5.059871043,4.905873388,4.867610434,4.780790152,4.835240328,4.978792497,5.280450645,5.809712075]}
 ,
	  {
symbol: 'none',
name:'第五类中心曲线',
type:'line',
stack: '总量',
data:[1.513129371,1.526678322,1.467587413,1.499982517,1.496505944,1.663116084,1.745166608,1.797258217,1.604960664,1.539903846,1.446384615,1.506311189,1.523076923,1.526468531,1.344423077,1.390794231,1.380448601,1.389313112,1.354968881,1.409903322,1.421298427,1.361302273,1.357237762,1.344873252,1.34020979,1.37722028,1.466276224,1.445646853,1.430524476,1.308828671,1.361311189,1.313776224,1.293269231,1.316101399,1.296668357,1.353921853,1.332698252,1.25515035,1.216051399,1.202959965,1.289990734,1.319174825,1.182308392,1.198219755,1.139895105,1.154064161,1.191037238,1.307332168,1.325704371,1.289487238,1.250234266,1.191861888,1.217395105,1.21027972,1.285996503,1.322657343,1.194038462,1.188566434,1.205971503,1.243758741,1.322097902,1.435856643,1.319160839,1.214895105,1.208339161,1.193986014,1.194353147,1.259283217,1.404688287,1.382633916,1.294600874,1.257593182,1.244984965,1.284178322,1.31763986,1.354125874,1.384038462,1.248496503,1.279597902,1.302395105,1.323566434,1.336977972,1.43404021,1.408742483,1.345935315,1.364184091,1.30538514,1.387011014,1.524470979,1.663435839,1.651448077]    
	  }
  ]
};

myChart.setOption(option);
})();


