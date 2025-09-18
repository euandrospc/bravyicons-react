import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Sort
 * @description Renders Bravyicons Sort svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Sort = createBravyIconsComponent("Sort", [
    ["path", { d: "M3 7H21", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M6 12H18", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M10 17H14", stroke: "currentColor", key: "k2" }]
]);

export default Sort;
