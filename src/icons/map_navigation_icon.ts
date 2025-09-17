import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name MapNavigationIcon
 * @description Renders Bravyicons MapNavigationIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const MapNavigationIcon = createBravyIconsComponent("MapNavigationIcon", [
    ["path", { d: "M8.992 15.0043V7.00169H1L15 1L8.992 15.0043Z", stroke: "currentColor", key: "k0" }]
]);

export default MapNavigationIcon;
