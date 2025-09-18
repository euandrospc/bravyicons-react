import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name CreditCardPlus
 * @description Renders Bravyicons CreditCardPlus svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const CreditCardPlus = createBravyIconsComponent("CreditCardPlus", [
    ["rect", { x: "0.600098", y: "3", width: "14.8", height: "10", rx: "1", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M8.3999 10H13.3999", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M8.3999 8H13.3999", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M8.3999 6H10.3999", stroke: "currentColor", key: "k3" }],
    ["path", { d: "M2.5 8H6.5", stroke: "currentColor", key: "k4" }],
    ["path", { d: "M4.5 6L4.5 10", stroke: "currentColor", key: "k5" }]
]);

export default CreditCardPlus;
