import recallStyle from './forgotYouPass.scss';
import { Handlebars, fieldNamesForgotYouPass } from '../../variableStorage';


const recall = document.createElement('div');
recall.className = 'recall'

const template = Handlebars.compile(`
{{title}}
<form name="test" method="post" action="">
<p>{{fieldNameEmail}}<br>
 <input type="email">
</p>
<p>{{fieldNamePhone}}<br>
 <input type="tel">
</p>
<p><input type="submit" class="button" value={{sendButton}}>
 <input type="reset" class="button" value={{clearButton}}></p>
</form>
`);

const processedTemplate = template(fieldNamesForgotYouPass);
recall.innerHTML = processedTemplate;
export { recall }

