import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Link1Icon
 * @description Renders Bravyicons Link1Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Link1Icon = createBravyIconsComponent("Link1Icon", [
    ["path", { d: "M14.99 17.5H16.5C19.52 17.5 22 15.03 22 12C22 8.98 19.53 6.5 16.5 6.5H14.99", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M9 6.5H7.5C4.47 6.5 2 8.97 2 12C2 15.02 4.47 17.5 7.5 17.5H9", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M8 12H16", stroke: "currentColor", key: "k2" }]
]);

export default Link1Icon;
