import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Plus
 * @description Renders Bravyicons Plus svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Plus = createBravyIconsComponent("Plus", [
    ["path", { d: "M1 8H15", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M8 15L8 1", stroke: "currentColor", key: "k1" }]
]);

export default Plus;
