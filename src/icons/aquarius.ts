import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Aquarius
 * @description Renders Bravyicons Aquarius svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Aquarius = createBravyIconsComponent("Aquarius", [
    ["path", { d: "M12 16C15.87 16 19 12.87 19 9C19 5.13 15.87 2 12 2C8.13 2 5 5.13 5 9", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M12 16V22", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M15 19H9", stroke: "currentColor", key: "k2" }]
]);

export default Aquarius;
