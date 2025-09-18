import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Note1
 * @description Renders Bravyicons Note1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Note1 = createBravyIconsComponent("Note1", [
    ["path", { d: "M8 2V5", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M16 2V5", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M7 13H15", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M7 17H12", stroke: "currentColor", key: "k3" }],
    ["path", { d: "M16 3.5C19.33 3.68 21 4.95 21 9.65V15.83C21 19.95 20 22.01 15 22.01H9C4 22.01 3 19.95 3 15.83V9.65C3 4.95 4.67 3.69 8 3.5H16Z", stroke: "currentColor", key: "k4" }]
]);

export default Note1;
