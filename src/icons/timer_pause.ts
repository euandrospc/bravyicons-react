import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name TimerPause
 * @description Renders Bravyicons TimerPause svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const TimerPause = createBravyIconsComponent("TimerPause", [
    ["path", { d: "M12 22C7.17 22 3.25 18.08 3.25 13.25C3.25 8.42 7.17 4.5 12 4.5C16.83 4.5 20.75 8.42 20.75 13.25", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M12 8V13", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M9 2H15", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M19 17V21", stroke: "currentColor", key: "k3" }],
    ["path", { d: "M16 17V21", stroke: "currentColor", key: "k4" }]
]);

export default TimerPause;
