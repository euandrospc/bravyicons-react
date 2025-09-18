import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name MoreCircle
 * @description Renders Bravyicons MoreCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const MoreCircle = createBravyIconsComponent("MoreCircle", [
    ["path", { d: "M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M15.9965 12H16.0054", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M11.9955 12H12.0045", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M7.99451 12H8.00349", stroke: "currentColor", key: "k3" }]
]);

export default MoreCircle;
