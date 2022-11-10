import { wrapper_button_room } from './button/buttonRoom.js';
import { nav } from "./button/buttonNav";
import indexStyles from './index.scss';
export const root = document.querySelector('#root');


const root_header = document.createElement("div");
const root_left_and_right = document.createElement("div");
const root_footer = document.createElement("div");
const root_left = document.createElement("div");
const root_right = document.createElement("div");

root_header.className = "root_header";
root_left_and_right.className = "root_left_and_right";
root_left.className = "root_left";
root_right.className = "root_right";
root_footer.className = "root_footer";

root_left.appendChild(nav);
root_left.appendChild(wrapper_button_room);

root_left_and_right.append(root_left, root_right)


root.append(root_header, root_left_and_right, root_footer);

export { root_right, root_left };

