import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name CardAdd
 * @description Renders Bravyicons CardAdd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const CardAdd = createBravyIconsComponent("CardAdd", [
    ["path", { d: "M2 8.5H13.5", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M6 16.5H8", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M10.5 16.5H14.5", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M22 12.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H13.5", stroke: "currentColor", key: "k3" }],
    ["path", { d: "M16.5 6.25H22", stroke: "currentColor", key: "k4" }],
    ["path", { d: "M19.25 9V3.5", stroke: "currentColor", key: "k5" }]
]);

export default CardAdd;
