import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Frame
 * @description Renders Bravyicons Frame svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Frame = createBravyIconsComponent("Frame", [
    ["path", { d: "M17.23 20.77L20.77 17.23", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M20.77 20.77L17.23 17.23", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M7 10.5V13.5", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M12 10.5V13.5", stroke: "currentColor", key: "k3" }],
    ["path", { d: "M17 10.5V13.5", stroke: "currentColor", key: "k4" }],
    ["path", { d: "M22 13V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H13", stroke: "currentColor", key: "k5" }]
]);

export default Frame;
