import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Equal
 * @description Renders Bravyicons Equal svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Equal = createBravyIconsComponent("Equal", [
    ["path", { d: "M1 11H15", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M1 5H15", stroke: "currentColor", key: "k1" }]
]);

export default Equal;
