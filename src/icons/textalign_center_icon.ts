import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name TextalignCenterIcon
 * @description Renders Bravyicons TextalignCenterIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const TextalignCenterIcon = createBravyIconsComponent("TextalignCenterIcon", [
    ["path", { d: "M3 4.5H21", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M7.26001 9.5H16.74", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M3 14.5H21", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M7.26001 19.5H16.74", stroke: "currentColor", key: "k3" }]
]);

export default TextalignCenterIcon;
