import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name ArrowSquareRight
 * @description Renders Bravyicons ArrowSquareRight svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const ArrowSquareRight = createBravyIconsComponent("ArrowSquareRight", [
    ["path", { d: "M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M10.74 15.53L14.26 12L10.74 8.46997", stroke: "currentColor", key: "k1" }]
]);

export default ArrowSquareRight;
