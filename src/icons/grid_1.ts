import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Grid1
 * @description Renders Bravyicons Grid1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Grid1 = createBravyIconsComponent("Grid1", [
    ["path", { d: "M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M2.03 8.5H22", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M2.03 15.5H22", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M8.51 21.99V2.01001", stroke: "currentColor", key: "k3" }],
    ["path", { d: "M15.51 21.99V2.01001", stroke: "currentColor", key: "k4" }]
]);

export default Grid1;
