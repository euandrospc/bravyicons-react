import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Windows
 * @description Renders Bravyicons Windows svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Windows = createBravyIconsComponent("Windows", [
    ["path", { d: "M22 2L12 4V11H22V2Z", stroke: "currentColor", fillRule: "evenodd", key: "k0" }],
    ["path", { d: "M22 22L12 20V13H22V22Z", stroke: "currentColor", fillRule: "evenodd", key: "k1" }],
    ["path", { d: "M10 4.30005L2 6.00005V11H10V4.30005Z", stroke: "currentColor", fillRule: "evenodd", key: "k2" }],
    ["path", { d: "M10 19.7L2 18V13H10V19.7Z", stroke: "currentColor", fillRule: "evenodd", key: "k3" }]
]);

export default Windows;
