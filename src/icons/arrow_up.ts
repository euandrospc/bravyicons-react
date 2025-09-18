import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name ArrowUp
 * @description Renders Bravyicons ArrowUp svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const ArrowUp = createBravyIconsComponent("ArrowUp", [
    ["path", { d: "M18.0701 9.57L12.0001 3.5L5.93005 9.57", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M12 20.4999V3.66992", stroke: "currentColor", key: "k1" }]
]);

export default ArrowUp;
