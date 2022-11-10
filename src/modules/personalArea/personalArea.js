import personalAreaStyle from './personalArea.scss';
import { Handlebars, fieldNamesPersonalArea } from '../../variableStorage';

const personalArea = document.createElement('div');

personalArea.className = 'personal_area_div';

const template = Handlebars.compile(`
{{title}}
<hr>
<form name="test" method="post" action="">

<p>{{displayLogin}}<br>
{{login}}
</p>

<p>{{photo}}<br>
{{avatar}}
</p>

<p>{{fieldNameName}}<br>
{{first_name}}
</p>

<p>{{fieldNameSurname}}<br>
{{second_name}}
</p>

<p>{{fieldNameEmail}}<br>
{{email}}
</p>

<p>{{fieldNamePass}}<br>
{{oldPassword}}
</p>

<p>{{fieldNameNewPass}}<br>
{{newPassword}}
</p>

<p><input type="submit" class="button" value={{sendButton}}>
 <input type="reset" class="button" value={{clearButton}}></p>
</form>`);
const processedTemplate = template(fieldNamesPersonalArea);
personalArea.innerHTML = processedTemplate;
export { personalArea };