import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Maximize2
 * @description Renders Bravyicons Maximize2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Maximize2 = createBravyIconsComponent("Maximize2", [
    ["path", { d: "M2 9V6.5C2 4.01 4.01 2 6.5 2H9", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M15 2H17.5C19.99 2 22 4.01 22 6.5V9", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M22 16V17.5C22 19.99 19.99 22 17.5 22H16", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M9 22H6.5C4.01 22 2 19.99 2 17.5V15", stroke: "currentColor", key: "k3" }]
]);

export default Maximize2;
