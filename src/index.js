import { wrapper_button_room } from './button/buttonRoom.js';
import { nav } from "./button/buttonNav"
// import { sum } from './modules/sum';
import indexStyles from './index.css';
export const root = document.querySelector('#root');
// const main = document.createElement("main");


const root_header = document.createElement("div");
const root_left_right = document.createElement("div");
const root_footer = document.createElement("div");
const root_left = document.createElement("div");
const root_right = document.createElement("div");

root_header.className = "root_header_footer root_header";
root_left_right.className = "root_left_right";
root_left.className = "root_left";
root_right.className = "root_right";
root_footer.className = "root_header_footer root_footer";

root_left.appendChild(nav);
root_left.appendChild(wrapper_button_room);

root_left_right.append(root_left, root_right)


root.append(root_header, root_left_right, root_footer);

export { root_right, root_left }
// root.textContent = sum(6, -1).toString();

