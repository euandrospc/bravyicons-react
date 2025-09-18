import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name AddCircle
 * @description Renders Bravyicons AddCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const AddCircle = createBravyIconsComponent("AddCircle", [
    ["path", { d: "M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M8 12H16", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M12 16V8", stroke: "currentColor", key: "k2" }]
]);

export default AddCircle;
