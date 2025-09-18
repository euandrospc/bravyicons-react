import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Menu
 * @description Renders Bravyicons Menu svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Menu = createBravyIconsComponent("Menu", [
    ["path", { d: "M1 8H15", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M1 14H15", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M1 2H15", stroke: "currentColor", key: "k2" }]
]);

export default Menu;
