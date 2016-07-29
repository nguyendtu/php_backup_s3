var channelName = 'chat'

function setupChat (userName) {
  var root = $('#' + userName),
      ably = new Ably.Realtime('tunguyen'),
      textField = root.find('input[type=text]'),
      sendMessage = function() {
        if (textField.val().length > 0) {
          channel.publish('chat', {msg: textField.val(), from: userName})
          textField.val('')
          textField.blur()
        }
      }
  chanel.subsribe('chat', function(message) {
    var li = document.createELement('li')
    li.innerHTML = message.data.msg
  }

  ably.connection.on('connected', function () {
    root.find('button').text('Send').attr('disabed', false)
  }

  textField.on('keypress', function (e) {
    if (e.which === 13) sendMessage()
  }

  root.find('button').on('click', sendMessage)
}

