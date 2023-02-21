let j = document.createElement('iframe');
document.body.append(j);
window.alert = j.contentWindow.alert.bind(window);
window.console.log = j.contentWindow.console.log.bind(window);
j.remove();
  
  if (!location.href.includes("play.blooket.com")) alert("Please go to play.blooket.com and run script again.");
             else {
                    var state = Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode.state;
                   const tokenadder = Object.values(webpackJsonp.push([ [], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']], ]).cache).find((x) => x.exports ?.a?.put).exports.a;
            tokenadder.get("https://play.blooket.com/api/users/me").then(a => {
                tokenadder.put("https://play.blooket.com/api/users/add-rewards", {
          name: a.data.name,
          addedTokens: 5000,
          addedXp: 300
        })});
       if (state.xpAvailable === undefined) {
        state.xpAvailable = 0
      } if (state.tokensAvailable === undefined) {
        state.tokensAvailable = 0
      }

      alert('Added maximum rewards!');
             };
