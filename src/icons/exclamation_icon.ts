import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name ExclamationIcon
 * @description Renders Bravyicons ExclamationIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const ExclamationIcon = createBravyIconsComponent("ExclamationIcon", [
    ["path", { d: "M8 4.5V9", stroke: "currentColor", key: "k0" }],
    ["circle", { cx: "8", cy: "11.25", r: "0.75", fill: "currentColor", key: "k1" }],
    ["path", { d: "M15.3499 7.9999C15.3499 3.94061 12.0592 0.649902 7.9999 0.649902C3.94061 0.649902 0.649902 3.94061 0.649902 7.9999C0.649902 12.0592 3.94061 15.3499 7.9999 15.3499C12.0592 15.3499 15.3499 12.0592 15.3499 7.9999Z", stroke: "currentColor", key: "k2" }]
]);

export default ExclamationIcon;
