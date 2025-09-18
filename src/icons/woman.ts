import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Woman
 * @description Renders Bravyicons Woman svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Woman = createBravyIconsComponent("Woman", [
    ["path", { d: "M12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 12.866 8.13401 16 12 16Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M12 16V22", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M15 19H9", stroke: "currentColor", key: "k2" }]
]);

export default Woman;
