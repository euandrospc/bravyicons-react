import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Aave
 * @description Renders Bravyicons Aave svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Aave = createBravyIconsComponent("Aave", [
    ["path", { d: "M8 16L12 7L16 16", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M8 12H12", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", stroke: "currentColor", key: "k2" }]
]);

export default Aave;
