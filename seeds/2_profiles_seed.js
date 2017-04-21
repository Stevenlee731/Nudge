exports.seed = function(knex) {
  return knex.raw('truncate table profiles restart identity cascade')
    .then(function () {
      return knex('profiles').insert([
        {
          id: 11,
          first_name: 'Jeremy',
          last_name: 'Kaplan',
          gender: 'Male',
          age: '28',
          ethnicity: 'caucasian',
          occupation: 'Engineer',
          seeking: 'women',
          image_url: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/1/005/052/399/316f27e.jpg',
          user_id: '1',
          locations: 'Los Angeles',
          about_me: 'Friend of animals everywhere. Internet evangelist. Alcohol geek. Coffee fanatic. Total introvert.'
        },
        {
          id: 12,
          first_name: 'Angelina',
          last_name: 'Olson',
          gender: 'Female',
          age: '26',
          ethnicity: 'caucasian',
          occupation: 'Social Worker',
          seeking: 'men',
          image_url: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAIDAAAAJGQwZjE0Y2E3LTQzZTYtNGM0NS1iNDQ0LWEzMGFjZmJmM2E2OA.jpg',
          user_id: '1',
          locations: 'Orange County',
          about_me: 'Evil introvert. Writer. Coffeeaholic. Music expert.'
        },
        {
          id: 13,
          first_name: 'Stacy',
          last_name: 'Rodriguez',
          gender: 'Female',
          age: '27',
          ethnicity: 'hispanic',
          occupation: 'Instagram Model',
          seeking: 'men',
          image_url: 'https://pbs.twimg.com/profile_images/711301479295008768/eUDRAgyB_400x400.jpg',
          user_id: '2',
          locations: 'Los Angeles',
          about_me: 'Passionate reader. Certified organizer. Beer guru. General thinker. Zombie practitioner.'
        },
        {
          id: 14,
          first_name: 'Caleb',
          last_name: 'Park',
          gender: 'Male',
          age: '27',
          ethnicity: 'asian/pacific islander',
          occupation: 'Chemist',
          seeking: 'women',
          image_url: 'https://pbs.twimg.com/profile_images/1533100116/196560_10150459556220226_647605225_17928576_2291300_n.jpg',
          user_id: '3',
          locations: 'Orange County',
          about_me: 'Problem solver. Twitter aficionado. Communicator.'
        },
        {
          id: 15,
          first_name: 'Sidra',
          last_name: 'Yaseem',
          gender: 'Female',
          age: '27',
          ethnicity: 'indian',
          occupation: 'Nutritionist',
          seeking: 'men',
          image_url: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAWmAAAAJDg0YzE2Y2ZlLWI2NDAtNDdkNC04ZWU0LTYzZWM1YWRkOTQ0YQ.jpg',
          user_id: '2',
          locations: 'Los Angeles',
          about_me: 'Passionate internet buff. Tv fanatic.'
        },
        {
          id: 16,
          first_name: 'Joshua',
          last_name: 'Cooks',
          gender: 'Male',
          age: '36',
          ethnicity: 'black',
          occupation: 'Photographer',
          seeking: 'women',
          image_url: 'http://s.huffpost.com/contributors/joshua-adams/headshot.jpg',
          user_id: '1',
          locations: 'Orange County',
          about_me: 'Avid social media nerd. Lifelong alcohol buff. Total tv ninja. Extreme twitter maven. Foodaholic.'
        },
        {
          id: 17,
          first_name: 'Jessica',
          last_name: 'Song',
          gender: 'Female',
          age: '23',
          ethnicity: 'asian/pacific islander',
          occupation: 'Artist',
          seeking: 'women',
          image_url: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAQFAAAAJDYwNzU3MTFlLTNjNGItNDVlNS04MjIwLTJlNGUwNzBhM2M5Ng.jpg',
          user_id: '1',
          locations: 'Los Angeles',
          about_me: 'Friendly coffee advocate. Freelance travel guru.'
        },
        {
          id: 24,
          first_name: 'James',
          last_name: 'Henderson',
          gender: 'Male',
          age: '32',
          ethnicity: 'caucasian',
          occupation: 'Dentist',
          seeking: 'women',
          image_url: 'https://cascadiagrains.files.wordpress.com/2015/12/mike-lufkin-photo.jpg',
          user_id: '3',
          locations: 'Orange County',
          about_me: 'Entrepreneur. Communicator. Music guru. Professional zombie practitioner. Food fan.'
        },
        {
          id: 25,
          first_name: 'Monica',
          last_name: 'James',
          gender: 'Female',
          age: '30',
          ethnicity: 'caucasian',
          occupation: 'Pediatrician',
          seeking: 'men',
          image_url: 'https://s-media-cache-ak0.pinimg.com/originals/d0/03/a9/d003a994b07a8e80f09fb6523c1ad8ae.jpg',
          user_id: '3',
          locations: 'Orange County',
          about_me: 'Professional tv maven. Extreme zombie geek. Proud writer. Student.'}
      ]);
    });
};
