import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name DocumentText
 * @description Renders Bravyicons DocumentText svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const DocumentText = createBravyIconsComponent("DocumentText", [
    ["path", { d: "M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M8 13H12", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M8 17H16", stroke: "currentColor", key: "k3" }]
]);

export default DocumentText;
