import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Sound
 * @description Renders Bravyicons Sound svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Sound = createBravyIconsComponent("Sound", [
    ["path", { d: "M3 8.25V15.75", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M7.5 5.75V18.25", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M12 3.25V20.75", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M16.5 5.75V18.25", stroke: "currentColor", key: "k3" }],
    ["path", { d: "M21 8.25V15.75", stroke: "currentColor", key: "k4" }]
]);

export default Sound;
