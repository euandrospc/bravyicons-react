import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Scanner
 * @description Renders Bravyicons Scanner svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Scanner = createBravyIconsComponent("Scanner", [
    ["path", { d: "M2 9V7C2 4 4 2 7 2H17C20 2 22 4 22 7V9", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M2 15V17C2 20 4 22 7 22H17C20 22 22 20 22 17V15", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M2 12H22", stroke: "currentColor", key: "k2" }]
]);

export default Scanner;
