// Global Variables
const $viewList = ["#friend-list", "#friend-detail", "#friend-upload"]
const $friendList = document.querySelector('#friend-list')
const $friendDetail = document.querySelector('#friend-detail')
const $friendUpload = document.querySelector('#friend-upload')
const $profileForm = document.querySelector('#profile-form')
const $uploadButton = document.querySelector('#upload-button')
const $myFriends = document.querySelector('#my-friends')

// fetch profiles
function fetchProfiles() {
  var fetchPromise = fetch('/profiles')
  var profilePromise = fetchPromise.then(res => {
    return res.json()
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

//
// <div class="card">
//   <div class="image">
//     <img src="/images/avatar2/large/matthew.png">
//   </div>
//   <div class="content">
//     <div class="header">Matt Giampietro</div>
//     <div class="meta">
//       <a>Friends</a>
//     </div>
//     <div class="description">
//       Matthew is an interior designer living in New York.
//     </div>
//   </div>
//   <div class="extra content">
//     <span class="right floated">
//       Joined in 2013
//     </span>
//     <span>
//       <i class="user icon"></i>
//       75 Friends
//     </span>
//   </div>
// </div>

// render profiles
function renderList(profile) {
  var $profile = document.createElement('div')
  var $
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
  //
  // for (var field of profileFormData.entries()) {
  //   console.log(field[0], field[1])
  // }

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

$myFriends.addEventListener('click', event => {
  changeView($viewList, '#friend-list')
  fetchProfiles()
})

$('#left-menu').first()
  .sidebar('setting', {transition: 'push'})
  .sidebar('attach events', '.mobile-button')
;
//
// $('.ui.form')
// .form({
//   on: 'blur',
//   fields: {
//     first_name: {
//       identifier  : 'empty',
//       rules: [
//         {
//           type   : 'empty',
//           prompt : 'Please enter a value'
//         }
//       ]
//     },
//     last_name: {
//       identifier  : 'empty',
//       rules: [
//         {
//           type   : 'empty',
//           prompt : 'Please enter a value'
//         }
//       ]
//     },
//     gender: {
//       identifier  : 'dropdown',
//       rules: [
//         {
//           type   : 'empty',
//           prompt : 'Please select a dropdown value'
//         }
//       ]
//     },
//     age: {
//       identifier  : 'dropdown',
//       rules: [
//         {
//           type   : 'empty',
//           prompt : 'Please select a dropdown value'
//         }
//       ]
//     },
//     ethnicity: {
//       identifier  : 'dropdown',
//       rules: [
//         {
//           type   : 'empty',
//           prompt : 'Please select a dropdown value'
//         }
//       ]
//     },
//     seeking: {
//       identifier  : 'dropdown',
//       rules: [
//         {
//           type   : 'empty',
//           prompt : 'Please select a dropdown value'
//         }
//       ]
//     },
//     occupation: {
//       identifier  : 'empty',
//       rules: [
//         {
//           type   : 'empty',
//           prompt : 'Please enter a value'
//         }
//       ]
//     },
//     checkbox: {
//       identifier  : 'checkbox',
//       rules: [
//         {
//           type   : 'checked',
//           prompt : 'Please check the checkbox'
//         }
//       ]
//     }
//   }
// })
