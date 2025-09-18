import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Sagittarius
 * @description Renders Bravyicons Sagittarius svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Sagittarius = createBravyIconsComponent("Sagittarius", [
    ["path", { d: "M12 3H21V12", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M21 3L3 21", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M6.6001 6.59998L17.4001 17.4", stroke: "currentColor", key: "k2" }]
]);

export default Sagittarius;
