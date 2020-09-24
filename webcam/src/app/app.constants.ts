import { Injectable } from '@angular/core'
declare var $: any
@Injectable()
export class AppConstants {
	
	baseURL: string = "http://"+process.env.EMOTION_SERVICE || "http://emotion-service:5000"
  	constructor() {}
    getFormUrlEncoded(toConvert) {
		const formBody = []
		for (const property in toConvert) {
			const encodedKey = encodeURIComponent(property)
			const encodedValue = encodeURIComponent(toConvert[property])
			formBody.push(encodedKey + '=' + encodedValue)
		}
		return formBody.join('&')
    }
    
    isValidURL(str) {
      var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
      return !!pattern.test(str);
	}

	addStyletoDoc(css) {
		$(document).find('#page-style').remove()
		let head = document.getElementsByTagName('head')[0];
		let style = document.createElement('style');
		style.type = 'text/css';
		style.id = 'page-style'
		style.appendChild(document.createTextNode(css));
		head.appendChild(style);
	}
	addScriptoDoc(js) {
		$(document).find('#page-script').remove()
		let head = document.getElementsByTagName('head')[0];
		let script = document.createElement('script');
		script.type = 'text/javascript';
		script.id = 'page-script'
		script.appendChild(document.createTextNode(js));
		head.appendChild(script);
	}
	setPageTitle(t) {
		document.getElementsByTagName('title')[0].innerHTML = t;
	}
}
