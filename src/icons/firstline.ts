import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Firstline
 * @description Renders Bravyicons Firstline svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Firstline = createBravyIconsComponent("Firstline", [
    ["path", { d: "M14 4.5H21", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M14 9.5H21", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M3 14.5H21", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M3 19.5H21", stroke: "currentColor", key: "k3" }],
    ["path", { d: "M9.5 8.43V5.57C9.5 4.45 9.05 4 7.92 4H5.07C3.95 4 3.5 4.45 3.5 5.57V8.42C3.5 9.55 3.95 10 5.07 10H7.92C9.05 10 9.5 9.55 9.5 8.43Z", stroke: "currentColor", key: "k4" }]
]);

export default Firstline;
