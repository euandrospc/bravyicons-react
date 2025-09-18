import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Task
 * @description Renders Bravyicons Task svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Task = createBravyIconsComponent("Task", [
    ["path", { d: "M11 19.5H21", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M11 12.5H21", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M11 5.5H21", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M3 5.5L4 6.5L7 3.5", stroke: "currentColor", key: "k3" }],
    ["path", { d: "M3 12.5L4 13.5L7 10.5", stroke: "currentColor", key: "k4" }],
    ["path", { d: "M3 19.5L4 20.5L7 17.5", stroke: "currentColor", key: "k5" }]
]);

export default Task;
