import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name BackIconsUia
 * @description Renders Bravyicons BackIconsUia svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const BackIconsUia = createBravyIconsComponent("BackIconsUia", [
    ["path", { d: "M1 8H12", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M1 8L5.24264 12.2426", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M1 8L5.24264 3.75736", stroke: "currentColor", key: "k2" }]
]);

export default BackIconsUia;
