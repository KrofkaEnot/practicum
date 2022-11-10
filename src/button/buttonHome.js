import { root_right } from "../index";
import { pageCleanPast } from "../interfaceLogic/cleaningPasting"
function renderHome() {
    const button = document.createElement('button');
    button.className = 'button';

    button.addEventListener('click', function (event) {
        pageCleanPast('', root_right);
    });

    const text = document.createElement('span');
    text.textContent = 'Home';
    button.appendChild(text);

    const wrapper = document.createElement('div');
    wrapper.className = 'chat_button';

    wrapper.appendChild(button);
    return wrapper;
}
export { renderHome }