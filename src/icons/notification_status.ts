import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name NotificationStatus
 * @description Renders Bravyicons NotificationStatus svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const NotificationStatus = createBravyIconsComponent("NotificationStatus", [
    ["path", { d: "M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M7 13H12", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M7 17H16", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M14 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10", stroke: "currentColor", key: "k3" }]
]);

export default NotificationStatus;
