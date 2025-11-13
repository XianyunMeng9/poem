// 图表实例
let networkChart, mapChart, timelineChart, radarChart, wordcloudChart;

// 初始化所有图表
document.addEventListener('DOMContentLoaded', function() {
    initNetworkChart();
    initMapChart();
    initTimelineChart();
    initPoetCharts();
    setupEventListeners();
});

// 初始化网络图
function initNetworkChart() {
    networkChart = echarts.init(document.getElementById('network-chart'));
    const option = {
        title: {
            text: '唐诗宋词意象共现网络',
            subtext: '节点大小表示意象出现频率，连线粗细表示共现强度',
            left: 'center'
        },
        tooltip: {},
        legend: {
            data: ['天文', '地理', '植物', '动物', '其他'],
            orient: 'vertical',
            right: 10,
            top: 'center'
        },
        series: [{
            type: 'graph',
            layout: 'force',
            data: [
                {name: '月', value: 100, category: 0, symbolSize: 40},
                {name: '风', value: 80, category: 0, symbolSize: 35},
                {name: '云', value: 70, category: 0, symbolSize: 30},
                {name: '星', value: 50, category: 0, symbolSize: 25},
                {name: '雨', value: 60, category: 0, symbolSize: 28},
                {name: '山', value: 85, category: 1, symbolSize: 36},
                {name: '水', value: 75, category: 1, symbolSize: 33},
                {name: '江', value: 65, category: 1, symbolSize: 29},
                {name: '河', value: 55, category: 1, symbolSize: 26},
                {name: '海', value: 45, category: 1, symbolSize: 23},
                {name: '柳', value: 70, category: 2, symbolSize: 30},
                {name: '松', value: 50, category: 2, symbolSize: 25},
                {name: '梅', value: 60, category: 2, symbolSize: 28},
                {name: '竹', value: 45, category: 2, symbolSize: 23},
                {name: '菊', value: 40, category: 2, symbolSize: 22},
                {name: '雁', value: 55, category: 3, symbolSize: 26},
                {name: '马', value: 50, category: 3, symbolSize: 25},
                {name: '燕', value: 45, category: 3, symbolSize: 23},
                {name: '蝉', value: 35, category: 3, symbolSize: 20},
                {name: '酒', value: 75, category: 4, symbolSize: 33},
                {name: '剑', value: 40, category: 4, symbolSize: 22},
                {name: '舟', value: 45, category: 4, symbolSize: 23},
                {name: '楼', value: 50, category: 4, symbolSize: 25}
            ],
            links: [
                {source: '月', target: '酒', value: 8},
                {source: '月', target: '风', value: 7},
                {source: '月', target: '水', value: 6},
                {source: '柳', target: '离别', value: 9},
                {source: '柳', target: '春', value: 7},
                {source: '雁', target: '秋', value: 8},
                {source: '雁', target: '书', value: 6},
                {source: '山', target: '水', value: 9},
                {source: '山', target: '云', value: 7},
                {source: '酒', target: '剑', value: 6},
                {source: '酒', target: '诗', value: 7},
                {source: '风', target: '雨', value: 6},
                {source: '江', target: '月', value: 5},
                {source: '江', target: '舟', value: 6},
                {source: '梅', target: '雪', value: 7},
                {source: '松', target: '山', value: 6},
                {source: '竹', target: '风', value: 5},
                {source: '菊', target: '秋', value: 6},
                {source: '马', target: '剑', value: 5},
                {source: '燕', target: '春', value: 6}
            ],
            categories: [
                {name: '天文'},
                {name: '地理'},
                {name: '植物'},
                {name: '动物'},
                {name: '其他'}
            ],
            roam: true,
            focusNodeAdjacency: true,
            label: {
                show: true,
                position: 'right',
                formatter: '{b}'
            },
            lineStyle: {
                color: 'source',
                curveness: 0.3
            },
            emphasis: {
                lineStyle: {
                    width: 5
                }
            }
        }]
    };
    networkChart.setOption(option);
}

// 初始化地图
function initMapChart() {
    mapChart = echarts.init(document.getElementById('map-chart'));
    const option = {
        title: {
            text: '唐代诗人地域情感分布',
            subtext: '基于《全唐诗》数据分析',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>情感分值: {c}'
        },
        visualMap: {
            min: 0.3,
            max: 0.7,
            text: ['忧郁', '豪迈'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#fee090', '#fdae61', '#f46d43', '#d73027']
            }
        },
        series: [{
            name: '情感分值',
            type: 'map',
            map: 'china',
            roam: true,
            emphasis: {
                label: {
                    show: true
                }
            },
            data: [
                {name: '北京', value: 0.52},
                {name: '天津', value: 0.48},
                {name: '河北', value: 0.51},
                {name: '山西', value: 0.49},
                {name: '内蒙古', value: 0.45},
                {name: '辽宁', value: 0.47},
                {name: '吉林', value: 0.46},
                {name: '黑龙江', value: 0.44},
                {name: '上海', value: 0.55},
                {name: '江苏', value: 0.58},
                {name: '浙江', value: 0.57},
                {name: '安徽', value: 0.53},
                {name: '福建', value: 0.54},
                {name: '江西', value: 0.52},
                {name: '山东', value: 0.50},
                {name: '河南', value: 0.49},
                {name: '湖北', value: 0.51},
                {name: '湖南', value: 0.53},
                {name: '广东', value: 0.56},
                {name: '广西', value: 0.55},
                {name: '海南', value: 0.57},
                {name: '重庆', value: 0.50},
                {name: '四川', value: 0.52},
                {name: '贵州', value: 0.51},
                {name: '云南', value: 0.53},
                {name: '西藏', value: 0.48},
                {name: '陕西', value: 0.47},
                {name: '甘肃', value: 0.42},
                {name: '青海', value: 0.41},
                {name: '宁夏', value: 0.43},
                {name: '新疆', value: 0.40},
                {name: '台湾', value: 0.56},
                {name: '香港', value: 0.57},
                {name: '澳门', value: 0.56}
            ]
        }]
    };
    mapChart.setOption(option);
}

// 初始化时间线图表
function initTimelineChart() {
    timelineChart = echarts.init(document.getElementById('timeline-chart'));
    const option = {
        title: {
            text: '自然意象使用频率历史变迁',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['明月', '杨柳', '鸿雁', '骏马', '美酒'],
            top: 30
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['先秦', '汉代', '魏晋', '唐代', '宋代', '元代', '明代', '清代']
        },
        yAxis: {
            type: 'value',
            name: '使用频率'
        },
        series: [
            {
                name: '明月',
                type: 'line',
                data: [20, 25, 35, 85, 70, 60, 55, 50],
                smooth: true,
                lineStyle: {
                    width: 3
                }
            },
            {
                name: '杨柳',
                type: 'line',
                data: [15, 20, 30, 65, 75, 60, 55, 50],
                smooth: true,
                lineStyle: {
                    width: 3
                }
            },
            {
                name: '鸿雁',
                type: 'line',
                data: [10, 15, 25, 50, 45, 40, 35, 30],
                smooth: true,
                lineStyle: {
                    width: 3
                }
            },
            {
                name: '骏马',
                type: 'line',
                data: [25, 30, 35, 60, 40, 35, 30, 25],
                smooth: true,
                lineStyle: {
                    width: 3
                }
            },
            {
                name: '美酒',
                type: 'line',
                data: [15, 20, 40, 70, 65, 55, 50, 45],
                smooth: true,
                lineStyle: {
                    width: 3
                }
            }
        ]
    };
    timelineChart.setOption(option);
}

// 初始化诗人分析图表
function initPoetCharts() {
    // 初始化雷达图
    radarChart = echarts.init(document.getElementById('radar-chart'));
    updatePoetCharts('libai');
    
    // 初始化词云图
    wordcloudChart = echarts.init(document.getElementById('wordcloud-chart'));
}

// 更新诗人图表
function updatePoetCharts(poetId) {
    const poetData = {
        libai: {
            name: '李白',
            description: '李白作为盛唐浪漫主义诗人的代表，其诗歌中充满了豪放不羁的意象。他偏爱"明月"、"美酒"、"长剑"等意象，体现了其豪迈洒脱的性格特点。同时，"白发"、"秋霜"等意象也反映了他对时光流逝的感慨。',
            radarData: [95, 85, 75, 80, 70, 60],
            wordcloudData: [
                {name: '明月', value: 100},
                {name: '美酒', value: 90},
                {name: '长江', value: 80},
                {name: '青山', value: 75},
                {name: '白云', value: 70},
                {name: '长风', value: 65},
                {name: '长剑', value: 60},
                {name: '白发', value: 55},
                {name: '秋霜', value: 50},
                {name: '飞鸟', value: 45},
                {name: '落花', value: 40},
                {name: '孤帆', value: 35},
                {name: '玉壶', value: 30},
                {name: '金樽', value: 25},
                {name: '瑶台', value: 20}
            ]
        },
        dufu: {
            name: '杜甫',
            description: '杜甫作为唐代现实主义诗人的代表，其诗歌关注社会现实与民生疾苦。他常用"秋风"、"茅屋"、"战马"等意象，反映社会动荡与人民苦难。同时，"孤雁"、"寒江"等意象也体现了他深沉的忧国忧民之情。',
            radarData: [60, 40, 30, 85, 75, 65],
            wordcloudData: [
                {name: '秋风', value: 100},
                {name: '茅屋', value: 90},
                {name: '战马', value: 85},
                {name: '孤雁', value: 80},
                {name: '寒江', value: 75},
                {name: '白发', value: 70},
                {name: '泪痕', value: 65},
                {name: '烽火', value: 60},
                {name: '山河', value: 55},
                {name: '百姓', value: 50}
            ]
        },
        sushi: {
            name: '苏轼',
            description: '苏轼作为宋代文豪，其诗词兼具豪放与婉约之风。他常用"明月"、"江水"、"扁舟"等意象，表达豁达的人生态度。同时，"梅花"、"竹石"等意象也体现了他高洁的品格与不屈的精神。',
            radarData: [80, 70, 40, 85, 75, 65],
            wordcloudData: [
                {name: '明月', value: 100},
                {name: '江水', value: 90},
                {name: '扁舟', value: 85},
                {name: '梅花', value: 80},
                {name: '竹石', value: 75},
                {name: '风雨', value: 70},
                {name: '青山', value: 65},
                {name: '白发', value: 60},
                {name: '酒', value: 55},
                {name: '梦', value: 50}
            ]
        },
        liquingzhao: {
            name: '李清照',
            description: '李清照作为宋代婉约词人的代表，其词作情感细腻，意象精巧。她常用"黄花"、"梧桐"、"细雨"等意象，表达闺中愁绪与家国之思。同时，"雁字"、"西楼"等意象也体现了她对远方亲人的思念之情。',
            radarData: [70, 40, 20, 50, 65, 85],
            wordcloudData: [
                {name: '黄花', value: 100},
                {name: '梧桐', value: 90},
                {name: '细雨', value: 85},
                {name: '雁字', value: 80},
                {name: '西楼', value: 75},
                {name: '残酒', value: 70},
                {name: '泪', value: 65},
                {name: '瘦', value: 60},
                {name: '愁', value: 55},
                {name: '梦', value: 50}
            ]
        },
        wangwei: {
            name: '王维',
            description: '王维作为唐代山水田园诗派的代表，其诗歌意境空灵，充满禅意。他常用"空山"、"明月"、"清泉"等意象，营造宁静淡远的意境。同时，"白云"、"青苔"等意象也体现了他对自然之美的独特感悟。',
            radarData: [75, 30, 20, 90, 70, 80],
            wordcloudData: [
                {name: '空山', value: 100},
                {name: '明月', value: 90},
                {name: '清泉', value: 85},
                {name: '白云', value: 80},
                {name: '青苔', value: 75},
                {name: '竹林', value: 70},
                {name: '落花', value: 65},
                {name: '鸟鸣', value: 60},
                {name: '禅意', value: 55},
                {name: '幽静', value: 50}
            ]
        }
    };
    
    const data = poetData[poetId];
    document.getElementById('poet-name').textContent = data.name + '的意象世界';
    document.getElementById('poet-description').textContent = data.description;
    
    // 更新雷达图
    const radarOption = {
        title: {
            text: data.name + '意象偏好雷达图',
            left: 'center'
        },
        tooltip: {},
        radar: {
            indicator: [
                { name: '明月', max: 100 },
                { name: '美酒', max: 100 },
                { name: '长剑', max: 100 },
                { name: '山水', max: 100 },
                { name: '风云', max: 100 },
                { name: '花鸟', max: 100 }
            ]
        },
        series: [{
            type: 'radar',
            data: [
                {
                    value: data.radarData,
                    name: data.name,
                    areaStyle: {}
                }
            ]
        }]
    };
    radarChart.setOption(radarOption);
    
    // 更新词云图
    const wordcloudOption = {
        title: {
            text: data.name + '常用意象词云',
            left: 'center'
        },
        tooltip: {},
        series: [{
            type: 'wordCloud',
            shape: 'circle',
            left: 'center',
            top: 'center',
            width: '90%',
            height: '90%',
            right: null,
            bottom: null,
            sizeRange: [12, 60],
            rotationRange: [-90, 90],
            rotationStep: 45,
            gridSize: 8,
            drawOutOfBound: false,
            textStyle: {
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                color: function () {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160 + 95),
                        Math.round(Math.random() * 160 + 95),
                        Math.round(Math.random() * 160 + 95)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                focus: 'self',
                textStyle: {
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data: data.wordcloudData
        }]
    };
    wordcloudChart.setOption(wordcloudOption);
}

// 设置事件监听器
function setupEventListeners() {
    // 时间线按钮交互
    document.querySelectorAll('.timeline-section .controls button').forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的active类
            document.querySelectorAll('.timeline-section .controls button').forEach(btn => {
                btn.classList.remove('active');
            });
            // 给当前点击的按钮添加active类
            this.classList.add('active');
            
            // 根据按钮的data-type属性更新图表
            const type = this.getAttribute('data-type');
            // 这里可以添加更新图表的逻辑
        });
    });

    // 诗人选择交互
    document.getElementById('poet-select').addEventListener('change', function() {
        updatePoetCharts(this.value);
    });

    // 窗口调整大小时重置图表大小
    window.addEventListener('resize', function() {
        networkChart.resize();
        mapChart.resize();
        timelineChart.resize();
        radarChart.resize();
        wordcloudChart.resize();
    });
}