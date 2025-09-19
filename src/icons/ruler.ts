import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Ruler
 * @description Renders Bravyicons Ruler svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Ruler = createBravyIconsComponent("Ruler", [
    ["g", { clipPath: "url(#clip0_3195_645)", key: "k0" }],
    ["path", { d: "M5 17H19C21 17 22 16 22 14V10C22 8 21 7 19 7H5C3 7 2 8 2 10V14C2 16 3 17 5 17Z", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", key: "k1" }],
    ["path", { d: "M18 7V12", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", key: "k2" }],
    ["path", { d: "M6 7V11", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", key: "k3" }],
    ["path", { d: "M10.05 7L10 12", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", key: "k4" }],
    ["path", { d: "M14 7V10", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", key: "k5" }],
    ["defs", { key: "k6" }],
    ["clipPath", { id: "clip0_3195_645", key: "k7" }],
    ["rect", { width: "24", height: "24", fill: "white", key: "k8" }]
]);

export default Ruler;
