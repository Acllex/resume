// 基于准备好的dom，初始化echarts实例
const myChart = echarts.init(document.getElementById('skills'));

// 指定图表的配置项和数据
const option = {
    tooltip: {},
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: '静态页面', max: 100 },
            { name: '编程基础', max: 100 },
            { name: 'Vue.js', max: 100 },
            { name: 'React.js', max: 100 },
            { name: '小程序', max: 100 },
            { name: '项目开发', max: 100 },
            { name: '沟通能力', max: 100 }
        ]
    },
    series: [{
        name: '编程能力',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [90, 80, 90, 90, 88, 85, 70],
                name: '能力雷达'
            }
        ]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);