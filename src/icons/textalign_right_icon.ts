import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name TextalignRightIcon
 * @description Renders Bravyicons TextalignRightIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const TextalignRightIcon = createBravyIconsComponent("TextalignRightIcon", [
    ["path", { d: "M3 4.5H21", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M11.53 9.5H21", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M3 14.5H21", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M11.53 19.5H21", stroke: "currentColor", key: "k3" }]
]);

export default TextalignRightIcon;
