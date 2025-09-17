import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name MenuIcon
 * @description Renders Bravyicons MenuIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const MenuIcon = createBravyIconsComponent("MenuIcon", [
    ["path", { d: "M1 8H15", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M1 14H15", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M1 2H15", stroke: "currentColor", key: "k2" }]
]);

export default MenuIcon;
