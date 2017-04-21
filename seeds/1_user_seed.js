
exports.seed = function(knex) {
  return knex.raw('truncate table users restart identity cascade')
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'Stevenlee731', email: 'SteveCreated@gmail.com', image_url: 'http://i.imgur.com/kloVT7y.jpg'},
        {id: 2, username: 'PattiStanger137', email: 'MillionaireMatchmaker@hotmail.com', image_url: 'http://my.xfinity.com/blogs/tv/files/2011/08/patti-stanger.jpg'},
        {id: 3, username: 'Hitch', email: 'Hitch@gmail.com', image_url: 'https://pbs.twimg.com/profile_images/1101032349/Will_Smith_umvd001_400x400.jpg'}
      ]);
    });
};
