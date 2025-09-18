import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name ReceiveSquareIcon
 * @description Renders Bravyicons ReceiveSquareIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const ReceiveSquareIcon = createBravyIconsComponent("ReceiveSquareIcon", [
    ["path", { d: "M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M9 11.51L12 14.51L15 11.51", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M12 14.51V6.51001", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M6 16.51C9.89 17.81 14.11 17.81 18 16.51", stroke: "currentColor", key: "k3" }]
]);

export default ReceiveSquareIcon;
