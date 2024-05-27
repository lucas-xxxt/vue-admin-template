<template>
  <div class="dashboard-container">
    <div class="main-content">
      <el-row :gutter="20">
        <el-col :span="10">
          <el-select v-model="courseId" style="width: 70%" placeholder="请选择">
            <el-option
              v-for="item in courseList"
              :key="item.value"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-col>
        <el-col :span="12">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="章节选题" name="first" />
            <el-tab-pane label="知识点选题" name="second" />
          </el-tabs>
        </el-col>
      </el-row>
      <div style="border-bottom: 1px solid #ccc; margin-bottom: 20px" />
      <el-row :gutter="20">
        <el-col :span="8" style="height: 100%">
          <el-card>
            <div class="book">
              <el-select
                v-model="bookId"
                style="width: 90%"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in bookList"
                  :key="item.value"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
            </div>
            <div class="cate-tree">
              <el-tree
                ref="treeRef"
                :data="cateTreeList"
                :props="defaultProps"
                highlight-current
                default-expand-all
                node-key="id"
                @node-click="handleNodeClick"
              />
            </div>
          </el-card>
        </el-col>
        <el-col :span="16">
          <!-- 题型 -->
          <el-card class="right-content">
            <div class="question-wrap">
              <div class="label">题型：</div>
              <div class="question-container">
                <div class="question-type">
                  <div
                    v-for="(item, index) in questionTypeList"
                    :key="index"
                    :class="item.id === curTypeId ? 'active' : ''"
                    style="margin-right: 10"
                    @click="handleClickType(item)"
                  >
                    {{ item.name }}
                  </div>
                </div>
                <div class="question-child">
                  <div
                    v-for="(item, index) in questionTypeChild"
                    :key="index"
                    :class="item.id === curChildId ? 'active' : ''"
                    @click="handleClickTypeChild(item)"
                  >
                    {{ item.name }}
                  </div>
                </div>
              </div>
            </div>
            <!-- 筛选项 -->
            <div>
              <span>年份：</span>
              <el-select v-model="year" style="width: 20%" placeholder="请选择">
                <el-option
                  v-for="item in yearList"
                  :key="item.value"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
            </div>
            <el-divider />
            <!-- 内容区 -->
            <div class="main-detail">
              <div v-for="(item, index) in detailList" :key="index">
                <el-card class="detail-show">
                  <div class="detail-sub">
                    <div @click="handleShowAnswer(item)" v-html="item.stem" />
                  </div>
                  <div v-show="item.showAnswer" class="detail-item">
                    <div class="tip">【答案】</div>
                    <div v-html="item.answer" />
                  </div>
                  <div v-show="item.showAnswer" class="detail-item">
                    <!-- <div class="tip">【解析】</div> -->
                    <div v-html="item.explanation" />
                  </div>
                </el-card>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { getList } from "@/api/table";
import {
  getAllLesson,
  getBook,
  getBookCate,
  getDetail,
  getQuestion,
} from "@/api/main";
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  data() {
    return {
      courseId: "",
      courseList: [],
      bookList: [],
      activeName: "first",
      bookId: "",
      cateList: [],
      cateTreeList: [],
      defaultProps: {
        children: "children",
        label: "name",
      },
      currentNodeKey: "",
      curTypeId: "",
      curChildId: "",
      questionTypeAll: [],
      questionTypeList: [],
      questionTypeChild: [],
      detailList: [],
      year: "",
      yearList: [
        {
          id: 2019,
          name: "2019",
        },
        {
          id: 2020,
          name: "2020",
        },
        {
          id: 2021,
          name: "2021",
        },
        {
          id: 2022,
          name: "2022",
        },
        {
          id: 2023,
          name: "2023",
        },
        {
          id: 2024,
          name: "2024",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["name"]),
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      // getList().then(response => {
      //   console.log(response, '----')
      // })
      getAllLesson().then((res) => {
        console.log(res, "22222");
        this.courseList = res.results;
        this.courseId = res.results[0].id;
        this.getAllBook();
        this.handleGetQuestionType();
      });
    },
    handleClick() {
      console.log(this.activeName, "--");
    },
    // 获取所有课程
    getAllBook() {
      getBook(this.courseId).then((res) => {
        console.log(res, "3333");
        this.bookList = res.result.items;
        this.bookId = res.result.items[0].id;
        this.getBookCategory();
      });
    },
    // 教材章节
    getBookCategory() {
      getBookCate(this.bookId).then((res) => {
        this.cateList = res.result;
        console.log(this.cateList, "444444");
        const treeData = this.buildTree(this.cateList);
        // console.log(JSON.stringify(treeData, null, 2))
        this.cateTreeList = treeData;
        setTimeout(() => {
          this.$refs.treeRef.setCurrentKey(7635);
          this.currentNodeKey = 7635;
        }, 10);
        this.getSubject();
      });
    },
    // 题型
    handleGetQuestionType() {
      getQuestion(this.courseId).then((res) => {
        console.log(res.result, "66666666");
        this.questionTypeAll = res.result;
        this.questionTypeList = this.questionTypeAll.filter((item) => {
          return item.parent_id === "0";
        });
        this.curTypeId = this.questionTypeList[0].id;
        console.log(
          this.questionTypeAll,
          this.questionTypeList,
          "this.questionTypeList"
        );
      });
    },
    // 点击题型
    handleClickType(val) {
      this.curTypeId = val.id;
      this.questionTypeChild = this.questionTypeAll.filter((item) => {
        return item.parent_id === val.id;
      });
      if (this.questionTypeChild.length > 0) {
        this.curChildId = this.questionTypeChild[0].id;
      } else {
        this.curChildId = "";
      }
      console.log(this.curChildId, this.questionTypeChild, "=======");
    },
    // 点击题型子级
    handleClickTypeChild(val) {
      this.curChildId = val.id;
    },
    handleNodeClick(node) {
      console.log(node, "node");
      if (node.parent_id === 0 || node.children.length > 0) {
        this.$nextTick(() => {
          this.$refs.treeRef.setCurrentKey(this.currentNodeKey);
        });
        return;
      }
      this.currentNodeKey = node.id;
    },
    handleShowAnswer(item) {
      this.$set(item, "showAnswer", !item.showAnswer);
      console.log(item, "answer");
    },
    getSubject() {
      const params = {
        catalogIds: [this.currentNodeKey],
        year: "",
        type: "",
        difficultyLevelsArr: [],
      };
      getDetail(params).then((res) => {
        console.log(res.result, "66666666");
        this.detailList = res.result;
      });
    },
    buildTree(data) {
      const tree = [];
      const lookup = {};

      // 初始化一个查找表，键是节点的ID，值是节点对象
      data.forEach((item) => {
        lookup[item.id] = { ...item, children: [] };
      });

      // 构建树形结构
      data.forEach((item) => {
        if (item.parent_id === 0) {
          // 如果是顶级节点，则添加到树的根节点列表中
          tree.push(lookup[item.id]);
        } else {
          // 否则，找到其父节点，并将其添加到父节点的children列表中
          if (lookup[item.parent_id]) {
            lookup[item.parent_id].children.push(lookup[item.id]);
          }
        }
      });
      return tree;
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  height: 100%;
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.main-content {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 90vh;
  padding: 20px;
}
.book {
  margin-bottom: 20px;
}
.cate-tree {
  height: 600px;
  overflow-y: scroll;
}
.right-content {
  height: 710px;
  overflow-y: scroll;
}
.question-wrap {
  display: flex;
  .label {
    width: 150px;
  }
  .question-container {
    display: flex;
    flex-direction: column;
  }
  .question-type {
    display: flex;
    // justify-content: space-between;
    // 换行
    flex-wrap: wrap;
    // 鼠标cursor

    .active {
      color: blue;
    }
    div {
      margin-right: 10px;
      cursor: pointer;
      margin-bottom: 10px;
    }
    margin-bottom: 15px;
  }
  .question-child {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .active {
      color: blue;
    }
    div {
      margin-right: 5px;
      cursor: pointer;
      margin-bottom: 10px;
    }
  }
}
.main-detail {
  .detail-show {
    padding: 5px 0px;
    margin-bottom: 10px;
    cursor: pointer;
    .detail-sub {
      border-bottom: 1px dashed #ccc;
    }
    .detail-item {
      background-color: #f0e9e9;
      display: flex;
      margin-top: 15px;
      margin-bottom: 15px;
      .tip {
        width: 100px;
        color: red;
      }
    }
  }
}
</style>
