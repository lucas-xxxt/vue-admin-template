// const Mock = require('mockjs')

const data = [
  {
    id: 1,
    name: '小学语文',
    stage_id: 2,
    subject_id: 1,
    ordinal: 1,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 2,
    name: '小学数学',
    stage_id: 2,
    subject_id: 2,
    ordinal: 2,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 3,
    name: '小学英语',
    stage_id: 2,
    subject_id: 3,
    ordinal: 3,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 4,
    name: '小学道德与法治',
    stage_id: 2,
    subject_id: 7,
    ordinal: 4,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 5,
    name: '小学科学',
    stage_id: 2,
    subject_id: 10,
    ordinal: 5,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 6,
    name: '小学信息技术',
    stage_id: 2,
    subject_id: 12,
    ordinal: 6,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 7,
    name: '小学音乐',
    stage_id: 2,
    subject_id: 13,
    ordinal: 7,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 8,
    name: '小学美术',
    stage_id: 2,
    subject_id: 14,
    ordinal: 8,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 9,
    name: '小学体育',
    stage_id: 2,
    subject_id: 15,
    ordinal: 9,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 41,
    name: '小学心理健康',
    stage_id: 2,
    subject_id: 19,
    ordinal: 10,
    create_time: '2019-11-22T14:11:39',
    update_time: '2022-07-22T10:42:21'
  },
  {
    id: 42,
    name: '小学综合实践活动',
    stage_id: 2,
    subject_id: 20,
    ordinal: 11,
    create_time: '2019-11-22T14:12:03',
    update_time: '2022-07-22T10:42:34'
  },
  {
    id: 111,
    name: '小学拓展',
    stage_id: 2,
    subject_id: 18,
    ordinal: 12,
    create_time: '2019-02-27T10:38:19',
    update_time: '2022-07-22T10:42:43'
  },
  {
    id: 114,
    name: '小学书法',
    stage_id: 2,
    subject_id: 23,
    ordinal: 13,
    create_time: '2021-08-03T15:29:08',
    update_time: '2022-07-22T10:43:10'
  },
  {
    id: 115,
    name: '小学劳动',
    stage_id: 2,
    subject_id: 17,
    ordinal: 14,
    create_time: '2022-10-08T17:09:38',
    update_time: '2022-10-08T17:09:47'
  },
  {
    id: 117,
    name: '小学藏语',
    stage_id: 2,
    subject_id: 26,
    ordinal: 15,
    create_time: '2022-11-17T15:43:29',
    update_time: '2022-11-17T15:43:39'
  },
  {
    id: 10,
    name: '初中语文',
    stage_id: 3,
    subject_id: 1,
    ordinal: 110,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 11,
    name: '初中数学',
    stage_id: 3,
    subject_id: 2,
    ordinal: 111,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 12,
    name: '初中英语',
    stage_id: 3,
    subject_id: 3,
    ordinal: 112,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 13,
    name: '初中物理',
    stage_id: 3,
    subject_id: 4,
    ordinal: 113,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 14,
    name: '初中化学',
    stage_id: 3,
    subject_id: 5,
    ordinal: 114,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 15,
    name: '初中生物',
    stage_id: 3,
    subject_id: 6,
    ordinal: 115,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 16,
    name: '初中道德与法治',
    stage_id: 3,
    subject_id: 7,
    ordinal: 116,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 17,
    name: '初中历史',
    stage_id: 3,
    subject_id: 8,
    ordinal: 117,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 18,
    name: '初中地理',
    stage_id: 3,
    subject_id: 9,
    ordinal: 118,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 19,
    name: '初中科学',
    stage_id: 3,
    subject_id: 10,
    ordinal: 119,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T12:02:50'
  },
  {
    id: 21,
    name: '初中历史与社会',
    stage_id: 3,
    subject_id: 11,
    ordinal: 120,
    create_time: '2019-02-27T10:38:19',
    update_time: '2022-07-04T18:19:48'
  },
  {
    id: 20,
    name: '初中信息技术',
    stage_id: 3,
    subject_id: 12,
    ordinal: 121,
    create_time: '2019-02-27T10:38:19',
    update_time: '2022-07-04T18:19:38'
  },
  {
    id: 22,
    name: '初中音乐',
    stage_id: 3,
    subject_id: 13,
    ordinal: 122,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 47,
    name: '初中心理健康',
    stage_id: 3,
    subject_id: 19,
    ordinal: 122,
    create_time: '2023-02-20T10:33:11',
    update_time: '2023-02-20T10:42:03'
  },
  {
    id: 112,
    name: '初中拓展',
    stage_id: 3,
    subject_id: 18,
    ordinal: 122,
    create_time: '2019-02-27T10:38:19',
    update_time: '2022-07-04T18:19:14'
  },
  {
    id: 23,
    name: '初中美术',
    stage_id: 3,
    subject_id: 14,
    ordinal: 123,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 24,
    name: '初中体育与健康',
    stage_id: 3,
    subject_id: 15,
    ordinal: 124,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 25,
    name: '初中劳动技术',
    stage_id: 3,
    subject_id: 17,
    ordinal: 125,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 116,
    name: '初中综合实践活动',
    stage_id: 3,
    subject_id: 20,
    ordinal: 126,
    create_time: '2022-11-16T17:34:08',
    update_time: '2022-11-16T17:34:16'
  },
  {
    id: 43,
    name: '初中日语',
    stage_id: 3,
    subject_id: 21,
    ordinal: 127,
    create_time: '2020-10-20T19:35:12',
    update_time: '2022-11-16T17:34:23'
  },
  {
    id: 45,
    name: '初中俄语',
    stage_id: 3,
    subject_id: 22,
    ordinal: 128,
    create_time: '2020-12-30T17:58:54',
    update_time: '2022-11-16T17:34:28'
  },
  {
    id: 53,
    name: '初中社会',
    stage_id: 3,
    subject_id: 24,
    ordinal: 129,
    create_time: '2021-12-15T14:09:27',
    update_time: '2022-11-16T17:34:33'
  },
  {
    id: 118,
    name: '初中藏语',
    stage_id: 3,
    subject_id: 26,
    ordinal: 130,
    create_time: '2022-11-17T15:44:00',
    update_time: '2022-11-17T15:44:14'
  },
  {
    id: 26,
    name: '高中语文',
    stage_id: 4,
    subject_id: 1,
    ordinal: 226,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 27,
    name: '高中数学',
    stage_id: 4,
    subject_id: 2,
    ordinal: 227,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 28,
    name: '高中英语',
    stage_id: 4,
    subject_id: 3,
    ordinal: 228,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 29,
    name: '高中物理',
    stage_id: 4,
    subject_id: 4,
    ordinal: 229,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 30,
    name: '高中化学',
    stage_id: 4,
    subject_id: 5,
    ordinal: 230,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 31,
    name: '高中生物',
    stage_id: 4,
    subject_id: 6,
    ordinal: 231,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 32,
    name: '高中政治',
    stage_id: 4,
    subject_id: 7,
    ordinal: 232,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 33,
    name: '高中历史',
    stage_id: 4,
    subject_id: 8,
    ordinal: 233,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 34,
    name: '高中地理',
    stage_id: 4,
    subject_id: 9,
    ordinal: 234,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 35,
    name: '高中信息技术',
    stage_id: 4,
    subject_id: 12,
    ordinal: 235,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 113,
    name: '高中拓展',
    stage_id: 4,
    subject_id: 18,
    ordinal: 235,
    create_time: '2019-02-27T10:38:19',
    update_time: '2022-07-04T18:20:47'
  },
  {
    id: 120,
    name: '高中心理健康',
    stage_id: 4,
    subject_id: 19,
    ordinal: 235,
    create_time: '2023-09-18T15:45:08',
    update_time: '2023-09-18T15:45:23'
  },
  {
    id: 36,
    name: '高中音乐',
    stage_id: 4,
    subject_id: 13,
    ordinal: 236,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 37,
    name: '高中美术',
    stage_id: 4,
    subject_id: 14,
    ordinal: 237,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 38,
    name: '高中体育与健康',
    stage_id: 4,
    subject_id: 15,
    ordinal: 238,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 39,
    name: '高中通用技术',
    stage_id: 4,
    subject_id: 16,
    ordinal: 239,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 40,
    name: '高中劳动技术',
    stage_id: 4,
    subject_id: 17,
    ordinal: 240,
    create_time: '2019-02-27T10:38:19',
    update_time: '2019-02-27T10:38:19'
  },
  {
    id: 44,
    name: '高中日语',
    stage_id: 4,
    subject_id: 21,
    ordinal: 242,
    create_time: '2020-10-20T19:35:32',
    update_time: '2020-10-30T09:40:18'
  },
  {
    id: 46,
    name: '高中俄语',
    stage_id: 4,
    subject_id: 22,
    ordinal: 243,
    create_time: '2020-12-30T17:59:17',
    update_time: '2020-12-30T17:59:17'
  },
  {
    id: 119,
    name: '高中藏语',
    stage_id: 4,
    subject_id: 26,
    ordinal: 244,
    create_time: '2022-11-17T15:44:32',
    update_time: '2022-11-17T15:44:42'
  },
  {
    id: 300,
    name: '高中综合实践活动',
    stage_id: 4,
    subject_id: 20,
    ordinal: 245,
    create_time: '2022-11-29T17:21:55',
    update_time: '2022-11-29T17:22:04'
  },
  {
    id: 50,
    name: '中职语文',
    stage_id: 6,
    subject_id: 1,
    ordinal: 301,
    create_time: '2021-08-02T13:42:50',
    update_time: '2022-07-22T10:44:06'
  },
  {
    id: 51,
    name: '中职数学',
    stage_id: 6,
    subject_id: 2,
    ordinal: 302,
    create_time: '2021-08-02T13:43:23',
    update_time: '2022-07-22T10:44:12'
  },
  {
    id: 52,
    name: '中职英语',
    stage_id: 6,
    subject_id: 3,
    ordinal: 303,
    create_time: '2021-08-02T13:43:44',
    update_time: '2022-07-22T10:44:22'
  },
  {
    id: 55,
    name: '中职物理',
    stage_id: 6,
    subject_id: 4,
    ordinal: 305,
    create_time: '2022-06-23T10:16:40',
    update_time: '2022-07-22T10:44:33'
  },
  {
    id: 56,
    name: '中职化学',
    stage_id: 6,
    subject_id: 5,
    ordinal: 306,
    create_time: '2022-06-23T10:18:51',
    update_time: '2022-07-22T10:44:39'
  },
  {
    id: 57,
    name: '中职信息技术',
    stage_id: 6,
    subject_id: 12,
    ordinal: 307,
    create_time: '2022-06-23T10:20:02',
    update_time: '2022-07-22T10:44:51'
  },
  {
    id: 54,
    name: '中职拓展',
    stage_id: 6,
    subject_id: 18,
    ordinal: 308,
    create_time: '2022-02-16T10:26:30',
    update_time: '2022-07-22T10:45:00'
  },
  {
    id: 58,
    name: '中职专业课',
    stage_id: 6,
    subject_id: 25,
    ordinal: 309,
    create_time: '2022-07-04T18:16:38',
    update_time: '2022-07-22T10:45:08'
  },
  {
    id: 59,
    name: '中职思想政治',
    stage_id: 6,
    subject_id: 7,
    ordinal: 310,
    create_time: '2022-09-19T16:12:44',
    update_time: '2022-09-19T16:12:51'
  },
  {
    id: 60,
    name: '中职历史',
    stage_id: 6,
    subject_id: 8,
    ordinal: 311,
    create_time: '2022-09-19T16:13:12',
    update_time: '2022-09-19T16:13:20'
  },
  {
    id: 10000,
    name: '机械制图',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10000,
    create_time: '2023-04-24T17:16:14',
    update_time: '2023-05-16T13:36:21'
  },
  {
    id: 10001,
    name: '机械基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10001,
    create_time: '2023-04-24T17:16:35',
    update_time: '2023-05-16T13:36:30'
  },
  {
    id: 10002,
    name: '电工技术基础与技能',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10002,
    create_time: '2023-04-24T17:17:02',
    update_time: '2023-05-16T13:36:37'
  },
  {
    id: 10003,
    name: '电子技术基础与技能',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10003,
    create_time: '2023-04-24T17:17:20',
    update_time: '2023-05-16T13:36:43'
  },
  {
    id: 10004,
    name: '电工电子技术与技能',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10004,
    create_time: '2023-04-24T17:17:37',
    update_time: '2023-05-16T13:36:49'
  },
  {
    id: 10005,
    name: '数控铣床编程与操作',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10005,
    create_time: '2023-04-24T17:17:57',
    update_time: '2023-05-16T13:36:54'
  },
  {
    id: 10006,
    name: '数控车床编程与操作',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10006,
    create_time: '2023-04-24T17:18:23',
    update_time: '2023-05-16T13:37:00'
  },
  {
    id: 10007,
    name: 'AutoCAD',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10007,
    create_time: '2023-04-24T17:18:43',
    update_time: '2023-05-16T13:37:05'
  },
  {
    id: 10008,
    name: '液压与气压传动',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10008,
    create_time: '2023-04-24T17:19:01',
    update_time: '2023-05-16T13:37:11'
  },
  {
    id: 10009,
    name: '极限配合与技术测量',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10009,
    create_time: '2023-04-24T17:19:21',
    update_time: '2023-05-16T13:37:17'
  },
  {
    id: 10010,
    name: '焊接方法与工艺',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10010,
    create_time: '2023-04-24T17:19:38',
    update_time: '2023-05-16T13:37:23'
  },
  {
    id: 10011,
    name: '金属加工基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10011,
    create_time: '2023-10-11T13:43:17',
    update_time: '2023-10-11T13:43:38'
  },
  {
    id: 10012,
    name: '金属加工与实训',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10012,
    create_time: '2023-10-11T13:46:11',
    update_time: '2023-10-11T13:46:11'
  },
  {
    id: 10013,
    name: '车工加工理论',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10013,
    create_time: '2023-10-11T13:46:31',
    update_time: '2023-10-11T13:46:31'
  },
  {
    id: 10014,
    name: '电器及PLC控制技术',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10014,
    create_time: '2023-10-11T13:46:49',
    update_time: '2023-10-11T13:47:20'
  },
  {
    id: 10015,
    name: '电气控制线路安装与检修',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10015,
    create_time: '2023-10-11T13:47:08',
    update_time: '2023-10-30T13:33:28'
  },
  {
    id: 10016,
    name: '工厂电气控制设备',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10016,
    create_time: '2023-10-11T13:47:46',
    update_time: '2023-10-11T13:47:46'
  },
  {
    id: 10017,
    name: '钳工加工技术',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10017,
    create_time: '2023-10-11T13:48:05',
    update_time: '2023-10-11T13:48:05'
  },
  {
    id: 10018,
    name: '信息录入技术',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10018,
    create_time: '2023-10-11T13:48:24',
    update_time: '2023-10-11T13:48:24'
  },
  {
    id: 10019,
    name: '网站设计与制作',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10019,
    create_time: '2023-10-11T13:48:58',
    update_time: '2023-10-11T13:48:58'
  },
  {
    id: 10020,
    name: '单片机技术与应用',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10020,
    create_time: '2023-10-11T13:49:26',
    update_time: '2023-10-11T13:49:26'
  },
  {
    id: 10022,
    name: '统计基础知识',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10022,
    create_time: '2023-10-11T13:49:59',
    update_time: '2023-10-11T13:49:59'
  },
  {
    id: 10023,
    name: '财政与金融基础知识',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10023,
    create_time: '2023-10-11T13:50:23',
    update_time: '2023-10-11T13:50:23'
  },
  {
    id: 10024,
    name: '经济法律法规',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10024,
    create_time: '2023-10-11T13:50:39',
    update_time: '2023-10-11T13:50:39'
  },
  {
    id: 10025,
    name: '会计信息化',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10025,
    create_time: '2023-10-11T13:50:54',
    update_time: '2023-10-11T13:50:54'
  },
  {
    id: 10026,
    name: '国际贸易实务',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10026,
    create_time: '2023-10-11T13:51:16',
    update_time: '2023-10-11T13:51:16'
  },
  {
    id: 10027,
    name: '商务英语函电',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10027,
    create_time: '2023-10-11T13:51:35',
    update_time: '2024-01-08T10:29:32'
  },
  {
    id: 10028,
    name: '跨境电商基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10028,
    create_time: '2023-10-11T13:51:52',
    update_time: '2023-10-11T13:51:52'
  },
  {
    id: 10029,
    name: '成本会计',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10029,
    create_time: '2023-10-11T13:52:08',
    update_time: '2023-10-11T13:52:08'
  },
  {
    id: 10030,
    name: '税收基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10030,
    create_time: '2023-10-11T13:52:34',
    update_time: '2023-10-11T13:52:34'
  },
  {
    id: 10031,
    name: '天然药物学基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10031,
    create_time: '2023-10-11T13:52:50',
    update_time: '2023-10-11T13:52:50'
  },
  {
    id: 10032,
    name: '临床疾病概要',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10032,
    create_time: '2023-10-11T13:53:05',
    update_time: '2023-10-11T13:53:05'
  },
  {
    id: 10033,
    name: '药物学基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10033,
    create_time: '2023-10-11T13:53:22',
    update_time: '2023-10-11T13:53:22'
  },
  {
    id: 10034,
    name: '药事法规',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10034,
    create_time: '2023-10-11T13:53:39',
    update_time: '2023-10-23T15:45:34'
  },
  {
    id: 10035,
    name: '药剂学基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10035,
    create_time: '2023-10-11T13:54:05',
    update_time: '2023-10-23T15:48:16'
  },
  {
    id: 10036,
    name: '诊断学基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10036,
    create_time: '2023-10-11T13:54:25',
    update_time: '2023-10-11T13:54:25'
  },
  {
    id: 10037,
    name: '前厅服务与管理',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10037,
    create_time: '2023-10-11T14:00:12',
    update_time: '2023-10-23T11:59:29'
  },
  {
    id: 10038,
    name: '餐饮服务与管理',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10038,
    create_time: '2023-10-11T14:00:31',
    update_time: '2023-10-11T14:00:31'
  },
  {
    id: 10039,
    name: '客房服务与管理',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10039,
    create_time: '2023-10-11T14:01:02',
    update_time: '2023-10-11T14:01:02'
  },
  {
    id: 10040,
    name: '旅游心理学',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10040,
    create_time: '2023-10-11T14:01:20',
    update_time: '2023-10-23T15:45:09'
  },
  {
    id: 10041,
    name: '导游实务',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10041,
    create_time: '2023-10-11T14:01:42',
    update_time: '2023-10-11T14:01:42'
  },
  {
    id: 10042,
    name: '导游词编撰实务',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10042,
    create_time: '2023-10-11T14:02:00',
    update_time: '2023-10-11T14:02:00'
  },
  {
    id: 10043,
    name: '旅游概论',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10043,
    create_time: '2023-10-11T14:02:19',
    update_time: '2023-10-23T15:44:52'
  },
  {
    id: 10044,
    name: '中国旅游地理',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10044,
    create_time: '2023-10-11T14:02:35',
    update_time: '2023-10-11T14:02:35'
  },
  {
    id: 10045,
    name: '旅游服务礼仪',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10045,
    create_time: '2023-10-11T14:02:53',
    update_time: '2023-10-11T14:02:53'
  },
  {
    id: 10046,
    name: '土木工程识图',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10046,
    create_time: '2023-10-11T14:03:15',
    update_time: '2023-10-11T14:03:15'
  },
  {
    id: 10047,
    name: '建筑结构',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10047,
    create_time: '2023-10-11T14:17:11',
    update_time: '2023-10-11T14:17:11'
  },
  {
    id: 10048,
    name: '建筑识图与构造',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10048,
    create_time: '2023-10-11T14:17:32',
    update_time: '2023-10-11T14:17:32'
  },
  {
    id: 10049,
    name: '建筑材料',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10049,
    create_time: '2023-10-11T14:17:55',
    update_time: '2023-10-11T14:17:55'
  },
  {
    id: 10050,
    name: '建筑施工组织与管理',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10050,
    create_time: '2023-10-11T14:18:21',
    update_time: '2023-10-11T14:18:21'
  },
  {
    id: 10051,
    name: '建筑工程测量',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10051,
    create_time: '2023-10-11T14:18:46',
    update_time: '2023-10-11T14:18:46'
  },
  {
    id: 10052,
    name: '土木工程力学基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10052,
    create_time: '2023-10-11T14:33:50',
    update_time: '2023-10-11T14:33:50'
  },
  {
    id: 10053,
    name: '机械加工技术',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10053,
    create_time: '2023-10-11T15:09:29',
    update_time: '2023-10-11T15:09:29'
  },
  {
    id: 10054,
    name: '建筑施工工艺',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10053,
    create_time: '2023-10-23T10:39:51',
    update_time: '2023-10-23T10:39:51'
  },
  {
    id: 10055,
    name: '应用文写作基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10055,
    create_time: '2023-11-09T15:10:40',
    update_time: '2023-11-09T15:10:40'
  },
  {
    id: 10056,
    name: '公共关系基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10056,
    create_time: '2023-11-09T15:11:01',
    update_time: '2023-11-09T15:11:01'
  },
  {
    id: 10057,
    name: '秘书基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10057,
    create_time: '2023-11-09T15:11:18',
    update_time: '2023-11-09T15:11:18'
  },
  {
    id: 10058,
    name: '秘书实务',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10058,
    create_time: '2023-11-09T15:11:35',
    update_time: '2023-11-09T15:11:35'
  },
  {
    id: 10059,
    name: '文书拟写与档案管理',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10059,
    create_time: '2023-11-09T15:11:53',
    update_time: '2023-11-09T15:11:53'
  },
  {
    id: 10060,
    name: '烹饪原料知识',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10060,
    create_time: '2023-11-24T11:33:59',
    update_time: '2023-11-24T11:33:59'
  },
  {
    id: 10061,
    name: '烹饪营养与安全',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10061,
    create_time: '2023-11-24T11:34:15',
    update_time: '2023-11-24T11:34:15'
  },
  {
    id: 10062,
    name: '中式烹调技艺',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10062,
    create_time: '2023-11-24T11:34:33',
    update_time: '2023-11-24T11:34:33'
  },
  {
    id: 10063,
    name: '中式面点技艺',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10063,
    create_time: '2023-11-24T11:34:49',
    update_time: '2023-11-24T11:34:49'
  },
  {
    id: 10064,
    name: '烹饪概论',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10064,
    create_time: '2023-11-24T11:35:04',
    update_time: '2023-11-24T11:35:04'
  },
  {
    id: 10065,
    name: '餐饮成本核算',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10065,
    create_time: '2023-11-24T11:35:20',
    update_time: '2023-11-24T11:35:20'
  },
  {
    id: 10066,
    name: '西餐热菜制作',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10066,
    create_time: '2023-11-24T11:35:36',
    update_time: '2023-11-24T11:35:36'
  },
  {
    id: 10067,
    name: '电机与电气控制技术',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10067,
    create_time: '2023-11-24T11:35:50',
    update_time: '2023-11-24T11:35:50'
  },
  {
    id: 10068,
    name: '汽车机械基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10068,
    create_time: '2023-11-24T11:36:05',
    update_time: '2023-11-24T11:36:05'
  },
  {
    id: 10069,
    name: '汽车电工电子基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10069,
    create_time: '2023-11-24T11:36:21',
    update_time: '2023-11-24T11:36:21'
  },
  {
    id: 10070,
    name: '汽车文化',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10070,
    create_time: '2023-11-24T11:36:36',
    update_time: '2023-11-24T11:36:36'
  },
  {
    id: 10071,
    name: '畜禽解剖生理',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10071,
    create_time: '2023-11-24T11:36:53',
    update_time: '2023-11-24T11:36:53'
  },
  {
    id: 10072,
    name: '畜禽营养与饲料',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10072,
    create_time: '2023-11-24T11:37:09',
    update_time: '2023-11-24T11:37:09'
  },
  {
    id: 10073,
    name: '兽医基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10073,
    create_time: '2023-11-24T11:37:26',
    update_time: '2023-11-24T11:37:26'
  },
  {
    id: 10074,
    name: '畜禽生产',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10074,
    create_time: '2023-11-24T11:37:49',
    update_time: '2023-11-24T11:37:49'
  },
  {
    id: 10075,
    name: '畜禽繁殖与改良',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10075,
    create_time: '2023-11-24T11:38:06',
    update_time: '2023-11-24T11:38:06'
  },
  {
    id: 10076,
    name: '农作物生产',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10076,
    create_time: '2023-11-24T11:38:22',
    update_time: '2023-11-24T11:38:22'
  },
  {
    id: 10077,
    name: '植物保护技术',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10077,
    create_time: '2023-11-24T11:38:36',
    update_time: '2023-11-24T11:38:36'
  },
  {
    id: 10078,
    name: '果树生产技术',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10078,
    create_time: '2023-11-24T11:38:51',
    update_time: '2023-11-24T11:38:51'
  },
  {
    id: 10079,
    name: '种植基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10079,
    create_time: '2023-11-24T11:39:09',
    update_time: '2023-11-24T11:39:09'
  },
  {
    id: 10080,
    name: '农业生物技术',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10080,
    create_time: '2023-11-24T11:39:24',
    update_time: '2023-11-24T11:39:24'
  },
  {
    id: 10081,
    name: '植物生产与环境',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10081,
    create_time: '2023-11-24T11:39:39',
    update_time: '2023-11-24T11:39:39'
  },
  {
    id: 10082,
    name: '服装结构制图',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10082,
    create_time: '2023-11-27T11:32:51',
    update_time: '2023-11-27T11:32:51'
  },
  {
    id: 10083,
    name: '服装设计基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10083,
    create_time: '2023-11-27T11:33:08',
    update_time: '2023-11-27T11:33:08'
  },
  {
    id: 10084,
    name: '服装缝制工艺',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10084,
    create_time: '2023-11-27T11:33:25',
    update_time: '2023-11-27T11:33:25'
  },
  {
    id: 10085,
    name: '服装材料',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10085,
    create_time: '2023-11-27T11:33:42',
    update_time: '2023-11-27T11:33:42'
  },
  {
    id: 10086,
    name: '服装设计',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10086,
    create_time: '2023-11-27T11:34:00',
    update_time: '2023-11-27T11:34:00'
  },
  {
    id: 10087,
    name: '财经法规与会计职业道德',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10087,
    create_time: '2023-11-30T18:12:34',
    update_time: '2023-11-30T18:12:34'
  },
  {
    id: 10088,
    name: '服装制作工艺',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10088,
    create_time: '2023-11-30T18:12:49',
    update_time: '2023-11-30T18:12:49'
  },
  {
    id: 10089,
    name: '焊工工艺基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10089,
    create_time: '2023-11-30T18:13:03',
    update_time: '2023-11-30T18:13:03'
  },
  {
    id: 10090,
    name: '传感器检测技术',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10090,
    create_time: '2023-11-30T18:13:19',
    update_time: '2023-11-30T18:13:19'
  },
  {
    id: 10091,
    name: '建筑施工技术与机械',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10091,
    create_time: '2023-11-30T18:14:49',
    update_time: '2023-11-30T18:14:49'
  },
  {
    id: 10092,
    name: '建筑CAD',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10092,
    create_time: '2023-11-30T18:15:04',
    update_time: '2023-11-30T18:15:04'
  },
  {
    id: 10093,
    name: '畜禽疫病防治',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10093,
    create_time: '2023-11-30T18:15:26',
    update_time: '2023-11-30T18:15:26'
  },
  {
    id: 10094,
    name: '蔬菜生产技术',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10094,
    create_time: '2023-11-30T18:15:40',
    update_time: '2023-11-30T18:15:40'
  },
  {
    id: 10095,
    name: '分析化学',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10095,
    create_time: '2023-11-30T18:15:59',
    update_time: '2023-11-30T18:15:59'
  },
  {
    id: 10096,
    name: '环境学基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10096,
    create_time: '2023-11-30T18:16:16',
    update_time: '2023-11-30T18:16:16'
  },
  {
    id: 10097,
    name: '有机化学',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10097,
    create_time: '2023-11-30T18:16:31',
    update_time: '2023-11-30T18:16:31'
  },
  {
    id: 10098,
    name: '无机化学',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10098,
    create_time: '2023-11-30T18:16:46',
    update_time: '2023-11-30T18:16:46'
  },
  {
    id: 10099,
    name: '化学实验技术',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10099,
    create_time: '2023-11-30T18:17:01',
    update_time: '2023-11-30T18:17:01'
  },
  {
    id: 10149,
    name: '导游基础知识',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10149,
    create_time: '2023-10-23T11:06:15',
    update_time: '2023-10-23T11:06:15'
  },
  {
    id: 10501,
    name: '计算机应用基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10501,
    create_time: '2023-04-24T17:20:04',
    update_time: '2023-05-16T13:37:37'
  },
  {
    id: 10502,
    name: '图形图像处理',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10502,
    create_time: '2023-10-12T11:04:16',
    update_time: '2023-10-12T11:04:16'
  },
  {
    id: 10503,
    name: '通信技术',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10503,
    create_time: '2023-04-24T17:20:43',
    update_time: '2023-05-16T13:37:47'
  },
  {
    id: 10504,
    name: '程序设计基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10504,
    create_time: '2023-04-24T17:20:59',
    update_time: '2023-05-16T13:37:53'
  },
  {
    id: 10505,
    name: '计算机网络技术基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10505,
    create_time: '2023-04-24T17:21:19',
    update_time: '2023-05-16T13:37:59'
  },
  {
    id: 10506,
    name: '网页设计与制作',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10506,
    create_time: '2023-05-16T13:38:55',
    update_time: '2023-05-16T13:38:55'
  },
  {
    id: 10507,
    name: 'C语言程序设计',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10507,
    create_time: '2023-10-23T10:40:34',
    update_time: '2023-10-23T10:40:34'
  },
  {
    id: 10508,
    name: '数据库应用基础-Access',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10508,
    create_time: '2023-10-23T11:05:10',
    update_time: '2023-10-23T11:05:10'
  },
  {
    id: 10509,
    name: '计算机原理',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10509,
    create_time: '2023-10-23T15:40:28',
    update_time: '2023-10-23T15:41:04'
  },
  {
    id: 10510,
    name: '多媒体技术及应用',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10510,
    create_time: '2023-10-23T15:41:35',
    update_time: '2023-10-23T15:41:35'
  },
  {
    id: 10511,
    name: '网站数据库应用技术-SQL Server',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10511,
    create_time: '2023-10-23T15:42:13',
    update_time: '2023-10-23T15:42:13'
  },
  {
    id: 10512,
    name: '计算机组装与维修',
    stage_id: 6,
    subject_id: 25,
    ordinal: 10512,
    create_time: '2023-10-23T15:43:34',
    update_time: '2023-10-23T15:43:34'
  },
  {
    id: 11001,
    name: '解剖学基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 11001,
    create_time: '2023-06-19T16:35:49',
    update_time: '2023-06-19T16:35:49'
  },
  {
    id: 11002,
    name: '生理学基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 11002,
    create_time: '2023-06-19T16:37:22',
    update_time: '2023-06-19T16:37:22'
  },
  {
    id: 11003,
    name: '病理学基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 11003,
    create_time: '2023-06-19T16:37:57',
    update_time: '2023-06-19T16:37:57'
  },
  {
    id: 11004,
    name: '中医学基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 11004,
    create_time: '2023-06-19T16:38:23',
    update_time: '2023-06-19T16:38:23'
  },
  {
    id: 11005,
    name: '解剖生理学基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 11005,
    create_time: '2023-06-19T16:40:39',
    update_time: '2023-06-19T16:40:39'
  },
  {
    id: 11006,
    name: '药理学基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 11006,
    create_time: '2023-06-19T16:41:10',
    update_time: '2023-06-19T16:41:10'
  },
  {
    id: 11007,
    name: '基础护理',
    stage_id: 6,
    subject_id: 25,
    ordinal: 11007,
    create_time: '2023-06-19T16:41:30',
    update_time: '2023-06-19T16:41:30'
  },
  {
    id: 11008,
    name: '内科护理',
    stage_id: 6,
    subject_id: 25,
    ordinal: 11008,
    create_time: '2023-06-19T16:43:08',
    update_time: '2023-06-19T16:43:08'
  },
  {
    id: 11009,
    name: '外科护理',
    stage_id: 6,
    subject_id: 25,
    ordinal: 11009,
    create_time: '2023-06-19T16:46:34',
    update_time: '2023-06-19T16:46:34'
  },
  {
    id: 11010,
    name: '妇产科护理',
    stage_id: 6,
    subject_id: 25,
    ordinal: 11010,
    create_time: '2023-06-19T16:47:05',
    update_time: '2023-06-19T16:47:05'
  },
  {
    id: 11011,
    name: '儿科护理',
    stage_id: 6,
    subject_id: 25,
    ordinal: 11011,
    create_time: '2023-06-19T16:49:18',
    update_time: '2023-06-19T16:49:18'
  },
  {
    id: 11012,
    name: '药用化学基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 11012,
    create_time: '2023-10-30T13:38:42',
    update_time: '2023-10-30T13:38:42'
  },
  {
    id: 11501,
    name: '基础会计',
    stage_id: 6,
    subject_id: 25,
    ordinal: 11501,
    create_time: '2023-06-19T16:49:42',
    update_time: '2023-06-19T16:49:42'
  },
  {
    id: 11502,
    name: '企业财务会计',
    stage_id: 6,
    subject_id: 25,
    ordinal: 11502,
    create_time: '2023-06-19T16:51:10',
    update_time: '2023-06-19T16:51:10'
  },
  {
    id: 11503,
    name: '财务管理',
    stage_id: 6,
    subject_id: 25,
    ordinal: 11503,
    create_time: '2023-06-19T16:51:40',
    update_time: '2023-06-19T16:51:40'
  },
  {
    id: 11504,
    name: '市场营销知识',
    stage_id: 6,
    subject_id: 25,
    ordinal: 11504,
    create_time: '2023-06-19T16:52:24',
    update_time: '2023-06-19T16:52:24'
  },
  {
    id: 11505,
    name: '电子商务基础',
    stage_id: 6,
    subject_id: 25,
    ordinal: 11505,
    create_time: '2023-06-19T16:53:04',
    update_time: '2023-06-19T16:53:04'
  },
  {
    id: 11506,
    name: '网络营销',
    stage_id: 6,
    subject_id: 25,
    ordinal: 11506,
    create_time: '2023-06-19T16:53:23',
    update_time: '2023-06-19T16:53:23'
  },
  {
    id: 11507,
    name: '国际贸易基础知识',
    stage_id: 6,
    subject_id: 25,
    ordinal: 11507,
    create_time: '2023-06-19T16:53:47',
    update_time: '2023-06-19T16:53:47'
  },
  {
    id: 11508,
    name: '商品销售（推销实务）',
    stage_id: 6,
    subject_id: 25,
    ordinal: 11508,
    create_time: '2023-06-19T16:54:12',
    update_time: '2023-06-19T16:54:12'
  },
  {
    id: 11509,
    name: '客户服务',
    stage_id: 6,
    subject_id: 25,
    ordinal: 11509,
    create_time: '2023-06-19T16:54:33',
    update_time: '2023-06-19T16:54:33'
  },
  {
    id: 11510,
    name: '外贸制单（国际商务单证）',
    stage_id: 6,
    subject_id: 25,
    ordinal: 11510,
    create_time: '2023-06-19T16:54:55',
    update_time: '2023-06-19T16:54:55'
  },
  {
    id: 12001,
    name: '汽车保养与维护',
    stage_id: 6,
    subject_id: 25,
    ordinal: 12001,
    create_time: '2023-06-13T09:43:13',
    update_time: '2023-08-28T13:44:55'
  },
  {
    id: 12002,
    name: '汽车发动机构造与维修',
    stage_id: 6,
    subject_id: 25,
    ordinal: 12002,
    create_time: '2023-06-19T16:55:43',
    update_time: '2023-06-19T16:55:43'
  },
  {
    id: 12003,
    name: '汽车底盘构造与维修',
    stage_id: 6,
    subject_id: 25,
    ordinal: 12003,
    create_time: '2023-06-19T16:56:05',
    update_time: '2023-06-19T16:56:05'
  },
  {
    id: 12004,
    name: '汽车电气设备构造与维修',
    stage_id: 6,
    subject_id: 25,
    ordinal: 12004,
    create_time: '2023-06-13T09:44:59',
    update_time: '2023-08-26T09:05:59'
  },
  {
    id: 12005,
    name: '汽车空调构造与维修',
    stage_id: 6,
    subject_id: 25,
    ordinal: 12005,
    create_time: '2023-06-19T16:56:52',
    update_time: '2023-06-19T16:56:52'
  },
  {
    id: 12006,
    name: '汽车车身电气构造与维修',
    stage_id: 6,
    subject_id: 25,
    ordinal: 12006,
    create_time: '2023-06-19T16:57:32',
    update_time: '2023-06-19T16:57:32'
  },
  {
    id: 12007,
    name: '汽车发动机电子控制系统故障诊断与检测',
    stage_id: 6,
    subject_id: 25,
    ordinal: 12007,
    create_time: '2023-06-19T16:57:58',
    update_time: '2023-06-19T16:57:58'
  },
  {
    id: 12008,
    name: '汽车底盘控制系统故障诊断与检测',
    stage_id: 6,
    subject_id: 25,
    ordinal: 12008,
    create_time: '2023-06-19T16:58:19',
    update_time: '2023-06-19T16:58:19'
  },
  {
    id: 12009,
    name: '自动变速器构造与维修',
    stage_id: 6,
    subject_id: 25,
    ordinal: 12009,
    create_time: '2023-06-13T09:52:59',
    update_time: '2023-08-28T13:45:21'
  },
  {
    id: 12010,
    name: '车载网络系统故障诊断与检测',
    stage_id: 6,
    subject_id: 25,
    ordinal: 12010,
    create_time: '2023-06-19T16:59:22',
    update_time: '2023-06-19T16:59:22'
  },
  {
    id: 12011,
    name: '电动汽车高压系统基本原理与维修',
    stage_id: 6,
    subject_id: 25,
    ordinal: 12011,
    create_time: '2023-06-13T09:53:55',
    update_time: '2023-09-07T18:00:44'
  },
  {
    id: 12012,
    name: '新能源汽车保养维护与安全操作',
    stage_id: 6,
    subject_id: 25,
    ordinal: 12012,
    create_time: '2023-06-19T17:01:14',
    update_time: '2023-06-19T17:01:14'
  },
  {
    id: 12013,
    name: '电动汽车驱动与控制系统构造与维修',
    stage_id: 6,
    subject_id: 25,
    ordinal: 12013,
    create_time: '2023-06-19T17:01:33',
    update_time: '2023-06-19T17:01:33'
  },
  {
    id: 12014,
    name: '电动汽车充电系统构造与维修',
    stage_id: 6,
    subject_id: 25,
    ordinal: 12014,
    create_time: '2023-06-19T17:01:52',
    update_time: '2023-06-19T17:01:52'
  },
  {
    id: 12015,
    name: '电动汽车动力电池及管理系统原理与检修',
    stage_id: 6,
    subject_id: 25,
    ordinal: 12015,
    create_time: '2023-06-13T09:55:20',
    update_time: '2023-09-07T18:01:26'
  },
  {
    id: 12016,
    name: '新能源汽车空调维修',
    stage_id: 6,
    subject_id: 25,
    ordinal: 12016,
    create_time: '2023-06-19T17:02:43',
    update_time: '2023-06-19T17:02:43'
  },
  {
    id: 12017,
    name: '电动汽车控制系统故障诊断与检修',
    stage_id: 6,
    subject_id: 25,
    ordinal: 12017,
    create_time: '2023-06-13T09:56:04',
    update_time: '2023-09-07T18:01:47'
  },
  {
    id: 12018,
    name: '新能源汽车充电设备与调试',
    stage_id: 6,
    subject_id: 25,
    ordinal: 12018,
    create_time: '2023-06-19T17:03:24',
    update_time: '2023-06-19T17:03:24'
  },
  {
    id: 12019,
    name: '混合动力汽车驱动系统概述',
    stage_id: 6,
    subject_id: 25,
    ordinal: 12019,
    create_time: '2023-06-19T17:03:44',
    update_time: '2023-06-19T17:03:44'
  },
  {
    id: 13001,
    name: '幼儿卫生学',
    stage_id: 6,
    subject_id: 25,
    ordinal: 13001,
    create_time: '2023-09-18T16:06:18',
    update_time: '2023-09-18T16:06:18'
  },
  {
    id: 13002,
    name: '幼儿心理学',
    stage_id: 6,
    subject_id: 25,
    ordinal: 13002,
    create_time: '2023-09-18T16:06:51',
    update_time: '2023-09-18T16:06:51'
  },
  {
    id: 13003,
    name: '幼儿教育学',
    stage_id: 6,
    subject_id: 25,
    ordinal: 13003,
    create_time: '2023-09-18T16:07:12',
    update_time: '2023-09-18T16:07:12'
  },
  {
    id: 13004,
    name: '幼儿园教育活动设计与指导',
    stage_id: 6,
    subject_id: 25,
    ordinal: 13004,
    create_time: '2023-09-18T16:07:32',
    update_time: '2023-10-23T11:52:34'
  },
  {
    id: 13005,
    name: '幼儿教育心理学',
    stage_id: 6,
    subject_id: 25,
    ordinal: 13005,
    create_time: '2023-10-23T10:38:35',
    update_time: '2023-10-23T10:38:35'
  },
  {
    id: 13006,
    name: '化工单元操作',
    stage_id: 6,
    subject_id: 25,
    ordinal: 13006,
    create_time: '2024-04-01T15:52:19',
    update_time: '2024-04-01T15:52:19'
  },
  {
    id: 13007,
    name: '化学工艺',
    stage_id: 6,
    subject_id: 25,
    ordinal: 13007,
    create_time: '2024-04-01T15:53:11',
    update_time: '2024-04-01T15:53:11'
  }
]

const data2 = [
  {
    id: 1343,
    name: '初中数学人教版（2012）七年级上册',
    volume: '七年级上册',
    course_id: 11,
    version_id: 293,
    grade_id: 7,
    term: 'LAST',
    ordinal: 2
  },
  {
    id: 1344,
    name: '初中数学人教版（2012）七年级下册',
    volume: '七年级下册',
    course_id: 11,
    version_id: 293,
    grade_id: 7,
    term: 'NEXT',
    ordinal: 3
  },
  {
    id: 1345,
    name: '初中数学人教版（2012）八年级上册',
    volume: '八年级上册',
    course_id: 11,
    version_id: 293,
    grade_id: 8,
    term: 'LAST',
    ordinal: 4
  },
  {
    id: 1346,
    name: '初中数学人教版（2012）八年级下册',
    volume: '八年级下册',
    course_id: 11,
    version_id: 293,
    grade_id: 8,
    term: 'NEXT',
    ordinal: 5
  },
  {
    id: 1347,
    name: '初中数学人教版（2012）九年级上册',
    volume: '九年级上册',
    course_id: 11,
    version_id: 293,
    grade_id: 9,
    term: 'LAST',
    ordinal: 6
  },
  {
    id: 1348,
    name: '初中数学人教版（2012）九年级下册',
    volume: '九年级下册',
    course_id: 11,
    version_id: 293,
    grade_id: 9,
    term: 'NEXT',
    ordinal: 7
  },
  {
    id: 1349,
    name: '初中数学北师大版（2012）七年级上册',
    volume: '七年级上册',
    course_id: 11,
    version_id: 278,
    grade_id: 7,
    term: 'LAST',
    ordinal: 8
  },
  {
    id: 1350,
    name: '初中数学北师大版（2012）七年级下册',
    volume: '七年级下册',
    course_id: 11,
    version_id: 278,
    grade_id: 7,
    term: 'NEXT',
    ordinal: 9
  },
  {
    id: 1351,
    name: '初中数学北师大版（2012）八年级上册',
    volume: '八年级上册',
    course_id: 11,
    version_id: 278,
    grade_id: 8,
    term: 'LAST',
    ordinal: 10
  },
  {
    id: 1352,
    name: '初中数学北师大版（2012）八年级下册',
    volume: '八年级下册',
    course_id: 11,
    version_id: 278,
    grade_id: 8,
    term: 'NEXT',
    ordinal: 11
  },
  {
    id: 1353,
    name: '初中数学北师大版（2012）九年级上册',
    volume: '九年级上册',
    course_id: 11,
    version_id: 278,
    grade_id: 9,
    term: 'LAST',
    ordinal: 12
  },
  {
    id: 1354,
    name: '初中数学北师大版（2012）九年级下册',
    volume: '九年级下册',
    course_id: 11,
    version_id: 278,
    grade_id: 9,
    term: 'NEXT',
    ordinal: 13
  },
  {
    id: 1361,
    name: '初中数学苏科版（2012）七年级上册',
    volume: '七年级上册',
    course_id: 11,
    version_id: 298,
    grade_id: 7,
    term: 'LAST',
    ordinal: 20
  },
  {
    id: 1362,
    name: '初中数学苏科版（2012）七年级下册',
    volume: '七年级下册',
    course_id: 11,
    version_id: 298,
    grade_id: 7,
    term: 'NEXT',
    ordinal: 21
  },
  {
    id: 1363,
    name: '初中数学苏科版（2012）八年级上册',
    volume: '八年级上册',
    course_id: 11,
    version_id: 298,
    grade_id: 8,
    term: 'LAST',
    ordinal: 22
  },
  {
    id: 1364,
    name: '初中数学苏科版（2012）八年级下册',
    volume: '八年级下册',
    course_id: 11,
    version_id: 298,
    grade_id: 8,
    term: 'NEXT',
    ordinal: 23
  },
  {
    id: 1365,
    name: '初中数学苏科版（2012）九年级上册',
    volume: '九年级上册',
    course_id: 11,
    version_id: 298,
    grade_id: 9,
    term: 'LAST',
    ordinal: 24
  },
  {
    id: 1366,
    name: '初中数学苏科版（2012）九年级下册',
    volume: '九年级下册',
    course_id: 11,
    version_id: 298,
    grade_id: 9,
    term: 'NEXT',
    ordinal: 25
  },
  {
    id: 1373,
    name: '初中数学沪科版（2012）七年级上册',
    volume: '七年级上册',
    course_id: 11,
    version_id: 283,
    grade_id: 7,
    term: 'LAST',
    ordinal: 32
  },
  {
    id: 1374,
    name: '初中数学沪科版（2012）七年级下册',
    volume: '七年级下册',
    course_id: 11,
    version_id: 283,
    grade_id: 7,
    term: 'NEXT',
    ordinal: 33
  },
  {
    id: 1375,
    name: '初中数学沪科版（2012）八年级上册',
    volume: '八年级上册',
    course_id: 11,
    version_id: 283,
    grade_id: 8,
    term: 'LAST',
    ordinal: 34
  },
  {
    id: 1376,
    name: '初中数学沪科版（2012）八年级下册',
    volume: '八年级下册',
    course_id: 11,
    version_id: 283,
    grade_id: 8,
    term: 'NEXT',
    ordinal: 35
  },
  {
    id: 1377,
    name: '初中数学沪科版（2012）九年级上册',
    volume: '九年级上册',
    course_id: 11,
    version_id: 283,
    grade_id: 9,
    term: 'LAST',
    ordinal: 36
  },
  {
    id: 1378,
    name: '初中数学沪科版（2012）九年级下册',
    volume: '九年级下册',
    course_id: 11,
    version_id: 283,
    grade_id: 9,
    term: 'NEXT',
    ordinal: 37
  },
  {
    id: 1391,
    name: '初中数学华东师大版（2012）七年级上册',
    volume: '七年级上册',
    course_id: 11,
    version_id: 285,
    grade_id: 7,
    term: 'LAST',
    ordinal: 50
  },
  {
    id: 1392,
    name: '初中数学华东师大版（2012）七年级下册',
    volume: '七年级下册',
    course_id: 11,
    version_id: 285,
    grade_id: 7,
    term: 'NEXT',
    ordinal: 51
  },
  {
    id: 1393,
    name: '初中数学华东师大版（2012）八年级上册',
    volume: '八年级上册',
    course_id: 11,
    version_id: 285,
    grade_id: 8,
    term: 'LAST',
    ordinal: 52
  },
  {
    id: 1394,
    name: '初中数学华东师大版（2012）八年级下册',
    volume: '八年级下册',
    course_id: 11,
    version_id: 285,
    grade_id: 8,
    term: {},
    ordinal: 53
  },
  {
    id: 1395,
    name: '初中数学华东师大版（2012）九年级上册',
    volume: '九年级上册',
    course_id: 11,
    version_id: 285,
    grade_id: 9,
    term: 'LAST',
    ordinal: 54
  },
  {
    id: 1396,
    name: '初中数学华东师大版（2012）九年级下册',
    volume: '九年级下册',
    course_id: 11,
    version_id: 285,
    grade_id: 9,
    term: 'NEXT',
    ordinal: 55
  },
  {
    id: 1355,
    name: '初中数学浙教版（2012）七年级上册',
    volume: '七年级上册',
    course_id: 11,
    version_id: 305,
    grade_id: 7,
    term: 'LAST',
    ordinal: 14
  },
  {
    id: 1356,
    name: '初中数学浙教版（2012）七年级下册',
    volume: '七年级下册',
    course_id: 11,
    version_id: 305,
    grade_id: 7,
    term: 'NEXT',
    ordinal: 15
  },
  {
    id: 1357,
    name: '初中数学浙教版（2012）八年级上册',
    volume: '八年级上册',
    course_id: 11,
    version_id: 305,
    grade_id: 8,
    term: 'LAST',
    ordinal: 16
  },
  {
    id: 1358,
    name: '初中数学浙教版（2012）八年级下册',
    volume: '八年级下册',
    course_id: 11,
    version_id: 305,
    grade_id: 8,
    term: 'NEXT',
    ordinal: 17
  },
  {
    id: 1359,
    name: '初中数学浙教版（2012）九年级上册',
    volume: '九年级上册',
    course_id: 11,
    version_id: 305,
    grade_id: 9,
    term: 'LAST',
    ordinal: 18
  },
  {
    id: 1360,
    name: '初中数学浙教版（2012）九年级下册',
    volume: '九年级下册',
    course_id: 11,
    version_id: 305,
    grade_id: 9,
    term: 'NEXT',
    ordinal: 19
  },
  {
    id: 1379,
    name: '初中数学冀教版（2012）七年级上册',
    volume: '七年级上册',
    course_id: 11,
    version_id: 288,
    grade_id: 7,
    term: 'LAST',
    ordinal: 38
  },
  {
    id: 1380,
    name: '初中数学冀教版（2012）七年级下册',
    volume: '七年级下册',
    course_id: 11,
    version_id: 288,
    grade_id: 7,
    term: 'NEXT',
    ordinal: 39
  },
  {
    id: 1381,
    name: '初中数学冀教版（2012）八年级上册',
    volume: '八年级上册',
    course_id: 11,
    version_id: 288,
    grade_id: 8,
    term: 'LAST',
    ordinal: 40
  },
  {
    id: 1382,
    name: '初中数学冀教版（2012）八年级下册',
    volume: '八年级下册',
    course_id: 11,
    version_id: 288,
    grade_id: 8,
    term: 'NEXT',
    ordinal: 41
  },
  {
    id: 1383,
    name: '初中数学冀教版（2012）九年级上册',
    volume: '九年级上册',
    course_id: 11,
    version_id: 288,
    grade_id: 9,
    term: 'LAST',
    ordinal: 42
  },
  {
    id: 1384,
    name: '初中数学冀教版（2012）九年级下册',
    volume: '九年级下册',
    course_id: 11,
    version_id: 288,
    grade_id: 9,
    term: 'NEXT',
    ordinal: 43
  },
  {
    id: 1397,
    name: '初中数学青岛版（2012）七年级上册',
    volume: '七年级上册',
    course_id: 11,
    version_id: 291,
    grade_id: 7,
    term: 'LAST',
    ordinal: 56
  },
  {
    id: 1398,
    name: '初中数学青岛版（2012）七年级下册',
    volume: '七年级下册',
    course_id: 11,
    version_id: 291,
    grade_id: 7,
    term: 'NEXT',
    ordinal: 57
  },
  {
    id: 1399,
    name: '初中数学青岛版（2012）八年级上册',
    volume: '八年级上册',
    course_id: 11,
    version_id: 291,
    grade_id: 8,
    term: 'LAST',
    ordinal: 58
  },
  {
    id: 1400,
    name: '初中数学青岛版（2012）八年级下册',
    volume: '八年级下册',
    course_id: 11,
    version_id: 291,
    grade_id: 8,
    term: 'NEXT',
    ordinal: 59
  },
  {
    id: 1401,
    name: '初中数学青岛版（2012）九年级上册',
    volume: '九年级上册',
    course_id: 11,
    version_id: 291,
    grade_id: 9,
    term: 'LAST',
    ordinal: 60
  },
  {
    id: 1402,
    name: '初中数学青岛版（2012）九年级下册',
    volume: '九年级下册',
    course_id: 11,
    version_id: 291,
    grade_id: 9,
    term: 'NEXT',
    ordinal: 61
  },
  {
    id: 1411,
    name: '初中数学鲁教版（五四制）（2012）六年级上册',
    volume: '六年级上册',
    course_id: 11,
    version_id: 290,
    grade_id: 6,
    term: 'LAST',
    ordinal: 70
  },
  {
    id: 1412,
    name: '初中数学鲁教版（五四制）（2012）六年级下册',
    volume: '六年级下册',
    course_id: 11,
    version_id: 290,
    grade_id: 6,
    term: 'NEXT',
    ordinal: 71
  },
  {
    id: 1413,
    name: '初中数学鲁教版（五四制）（2012）七年级上册',
    volume: '七年级上册',
    course_id: 11,
    version_id: 290,
    grade_id: 7,
    term: 'LAST',
    ordinal: 72
  },
  {
    id: 1414,
    name: '初中数学鲁教版（五四制）（2012）七年级下册',
    volume: '七年级下册',
    course_id: 11,
    version_id: 290,
    grade_id: 7,
    term: 'NEXT',
    ordinal: 73
  },
  {
    id: 1415,
    name: '初中数学鲁教版（五四制）（2012）八年级上册',
    volume: '八年级上册',
    course_id: 11,
    version_id: 290,
    grade_id: 8,
    term: 'LAST',
    ordinal: 74
  },
  {
    id: 1416,
    name: '初中数学鲁教版（五四制）（2012）八年级下册',
    volume: '八年级下册',
    course_id: 11,
    version_id: 290,
    grade_id: 8,
    term: 'NEXT',
    ordinal: 75
  },
  {
    id: 1417,
    name: '初中数学鲁教版（五四制）（2012）九年级上册',
    volume: '九年级上册',
    course_id: 11,
    version_id: 290,
    grade_id: 9,
    term: 'LAST',
    ordinal: 76
  },
  {
    id: 1418,
    name: '初中数学鲁教版（五四制）（2012）九年级下册',
    volume: '九年级下册',
    course_id: 11,
    version_id: 290,
    grade_id: 9,
    term: 'NEXT',
    ordinal: 77
  },
  {
    id: 1403,
    name: '初中数学人教版（五四制）六年级上册',
    volume: '六年级上册',
    course_id: 11,
    version_id: 296,
    grade_id: 6,
    term: 'LAST',
    ordinal: 62
  },
  {
    id: 1404,
    name: '初中数学人教版（五四制）六年级下册',
    volume: '六年级下册',
    course_id: 11,
    version_id: 296,
    grade_id: 6,
    term: 'NEXT',
    ordinal: 63
  },
  {
    id: 1405,
    name: '初中数学人教版（五四制）七年级上册',
    volume: '七年级上册',
    course_id: 11,
    version_id: 296,
    grade_id: 7,
    term: 'LAST',
    ordinal: 64
  },
  {
    id: 1406,
    name: '初中数学人教版（五四制）七年级下册',
    volume: '七年级下册',
    course_id: 11,
    version_id: 296,
    grade_id: 7,
    term: 'NEXT',
    ordinal: 65
  },
  {
    id: 1407,
    name: '初中数学人教版（五四制）八年级上册',
    volume: '八年级上册',
    course_id: 11,
    version_id: 296,
    grade_id: 8,
    term: 'LAST',
    ordinal: 66
  },
  {
    id: 1408,
    name: '初中数学人教版（五四制）八年级下册',
    volume: '八年级下册',
    course_id: 11,
    version_id: 296,
    grade_id: 8,
    term: 'NEXT',
    ordinal: 67
  },
  {
    id: 1409,
    name: '初中数学人教版（五四制）九年级上册',
    volume: '九年级上册',
    course_id: 11,
    version_id: 296,
    grade_id: 9,
    term: 'LAST',
    ordinal: 68
  },
  {
    id: 1410,
    name: '初中数学人教版（五四制）九年级下册',
    volume: '九年级下册',
    course_id: 11,
    version_id: 296,
    grade_id: 9,
    term: 'NEXT',
    ordinal: 69
  },
  {
    id: 1385,
    name: '初中数学京改版七年级上册',
    volume: '七年级上册',
    course_id: 11,
    version_id: 276,
    grade_id: 7,
    term: 'LAST',
    ordinal: 44
  },
  {
    id: 1386,
    name: '初中数学京改版七年级下册',
    volume: '七年级下册',
    course_id: 11,
    version_id: 276,
    grade_id: 7,
    term: 'NEXT',
    ordinal: 45
  },
  {
    id: 1387,
    name: '初中数学京改版八年级上册',
    volume: '八年级上册',
    course_id: 11,
    version_id: 276,
    grade_id: 8,
    term: 'LAST',
    ordinal: 46
  },
  {
    id: 1388,
    name: '初中数学京改版八年级下册',
    volume: '八年级下册',
    course_id: 11,
    version_id: 276,
    grade_id: 8,
    term: 'NEXT',
    ordinal: 47
  },
  {
    id: 1389,
    name: '初中数学京改版九年级上册',
    volume: '九年级上册',
    course_id: 11,
    version_id: 276,
    grade_id: 9,
    term: 'LAST',
    ordinal: 48
  },
  {
    id: 1390,
    name: '初中数学京改版九年级下册',
    volume: '九年级下册',
    course_id: 11,
    version_id: 276,
    grade_id: 9,
    term: 'NEXT',
    ordinal: 49
  },
  {
    id: 1419,
    name: '初中数学沪教版（上海）六年级第一学期',
    volume: '六年级第一学期',
    course_id: 11,
    version_id: 281,
    grade_id: 6,
    term: 'LAST',
    ordinal: 78
  },
  {
    id: 1420,
    name: '初中数学沪教版（上海）六年级第二学期',
    volume: '六年级第二学期',
    course_id: 11,
    version_id: 281,
    grade_id: 6,
    term: 'NEXT',
    ordinal: 79
  },
  {
    id: 1421,
    name: '初中数学沪教版（上海）七年级第一学期',
    volume: '七年级第一学期',
    course_id: 11,
    version_id: 281,
    grade_id: 7,
    term: 'LAST',
    ordinal: 80
  },
  {
    id: 1422,
    name: '初中数学沪教版（上海）七年级第二学期',
    volume: '七年级第二学期',
    course_id: 11,
    version_id: 281,
    grade_id: 7,
    term: 'NEXT',
    ordinal: 81
  },
  {
    id: 1423,
    name: '初中数学沪教版（上海）八年级第一学期',
    volume: '八年级第一学期',
    course_id: 11,
    version_id: 281,
    grade_id: 8,
    term: 'LAST',
    ordinal: 82
  },
  {
    id: 1424,
    name: '初中数学沪教版（上海）八年级第二学期',
    volume: '八年级第二学期',
    course_id: 11,
    version_id: 281,
    grade_id: 8,
    term: 'NEXT',
    ordinal: 83
  },
  {
    id: 1425,
    name: '初中数学沪教版（上海）九年级第一学期',
    volume: '九年级第一学期',
    course_id: 11,
    version_id: 281,
    grade_id: 9,
    term: 'LAST',
    ordinal: 84
  },
  {
    id: 1426,
    name: '初中数学沪教版（上海）九年级第二学期',
    volume: '九年级第二学期',
    course_id: 11,
    version_id: 281,
    grade_id: 9,
    term: 'NEXT',
    ordinal: 85
  },
  {
    id: 1367,
    name: '初中数学湘教版（2012）七年级上册',
    volume: '七年级上册',
    course_id: 11,
    version_id: 301,
    grade_id: 7,
    term: 'LAST',
    ordinal: 26
  },
  {
    id: 1368,
    name: '初中数学湘教版（2012）七年级下册',
    volume: '七年级下册',
    course_id: 11,
    version_id: 301,
    grade_id: 7,
    term: 'NEXT',
    ordinal: 27
  },
  {
    id: 1369,
    name: '初中数学湘教版（2012）八年级上册',
    volume: '八年级上册',
    course_id: 11,
    version_id: 301,
    grade_id: 8,
    term: 'LAST',
    ordinal: 28
  },
  {
    id: 1370,
    name: '初中数学湘教版（2012）八年级下册',
    volume: '八年级下册',
    course_id: 11,
    version_id: 301,
    grade_id: 8,
    term: 'NEXT',
    ordinal: 29
  },
  {
    id: 1371,
    name: '初中数学湘教版（2012）九年级上册',
    volume: '九年级上册',
    course_id: 11,
    version_id: 301,
    grade_id: 9,
    term: 'LAST',
    ordinal: 30
  },
  {
    id: 1372,
    name: '初中数学湘教版（2012）九年级下册',
    volume: '九年级下册',
    course_id: 11,
    version_id: 301,
    grade_id: 9,
    term: 'NEXT',
    ordinal: 31
  }
]

const data3 = [
  {
    id: 7634,
    name: '第二十一章 一元二次方程',
    textbook_id: 1347,
    parent_id: 0,
    ordinal: 0,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7642,
    name: '第二十二章 二次函数',
    textbook_id: 1347,
    parent_id: 0,
    ordinal: 1,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7650,
    name: '第二十三章 旋转',
    textbook_id: 1347,
    parent_id: 0,
    ordinal: 2,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7657,
    name: '第二十四章 圆',
    textbook_id: 1347,
    parent_id: 0,
    ordinal: 3,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7668,
    name: '第二十五章 概率初步',
    textbook_id: 1347,
    parent_id: 0,
    ordinal: 4,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 37900,
    name: '综合复习与测试',
    textbook_id: 1347,
    parent_id: 0,
    ordinal: 5,
    type: 'VIRTUAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7635,
    name: '21.1 一元二次方程',
    textbook_id: 1347,
    parent_id: 7634,
    ordinal: 0,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7636,
    name: '21.2 解一元二次方程',
    textbook_id: 1347,
    parent_id: 7634,
    ordinal: 1,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7641,
    name: '21.3 实际问题与一元二次方程',
    textbook_id: 1347,
    parent_id: 7634,
    ordinal: 2,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 37895,
    name: '本章复习与测试',
    textbook_id: 1347,
    parent_id: 7634,
    ordinal: 3,
    type: 'VIRTUAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-11-15T10:36:36'
  },
  {
    id: 7637,
    name: '21.2.1 配方法',
    textbook_id: 1347,
    parent_id: 7636,
    ordinal: 0,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7638,
    name: '21.2.2 公式法',
    textbook_id: 1347,
    parent_id: 7636,
    ordinal: 1,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7639,
    name: '21.2.3 因式分解法',
    textbook_id: 1347,
    parent_id: 7636,
    ordinal: 2,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7640,
    name: '*21.2.4 一元二次方程的根与系数的关系',
    textbook_id: 1347,
    parent_id: 7636,
    ordinal: 3,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7643,
    name: '22.1 二次函数的图象和性质',
    textbook_id: 1347,
    parent_id: 7642,
    ordinal: 0,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7648,
    name: '22.2 二次函数与一元二次方程',
    textbook_id: 1347,
    parent_id: 7642,
    ordinal: 1,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7649,
    name: '22.3 实际问题与二次函数',
    textbook_id: 1347,
    parent_id: 7642,
    ordinal: 2,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 37896,
    name: '本章复习与测试',
    textbook_id: 1347,
    parent_id: 7642,
    ordinal: 3,
    type: 'VIRTUAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-11-15T10:36:36'
  },
  {
    id: 7644,
    name: '22.1.1 二次函数',
    textbook_id: 1347,
    parent_id: 7643,
    ordinal: 0,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7645,
    name: '22.1.2 二次函数y=ax²的图象和性质',
    textbook_id: 1347,
    parent_id: 7643,
    ordinal: 1,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7646,
    name: '22.1.3 二次函数y=a(x－h)²＋k的图象和性质',
    textbook_id: 1347,
    parent_id: 7643,
    ordinal: 2,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7647,
    name: '22.1.4 二次函数y=ax²＋bx＋c的图象和性质',
    textbook_id: 1347,
    parent_id: 7643,
    ordinal: 3,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7651,
    name: '23.1 图形的旋转',
    textbook_id: 1347,
    parent_id: 7650,
    ordinal: 0,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7652,
    name: '23.2 中心对称',
    textbook_id: 1347,
    parent_id: 7650,
    ordinal: 1,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7656,
    name: '23.3 课题学习  图案设计',
    textbook_id: 1347,
    parent_id: 7650,
    ordinal: 2,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 37897,
    name: '本章复习与测试',
    textbook_id: 1347,
    parent_id: 7650,
    ordinal: 3,
    type: 'VIRTUAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-11-15T10:36:36'
  },
  {
    id: 7653,
    name: '23.2.1 中心对称',
    textbook_id: 1347,
    parent_id: 7652,
    ordinal: 0,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7654,
    name: '23.2.2 中心对称图形',
    textbook_id: 1347,
    parent_id: 7652,
    ordinal: 1,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7655,
    name: '23.2.3 关于原点对称的点的坐标',
    textbook_id: 1347,
    parent_id: 7652,
    ordinal: 2,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7658,
    name: '24.1 圆的有关性质',
    textbook_id: 1347,
    parent_id: 7657,
    ordinal: 0,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7663,
    name: '24.2 点和圆、直线和圆的位置关系',
    textbook_id: 1347,
    parent_id: 7657,
    ordinal: 1,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7666,
    name: '24.3 正多边形和圆',
    textbook_id: 1347,
    parent_id: 7657,
    ordinal: 2,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7667,
    name: '24.4 弧长和扇形面积',
    textbook_id: 1347,
    parent_id: 7657,
    ordinal: 3,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 37898,
    name: '本章复习与测试',
    textbook_id: 1347,
    parent_id: 7657,
    ordinal: 4,
    type: 'VIRTUAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-11-15T10:36:36'
  },
  {
    id: 7659,
    name: '24.1.1 圆',
    textbook_id: 1347,
    parent_id: 7658,
    ordinal: 0,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7660,
    name: '24.1.2 垂直于弦的直径',
    textbook_id: 1347,
    parent_id: 7658,
    ordinal: 1,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7661,
    name: '24.1.3 弧、弦、圆心角',
    textbook_id: 1347,
    parent_id: 7658,
    ordinal: 2,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7662,
    name: '24.1.4 圆周角',
    textbook_id: 1347,
    parent_id: 7658,
    ordinal: 3,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7664,
    name: '24.2.1 点和圆的位置关系',
    textbook_id: 1347,
    parent_id: 7663,
    ordinal: 0,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7665,
    name: '24.2.2 直线和圆的位置关系',
    textbook_id: 1347,
    parent_id: 7663,
    ordinal: 1,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7669,
    name: '25.1 随机事件与概率',
    textbook_id: 1347,
    parent_id: 7668,
    ordinal: 0,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7672,
    name: '25.2 用列举法求概率',
    textbook_id: 1347,
    parent_id: 7668,
    ordinal: 1,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7673,
    name: '25.3 用频率估计概率',
    textbook_id: 1347,
    parent_id: 7668,
    ordinal: 2,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 37899,
    name: '本章复习与测试',
    textbook_id: 1347,
    parent_id: 7668,
    ordinal: 3,
    type: 'VIRTUAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-11-15T10:36:36'
  },
  {
    id: 7670,
    name: '25.1.1 随机事件',
    textbook_id: 1347,
    parent_id: 7669,
    ordinal: 0,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  },
  {
    id: 7671,
    name: '25.1.2 概率',
    textbook_id: 1347,
    parent_id: 7669,
    ordinal: 1,
    type: 'REAL',
    create_time: '2018-08-17T17:34:01',
    update_time: '2018-08-17T17:34:09'
  }
]

const data4 = [
  {
    id: '3460663934205952',
    course_id: 11,
    type_id: '110305',
    kpoint_ids: [3955, 81314],
    catalog_ids: [
      5752, 6029, 6147, 6442, 6639, 6899, 7128, 7322, 7456, 7649, 7849, 8007,
      8163
    ],
    years: [2024],
    difficulty: 0.65,
    difficulty_level: 19,
    stem: '<div class="qml-stem" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6ted8XxkGcHwsXG_rvQsrbLie"><p style="text-align: left;"><span style="font-family: 宋体;">抛物线</span><span style="font-style: italic;font-family: \'Times New Roman\';">L</span><span style="font-family: \'Times New Roman\';"> </span><img  src="https://img.xkw.com/dksih/formula/c468dc5cc34c14a188493a21019e8f83.svg" class="xkw-math-img" /><span style="font-family: 宋体;">与</span><span style="font-style: italic;font-family: \'Times New Roman\';">x</span><span style="font-family: 宋体;">轴交于点．</span><span style="font-family: \'Times New Roman\';"> </span><img  src="https://img.xkw.com/dksih/formula/ae838c1a48dfea1f44e5869fac5d2b5e.svg" class="xkw-math-img" /><span style="font-family: 宋体;">和点</span><span style="font-family: \'Times New Roman\';"> </span><span style="font-style: italic;font-family: \'Times New Roman\';">B</span><span style="font-family: 宋体;">，与</span><span style="font-style: italic;font-family: \'Times New Roman\';">y</span><span style="font-family: 宋体;">轴交于点</span><span style="font-family: \'Times New Roman\';"> </span><img  src="https://img.xkw.com/dksih/formula/e5a1a843e25ebb752cea96f28ef5c0eb.svg" class="xkw-math-img" /></p><div class="qml-sq" id-container="question"><div class="qml-stem" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6ted8XxkGcHwsXG_rvQsrbLie"><p style=""><span class="ques-no">（1）</span><span style="font-family: 宋体;">求抛物线</span><span style="font-family: \'Times New Roman\';"> </span><span style="font-style: italic;font-family: \'Times New Roman\';">L</span><span style="font-family: \'Times New Roman\';"> </span><span style="font-family: 宋体;">的函数表达式．</span></p></div></div><div class="qml-sq" id-container="question"><div class="qml-stem" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6ted8XxkGcHwsXG_rvQsrbLie"><p style=""><span class="ques-no">（2）</span><span style="font-family: 宋体;">抛物线</span><span style="font-family: \'Times New Roman\';"> </span><span style="font-style: italic;font-family: \'Times New Roman\';">L</span><span style="font-family: 宋体;">关于原点对称的抛物线记为</span><span style="font-family: \'Times New Roman\';"> </span><img  src="https://img.xkw.com/dksih/formula/dcf90af48c665ee801c05cc55914b8fd.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，点</span><span style="font-family: \'Times New Roman\';"> </span><span style="font-style: italic;font-family: \'Times New Roman\';">P</span><span style="font-family: \'Times New Roman\';"> </span><span style="font-family: 宋体;">在抛物线</span><span style="font-style: italic;font-family: \'Times New Roman\';">L</span><span style="font-family: \'Times New Roman\';"> </span><span style="font-family: 宋体;">上，点</span><span style="font-family: \'Times New Roman\';"> </span><span style="font-style: italic;font-family: \'Times New Roman\';">P</span><span style="font-family: \'Times New Roman\';"> </span><span style="font-family: 宋体;">在抛物线</span><img  src="https://img.xkw.com/dksih/formula/dcf90af48c665ee801c05cc55914b8fd.svg" class="xkw-math-img" /><span style="font-family: 宋体;">上的对应点记为点</span><span style="font-style: italic;font-family: \'Times New Roman\';">Q</span><span style="font-family: 宋体;">，若四边形</span><img  src="https://img.xkw.com/dksih/formula/e8d4ab45e8e8f0084d8d90a4c1233d86.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的面积为</span><span style="font-family: \'Times New Roman\';"> 6</span><span style="font-family: 宋体;">，求点</span><span style="font-family: \'Times New Roman\';"> </span><span style="font-style: italic;font-family: \'Times New Roman\';">P</span><span style="font-family: \'Times New Roman\';"> </span><span style="font-family: 宋体;">的坐标．</span></p></div></div></div>',
    answer:
      '<div class="qml-answer" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6ted8XxkGcHwsXG_rvQsrbLie">（1）<span class="qml-an-sq" id-container="question"><span class="qml-an  "><img  src="https://img.xkw.com/dksih/formula/7ec701182432d8d4225e38454365ef6d.svg" class="xkw-math-img" /><span style="font-family: 宋体;">；</span></span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）<span class="qml-an-sq" id-container="question"><span class="qml-an  "><span style="font-family: 宋体;">点</span><span style="font-family: \'Times New Roman\';font-style: italic;">P</span><span style="font-family: 宋体;">的坐标是</span><img  src="https://img.xkw.com/dksih/formula/e2e7f7bca9f0450733dc8fffd9361403.svg" class="xkw-math-img" /><span style="font-family: 宋体;">或</span><img  src="https://img.xkw.com/dksih/formula/d55544090d44068ad0dac3049a2b7fba.svg" class="xkw-math-img" /><span style="font-family: 宋体;">．</span></span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>',
    explanation:
      '<div class="qml-explanation" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6ted8XxkGcHwsXG_rvQsrbLie"><div class="qml-seg" seg-name="分析">【分析】<p style="text-align:justify;word-break:break-word"><span style="font-family: 宋体;">本题考查了抛物线与</span><span style="font-style: italic;font-family: \'Times New Roman\';">x</span><span style="font-family: 宋体;">轴的交点，二次函数的解析式，二次函数关于原点对称的特征，四边形的面积转化为三角形的面积问题，其中（</span><span style="font-family: \'Times New Roman\';">2</span><span style="font-family: 宋体;">）要注意分类求解，避免遗漏．</span></p><p style="text-align:justify;word-break:break-word"><span style="font-family: 宋体;">（</span><span style="font-family: \'Times New Roman\';">1</span><span style="font-family: 宋体;">）用待定系数法求函数解析式即可；</span></p><p style="text-align:justify;word-break:break-word"><span style="font-family: 宋体;">（</span><span style="font-family: \'Times New Roman\';">2</span><span style="font-family: 宋体;">）根据</span><span style="font-style: italic;font-family: \'Times New Roman\';">P</span><span style="font-family: 宋体;">与</span><span style="font-style: italic;font-family: \'Times New Roman\';">Q</span><span style="font-family: 宋体;">关于原点对称可以得到</span><img  src="https://img.xkw.com/dksih/formula/dc703cb11ab85d52d83ef9ad1cae7640.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，然后得出</span><img  src="https://img.xkw.com/dksih/formula/89d8989b2163120d176d86a9a58c302e.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，再把</span><img  src="https://img.xkw.com/dksih/formula/89d8989b2163120d176d86a9a58c302e.svg" class="xkw-math-img" /><span style="font-family: 宋体;">代入</span><img  src="https://img.xkw.com/dksih/formula/7ec701182432d8d4225e38454365ef6d.svg" class="xkw-math-img" /><span style="font-family: 宋体;">中，求出</span><span style="font-style: italic;font-family: \'Times New Roman\';">x</span><span style="font-family: 宋体;">即可．</span></p></div><div class="qml-exps-sq" id-container="question">(1)小问详解： <p style="text-align: left;"><span style="font-family: 宋体;">解∶将点</span><img  src="https://img.xkw.com/dksih/formula/ae838c1a48dfea1f44e5869fac5d2b5e.svg" class="xkw-math-img" /><span style="font-family: 宋体;">和点</span><img  src="https://img.xkw.com/dksih/formula/81623a87822981ef8fc4fbe3f8703fca.svg" class="xkw-math-img" /><span style="font-family: 宋体;">代入</span><span style="font-family: \'Times New Roman\';"> </span><img  src="https://img.xkw.com/dksih/formula/c468dc5cc34c14a188493a21019e8f83.svg" class="xkw-math-img" /><span style="font-family: 宋体;">中，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">得</span><span style="font-family: \'Times New Roman\';"> </span><img  src="https://img.xkw.com/dksih/formula/c179106dac0cfcbbff108ce771dfbcc8.svg" class="xkw-math-img" /></p><p style="text-align: left;"><span style="font-family: 宋体;">解得</span><span style="font-family: \'Times New Roman\';"> </span><img  src="https://img.xkw.com/dksih/formula/3aa37002aadc7199c304ec68b213725d.svg" class="xkw-math-img" /><span style="font-family: \'Times New Roman\';"><span style="font-family: \'Times New Roman\'" qml-space-size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p><p style="text-align: left;"><span style="font-family: 宋体;">∴抛物线</span><span style="font-style: italic;font-family: \'Times New Roman\';">L</span><span style="font-family: 宋体;">的函数表达式是</span><span style="font-family: \'Times New Roman\';"> </span><img  src="https://img.xkw.com/dksih/formula/7ec701182432d8d4225e38454365ef6d.svg" class="xkw-math-img" /></p></div><div class="qml-exps-sq" id-container="question">(2)小问详解： <p style="text-align: left;"><span style="font-family: 宋体;">解：当</span><img  src="https://img.xkw.com/dksih/formula/e2a7df955fc17e92fd86302f8c34664a.svg" class="xkw-math-img" /><span style="font-family: 宋体;">时，</span><span style="font-family: \'Times New Roman\';"> </span><img  src="https://img.xkw.com/dksih/formula/56476c9306e8d350bb3f518fc802019f.svg" class="xkw-math-img" /></p><p style="text-align: left;"><span style="font-family: 宋体;">解得</span><span style="font-family: \'Times New Roman\';"> </span><img  src="https://img.xkw.com/dksih/formula/707126e906915d10844b0170e2fca562.svg" class="xkw-math-img" /></p><p style="text-align: left;"><span style="font-family: 宋体;">∴点</span><span style="font-style: italic;font-family: \'Times New Roman\';">A</span><span style="font-family: \'Times New Roman\';"> </span><span style="font-family: 宋体;">的坐标是</span><img  src="https://img.xkw.com/dksih/formula/613a90b59622decd293885cc13a835e1.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，点</span><span style="font-family: \'Times New Roman\';"> </span><span style="font-style: italic;font-family: \'Times New Roman\';">B</span><span style="font-family: 宋体;">的坐标是</span><img  src="https://img.xkw.com/dksih/formula/5113db880dd976d123e512098d84303c.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><img  src="https://img.xkw.com/dksih/formula/c202cde2987adb9bf567f4961cf18f58.svg" class="xkw-math-img" /><span style="font-family: 宋体;">,</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∵如图，点</span><span style="font-family: \'Times New Roman\';"> </span><span style="font-style: italic;font-family: \'Times New Roman\';">P</span><span style="font-family: \'Times New Roman\';"> </span><span style="font-family: 宋体;">与点</span><span style="font-style: italic;font-family: \'Times New Roman\';">Q</span><span style="font-family: 宋体;">关于原点对称，</span></p><p style="text-align: left;"><img  height="130" source-file="https://img.xkw.com/dksih/QBM/editorImg/2024/3/25/879e2a8a-46e4-4e2b-a144-33d00a48f7b2.ai" src="https://img.xkw.com/dksih/QBM/editorImg/2024/3/25/879e2a8a-46e4-4e2b-a144-33d00a48f7b2.png" width="156" /></p><p style="text-align: left;"><span style="font-family: \'Times New Roman\';"> </span><img  src="https://img.xkw.com/dksih/formula/b529c3e4c08179e1045b0be5372939b6.svg" class="xkw-math-img" /></p><p style="text-align: left;"><img  src="https://img.xkw.com/dksih/formula/a8a98187771b8aa7fc1b68a1c843609d.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∴解得</span><img  src="https://img.xkw.com/dksih/formula/89d8989b2163120d176d86a9a58c302e.svg" class="xkw-math-img" /></p><p style="text-align: left;"><span style="font-family: 宋体;">当</span><img  src="https://img.xkw.com/dksih/formula/d14b2391c1b100fa3848f9eadebc313f.svg" class="xkw-math-img" /><span style="font-family: 宋体;">时，</span><span style="font-family: \'Times New Roman\';"> </span><img  src="https://img.xkw.com/dksih/formula/c6aea84804f079a383c6ec87fa4f4998.svg" class="xkw-math-img" /></p><p style="text-align: left;"><span style="font-family: 宋体;">解得</span><span style="font-family: \'Times New Roman\';"> </span><img  src="https://img.xkw.com/dksih/formula/0d383ff4db817a12a322b9853c1b5222.svg" class="xkw-math-img" /></p><p style="text-align: left;"><span style="font-family: \'Times New Roman\';"> </span><img  src="https://img.xkw.com/dksih/formula/d760116d92997ec5a0a2a99147580951.svg" class="xkw-math-img" /><span style="font-family: \'Times New Roman\';"> </span></p><p style="text-align: left;"><span style="font-family: 宋体;">当</span><img  src="https://img.xkw.com/dksih/formula/fcc8d0599c80eea3ece1fe0a5467702d.svg" class="xkw-math-img" /><span style="font-family: 宋体;">时，</span><span style="font-family: \'Times New Roman\';"> </span><img  src="https://img.xkw.com/dksih/formula/b17d25ec6e4748fc1381a4b4037e1893.svg" class="xkw-math-img" /><span style="font-family: 宋体;">此方程无解．</span></p><p style="text-align: left;"><span style="font-family: 宋体;">综上所述，点</span><span style="font-style: italic;font-family: \'Times New Roman\';">P</span><span style="font-family: 宋体;">的坐标是</span><img  src="https://img.xkw.com/dksih/formula/4a94918021c60495920bdbaf79ade4e3.svg" class="xkw-math-img" /><span style="font-family: 宋体;">或</span><img  src="https://img.xkw.com/dksih/formula/2518d8a1b392306c0fedcb51913e345f.svg" class="xkw-math-img" /><span style="font-family: 宋体;">．</span></p></div></div>',
    create_date: '2024-03-24 19:21:42',
    paper_type_ids: [27],
    course: {
      id: 11,
      name: '初中数学'
    },
    catalogs: [
      {
        id: 5752,
        name: '4 二次函数的应用'
      },
      {
        id: 6029,
        name: '26.3 二次函数y=ax²＋bx＋c的图像'
      },
      {
        id: 6147,
        name: '21.4 二次函数的应用'
      },
      {
        id: 6442,
        name: '26.3 实践与探索'
      },
      {
        id: 6639,
        name: '30.4 二次函数的应用'
      },
      {
        id: 6899,
        name: '19.4 二次函数的应用'
      },
      {
        id: 7128,
        name: '6 二次函数的应用'
      },
      {
        id: 7322,
        name: '5.7 二次函数的应用'
      },
      {
        id: 7456,
        name: '28.3 二次函数与实际问题'
      },
      {
        id: 7649,
        name: '22.3 实际问题与二次函数'
      },
      {
        id: 7849,
        name: '5.5 用二次函数解决问题'
      },
      {
        id: 8007,
        name: '1.5 二次函数的应用'
      },
      {
        id: 8163,
        name: '1.4 二次函数的应用'
      }
    ],
    type: {
      id: '110305',
      name: '问答题'
    },
    kpoints: [
      {
        id: 3955,
        name: '待定系数法求二次函数解析式'
      },
      {
        id: 81314,
        name: '面积问题(二次函数综合)'
      }
    ],
    media: 0,
    exp_video_posters: {},
    answer_scoreable: 0,
    tag_ids: [],
    tags: [],
    en_word_ids: {},
    en_words: {},
    source_papers: [
      {
        title: '2024年陕西省榆林市子洲县周家硷中学中考二模数学试题',
        area: {
          id: '610000',
          name: '陕西省'
        },
        type_id: 27,
        grade_id: 9,
        term: 'NEXT',
        year: 2024
      }
    ]
  },
  {
    id: '3459590721986560',
    course_id: 11,
    type_id: '1101',
    kpoint_ids: [3747],
    catalog_ids: [
      7639, 5719, 7822, 6127, 6402, 8137, 6603, 7311, 7098, 7451, 6872, 5937,
      33983
    ],
    years: [2024],
    difficulty: 0.8500000000000001,
    difficulty_level: 18,
    stem: '<div class="qml-stem" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6teem-vpKNtswFdL-S_C9fvPE"><p style="text-align:justify;word-break:break-word"><span style="font-family: 宋体;">一元二次方程</span><img  src="https://img.xkw.com/dksih/formula/c2ade5fba526d58776e22753bab24077.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的根是（　　）</span></p><div class=" qml-og"><table class="qml-og" style="width:100%"><tr><td>A.&nbsp;<span class="qml-op"><img  src="https://img.xkw.com/dksih/formula/da322ac8867e8a47c6588601078abf18.svg" class="xkw-math-img" /></span></td><td>B.&nbsp;<span class="qml-op"><img  src="https://img.xkw.com/dksih/formula/ba53065eb180a682305fddb95d14b62f.svg" class="xkw-math-img" /></span></td><td>C.&nbsp;<span class="qml-op"><img  src="https://img.xkw.com/dksih/formula/3f7f37ad1ab08454a60d5c2aa439daed.svg" class="xkw-math-img" /></span></td><td colspan="1">D.&nbsp;<span class="qml-op"><img  src="https://img.xkw.com/dksih/formula/4691b50dc1fb352e94a3f51b549af0cd.svg" class="xkw-math-img" /></span></td></tr></table></div></div>',
    answer:
      '<div class="qml-answer" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6teem-vpKNtswFdL-S_C9fvPE"><span class="qml-an-sq"><span class="qml-an qml-isop ">D</span></span></div>',
    explanation:
      '<div class="qml-explanation" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6teem-vpKNtswFdL-S_C9fvPE"><div class="qml-seg" seg-name="分析">【分析】<p style="text-align:justify;word-break:break-word"><span style="font-family: 宋体;">本题考查了解一元二次方程，熟练掌握解一元二次方程的方法和步骤是解题的关键．</span></p><p style="text-align:justify;word-break:break-word"><span style="font-family: 宋体;">用公因式分解法求解该方程即可．</span></p></div><div class="qml-seg" seg-name="详解">【详解】<p style="text-align: left;"><span style="font-family: 宋体;">解：</span><img  src="https://img.xkw.com/dksih/formula/c2ade5fba526d58776e22753bab24077.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><img  src="https://img.xkw.com/dksih/formula/05205c4cd37cc1edcae491db54bd41cc.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><img  src="https://img.xkw.com/dksih/formula/b5bc546050821dc46ba1aa735f89ed2a.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><img  src="https://img.xkw.com/dksih/formula/1a1523477addb288404f6d5991fed965.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><img  src="https://img.xkw.com/dksih/formula/e66609afc8fd44139d5463a0972f7d49.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><img  src="https://img.xkw.com/dksih/formula/4691b50dc1fb352e94a3f51b549af0cd.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">故选：</span><span style="font-family: \'Times New Roman\';">D</span><span style="font-family: 宋体;">．</span></p></div></div>',
    create_date: '2024-03-23 06:58:15',
    paper_type_ids: [3],
    course: {
      id: 11,
      name: '初中数学'
    },
    catalogs: [
      {
        id: 7639,
        name: '21.2.3 因式分解法'
      },
      {
        id: 5719,
        name: '4 用因式分解法求解一元二次方程'
      },
      {
        id: 7822,
        name: '1.2 一元二次方程的解法'
      },
      {
        id: 6127,
        name: '17.2 一元二次方程的解法'
      },
      {
        id: 6402,
        name: '1. 直接开平方法和因式分解法'
      },
      {
        id: 8137,
        name: '2.2 一元二次方程的解法'
      },
      {
        id: 6603,
        name: '24.2 解一元二次方程'
      },
      {
        id: 7311,
        name: '4.4 用因式分解法解一元二次方程'
      },
      {
        id: 7098,
        name: '4 用因式分解法解一元二次方程'
      },
      {
        id: 7451,
        name: '27.2 解一元二次方程'
      },
      {
        id: 6872,
        name: '16.2.4 因式分解法'
      },
      {
        id: 5937,
        name: '17.2 一元二次方程的解法'
      },
      {
        id: 33983,
        name: '2.2.3 因式分解法'
      }
    ],
    type: {
      id: '1101',
      name: '单选题'
    },
    kpoints: [
      {
        id: 3747,
        name: '因式分解法解一元二次方程'
      }
    ],
    media: 0,
    exp_video_posters: {},
    answer_scoreable: 1,
    tag_ids: [],
    tags: [],
    en_word_ids: {},
    en_words: {},
    source_papers: [
      {
        title:
          '四川省眉山天府新区清水初级中学2023-2024学年九年级下学期3月月考数学试题',
        area: {
          id: '510000',
          name: '四川省'
        },
        type_id: 3,
        grade_id: 9,
        term: 'NEXT',
        year: 2024
      }
    ]
  },
  {
    id: '3459590721773568',
    course_id: 11,
    type_id: '1101',
    kpoint_ids: [3728],
    catalog_ids: [
      7635, 5716, 7821, 6126, 6400, 8136, 6602, 7308, 7095, 7450, 6867, 5935,
      7982
    ],
    years: [2024],
    difficulty: 0.9450000000000001,
    difficulty_level: 17,
    stem: '<div class="qml-stem" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6tednhbuIdTtMZE_vaIHSJ7LM"><p style="text-align:justify;word-break:break-word"><span style="font-family: 宋体;">下列方程中：</span><span style="font-family: \'Times New Roman\';">①</span><img  src="https://img.xkw.com/dksih/formula/ad87c2772d38ebe22ac823d0c81c851d.svg" class="xkw-math-img" /><span style="font-family: 宋体;">；</span><span style="font-family: \'Times New Roman\';">②</span><img  src="https://img.xkw.com/dksih/formula/9e1db6780043494236049b080ce72581.svg" class="xkw-math-img" /><span style="font-family: 宋体;">；</span><span style="font-family: \'Times New Roman\';">③</span><img  src="https://img.xkw.com/dksih/formula/d8c16c213ffabfaeedfdb0c39bb168c7.svg" class="xkw-math-img" /><span style="font-family: 宋体;">；</span><span style="font-family: \'Times New Roman\';">④</span><img  src="https://img.xkw.com/dksih/formula/f40f6f9b4dd42d9959a34378237238e5.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，其中是一元二次方程的有（　　）</span></p><div class=" qml-og"><table class="qml-og" style="width:100%"><tr><td>A.&nbsp;<span class="qml-op"><span style="font-family: \'Times New Roman\';">1</span><span style="font-family: 宋体;">个</span></span></td><td>B.&nbsp;<span class="qml-op"><span style="font-family: \'Times New Roman\';">2</span><span style="font-family: 宋体;">个</span></span></td><td>C.&nbsp;<span class="qml-op"><span style="font-family: \'Times New Roman\';">3</span><span style="font-family: 宋体;">个</span></span></td><td colspan="1">D.&nbsp;<span class="qml-op"><span style="font-family: \'Times New Roman\';">4</span><span style="font-family: 宋体;">个</span></span></td></tr></table></div></div>',
    answer:
      '<div class="qml-answer" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6tednhbuIdTtMZE_vaIHSJ7LM"><span class="qml-an-sq"><span class="qml-an qml-isop ">B</span></span></div>',
    explanation:
      '<div class="qml-explanation" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6tednhbuIdTtMZE_vaIHSJ7LM"><div class="qml-seg" seg-name="分析">【分析】<p style="text-align: left;"><span style="font-family: 宋体;">本题主要考查了一元二次方程的定义，解题的关键是熟练掌握一元二次方程的定义：只含有一个未知数，未知数的最高次数为</span><span style="font-family: \'Times New Roman\';">2</span><span style="font-family: 宋体;">的整式方程是一元二次方程．</span></p><p style="text-align: left;"><span style="font-family: 宋体;">根据一元二次方程的定义，逐个判断即可．注意将各个方程进行整理化简后为一般式后，再去进行判断．</span></p></div><div class="qml-seg" seg-name="详解">【详解】<p style="text-align: left;"><span style="font-family: 宋体;">解：</span><span style="font-family: \'Times New Roman\';">①</span><img  src="https://img.xkw.com/dksih/formula/ad87c2772d38ebe22ac823d0c81c851d.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，是一元二次方程，符合题意；</span></p><p style="text-align: left;"><span style="font-family: \'Times New Roman\';">②</span><img  src="https://img.xkw.com/dksih/formula/9e1db6780043494236049b080ce72581.svg" class="xkw-math-img" /><span style="font-family: 宋体;">整理为：</span><img  src="https://img.xkw.com/dksih/formula/f3fbaf1d17bb6a96d8e45bb68fd2f222.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，是一元二次方程，符合题意；</span></p><p style="text-align: left;"><span style="font-family: \'Times New Roman\';">③</span><img  src="https://img.xkw.com/dksih/formula/d8c16c213ffabfaeedfdb0c39bb168c7.svg" class="xkw-math-img" /><span style="font-family: 宋体;">不是整式方程，故不是一元二次方程，不符合题意；</span></p><p style="text-align: left;"><span style="font-family: \'Times New Roman\';">④</span><img  src="https://img.xkw.com/dksih/formula/f40f6f9b4dd42d9959a34378237238e5.svg" class="xkw-math-img" /><span style="font-family: 宋体;">含有两个未知数，不是一元二次方程，不符合题意；</span></p><p style="text-align: left;"><span style="font-family: 宋体;">综上：①②是一元二次方程，共</span><span style="font-family: \'Times New Roman\';">2</span><span style="font-family: 宋体;">个，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">故选：</span><span style="font-family: \'Times New Roman\';">B</span><span style="font-family: 宋体;">．</span></p></div></div>',
    create_date: '2024-03-23 06:58:15',
    paper_type_ids: [3, 4],
    course: {
      id: 11,
      name: '初中数学'
    },
    catalogs: [
      {
        id: 7635,
        name: '21.1 一元二次方程'
      },
      {
        id: 5716,
        name: '1 认识一元二次方程'
      },
      {
        id: 7821,
        name: '1.1 一元二次方程'
      },
      {
        id: 6126,
        name: '17.1 一元二次方程'
      },
      {
        id: 6400,
        name: '22.1 一元二次方程'
      },
      {
        id: 8136,
        name: '2.1 一元二次方程'
      },
      {
        id: 6602,
        name: '24.1 一元二次方程'
      },
      {
        id: 7308,
        name: '4.1 一元二次方程'
      },
      {
        id: 7095,
        name: '1 一元二次方程'
      },
      {
        id: 7450,
        name: '27.1 一元二次方程'
      },
      {
        id: 6867,
        name: '16.1 一元二次方程'
      },
      {
        id: 5935,
        name: '17.1 一元二次方程的概念'
      },
      {
        id: 7982,
        name: '2.1 一元二次方程'
      }
    ],
    type: {
      id: '1101',
      name: '单选题'
    },
    kpoints: [
      {
        id: 3728,
        name: '一元二次方程的定义'
      }
    ],
    media: 0,
    exp_video_posters: {},
    answer_scoreable: 1,
    tag_ids: [],
    tags: [],
    en_word_ids: {},
    en_words: {},
    source_papers: [
      {
        title:
          '四川省眉山天府新区清水初级中学2023-2024学年九年级下学期3月月考数学试题',
        area: {
          id: '510000',
          name: '四川省'
        },
        type_id: 3,
        grade_id: 9,
        term: 'NEXT',
        year: 2024
      },
      {
        title: '山东省泰安市宁阳县2023-2024学年八年级下学期期中考试数学试题',
        area: {
          id: '370000',
          name: '山东省'
        },
        type_id: 4,
        grade_id: 8,
        term: 'NEXT',
        year: 2024
      }
    ]
  },
  {
    id: '3460672638132224',
    course_id: 11,
    type_id: '110305',
    kpoint_ids: [3982, 4249, 4317, 4325],
    catalog_ids: [
      5752, 6029, 6147, 6442, 6639, 6899, 7128, 7322, 7456, 7649, 7849, 8007,
      8163
    ],
    years: [2024],
    difficulty: 0.65,
    difficulty_level: 19,
    stem: '<div class="qml-stem" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6tecTBJq8WrWJ5AgbMEntmzZg"><p style="text-align: left;"><span style="font-family: 宋体;">如图</span><span style="font-family: \'Times New Roman\';">1</span><span style="font-family: 宋体;">，点</span><img  src="https://img.xkw.com/dksih/formula/8455657dde27aabe6adb7b188e031c11.svg" class="xkw-math-img" /><span style="font-family: 宋体;">是</span><img  src="https://img.xkw.com/dksih/formula/1e31edc5b71c488ca9942d70d9298f01.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的平分线上的一点，点</span><img  src="https://img.xkw.com/dksih/formula/c5db41a1f31d6baee7c69990811edb9f.svg" class="xkw-math-img" /><span style="font-family: 宋体;">、</span><img  src="https://img.xkw.com/dksih/formula/7f9e8449aad35c5d840a3395ea86df6d.svg" class="xkw-math-img" /><span style="font-family: 宋体;">分别在</span><img  src="https://img.xkw.com/dksih/formula/1e31edc5b71c488ca9942d70d9298f01.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的两边</span><img  src="https://img.xkw.com/dksih/formula/68a83fdd2ba72a2dba0b6b10bb3e06b9.svg" class="xkw-math-img" /><span style="font-family: 宋体;">、</span><img  src="https://img.xkw.com/dksih/formula/6aa2b5e09f8ec785c59900a529390a02.svg" class="xkw-math-img" /><span style="font-family: 宋体;">上，若</span><img  src="https://img.xkw.com/dksih/formula/8161c0d1b056e1af9db936205f3f7f66.svg" class="xkw-math-img" /><span style="font-family: 宋体;">．</span></p><p style="text-align: left;"><img  height="130" source-file="https://img.xkw.com/dksih/QBM/editorImg/2024/3/26/8aa1877c-1d73-4670-829a-412f2f072b70.ai" src="https://img.xkw.com/dksih/QBM/editorImg/2024/3/26/8aa1877c-1d73-4670-829a-412f2f072b70.png" width="404" /></p><div class="qml-sq" id-container="question"><div class="qml-stem" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6tecTBJq8WrWJ5AgbMEntmzZg"><p style=""><span class="ques-no">（1）</span><span style="font-family: 宋体;">请直接写出</span><img  src="https://img.xkw.com/dksih/formula/9e52a8f07834cbbbe4224962672fbbb2.svg" class="xkw-math-img" /><span style="font-family: 宋体;">、</span><img  src="https://img.xkw.com/dksih/formula/7d97dc3b752832906de41447bb58a341.svg" class="xkw-math-img" /><span style="font-family: 宋体;">之间的数量关系</span><span style="font-family: \'Times New Roman\';">________</span><span style="font-family: 宋体;">；</span></p></div></div><div class="qml-sq" id-container="question"><div class="qml-stem" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6tecTBJq8WrWJ5AgbMEntmzZg"><p style=""><span class="ques-no">（2）</span><span style="font-family: 宋体;">如图</span><span style="font-family: \'Times New Roman\';">2</span><span style="font-family: 宋体;">，若</span><img  src="https://img.xkw.com/dksih/formula/4a9eb456c912e01458c19b06e83a5c9d.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span><img  src="https://img.xkw.com/dksih/formula/fc11331a7b2d2619b40ee6d34c3bd620.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，求四边形</span><img  src="https://img.xkw.com/dksih/formula/ea51de5ca1c2879e7a767a60ce4624cd.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的面积；</span></p></div></div><div class="qml-sq" id-container="question"><div class="qml-stem" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6tecTBJq8WrWJ5AgbMEntmzZg"><p style=""><span class="ques-no">（3）</span><span style="font-family: 宋体;">如图</span><span style="font-family: \'Times New Roman\';">3</span><span style="font-family: 宋体;">，在（</span><span style="font-family: \'Times New Roman\';">2</span><span style="font-family: 宋体;">）的条件下，连接</span><img  src="https://img.xkw.com/dksih/formula/0dc5c9827dfd0be5a9c85962d6ccbfb1.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span><img  src="https://img.xkw.com/dksih/formula/15c0dbe3c080c4c4636c64803e5c1f76.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的面积是否有最大值？若有请求出</span><img  src="https://img.xkw.com/dksih/formula/15c0dbe3c080c4c4636c64803e5c1f76.svg" class="xkw-math-img" /><span style="font-family: 宋体;">面积的最大值，若没有请说明理由．</span></p></div></div></div>',
    answer:
      '<div class="qml-answer" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6tecTBJq8WrWJ5AgbMEntmzZg">（1）<span class="qml-an-sq" id-container="question"><span class="qml-an  "><img  src="https://img.xkw.com/dksih/formula/93b5d552bf92224ac9332e93741fcfb8.svg" class="xkw-math-img" /></span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）<span class="qml-an-sq" id-container="question"><span class="qml-an  "><span style="font-family: 宋体;">四边形</span><img  src="https://img.xkw.com/dksih/formula/ea51de5ca1c2879e7a767a60ce4624cd.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的面积为</span><img  src="https://img.xkw.com/dksih/formula/41322821ce31416fdac8dd6e0aa41c71.svg" class="xkw-math-img" /><span style="font-family: 宋体;">；</span></span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（3）<span class="qml-an-sq" id-container="question"><span class="qml-an  "><img  src="https://img.xkw.com/dksih/formula/15c0dbe3c080c4c4636c64803e5c1f76.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的面积有最大值，最大值为</span><img  src="https://img.xkw.com/dksih/formula/adbd3e8cf8325999cde03adf845d3dd0.svg" class="xkw-math-img" /><span style="font-family: 宋体;">．</span></span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>',
    explanation:
      '<div class="qml-explanation" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6tecTBJq8WrWJ5AgbMEntmzZg"><div class="qml-seg" seg-name="分析">【分析】<p style="text-align:justify;word-break:break-word"><span style="font-family: 宋体;">（</span><span style="font-family: \'Times New Roman\';">1</span><span style="font-family: 宋体;">）作</span><img  src="https://img.xkw.com/dksih/formula/f7aaccd4f94fac8096a6cf70d94eb589.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span><img  src="https://img.xkw.com/dksih/formula/f36ac646f3e8aed30f54f30e90d28bd6.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，等角的补角相等求得</span><img  src="https://img.xkw.com/dksih/formula/6eddced2f58200e8c890108996540be7.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，由角平分线的性质求得</span><img  src="https://img.xkw.com/dksih/formula/07e395831eddeca6f5ae769b2dfa2b4d.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，利用</span><img  src="https://img.xkw.com/dksih/formula/9beb8b968744573e593ac28451c69729.svg" class="xkw-math-img" /><span style="font-family: 宋体;">证明</span><img  src="https://img.xkw.com/dksih/formula/875bc2ee587f24e2c5a300376be92424.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，即可证明</span><img  src="https://img.xkw.com/dksih/formula/93b5d552bf92224ac9332e93741fcfb8.svg" class="xkw-math-img" /><span style="font-family: 宋体;">；</span></p><p style="text-align:justify;word-break:break-word"><span style="font-family: 宋体;">（</span><span style="font-family: \'Times New Roman\';">2</span><span style="font-family: 宋体;">）作</span><img  src="https://img.xkw.com/dksih/formula/f7aaccd4f94fac8096a6cf70d94eb589.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span><img  src="https://img.xkw.com/dksih/formula/f36ac646f3e8aed30f54f30e90d28bd6.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，由（</span><span style="font-family: \'Times New Roman\';">1</span><span style="font-family: 宋体;">）得</span><img  src="https://img.xkw.com/dksih/formula/6406d9e72e6ca6f104eaf1ca44b518f1.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，再证明</span><img  src="https://img.xkw.com/dksih/formula/4253c62f5b50b0650aac847d5bf49cc3.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，推出四边形</span><img  src="https://img.xkw.com/dksih/formula/ea51de5ca1c2879e7a767a60ce4624cd.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的面积</span><img  src="https://img.xkw.com/dksih/formula/1c9efad517a08ec564a74bbb6b6b1348.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，再根据直角三角形的性质结合勾股定理，利用三角形的面积公式求解即可；</span></p><p style="text-align:justify;word-break:break-word"><span style="font-family: 宋体;">（</span><span style="font-family: \'Times New Roman\';">3</span><span style="font-family: 宋体;">）求得</span><img  src="https://img.xkw.com/dksih/formula/fd37b4ba7cd3d8305b9c89a11b67f217.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，设</span><img  src="https://img.xkw.com/dksih/formula/8c7a3d679b4dae63575903387a76ce45.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，则</span><img  src="https://img.xkw.com/dksih/formula/09299d005422d06a9af900de1170d817.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，求得</span><img  src="https://img.xkw.com/dksih/formula/c0d80b08a34b5252334d31d902777d18.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，作</span><img  src="https://img.xkw.com/dksih/formula/23f4eb640505099730001c4cbe65c3cd.svg" class="xkw-math-img" /><span style="font-family: 宋体;">于点</span><img  src="https://img.xkw.com/dksih/formula/895dc3dc3a6606ff487a4c4863e18509.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，求得</span><img  src="https://img.xkw.com/dksih/formula/73c500120c6ef22332ca327101c274d0.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，利用三角形面积公式列出关于</span><img  src="https://img.xkw.com/dksih/formula/81dea63b8ce3e51adf66cf7b9982a248.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的二次函数，利用二次函数的性质求解即可．</span></p></div><div class="qml-exps-sq" id-container="question">(1)小问详解： <p style="text-align: left;"><span style="font-family: 宋体;">解：</span><img  src="https://img.xkw.com/dksih/formula/93b5d552bf92224ac9332e93741fcfb8.svg" class="xkw-math-img" /><span style="font-family: 宋体;">；</span></p><p style="text-align: left;"><span style="font-family: 宋体;">作</span><img  src="https://img.xkw.com/dksih/formula/f7aaccd4f94fac8096a6cf70d94eb589.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span><img  src="https://img.xkw.com/dksih/formula/f36ac646f3e8aed30f54f30e90d28bd6.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，垂足分别为</span><img  src="https://img.xkw.com/dksih/formula/e6670479a0083dd2dfd5ad55b47b1ab6.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><img  height="110" source-file="https://img.xkw.com/dksih/QBM/editorImg/2024/3/26/10371c7e-ca55-4edf-a3d8-038dcab48c68.ai" src="https://img.xkw.com/dksih/QBM/editorImg/2024/3/26/10371c7e-ca55-4edf-a3d8-038dcab48c68.png" width="120" /></p><p style="text-align: left;"><span style="font-family: 宋体;">∵</span><img  src="https://img.xkw.com/dksih/formula/8161c0d1b056e1af9db936205f3f7f66.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∴</span><img  src="https://img.xkw.com/dksih/formula/92449f6efdb6a1fd83def6a1406ff376.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∵</span><img  src="https://img.xkw.com/dksih/formula/10a3c811aa346649e7503e104e73e391.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∴</span><img  src="https://img.xkw.com/dksih/formula/6eddced2f58200e8c890108996540be7.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∵点</span><img  src="https://img.xkw.com/dksih/formula/8455657dde27aabe6adb7b188e031c11.svg" class="xkw-math-img" /><span style="font-family: 宋体;">是</span><img  src="https://img.xkw.com/dksih/formula/1e31edc5b71c488ca9942d70d9298f01.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的平分线上的一点，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∴</span><img  src="https://img.xkw.com/dksih/formula/07e395831eddeca6f5ae769b2dfa2b4d.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∴</span><img  src="https://img.xkw.com/dksih/formula/71b08632f9251642ef268d7f85a98091.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∴</span><img  src="https://img.xkw.com/dksih/formula/93b5d552bf92224ac9332e93741fcfb8.svg" class="xkw-math-img" /><span style="font-family: 宋体;">；</span></p><p style="text-align: left;"><span style="font-family: 宋体;">故答案为：</span><img  src="https://img.xkw.com/dksih/formula/93b5d552bf92224ac9332e93741fcfb8.svg" class="xkw-math-img" /><span style="font-family: 宋体;">；</span></p></div><div class="qml-exps-sq" id-container="question">(2)小问详解： <p style="text-align: left;"><span style="font-family: 宋体;">解：作</span><img  src="https://img.xkw.com/dksih/formula/f7aaccd4f94fac8096a6cf70d94eb589.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span><img  src="https://img.xkw.com/dksih/formula/f36ac646f3e8aed30f54f30e90d28bd6.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，垂足分别为</span><img  src="https://img.xkw.com/dksih/formula/e6670479a0083dd2dfd5ad55b47b1ab6.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><img  height="109" source-file="https://img.xkw.com/dksih/QBM/editorImg/2024/3/26/6bef2848-3a6e-4770-8edf-31b5a433c98a.ai" src="https://img.xkw.com/dksih/QBM/editorImg/2024/3/26/6bef2848-3a6e-4770-8edf-31b5a433c98a.png" width="119" /></p><p style="text-align: left;"><span style="font-family: 宋体;">由（</span><span style="font-family: \'Times New Roman\';">1</span><span style="font-family: 宋体;">）得</span><img  src="https://img.xkw.com/dksih/formula/875bc2ee587f24e2c5a300376be92424.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，则</span><img  src="https://img.xkw.com/dksih/formula/6406d9e72e6ca6f104eaf1ca44b518f1.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∵</span><img  src="https://img.xkw.com/dksih/formula/07e395831eddeca6f5ae769b2dfa2b4d.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span><img  src="https://img.xkw.com/dksih/formula/d9977997af4da9f1968b1ddb0f136a66.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∴</span><img  src="https://img.xkw.com/dksih/formula/4253c62f5b50b0650aac847d5bf49cc3.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∴</span><img  src="https://img.xkw.com/dksih/formula/94d50d2149f3802b4e1c44dc157d35e0.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∴四边形</span><img  src="https://img.xkw.com/dksih/formula/ea51de5ca1c2879e7a767a60ce4624cd.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的面积</span><img  src="https://img.xkw.com/dksih/formula/1c9efad517a08ec564a74bbb6b6b1348.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∵</span><img  src="https://img.xkw.com/dksih/formula/4a9eb456c912e01458c19b06e83a5c9d.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∴</span><img  src="https://img.xkw.com/dksih/formula/75ebe345ba517b02549018d99ba2f52a.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∵</span><img  src="https://img.xkw.com/dksih/formula/fc11331a7b2d2619b40ee6d34c3bd620.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∴</span><img  src="https://img.xkw.com/dksih/formula/4836483799ca38b92d5b802cf9d43b87.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span><img  src="https://img.xkw.com/dksih/formula/125c1497b5feb0975a8778d1197b86d4.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∴四边形</span><img  src="https://img.xkw.com/dksih/formula/ea51de5ca1c2879e7a767a60ce4624cd.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的面积</span><img  src="https://img.xkw.com/dksih/formula/4d1b88e76d9c46c33de2f04cd774304f.svg" class="xkw-math-img" /><span style="font-family: 宋体;">；</span></p></div><div class="qml-exps-sq" id-container="question">(3)小问详解： <p style="text-align: left;"><span style="font-family: 宋体;">解：</span><img  src="https://img.xkw.com/dksih/formula/15c0dbe3c080c4c4636c64803e5c1f76.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的面积有最大值，最大值为</span><img  src="https://img.xkw.com/dksih/formula/adbd3e8cf8325999cde03adf845d3dd0.svg" class="xkw-math-img" /><span style="font-family: 宋体;">．</span></p><p style="text-align: left;"><span style="font-family: 宋体;">由（</span><span style="font-family: \'Times New Roman\';">2</span><span style="font-family: 宋体;">）得</span><img  src="https://img.xkw.com/dksih/formula/52be30f3c43c6fa693d375f4d613fbbc.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span><img  src="https://img.xkw.com/dksih/formula/875bc2ee587f24e2c5a300376be92424.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∴</span><img  src="https://img.xkw.com/dksih/formula/fd37b4ba7cd3d8305b9c89a11b67f217.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span><img  src="https://img.xkw.com/dksih/formula/972a7fad30d9b67df132ac00fec2e9a5.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">设</span><img  src="https://img.xkw.com/dksih/formula/8c7a3d679b4dae63575903387a76ce45.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，则</span><img  src="https://img.xkw.com/dksih/formula/09299d005422d06a9af900de1170d817.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∴</span><img  src="https://img.xkw.com/dksih/formula/af0aaf66215e4b19a9f7ba1993ecb3c4.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">作</span><img  src="https://img.xkw.com/dksih/formula/23f4eb640505099730001c4cbe65c3cd.svg" class="xkw-math-img" /><span style="font-family: 宋体;">于点</span><img  src="https://img.xkw.com/dksih/formula/895dc3dc3a6606ff487a4c4863e18509.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><img  height="109" source-file="https://img.xkw.com/dksih/QBM/editorImg/2024/3/26/3e5774f2-32ba-47f0-a70b-5206d5677362.ai" src="https://img.xkw.com/dksih/QBM/editorImg/2024/3/26/3e5774f2-32ba-47f0-a70b-5206d5677362.png" width="119" /></p><p style="text-align: left;"><span style="font-family: 宋体;">∵</span><img  src="https://img.xkw.com/dksih/formula/4a9eb456c912e01458c19b06e83a5c9d.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∴</span><img  src="https://img.xkw.com/dksih/formula/2f10a4ab56a68bb96bad3b656d688b3c.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">同理可得</span><img  src="https://img.xkw.com/dksih/formula/d0401989c044c2d76464d0aec9968ffd.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∴</span><img  src="https://img.xkw.com/dksih/formula/9ad33d69ebe3f48d585bebb65ac6ef61.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∵</span><img  src="https://img.xkw.com/dksih/formula/5527acfac8b03eb06c91236e8d2a130b.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∴当</span><img  src="https://img.xkw.com/dksih/formula/d41e871aeb743413ddc5a61381f1612c.svg" class="xkw-math-img" /><span style="font-family: 宋体;">时，</span><img  src="https://img.xkw.com/dksih/formula/b5cbff84327e964f912a54032e76ccc9.svg" class="xkw-math-img" /><span style="font-family: 宋体;">有最大值，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">最大值为</span><img  src="https://img.xkw.com/dksih/formula/045448ac2d1f6f2c868b61d91a01aece.svg" class="xkw-math-img" /><span style="font-family: 宋体;">．</span></p></div><div class="qml-seg" seg-name="点睛">【点睛】<p style="text-align: left;"><span style="font-family: 宋体;">本题考查了解平分线的性质，直角三角形的性质，二次函数的应用，全等三角形的判定和性质，第</span><span style="font-family: \'Times New Roman\';">3</span><span style="font-family: 宋体;">问利用二次函数的性质求解是解题的关键．</span></p></div></div>',
    create_date: '2024-03-24 19:39:25',
    paper_type_ids: [3],
    course: {
      id: 11,
      name: '初中数学'
    },
    catalogs: [
      {
        id: 5752,
        name: '4 二次函数的应用'
      },
      {
        id: 6029,
        name: '26.3 二次函数y=ax²＋bx＋c的图像'
      },
      {
        id: 6147,
        name: '21.4 二次函数的应用'
      },
      {
        id: 6442,
        name: '26.3 实践与探索'
      },
      {
        id: 6639,
        name: '30.4 二次函数的应用'
      },
      {
        id: 6899,
        name: '19.4 二次函数的应用'
      },
      {
        id: 7128,
        name: '6 二次函数的应用'
      },
      {
        id: 7322,
        name: '5.7 二次函数的应用'
      },
      {
        id: 7456,
        name: '28.3 二次函数与实际问题'
      },
      {
        id: 7649,
        name: '22.3 实际问题与二次函数'
      },
      {
        id: 7849,
        name: '5.5 用二次函数解决问题'
      },
      {
        id: 8007,
        name: '1.5 二次函数的应用'
      },
      {
        id: 8163,
        name: '1.4 二次函数的应用'
      }
    ],
    type: {
      id: '110305',
      name: '问答题'
    },
    kpoints: [
      {
        id: 3982,
        name: '图形问题(实际问题与二次函数)'
      },
      {
        id: 4249,
        name: '全等的性质和HL综合（HL）'
      },
      {
        id: 4317,
        name: '含30度角的直角三角形'
      },
      {
        id: 4325,
        name: '用勾股定理解三角形'
      }
    ],
    media: 0,
    exp_video_posters: {},
    answer_scoreable: 0,
    tag_ids: [],
    tags: [],
    en_word_ids: {},
    en_words: {},
    source_papers: [
      {
        title:
          '陕西省榆林市苏州中学2023-2024学年八年级下学期第一次月考数学试题',
        area: {
          id: '610000',
          name: '陕西省'
        },
        type_id: 3,
        grade_id: 8,
        term: 'NEXT',
        year: 2024
      },
      {
        title:
          '陕西省西安市铁一中学2023-2024学年八年级下学期第一次月考数学试题',
        area: {
          id: '610000',
          name: '陕西省'
        },
        type_id: 3,
        grade_id: 8,
        term: 'NEXT',
        year: 2024
      }
    ]
  },
  {
    id: '3459590722174976',
    course_id: 11,
    type_id: '1101',
    kpoint_ids: [3749, 3732],
    catalog_ids: [
      6603, 7451, 5937, 7640, 5720, 7823, 6129, 6406, 8139, 7313, 7099, 6871,
      7985
    ],
    years: [2024],
    difficulty: 0.65,
    difficulty_level: 19,
    stem: '<div class="qml-stem" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6teeoSEUhqkyUeiMCE8AkqBId"><p style="text-align:justify;word-break:break-word"><span style="font-family: \'Times New Roman\';font-style: italic;">m</span><span style="font-family: 宋体;">，</span><span style="font-family: \'Times New Roman\';font-style: italic;">n</span><span style="font-family: 宋体;">是方程</span><img  src="https://img.xkw.com/dksih/formula/25a052bd1abec82dd8064a0ab54a7741.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的两根，则代数式</span><img  src="https://img.xkw.com/dksih/formula/8f28b1ad5fb5c7a66b0f19da9b84a5e7.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的值是（　　）</span></p><div class=" qml-og"><table class="qml-og" style="width:100%"><tr><td>A.&nbsp;<span class="qml-op"><span style="font-family: \'Times New Roman\';">2022</span></span></td><td>B.&nbsp;<span class="qml-op"><span style="font-family: \'Times New Roman\';">2023</span></span></td><td>C.&nbsp;<span class="qml-op"><span style="font-family: \'Times New Roman\';">2024</span></span></td><td colspan="1">D.&nbsp;<span class="qml-op"><span style="font-family: \'Times New Roman\';">2025</span></span></td></tr></table></div></div>',
    answer:
      '<div class="qml-answer" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6teeoSEUhqkyUeiMCE8AkqBId"><span class="qml-an-sq"><span class="qml-an qml-isop ">C</span></span></div>',
    explanation:
      '<div class="qml-explanation" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6teeoSEUhqkyUeiMCE8AkqBId"><div class="qml-seg" seg-name="分析">【分析】<p style="text-align:justify;word-break:break-word"><span style="font-family: 宋体;">本题主要考查了一元二次方程根与系数的关系，一元二次方程解的定义，先根据一元二次方程解的定义得到</span><img  src="https://img.xkw.com/dksih/formula/07d139bfa2be53f19a9b69140bed3081.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span><img  src="https://img.xkw.com/dksih/formula/27d643decfc5cb0f122ea6d830df6164.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，再由根与系数的关系得到</span><img  src="https://img.xkw.com/dksih/formula/63173160dbfbefdb0c3994e3871aa619.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，进而得到</span><img  src="https://img.xkw.com/dksih/formula/2ad78b4589a510270ee4abec9b44a77f.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span><img  src="https://img.xkw.com/dksih/formula/517706d00020015912868712ce36fdfb.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，据此代值计算即可．</span></p></div><div class="qml-seg" seg-name="详解">【详解】<p style="text-align: left;"><span style="font-family: 宋体;">解：</span><span style="font-family: \'Times New Roman\';">∵</span><span style="font-family: \'Times New Roman\';font-style: italic;">m</span><span style="font-family: 宋体;">，</span><span style="font-family: \'Times New Roman\';font-style: italic;">n</span><span style="font-family: 宋体;">是方程</span><img  src="https://img.xkw.com/dksih/formula/25a052bd1abec82dd8064a0ab54a7741.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的两根，</span></p><p style="text-align: left;"><span style="font-family: \'Times New Roman\';">∴</span><img  src="https://img.xkw.com/dksih/formula/07d139bfa2be53f19a9b69140bed3081.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span><img  src="https://img.xkw.com/dksih/formula/27d643decfc5cb0f122ea6d830df6164.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span><img  src="https://img.xkw.com/dksih/formula/63173160dbfbefdb0c3994e3871aa619.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∴</span><img  src="https://img.xkw.com/dksih/formula/2ad78b4589a510270ee4abec9b44a77f.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span><img  src="https://img.xkw.com/dksih/formula/517706d00020015912868712ce36fdfb.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∴</span><img  src="https://img.xkw.com/dksih/formula/8f28b1ad5fb5c7a66b0f19da9b84a5e7.svg" class="xkw-math-img" /></p><p style="text-align: left;"><img  src="https://img.xkw.com/dksih/formula/dd61c8590ecc3827a5984bcb69c230ce.svg" class="xkw-math-img" /></p><p style="text-align: left;"><img  src="https://img.xkw.com/dksih/formula/8877bbd94dd2039b2bb24d3d5cdb1fe7.svg" class="xkw-math-img" /></p><p style="text-align: left;"><img  src="https://img.xkw.com/dksih/formula/7ee0e4be8886d9c8d36df353c6120f94.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">故选；</span><span style="font-family: \'Times New Roman\';">C</span><span style="font-family: 宋体;">．</span></p></div></div>',
    create_date: '2024-03-23 06:58:15',
    paper_type_ids: [3, 27],
    course: {
      id: 11,
      name: '初中数学'
    },
    catalogs: [
      {
        id: 6603,
        name: '24.2 解一元二次方程'
      },
      {
        id: 7451,
        name: '27.2 解一元二次方程'
      },
      {
        id: 5937,
        name: '17.2 一元二次方程的解法'
      },
      {
        id: 7640,
        name: '*21.2.4 一元二次方程的根与系数的关系'
      },
      {
        id: 5720,
        name: '*5 一元二次方程的根与系数的关系'
      },
      {
        id: 7823,
        name: '*1.3 一元二次方程的根与系数的关系'
      },
      {
        id: 6129,
        name: '*17.4 一元二次方程的根与系数的关系'
      },
      {
        id: 6406,
        name: '＊5. 一元二次方程的根与系数的关系'
      },
      {
        id: 8139,
        name: '2.4 一元二次方程根与系数的关系（选学）'
      },
      {
        id: 7313,
        name: '*4.6 一元二次方程根与系数的关系'
      },
      {
        id: 7099,
        name: '*5 一元二次方程的根与系数的关系'
      },
      {
        id: 6871,
        name: '16.2.3 公式法'
      },
      {
        id: 7985,
        name: '*2.4 一元二次方程根与系数的关系'
      }
    ],
    type: {
      id: '1101',
      name: '单选题'
    },
    kpoints: [
      {
        id: 3749,
        name: '一元二次方程的根与系数的关系'
      },
      {
        id: 3732,
        name: '一元二次方程的解'
      }
    ],
    media: 0,
    exp_video_posters: {},
    answer_scoreable: 1,
    tag_ids: [],
    tags: [],
    en_word_ids: {},
    en_words: {},
    source_papers: [
      {
        title:
          '黑龙江省绥化市肇东市四站中学校2023-2024学年八年级下学期月考数学试题',
        area: {
          id: '230000',
          name: '黑龙江省'
        },
        type_id: 3,
        grade_id: 8,
        term: 'NEXT',
        year: 2024
      },
      {
        title:
          '四川省眉山天府新区清水初级中学2023-2024学年九年级下学期3月月考数学试题',
        area: {
          id: '510000',
          name: '四川省'
        },
        type_id: 3,
        grade_id: 9,
        term: 'NEXT',
        year: 2024
      },
      {
        title: '2024年黑龙江省大庆市肇源县中考二模数学试题',
        area: {
          id: '230000',
          name: '黑龙江省'
        },
        type_id: 27,
        grade_id: 9,
        term: 'NEXT',
        year: 2024
      },
      {
        title:
          '辽宁省沈阳市浑南区东北育才学校2023-2024学年八年级下学期第一次月考数学试题',
        area: {
          id: '210000',
          name: '辽宁省'
        },
        type_id: 3,
        grade_id: 8,
        term: 'NEXT',
        year: 2024
      }
    ]
  },
  {
    id: '3460662349422592',
    course_id: 11,
    type_id: '110303',
    kpoint_ids: [3757],
    catalog_ids: [
      7641, 5721, 7824, 6130, 6407, 8138, 6605, 7314, 7100, 7452, 6874, 5940,
      7986
    ],
    years: [2023],
    difficulty: 0.8500000000000001,
    difficulty_level: 18,
    stem: '<div class="qml-stem" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6tecxM7iaXFcxnuNps9rLUYvT"><p style="text-align: left;"><span style="font-family: 宋体;">如图，长方形</span><img  src="https://img.xkw.com/dksih/formula/411b38a18046fea8e9fab1f9f9b80a5f.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的长是</span><img  src="https://img.xkw.com/dksih/formula/ee3160fce05b551569b8c7b5de6dd8b6.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，宽是</span><img  src="https://img.xkw.com/dksih/formula/cc933c59790e1e90837c1ffe02f449f9.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，把长减少</span><img  src="https://img.xkw.com/dksih/formula/f3a9eed64d225267a58cd001db67e2a3.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，宽增加</span><img  src="https://img.xkw.com/dksih/formula/c78d0ab561d0c9bb9099772c596af8bf.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，得到一个正方形</span><img  src="https://img.xkw.com/dksih/formula/a8d0e8404f347a0eb4c76f4d25d9bdac.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，且长方形</span><img  src="https://img.xkw.com/dksih/formula/411b38a18046fea8e9fab1f9f9b80a5f.svg" class="xkw-math-img" /><span style="font-family: 宋体;">和正方形</span><img  src="https://img.xkw.com/dksih/formula/a8d0e8404f347a0eb4c76f4d25d9bdac.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的面积相等．请列出关于</span><span style="font-style: italic;font-family: \'Times New Roman\';">x</span><span style="font-family: 宋体;">、</span><span style="font-style: italic;font-family: \'Times New Roman\';">y</span><span style="font-family: 宋体;">的方程组，并求出长方形</span><img  src="https://img.xkw.com/dksih/formula/411b38a18046fea8e9fab1f9f9b80a5f.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的长、宽各是多少</span><img  src="https://img.xkw.com/dksih/formula/9efa9fbcfb9595e2f031aa691db4564b.svg" class="xkw-math-img" /><span style="font-family: 宋体;">？</span></p><p style="text-align: left;"><img  height="149" source-file="https://img.xkw.com/dksih/QBM/editorImg/2024/3/26/87332c8d-b73d-4f23-9944-85a0f4823d99.ai" src="https://img.xkw.com/dksih/QBM/editorImg/2024/3/26/87332c8d-b73d-4f23-9944-85a0f4823d99.png" width="209" /></p></div>',
    answer:
      '<div class="qml-answer" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6tecxM7iaXFcxnuNps9rLUYvT"><span class="qml-an-sq"><span class="qml-an  "><img  src="https://img.xkw.com/dksih/formula/5f2c6e8bd9a19d79b0955ef3948c102a.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，长方形</span><img  src="https://img.xkw.com/dksih/formula/411b38a18046fea8e9fab1f9f9b80a5f.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的长、宽各是</span><img  src="https://img.xkw.com/dksih/formula/5ebdc8b77e3bff7f8617ea55edc71516.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span><img  src="https://img.xkw.com/dksih/formula/ff7f6d64e5a8e1b1100c89b1f86becf9.svg" class="xkw-math-img" /></span></span></div>',
    explanation:
      '<div class="qml-explanation" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6tecxM7iaXFcxnuNps9rLUYvT"><div class="qml-seg" seg-name="分析">【分析】<p style="text-align:justify;word-break:break-word"><span style="font-family: 宋体;">本题主要考查了二元一次方程组在几何图形中的应用，根据正方形边长相等可得方程</span><img  src="https://img.xkw.com/dksih/formula/ac50f4cef9383fd58a2148c688e7b72a.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，根据两个阴影部分面积相等可得方程</span><img  src="https://img.xkw.com/dksih/formula/a008f80bc54ba9660f820d8903bb60e3.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，据此列出方程组求解即可．</span></p></div><div class="qml-seg" seg-name="详解">【详解】<p style="text-align: left;"><span style="font-family: 宋体;">解：由题意得，</span><img  src="https://img.xkw.com/dksih/formula/5f2c6e8bd9a19d79b0955ef3948c102a.svg" class="xkw-math-img" /><span style="font-family: \'Times New Roman\';"> </span><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">解得</span><img  src="https://img.xkw.com/dksih/formula/a9138efd8287d168625195c0fc24d7f5.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∴长方形</span><img  src="https://img.xkw.com/dksih/formula/411b38a18046fea8e9fab1f9f9b80a5f.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的长、宽各是</span><img  src="https://img.xkw.com/dksih/formula/5ebdc8b77e3bff7f8617ea55edc71516.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span><img  src="https://img.xkw.com/dksih/formula/ff7f6d64e5a8e1b1100c89b1f86becf9.svg" class="xkw-math-img" /></p></div></div>',
    create_date: '2024-03-24 19:18:29',
    paper_type_ids: [3],
    course: {
      id: 11,
      name: '初中数学'
    },
    catalogs: [
      {
        id: 7641,
        name: '21.3 实际问题与一元二次方程'
      },
      {
        id: 5721,
        name: '6 应用一元二次方程'
      },
      {
        id: 7824,
        name: '1.4 用一元二次方程解决问题'
      },
      {
        id: 6130,
        name: '17.5 一元二次方程的应用'
      },
      {
        id: 6407,
        name: '22.3 实践与探索'
      },
      {
        id: 8138,
        name: '2.3 一元二次方程的应用'
      },
      {
        id: 6605,
        name: '24.4 一元二次方程的应用'
      },
      {
        id: 7314,
        name: '4.7 一元二次方程的应用'
      },
      {
        id: 7100,
        name: '6 一元二次方程的应用'
      },
      {
        id: 7452,
        name: '27.3 一元二次方程与实际问题'
      },
      {
        id: 6874,
        name: '16.3 列方程解应用问题'
      },
      {
        id: 5940,
        name: '17.4 一元二次方程的应用'
      },
      {
        id: 7986,
        name: '2.5 一元二次方程的应用'
      }
    ],
    type: {
      id: '110303',
      name: '应用题'
    },
    kpoints: [
      {
        id: 3757,
        name: '与图形有关的问题(一元二次方程的应用)'
      }
    ],
    media: 0,
    exp_video_posters: {},
    answer_scoreable: 0,
    tag_ids: [],
    tags: [],
    en_word_ids: {},
    en_words: {},
    source_papers: [
      {
        title:
          '湖北省武汉市武汉一初慧泉中学2022-2023学年七年级下学期月考数学试题',
        area: {
          id: '420000',
          name: '湖北省'
        },
        type_id: 3,
        grade_id: 7,
        term: 'NEXT',
        year: 2023
      }
    ]
  },
  {
    id: '3459611827445760',
    course_id: 11,
    type_id: '1101',
    kpoint_ids: [3938, 3956, 52662],
    catalog_ids: [
      6029, 6899, 7648, 5753, 7848, 6146, 6440, 8162, 6640, 7321, 7129, 7455,
      8006
    ],
    years: [2024],
    difficulty: 0.65,
    difficulty_level: 19,
    stem: '<div class="qml-stem" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6teerW7lMgbbAkWBH95U8OmSC"><p style="text-align: left;"><span style="font-family: 宋体;">关于二次函数</span><img  src="https://img.xkw.com/dksih/formula/d373dbbac9f7f782550f510c046c6cb6.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的下列说法中，正确的是（</span><span style="font-family: \'Times New Roman\';"><span style="font-family: \'Times New Roman\'" qml-space-size="4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span><span style="font-family: 宋体;">）</span></p><div class=" qml-og"><table class="qml-og" style="width:100%"><tr><td>A.&nbsp;<span class="qml-op"><span style="font-family: 宋体;">无论</span><span style="font-family: \'Times New Roman\';font-style: italic;">a</span><span style="font-family: 宋体;">取范围内的何值，该二次函数的图象都经过</span><img  src="https://img.xkw.com/dksih/formula/53a948d2f7732d7f03e986c63712089b.svg" class="xkw-math-img" /><span style="font-family: 宋体;">和</span><img  src="https://img.xkw.com/dksih/formula/623afc24f2227004b0e1b3922dfb954b.svg" class="xkw-math-img" /><span style="font-family: 宋体;">这两个定点</span></span></td></tr><tr><td>B.&nbsp;<span class="qml-op"><span style="font-family: 宋体;">当</span><img  src="https://img.xkw.com/dksih/formula/707ea658f3a9359f5740d5aab48f7948.svg" class="xkw-math-img" /><span style="font-family: 宋体;">时，该二次函数取到最小值</span></span></td></tr><tr><td>C.&nbsp;<span class="qml-op"><span style="font-family: 宋体;">将该二次函数的图象向左平移</span><span style="font-family: \'Times New Roman\';">1</span><span style="font-family: 宋体;">个单位，则当</span><img  src="https://img.xkw.com/dksih/formula/9e541ea2f855f981c96207070683d388.svg" class="xkw-math-img" /><span style="font-family: 宋体;">或</span><img  src="https://img.xkw.com/dksih/formula/0c0aa2ef928b6e3341d0a0dc6d8055b9.svg" class="xkw-math-img" /><span style="font-family: 宋体;">时，</span><img  src="https://img.xkw.com/dksih/formula/d634ea3ee84dca7c5b59f77d77464ee9.svg" class="xkw-math-img" /></span></td></tr><tr><td colspan="1">D.&nbsp;<span class="qml-op"><span style="font-family: 宋体;">设该二次函数与</span><span style="font-family: \'Times New Roman\';font-style: italic;">x</span><span style="font-family: 宋体;">轴的两个交点的横坐标分别为</span><img  src="https://img.xkw.com/dksih/formula/f3b70aeff7c01e637f9caac346798ff8.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，则</span><img  src="https://img.xkw.com/dksih/formula/a91b2c81d40613edf529c1bc66e8022a.svg" class="xkw-math-img" /></span></td></tr></table></div></div>',
    answer:
      '<div class="qml-answer" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6teerW7lMgbbAkWBH95U8OmSC"><span class="qml-an-sq"><span class="qml-an qml-isop ">C</span></span></div>',
    explanation:
      '<div class="qml-explanation" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6teerW7lMgbbAkWBH95U8OmSC"><div class="qml-seg" seg-name="分析">【分析】<p style="text-align:justify;word-break:break-word"><span style="font-family: 宋体;">本题考查了二次函数的图象和性质．先求得该二次函数的图象经过点</span><img  src="https://img.xkw.com/dksih/formula/781b089662bf214668aae489bda55497.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span><img  src="https://img.xkw.com/dksih/formula/b1b4d87e5352d9322009e4d62b797c1e.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，求得对称轴为直线</span><img  src="https://img.xkw.com/dksih/formula/707ea658f3a9359f5740d5aab48f7948.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，据此逐一判断各选项即可．</span></p></div><div class="qml-seg" seg-name="详解">【详解】<p style="text-align: left;"><span style="font-family: 宋体;">解：当</span><img  src="https://img.xkw.com/dksih/formula/9b384412acba251d87902ab928902f16.svg" class="xkw-math-img" /><span style="font-family: 宋体;">时，</span><img  src="https://img.xkw.com/dksih/formula/107babba45f110012183dc4dc54490f7.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，即该二次函数的图象经过点</span><img  src="https://img.xkw.com/dksih/formula/781b089662bf214668aae489bda55497.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，故选项</span><span style="font-family: \'Times New Roman\';">A</span><span style="font-family: 宋体;">不正确；</span></p><p style="text-align: left;"><span style="font-family: 宋体;">当</span><img  src="https://img.xkw.com/dksih/formula/e55aa0a20848c37c1892c567b2315e04.svg" class="xkw-math-img" /><span style="font-family: 宋体;">时，</span><img  src="https://img.xkw.com/dksih/formula/107babba45f110012183dc4dc54490f7.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，则该二次函数的图象经过点</span><img  src="https://img.xkw.com/dksih/formula/b1b4d87e5352d9322009e4d62b797c1e.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∴该二次函数图象的对称轴为直线</span><img  src="https://img.xkw.com/dksih/formula/acac331bb1aeba6c880a915cc91f7ae2.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∵</span><img  src="https://img.xkw.com/dksih/formula/9e10e1c43b86a8cd4360ca9b57232164.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∴当</span><img  src="https://img.xkw.com/dksih/formula/707ea658f3a9359f5740d5aab48f7948.svg" class="xkw-math-img" /><span style="font-family: 宋体;">时，该二次函数取到最大值，故选项</span><span style="font-family: \'Times New Roman\';">B</span><span style="font-family: 宋体;">不正确；</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∵该二次函数的图象经过点</span><img  src="https://img.xkw.com/dksih/formula/781b089662bf214668aae489bda55497.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span><img  src="https://img.xkw.com/dksih/formula/b1b4d87e5352d9322009e4d62b797c1e.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，将该二次函数的图象向左平移</span><span style="font-family: \'Times New Roman\';">1</span><span style="font-family: 宋体;">个单位，则经过点</span><img  src="https://img.xkw.com/dksih/formula/4772c835cbe626040ecc4df30e6f0ccc.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span><img  src="https://img.xkw.com/dksih/formula/4bc387da3c10d0ffde2a41a935cc1331.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∴则当</span><img  src="https://img.xkw.com/dksih/formula/9e541ea2f855f981c96207070683d388.svg" class="xkw-math-img" /><span style="font-family: 宋体;">或</span><img  src="https://img.xkw.com/dksih/formula/0c0aa2ef928b6e3341d0a0dc6d8055b9.svg" class="xkw-math-img" /><span style="font-family: 宋体;">时，</span><img  src="https://img.xkw.com/dksih/formula/d634ea3ee84dca7c5b59f77d77464ee9.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，故选项</span><span style="font-family: \'Times New Roman\';">C</span><span style="font-family: 宋体;">正确；</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∵该二次函数的图象经过点</span><img  src="https://img.xkw.com/dksih/formula/781b089662bf214668aae489bda55497.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span><img  src="https://img.xkw.com/dksih/formula/b1b4d87e5352d9322009e4d62b797c1e.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，开口向下，且二次函数与</span><span style="font-style: italic;font-family: \'Times New Roman\';">x</span><span style="font-family: 宋体;">轴的两个交点的横坐标分别为</span><img  src="https://img.xkw.com/dksih/formula/00d839cc8b7c31633ffcc79580cdb58c.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">∴</span><img  src="https://img.xkw.com/dksih/formula/2a8ba210c77badc54ad92cc04049ea38.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，故选项</span><span style="font-family: \'Times New Roman\';">D</span><span style="font-family: 宋体;">不正确，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">故选：</span><span style="font-family: \'Times New Roman\';">C</span><span style="font-family: 宋体;">．</span></p></div></div>',
    create_date: '2024-03-23 07:41:11',
    paper_type_ids: [29],
    course: {
      id: 11,
      name: '初中数学'
    },
    catalogs: [
      {
        id: 6029,
        name: '26.3 二次函数y=ax²＋bx＋c的图像'
      },
      {
        id: 6899,
        name: '19.4 二次函数的应用'
      },
      {
        id: 7648,
        name: '22.2 二次函数与一元二次方程'
      },
      {
        id: 5753,
        name: '5 二次函数与一元二次方程'
      },
      {
        id: 7848,
        name: '5.4 二次函数与一元二次方程'
      },
      {
        id: 6146,
        name: '21.3 二次函数与一元二次方程'
      },
      {
        id: 6440,
        name: '2. 二次函数y=ax²＋bx＋c的图象与性质'
      },
      {
        id: 8162,
        name: '1.3 二次函数的性质'
      },
      {
        id: 6640,
        name: '30.5 二次函数与一元二次方程的关系'
      },
      {
        id: 7321,
        name: '5.6 二次函数的图象与一元二次方程'
      },
      {
        id: 7129,
        name: '7 二次函数与一元二次方程'
      },
      {
        id: 7455,
        name: '28.2 二次函数与一元二次方程'
      },
      {
        id: 8006,
        name: '1.4 二次函数与一元二次方程的联系'
      }
    ],
    type: {
      id: '1101',
      name: '单选题'
    },
    kpoints: [
      {
        id: 3938,
        name: 'y=ax²+bx+c的图象与性质'
      },
      {
        id: 3956,
        name: '二次函数图象的平移'
      },
      {
        id: 52662,
        name: '抛物线与x轴的交点问题'
      }
    ],
    media: 0,
    exp_video_posters: {},
    answer_scoreable: 1,
    tag_ids: [],
    tags: [],
    en_word_ids: {},
    en_words: {},
    source_papers: [
      {
        title: '2024年浙江省初中名校发展共同体3月中考模拟联考数学模拟预测题',
        area: {
          id: '330000',
          name: '浙江省'
        },
        type_id: 29,
        grade_id: 9,
        term: 'NEXT',
        year: 2024
      }
    ]
  },
  {
    id: '3460747698724864',
    course_id: 11,
    type_id: '110303',
    kpoint_ids: [3756, 3343],
    catalog_ids: [
      7641, 5721, 7824, 6130, 6407, 8138, 6605, 7314, 7100, 7452, 6874, 5940,
      7986
    ],
    years: [2024],
    difficulty: 0.65,
    difficulty_level: 19,
    stem: '<div class="qml-stem" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6teeo_fEHclQ_JaQRmQluLLjW"><p style="text-align: left;"><span style="font-family: 宋体;">“双减”在行动，教育在提质．由长沙市教育局倾力打造的“名师云课堂”已于</span><span style="font-family: \'Times New Roman\';">2023</span><span style="font-family: 宋体;">年</span><span style="font-family: \'Times New Roman\';">9</span><span style="font-family: 宋体;">月</span><span style="font-family: \'Times New Roman\';">9</span><span style="font-family: 宋体;">日正式上线．每周六（除节假日外）上午九点，“名师云课堂”都会如约而至．据不完全统计，第一周收看人数为</span><span style="font-family: \'Times New Roman\';">24200</span><span style="font-family: 宋体;">人，第三周收看人数为</span><span style="font-family: \'Times New Roman\';">29282</span><span style="font-family: 宋体;">人．假设每周收看人数的平均增长率相同．</span></p><div class="qml-sq" id-container="question"><div class="qml-stem" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6teeo_fEHclQ_JaQRmQluLLjW"><p style=""><span class="ques-no">（1）</span><span style="font-family: 宋体;">求第一周到第三周“名师云课堂”收看人数的平均增长率；</span></p></div></div><div class="qml-sq" id-container="question"><div class="qml-stem" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6teeo_fEHclQ_JaQRmQluLLjW"><p style=""><span class="ques-no">（2）</span><span style="font-family: 宋体;">按照（</span><span style="font-family: \'Times New Roman\';">1</span><span style="font-family: 宋体;">）中平均增长率．试估计第四周有多少人收看“名师云课堂”．（结果保留整数）</span></p></div></div></div>',
    answer:
      '<div class="qml-answer" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6teeo_fEHclQ_JaQRmQluLLjW">（1）<span class="qml-an-sq" id-container="question"><span class="qml-an  "><span style="font-family: 宋体;">第一周到第三周“名师云课堂”收看人数的平均增长率为</span><img  src="https://img.xkw.com/dksih/formula/f733b1ceeead9ff892539d46a23f3626.svg" class="xkw-math-img" /></span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）<span class="qml-an-sq" id-container="question"><span class="qml-an  "><span style="font-family: 宋体;">估计第四周有</span><span style="font-family: \'Times New Roman\';">32210</span><span style="font-family: 宋体;">人收看“名师云课堂”</span></span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>',
    explanation:
      '<div class="qml-explanation" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6teeo_fEHclQ_JaQRmQluLLjW"><div class="qml-seg" seg-name="分析">【分析】<p style="text-align: left;"><span style="font-family: 宋体;">本题考查了一元二次方程的应用、有理数的混合运算的应用，理解题意，找准等量关系，正确列出一元二次方程是解此题的关键．</span></p><p style="text-align: left;"><span style="font-family: 宋体;">（</span><span style="font-family: \'Times New Roman\';">1</span><span style="font-family: 宋体;">）设第一周到第三周“名师云课堂”收看人数的平均增长率为</span><img  src="https://img.xkw.com/dksih/formula/81dea63b8ce3e51adf66cf7b9982a248.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，根据题意列出一元二次方程，解方程即可得出答案；</span></p><p style="text-align: left;"><span style="font-family: 宋体;">（</span><span style="font-family: \'Times New Roman\';">2</span><span style="font-family: 宋体;">）根据第四周收看人数</span><img  src="https://img.xkw.com/dksih/formula/6706fe00b4e231e62d9ecbec567d526b.svg" class="xkw-math-img" /><span style="font-family: 宋体;">第三周收看人数</span><img  src="https://img.xkw.com/dksih/formula/2468403b3eba9e40bfa36f464e927738.svg" class="xkw-math-img" /><span style="font-family: 宋体;">（</span><img  src="https://img.xkw.com/dksih/formula/9c5fb5a6e42736a5d6afc9771bc4d299.svg" class="xkw-math-img" /><span style="font-family: 宋体;">增长率），即可得出答案．</span></p></div><div class="qml-exps-sq" id-container="question">(1)小问详解： <p style="text-align: left;"><span style="font-family: 宋体;">解：设第一周到第三周“名师云课堂”收看人数的平均增长率为</span><img  src="https://img.xkw.com/dksih/formula/81dea63b8ce3e51adf66cf7b9982a248.svg" class="xkw-math-img" /><span style="font-family: 宋体;">．</span></p><p style="text-align: left;"><span style="font-family: 宋体;">则</span><img  src="https://img.xkw.com/dksih/formula/919154d8aa3c1231d2d87f2e7a161147.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">解得</span><img  src="https://img.xkw.com/dksih/formula/2adad06049ead205c1a3b21f37fccffc.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span><img  src="https://img.xkw.com/dksih/formula/b9afb74f7e972be5dd52bb930a884637.svg" class="xkw-math-img" /><span style="font-family: 宋体;">（舍）．</span></p><p style="text-align: left;"><span style="font-family: 宋体;">答：第一周到第三周“名师云课堂”收看人数的平均增长率为</span><img  src="https://img.xkw.com/dksih/formula/f733b1ceeead9ff892539d46a23f3626.svg" class="xkw-math-img" /><span style="font-family: 宋体;">；</span></p></div><div class="qml-exps-sq" id-container="question">(2)小问详解： <p style="text-align: left;"><img  src="https://img.xkw.com/dksih/formula/b9cdadc95d97edf29b4a45460da20c91.svg" class="xkw-math-img" /><span style="font-family: 宋体;">（人）．</span></p><p style="text-align: left;"><span style="font-family: 宋体;">答：估计第四周有</span><span style="font-family: \'Times New Roman\';">32210</span><span style="font-family: 宋体;">人收看“名师云课堂”．</span></p></div></div>',
    create_date: '2024-03-24 22:12:07',
    paper_type_ids: [26],
    course: {
      id: 11,
      name: '初中数学'
    },
    catalogs: [
      {
        id: 7641,
        name: '21.3 实际问题与一元二次方程'
      },
      {
        id: 5721,
        name: '6 应用一元二次方程'
      },
      {
        id: 7824,
        name: '1.4 用一元二次方程解决问题'
      },
      {
        id: 6130,
        name: '17.5 一元二次方程的应用'
      },
      {
        id: 6407,
        name: '22.3 实践与探索'
      },
      {
        id: 8138,
        name: '2.3 一元二次方程的应用'
      },
      {
        id: 6605,
        name: '24.4 一元二次方程的应用'
      },
      {
        id: 7314,
        name: '4.7 一元二次方程的应用'
      },
      {
        id: 7100,
        name: '6 一元二次方程的应用'
      },
      {
        id: 7452,
        name: '27.3 一元二次方程与实际问题'
      },
      {
        id: 6874,
        name: '16.3 列方程解应用问题'
      },
      {
        id: 5940,
        name: '17.4 一元二次方程的应用'
      },
      {
        id: 7986,
        name: '2.5 一元二次方程的应用'
      }
    ],
    type: {
      id: '110303',
      name: '应用题'
    },
    kpoints: [
      {
        id: 3756,
        name: '增长率问题(一元二次方程的应用)'
      },
      {
        id: 3343,
        name: '有理数四则混合运算的实际应用'
      }
    ],
    media: 0,
    exp_video_posters: {},
    answer_scoreable: 0,
    tag_ids: [],
    tags: [],
    en_word_ids: {},
    en_words: {},
    source_papers: []
  },
  {
    id: '3459387153178624',
    course_id: 11,
    type_id: '1102',
    kpoint_ids: [3749],
    catalog_ids: [
      6603, 7451, 5937, 7640, 5720, 7823, 6129, 6406, 8139, 7313, 7099, 6871,
      7985
    ],
    years: [2024],
    difficulty: 0.8500000000000001,
    difficulty_level: 18,
    stem: '<div class="qml-stem" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6teejCN0X5URBhmJzBE59zXYo"><p style="text-align: left;"><span style="font-family: 宋体;">已知，关于</span><img  src="https://img.xkw.com/dksih/formula/81dea63b8ce3e51adf66cf7b9982a248.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的一元二次方程</span><img  src="https://img.xkw.com/dksih/formula/d729efa44ee74ffe0662d2c3723a5937.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的一个根是</span><img  src="https://img.xkw.com/dksih/formula/47cfe4e08c06bde245e58aa22485044c.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，则另一个根为</span><span class="qml-bk" index="1" size="8" type="underline" style="text-decoration:underline" >　　　　　　　　</span><span style="font-family: 宋体;">．</span></p></div>',
    answer:
      '<div class="qml-answer" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6teejCN0X5URBhmJzBE59zXYo"><span class="qml-an-sq"><span class="qml-an  qml-exact"><img  src="https://img.xkw.com/dksih/formula/ab46ea0cba2d06283fae3d864a2329e0.svg" class="xkw-math-img" /><span style="font-family: \'Times New Roman\';">##</span><img  src="https://img.xkw.com/dksih/formula/2b2c435cd404239eba4f825bfdccb63a.svg" class="xkw-math-img" /></span></span></div>',
    explanation:
      '<div class="qml-explanation" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6teejCN0X5URBhmJzBE59zXYo"><div class="qml-seg" seg-name="分析">【分析】<p style="text-align:justify;word-break:break-word"><span style="font-family: 宋体;">此题考查了一元二次方程根与系数的关系，设另一个根为</span><img  src="https://img.xkw.com/dksih/formula/e170f206fdbbd834aad7580c727e2cc6.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，则根据根与系数的关系得出</span><img  src="https://img.xkw.com/dksih/formula/6e96dcb9171a8f55688f47eb2cbe8b24.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，求出即可．</span></p></div><div class="qml-seg" seg-name="详解">【详解】<p style="text-align: left;"><span style="font-family: 宋体;">解：设另一个根为</span><img  src="https://img.xkw.com/dksih/formula/e170f206fdbbd834aad7580c727e2cc6.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，则</span><img  src="https://img.xkw.com/dksih/formula/6e96dcb9171a8f55688f47eb2cbe8b24.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align:justify;word-break:break-word"><span style="font-family: 宋体;">解得：</span><img  src="https://img.xkw.com/dksih/formula/87b4b55acbcebe9a931c2fc5f012a451.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align:justify;word-break:break-word"><span style="font-family: 宋体;">所以，另一个根为</span><img  src="https://img.xkw.com/dksih/formula/ab46ea0cba2d06283fae3d864a2329e0.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">故答案为：</span><img  src="https://img.xkw.com/dksih/formula/ab46ea0cba2d06283fae3d864a2329e0.svg" class="xkw-math-img" /><span style="font-family: 宋体;">．</span></p></div></div>',
    create_date: '2024-03-23 00:04:05',
    paper_type_ids: [3],
    course: {
      id: 11,
      name: '初中数学'
    },
    catalogs: [
      {
        id: 6603,
        name: '24.2 解一元二次方程'
      },
      {
        id: 7451,
        name: '27.2 解一元二次方程'
      },
      {
        id: 5937,
        name: '17.2 一元二次方程的解法'
      },
      {
        id: 7640,
        name: '*21.2.4 一元二次方程的根与系数的关系'
      },
      {
        id: 5720,
        name: '*5 一元二次方程的根与系数的关系'
      },
      {
        id: 7823,
        name: '*1.3 一元二次方程的根与系数的关系'
      },
      {
        id: 6129,
        name: '*17.4 一元二次方程的根与系数的关系'
      },
      {
        id: 6406,
        name: '＊5. 一元二次方程的根与系数的关系'
      },
      {
        id: 8139,
        name: '2.4 一元二次方程根与系数的关系（选学）'
      },
      {
        id: 7313,
        name: '*4.6 一元二次方程根与系数的关系'
      },
      {
        id: 7099,
        name: '*5 一元二次方程的根与系数的关系'
      },
      {
        id: 6871,
        name: '16.2.3 公式法'
      },
      {
        id: 7985,
        name: '*2.4 一元二次方程根与系数的关系'
      }
    ],
    type: {
      id: '1102',
      name: '填空题'
    },
    kpoints: [
      {
        id: 3749,
        name: '一元二次方程的根与系数的关系'
      }
    ],
    media: 0,
    exp_video_posters: {},
    answer_scoreable: 1,
    tag_ids: [],
    tags: [],
    en_word_ids: {},
    en_words: {},
    source_papers: [
      {
        title:
          '江苏省泰州市靖江市靖江市八校联盟2023-2024学年九年级下学期3月月考数学试题',
        area: {
          id: '320000',
          name: '江苏省'
        },
        type_id: 3,
        grade_id: 9,
        term: 'NEXT',
        year: 2024
      }
    ]
  },
  {
    id: '3460781758324736',
    course_id: 11,
    type_id: '110305',
    kpoint_ids: [3738, 3745],
    catalog_ids: [
      7822, 8137, 7451, 6871, 5718, 5938, 6128, 6405, 6604, 7097, 7312, 7638,
      7984
    ],
    years: [2024],
    difficulty: 0.8500000000000001,
    difficulty_level: 18,
    stem: '<div class="qml-stem" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6tef-KQlqJVoYdrq0KM9E56VI"><p style="text-align: left;"><span style="font-family: 宋体;">已知关于</span><img  src="https://img.xkw.com/dksih/formula/81dea63b8ce3e51adf66cf7b9982a248.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的方程</span><img  src="https://img.xkw.com/dksih/formula/0651eb9b5b923cc4be43f953f7efbf6e.svg" class="xkw-math-img" /><span style="font-family: 宋体;">．</span></p><div class="qml-sq" id-container="question"><div class="qml-stem" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6tef-KQlqJVoYdrq0KM9E56VI"><span class="ques-no">（1）</span><span style="font-family: 宋体;">当</span><img  src="https://img.xkw.com/dksih/formula/d8a3cc8c48bf54ec8252e5dce6867754.svg" class="xkw-math-img" /><span style="font-family: 宋体;">时，求原方程的解．</span></div></div><div class="qml-sq" id-container="question"><div class="qml-stem" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6tef-KQlqJVoYdrq0KM9E56VI"><span class="ques-no">（2）</span><span style="font-family: 宋体;">若原方程有两个相等的实数根，求</span><img  src="https://img.xkw.com/dksih/formula/294f5ba74cdf695fc9a8a8e52f421328.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的值．</span></div></div></div>',
    answer:
      '<div class="qml-answer" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6tef-KQlqJVoYdrq0KM9E56VI">（1）<span class="qml-an-sq" id-container="question"><span class="qml-an  "><img  src="https://img.xkw.com/dksih/formula/f0736457346c11dd6f458418a4f747ff.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span><img  src="https://img.xkw.com/dksih/formula/7eba583e37243f3ba166bd1c11e58498.svg" class="xkw-math-img" /></span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）<span class="qml-an-sq" id-container="question"><span class="qml-an  "><img  src="https://img.xkw.com/dksih/formula/10b58380c3a466e952a9c6b9c886a7f9.svg" class="xkw-math-img" /></span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>',
    explanation:
      '<div class="qml-explanation" data-copyright="xkw.com-1716796687-105981715226768400-3mutNXTQ-XUd9MkQl6thCr_1F7YJN31CQTZRF1e6tef-KQlqJVoYdrq0KM9E56VI"><div class="qml-seg" seg-name="分析">【分析】<p style="text-align:justify;word-break:break-word"><span style="font-family: 宋体;">本题考查了解一元二次方程，一元二次方程根的判别式，熟练掌握一元二次方程解法，一元二次方程根的判别式是解题关键．</span></p><p style="text-align:justify;word-break:break-word"><span style="font-family: 宋体;">（</span><span style="font-family: \'Times New Roman\';">1</span><span style="font-family: 宋体;">）将</span><img  src="https://img.xkw.com/dksih/formula/d8a3cc8c48bf54ec8252e5dce6867754.svg" class="xkw-math-img" /><span style="font-family: 宋体;">代入，解方程即可；</span></p><p style="text-align:justify;word-break:break-word"><span style="font-family: 宋体;">（</span><span style="font-family: \'Times New Roman\';">2</span><span style="font-family: 宋体;">）先求出</span><img  src="https://img.xkw.com/dksih/formula/470b85076b118533a1461b7aa1ef9145.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的值，再根据</span><img  src="https://img.xkw.com/dksih/formula/470b85076b118533a1461b7aa1ef9145.svg" class="xkw-math-img" /><span style="font-family: 宋体;">的符号即可得出答案．</span></p></div><div class="qml-exps-sq" id-container="question">(1)小问详解： <p style="text-align: left;"><span style="font-family: 宋体;">解：当</span><img  src="https://img.xkw.com/dksih/formula/d8a3cc8c48bf54ec8252e5dce6867754.svg" class="xkw-math-img" /><span style="font-family: 宋体;">时，原方程为</span><img  src="https://img.xkw.com/dksih/formula/d1fdf7d28b97fb6fe731703f80e122ed.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><img  src="https://img.xkw.com/dksih/formula/495b250475ef84e0d7ba3edd0f636a51.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">即</span><img  src="https://img.xkw.com/dksih/formula/f9378f4030a56301dfdf892c0b36182b.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span><img  src="https://img.xkw.com/dksih/formula/776b26892877019247c7a50f735b0f01.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">解得：</span><img  src="https://img.xkw.com/dksih/formula/f0736457346c11dd6f458418a4f747ff.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span><img  src="https://img.xkw.com/dksih/formula/7eba583e37243f3ba166bd1c11e58498.svg" class="xkw-math-img" /><span style="font-family: 宋体;">；</span></p></div><div class="qml-exps-sq" id-container="question">(2)小问详解： <p style="text-align: left;"><span style="font-family: 宋体;">解：</span><img  src="https://img.xkw.com/dksih/formula/16f3d198e76391779fa3badc848c8ac8.svg" class="xkw-math-img" /><span style="font-family: 宋体;">该一元二次方程有两个相等的实数根，</span></p><p style="text-align: left;"><img  src="https://img.xkw.com/dksih/formula/b77ade29ce717628f51fc58d41c5c0ec.svg" class="xkw-math-img" /><span style="font-family: 宋体;">，</span></p><p style="text-align: left;"><span style="font-family: 宋体;">解得：</span><img  src="https://img.xkw.com/dksih/formula/10b58380c3a466e952a9c6b9c886a7f9.svg" class="xkw-math-img" /><span style="font-family: 宋体;">．</span></p></div></div>',
    create_date: '2024-03-24 23:21:25',
    paper_type_ids: [26],
    course: {
      id: 11,
      name: '初中数学'
    },
    catalogs: [
      {
        id: 7822,
        name: '1.2 一元二次方程的解法'
      },
      {
        id: 8137,
        name: '2.2 一元二次方程的解法'
      },
      {
        id: 7451,
        name: '27.2 解一元二次方程'
      },
      {
        id: 6871,
        name: '16.2.3 公式法'
      },
      {
        id: 5718,
        name: '3 用公式法求解一元二次方程'
      },
      {
        id: 5938,
        name: '17.3 一元二次方程根的判别式'
      },
      {
        id: 6128,
        name: '17.3 一元二次方程根的判别式'
      },
      {
        id: 6405,
        name: '4. 一元二次方程根的判别式'
      },
      {
        id: 6604,
        name: '24.3 一元二次方程根与系数的关系*'
      },
      {
        id: 7097,
        name: '3 用公式法解一元二次方程'
      },
      {
        id: 7312,
        name: '4.5 一元二次方程根的判别式'
      },
      {
        id: 7638,
        name: '21.2.2 公式法'
      },
      {
        id: 7984,
        name: '2.3 一元二次方程根的判别式'
      }
    ],
    type: {
      id: '110305',
      name: '问答题'
    },
    kpoints: [
      {
        id: 3738,
        name: '解一元二次方程——配方法'
      },
      {
        id: 3745,
        name: '根据一元二次方程根的情况求参数'
      }
    ],
    media: 0,
    exp_video_posters: {},
    answer_scoreable: 0,
    tag_ids: [],
    tags: [],
    en_word_ids: {},
    en_words: {},
    source_papers: [
      {
        title: '2024年江西省南昌市部分学校中考一模数学试题',
        area: {
          id: '360000',
          name: '江西省'
        },
        type_id: 26,
        grade_id: 9,
        term: 'NEXT',
        year: 2024
      }
    ]
  }
]

const data5 = [
  {
    id: '0101',
    name: '选择题',
    objective: true,
    ordinal: 1,
    parent_id: '0',
    course_id: 1
  },
  {
    id: '0118',
    name: '互动连线题',
    objective: false,
    ordinal: 1,
    parent_id: '0',
    course_id: 1
  },
  {
    id: '011801',
    name: '图图连线',
    objective: false,
    ordinal: 1,
    parent_id: '0118',
    course_id: 1
  },
  {
    id: '0102',
    name: '填空题',
    objective: false,
    ordinal: 2,
    parent_id: '0',
    course_id: 1
  },
  {
    id: '011802',
    name: '图文连线',
    objective: false,
    ordinal: 2,
    parent_id: '0118',
    course_id: 1
  },
  {
    id: '0119',
    name: '互动分类题',
    objective: false,
    ordinal: 2,
    parent_id: '0',
    course_id: 1
  },
  {
    id: '011803',
    name: '文文连线',
    objective: false,
    ordinal: 3,
    parent_id: '0118',
    course_id: 1
  },
  {
    id: '0120',
    name: '基础知识综合',
    objective: false,
    ordinal: 3,
    parent_id: '0',
    course_id: 1
  },
  {
    id: '0121',
    name: '综合性学习',
    objective: false,
    ordinal: 3,
    parent_id: '0',
    course_id: 1
  },
  {
    id: '0103',
    name: '语言表达',
    objective: false,
    ordinal: 4,
    parent_id: '0',
    course_id: 1
  },
  {
    id: '0104',
    name: '现代文阅读',
    objective: false,
    ordinal: 4,
    parent_id: '0',
    course_id: 1
  },
  {
    id: '0105',
    name: '文言文阅读',
    objective: false,
    ordinal: 5,
    parent_id: '0',
    course_id: 1
  },
  {
    id: '0106',
    name: '信息匹配',
    objective: false,
    ordinal: 6,
    parent_id: '0',
    course_id: 1
  },
  {
    id: '0108',
    name: '句子训练',
    objective: false,
    ordinal: 8,
    parent_id: '0',
    course_id: 1
  },
  {
    id: '0109',
    name: '连线题',
    objective: false,
    ordinal: 9,
    parent_id: '0',
    course_id: 1
  },
  {
    id: '0110',
    name: '判断题',
    objective: true,
    ordinal: 10,
    parent_id: '0',
    course_id: 1
  },
  {
    id: '0111',
    name: '排序题',
    objective: false,
    ordinal: 11,
    parent_id: '0',
    course_id: 1
  },
  {
    id: '0112',
    name: '书写',
    objective: false,
    ordinal: 12,
    parent_id: '0',
    course_id: 1
  },
  {
    id: '0113',
    name: '诗词曲鉴赏',
    objective: false,
    ordinal: 13,
    parent_id: '0',
    course_id: 1
  },
  {
    id: '0114',
    name: '修改病句',
    objective: false,
    ordinal: 14,
    parent_id: '0',
    course_id: 1
  },
  {
    id: '0107',
    name: '书面表达',
    objective: false,
    ordinal: 15,
    parent_id: '0',
    course_id: 1
  },
  {
    id: '0115',
    name: '简答题',
    objective: false,
    ordinal: 15,
    parent_id: '0',
    course_id: 1
  },
  {
    id: '0116',
    name: '其他',
    objective: false,
    ordinal: 16,
    parent_id: '0',
    course_id: 1
  },
  {
    id: '0117',
    name: '听读鉴赏',
    objective: false,
    ordinal: 17,
    parent_id: '0',
    course_id: 1
  }
]

module.exports = [
  {
    // 课程
    url: '/new/print/e/t/q/x/courses/all',
    type: 'get',
    response: (config) => {
      const items = data
      return {
        success: true,
        message: 'success',
        code: 200,
        results: items
      }
    }
  },
  {
    // 教材
    url: '/new/print/e/t/q/x/book1.*',
    type: 'get',
    response: (config) => {
      const items = data2
      return {
        success: true,
        message: 'success',
        code: 200,
        timestamp: 1716796645379,
        result: {
          page_index: 1,
          page_size: 200,
          total_size: 84,
          total_page: 1,
          items: items
        }
      }
    }
  },
  {
    // 教材章节
    url: '/new/print/e/t/q/x/book2.*',
    type: 'get',
    response: (config) => {
      const items = data3
      return {
        success: true,
        message: 'success',
        code: 200,
        timestamp: 1716796645379,
        result: items
      }
    }
  },
  {
    // 题详情
    url: '/new/print/e/t/q/x/question/query',
    type: 'post',
    response: (config) => {
      const items = data4
      return {
        success: true,
        message: 'success',
        code: 200,
        timestamp: 1716796645379,
        result: items
      }
    }
  },
  {
    // 题型
    url: '/new/print/e/t/q/x/question/types\.*',
    type: 'get',
    response: (config) => {
      const items = data5
      return {
        success: true,
        message: 'success',
        code: 200,
        timestamp: 1716796645379,
        result: items
      }
    }
  }
]
