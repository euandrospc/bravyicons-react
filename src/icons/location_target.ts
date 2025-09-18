import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name LocationTarget
 * @description Renders Bravyicons LocationTarget svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const LocationTarget = createBravyIconsComponent("LocationTarget", [
    ["circle", { cx: "8", cy: "8", r: "6", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M8 2.0001V0.600098", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M8 15.4V14", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M13.9999 8L15.3999 8", stroke: "currentColor", key: "k3" }],
    ["path", { d: "M0.599756 8L1.99976 8", stroke: "currentColor", key: "k4" }],
    ["circle", { cx: "8", cy: "8", r: "3", fill: "currentColor", key: "k5" }]
]);

export default LocationTarget;
