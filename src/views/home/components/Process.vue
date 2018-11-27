<template>
  <div>
    <div class="box">
      <h3>股票图</h3>
      <div id="container" class="container"></div>
      <button @click="updateStcockChart" :disabled="!stockChart">更新数据范围</button>
    </div>

    <div class="box">
      <h3>
        更多图表类型：
        <select @change="moreChart()" v-model="type">
          <option v-for="s in moreSamples" :key="s.code" :value="s.code">{{s.name}}</option>
        </select>
      </h3>
      <div id="highcharts-more" class="container"></div>
    </div>

    <div class="box">
      <h3>地图</h3>
      <div id="highmaps" class="container"></div>
    </div>

    <div class="box">
      <h3>使用封装的组件生产</h3>
      <highcharts-component :options="options" :styles="styles" ref="simpleChart"></highcharts-component>
      <button @click="updateChart">更新图表</button>
    </div>
  </div>
</template>

<script>
import Highcharts from "highcharts/highstock";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsDrilldown from "highcharts/modules/drilldown";
import Highcharts3D from "highcharts/highcharts-3d";
import Highmaps from "highcharts/modules/map";
import $ from "jquery";
HighchartsMore(Highcharts);
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);
Highmaps(Highcharts);

import HighchartsComponent from "../../../components/HighchartsComponent.vue";

export default {
  name: "app",
  data() {
    return {
      stockChart: null,

      type: "columnrange",
      moreSamples: [
        {
          name: "柱形范围图",
          code: "columnrange"
        },
        {
          name: "下钻",
          code: "drilldown"
        },
        {
          name: "3D 饼图",
          code: "3dpie"
        }
      ],

      chart: null,
      options: {
        xAxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ]
        },
        yAxis: {
          title: {
            text: "Temperature"
          },
          lineWidth: 2,
          lineColor: "#F33",
          id: "temperature-axis"
        },
        series: [
          {
            name: "Temperature",
            data: [
              7.0,
              6.9,
              9.5,
              14.5,
              18.2,
              21.5,
              25.2,
              26.5,
              23.3,
              18.3,
              13.9,
              9.6
            ],
            color: "#F33"
          }
        ]
      },
      styles: {
        // width: 375,
        // height: 400
      }
    };
  },
  components: {
    HighchartsComponent
  },
  mounted() {
    this.createChart();
    this.moreChart();
    this.highmaps();
  },
  methods: {
    updateChart() {
      // 通过 refs 获取组件信息
      this.$refs.simpleChart.chart.series[0].update({
        color: "#000"
      });
    },
    updateStcockChart() {
      var rangeSelector = this.stockChart.rangeSelector,
        selected = rangeSelector.selected,
        total = rangeSelector.buttons.length;
      selected++;
      if (selected >= total) {
        selected = 0;
      }

      this.stockChart.rangeSelector.clickButton(selected);
    },
    createChart() {
      Highcharts.setOptions({
        lang: {
          rangeSelectorZoom: ""
        }
      });
      $.getJSON(
        "https://data.jianshukeji.com/jsonp?filename=json/aapl-ohlcv.json&callback=?",
        data => {
          var ohlc = [],
            volume = [],
            dataLength = data.length,
            // set the allowed units for data grouping
            groupingUnits = [
              [
                "week", // unit name
                [1] // allowed multiples
              ],
              ["month", [1, 2, 3, 4, 6]]
            ],
            i = 0;
          for (i; i < dataLength; i += 1) {
            ohlc.push([
              data[i][0], // the date
              data[i][1], // open
              data[i][2], // high
              data[i][3], // low
              data[i][4] // close
            ]);
            volume.push([
              data[i][0], // the date
              data[i][5] // the volume
            ]);
          }
          // create the chart
          this.stockChart = new Highcharts.stockChart("container", {
            rangeSelector: {
              selected: 1,
              inputDateFormat: "%Y-%m-%d"
            },
            title: {
              text: "苹果历史股价"
            },
            xAxis: {
              dateTimeLabelFormats: {
                millisecond: "%H:%M:%S.%L",
                second: "%H:%M:%S",
                minute: "%H:%M",
                hour: "%H:%M",
                day: "%m-%d",
                week: "%m-%d",
                month: "%y-%m",
                year: "%Y"
              }
            },
            yAxis: [
              {
                labels: {
                  align: "right",
                  x: -3
                },
                title: {
                  text: "股价"
                },
                height: "60%",
                lineWidth: 2
              },
              {
                labels: {
                  align: "right",
                  x: -3
                },
                title: {
                  text: "成交量"
                },
                top: "65%",
                height: "35%",
                offset: 0,
                lineWidth: 2
              }
            ],
            series: [
              {
                type: "candlestick",
                name: "AAPL",
                color: "green",
                lineColor: "green",
                upColor: "red",
                upLineColor: "red",
                tooltip: {},
                data: ohlc,
                dataGrouping: {
                  units: groupingUnits
                }
              },
              {
                type: "column",
                name: "Volume",
                data: volume,
                yAxis: 1,
                dataGrouping: {
                  units: groupingUnits
                }
              }
            ]
          });
        }
      );
    },

    moreChart() {
      var options = this.getMoreOptions(this.type);

      if (this.chart) {
        this.chart.destroy();
      }

      this.chart = new Highcharts.Chart("highcharts-more", options);
    },

    highmaps() {
      Highcharts.setOptions({
        lang: {
          drillUpText: "< 返回 “{series.name}”"
        }
      });
      var map = null,
        geochina = "https://data.jianshukeji.com/jsonp?filename=geochina/";
      $.getJSON(geochina + "china.json&callback=?", function(mapdata) {
        var data = [];
        // 随机数据
        Highcharts.each(mapdata.features, function(md, index) {
          var tmp = {
            name: md.properties.name,
            value: Math.floor(Math.random() * 100 + 1) // 生成 1 ~ 100 随机值
          };
          if (md.properties.drilldown) {
            tmp.drilldown = md.properties.drilldown;
          }
          data.push(tmp);
        });
        map = new Highcharts.Map("highmaps", {
          chart: {
            events: {
              drilldown: function(e) {
                console.log(e);
                // 异步下钻
                if (e.point.drilldown) {
                  var pointName = e.point.properties.fullname;
                  map.showLoading("下钻中，请稍后...");
                  // 获取二级行政地区数据并更新图表
                  $.getJSON(
                    geochina + e.point.drilldown + ".json&callback=?",
                    function(data) {
                      data = Highcharts.geojson(data);
                      Highcharts.each(data, function(d) {
                        if (d.properties.drilldown) {
                          d.drilldown = d.properties.drilldown;
                        }
                        d.value = Math.floor(Math.random() * 100 + 1); // 生成 1 ~ 100 随机值
                      });
                      map.hideLoading();
                      map.addSeriesAsDrilldown(e.point, {
                        name: e.point.name,
                        data: data,
                        dataLabels: {
                          enabled: true,
                          format: "{point.name}"
                        }
                      });
                      map.setTitle({
                        text: pointName
                      });
                    }
                  );
                }
              },
              drillup: function() {
                map.setTitle({
                  text: "中国"
                });
              }
            }
          },
          title: {
            text: "中国地图"
          },
          subtitle: {
            text:
              '<a href="https://www.hcharts.cn/mapdata">点击查看地图数据及详情，注意县级数据为收费数据，如果您有需要，请联系我们购买</a>'
          },
          mapNavigation: {
            enabled: true,
            buttonOptions: {
              verticalAlign: "bottom"
            }
          },
          tooltip: {
            useHTML: true,
            headerFormat: "<table><tr><td>{point.name}</td></tr>",
            pointFormat:
              "<tr><td>全称</td><td>{point.properties.fullname}</td></tr>" +
              "<tr><td>行政编号</td><td>{point.properties.areacode}</td></tr>" +
              "<tr><td>父级</td><td>{point.properties.parent}</td></tr>" +
              "<tr><td>经纬度</td><td>{point.properties.longitude},{point.properties.latitude}</td></tr>",
            footerFormat: "</table>"
          },
          colorAxis: {
            min: 0,
            minColor: "#fff",
            maxColor: "#006cee",
            labels: {
              style: {
                color: "red",
                fontWeight: "bold"
              }
            }
          },
          series: [
            {
              data: data,
              mapData: mapdata,
              joinBy: "name",
              name: "中国地图",
              states: {
                hover: {
                  color: "#a4edba"
                }
              }
            }
          ]
        });
      });
    },

    getMoreOptions(type) {
      if (type === "columnrange") {
        return {
          chart: {
            type: "columnrange",
            inverted: true
          },
          title: {
            text: "每月温度变化范围"
          },
          subtitle: {
            text: "2009 挪威某地"
          },
          xAxis: {
            categories: [
              "一月",
              "二月",
              "三月",
              "四月",
              "五月",
              "六月",
              "七月",
              "八月",
              "九月",
              "十月",
              "十一月",
              "十二月"
            ]
          },
          yAxis: {
            title: {
              text: "温度 ( °C )"
            }
          },
          tooltip: {
            valueSuffix: "°C"
          },
          plotOptions: {
            columnrange: {
              dataLabels: {
                enabled: true,
                formatter: function() {
                  return this.y + "°C";
                }
              }
            }
          },
          legend: {
            enabled: false
          },
          series: [
            {
              name: "温度",
              data: [
                [-9.7, 9.4],
                [-8.7, 6.5],
                [-3.5, 9.4],
                [-1.4, 19.9],
                [0.0, 22.6],
                [2.9, 29.5],
                [9.2, 30.7],
                [7.3, 26.5],
                [4.4, 18.0],
                [-3.1, 11.4],
                [-5.2, 10.4],
                [-13.5, 9.8]
              ]
            }
          ]
        };
      } else if (type === "drilldown") {
        return {
          chart: {
            type: "column"
          },
          title: {
            text: "Basic drilldown"
          },
          xAxis: {
            type: "category"
          },
          legend: {
            enabled: false
          },
          plotOptions: {
            series: {
              borderWidth: 0,
              dataLabels: {
                enabled: true
              }
            }
          },
          series: [
            {
              name: "Things",
              colorByPoint: true,
              data: [
                {
                  name: "Animals",
                  y: 5,
                  drilldown: "animals"
                },
                {
                  name: "Fruits",
                  y: 2,
                  drilldown: "fruits"
                },
                {
                  name: "Cars",
                  y: 4,
                  drilldown: "cars"
                }
              ]
            }
          ],
          drilldown: {
            series: [
              {
                id: "animals",
                data: [
                  ["Cats", 4],
                  ["Dogs", 2],
                  ["Cows", 1],
                  ["Sheep", 2],
                  ["Pigs", 1]
                ]
              },
              {
                id: "fruits",
                data: [
                  {
                    name: "Apples",
                    y: 4
                  },
                  {
                    name: "Oranges",
                    y: 2,
                    drilldown: "third-leves"
                  }
                ]
              },
              {
                id: "cars",
                data: [["Toyota", 4], ["Opel", 2], ["Volkswagen", 2]]
              },
              {
                id: "third-leves",
                data: [["Toyota", 4], ["Opel", 2], ["Volkswagen", 2]]
              }
            ]
          }
        };
      } else if (type === "3dpie") {
        return {
          chart: {
            type: "pie",
            options3d: {
              enabled: true,
              alpha: 45,
              beta: 0
            }
          },
          title: {
            text: "2014年某网站不同浏览器访问量占比"
          },
          tooltip: {
            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: "pointer",
              depth: 35,
              dataLabels: {
                enabled: true,
                format: "{point.name}"
              }
            }
          },
          series: [
            {
              type: "pie",
              name: "浏览器占比",
              data: [
                ["Firefox", 45.0],
                ["IE", 26.8],
                {
                  name: "Chrome",
                  y: 12.8,
                  sliced: true,
                  selected: true
                },
                ["Safari", 8.5],
                ["Opera", 6.2],
                ["Others", 0.7]
              ]
            }
          ]
        };
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.box {
  width: 100%;
  height: 400px;
//   display: inline-block;
//   border: 1px solid #ccc;
margin:5px;
  overflow: hidden;
  position: relative;

  h3 {
    position: absolute;
    top: -10px;
    left: 10px;
    z-index: 1000;
  }
}
</style>
