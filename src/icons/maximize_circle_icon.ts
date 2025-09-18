import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name MaximizeCircleIcon
 * @description Renders Bravyicons MaximizeCircleIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const MaximizeCircleIcon = createBravyIconsComponent("MaximizeCircleIcon", [
    ["path", { d: "M17 3H21V7", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M15 9L21 3", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M7 21H3V17", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M9 15L3 21", stroke: "currentColor", key: "k3" }],
    ["path", { d: "M14.02 2.20001C13.37 2.07001 12.69 2 12 2C6.48 2 2 6.48 2 12C2 12.69 2.07001 13.36 2.20001 14", stroke: "currentColor", key: "k4" }],
    ["path", { d: "M9.97998 21.8C10.63 21.93 11.31 22 12 22C17.52 22 22 17.52 22 12C22 11.32 21.93 10.65 21.8 10", stroke: "currentColor", key: "k5" }]
]);

export default MaximizeCircleIcon;
