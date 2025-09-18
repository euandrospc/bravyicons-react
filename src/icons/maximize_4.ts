import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Maximize4
 * @description Renders Bravyicons Maximize4 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Maximize4 = createBravyIconsComponent("Maximize4", [
    ["path", { d: "M21 9V3H15", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M3 15V21H9", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M21 3L13.5 10.5", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M10.5 13.5L3 21", stroke: "currentColor", key: "k3" }]
]);

export default Maximize4;
