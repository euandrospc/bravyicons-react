import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name ArrowLeft
 * @description Renders Bravyicons ArrowLeft svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const ArrowLeft = createBravyIconsComponent("ArrowLeft", [
    ["path", { d: "M9.57 5.92993L3.5 11.9999L9.57 18.0699", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M20.5 12H3.67004", stroke: "currentColor", key: "k1" }]
]);

export default ArrowLeft;
