import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Vuesax
 * @description Renders Bravyicons Vuesax svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Vuesax = createBravyIconsComponent("Vuesax", [
    ["path", { d: "M21 8L12 22L2.95996 8", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M3 4H6L12 13L18 4H21L12 18L3 4Z", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M8 3L12 9L16 3L13.2 4V2H10.8V4L8 3Z", stroke: "currentColor", key: "k2" }]
]);

export default Vuesax;
