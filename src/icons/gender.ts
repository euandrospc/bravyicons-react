import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Gender
 * @description Renders Bravyicons Gender svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Gender = createBravyIconsComponent("Gender", [
    ["rect", { x: "0.600098", y: "0.600098", width: "6", height: "6", rx: "3", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M3.6001 6.90015V15.4001", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M1.1001 12.4001H6.1001", stroke: "currentColor", key: "k2" }],
    ["rect", { x: "9.3999", y: "9.40015", width: "6", height: "6", rx: "3", stroke: "currentColor", key: "k3" }],
    ["path", { d: "M12.3999 0.600098V9.1001", stroke: "currentColor", key: "k4" }],
    ["path", { d: "M9.3999 3.6001L12.3999 0.600098L15.3999 3.6001", stroke: "currentColor", key: "k5" }]
]);

export default Gender;
