import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Backarrow
 * @description Renders Bravyicons Backarrow svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Backarrow = createBravyIconsComponent("Backarrow", [
    ["path", { d: "M10 3L5 8L10 13", stroke: "currentColor", key: "k0" }]
]);

export default Backarrow;
