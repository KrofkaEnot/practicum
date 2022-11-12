import { auth } from "../modules/auth/auth";
import { reg } from "../modules/reg/reg";
import { root_right } from "../index";
import { pageCleanPast } from "../interfaceLogic/cleaningPasting"
// __________________________________________________\\
function renderButtonAuth() {
    const button = document.createElement('button');
    button.className = 'button';
    button.id = 'buttonAuth';

    button.addEventListener('click', function (event) {
        pageCleanPast(auth, root_right);
    });

    const text = document.createElement('span');
    //_______Name Button________\\
    text.textContent = "Authorization";
    button.appendChild(text);

    const wrapper = document.createElement('div');
    wrapper.className = 'button_auth';

    wrapper.appendChild(button);
    return wrapper;
}
// __________________________________________________\\
function renderButtonReg() {

    const button = document.createElement('button');
    button.className = 'button';
    button.id = 'buttonReg';

    button.addEventListener('click', function (event) {
        event.preventDefault();
        pageCleanPast(reg, root_right);
    });

    // ___________________________________________________\\
    const text = document.createElement('span');
    //_______Name Button________\\
    text.textContent = "Registration";
    button.appendChild(text);

    const wrapper = document.createElement('div');
    wrapper.className = 'button_reg';

    wrapper.appendChild(button);
    return wrapper;
}

export { renderButtonAuth, renderButtonReg }
