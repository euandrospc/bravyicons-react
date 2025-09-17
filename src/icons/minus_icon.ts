import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name MinusIcon
 * @description Renders Bravyicons MinusIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const MinusIcon = createBravyIconsComponent("MinusIcon", [
    ["path", { d: "M1 8H15", stroke: "currentColor", key: "k0" }]
]);

export default MinusIcon;
