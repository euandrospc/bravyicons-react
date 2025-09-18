import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name NoteText
 * @description Renders Bravyicons NoteText svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const NoteText = createBravyIconsComponent("NoteText", [
    ["path", { d: "M8 2V5", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M16 2V5", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M8 11H16", stroke: "currentColor", key: "k3" }],
    ["path", { d: "M8 16H12", stroke: "currentColor", key: "k4" }]
]);

export default NoteText;
