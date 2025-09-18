import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name MinusAlt
 * @description Renders Bravyicons MinusAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const MinusAlt = createBravyIconsComponent("MinusAlt", [
    ["path", { d: "M6 12H18", stroke: "currentColor", key: "k0" }]
]);

export default MinusAlt;
