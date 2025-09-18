import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Amount
 * @description Renders Bravyicons Amount svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Amount = createBravyIconsComponent("Amount", [
    ["path", { d: "M2 3.5C2 2.39543 2.89543 1.5 4 1.5H12C13.1046 1.5 14 2.39543 14 3.5V16.5L12 14.5L10 16.5L8 14.5L6 16.5L4 14.5L2 16.5V3.5Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M4 5.5H8", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M4 8.5H12", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M4 11.5H12", stroke: "currentColor", key: "k3" }]
]);

export default Amount;
