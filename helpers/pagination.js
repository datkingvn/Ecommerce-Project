module.exports = (objectPagination, query, countProducts) => {
    // Vị trí bắt đầu lấy = (Trang hiện tại - 1) * số lượng phần từ mỗi trang
    if (query.page) {
        objectPagination.currentPage = parseInt(query.page)
    }

    objectPagination.skip = (objectPagination.currentPage - 1) * objectPagination.limitItems

    objectPagination.totalPages = Math.ceil(countProducts / objectPagination.limitItems)

    return objectPagination
}