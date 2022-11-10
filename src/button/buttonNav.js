import { renderButtonAuth, renderButtonReg } from "./buttonAuthReg";
import { renderButtonPersonalArea } from "./buttonPersonalArea";
import { renderAddChat, renderAddRoom } from "./buttonRoom";

const nav = document.createElement('nav');

nav.className = 'nav';
nav.append(renderButtonAuth(), renderButtonReg(), renderButtonPersonalArea(), renderAddChat(), renderAddRoom());

export { nav };