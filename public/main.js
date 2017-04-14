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
    imageURL: profileFormData.get('imageURL')
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
