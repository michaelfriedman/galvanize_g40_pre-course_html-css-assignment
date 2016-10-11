$(document).ready(() => {
  $('.giffy').hide()
  $('.hideMe').hide()
  $('.clickMe').click(() => {
    $('.giffy').fadeIn('slow')
    $('.clickMe').hide()
    $('.hideMe').show()
  })
  $('.hideMe').click(() => {
    $('.giffy').hide()
    $('.hideMe').hide()
    $('.clickMe').show()
  })
})
