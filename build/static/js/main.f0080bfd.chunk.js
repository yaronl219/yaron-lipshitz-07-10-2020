(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{103:function(e,t,a){e.exports=a(136)},132:function(e,t,a){e.exports=a.p+"static/media/weather.cf735531.svg"},133:function(e,t,a){"use strict";a.r(t),a.d(t,"storageService",(function(){return r}));var r={loadFromStorage:function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):null},saveToStorage:function(e,t){localStorage[e]=JSON.stringify(t)}}},134:function(e,t,a){e.exports=a.p+"static/media/logo.1ecdd7e1.svg"},135:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(11),i=a.n(c),s=a(18),o=a(37),u=a(175),l=a(176),m=a(13),f=a(79),p=a.n(f),v=a(28);var d=Object(s.b)((function(e){return{darkMode:e.userPrefsReducer.darkMode,isCelsius:e.userPrefsReducer.isCelsius}}))((function(){return n.a.createElement("nav",null,n.a.createElement("div",{className:"navbar"},n.a.createElement(v.b,{activeClassName:"navlink-active",className:"navlink",to:"/city"},"City View"),n.a.createElement(v.b,{activeClassName:"navlink-active",className:"navlink",to:"/favorites"},"Favorites")))})),h=a(63),y=a(9),E=a.n(y),g=a(16),C=a(168),b=a(171),w={getCityCurrWeather:function(e){return O.apply(this,arguments)},getCityByName:function(e){return F.apply(this,arguments)},getWeatherForecast:function(e){return j.apply(this,arguments)},getWeatherIcon:function(e){e<10&&(e="0"+e);return"https://developer.accuweather.com/sites/default/files/".concat(e,"-s.png")},getCityByCoords:function(e,t){return N.apply(this,arguments)},convertCelsiusToFahrenheit:function(e){return Math.round(10*(1.8*e+32))/10},getApiKey:M},k=M();function O(){return(O=Object(g.a)(E.a.mark((function e(t){var a,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k;case 2:return a=e.sent,e.prev=3,e.next=6,S("https://dataservice.accuweather.com/currentconditions/v1/".concat(t,"?apikey=").concat(a,"&details=true"));case 6:return r=e.sent,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(3),console.log(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}function j(){return(j=Object(g.a)(E.a.mark((function e(t){var a,r,n,c=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=!(c.length>1&&void 0!==c[1])||c[1],e.next=3,k;case 3:return r=e.sent,e.prev=4,e.next=7,S("https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(t,"?apikey=").concat(r,"&metric=").concat(a));case 7:return n=e.sent,e.abrupt("return",n);case 11:throw e.prev=11,e.t0=e.catch(4),console.log(e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[4,11]])})))).apply(this,arguments)}function N(){return(N=Object(g.a)(E.a.mark((function e(t,a){var r,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k;case 2:return r=e.sent,e.prev=3,e.next=6,S("https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=".concat(r,"&q=").concat(t,",").concat(a));case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(3),console.log(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}function F(){return(F=Object(g.a)(E.a.mark((function e(t){var a,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k;case 2:return a=e.sent,e.prev=3,e.next=6,S("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat(a,"&q=").concat(t));case 6:return r=e.sent,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(3),console.log(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}function S(e){return x.apply(this,arguments)}function x(){return(x=Object(g.a)(E.a.mark((function e(t){var a,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:throw e.prev=10,e.t0=e.catch(0),console.log(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function M(){return R.apply(this,arguments)}function R(){return(R=Object(g.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(g.a)(E.a.mark((function e(t,a){var r,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=["x6SNjBEgOiwSoE0Sm7AFRco0OWsPxKcT","jbQCGr5hw3CneCAiXlvKodc3ASLREpxy","17nM18URNW0l13ncG90uLIxINREYuwzk"],n=0;case 2:if(!(n<r.length)){e.next=16;break}return e.prev=3,e.next=6,S("https://dataservice.accuweather.com/currentconditions/v1/215836?apikey=".concat(r[n],"&details=true"));case 6:return t(r[n]),e.abrupt("return",r[n]);case 10:e.prev=10,e.t0=e.catch(3),console.log("API key not working - switching to next one");case 13:n++,e.next=2;break;case 16:return console.log("no keys"),a(),e.abrupt("return","No keys available");case 19:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t,a){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=a(54),I=a.n(T);function W(e){var t=e.city,a=e.onRemoveFavorite,c=e.isCelsius,i=e.darkMode,s=e.onSelectCity,u=Object(r.useState)(null),l=Object(o.a)(u,2),m=l[0],f=l[1];function p(){return(p=Object(g.a)(E.a.mark((function e(){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getCityCurrWeather(t.Key);case 2:a=e.sent,f(a[0]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){m||function(){p.apply(this,arguments)}()}),[t]),n.a.createElement("div",{onClick:function(){return s(t)},className:"mini-city-container ".concat(i?"dark":"light"," ").concat(function(){if(m)return m.IsDayTime?"day-time":"night-time"}())},n.a.createElement("div",{className:"unfavorite-container"},n.a.createElement(C.a,{title:"Unfavorite city"},n.a.createElement(I.a,{onClick:function(e){e.stopPropagation(),a(t.Key)}}))),n.a.createElement("div",{className:"mini-city-title"},n.a.createElement("h4",null,t.LocalizedName),n.a.createElement("h5",null,t.Country.LocalizedName)),n.a.createElement("div",{className:"mini-city-weather"},m?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"temp"},function(){var e=m.Temperature,t=e.Metric,a=e.Imperial;return c?"".concat(t.Value).concat(t.Unit):"".concat(a.Value).concat(a.Unit)}()),n.a.createElement("div",{className:"icon"},n.a.createElement("img",{src:w.getWeatherIcon(m.WeatherIcon),alt:"weather-icon"}))):n.a.createElement(b.a,null)))}var D=a(132);function L(){var e=Object(m.d)();return n.a.createElement("div",{className:"favorites-empty-state"},n.a.createElement("h2",null,"Oops! looks like you havent added any favorites yet"),n.a.createElement("h3",{className:"cta",onClick:function(){return e.push("/city")}},"Why not add some now?"),n.a.createElement("div",{className:"empty-state-img"},n.a.createElement("img",{src:D,alt:"empty-state-img"})))}function P(e){return function(t){t({type:"SET_CITY",city:e})}}var _=a(133).storageService,A={setFavorites:function(e){return new Promise((function(t){_.saveToStorage("favorites",e),t(!0)}))},getFavorites:function(){return new Promise((function(e){var t=_.loadFromStorage("favorites");return t||(t=[]),e(t)}))}};function K(e){return function(){var t=Object(g.a)(E.a.mark((function t(a){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.setFavorites(e);case 2:a({type:"SET_FAVORITES",favorites:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}var V={setFavorites:K,setCurrCity:P,getFavoritesFromStorage:function(){return function(){var e=Object(g.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.getFavorites();case 2:a=e.sent,t({type:"SET_FAVORITES",favorites:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},B=Object(s.b)((function(e){return{favorites:e.favoriteReducer.favorites,isCelsius:e.userPrefsReducer.isCelsius,darkMode:e.userPrefsReducer.darkMode}}),V)((function(e){var t=Object(m.d)();function a(t){var a=Object(h.a)(e.favorites);a=a.filter((function(e){return e.Key!==t})),e.setFavorites(a)}function c(a){e.setCurrCity(a),t.push("/city")}return Object(r.useEffect)((function(){e.getFavoritesFromStorage()}),[]),n.a.createElement("main",{className:"favorites-section"},e.favorites.length?e.favorites.map((function(t){return n.a.createElement(W,{key:t.Key,isCelsius:e.isCelsius,onRemoveFavorite:a,darkMode:e.darkMode,onSelectCity:c,city:t})})):n.a.createElement(L,null))})),U=a(56),z=a(57),G=a(64),J=a(62),X=a(177),Y=a(178),q=function(e){Object(G.a)(a,e);var t=Object(J.a)(a);function a(){var e;Object(U.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={searchField:"",cities:[],isCitiesListOpen:!1},e.ref=n.a.createRef(),e.getCitiesByName=Object(g.a)(E.a.mark((function t(){var a,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.getCityByName(e.state.searchField);case 2:if(a=t.sent){t.next=5;break}return t.abrupt("return");case 5:r=Boolean(a.length),e.setState({cities:a,isCitiesListOpen:r});case 7:case"end":return t.stop()}}),t)}))),e.onSelectCity=function(t,a){if(a){var r=e.state.cities.find((function(e){return e.LocalizedName===a}));e.props.setCurrCity(r),e.onCloseCitiesList()}},e.onOpenCitiesList=function(){e.state.cities&&!e.state.cities.length&&e.setState({isCitiesListOpen:!0})},e.onCloseCitiesList=function(){e.setState({isCitiesListOpen:!1})},e.onChange=function(t){e.setState({searchField:t.target.value},e.getCitiesByName)},e}return Object(z.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"search-container"},n.a.createElement(Y.a,{onChange:this.onSelectCity,style:{width:"fit-content"},options:this.state.cities.map((function(e){return e.LocalizedName})),renderInput:function(t){return n.a.createElement(X.a,Object.assign({},t,{value:e.state.searchField,onChange:e.onChange,label:"Find city",style:{width:"20rem"},margin:"normal",variant:"outlined"}))}}))}}]),a}(r.Component),Q={setCurrCity:P},$=Object(s.b)((function(e){return{currCity:e.cityReducer.currCity,darkMode:e.userPrefsReducer.darkMode}}),Q)(q),H=a(173),Z=a(60),ee=a.n(Z);function te(e){var t=e.dailyForecast,a=e.darkMode,r=e.isCelsius,c=new Date(1e3*t.EpochDate).toDateString(),i=r?"C":"F";return n.a.createElement("div",{className:"daily-forecast-day"},n.a.createElement("div",{className:"daily-forecast-bg ".concat(a?"dark":"light")}),n.a.createElement("div",{className:"daily-forecast-date"},c),n.a.createElement("div",{className:"daily-forecast-temp"},function(){var e=t.Temperature,a=r?e.Minimum.Value:w.convertCelsiusToFahrenheit(e.Minimum.Value),n=r?e.Maximum.Value:w.convertCelsiusToFahrenheit(e.Maximum.Value);return"".concat(a).concat(i," - ").concat(n).concat(i)}()),n.a.createElement("div",{className:"daily-forecast-icon"},n.a.createElement("img",{src:w.getWeatherIcon(t.Day.Icon),alt:"weather"})))}var ae=function(e){Object(G.a)(a,e);var t=Object(J.a)(a);function a(){var e;Object(U.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={currWeather:null,weatherForecast:null},e.setUserLocation=function(){var t=Object(g.a)(E.a.mark((function t(a){var r,n,c,i;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.coords,n=r.latitude,c=r.longitude,t.next=3,w.getCityByCoords(n,c);case 3:i=t.sent,e.props.setCurrCity(i);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.toggleFavoriteStatus=function(t){var a=Object(h.a)(e.props.favorites);t?a.push(e.props.currCity):a=a.filter((function(t){return t.Key!==e.props.currCity.Key})),e.props.setFavorites(a)},e.getFavoriteIcon=function(){var t=Boolean(e.props.favorites.findIndex((function(t){return t.Key===e.props.currCity.Key}))>=0);return n.a.createElement(H.a,{onClick:function(){return e.toggleFavoriteStatus(!t)}},t?n.a.createElement(I.a,null):n.a.createElement(ee.a,null))},e.getCurrentDegrees=function(){var t=e.state.currWeather;return t?n.a.createElement(n.a.Fragment,null,e.props.isCelsius?"".concat(t.Temperature.Metric.Value," C"):"".concat(t.Temperature.Imperial.Value," F")):n.a.createElement(b.a,null)},e.getWeatherForecast=Object(g.a)(E.a.mark((function t(){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.getWeatherForecast(e.props.currCity.Key,e.props.isCelsius);case 2:a=t.sent,e.setState({weatherForecast:a});case 4:case"end":return t.stop()}}),t)}))),e.getCityWeather=Object(g.a)(E.a.mark((function t(){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.getCityCurrWeather(e.props.currCity.Key);case 2:a=t.sent,e.setState({currWeather:a[0]});case 4:case"end":return t.stop()}}),t)}))),e.getIsDay=function(){var t=e.state.currWeather;if(t)return t.IsDayTime?"day-time":"night-time"},e}return Object(z.a)(a,[{key:"componentDidMount",value:function(){navigator.geolocation.getCurrentPosition(this.setUserLocation)}},{key:"componentDidUpdate",value:function(e){e.currCity!==this.props.currCity&&(this.getCityWeather(),this.getWeatherForecast())}},{key:"render",value:function(){var e=this,t=this.props.currCity;return t?n.a.createElement("main",{className:"weather-container ".concat(this.getIsDay())},n.a.createElement("div",{className:"weather-top"},n.a.createElement("div",{className:"city-details"},n.a.createElement("div",{className:"city-name"},t.LocalizedName,", ",t.Country.LocalizedName),n.a.createElement("div",{className:"city-degrees"},this.getCurrentDegrees())),n.a.createElement("div",{className:"favorite-container"},this.getFavoriteIcon())),n.a.createElement("div",{className:"weather-main"},this.state.currWeather?n.a.createElement(n.a.Fragment,null,n.a.createElement("img",{src:w.getWeatherIcon(this.state.currWeather.WeatherIcon),alt:"weather-icon"}),n.a.createElement("h2",null,this.state.currWeather.WeatherText)):n.a.createElement(b.a,null)),n.a.createElement("div",{className:"weather-forecast"},this.state.weatherForecast?this.state.weatherForecast.DailyForecasts.map((function(t){return n.a.createElement(te,{key:t.EpochDate,darkMode:e.props.darkMode,isCelsius:e.props.isCelsius,dailyForecast:t})})):n.a.createElement(b.a,null))):n.a.createElement(n.a.Fragment,null)}}]),a}(r.Component),re={setFavorites:K,setCurrCity:P},ne=Object(s.b)((function(e){return{currCity:e.cityReducer.currCity,isCelsius:e.userPrefsReducer.isCelsius,favorites:e.favoriteReducer.favorites,darkMode:e.userPrefsReducer.darkMode}}),re)(ae);function ce(e){return n.a.createElement("main",null,n.a.createElement($,null),n.a.createElement(ne,null))}var ie=a(86),se=a.n(ie),oe=a(85),ue=a.n(oe),le=a(88),me=a(174),fe=a(179),pe=a(180),ve=a(181);var de={setDarkMode:function(e){return function(t){t({type:"SET_DARK_MODE",isDark:e})}},setCelsius:function(e){return function(t){t({type:"SET_DEGREE_SCALE",isCelsius:e})}}},he=Object(s.b)((function(e){return{darkMode:e.userPrefsReducer.darkMode,isCelsius:e.userPrefsReducer.isCelsius}}),de)((function(e){var t=Object(r.useState)(!1),a=Object(o.a)(t,2),c=a[0],i=a[1],s=n.a.useRef();return n.a.createElement("div",{className:"user-pref-toggles"},n.a.createElement(C.a,{title:"User Preferences"},n.a.createElement(H.a,{ref:s,onClick:function(){return i(!0)}},n.a.createElement(ue.a,null))),n.a.createElement(le.a,{anchorEl:s.current,transformOrigin:{vertical:"bottom",horizontal:"right"},open:c,onClose:function(){return i(!1)}},n.a.createElement(me.a,null,n.a.createElement(fe.a,{className:"menu-item"},n.a.createElement("span",{className:"switch-off-state"},"Light Mode"),n.a.createElement(pe.a,{control:n.a.createElement(ve.a,{checked:e.darkMode,onChange:function(t){return e.setDarkMode(t.target.checked)}})}),n.a.createElement("span",null,"Dark Mode")),n.a.createElement(fe.a,null,n.a.createElement("span",{className:"switch-off-state"},"Fahrenheit"),n.a.createElement(pe.a,{control:n.a.createElement(ve.a,{checked:e.isCelsius,onChange:function(t){return e.setCelsius(t.target.checked)}})}),n.a.createElement("span",null,"Celsius")))))})),ye=a(134);var Ee=Object(s.b)((function(e){return{darkMode:e.userPrefsReducer.darkMode}}))((function(e){var t=Object(r.useState)(0),a=Object(o.a)(t,2),c=a[0],i=a[1],s=Object(m.d)(),f=Object(m.e)();Object(r.useEffect)((function(){var e="/favorites"===f.pathname?1:0;i(e)}),[f.pathname]);var v=function(e){var t=e?"favorites":"city";s.push(t)},h=e.darkMode?"dark":"light";return n.a.createElement("div",{className:"App ".concat(h)},n.a.createElement("header",{className:"App-header"},n.a.createElement("div",{className:"logo-container",onClick:function(){return s.push("/")}},n.a.createElement("img",{src:ye,alt:"logo"})),n.a.createElement(d,null),n.a.createElement(he,null)),n.a.createElement(p.a,{index:c,onSwitching:v,enableMouseEvents:!0},n.a.createElement(ce,null),n.a.createElement(B,null)),n.a.createElement("div",{className:"bottom-navigation"},n.a.createElement(u.a,{className:h,value:c,onChange:function(e,t){return v(t)}},n.a.createElement(l.a,{className:h,label:"City View",icon:n.a.createElement(se.a,null)}),n.a.createElement(l.a,{className:h,label:"Favorites",icon:n.a.createElement(ee.a,null)}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ge=a(32),Ce=a(87),be=a(24),we={favorites:[]};var ke={currCity:null};var Oe={darkMode:!1,isCelsius:!0};var je=Object(ge.c)({favoriteReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FAVORITES":return Object(be.a)(Object(be.a)({},e),{},{favorites:t.favorites});default:return e}},cityReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CITY":return Object(be.a)(Object(be.a)({},e),{},{currCity:t.city});default:return e}},userPrefsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DEGREE_SCALE":return Object(be.a)(Object(be.a)({},e),{},{isCelsius:t.isCelsius});case"SET_DARK_MODE":return Object(be.a)(Object(be.a)({},e),{},{darkMode:t.isDark});default:return e}}}),Ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ge.d,Fe=Object(ge.e)(je,Ne(Object(ge.a)(Ce.a)));a(135);i.a.render(n.a.createElement(v.a,null,n.a.createElement(s.a,{store:Fe},n.a.createElement(Ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[103,1,2]]]);
//# sourceMappingURL=main.f0080bfd.chunk.js.map