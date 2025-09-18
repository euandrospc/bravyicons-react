import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Dropbox
 * @description Renders Bravyicons Dropbox svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Dropbox = createBravyIconsComponent("Dropbox", [
    ["path", { d: "M12 5L7.6 2L2 6L6.4 9L12 5Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M12 5L16.4 2L22 6L17.6 9L12 5Z", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M12 14L7.6 17L2 13L6.4 10L12 14Z", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M12 14L16.4 17L22 13L17.6 10L12 14Z", stroke: "currentColor", key: "k3" }],
    ["path", { d: "M19 15.5V18.8L12.4 21.8C12.1 21.9 11.8 21.9 11.6 21.8L5 18.8V15.5", stroke: "currentColor", key: "k4" }]
]);

export default Dropbox;
