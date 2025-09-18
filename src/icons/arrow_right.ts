import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name ArrowRight
 * @description Renders Bravyicons ArrowRight svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const ArrowRight = createBravyIconsComponent("ArrowRight", [
    ["path", { d: "M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M3.5 12H20.33", stroke: "currentColor", key: "k1" }]
]);

export default ArrowRight;
