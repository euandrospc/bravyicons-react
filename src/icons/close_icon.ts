import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name CloseIcon
 * @description Renders Bravyicons CloseIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const CloseIcon = createBravyIconsComponent("CloseIcon", [
    ["path", { d: "M1 1L15.2418 15.0418", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M15.2417 1L0.999904 15.0418", stroke: "currentColor", key: "k1" }]
]);

export default CloseIcon;
