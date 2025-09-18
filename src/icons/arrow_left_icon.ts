import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name ArrowLeftIcon
 * @description Renders Bravyicons ArrowLeftIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const ArrowLeftIcon = createBravyIconsComponent("ArrowLeftIcon", [
    ["path", { d: "M9.57 5.92993L3.5 11.9999L9.57 18.0699", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M20.5 12H3.67004", stroke: "currentColor", key: "k1" }]
]);

export default ArrowLeftIcon;
