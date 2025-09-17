import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name EqualIcon
 * @description Renders Bravyicons EqualIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const EqualIcon = createBravyIconsComponent("EqualIcon", [
    ["path", { d: "M1 11H15", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M1 5H15", stroke: "currentColor", key: "k1" }]
]);

export default EqualIcon;
