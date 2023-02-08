          let j = document.createElement('iframe');
            document.body.append(j);
            window.alert = j.contentWindow.alert.bind(window);
            window.prompt = j.contentWIndow.prompt.bind(window);
            j.remove();


var addTokens = Object.values(document.querySelector('#app > div > div'))[1].children[1]['_owner'].stateNode.state,
  addTokensPrompt = parseInt(prompt('How much tokens do you want?'))
addTokens.tokens = addTokensPrompt
