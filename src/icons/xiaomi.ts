import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Xiaomi
 * @description Renders Bravyicons Xiaomi svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Xiaomi = createBravyIconsComponent("Xiaomi", [
    ["path", { d: "M7.5 15V9H11.5C12.6 9 13.5 9.9 13.5 11V15", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M10.5 15V12", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M16.5 15V9", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", stroke: "currentColor", key: "k3" }]
]);

export default Xiaomi;
