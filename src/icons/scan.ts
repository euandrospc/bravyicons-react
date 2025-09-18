import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Scan
 * @description Renders Bravyicons Scan svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Scan = createBravyIconsComponent("Scan", [
    ["path", { d: "M2 9V6.5C2 4.01 4.01 2 6.5 2H9", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M15 2H17.5C19.99 2 22 4.01 22 6.5V9", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M22 16V17.5C22 19.99 19.99 22 17.5 22H16", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M9 22H6.5C4.01 22 2 19.99 2 17.5V15", stroke: "currentColor", key: "k3" }],
    ["path", { d: "M17 9.5V14.5C17 16.5 16 17.5 14 17.5H10C8 17.5 7 16.5 7 14.5V9.5C7 7.5 8 6.5 10 6.5H14C16 6.5 17 7.5 17 9.5Z", stroke: "currentColor", key: "k4" }],
    ["path", { d: "M19 12H5", stroke: "currentColor", key: "k5" }]
]);

export default Scan;
