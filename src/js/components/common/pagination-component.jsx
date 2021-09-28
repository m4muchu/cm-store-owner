import React from 'react'
import { Pagination } from 'react-bootstrap'

export const PaginationComponent = props => {
  const onPageChange = item => {
    props.onChange(item)
  }

  let page_array = []
  const { page } = props
  let currentPage = 1
  let startPage = 1
  let endPage = 10
  let totalPages = 0
  if (page) {
    totalPages = Math.ceil(page.count / page.limit)
    startPage = currentPage - 4 > 1 ? currentPage - 4 : startPage
    endPage = startPage + 9 > totalPages ? totalPages : startPage + 9
    for (var i = startPage; i <= endPage; i++) {
      page_array.push(i)
    }
    currentPage = page.currentPage
  }

  return (
    <React.Fragment>
      {page.count > page.limit && (
        <div className="cm-admin-card--footer cm-admin-card--footer--pagination">
          <div className="cm-admin-pagination pr-3 pt-3">
            <Pagination aria-label="Page navigation example">
              {currentPage !== 1 && (
                <Pagination.Item onClick={() => onPageChange(Number(currentPage) - 1)}>
                  {/* <Pagination.Link onClick={() => onPageChange(Number(currentPage) - 1)}>
                    Previous
                  </Pagination.Link> */}
                  Previous
                </Pagination.Item>
              )}
              {page_array.map((item, index) => (
                <Pagination.Item
                  key={index}
                  active={item === currentPage}
                  onClick={() => onPageChange(item)}
                >
                  {/* <Pagination.Link onClick={() => onPageChange(item)}>{item}</Pagination.Link> */}
                  {item}
                </Pagination.Item>
              ))}
              {page && currentPage !== page.last_page && (
                <Pagination.Item onClick={() => onPageChange(Number(currentPage) + 1)}>
                  {/* <Pagination.Link onClick={() => onPageChange(Number(currentPage) + 1)}>
                    Next
                  </Pagination.Link> */}
                  Next
                </Pagination.Item>
              )}
            </Pagination>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}
