import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Minus
 * @description Renders Bravyicons Minus svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Minus = createBravyIconsComponent("Minus", [
    ["path", { d: "M1 8H15", stroke: "currentColor", key: "k0" }]
]);

export default Minus;
