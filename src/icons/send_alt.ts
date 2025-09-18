import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name SendAlt
 * @description Renders Bravyicons SendAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const SendAlt = createBravyIconsComponent("SendAlt", [
    ["path", { d: "M3.5 22H20.5", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M5 3.5L19 17.5", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M5 13.77V3.5H15.27", stroke: "currentColor", key: "k2" }]
]);

export default SendAlt;
