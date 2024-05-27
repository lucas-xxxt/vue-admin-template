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
      <el-row>
        <el-col :span="6">
          <div>
            <el-select v-model="bookId" style="width: 90%" placeholder="请选择">
              <el-option
                v-for="item in bookList"
                :key="item.value"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </div>
          <data class="cate-tree">
            <el-tree
              :data="cateTreeList"
              :props="defaultProps"
              default-expand-all
              node-key="id"
              @node-click="handleNodeClick"
            />
          </data>
        </el-col>
        <el-col :span="18"> 123</el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { getList } from '@/api/table'
import { getAllLesson, getBook, getBookCate } from '@/api/main'
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      courseId: '',
      courseList: [],
      bookList: [],
      activeName: 'first',
      bookId: '',
      cateList: [],
      cateTreeList: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  },
  computed: {
    ...mapGetters(['name'])
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      // getList().then(response => {
      //   console.log(response, '----')
      // })
      getAllLesson().then((res) => {
        console.log(res, '22222')
        this.courseList = res.results
        this.courseId = res.results[0].id
        this.getAllBook()
      })
    },
    handleClick() {
      console.log(this.activeName, '--')
    },
    getAllBook() {
      getBook(this.courseId).then((res) => {
        console.log(res, '3333')
        this.bookList = res.result.items
        this.bookId = res.result.items[0].id
        this.getBookCategory()
      })
    },
    getBookCategory() {
      getBookCate(this.bookId).then((res) => {
        this.cateList = res.result
        console.log(this.cateList, '444444')
        const treeData = this.buildTree(this.cateList)
        console.log(JSON.stringify(treeData, null, 2))
        this.cateTreeList = treeData
      })
    },
    handleNodeClick(val) {
      console.log(val, '---')
    },
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
  height: 100%;
  padding: 20px;
}
.cate-tree {
    overflow-y: scroll;
  }
</style>
