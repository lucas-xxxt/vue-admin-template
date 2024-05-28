<template>
  <div class="dashboard-container">
    <div class="main-content">
      <el-row :gutter="20">
        <el-col :span="10">
          <el-select
            v-model="courseId"
            style="width: 70%"
            placeholder="请选择"
            @change="handleChangeCourse"
          >
            <el-option
              v-for="item in courseList"
              :key="item.value"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-col>
        <el-col :span="12">
          <el-tabs
            v-model="activeName"
            @tab-click="handleClickTab"
            @tab-change="handleChangeTab"
          >
            <el-tab-pane label="章节选题" name="chapter" />
            <el-tab-pane label="知识点选题" name="knowledge" />
          </el-tabs>
        </el-col>
      </el-row>
      <div style="border-bottom: 1px solid #ccc; margin-bottom: 20px" />
      <el-row v-loading="loading" :gutter="20">
        <el-col v-if="activeName === 'chapter'" :span="8" style="height: 100%">
          <el-card>
            <div class="book">
              <el-select
                v-model="bookId"
                style="width: 90%"
                placeholder="请选择"
                @change="handleChangeBook"
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
                check-strictly
                show-checkbox
                highlight-current
                default-expand-all
                node-key="id"
                @check="handleCheckNode"
              />
            </div>
          </el-card>
        </el-col>
        <el-col v-if="activeName === 'knowledge'" :span="8">
          <el-card>
            <div class="knowledge-tree">
              <el-tree
                ref="treeRef2"
                :data="knowledgeTreeList"
                :props="defaultProps"
                check-strictly
                show-checkbox
                highlight-current
                default-expand-all
                node-key="id"
                @check="handleCheckKnowledgeNode"
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
            <div class="difficult">
              <span style="margin-right: 30px">难度：</span>
              <span
                :class="curDifficultId.indexOf(1) >= 0 ? 'active' : ''"
                style="margin-right: 10px; cursor: pointer"
                @click="handleClickDiffItem({ id: 1 })"
              >全部</span>
              <span
                v-for="(item, index) in difficultyLevels"
                :key="index"
                :class="curDifficultId.includes(item.id) ? 'active' : ''"
                class="item"
                @click="handleClickDiffItem(item)"
              >
                {{ item.name }}
              </span>
            </div>
            <div class="year">
              <span>年份：</span>
              <el-select
                v-model="year"
                size="mini"
                clearable
                style="width: 20%"
                placeholder="请选择"
                @change="handleChangeYear"
              >
                <el-option
                  v-for="item in yearList"
                  :key="item.value"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
              <el-button class="opt-btn" size="mini" type="primary" @click="handleNewList">再来一组</el-button>
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
import {
  getAllLesson,
  getBook,
  getBookCate,
  getDetail,
  getQuestion,
  getKnowledge
} from '@/api/main'
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      loading: false,
      courseId: '', // 课程
      courseList: [],
      bookList: [],
      activeName: 'chapter',
      bookId: '',
      cateList: [], // 教材章节
      cateTreeList: [], // 教材章节树
      knowledgeList: [], // 知识点
      knowledgeTreeList: [], // 知识点树
      defaultProps: {
        children: 'children',
        label: 'name',
        disabled: function(data, node) {
          // 带子级的节点不能选中
          if (data.children && data.children.length > 0) {
            return true
          } else {
            return false
          }
        }
      },
      currentNodeKey: '',
      currentKonwledgeNodeKey: '',
      curTypeId: '',
      curChildId: '',
      questionTypeAll: [],
      questionTypeList: [],
      questionTypeChild: [],
      detailList: [],
      year: '',
      yearList: [
        {
          id: 2019,
          name: '2019'
        },
        {
          id: 2020,
          name: '2020'
        },
        {
          id: 2021,
          name: '2021'
        },
        {
          id: 2022,
          name: '2022'
        },
        {
          id: 2023,
          name: '2023'
        },
        {
          id: 2024,
          name: '2024'
        }
      ],
      curDifficultId: [1],
      isMultiple: true,
      difficultyLevels: [
        { id: 17, name: '容易' },
        { id: 18, name: '较易' },
        { id: 19, name: '一般' },
        { id: 20, name: '较难' },
        { id: 21, name: '困难' }
      ]
    }
  },
  computed: {
    ...mapGetters(['name'])
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      getAllLesson().then((res) => {
        this.courseList = res.results
        this.courseId = res.results[0].id
        this.getAllChapterData()
      })
    },
    // 获取章节选题初始数据
    getAllChapterData() {
      this.loading = true
      this.getAllBook()
      this.handleClickDiffItem({ id: 1 })
      this.handleGetQuestionType()
    },
    // 获取知识点选题初始数据
    getAllKnowledgeData() {
      this.loading = true
      this.handleClickDiffItem({ id: 1 }, 1)
      this.handleGetQuestionType()
      this.getKnowledgeTree()
    },
    // 修改课程
    handleChangeCourse() {
      if (this.activeName === 'chapter') {
        this.getAllChapterData()
      } else {
        this.getAllKnowledgeData()
      }
    },
    handleClickTab() {
      console.log(this.activeName, '--')
      if (this.activeName === 'chapter') {
        this.getAllChapterData()
      } else {
        this.getAllKnowledgeData()
      }
    },
    handleChangeTab(val) {
      console.log(val, '---')
    },
    // 获取所有课程
    getAllBook() {
      getBook(this.courseId).then((res) => {
        console.log(res, '3333')
        this.bookList = res.result.items
        this.bookId = res.result.items[0].id
        this.getBookCategory()
      })
    },
    getKnowledgeTree() {
      getKnowledge(this.courseId)
        .then((res) => {
          console.log(res, '----')
          this.knowledgeList = res.result
          const treeData = this.buildTree(this.knowledgeList)
          this.knowledgeTreeList = treeData
          const FTree = this.findFirstFinalNode(treeData)
          setTimeout(() => {
            this.currentKonwledgeNodeKey = [FTree.id]
            this.$refs.treeRef2.setCheckedNodes([FTree])
          }, 10)
          this.getSubject()
        })
        .finally(() => {
          this.loading = false
        })
    },
    // 修改教材
    handleChangeBook() {
      this.getBookCategory()
    },
    // 初始化教材章节
    // 教材章节
    getBookCategory() {
      getBookCate(this.bookId)
        .then((res) => {
          this.cateList = res.result
          console.log(this.cateList, '444444')
          const treeData = this.buildTree(this.cateList)
          // console.log(JSON.stringify(treeData, null, 2))
          this.cateTreeList = treeData
          const FTree = this.findFirstFinalNode(treeData)
          setTimeout(() => {
            this.currentNodeKey = [FTree.id]
            this.$refs.treeRef.setCheckedNodes([FTree])
          }, 10)
          console.log(FTree, this.cateTreeList, 'this.cateTreeList')
          this.getSubject()
        })
        .finally(() => {
          this.loading = false
        })
    },
    // 题型
    handleGetQuestionType() {
      this.questionTypeChild = []
      this.curChildId = ''
      getQuestion(this.courseId).then((res) => {
        // console.log(res.result, '66666666')
        this.questionTypeAll = res.result
        this.questionTypeList = this.questionTypeAll.filter((item) => {
          return item.parent_id === '0'
        })
        this.curTypeId = this.questionTypeList[0].id
      })
    },
    // 点击题型
    handleClickType(val) {
      this.curTypeId = val.id
      this.questionTypeChild = this.questionTypeAll.filter((item) => {
        return item.parent_id === val.id
      })
      if (this.questionTypeChild.length > 0) {
        this.curChildId = this.questionTypeChild[0].id
      } else {
        this.curChildId = ''
      }
      console.log(this.curChildId, this.questionTypeChild, '=======')
      this.getSubject()
    },
    // 点击题型子级
    handleClickTypeChild(val) {
      this.curChildId = val.id
      this.getSubject()
    },
    // 年份
    handleChangeYear() {
      this.getSubject()
    },
    // 难度
    handleClickDiffItem(val, val2) {
      console.log(this.curDifficultId)
      if (val.id === 1) {
        this.curDifficultId = [1]
        this.isMultiple = !this.isMultiple
      } else {
        const index1 = this.curDifficultId.indexOf(1)
        if (index1 !== -1) {
          this.curDifficultId.splice(index1, 1)
        }
        const index = this.curDifficultId.indexOf(val.id)
        if (index !== -1) {
          this.curDifficultId.splice(index, 1)
        } else {
          this.curDifficultId.push(val.id)
        }
      }

      if (this.curDifficultId.length === 0) {
        this.curDifficultId = [1]
      }
      if (!val2) {
        this.getSubject()
      }
    },
    handleCheckNode(val1, val2) {
      console.log(val1, val2)
      const maxAllowedChecks = 10 // 最大允许勾选的节点数量
      this.currentNodeKey = val2.checkedKeys
      // 检查已选中的节点数量是否超过限制
      if (this.currentNodeKey.length > maxAllowedChecks) {
        const limitedCheckedKeys = this.currentNodeKey.slice(
          0,
          maxAllowedChecks
        )
        this.currentNodeKey = limitedCheckedKeys
        this.$refs.treeRef.setCheckedKeys(limitedCheckedKeys)
        this.$message.warning(`最多只能勾选 ${maxAllowedChecks} 个节点`)
      } else {
        this.currentNodeKey = val2.checkedKeys
        this.getSubject()
      }
    },
    handleCheckKnowledgeNode(val1, val2) {
      console.log(val1, val2)
      const maxAllowedChecks = 10 // 最大允许勾选的节点数量
      this.currentKonwledgeNodeKey = val2.checkedKeys
      // 检查已选中的节点数量是否超过限制
      if (this.currentKonwledgeNodeKey.length > maxAllowedChecks) {
        const limitedCheckedKeys = this.currentKonwledgeNodeKey.slice(
          0,
          maxAllowedChecks
        )
        this.currentKonwledgeNodeKey = limitedCheckedKeys
        this.$refs.treeRef2.setCheckedKeys(limitedCheckedKeys)
        this.$message.warning(`最多只能勾选 ${maxAllowedChecks} 个节点`)
      } else {
        this.currentKonwledgeNodeKey = val2.checkedKeys
        this.getSubject()
      }
    },
    handleShowAnswer(item) {
      this.$set(item, 'showAnswer', !item.showAnswer)
      console.log(item, 'answer')
    },
    handleNewList() {
      this.getSubject()
    },
    getSubject() {
      let arr = []
      if (this.curDifficultId.indexOf(1) !== -1) {
        arr = this.difficultyLevels.map((level) => level.id)
      } else {
        arr = this.curDifficultId
      }
      const params = {
        year: this.year,
        type: this.curChildId ? this.curChildId : this.curTypeId,
        difficultyLevelsArr: arr
      }
      if (this.activeName === 'chapter') {
        params.catalogIds = this.currentNodeKey
      } else {
        params.knowledgeIds = this.currentKonwledgeNodeKey
      }
      getDetail(params).then((res) => {
        this.detailList = res.result
      })
    },
    // 找出第一个最终子节点
    findFirstFinalNode(nodes) {
      for (const node of nodes) {
        if (!node.children || node.children.length === 0) {
          return node
        } else {
          const firstFinalChild = this.findFirstFinalNode(node.children)
          if (firstFinalChild) {
            return firstFinalChild
          }
        }
      }
      return null
    },
    // 树结构化
    buildTree(data) {
      const tree = []
      const lookup = {}

      // 初始化一个查找表，键是节点的ID，值是节点对象
      data.forEach((item) => {
        lookup[item.id] = { ...item, children: [] }
      })

      // 构建树形结构
      data.forEach((item) => {
        if (item.parent_id === 0) {
          // 如果是顶级节点，则添加到树的根节点列表中
          tree.push(lookup[item.id])
        } else {
          // 否则，找到其父节点，并将其添加到父节点的children列表中
          if (lookup[item.parent_id]) {
            lookup[item.parent_id].children.push(lookup[item.id])
          }
        }
      })
      return tree
    }
  }
}
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
  height: 608px;
  overflow-y: scroll;
}
.knowledge-tree {
  height: 668px;
  overflow-y: scroll;
}
.right-content {
  height: 710px;
  overflow-y: scroll;
}
.question-wrap {
  padding-bottom: 5px;
  border-bottom: 1px dashed #ccc;
  margin-bottom: 10px;
  font-size: 12px;
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
.difficult {
  font-size: 12px;
  padding: 10px 0px 20px 0px;
  margin-bottom: 10px;
  border-bottom: 1px dashed #ccc;
  .active {
    color: blue;
  }
  .opt {
    cursor: pointer;
    margin-left: 200px;
  }
  .item {
    cursor: pointer;
    margin-right: 10px;
  }
}
.year {
  font-size: 12px;
  .opt-btn {
    position: fixed;
    width: 100px;
    height: 40px;
    line-height: -20px;
    top: 300px;
    right: 20px;
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
