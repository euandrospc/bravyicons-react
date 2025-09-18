import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Add
 * @description Renders Bravyicons Add svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Add = createBravyIconsComponent("Add", [
    ["path", { d: "M6 12H18", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M12 18V6", stroke: "currentColor", key: "k1" }]
]);

export default Add;
