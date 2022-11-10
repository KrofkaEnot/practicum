import { personalArea } from "../modules/personalArea/personalArea";
import { root_right } from "../index";
import { pageCleanPast } from "../interfaceLogic/cleaningPasting"

function renderButtonPersonalArea() {
    const button = document.createElement('button');
    button.className = 'button';
    button.id = 'buttonPersonalArea';

    button.addEventListener('click', function (event) {
        pageCleanPast(personalArea, root_right);
    });

    const text = document.createElement('span');
    //_______Name Button________\\
    text.textContent = "Personal Area";
    button.appendChild(text);

    const wrapper = document.createElement('div');
    wrapper.className = 'button_personal_area';

    wrapper.appendChild(button);
    return wrapper;
}

export { renderButtonPersonalArea }