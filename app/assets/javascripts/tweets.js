// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

document.addEventListener('DOMContentLoaded', function() {
  $(function(){
    $('.new_tweet').on('submit', function(e) {
      e.preventDefault();
      $.ajax({
        url: $(this).attr('action') + ".json",
        method: $(this).attr('method'),
        data: $(this).serialize(),
        dataType: 'json'
      }).done(function(data) {
        console.log('Yay.. It works!');
        console.log(data);

        var tweets = document.querySelector('.tweets');

        var list = document.createElement('li');
        list.classList.add("tweet");

        var time = document.createElement('time');
        time.innerHTML = data.date;

        var p = document.createElement('p');
        p.innerHTML = data.message;
        list.append(p);
        list.append(time);
        tweets.prepend(list);
      }).fail(function() {
        console.log('Try harder..');
      }).always(function() {
        console.log('Heyo.. How you doing?');
      });
    });
  });
});
