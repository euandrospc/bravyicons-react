import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name TriangleAlt
 * @description Renders Bravyicons TriangleAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const TriangleAlt = createBravyIconsComponent("TriangleAlt", [
    ["path", { d: "M10.8999 2L0.899902 12L10.8999 22V18L4.8999 12L10.8999 6V2Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M12.8999 2L22.8999 12L12.8999 22V18L18.8999 12L12.8999 6V2Z", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M10.8999 9L7.8999 12L10.8999 15V9Z", stroke: "currentColor", key: "k2" }]
]);

export default TriangleAlt;
