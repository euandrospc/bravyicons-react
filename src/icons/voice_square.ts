import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name VoiceSquare
 * @description Renders Bravyicons VoiceSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const VoiceSquare = createBravyIconsComponent("VoiceSquare", [
    ["path", { d: "M6 9.85986V14.1499", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M9 8.42993V15.5699", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M12 7V17", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M15 8.42993V15.5699", stroke: "currentColor", key: "k3" }],
    ["path", { d: "M18 9.85986V14.1499", stroke: "currentColor", key: "k4" }],
    ["path", { d: "M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z", stroke: "currentColor", key: "k5" }]
]);

export default VoiceSquare;
