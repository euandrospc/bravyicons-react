import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name RadioIcon
 * @description Renders Bravyicons RadioIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const RadioIcon = createBravyIconsComponent("RadioIcon", [
    ["rect", { x: "1", y: "1", width: "14", height: "14", rx: "7", stroke: "currentColor", key: "k0" }],
    ["rect", { x: "4", y: "4", width: "8", height: "8", rx: "4", stroke: "currentColor", key: "k1" }]
]);

export default RadioIcon;
