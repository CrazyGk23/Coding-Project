let j = document.createElement('iframe');
document.body.append(j);
window.alert = j.contentWindow.alert.bind(window);
window.console.log = j.contentWindow.console.log.bind(window);
j.remove();

const { stateNode } = Object.values(document
                                                .querySelector('#app > div > div'))[1]
                                                .children[0]._owner;
                stateNode.freeQuestions = stateNode.questions = stateNode.props.client.questions.map
                (j => ({ ...j, correctAnswers: j.answers }))
