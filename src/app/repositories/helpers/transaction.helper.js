const moment = require("moment")

function getTheLastFourCardNumbers(card_number) {
  return card_number.substr(-4)
}

function getThelastDayOfTheMonth(card_expiration_date){
  return moment(card_expiration_date).endOf('month').format('YYYY-MM-DD')
}

module.exports = { getTheLastFourCardNumbers, getThelastDayOfTheMonth }
