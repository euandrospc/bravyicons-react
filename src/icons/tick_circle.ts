import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name TickCircle
 * @description Renders Bravyicons TickCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const TickCircle = createBravyIconsComponent("TickCircle", [
    ["path", { d: "M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M7.75 12L10.58 14.83L16.25 9.17004", stroke: "currentColor", key: "k1" }]
]);

export default TickCircle;
