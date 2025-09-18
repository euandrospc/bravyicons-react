import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name FrameAlt
 * @description Renders Bravyicons FrameAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const FrameAlt = createBravyIconsComponent("FrameAlt", [
    ["path", { d: "M11 5V8H9C8.4 8 8 8.4 8 9V11H5V9C5 6.8 6.8 5 9 5H11Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M13 19V16H15C15.6 16 16 15.6 16 15V13H19V15C19 17.2 17.2 19 15 19H13Z", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z", stroke: "currentColor", key: "k2" }]
]);

export default FrameAlt;
