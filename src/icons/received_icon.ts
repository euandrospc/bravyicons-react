import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name ReceivedIcon
 * @description Renders Bravyicons ReceivedIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const ReceivedIcon = createBravyIconsComponent("ReceivedIcon", [
    ["path", { d: "M5 17.5L19 3.5", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M5 7.22998V17.5H15.27", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M3.5 22H20.5", stroke: "currentColor", key: "k2" }]
]);

export default ReceivedIcon;
