import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name StopIcon
 * @description Renders Bravyicons StopIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const StopIcon = createBravyIconsComponent("StopIcon", [
    ["path", { d: "M9.3 21H14.7C19.2 21 21 19.2 21 14.7V9.3C21 4.8 19.2 3 14.7 3H9.3C4.8 3 3 4.8 3 9.3V14.7C3 19.2 4.8 21 9.3 21Z", stroke: "currentColor", key: "k0" }]
]);

export default StopIcon;
