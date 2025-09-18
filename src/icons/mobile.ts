import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Mobile
 * @description Renders Bravyicons Mobile svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Mobile = createBravyIconsComponent("Mobile", [
    ["path", { d: "M17 6V16C17 20 16 21 12 21H6C2 21 1 20 1 16V6C1 2 2 1 6 1H12C16 1 17 2 17 6Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M11 4.5H7", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M8.99995 18.1C9.85599 18.1 10.55 17.406 10.55 16.55C10.55 15.694 9.85599 15 8.99995 15C8.14391 15 7.44995 15.694 7.44995 16.55C7.44995 17.406 8.14391 18.1 8.99995 18.1Z", stroke: "currentColor", key: "k2" }]
]);

export default Mobile;
