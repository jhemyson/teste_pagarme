const paginate_custom_labels = {
  totalDocs: "itemCount",
  docs: "itemsList",
  limit: "limit",
  page: "currentPage",
  nextPage: "next",
  prevPage: "prev",
  totalPages: "pageCount",
  pagingCounter: "pagingCount"
};

function mongoosePaginationOptions(request) {
  return {
    page: request.query.page || 1,
    sort: { createdAt: -1 },
    limit: parseInt(request.query.limit) || 50,
    customLabels: paginate_custom_labels
  }
}

module.exports = { mongoosePaginationOptions };
