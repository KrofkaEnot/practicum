import { renderButtonAuth, renderButtonReg } from "./buttonAuthReg";
import { renderButtonPersonalArea } from "./buttonPersonalArea";
import { renderAddChat } from "./buttonChat"
import { renderAddRoom } from "./buttonRoom"
import { renderHome } from "./buttonHome"
const nav = document.createElement('nav');

nav.className = 'nav';
nav.append(renderHome(), renderButtonAuth(), renderButtonReg(), renderButtonPersonalArea(), renderAddChat(), renderAddRoom());

export { nav };