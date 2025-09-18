import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Triangle
 * @description Renders Bravyicons Triangle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Triangle = createBravyIconsComponent("Triangle", [
    ["path", { d: "M12 21.41H5.93999C2.46999 21.41 1.01999 18.93 2.69999 15.9L5.81999 10.28L8.75999 5.00003C10.54 1.79003 13.46 1.79003 15.24 5.00003L18.18 10.29L21.3 15.91C22.98 18.94 21.52 21.42 18.06 21.42H12V21.41Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M21.44 20L12 13.39L2.56 20", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M12 3V13.39", stroke: "currentColor", key: "k2" }]
]);

export default Triangle;
