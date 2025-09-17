import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name EmailIcon
 * @description Renders Bravyicons EmailIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const EmailIcon = createBravyIconsComponent("EmailIcon", [
    ["rect", { x: "0.600098", y: "3", width: "14.8", height: "10", rx: "1", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M15 3.5L8.58124 8.08483C8.23354 8.33319 7.76646 8.33319 7.41876 8.08483L1 3.5", stroke: "currentColor", key: "k1" }]
]);

export default EmailIcon;
