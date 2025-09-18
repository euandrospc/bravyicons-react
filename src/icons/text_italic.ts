import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name TextItalic
 * @description Renders Bravyicons TextItalic svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const TextItalic = createBravyIconsComponent("TextItalic", [
    ["path", { d: "M9.62012 3H18.8701", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M5.12012 21H14.3701", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M14.25 3L9.75 21", stroke: "currentColor", key: "k2" }]
]);

export default TextItalic;
