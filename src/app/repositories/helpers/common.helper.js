module.exports = {
  getNonNullFilters(filtersObj){
    let filters = {}

    Object.keys(filtersObj).map(key => {
      if(filtersObj[key]){
        filters[key] = filtersObj[key]
      }
    })

    return filters
  }
}
