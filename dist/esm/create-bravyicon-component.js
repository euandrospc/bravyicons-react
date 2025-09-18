/**
 * @license bravyicons-react v0.3.5
 *
 * See the LICENSE file in the root directory of this source tree.
 */

import{forwardRef as p,createElement as s}from"react";import u from"./defaultAttributes.js";const y=(a,c)=>{const e=p(({color:i="currentColor",size:o=24,strokeWidth:l=1.5,className:m="",children:r,...n},d)=>{const f={ref:d,...u,width:o,height:o,strokeWidth:l,color:i,className:m,...n};return s("svg",f,c?.map(([h,t])=>s(h,{key:t.id,...t}))??[],...Array.isArray(r)?r:[r])});return e.displayName=`${a}Icon`,e};export{y as default};
