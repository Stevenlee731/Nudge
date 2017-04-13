$('#left-menu').first()
  .sidebar('setting', {transition: 'push'})
  .sidebar('attach events', '.mobile-button')
;

// Global Variables
const $viewList = ['#friend-list', '#friend-detail', '#friend-upload']
const $friendList = document.querySelector('#friend-list')
const $friendDetail = document.querySelector('#friend-detail')
const $friendUpload = document.querySelector('#friend-upload')
const $profileForm = document.querySelector('#profile-form')
const $uploadButton = document.querySelector('#upload-button')
const $submitProfile = document.querySelector('#submit-profile')

// fetch



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


$uploadButton.addEventListener('click', () => {
  $('.ui.modal')
    .modal('show')
  ;

  $('.ui.dropdown')
    .dropdown()
  ;
})

$profileForm.addEventListener('submit', () => {
  console.log('submit')

  var profileFormData = new FormData($profileForm)

  for (var field of profileFormData.entries()) {
    console.log(field[0], field[1])
  }
  // fetch('/profiles', {
  //   method: 'post',
  //   body: formData
  // })
})


$('.ui.form')
  .form({
    fields: {
      first_name     : 'empty',
      last_name     : 'empty',
      gender   : 'empty',
      age   : 'empty',
      ethnicity   : 'empty',
      seeking   : 'empty',
      occupation   : 'empty',
      terms    : 'checked'
    }
  })
;
