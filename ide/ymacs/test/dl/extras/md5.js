/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 *
 * Adapted for DynarchLIB by Mihai Bazon.
 */(function(){function d(a,b){var c,d,e,j,l,m,n,o,p;a[b>>5]|=128<<b%32,a[(b+64>>>9<<4)+14]=b,c=1732584193,d=-271733879,e=-1732584194,j=271733878;for(l=0;l<a.length;l+=16)m=c,n=d,o=e,p=j,c=f(c,d,e,j,a[l+0],7,-680876936),j=f(j,c,d,e,a[l+1],12,-389564586),e=f(e,j,c,d,a[l+2],17,606105819),d=f(d,e,j,c,a[l+3],22,-1044525330),c=f(c,d,e,j,a[l+4],7,-176418897),j=f(j,c,d,e,a[l+5],12,1200080426),e=f(e,j,c,d,a[l+6],17,-1473231341),d=f(d,e,j,c,a[l+7],22,-45705983),c=f(c,d,e,j,a[l+8],7,1770035416),j=f(j,c,d,e,a[l+9],12,-1958414417),e=f(e,j,c,d,a[l+10],17,-42063),d=f(d,e,j,c,a[l+11],22,-1990404162),c=f(c,d,e,j,a[l+12],7,1804603682),j=f(j,c,d,e,a[l+13],12,-40341101),e=f(e,j,c,d,a[l+14],17,-1502002290),d=f(d,e,j,c,a[l+15],22,1236535329),c=g(c,d,e,j,a[l+1],5,-165796510),j=g(j,c,d,e,a[l+6],9,-1069501632),e=g(e,j,c,d,a[l+11],14,643717713),d=g(d,e,j,c,a[l+0],20,-373897302),c=g(c,d,e,j,a[l+5],5,-701558691),j=g(j,c,d,e,a[l+10],9,38016083),e=g(e,j,c,d,a[l+15],14,-660478335),d=g(d,e,j,c,a[l+4],20,-405537848),c=g(c,d,e,j,a[l+9],5,568446438),j=g(j,c,d,e,a[l+14],9,-1019803690),e=g(e,j,c,d,a[l+3],14,-187363961),d=g(d,e,j,c,a[l+8],20,1163531501),c=g(c,d,e,j,a[l+13],5,-1444681467),j=g(j,c,d,e,a[l+2],9,-51403784),e=g(e,j,c,d,a[l+7],14,1735328473),d=g(d,e,j,c,a[l+12],20,-1926607734),c=h(c,d,e,j,a[l+5],4,-378558),j=h(j,c,d,e,a[l+8],11,-2022574463),e=h(e,j,c,d,a[l+11],16,1839030562),d=h(d,e,j,c,a[l+14],23,-35309556),c=h(c,d,e,j,a[l+1],4,-1530992060),j=h(j,c,d,e,a[l+4],11,1272893353),e=h(e,j,c,d,a[l+7],16,-155497632),d=h(d,e,j,c,a[l+10],23,-1094730640),c=h(c,d,e,j,a[l+13],4,681279174),j=h(j,c,d,e,a[l+0],11,-358537222),e=h(e,j,c,d,a[l+3],16,-722521979),d=h(d,e,j,c,a[l+6],23,76029189),c=h(c,d,e,j,a[l+9],4,-640364487),j=h(j,c,d,e,a[l+12],11,-421815835),e=h(e,j,c,d,a[l+15],16,530742520),d=h(d,e,j,c,a[l+2],23,-995338651),c=i(c,d,e,j,a[l+0],6,-198630844),j=i(j,c,d,e,a[l+7],10,1126891415),e=i(e,j,c,d,a[l+14],15,-1416354905),d=i(d,e,j,c,a[l+5],21,-57434055),c=i(c,d,e,j,a[l+12],6,1700485571),j=i(j,c,d,e,a[l+3],10,-1894986606),e=i(e,j,c,d,a[l+10],15,-1051523),d=i(d,e,j,c,a[l+1],21,-2054922799),c=i(c,d,e,j,a[l+8],6,1873313359),j=i(j,c,d,e,a[l+15],10,-30611744),e=i(e,j,c,d,a[l+6],15,-1560198380),d=i(d,e,j,c,a[l+13],21,1309151649),c=i(c,d,e,j,a[l+4],6,-145523070),j=i(j,c,d,e,a[l+11],10,-1120210379),e=i(e,j,c,d,a[l+2],15,718787259),d=i(d,e,j,c,a[l+9],21,-343485551),c=k(c,m),d=k(d,n),e=k(e,o),j=k(j,p);return[c,d,e,j]}function e(a,b,c,d,e,f){return k(l(k(k(b,a),k(d,f)),e),c)}function f(a,b,c,d,f,g,h){return e(b&c|~b&d,a,b,f,g,h)}function g(a,b,c,d,f,g,h){return e(b&d|c&~d,a,b,f,g,h)}function h(a,b,c,d,f,g,h){return e(b^c^d,a,b,f,g,h)}function i(a,b,c,d,f,g,h){return e(c^(b|~d),a,b,f,g,h)}function j(a,b){var e,f,g,h,i=m(a);i.length>16&&(i=d(i,a.length*c)),e=Array(16),f=Array(16);for(g=0;g<16;g++)e[g]=i[g]^909522486,f[g]=i[g]^1549556828;return h=d(e.concat(m(b)),512+b.length*c),d(f.concat(h),640)}function k(a,b){var c=(a&65535)+(b&65535),d=(a>>16)+(b>>16)+(c>>16);return d<<16|c&65535}function l(a,b){return a<<b|a>>>32-b}function m(a){var b,d=[],e=(1<<c)-1;for(b=0;b<a.length*c;b+=c)d[b>>5]|=(a.charCodeAt(b/c)&e)<<b%32;return d}function n(a){var b,d="",e=(1<<c)-1;for(b=0;b<a.length*32;b+=c)d+=String.fromCharCode(a[b>>5]>>>b%32&e);return d}function o(b){var c,d=a?"0123456789ABCDEF":"0123456789abcdef",e="";for(c=0;c<b.length*4;c++)e+=d.charAt(b[c>>2]>>c%4*8+4&15)+d.charAt(b[c>>2]>>c%4*8&15);return e}function p(a){var c,d,e,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",g="";for(c=0;c<a.length*4;c+=3){d=(a[c>>2]>>8*(c%4)&255)<<16|(a[c+1>>2]>>8*((c+1)%4)&255)<<8|a[c+2>>2]>>8*((c+2)%4)&255;for(e=0;e<4;e++)c*8+e*6>a.length*32?g+=b:g+=f.charAt(d>>6*(3-e)&63)}return g}var a=0,b="",c=8;window.hex_md5=function(a){return o(d(m(a),a.length*c))},window.b64_md5=function(a){return p(d(m(a),a.length*c))},window.str_md5=function(a){return n(d(m(a),a.length*c))},window.hex_hmac_md5=function(a,b){return o(j(a,b))},window.b64_hmac_md5=function(a,b){return p(j(a,b))},window.str_hmac_md5=function(a,b){return n(j(a,b))}})();