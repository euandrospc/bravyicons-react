import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Twitch
 * @description Renders Bravyicons Twitch svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Twitch = createBravyIconsComponent("Twitch", [
    ["path", { d: "M4.5 2H21.5V14L16.5 19H11.5L9.5 22H6.5V19H2.5V5L4.5 2Z", stroke: "currentColor", fillRule: "evenodd", key: "k0" }],
    ["path", { d: "M11 7H9V13H11V7Z", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M16 7H14V13H16V7Z", stroke: "currentColor", key: "k2" }]
]);

export default Twitch;
