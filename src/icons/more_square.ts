import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name MoreSquare
 * @description Renders Bravyicons MoreSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const MoreSquare = createBravyIconsComponent("MoreSquare", [
    ["path", { d: "M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M15.9965 12H16.0054", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M11.9955 12H12.0045", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M7.99451 12H8.00349", stroke: "currentColor", key: "k3" }]
]);

export default MoreSquare;
