// Global Variables
const $viewList = ["#friend-list", "#friend-detail", "#friend-upload"]
const $friendList = document.querySelector('#friend-list')
const $friendDetail = document.querySelector('#friend-detail')
const $friendUpload = document.querySelector('#friend-upload')
const $profileForm = document.querySelector('#profile-form')
const $uploadButton = document.querySelector('#upload-button')
const $myFriends = document.querySelector('#my-friends')
const $profileUpload = document.querySelector('#profile-upload')

// fetch profiles
function fetchProfiles() {
  var fetchPromise = fetch('/profiles')
  var profilePromise = fetchPromise.then(res => {
    return res.json()
  })
  .catch(err => {
  console.log(err)
  })
  return profilePromise
}

// Change Views
function changeView(viewList, activeView) {
  viewList.forEach(function (view) {
    var $view = document.querySelector(view)
    $view.classList.add('hidden')
  })
  var $activeView = document.querySelector(activeView)
  $activeView.classList.remove('hidden')
}

// render profiles
function renderList(profile) {
  var $profile = document.createElement('div')
  var $imageHolder = document.createElement('div')
  var $imageURL = document.createElement('img')
  var $content = document.createElement('div')
  var $name = document.createElement('div')
  var $age = document.createElement('div')
  var $snippet = document.createElement('div')

  $profile.appendChild($imageHolder)
  $imageHolder.appendChild($imageURL)
  $profile.appendChild($content)
  $content.appendChild($name)
  $content.appendChild($age)
  $content.appendChild($snippet)

  $profile.classList.add('card')
  $profile.setAttribute('data-profile-id', profile.id)

  $imageHolder.classList.add('image')
  $imageURL.setAttribute('src', profile.image_url)

  $content.classList.add('content')
  $name.classList.add('header')
  $age.classList.add('meta')
  $snippet.classList.add('description')

  $age.textContent = profile.age
  $name.textContent = profile.first_name + ' ' + profile.last_name
  $snippet.textContent = profile.first_name + ' is a' + ' ' + profile.occupation + ' living in' + ' ' + profile.locations + '.'

  return $profile
}

$uploadButton.addEventListener('click', () => {
  $('.ui.modal')
    .modal('show')
  ;

  $('.ui.dropdown')
    .dropdown()
  ;
})

$profileUpload.addEventListener('click', (event) => {
  console.log('upload')
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
    image_url: profileFormData.get('image_url'),
    locations: profileFormData.get('locations'),
    about_me: profileFormData.get('about_me'),
    user_id: '1'
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

$myFriends.addEventListener('click', event => {
  changeView($viewList, '#friend-list')
  fetchProfiles()
    .then(function (results) {
      console.log(results.json(results))
    })
})

$('#left-menu').first()
  .sidebar('setting', {transition: 'push'})
  .sidebar('attach events', '.mobile-button')
;
