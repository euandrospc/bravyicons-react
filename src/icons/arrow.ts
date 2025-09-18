import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Arrow
 * @description Renders Bravyicons Arrow svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Arrow = createBravyIconsComponent("Arrow", [
    ["path", { d: "M12 22V20", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M12 18V16", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M12 14V11C12 7.13 15.13 4 19 4H22", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M2 4H5C8.87 4 12 7.13 12 11V12V14", stroke: "currentColor", key: "k3" }],
    ["path", { d: "M4 2L2 4L4 6", stroke: "currentColor", key: "k4" }],
    ["path", { d: "M20 2L22 4L20 6", stroke: "currentColor", key: "k5" }]
]);

export default Arrow;
