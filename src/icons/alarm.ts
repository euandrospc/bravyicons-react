import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Alarm
 * @description Renders Bravyicons Alarm svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Alarm = createBravyIconsComponent("Alarm", [
    ["path", { d: "M2 22H22", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M12 6C7.03 6 3 10.03 3 15V22H21V15C21 10.03 16.97 6 12 6Z", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M12 2V3", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M4 4L5 5", stroke: "currentColor", key: "k3" }],
    ["path", { d: "M20 4L19 5", stroke: "currentColor", key: "k4" }]
]);

export default Alarm;
