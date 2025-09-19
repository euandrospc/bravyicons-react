import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name DotsMenu
 * @description Renders Bravyicons DotsMenu svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const DotsMenu = createBravyIconsComponent("DotsMenu", [
    ["g", { clipPath: "url(#clip0_4547_1103)", key: "k0" }],
    ["rect", { x: "6", width: "4", height: "4", rx: "2", fill: "currentColor", key: "k1" }],
    ["rect", { x: "6", y: "6", width: "4", height: "4", rx: "2", fill: "currentColor", key: "k2" }],
    ["rect", { x: "6", y: "12", width: "4", height: "4", rx: "2", fill: "currentColor", key: "k3" }],
    ["defs", { key: "k4" }],
    ["clipPath", { id: "clip0_4547_1103", key: "k5" }],
    ["rect", { width: "16", height: "16", fill: "white", key: "k6" }]
]);

export default DotsMenu;
