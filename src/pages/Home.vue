<template>
	<div class="home">
		<el-row>
		    <el-col :sm="6">
			  	<div class="totalDiv bg-white">
					<div class="iconDiv bg-green">
						<i class="fa fa-comment-o"></i>
					</div>
					<div class="numDiv">
						<span><strong>99.9%</strong></span>	
						<small>SERVER UPTIME</small>
					</div>
				</div>
				<div class="totalDiv bg-white">
					<div class="iconDiv bg-popul">
						<i class="fa fa-user-o"></i>
					</div>
					<div class="numDiv">
						<span><strong>117K</strong></span>	
						<small>USERS TOTAL</small>
					</div>
				</div>
				<div class="totalDiv bg-white">
					<div class="iconDiv bg-skyblue">
						<i class="fa fa-camera"></i>
					</div>
					<div class="numDiv">
						<span><strong>2,470</strong></span>	
						<small>NEW DAILY PHOTOS</small>
					</div>
				</div>
		    </el-col>
		    <el-col :sm="11">
		  		<div class="visDiv">
					<div class="visContainer">
						<x-chart id="test1" :option="option1"></x-chart>
					</div>
					<div class="numDiv">
						<span><strong>14.85%</strong></span>	
						<small>More Visitors</small>
					</div>
				</div>
		    </el-col>
		    <el-col :sm="6">
				<div class="uptimeDiv">
					<div class="uptimeContainer">
						<x-chart id="test2" :option="option2"></x-chart>
					</div>
					<div class="numDiv">
						<span><strong>95.8%</strong></span>	
						<small>CURRENT SERVER UPTIME</small>
					</div>
				</div>
				<div class="salesDiv">
					<div id="salesContainer">
						<x-chart id="test3" :option="option3"></x-chart>
					</div>
					<div class="numDiv">
						<span><strong>320,45</strong></span>	
						<small>AVG. OF SALES</small>
					</div>
				</div>
		    </el-col>
		</el-row>
		
	</div>
</template>
<script>
	import XChart from '../components/chart.vue'
	export default {
		data(){
			return {
				// 折线图
			    id: 'test1',
			    option1: {
			        chart: {
			        	margin:[0,0,0,0],
			        },
				    credits: {
				        enabled:false
				    },
				    title: {
				        text: '' 
				    },
		    		colors: ['#63b919','#cccccc'],
				    xAxis: {
				        visible:false,
				        title: {
				            text: ''
				        }
				    },
				    yAxis: {
				        visible:false,
				        title: {
				        	text: ''
				        }
				    },
				    legend: {
				        floating:true,
				        layout: 'vertical',
				        align: 'right',
				        verticalAlign: 'top'
				    },
				    plotOptions: {
				        series: {
					        label: {
					          connectorAllowed: false
					        },
					        pointStart: 2010
				        }
				    },
				    series: [{
				          name: 'PageViews',
				          data: [43934, 52503, 62436, 69658, 97031, 119931, 78900, 94175,43934, 62503, 57177, 69658, 57031, 99931, 74920, 60982]
				        },{
				          name: 'Visitors',
				          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434,24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
				    }]
				},

				// 圆柱
				id: 'test2',
			    option2: {
			        colors:['#7c30bc'],
					chart: {
						type: 'column',
						margin:[0,0,0,0],
					},
					credits:{
						enabled:false
					},
					title: {
						text: ''
					},
					xAxis: {
						type: 'category',
						visible:false,
					},
					yAxis: {
						visible:false,
						title: {
							text: ''
						}
					},
					legend: {
						enabled: false
					},
					plotOptions: {
						series: {
							borderWidth: 0,
							dataLabels: {
								// enabled: true,
								format: '{point.y:.1f}%'
							}
						}
					},
					tooltip: {
						headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
						pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
					},
					series: [{
						name: 'Uptime',
						colorByPoint: true,
						data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,  129.2, 144.0, 176.0, 135.6, 106.4, 129.2, 144.0, 176.0, 135.6],
					}]
				},

				// 饼状
				id: 'test3',
			    option3: {
			        colors:['#387821','#63b919','#5c9c49','#84c471','#38791e'],
					credits:{
						enabled:false
					},
					chart: {
						margin : [0,0,0,100]
					},
					title: {
						floating:true,
						text: ''
					},
					tooltip: {
						pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
					},
					plotOptions: {
						pie: {
							allowPointSelect: true,
							cursor: 'pointer',
							dataLabels: {
								enabled: false,
								format: '<b>{point.name}</b>: {point.percentage:.1f} %',
								style: {}
							},
						}
					},
					series: [{
						type: 'pie',
						innerSize: '60%',
						name: 'sales',
						data: [
							['Firefox',45.0],
							['IE',26.8],
							['Chrome',12.8],
							['Safari',8.5],
							['Opera',6.2],
							['其他',0.7]
						]
					}]
				},
			}
		},
		components: {
		 	XChart
		}
	}	
</script>
<style>
	.home {
		height: 100%;
		background-color: #e9eef3;
	}
	#test1 {
	 width: 500px;
	 height: 200px;
	} 
	#test2 {
		width: 279px;
		height: 95px;
	}
	#test3 {
		width: 279px;
		height: 95px;
	}
    .el-row {
    	margin-bottom: 20px;
    }
    .el-col {
    	border-radius: 4px;
    	margin-left: 10px;
    }
    /* .el-col:last-child {
    	margin-right: 0;
    } */
    .bg-white{
		background-color: white;
	}
    .bg-green{
		background-color: #63b919;
	}
	.bg-popul{
		background-color: #7c30bc;
	}
	.bg-skyblue{
		background-color: #38baec;
	}
    .totalDiv{
		overflow:hidden;
		padding: 10px;
		border-radius: 5px;
		margin-top:10px;
		background-color: #ffffff;
	}
	.iconDiv,.totalDiv .numDiv{
		float: left;
	}
	.iconDiv{
		width: 40px;
		height: 40px;
		border-radius: 50%;
		text-align: center;
		margin-left: 10px;
	}
	.iconDiv i{
		font-size: 24px;
		color: white;
		line-height: 40px;
	}
	.totalDiv .numDiv{
		margin-left: 20px;
	}
	.numDiv span{
		font-size:24px; 
		line-height: 24px;
	}
	.numDiv small{
		display: block;
	}
	small {
		color: #999;
	}
	.visDiv ,.uptimeDiv ,.salesDiv {
		background-color: #ffffff;
	}
	.visDiv,.uptimeDiv,.salesDiv{
		position: relative;
	}
	.visContainer{
		height: 206px;
		margin-top:10px;
	}
	.visDiv .numDiv,.uptimeDiv .numDiv,.salesDiv .numDiv{
		position: absolute;
		top:20px;
		left:20px;
	}
	.uptimeDiv .numDiv,.salesDiv .numDiv{
		top:10px;
		left: 10px;
	}
	.visDiv .numDiv span{
		color:#63b919;
	}
	.uptimeContainer,#salesContainer{
		height: 98px;
		margin-top: 10px;
	}
	.uptimeDiv span,.salesDiv span{
		font-size:20px;
	}
	.uptimeDiv span{
		color: #7c30bc;
	}
	.salesDiv span {
		color: #63b919;
	}
</style> 