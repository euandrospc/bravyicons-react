import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name TextalignLeftIcon
 * @description Renders Bravyicons TextalignLeftIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const TextalignLeftIcon = createBravyIconsComponent("TextalignLeftIcon", [
    ["path", { d: "M3 4.5H21", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M3 9.5H12.47", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M3 14.5H21", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M3 19.5H12.47", stroke: "currentColor", key: "k3" }]
]);

export default TextalignLeftIcon;
