import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name CreditCardIcon
 * @description Renders Bravyicons CreditCardIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const CreditCardIcon = createBravyIconsComponent("CreditCardIcon", [
    ["rect", { x: "0.600098", y: "3", width: "14.8", height: "10", rx: "1", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M2 11H4", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M6 11H9", stroke: "currentColor", key: "k2" }],
    ["rect", { x: "1.5", y: "5.5", width: "13", height: "1", fill: "currentColor", stroke: "currentColor", key: "k3" }]
]);

export default CreditCardIcon;
