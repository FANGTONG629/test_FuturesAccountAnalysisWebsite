var DATA = {
  "BillAnalysis": {
      "SetContent": {
          "Total": [
              {
                  "MoneyInfoCalItem": [    // 统计信息项
                      {
                          "Item": "胜率"
                      },
                      {
                          "Item": "盈利率"
                      },
                      {
                          "Item": "最大回撤"
                      },
                      {
                          "Item": "最大收益率"
                      },
                      {
                          "Item": "最大风险度"
                      },
                      {
                          "Item": "最长持仓时间",
                          "list": [
                              "<b>合约 </b>",
                              "<b>开仓时间 </b>",
                              "<b>持仓时间 </b>"
                          ]
                      },
                      {
                          "Item": "最短持仓时间",
                          "list": [
                              "<b>合约 </b>",
                              "<b>开仓时间 </b>",
                              "<b>持仓时间 </b>"
                          ]
                      },
                      {
                          "Item": "平均持仓时间"
                      },
                      {
                          "Item": "每笔平均盈利"
                      },
                      {
                          "Item": "每笔平均亏损"
                      },
                      {
                          "Item": "每笔平均净盈亏"
                      },
                      {
                          "Item": "每笔平均盈亏比"
                      }
                  ],
                  "MoneyItem": [  //资金信息
                      {
                          "Item": "  期初权益"
                      },
                      {
                          "Item": "<span style='display: inline-block;width: 7px;'>-</span> 手续费"
                      },
                      {
                          "Item": "+ 盯市盈亏(含浮盈)"
                      },
                      {
                          "Item": "+ 权利金"
                      },
                      {
                          "Item": "+ 出入金"
                      },
                      {
                          "Item": "= 期末权益"
                      },
                      {
                          "Item": "<span style='display: inline-block;width: 7px;'>-</span> 持仓保证金"
                      },
                      {
                          "Item": "<span style='display: inline-block;width: 7px;'>-</span> 冻结资金"
                      },
                      {
                          "Item": "= 可用资金"
                      },
                      {
                          "Item": "  盯市收益"
                      }
                  ],
                  "UserType": 0,
              },
          ]
      },
      "SetUser": {      
          "CulUserType": 0,
          "Total": [
              {
                  "Info": [
                      {
                          "ShowUserName": "00000jyz003(文华模拟)",
                          "UserName": "jyz003"              
                      }
                  ],
                  "UserType": 0
              }
          ]
      }
  },
  "Users": [
      {
          "Info": [
              {
                  "Data": {
                      "CFUser": {
                          "ClientEquity": {  // 账户分析-权益图-权益值
                              "Total": [
                                  {
                                      "ClientEquity": "12596006.93",  // 权益
                                      "MarketValue": "12596056.93",   // 市值权益
                                      "RiskDegree": "0.0000",         // 资金使用率
                                      "date": "20231018"              // 日期
                                  }
                              ]
                          },
                          "IndexProgress": {  //账户分析-收益率图-商品指数进度条
                              "IndexProgress": 0.03123757667652254,   //文华商品指数的涨幅
                              "ProfitRateProgress": 0.5               //该账户的收益率
                          },
                          "MatchRecord": {   //成交记录
                              "Total": [
                                  {
                                      "Array": [{
                                          "BidAsk": "买",                  // 多空
                                          "Contract": "沪银2312",          // 合约
                                          "Currency": "",                  // 币种（只有外盘账户显示）
                                          "ExchangeNo": "上海",            // 交易所
                                          "Fee": "4.39",                  //手续费
                                          "Hedge": "投",                   // 投保
                                          "MTMPL": "-2085.00",             // 盯市盈亏
                                          "Name": "jyz003",                // 账号
                                          "Offset": "平",                  //开平
                                          "PremiumIO": ".00",               //权利金收支
                                          "Price": "5849.000",             //价格
                                          "Turnover": "87735.00",          //成交额
                                          "Vol": "1"                       //手数
                                      }],
                                      "Name": "jyz003",                       // 账号
                                      "SubTotal": {
                                          "Currency": "",                     // 合约
                                          "Fee": 530.36,                    //手续费
                                          "MTMPL": 67275,                   //平仓盈亏
                                          "Num": 26,                        //合计
                                          "PremiumIO": 3280,              //权利金收支
                                          "Turnover": 8219020,            //成交额
                                          "Vol": 38                       //手数
                                      },
                                      "date": "20231018"                    //日期
                                  },
                                  {
                                      "Array": [{
                                          "BidAsk": "卖",                // 多空
                                          "Contract": "沪金2312",            // 合约
                                          "Currency": "CNY",               // 币种（只有外盘账户显示）
                                          "ExchangeNo": "上海",             // 交易所
                                          "Fee": "3.45",                 // 手续费
                                          "Hedge": "套",                  // 投保
                                          "MTMPL": "1500.00",              // 盯市盈亏
                                          "Name": "jyz004",               // 账号
                                          "Offset": "开",                 // 开平
                                          "PremiumIO": "-10.00",            // 权利金收支
                                          "Price": "5850.500",            // 价格
                                          "Turnover": "90000.00",          // 成交额
                                          "Vol": "2"                  // 手数
                                      }],
                                      "Name": "jyz004",                          // 账号
                                      "SubTotal": {
                                          "Currency": "CNY",                // 合约
                                          "Fee": 450.00,               // 手续费
                                          "MTMPL": 12000,              // 平仓盈亏
                                          "Num": 20,                 // 合计
                                          "PremiumIO": 5000,           // 权利金收支
                                          "Turnover": 1500000,         // 成交额
                                          "Vol": 50                 // 手数
                                      },
                                      "date": "20231019"                     // 日期
                                  },
                                  {
                                      "Array": [{
                                          "BidAsk": "买",                // 多空
                                          "Contract": "沪铜2312",           // 合约
                                          "Currency": "USD",              // 币种（只有外盘账户显示）
                                          "ExchangeNo": "伦敦",            // 交易所
                                          "Fee": "2.50",                // 手续费
                                          "Hedge": "投",               // 投保
                                          "MTMPL": "-3000.00",           // 盯市盈亏
                                          "Name": "jyz005",              // 账号
                                          "Offset": "平",                // 开平
                                          "PremiumIO": "20.00",             // 权利金收支
                                          "Price": "6200.000",            // 价格
                                          "Turnover": "120000.00",        // 成交额
                                          "Vol": "5"                 // 手数
                                      }],
                                      "Name": "jyz006",                          // 账号
                                      "SubTotal": {
                                          "Currency": "USD",               // 合约
                                          "Fee": 300.00,              // 手续费
                                          "MTMPL": -5000,             // 平仓盈亏
                                          "Num": 15,                // 合计
                                          "PremiumIO": 2000,            // 权利金收支
                                          "Turnover": 900000,          // 成交额
                                          "Vol": 30                // 手数
                                      },
                                      "date": "20231020"                    // 日期
                                  },
                                  {
                                      "Array": [{
                                          "BidAsk": "卖",                // 多空
                                          "Contract": "螺纹钢2312",        // 合约
                                          "Currency": "",               // 币种（只有外盘账户显示）
                                          "ExchangeNo": "大连",           // 交易所
                                          "Fee": "1.80",               // 手续费
                                          "Hedge": "套",                // 投保
                                          "MTMPL": "2000.00",            // 盯市盈亏
                                          "Name": "jyz007",             // 账号
                                          "Offset": "开",               // 开平
                                          "PremiumIO": "-5.00",            // 权利金收支
                                          "Price": "3500.000",            // 价格
                                          "Turnover": "60000.00",         // 成交额
                                          "Vol": "3"                  // 手数
                                      }],
                                      "Name": "jyz008",                           // 账号
                                      "SubTotal": {
                                          "Currency": "",                // 合约
                                          "Fee": 200.00,              // 手续费
                                          "MTMPL": 3000,               // 平仓盈亏
                                          "Num": 10,                 // 合计
                                          "PremiumIO": 1000,           // 权利金收支
                                          "Turnover": 400000,          // 成交额
                                          "Vol": 20                 // 手数
                                      },
                                      "date": "20231025"                    // 日期
                                  }
                              ]
                          },
                          "Money": {                 //账户分析-资金信息所对应的数据
                              "Total": [
                                  [
                                      {
                                          "Item": "12570797.29"        //期初权益
                                      },
                                      {
                                          "Item": "1433.13"       //- 手续费
                                      },
                                      {
                                          "Item": "41410.00"      //+ 盯市盈亏(含浮盈)
                                      },
                                      {
                                          "Item": "-32013.00"     //+ 权利金
                                      },
                                      {
                                          "Item": "0.00"      //+ 出入金
                                      },
                                      {
                                          "Item": "12578761.16"       //= 期末权益
                                      },
                                      {
                                          "Item": "150150.00"     //- 持仓保证金
                                      },
                                      {
                                          "Item": "0.00"      //- 冻结资金
                                      },
                                      {
                                          "Item": "12428611.16"       //= 可用资金
                                      },
                                      {
                                          "Item": "7963.87"       //盯市收益
                                      }
                                  ]
                              ]
                          },
                          "MoneyInfoCal": {       //账户分析-统计信息所对应的数据
                              "Total": [
                                  {
                                      "Item": "37.18%"       //胜率
                                  },
                                  {
                                      "Item": "0.49%"       //盈利率
                                  },
                                  {
                                      "Item": "120907.77"       //最大回撤
                                  },
                                  {
                                      "Item": "0.77%"       //最大收益率
                                  },
                                  {
                                      "Item": "1.99%"       //最大风险度
                                  },
                                  {
                                      "Item": "6天",       //最长持仓时间
                                      "list": [
                                          "沪银2312",
                                          "20231012",
                                          "20231018"
                                      ]
                                  },
                                  {
                                      "Item": "0天",      //最短持仓时间
                                      "list": [
                                          "PTA401C5500",
                                          "20231023",
                                          "20231023"
                                      ]
                                  },
                                  {
                                      "Item": "1天"      //平均持仓时间
                                  },
                                  {
                                      "Item": "2850.71"      //每笔平均盈利
                                  },
                                  {
                                      "Item": "-421.00"      //每笔平均亏损
                                  },
                                  {
                                      "Item": "2429.71"      //每笔平均净盈亏
                                  },
                                  {
                                      "Item": "6.77"      //每笔平均盈亏比
                                  }
                              ]
                          },
                          "NetGrowthRate": {      // 账户分析-净值曲线图-累计净值
                              "Total": [
                                  {
                                      "NetRate": "1.0020",        //累计净值
                                      "date": "20231018"      //日期
                                  }
                              ]
                          },
                          "OffsetRecord": {       //平仓记录
                              "Total": [
                                  {
                                      "Array": [{
                                          "AccumPL": "2940.00",   // 逐笔平仓盈亏
                                          "BidAsk": "卖",         // 买卖
                                          "Contract": "沪银2312",         // 合约
                                          "Currency": "",         // 币种（只有外盘账户显示
                                          "ExchangeNo": "上海",       // 交易所
                                          "Fee": "4.40",      // 手续费
                                          "Hedge": "投",      // 投保
                                          "MTMPL": "870.00",          // 当日平仓盈亏
                                          "MatchPrice": "5865.000",      //价格
                                          "Name": "jyz003",           // 账号
                                          "OpenDate": "20231012",      //日期
                                          "OpenPrice": "5669.000",        // 开仓价格
                                          "PremiumIO": ".00",         // 权利金收支
                                          "Vol": "1"      // 手数
                                      }],
                                      "Name": "jyz003",       // 账号
                                      "SubTotal": {
                                          "AccumPL": 65990,   // 逐笔平仓盈亏
                                          "Currency": "", // 币种（只有外盘账户显示
                                          "Fee": 412.28,  // 手续费
                                          "MTMPL": 22460,  // 当日平仓盈亏
                                          "Num": 23,      //合计条数
                                          "PremiumIO": -1285,     // 权利金收支
                                          "Vol": 26     // 手数
                                      },
                                      "date": "20231018"  //日期
                                  }
                              ]
                          },
                          "PositionRecord": {  //期末持仓
                              "Total": [
                                  {
                                      "Array": [
                                          {
                                              "BidAsk": "买",     // 多空
                                              "Contract": "工业硅2312-C-16000",       // 合约
                                              "ContractName": "",     // 合约名称
                                              "Currency": "",     // 币种（只有外盘账户显示）
                                              "ExchangeNo": "广州",       // 交易所
                                              "Hedge": "投",          // 投保
                                              "MTMPL": ".00",     // 盯市盈亏
                                              "Margin": ".00",        // 保证金
                                              "MarketValue": 10,      // 市值
                                              "MergeNum": 0,
                                              "Name": "jyz003",       // 账号
                                              "OpenDate": "20231018",     // 开仓日期
                                              "PL": ".00",        // 浮动盈亏
                                              "Price": "10.000",      // 价格
                                              "Vol": "1"      // 手数
                                          }
                                      ],
                                      "Name": "jyz003",     // 账号
                                      "SubTotal": {
                                          "Currency": "",     // 币种（只有外盘账户显示）
                                          "MTMPL": 0,     // 盯市盈亏
                                          "Margin": 0,        // 保证金
                                          "MarketValue": 10,
                                          "Num": 1,   // 合计
                                          "PL": 0,         // 浮动盈亏
                                          "Vol": 1   // 手数
                                      },
                                      "date": "20231018" //日期
                                  }
                              ]
                          },
                          "ProfitAndLoss": {     //账户分析-收益图
                              "Total": [
                                  {
                                      "PL": "25209.64",   //每日收益
                                      "TotalPL": 25209.64,    //每日收益
                                      "date": "20231018"  //日期
                                  }
                              ]
                          },
                          "ProfitRate": {     //账户分析-收益率图
                              "Total": [
                                  {
                                      "Index": 0,   //文华商品指数
                                      "MaxPrincipalProfitRate": "0.0020",
                                      "ProfitRate": "0.0020",  //收益率
                                      "TotalProfitRate": "0.0020",
                                      "date": "20231018"   //日期
                                  }
                              ]
                          },
                          "ProfitRateProgress": {
                              "ProfitRateProgress": 0
                          },
                          "Rating": {   //账户分析-账户评级(从正上方顺时针依次5个)
                              "Value0": 0,  //盈利
                              "Value1": 40,  //稳定性
                              "Value2": 37.17948717948718,  //胜率
                              "Value3": 80,  //市场感知
                              "Value4": 99.66199999999999  //风险控制
                          },
                          "StaticsInfo": {  //交易统计 ['交易所','品种/合约','方向','','','','','','','','','']
                              "SubTotal": {
                                  "AVGPLPerCount": 795.4038461538462,         //平均盈亏(单次)
                                  "AVGPLPerNum": 705.0170454545455,       //平均盈亏(每手)
                                  "Currency": "",     //币种（只有外盘账户显示）
                                  "LossNum": 49,      //亏损次数
                                  "MaxLoss": -5400,   //最大亏损
                                  "MaxWin": 74200,        //最大盈利
                                  "PL": 62041.5,      //盈亏
                                  "TradeNum": 78,     //交易次数
                                  "Vol": 88,      //手数
                                  "WinNum": 29    //盈利次数
                              },
                              "Total": [
                                  {
                                      "AVGPLPerCount": 34400,     //平均盈亏(单次)
                                      "AVGPLPerNum": 17200,    //平均盈亏(每手)
                                      "BS": "多",        //方向
                                      "ContractArray": [
                                          {
                                              "AVGPLPerCount": 34400,         // 平均盈亏（单次）
                                              "AVGPLPerNum": 17200,       // 平均盈亏（每手）
                                              "BS": "多",       //方向
                                              "Contract": "原油2311",     // 合约
                                              "Currency": "",         // 币种（只有外盘账户显示）
                                              "ExchangeNo": "能源",       // 交易所
                                              "LossNum": 1,           // 亏损次数
                                              "MaxLoss": -5400,       // 最大亏损
                                              "MaxWin": 74200,        // 最大盈利
                                              "PL": 68800,            // 盈亏
                                              "TradeNum": 2,      // 交易次数
                                              "Vol": 4,       // 手数
                                              "WinNum": 1     // 盈利次数
                                          }
                                      ],
                                      "ContractName": "",    // 合约名称
                                      "Currency": "",   // 币种（只有外盘账户显示）
                                      "ExchangeNo": "能源", // 交易所
                                      "LossNum": 1, // 亏损次数
                                      "MaxLoss": -5400,  // 最大亏损
                                      "MaxWin": 74200, // 最大盈利
                                      "PL": 68800,     // 盈亏
                                      "TradeNum": 2,  // 交易次数
                                      "Varity": "原油",   // 品种
                                      "Vol": 4,       // 手数
                                      "WinNum": 1         // 盈利次数
                                  }
                              ]
                          },
                          "TopInfo": { //交易Top5信息 TopInfo->0 1 2 3分别代表多头盈利 多头亏损 空头盈利 空头亏损，字段含义相同，只标注第一个数组，其他含义同上
                              "Total": [
                                  {
                                      "Info": [{
                                          "CloseDate": "20231018", //平仓日期
                                          "ClosePrice": "690.300", //平仓价  
                                          "Contract": "原油2311", //合约  
                                          "ContractName": "", //合约名称  
                                          "Currency": "", //币种   
                                          "ExchangeNo": "能源",   //交易所
                                          "MTMPL": "74200.00",   //盈亏  
                                          "Name": "jyz003",   //账户  
                                          "No": 1,   //编号
                                          "OpenDate": "20231013",     //开仓日期
                                          "OpenPrice": "653.200",   //开仓价
                                          "Vol": "2"   //手数
                                      }],
                                      "TopInfo": 0  //多头盈利TOP5
                                  },
                                  {
                                      "Info": [
                                          {
                                              "CloseDate": "20231018",
                                              "ClosePrice": "690.300",
                                              "Contract": "原油2311",
                                              "ContractName": "",
                                              "Currency": "",
                                              "ExchangeNo": "能源",
                                              "MTMPL": "-5400.00",
                                              "Name": "jyz003",
                                              "No": 1,
                                              "OpenDate": "20231018",
                                              "OpenPrice": "693.000",
                                              "Vol": "2"
                                          }
                                      ],
                                      "TopInfo": 1  //多头亏损TOP5
                                  },
                                  {
                                      "Info": [
                                          {
                                              "CloseDate": "20231023",
                                              "ClosePrice": "65960.000",
                                              "Contract": "沪铜2311",
                                              "ContractName": "",
                                              "Currency": "",
                                              "ExchangeNo": "上海",
                                              "MTMPL": "1800.00",
                                              "Name": "jyz003",
                                              "No": 1,
                                              "OpenDate": "20231019",
                                              "OpenPrice": "66320.000",
                                              "Vol": "1"
                                          }
                                      ],
                                      "TopInfo": 2  //空头盈利TOP5
                                  },
                                  {
                                      "Info": [
                                          {
                                              "CloseDate": "20231018",
                                              "ClosePrice": "5849.000",
                                              "Contract": "沪银2312",
                                              "ContractName": "",
                                              "Currency": "",
                                              "ExchangeNo": "上海",
                                              "MTMPL": "-2085.00",
                                              "Name": "jyz003",
                                              "No": 1,
                                              "OpenDate": "20231013",
                                              "OpenPrice": "5710.000",
                                              "Vol": "1"
                                          }
                                      ],
                                      "TopInfo": 3  //空头亏损TOP5
                                  }
                              ]
                          },
                          "VarityPLInfo": {  //交易统计-品种盈亏
                              "Total": [
                                  {
                                      "Detail": [
                                          {
                                              "Date": "20231018",  //日期
                                              "PL": 68800,     //每日盈亏
                                              "TotalPL": 68800   //累计盈亏
                                          }
                                      ],
                                      "PL": 68800,   // 累计盈亏
                                      "Varity": "原油"   //品种
                                  }
                              ]
                          }
                      } ,
                      "IndexSE": 0
                  },
                  "ShowUserName": "00000jyz003(文华模拟)", //账户
                  "UserName": "jyz003" //账户
              }
          ],
          "UserType": 0
      }
  ]
}
document.addEventListener('DOMContentLoaded', function() {
  // 创建表格
  var table = document.createElement('table');
  table.className = 'table';

  // 创建表头
  var thead = document.createElement('thead');
  var headerRow = document.createElement('tr');
  var headers = ["日期", "交易所",  "合约", "买卖", "手数", "价格", "逐笔平仓盈亏", "盯市平仓盈亏", "手续费", "投保","权利金收支"];
  headers.forEach(function(headerText) {
      var header = document.createElement('th');
      header.textContent = headerText;
      headerRow.appendChild(header);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // 创建表体并填充数据
  var tbody = document.createElement('tbody');
  table.appendChild(tbody); // 在这里添加tbody到table中

  // 用于存储日期和对应行的映射
  var dateRowsMap = {};

  // 遍历PositionRecord.Total数组中的所有元素
  DATA.Users[0].Info[0].Data.CFUser.OffsetRecord.Total.forEach(function(total) {
      var array = total.Array;
      var date = total.date; // 从total对象中获取date属性

      // 如果日期不存在于映射中，则创建一个新行并添加到映射中
      if (!dateRowsMap[date]) {
          var dateRow = document.createElement('tr');
          var dateCell = document.createElement('td');
          dateCell.colSpan = headers.length;
          dateCell.textContent = date;
          dateCell.classList.add('clickable');
          dateCell.onclick = function() {
              toggleRows(date);
          };
          dateRow.appendChild(dateCell);
          tbody.appendChild(dateRow);
          dateRowsMap[date] = {
              totalRow: null,
              dataRows: []
          };
      }

      // 为每个条目创建行并添加到映射中的对应日期数组
      array.forEach(function(item) {
          var row = document.createElement('tr');
          var plClass = item.PL >= 0 ? 'text-success' : 'text-danger';
          var mtmplClass = item.MTMPL >= 0 ? 'text-success' : 'text-danger';
          row.innerHTML = `
              <td></td>
              <td>${item.ExchangeNo}</td>
              <td>${item.Contract}</td>
              <td>${item.BidAsk}</td>
              <td>${item.Vol}</td>
              <td>${item.MatchPrice}</td>
              <td class="${plClass}">${item.AccumPL}</td>
              <td class="${mtmplClass}">${item.MTMPL}</td>
              <td>${item.Fee}</td>
              <td>${item.Hedge}</td>
              <td>${item.PremiumIO}</td>
          `;
          dateRowsMap[date].dataRows.push(row);
          tbody.appendChild(row);
      });

// 创建合计行
var subTotal = {
  "AccumPL": 0,
  "MTMPL": 0,
  "PremiumIO": 0,
  "Vol": 0
};
var messageCount = array.length; // 计算信息条数
dateRowsMap[date].dataRows.forEach(function(row) { 
  var rowData = rowToItem(row); // 获取当前行的数据对象
  subTotal.AccumPL += rowData.AccumPL;
  subTotal.MTMPL += rowData.MTMPL;
  subTotal.PremiumIO += rowData.PremiumIO;
  subTotal.Vol += rowData.Vol;
});

var totalRow = document.createElement('tr');
totalRow.innerHTML = `
<td>合计 共${messageCount}条</td>
<td colspan="1"></td>
<td></td>
<td></td>
<td>${subTotal.Vol.toFixed(2)}</td>
<td></td>
<td>${subTotal.AccumPL.toFixed(2)}</td>
<td>${subTotal.MTMPL.toFixed(2)}</td>
<td></td>
<td></td>
<td>${subTotal.PremiumIO.toFixed(2)}</td>
`;
totalRow.className = 'total-row';
dateRowsMap[date].totalRow = totalRow;
tbody.appendChild(totalRow);

  // 将表格添加到容器中
  var tableContainer = document.getElementById('tableContainer');
  tableContainer.appendChild(table);

  // 用于切换行的显示和隐藏
  function toggleRows(date) {
      var dateGroup = dateRowsMap[date];
      dateGroup.dataRows.forEach(function(row) {
          row.style.display = row.style.display === 'none' ? '' : 'none';
      });
      dateGroup.totalRow.style.display = dateGroup.dataRows[0].style.display;
  }

  // 添加CSS样式
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = `
      .text-success { color: green; }
      .text-danger { color: red; }
      .clickable { cursor: pointer; }
      .total-row { font-weight: bold; }
  `;
  document.head.appendChild(style);
  function rowToItem(row) {
    var cells =
  row.getElementsByTagName('td');
  return {
      AccumPL: parseFloat(cells[6].textContent),
      MTMPL: parseFloat(cells[7].textContent),
      PremiumIO: parseFloat(cells[10].textContent),
      Vol: parseFloat(cells[4].textContent)
  };}
});

});

