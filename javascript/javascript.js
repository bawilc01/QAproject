$('#flashMessage').hide();

$('#previewButton').click(function() {
  const title = $('#blogTitleInput').val();
  const content = $('#blogContentInput').val();

  $('#blogTitlePreview').text(title);
  $('#blogContentPreview').html(content);

$('#flashMessage')
    .slideDown(1000)
    .delay(2000)
    .slideUp();
});

var ruWord = ['чёрный: black',
'кори́чневый: brown',
'фиоле́товый: purple or violet',
'кра́сный: red',
'бе́лый: white'];

function newRuWord() {
  var randomRuWord = Math.floor(Math.random() * ruWord.length);
  document.getElementById('ruWordDisplay').innerHTML = ruWord[randomRuWord];
};
