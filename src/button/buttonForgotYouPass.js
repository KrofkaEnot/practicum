import { root_right } from "../index";
import { recall } from "../modules/forgotYourPass/forgotYouPass"
import { pageCleanPast } from "../interfaceLogic/cleaningPasting"

function renderButtonRecall() {
    const button = document.createElement('button');
    button.className = 'button'
    button.id = 'buttonRecall'

    button.addEventListener('click', function (event) {
        event.preventDefault();
        pageCleanPast(recall, root_right);
    });
    const text = document.createElement('span');
    text.textContent = "Вспомнить пароль!";
    button.appendChild(text);
    return button
}
const wrapper_recall = document.createElement('div');
wrapper_recall.append(renderButtonRecall())
export { wrapper_recall };