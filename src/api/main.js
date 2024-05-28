import request from '@/utils/request'

// 获取课程类型
export function getAllLesson() {
  return request({
    url: '/new/print/e/t/q/x/courses/all',
    method: 'get'
  })
}

// 获取教材
export function getBook(courseId) {
  return request({
    url: `/new/print/e/t/q/x/book1?courseId=${courseId}&pageIndex=1&pageSize=200`,
    method: 'get'
  })
}

// 获取教材章节
export function getBookCate(bookId) {
  return request({
    url: `/new/print/e/t/q/x/book2/catalog?bookId=${bookId}`,
    method: 'get'
  })
}

// 获取题目类型
export function getQuestion(courseId) {
  return request({
    url: `/new/print/e/t/q/x/question/types?courseId=${courseId}`,
    method: 'get'
  })
}

// 获取知识点树
export function getKnowledge(courseId) {
  return request({
    url: `/new/print/e/t/q/x/course/knowledge/points?courseId=${courseId}`,
    method: 'get'
  })
}

// 获取题目详情
export function getDetail(data) {
  return request({
    url: '/new/print/e/t/q/x/question/query',
    method: 'post',
    data
  })
}
