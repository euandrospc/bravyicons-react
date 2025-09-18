import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Arrow2Icon
 * @description Renders Bravyicons Arrow2Icon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Arrow2Icon = createBravyIconsComponent("Arrow2Icon", [
    ["path", { d: "M17.28 10.45L21 6.72998L17.28 3.01001", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M3 6.72998H21", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M6.71997 13.55L3 17.2701L6.71997 20.9901", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M21 17.27H3", stroke: "currentColor", key: "k3" }]
]);

export default Arrow2Icon;
