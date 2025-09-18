import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name ArrowSquareLeft
 * @description Renders Bravyicons ArrowSquareLeft svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const ArrowSquareLeft = createBravyIconsComponent("ArrowSquareLeft", [
    ["path", { d: "M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M13.26 15.53L9.73999 12L13.26 8.46997", stroke: "currentColor", key: "k1" }]
]);

export default ArrowSquareLeft;
