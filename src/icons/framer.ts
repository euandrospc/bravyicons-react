import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Framer
 * @description Renders Bravyicons Framer svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Framer = createBravyIconsComponent("Framer", [
    ["path", { d: "M5 2L19 16H5V9H19V2H5Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M12 16V22L5 16H12Z", stroke: "currentColor", key: "k1" }]
]);

export default Framer;
