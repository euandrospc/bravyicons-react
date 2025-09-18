import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name MicrophoneIcon
 * @description Renders Bravyicons MicrophoneIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const MicrophoneIcon = createBravyIconsComponent("MicrophoneIcon", [
    ["path", { d: "M12 19C15.31 19 18 16.31 18 13V8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8V13C6 16.31 8.69 19 12 19Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M3 11V13C3 17.97 7.03 22 12 22C16.97 22 21 17.97 21 13V11", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M9.11011 7.47993C10.8901 6.82993 12.8301 6.82993 14.6101 7.47993", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M10.03 10.4799C11.23 10.1499 12.5 10.1499 13.7 10.4799", stroke: "currentColor", key: "k3" }]
]);

export default MicrophoneIcon;
