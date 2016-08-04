(function() {
  let button = document.getElementById('upload-me');

  button.addEventListener('click', function(e) {
    let form = document.getElementById('the-form');

    let request = new XMLHttpRequest();
    request.open('POST', '/upload', true);
    request.send(new FormData(form));

    request.onload = function() {
      var resp = request.responseText;
      if (request.status >= 200 && request.status < 400) {
        console.log('Success: ' + resp);
        alert('Upload successful: ' + resp);
      } else {
        console.error('Error: ' + resp);
        alert('Upload failed: ' + resp);
      }
    }
  });
})();
