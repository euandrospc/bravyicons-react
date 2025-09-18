import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name MenuAlt
 * @description Renders Bravyicons MenuAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const MenuAlt = createBravyIconsComponent("MenuAlt", [
    ["path", { d: "M3 7H21", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M3 12H21", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M3 17H21", stroke: "currentColor", key: "k2" }]
]);

export default MenuAlt;
