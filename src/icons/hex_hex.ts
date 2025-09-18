import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name HexHex
 * @description Renders Bravyicons HexHex svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const HexHex = createBravyIconsComponent("HexHex", [
    ["path", { d: "M17 3.30005H7L2 12L7 20.7001H17L22 12L17 3.30005Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M10.9001 14H7.0001L5.1001 17.3L7.0001 20.7H10.9001L12.8001 17.3L10.9001 14Z", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M14.2999 8H6.9999L3.3999 14.3L6.9999 20.7H14.2999L17.9999 14.3L14.2999 8Z", stroke: "currentColor", key: "k2" }]
]);

export default HexHex;
