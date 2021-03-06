const $viewList = ["#friend-list", "#friend-upload", "#change-user"]
const $friendList = document.querySelector('#friend-list')
const $friendDetail = document.querySelector('#friend-detail')
const $friendUpload = document.querySelector('#friend-upload')
const $profileForm = document.querySelector('#profile-form')
const $uploadButton = document.querySelector('#upload-button')
const $myFriends = document.querySelector('#my-friends')
const $myUpload = document.querySelector('#my-upload')
const $myUser = document.querySelector('#my-user')
const $profileUpload = document.querySelector('#profile-upload')
const $changeUser = document.querySelector('#user-form')
var $user = {}

function createRecs(user) {
  fetch('/recommendations/user/:user_id/profile/:profied_id')
     .then(response => response.json())
     .catch(err => console.log(err))
  .then(result => {
    console.log(result)
  })
}

function changeProfile(user) {
  var $profilePhoto = document.querySelector('#user-image')
  var $profileName = document.querySelector('#my-user')

  $profilePhoto.setAttribute('src', user.image_url)
  $profileName.textContent = user.username
}

function fetchJSON(url) {
 return fetch(url)
  .then(response => response.json())
  .catch(err => console.log(err))
}

function changeView(viewList, activeView) {
  viewList.forEach(function (view) {
    var $view = document.querySelector(view)
    $view.classList.add('invisible')
  })
  if ($friendList.hasChildNodes()) {
    $('#friend-list').empty()
  }
  $('.ui.details.modal.transition').empty()
  var $activeView = document.querySelector(activeView)
  $activeView.classList.remove('invisible')
}

function renderDetail(profile) {

  var $profile = document.createElement('div')
  $profile.classList.add('ui', 'detail', 'modal')

  var $closeIcon = document.createElement('i')
  $closeIcon.classList.add('close', 'icon')

  var $nameHeader = document.createElement('div')
  $nameHeader.classList.add('header')
  $nameHeader.textContent = profile.first_name + ' ' + profile.last_name

  var $imageContent = document.createElement('div')
  $imageContent.classList.add('image', 'content')

  var $imageUI = document.createElement('div')
  $imageUI.classList.add('ui', 'medium', 'image')

  var $imageURL = document.createElement('img')
  $imageURL.setAttribute('src', profile.image_url)
  $imageURL.classList.add('ui', 'centered', 'medium', 'image')

  var $description = document.createElement('div')
  $description.classList.add('description')

  var $bioHeader = document.createElement('h2')
  $bioHeader.classList.add('ui', 'header')
  $bioHeader.textContent = 'A little about ' + profile.first_name

  var $bioBody = document.createElement('p')
  $bioBody.textContent = profile.about_me

  var $labelsContainer = document.createElement('div')
  $labelsContainer.classList.add('ui', 'big', 'labels')

  var $occupation = document.createElement('div')
  $occupation.classList.add('ui', 'teal', 'image', 'label')
  $occupation.textContent = 'Occupation'
  var $occupationDetail = document.createElement('div')
  $occupationDetail.classList.add('detail')
  $occupationDetail.textContent = profile.occupation

  var $age = document.createElement('div')
  $age.classList.add('ui', 'teal', 'image', 'label')
  $age.textContent = 'Age'
  var $ageDetail = document.createElement('div')
  $ageDetail.classList.add('detail')
  $ageDetail.textContent = profile.age

  var $ethnicity = document.createElement('div')
  $ethnicity.classList.add('ui', 'teal', 'image', 'label')
  $ethnicity.textContent = 'Ethnicity'
  var $ethnicityDetail = document.createElement('div')
  $ethnicityDetail.classList.add('detail')
  $ethnicityDetail.textContent = profile.ethnicity

  var $location = document.createElement('div')
  $location.classList.add('ui', 'teal', 'image', 'label')
  $location.textContent = 'Location'
  var $locationDetail = document.createElement('div')
  $locationDetail.classList.add('detail')
  $locationDetail.textContent = profile.locations

  var $seeking = document.createElement('div')
  $seeking.classList.add('ui', 'teal', 'image', 'label')
  $seeking.textContent = 'Seeking'
  var $seekingDetail = document.createElement('div')
  $seekingDetail.classList.add('detail')
  $seekingDetail.textContent = profile.seeking

  var $recHeader = document.createElement('h4')
  $recHeader.textContent = 'Recommended by'

  var $actions = document.createElement('div')
  $actions.classList.add('actions')

  var $cancelButton = document.createElement('div')
  $cancelButton.classList.add('ui', 'black', 'deny', 'button')
  $cancelButton.textContent = 'Close'

  var $okButton = document.createElement('div')
  $okButton.classList.add('ui', 'positive', 'right', 'icon', 'button')
  $okButton.textContent = 'Recommend!'

  $profile.appendChild($closeIcon)
  $profile.appendChild($nameHeader)
  $profile.appendChild($imageContent)
  $profile.appendChild($actions)

  $imageContent.appendChild($imageUI)
  $imageUI.appendChild($imageURL)
  $imageContent.appendChild($description)

  $description.appendChild($bioHeader)
  $description.appendChild($bioBody)
  $description.appendChild($labelsContainer)
  $description.appendChild($recHeader)

  $labelsContainer.appendChild($occupation)
  $occupation.appendChild($occupationDetail)

  $labelsContainer.appendChild($age)
  $age.appendChild($ageDetail)

  $labelsContainer.appendChild($ethnicity)
  $ethnicity.appendChild($ethnicityDetail)

  $labelsContainer.appendChild($location)
  $location.appendChild($locationDetail)

  $labelsContainer.appendChild($seeking)
  $seeking.appendChild($seekingDetail)

  var $rec = document.createElement('div')
  $rec.classList.add('ui', 'image', 'label')

  var $recImage = document.createElement('img')
  $recImage.setAttribute('src', $user.image_url)
  var $recUser = document.createElement('span')

  $description.appendChild($rec)
  $rec.appendChild($recImage)
  $rec.appendChild($recUser)
  $recUser.textContent = $user.username

  $actions.appendChild($cancelButton)
  $actions.appendChild($okButton)

  return $profile
}

function renderList(profile) {
  var $vowel = function findVowel (occupation) {
      var firstLetter = profile.occupation[0]
      var vowels = ['a', 'e', 'i', 'o', 'u']
      if (vowels.includes(firstLetter.toLowerCase())) {
        return profile.first_name + ' is an' + ' ' + profile.occupation
      }
      else {
        return profile.first_name + ' is a' + ' ' + profile.occupation
      }
    }

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
  $imageHolder.setAttribute('data-profile-id', profile.id)
  $imageURL.setAttribute('src', profile.image_url)
  $imageURL.setAttribute('data-profile-id', profile.id)

  $content.classList.add('content')
  $content.setAttribute('data-profile-id', profile.id)
  $content.setAttribute('data-user-id', profile.user_id)

  $name.classList.add('header')
  $name.setAttribute('data-profile-id', profile.id)

  $age.classList.add('meta')
  $age.setAttribute('data-profile-id', profile.id)

  $snippet.classList.add('description')
  $snippet.setAttribute('data-profile-id', profile.id)

  $age.textContent = 'Age ' + profile.age
  $name.textContent = profile.first_name + ' ' + profile.last_name
  $snippet.textContent = $vowel(profile.occupation) + ' living in' + ' ' + profile.locations + '.'

  return $profile
}

document.addEventListener("DOMContentLoaded", event => {

$uploadButton.addEventListener('click', () => {
  $('.ui.modal')
    .modal('show')
  $('.ui.dropdown')
    .dropdown()
})

$profileUpload.addEventListener('click', (event) => {
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
    user_id: $user.id
  }
  fetch('/profiles', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(profile)
  })
})

$changeUser.addEventListener('submit', (event) => {
  event.preventDefault()
  var userFormData = new FormData($changeUser)
  var user = userFormData.get('username')
  fetchJSON('/users/' + user)
    .then(user => {
      changeProfile(user)
      $user = user
    })
    .catch(err => { console.log(err) })
    var $loginSuccess = document.querySelector('#login-success')
    $loginSuccess.classList.remove('hidden')
    setTimeout(function(){ $('#login-success').transition('fade')
    ; }, 1000);
  })

$myFriends.addEventListener('click', event => {
  changeView($viewList, "#friend-list")
  if ($friendList.hasChildNodes()) {
    $('#friend-list').empty()
  }
  fetchJSON('/profiles/users/' + $user.id)
    .then(profiles => { return profiles.map(renderList) })
    .then(results => {
      results.forEach($profiles => {
        $friendList.appendChild($profiles)
      })
    })
})

$myUpload.addEventListener('click', event => {
  changeView($viewList, "#friend-upload")
})

$myUser.addEventListener('click', event => {
  changeView($viewList, "#change-user")
})

document.addEventListener('click', event => {
  var profileID = event.target.getAttribute('data-profile-id')
  if (event.target.getAttribute('data-profile-id')) {
    fetchJSON('/profiles/' + profileID)
      .then(profile => { return renderDetail(profile) })
      .then($profile => {
        let $detailModal = document.querySelector('#detail-list')
        $detailModal.appendChild($profile)
        let $modals = document.querySelector('.dimmer')
        $('.ui.details.modal.transition').empty()
        $('.ui.detail.modal')
          .modal('show')
          .modal({
              onHidden: function(){
                $('.ui.detail.modal').remove()
              }
            })
      })
  }
})


$('.ui.dropdown.item')
  .dropdown()

$('.profile')
  .transition()

$('.user.ui.fluid.selection.dropdown')
  .dropdown()

$('.ui.sidebar')
  .sidebar('attach events', '.nudge.menu')
  .sidebar('attach events', '.nudge.item')

$(function(){
    $('.ui.user.dropdown')
      .dropdown()
})

$('.user.ui.fluid.selection.dropdown')
  .dropdown()

})
