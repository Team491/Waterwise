(function(){
	 var myChart = echarts.init(document.getElementById('year_cluster_4'));

option = {
    title: {
        text: '聚成四类折线图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['第一类中心曲线','第二类中心曲线','第三类中心曲线','第四类中心曲线']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
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
		   "2014/2/26",	"2014/2/27",	"2014/2/28",	
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
		   "2014/5/31",
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
		   "2014/8/31",
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
		   "2014/11/31",
"2014/12/1",	"2014/12/2"	,"2014/12/3"	,"2014/12/4",	"2014/12/5",
        	 "2014/12/6",	"2014/12/7",	"2014/12/8",	"2014/12/9"	,"2014/12/10"	,
		    "2014/12/11",	"2014/12/12",	"2014/12/13",	"2014/12/14",	"2014/12/15",	
		   "2014/12/16",	"2014/12/17",	"2014/12/18",	"2014/12/19",	"2014/12/20",	
		   "2014/12/21",	"2014/12/22",	"2014/12/23",	"2014/12/24",	"2014/12/25",
		   "2014/12/26",	"2014/12/27",	"2014/12/28",	"2014/12/29",	"2014/12/30",	
		   "2014/12/31"    
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
data:[2.748543904,2.505049804,2.429497121,2.636524507,2.655503409,2.415460283,2.472562908,2.635179554,2.656609306,2.675523465,2.927441937,2.940319527,2.767316782,2.724696201,2.578618351,2.625949937,2.504228051,2.824694104,2.789609442,2.56280799,2.601690696,2.564776928,2.462311405,2.432873395,2.608794232,2.466933159,2.391952819,2.564351243,2.730067497,2.8211034,2.310694619,2.143145475,2.050891219,2.192372217,2.308309301,2.750262127,2.862817819,3.188859768,3.127352558,3.565832237,3.436041942,3.366028837,3.125972612,3.169809963,3.060026207,2.890428702,3.127496723,2.943437216,3.296582576,2.864208521,2.713828314,2.645668149,2.54195806,2.601161862,2.424907075,2.500718214,2.41104351,2.420844561,2.548689908,2.682561988,2.623948367,2.323613105,2.300492395,2.242709174,2.393216778,2.365726077,2.559776667,2.455847838,2.244198032,2.151992399,2.225077323,2.154787937,2.159898557,2.131737882,2.180319527,2.07036553,1.964955958,2.029909959,1.945139449,2.021740629,2.078906031,2.119226081,2.018723725,2.004297768,1.993356748,1.939147182,2.014749669,2.099258193,2.069799086,1.937933811,1.964519918,1.909983486,1.90157405,1.892249276,1.925815861,1.92874115,1.982844297,1.922885585,1.947772083,1.943437745,1.938567236,2.011500137,2.021506945,1.878897379,1.899797903,1.883534469,1.903165269,1.948862516,2.093311664,2.06481363,1.925647444,1.860894758,1.913803801,1.889349148,1.954012451,2.035481651,2.08516422,1.90241232,1.893241547,1.890908388,2.022900393,2.018368807,2.062473657,1.967249017,1.858799869,1.855054522,1.885146134,1.919193054,1.919289122,2.015274705,2.041494758,1.918463958,1.952260682,1.967811664,1.91131979,1.929511402,2.019315858,2.049894102,1.912365662,1.918959633,1.955812451,2.018050066,1.990557012,2.097684142,2.138935649,2.070215465,2.084576409,2.200227392,2.330312975,2.546217169,2.601027916,2.40072844,2.068218873,1.91929135,1.927801704,1.958309305,2.069611927,2.289498034,2.411263958,2.191062385,2.134820315,2.158335911,2.158858191,2.289062385,2.699175885,2.611474181,2.105720577,1.93908886,1.953053342,2.07046671,2.115461468,2.14624692,2.164455046,2.075939056,2.150911271,2.101563303,2.03942346,2.023243906,2.144645478,2.299984666,2.112929882,2.065238925,2.015775623,2.058226606,2.075217693,2.094985059,2.029092792,1.945249279,2.018266841,2.175869987,2.481946396,2.931601835,2.671411009,2.2687481,2.236227392,2.201451507,2.090267104,2.287634993,2.742018087,3.638690826,4.351537746,4.778906815,5.241189122,5.373725819,4.472296068,2.73222595,2.638622936,2.499794758,2.352488336,2.763480996,3.818039318,3.390087287,2.66908519,2.715622543,3.751170118,4.290126606,4.997522936,4.410812582,2.938949279,2.137195282,2.143984273,2.126081258,2.05461114,2.079606815,2.003748362,1.95976789,1.980052425,2.137693316,2.022542595,1.897837484,1.893025688,1.91706422,1.971803014,2.163367235,2.530028834,2.475976409,2.11034076,2.090013106,1.914783748,1.924221494,1.880742333,1.952395806,2.021730013,1.915963303,1.903342071,1.851847969,1.883066841,1.869531848,2.016226081,2.151604194,2.207886894,2.018952031,1.959200131,1.866198034,1.921104849,1.95102464,1.96707287,1.810477851,1.840600917,1.853697641,1.844065007,1.809311533,1.843981651,1.90583329,1.838130144,1.849908257,1.858502621,1.831690695,1.861861075,1.987221494,1.930104849,1.972044561,1.782804718,1.827955439,1.801179554,1.769134993,1.77242464,1.752273001,1.796681913,1.841058191,1.785008781,1.724715727,1.734379817,1.813953342,1.869787287,1.713246265,1.726298558,1.686422018,1.716952425,1.734761861,1.856335518,1.88620498,1.848196068,1.851934469,1.746441678,1.769633028,1.725150721,1.828689384,1.887706422,1.729397117,1.764036697,1.807758847,1.808781127,1.898833552,2.021061599,1.87672346,1.796304063,1.746356488,1.755557012,1.755923984,1.79372962,1.965902228,2.000084666,1.898884928,1.890288336,1.858429096,1.822143775,1.819207077,1.914272608,1.989567497,1.822555701,1.81853211,1.836146789,1.824731324,1.820709567,1.935007864,2.008598558,1.945406291,1.895273001,1.866343775,1.967903408,2.022499869,2.129456488,2.243208781,2.090524246,2.022651769,2.37118768,2.352183748,2.378736828,2.532752294,2.48214941,2.303420708,2.223735256,2.349397117,2.406343381,2.396304063,2.58163827,2.490707733,2.382975098,2.530943644,2.494963434,2.476131717,2.571911796,2.75577654,2.767811927,2.535329882,2.508390564,2.393450197,2.464796855,2.436928178,2.688246003,2.676235518,2.320750328,2.252791219,2.399051507]},
{
symbol: 'none',
name:'第二类中心曲线',
type:'line',
stack: '总量',

data:[12.57150244,10.73939755,10.7729491,11.7192639,11.95304998,10.75900893,10.90096143,11.79787503,12.13985029,11.76799228,13.06482034,13.39095492,12.09969412,12.70064444,12.55997189,12.22192102,11.54563271,12.96224691,12.94722221,12.00787037,12.48444445,12.22104938,11.95450616,11.40635369,11.58549601,11.11487529,11.19006177,10.9673457,11.81438273,11.21083333,8.752777762,7.899197528,8.127870377,9.323364192,9.629228411,11.74141977,13.3076543,13.88975306,13.76783053,15.55849287,15.25722224,15.30521608,14.86922842,15.14716049,13.99525586,13.8454145,14.41927688,13.15270061,14.53878828,13.99145246,13.34570002,12.45489506,12.18027039,12.13380861,11.07343271,11.23001697,11.31882099,10.98817901,11.26099012,12.64550158,13.00463706,10.66001574,10.50000896,10.57890583,10.85409968,10.92220305,11.63948979,11.81661574,10.07175245,9.690878705,10.03459598,9.744649684,9.51669755,9.93777808,9.90538551,8.774562334,8.588353113,8.912558959,8.803581469,8.937695659,9.341425905,9.245041061,8.478597849,8.681512354,8.364317586,8.180689499,8.425920372,8.59537872,8.569397241,8.021794142,8.020325013,8.183425334,7.946768212,7.867653075,7.682427762,7.653370982,8.423326852,7.963720979,8.000706499,7.791266036,7.672075927,8.118540429,8.609939191,7.629899383,7.579382099,7.783867593,7.949656173,8.046694753,8.499141667,8.910946914,8.196723148,8.079013272,7.741235494,7.922740123,8.036421914,8.304891975,8.752549383,7.973316975,7.606740741,7.657665123,7.958638272,7.94497037,8.16525216,7.826558025,7.495082716,7.627492284,7.809214815,7.512646296,7.367574074,7.73926358,8.149209259,7.396215123,7.391733333,7.48680679,7.321270988,7.437667284,7.603401543,7.87545,7.22911358,7.490775,7.425570679,7.262406481,7.221365432,7.885073148,8.018354938,7.44842963,7.48215216,7.875578086,8.46725463,9.23535,9.435553704,8.550205864,7.546820062,7.181446296,7.177339815,7.208978704,7.422548148,8.567725,8.896136111,8.048347531,8.07251821,8.128931173,7.782764815,8.45115216,9.803505556,9.292177469,7.577855247,7.248991049,7.177045062,7.496297222,7.520440741,7.830260802,7.977916049,7.548710494,7.874593519,7.698675309,7.361645988,7.210257099,7.810442284,8.276801235,8.07427037,7.464887654,7.41030216,7.675529938,7.495563889,7.36708642,7.537621605,7.368849074,7.608690123,8.344097531,9.68943179,11.33122716,9.888571605,8.350715741,8.803406173,8.483776543,8.072850617,8.994517284,10.97180123,13.84290123,15.94256173,16.60292685,17.74667099,18.01588488,15.75952469,10.2729321,9.991635802,9.369845679,9.462808642,11.63716049,14.33228395,12.53404321,10.30061728,10.54391975,13.97854938,15.46169753,16.79259259,15.21429012,11.24151235,7.949104938,7.89867284,7.614691358,7.700401235,7.472292901,7.477040741,6.918506173,7.234783951,7.818981481,7.195925926,7.152438272,6.990648148,7.054475309,7.253148148,8.027623457,10.0470679,9.263950617,8.021975309,8.017932099,7.428293519,7.13585463,7.324542593,7.297060185,7.722451543,7.258328086,7.134135802,6.961856173,6.940036111,6.865558951,7.463519136,7.566389506,8.184933025,7.710748148,7.416517593,6.975401235,7.063752469,7.173925926,7.602453704,6.821944444,6.991816667,7.015632716,7.076701852,6.92791821,7.147166667,7.300717284,6.875591358,7.01349784,6.957037037,6.930679012,6.866790123,7.650617284,7.490802469,7.195123457,6.814938272,6.799753086,6.216234568,6.312716049,6.307376543,6.474074074,6.732716049,7.277094444,6.841568827,6.849791975,6.931275617,6.780432716,7.32421821,6.83441358,6.879066358,7.031851852,7.113209877,6.998271605,7.226358025,7.580030864,7.069166667,7.284506173,7.020886111,7.049022531,7.108561728,7.280246914,7.596635802,7.217777778,7.33345679,7.515432099,7.566820988,7.626697531,8.175092593,8.19904321,7.458615432,7.49900216,7.65962963,7.646080247,7.775462963,8.570277778,8.912200309,8.490653395,8.089660494,8.564382716,8.269166667,8.26154321,8.715462963,9.19139784,8.248590432,8.500802469,8.567654321,8.673858025,8.327654321,8.70117284,8.970185185,8.261203704,8.63845679,8.422513272,8.559212963,8.80891358,9.456705247,10.01652253,9.525216049,10.00734568,10.93302469,11.44666667,11.17450617,12.04731481,12.05734568,11.20317901,11.15197531,11.86830247,11.95654321,11.93916667,12.99805556,12.82746914,12.37791914,12.71317377,12.63494444,12.69962531,12.42328179,13.0289142,13.96237099,12.51178457,12.1668463,12.02610556,12.75409938,12.40021204,12.82428611,12.88722222,11.2612963,11.15947531,11.46873981]},
{
symbol: 'none',
name:'第三类中心曲线',
type:'line',
stack: '总量',

data:[5.2693663,4.481516349,4.41096843,4.89711922,4.906033245,4.377049773,4.539713473,5.010003536,5.033553944,5.078742337,5.687207619,5.604329343,5.197536411,5.226287284,5.177263136,4.911111052,4.908524231,5.462983385,5.376029531,4.804698978,4.93106992,5.024438902,4.690630464,4.551680593,4.624388298,4.518344201,4.428101588,4.574716805,5.111717736,5.015422476,3.83897865,3.714512536,3.678477254,4.239842155,4.404401117,5.659331485,5.98188486,6.369535746,6.477158775,7.440464263,7.06167131,6.808960075,6.662005561,6.688300845,5.994391829,5.891662026,6.258941508,5.797888294,6.760417819,5.928625809,5.299404455,5.11351811,4.970568428,4.804653851,4.355575863,4.48224587,4.338245862,4.385335653,4.710323119,5.342105941,5.040241409,4.272200748,4.128189327,4.154287378,4.218812258,4.446151625,4.91854141,4.653876691,4.029212724,3.865735842,4.103062391,3.9889572,3.826400839,3.93960492,3.943816066,3.642084221,3.558411979,3.60079954,3.554127018,3.5296364,3.715371769,3.740292108,3.445366756,3.587381525,3.50061393,3.472261283,3.537699444,3.730361003,3.612570384,3.362752463,3.351916716,3.345257568,3.318070657,3.312995919,3.351330641,3.388818204,3.599392019,3.395452647,3.412087563,3.407633146,3.437714117,3.638737327,3.680745131,3.310561003,3.331592943,3.309709192,3.380942618,3.434398793,3.797508078,3.765102136,3.546304735,3.371485608,3.408506685,3.298960817,3.421186908,3.688613463,3.787749211,3.342827762,3.311422098,3.404255339,3.489564067,3.522592572,3.505803157,3.468799814,3.277399536,3.254402414,3.329948839,3.337729619,3.255859517,3.598700464,3.671252553,3.304435376,3.327540947,3.433533333,3.278134355,3.33868273,3.481338904,3.566654968,3.333207428,3.337787929,3.410073166,3.42780195,3.423023213,3.707184587,3.809516806,3.59363909,3.600692572,3.807447447,4.36042117,4.920343454,4.92458143,4.453509749,3.776913278,3.404356639,3.380533426,3.483849118,3.73788338,4.279299164,4.579288951,4.115062581,4.024003343,4.043894893,4.030447447,4.328787279,5.264507799,4.872264903,3.781072238,3.541080501,3.556422841,3.725997029,3.76082507,3.843144661,3.940801486,3.713258403,3.93076286,3.802601486,3.616732869,3.488896286,3.863650232,4.324597307,4.102535933,3.868493593,3.680921634,3.816339833,3.811023027,3.791718477,3.710083844,3.679529619,3.876154689,4.291952368,5.139847539,6.363901393,5.396704271,4.374801021,4.585659889,4.471196657,4.095177252,4.739703343,6.183143454,8.448404735,10.07627456,10.73148106,11.8297974,11.82763528,10.10552526,5.930881523,5.597332776,5.001392758,4.997994429,6.499919499,9.010046425,7.538102971,5.871039926,5.917896286,8.546704735,9.71743519,11.0996792,9.694837512,6.492459239,4.217372331,4.194066852,3.976365552,3.940273909,3.873472609,3.721688579,3.516844661,3.60264624,3.896059146,3.596993872,3.496580037,3.483597307,3.549582173,3.692358403,4.20448468,5.32450325,4.889928412,4.216258124,4.165923863,3.74468143,3.647457196,3.564718849,3.628108357,3.858607242,3.561987001,3.543054782,3.34798013,3.334147261,3.425592572,3.740359796,3.999559053,4.164813092,3.791916156,3.661770009,3.455007242,3.466283844,3.672433519,3.648295729,3.367126462,3.279949675,3.293738719,3.38594234,3.281522098,3.388275487,3.431168338,3.234743175,3.30938533,3.236535376,3.293186351,3.335858867,3.588012999,3.481977716,3.540092851,3.295719591,3.246778087,3.090714949,3.082643547,3.128274559,3.203511606,3.235848189,3.347696936,3.115189786,3.138650418,3.146604828,3.213875673,3.433872795,3.113333705,3.070077252,3.083769731,3.176026555,3.185656917,3.291992572,3.400454132,3.231818477,3.295888579,3.146278644,3.114788022,3.097236769,3.32628598,3.345896007,3.219554318,3.158393686,3.272744383,3.420232126,3.448022284,3.682154132,3.578969359,3.222432683,3.197892293,3.234846797,3.200909935,3.244131848,3.64224169,3.717047354,3.518003714,3.447696007,3.357735747,3.34551467,3.411778737,3.695901393,3.655244197,3.382878366,3.387514299,3.519356267,3.385143918,3.428873816,3.666251903,3.748709378,3.578755803,3.559935005,3.519600743,3.578402971,3.578792943,3.896778087,4.27371402,3.86040325,3.859986072,4.44096221,4.410095915,4.528539183,4.757930362,4.809212999,4.36911792,4.300232126,4.52992572,4.553389044,4.714809656,5.07726091,5.049424327,4.735636026,5.03266481,5.03365701,4.957084308,4.924051996,5.361805014,5.801077902,4.889731105,4.740599257,4.660765088,4.626328691,4.871471031,5.020840297,5.09473909,4.353690808,4.201411328,4.632274838]},
{
symbol: 'none',
name:'第四类中心曲线',
type:'line',
stack: '总量',
data:[8.105402401,7.067504537,6.794050243,8.003083373,8.058099767,7.031777993,7.320087448,8.005075718,8.11354867,8.06684665,9.144260649,9.078495921,8.420533384,8.376157303,8.515859693,8.08550932,7.626916741,8.669444382,8.697778352,7.943298459,8.082341031,8.342464113,7.785035882,7.289254194,7.641527279,7.344496997,7.250035883,7.361172256,8.329102869,7.775191388,6.128540669,5.549724878,5.692763154,6.365741629,6.871782295,8.547236842,9.552906703,10.19715312,10.15389954,11.80165071,11.19861412,10.85644736,11.06900407,10.88487941,9.575322963,9.466447373,10.37805623,9.408294266,10.7101994,9.71446161,9.089369027,8.378089593,8.290643181,8.128608489,7.248843787,7.531207057,7.153880622,7.105670576,7.605049876,8.621595701,8.567836376,6.924855735,6.79177919,6.766583371,7.043003245,7.034668187,7.770769017,7.514513515,6.472513641,6.100573684,6.537430386,6.264714832,6.136945701,6.325304553,6.206545332,5.518085173,5.376427395,5.578264958,5.596430857,5.389027509,5.801250484,5.830004661,5.394127751,5.481298814,5.472762672,5.124182771,5.227882781,5.52637237,5.545783256,4.984020825,4.935882777,4.943477631,4.975032058,4.835279186,4.941904184,4.948580024,5.303080863,4.880839713,5.028258844,4.911899882,4.90754283,5.249968428,5.476545223,4.914263278,4.765343541,4.892292344,4.97809701,5.032342823,5.463566746,5.659869378,5.22841878,5.017958612,5.024782775,4.904744139,5.010089713,5.247525359,5.664054306,4.963994976,4.887205981,4.869256579,5.089724282,5.118802512,5.242657656,5.027845933,4.826334928,4.831733254,4.844888876,4.880814833,4.690383732,5.186317823,5.347098445,4.824659689,4.821484091,4.907304665,4.738525239,4.725180622,5.076890311,5.124434569,4.773989474,4.83198433,4.922679545,4.896911483,4.892127273,5.251693301,5.477863756,5.138751794,5.227671172,5.559539952,6.340714234,6.976394498,7.375235526,6.317464115,5.349738517,4.770844139,4.85816555,5.036618182,5.38628445,6.154058493,6.68637799,6.099135407,6.041036483,5.974972967,5.934232057,6.370570335,7.71792512,7.139358014,5.565378947,5.115508134,5.056091746,5.365067344,5.519683732,5.606242225,5.685509928,5.422102871,5.788477033,5.527974641,5.214301196,5.08533445,5.650107656,6.396004785,5.975909091,5.514131938,5.283401077,5.547613517,5.511680861,5.325323086,5.385898923,5.320592344,5.608538756,6.221665072,7.549222847,9.112753469,7.82130299,6.303329187,6.598927632,6.404706818,5.879228349,6.752280263,8.592698565,11.23272452,13.24511854,13.8796823,15.16693337,15.21930227,13.28415072,8.080215311,8.00458134,7.064777392,7.168147967,9.077696172,11.9549701,10.19090179,8.226100478,8.366555024,11.65769091,12.92171196,14.23076555,12.78126794,9.223289474,5.929868421,5.871507177,5.604138756,5.621391507,5.624542584,5.210799522,4.953402392,5.136566986,5.56062201,5.119123325,4.943113995,4.930777512,5.02437799,5.328935407,6.118684211,7.959509569,6.925909091,6.138480861,6.047703349,5.222382057,5.199371651,4.980119617,5.214162679,5.585390789,5.128397129,5.122882775,4.858995215,4.902093301,4.997144498,5.475269617,5.706785526,6.16826866,5.60000012,5.298706459,5.102425837,4.974552512,5.205309928,5.237821292,4.838223684,4.818855383,4.821000718,4.835941986,4.733136124,4.852451555,4.959905861,4.728533612,4.855923445,4.726854067,4.744632177,4.741283373,5.269892344,5.105095694,5.097416268,4.722679426,4.658514354,4.422607656,4.370035885,4.416447368,4.538875598,4.668349282,4.890747129,4.574099402,4.634598325,4.574517943,4.602510885,4.920583732,4.539723565,4.497864833,4.634339713,4.62817799,4.693558612,4.722697368,5.016792584,4.796560646,4.825217703,4.634683014,4.623791866,4.623169856,4.843086124,4.953935407,4.693409091,4.681267943,4.898145933,5.014603589,5.093528708,5.415980861,5.339162679,4.836423445,4.861267943,4.98069378,4.909569378,4.942233373,5.352846411,5.748670694,5.147203947,5.201570933,5.272930622,5.114723206,5.192264713,5.559569378,5.67861244,5.226244019,5.116519139,5.397763158,5.251004785,5.087954545,5.349688995,5.628911483,5.415751914,5.45009378,5.433648325,5.352383373,5.555203349,5.87411244,6.351492823,6.048076914,6.268103708,7.164720096,7.353199761,7.248911483,7.696785048,7.943997967,7.100373565,6.967430981,7.527347249,7.804416627,7.695785407,8.261976435,8.378136722,7.83839988,8.352559809,8.307811005,7.907000957,8.15215311,8.651471292,9.4975,8.065717703,8.013385167,7.718662321,7.785023923,7.843133971,8.173299402,8.495411722,7.05715311,6.8592439,7.385962919]}
    ]
};

myChart.setOption(option);
})();

