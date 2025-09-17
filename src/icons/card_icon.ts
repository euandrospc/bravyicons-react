import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name CardIcon
 * @description Renders Bravyicons CardIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const CardIcon = createBravyIconsComponent("CardIcon", [
    ["path", { d: "M2 8.50488H22", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M6 16.5049H8", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M10.5 16.5049H14.5", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M6.44 3.50488H17.55C21.11 3.50488 22 4.38488 22 7.89488V16.1049C22 19.6149 21.11 20.4949 17.56 20.4949H6.44C2.89 20.5049 2 19.6249 2 16.1149V7.89488C2 4.38488 2.89 3.50488 6.44 3.50488Z", stroke: "currentColor", key: "k3" }]
]);

export default CardIcon;
