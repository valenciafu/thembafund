(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("zTTH"),a("3nLz");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var n,r=i(a("PJYZ")),o=i(a("VbXa")),s=i(a("8OQS")),d=i(a("pVnL")),l=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,i=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},A=function(e){var t=e.fluid,a=e.fixed;return m(t||a).src},m=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=A(t);return g[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,E=b&&window.IntersectionObserver,w=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,n=e.media,r=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:n,srcSet:i,sizes:r}),l.default.createElement("source",{media:n,srcSet:a,sizes:r}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function j(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function I(e,t){var a=e.srcSet,i=e.srcSetWebp,n=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?i:a)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var B=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+l+o+s+a+i+t+r+n+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,n=e.spreadProps,r=e.ariaHidden,o=l.default.createElement(O,(0,d.default)({src:t},n,{ariaHidden:r}));return a.length>1?l.default.createElement("picture",null,i(a),o):o},O=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,n=e.src,r=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,A=e.ariaHidden,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":A,sizes:a,srcSet:i,src:n},m,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));O.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!p&&E&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||b&&(p||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)(a)),a.handleRef=a.handleRef.bind((0,r.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=B(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=A(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,r=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,g=e.fluid,h=e.fixed,p=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,w=e.itemProp,v=e.loading,I=e.draggable,B=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,d.default)({opacity:B?1:0,transition:L?"opacity "+b+"ms":"none"},s),C="boolean"==typeof p?"lightgray":p,x={transitionDelay:b+"ms"},T=(0,d.default)({opacity:this.state.imgLoaded?0:1},L&&x,{},s,{},f),k={title:t,alt:this.state.isVisible?"":a,style:T,className:A,itemProp:w};if(g){var Q=g,V=m(g);return l.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},l.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),C&&l.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&x)}),V.base64&&l.default.createElement(R,{ariaHidden:!0,src:V.base64,spreadProps:k,imageVariants:Q,generateSources:j}),V.tracedSVG&&l.default.createElement(R,{ariaHidden:!0,src:V.tracedSVG,spreadProps:k,imageVariants:Q,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,y(Q),l.default.createElement(O,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:v,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:a,title:t,loading:v},V,{imageVariants:Q}))}}))}if(h){var H=h,M=m(h),P=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},r);return"inherit"===r.display&&delete P.display,l.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},C&&l.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},L&&x)}),M.base64&&l.default.createElement(R,{ariaHidden:!0,src:M.base64,spreadProps:k,imageVariants:H,generateSources:j}),M.tracedSVG&&l.default.createElement(R,{ariaHidden:!0,src:M.tracedSVG,spreadProps:k,imageVariants:H,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,y(H),l.default.createElement(O,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:v,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:a,title:t,loading:v},M,{imageVariants:H}))}}))}return null},t}(l.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),C=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});L.propTypes={resolutions:N,sizes:C,fixed:c.default.oneOfType([N,c.default.arrayOf(N)]),fluid:c.default.oneOfType([C,c.default.arrayOf(C)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var x=L;t.default=x},QeBL:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),n=a.n(i),r=a("soUV"),o=a("1Yd/"),s=a("sUTV"),d=a("vOnD"),l=a("9eSz"),c=a.n(l),u=a("hF6A"),f=a("U36J"),A=a("7xsU"),m=Object(d.b)(u.o).withConfig({displayName:"HomeHero__Parent",componentId:"sc-1hjue9l-0"})(["position:relative;margin-top:0rem;padding-top:0rem;background-image:linear-gradient( -45deg,",","," );height:90vh;padding-bottom:1rem;"],Object(f.k)(.7),Object(f.r)(.6)),g=Object(d.b)(c.a).withConfig({displayName:"HomeHero__FakeBgImage",componentId:"sc-1hjue9l-1"})(["position:absolute;top:0;left:0;width:100vw;height:90vh;z-index:-1;& > img{object-fit:cover !important;object-position:0% 0% !important;font-family:'object-fit: cover !important; object-position: 0% 0% !important;';}@media screen and (max-width:600px){height:",";}"],(function(e){return e.mobileHeight})),h=d.b.div.withConfig({displayName:"HomeHero__TextDiv",componentId:"sc-1hjue9l-2"})(["position:absolute;margin-top:32vh;width:86vw;margin-left:7vw;"]),p=Object(d.b)(u.d).withConfig({displayName:"HomeHero__StyledH1",componentId:"sc-1hjue9l-3"})(["","{font-size:3.5vw;line-height:9vh;}"],Object(A.r)(A.c)),b=function(){var e=s.data;return n.a.createElement(m,null,n.a.createElement(h,null,n.a.createElement(p,{center:!0,white:!0},"A network of founders, executives and investors committed to mentoring and investing in leading early-stage, student and alumni founders.")),n.a.createElement(g,{fluid:e.homeHeroImg.childImageSharp.fluid,style:{marginTop:"0",marginBottom:"0",width:"100%"}}))},E=Object(d.b)(u.a).withConfig({displayName:"Mission__StyledCard",componentId:"sc-13hzalr-0"})(["padding:0rem;"]),w=Object(d.b)(u.g).withConfig({displayName:"Mission__StyledImg",componentId:"sc-13hzalr-1"})(["background-position:center;background-size:cover;background-repeat:no-repeat;width:100%;margin-top:none;border-radius:"," "," 0rem 0rem;"],A.b,A.b),y=Object(d.b)(u.m).withConfig({displayName:"Mission__StyledP",componentId:"sc-13hzalr-2"})(["margin-left:",";margin-right:",";"],A.j,A.j),v=[{content:"Understand what they need to get from 0 to 1, and 1 to 10, and aren’t bashful when it comes to the help they need",image:"https://the-mba-fund.s3.us-east-2.amazonaws.com/portfolio/home-images/work.jpg"},{content:"Dream large enough to change the way business is conducted",image:"https://the-mba-fund.s3.us-east-2.amazonaws.com/portfolio/home-images/building.jpg"},{content:"Embrace large problems and tackle them with innovative solutions",image:"https://the-mba-fund.s3.us-east-2.amazonaws.com/portfolio/home-images/mountain.jpg"},{content:"Attract other great talent with a killer instinct",image:"https://the-mba-fund.s3.us-east-2.amazonaws.com/portfolio/home-images/meeting.jpg"}],S=function(){return n.a.createElement(u.o,null,n.a.createElement(u.q,null,n.a.createElement(u.d,null,"Our Mission"),n.a.createElement(u.m,null,"Our mission is to cultivate a leading start-up ecosystem among MBA and business school programs by providing founders with mentorship and seed-stage capital at the earliest stages of development.",n.a.createElement("br",null),n.a.createElement("br",null),"The MBA Fund is a community of entrepreneurs and investors that are passionate about building great businesses. We are not afraid to dig in at Day 0 and take the riskiest leaps with founders who are just getting started."),n.a.createElement(u.o,null,n.a.createElement(u.q,null,n.a.createElement(u.e,{center:!0},"We invest in the best founders, the ones who..."),n.a.createElement(u.n,{margin:A.j},v.map((function(e){var t=e.content,a=e.image;return n.a.createElement(u.b,{sm:12,md:6,margin:A.j},n.a.createElement(E,{bordered:!0,shaded:!0},n.a.createElement(w,{src:a}),n.a.createElement(y,null,t)))})))))))},j=a("ScA1"),I=Object(d.b)(u.o).withConfig({displayName:"Funded__StyledSection",componentId:"zmvvzu-0"})(["background-image:linear-gradient(90deg,",",",");"],f.q,f.j),B=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(I,null,n.a.createElement(u.c,null,n.a.createElement(u.e,{white:!0,mb0:!0},"We’ve invested in startups who have also raised funding from..."))),n.a.createElement(u.c,null,n.a.createElement("img",{src:j})))},z=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(b,null),n.a.createElement(S,null),n.a.createElement(B,null))};t.default=function(){return n.a.createElement(r.a,null,n.a.createElement(o.a,{title:"Home"}),n.a.createElement(z,null))}},ScA1:function(e,t,a){e.exports=a.p+"static/cofunder-logos-2dc87a7a39f9b923cb7cb4b14f177512.png"},sUTV:function(e){e.exports=JSON.parse('{"data":{"homeHeroImg":{"id":"9e4a0b33-29aa-5dc8-92bd-48e8495e53b0","childImageSharp":{"id":"930f9ab5-ab4f-52f3-8086-a33e0b5a800c","fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAIB/9oADAMBAAIQAxAAAAFK9CQKMcRf/8QAGhABAQEBAAMAAAAAAAAAAAAAAgEDAAQRIv/aAAgBAQABBQLOfIczWqj09Sd5AM4g0//EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAgBAwEBPwGNf//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/Aar/xAAaEAEBAQEAAwAAAAAAAAAAAAABABECISJh/9oACAEBAAY/As5b368ykAW5r9hy/8QAGRABAAMBAQAAAAAAAAAAAAAAAQARITFR/9oACAEBAAE/IbRcXRDgxc2m8rZzifZx4I8g55lqVkbP/9oADAMBAAIAAwAAABBvL//EABcRAQEBAQAAAAAAAAAAAAAAAAEAETH/2gAIAQMBAT8QUcgxf//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPxCBpT//xAAZEAEBAQEBAQAAAAAAAAAAAAABESEAMUH/2gAIAQEAAT8QQGdunRoznjI0brFplzmLc5EfOERKNSAfOSt8Tmgc4DTXL3//2Q==","aspectRatio":1.5186104218362282,"src":"/static/a6efecfb0a6c6fe14420bbc358bf3690/ff044/hero-home.jpg","srcSet":"/static/a6efecfb0a6c6fe14420bbc358bf3690/724c8/hero-home.jpg 1000w,\\n/static/a6efecfb0a6c6fe14420bbc358bf3690/a66ad/hero-home.jpg 2000w,\\n/static/a6efecfb0a6c6fe14420bbc358bf3690/ff044/hero-home.jpg 4000w,\\n/static/a6efecfb0a6c6fe14420bbc358bf3690/00aeb/hero-home.jpg 4896w","sizes":"(max-width: 4000px) 100vw, 4000px"}}}}}')},zTTH:function(e,t,a){"use strict";var i=a("P8UN"),n=a("Wadk")(6),r="findIndex",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),i(i.P+i.F*o,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(r)}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a6f930e46d64954ffc26.js.map