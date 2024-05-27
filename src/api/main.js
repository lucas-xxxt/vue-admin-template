import request from '@/utils/request'

// 获取课程类型
export function getAllLesson(data) {
  return request({
    url: '/new/print/e/t/q/x/courses/all',
    method: 'get',
    data
  })
}

// 获取教材
export function getBook(courseId) {
  return request({
    url: `/new/print/e/t/q/x/book1?courseId=${courseId}&pageIndex=1&pageSize=200`,
    method: 'get'
  })
}

export function getBookCate(bookId) {
  return request({
    url: `/new/print/e/t/q/x/book2/catalog?bookId=${bookId}`,
    method: 'get'
  })
}
