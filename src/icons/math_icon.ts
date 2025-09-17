import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name MathIcon
 * @description Renders Bravyicons MathIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const MathIcon = createBravyIconsComponent("MathIcon", [
    ["path", { d: "M14.4207 5.63965H21.7007", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M2.29956 5.64014H9.57956", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M14.4207 15.3301H21.7007", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M14.4207 21.3896H21.7007", stroke: "currentColor", key: "k3" }],
    ["path", { d: "M18.0894 9.27V2", stroke: "currentColor", key: "k4" }],
    ["path", { d: "M2.29956 22L9.57956 14.73", stroke: "currentColor", key: "k5" }],
    ["path", { d: "M9.57956 22L2.29956 14.73", stroke: "currentColor", key: "k6" }]
]);

export default MathIcon;
