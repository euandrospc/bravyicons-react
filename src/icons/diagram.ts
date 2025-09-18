import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Diagram
 * @description Renders Bravyicons Diagram svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Diagram = createBravyIconsComponent("Diagram", [
    ["path", { d: "M2 2V19C2 20.66 3.34 22 5 22H22", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M5 17L9.59 11.64C10.35 10.76 11.7 10.7 12.52 11.53L13.47 12.48C14.29 13.3 15.64 13.25 16.4 12.37L21 7", stroke: "currentColor", key: "k1" }]
]);

export default Diagram;
