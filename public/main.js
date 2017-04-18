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

$profileForm.addEventListener('submit', (event) => {
  event.preventDefault()

  var profileFormData = new FormData($profileForm)

  var profile = {
    first_name: profileFormData.get('first_name'),
    last_name: profileFormData.get('last_name'),
    gender: profileFormData.get('gender'),
    age: profileFormData.get('age'),
    seeking: profileFormData.get('seeking'),
    ethnicity: profileFormData.get('ethnicity'),
    occupation: profileFormData.get('occupation'),
    image_url: profileFormData.get('image_url')
  }

  console.log(JSON.stringify(profile))

  fetch('/profiles', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(profile)
  })
})
