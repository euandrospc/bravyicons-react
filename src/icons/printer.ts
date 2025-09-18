import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Printer
 * @description Renders Bravyicons Printer svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Printer = createBravyIconsComponent("Printer", [
    ["path", { d: "M7.25 7H16.75V5C16.75 3 16 2 13.75 2H10.25C8 2 7.25 3 7.25 5V7Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M16 15V19C16 21 15 22 13 22H11C9 22 8 21 8 19V15H16Z", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M21 10V15C21 17 20 18 18 18H16V15H8V18H6C4 18 3 17 3 15V10C3 8 4 7 6 7H18C20 7 21 8 21 10Z", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M17 15H15.79H7", stroke: "currentColor", key: "k3" }],
    ["path", { d: "M7 11H10", stroke: "currentColor", key: "k4" }]
]);

export default Printer;
