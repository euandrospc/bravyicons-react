import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name TextUnderlineIcon
 * @description Renders Bravyicons TextUnderlineIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const TextUnderlineIcon = createBravyIconsComponent("TextUnderlineIcon", [
    ["path", { d: "M5 21H19", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M5 3V10C5 13.87 8.13 17 12 17C15.87 17 19 13.87 19 10V3", stroke: "currentColor", key: "k1" }]
]);

export default TextUnderlineIcon;
