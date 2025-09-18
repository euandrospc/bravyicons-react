import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name PictureFrame
 * @description Renders Bravyicons PictureFrame svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const PictureFrame = createBravyIconsComponent("PictureFrame", [
    ["path", { d: "M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M9 2L13.95 22", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M11.53 12.22L2 15", stroke: "currentColor", key: "k2" }]
]);

export default PictureFrame;
