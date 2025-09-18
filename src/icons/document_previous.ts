import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name DocumentPrevious
 * @description Renders Bravyicons DocumentPrevious svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const DocumentPrevious = createBravyIconsComponent("DocumentPrevious", [
    ["path", { d: "M13 15H7L9 17", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M7 15L9 13", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M22 10H18C15 10 14 9 14 6V2L18 6L22 10Z", stroke: "currentColor", key: "k3" }]
]);

export default DocumentPrevious;
