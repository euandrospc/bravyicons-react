import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Slash
 * @description Renders Bravyicons Slash svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Slash = createBravyIconsComponent("Slash", [
    ["path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M18.9 5L4.90002 19", stroke: "currentColor", key: "k1" }]
]);

export default Slash;
