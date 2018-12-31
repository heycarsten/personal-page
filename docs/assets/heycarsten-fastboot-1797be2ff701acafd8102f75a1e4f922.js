define("heycarsten/initializers/ajax",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.get,t=function(e){var t=r(this,"fastboot.request.protocol")
if(/^\/\//.test(e.url))e.url=t+e.url
else if(!/^https?:\/\//.test(e.url))try{e.url=t+"//"+r(this,"fastboot.request.host")+e.url}catch(a){throw new Error("You are using Ember Data with no host defined in your adapter. This will attempt to use the host of the FastBoot request, which is not configured for the current host of this request. Please set the hostWhitelist property for in your environment.js. FastBoot Error: "+a.message)}if(!najax)throw new Error("najax does not seem to be defined in your app. Did you override it via `addOrOverrideSandboxGlobals` in the fastboot server?")
najax(e)},a={name:"ajax-service",initialize:function(e){e.register("ajax:node",t,{instantiate:!1}),e.inject("adapter","_ajaxRequest","ajax:node"),e.inject("adapter","fastboot","service:fastboot")}}
e.default=a}),define("heycarsten/initializers/error-handler",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"error-handler",initialize:function(e){Ember.onerror||(Ember.onerror=function(e){var r="There was an error running your app in fastboot. More info about the error: \n ".concat(e.stack||e)
Ember.Logger.error(r)})}}
e.default=r})
