import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Filter2Icon
 * @description Renders Bravyicons Filter2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Filter2Icon = createBravyIconsComponent("Filter2Icon", [
    ["path", { d: "M1 4H15", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M4 8H12", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M6 12H10", stroke: "currentColor", key: "k2" }]
]);

export default Filter2Icon;
