import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Frame1Icon
 * @description Renders Bravyicons Frame1Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Frame1Icon = createBravyIconsComponent("Frame1Icon", [
    ["path", { d: "M9.00999 20.5L3.98999 15.49", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M9.01001 3.5V20.5", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M14.99 3.5L20.01 8.51", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M14.99 20.5V3.5", stroke: "currentColor", key: "k3" }]
]);

export default Frame1Icon;
