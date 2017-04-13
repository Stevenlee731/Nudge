$('#left-menu').first()
  .sidebar('setting', {transition: 'push'})
  .sidebar('attach events', '.mobile-button')
;

// Global Variables
const $viewList = ['#friend-list', '#friend-detail', '#friend-upload']
const $friendList = document.querySelector('#friend-list')
const $friendDetail = document.querySelector('#friend-detail')
const $friendUpload = document.querySelector('#friend-upload')

// Change Views
function changeView(viewList, activeView) {
  viewList.forEach(function (view) {
    var $view = document.querySelector(view)
    $view.classList.add('hidden')
  })
  viewList.find(view => {
    return activeView
  })
  var $activeView = document.querySelector(activeView)
  $activeView.classList.remove('hidden')
}
