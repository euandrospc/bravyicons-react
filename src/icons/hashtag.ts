import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Hashtag
 * @description Renders Bravyicons Hashtag svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Hashtag = createBravyIconsComponent("Hashtag", [
    ["path", { d: "M10 3L8 21", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M16 3L14 21", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M3.5 9H21.5", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M2.5 15H20.5", stroke: "currentColor", key: "k3" }]
]);

export default Hashtag;
