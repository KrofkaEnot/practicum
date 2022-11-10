import regStyle from './reg.css';

import { Handlebars, fieldNamesReg } from '../../variableStorage';

const reg = document.createElement('div');

reg.id = 'reg_div';
const template = Handlebars.compile(`
{{title}}
<hr>
<form name="test" method="post" action="../index.html">
<p>{{fieldNameEmail}}<br>
 <input type="email">
</p>
<p>{{fieldNamePass}}<br>
 <input type="password">
</p>
<p>{{fieldNamePass2}}<br>
 <input type="password">
</p>
<p>{{fieldNameName}}<br>
 <input type="text">
</p>
<p>{{fieldNameSurname}}<br>
 <input type="text">
</p>
<p>{{fieldNamePhone}}<br>
 <input type="tel">
</p>

<p><input type="submit" class="button" value={{sendButton}}>
 <input type="reset" class="button" value={{clearButton}}></p>
</form>`);

const processedTemplate = template(fieldNamesReg);


reg.innerHTML = processedTemplate;
export { reg };