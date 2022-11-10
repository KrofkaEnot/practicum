import authStyle from './auth.scss';


import { Handlebars, fieldNamesAuth } from '../../variableStorage';

const auth = document.createElement('div');

auth.id = 'auth_div';

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
<p><input type="submit" class="button" value={{sendButton}}>
 <input type="reset" class="button" value={{clearButton}}></p>
</form>`);

const processedTemplate = template(fieldNamesAuth);

auth.innerHTML = processedTemplate;

//_________input_Button_Recall_Pass________________\\
import { wrapper_recall } from "../../button/buttonForgotYouPass"
auth.append(wrapper_recall);
export { auth };