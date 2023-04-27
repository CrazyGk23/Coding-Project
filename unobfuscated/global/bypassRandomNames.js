var j = document.createElement('iframe')
docuent.body.append(j);
window.alert = j.contentWindow.alert.bind(window);

Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ isRandom: false, client: { name: "" } });
document.querySelector('[class*="nameInput"]').focus();
alert('You can now use any name!');
