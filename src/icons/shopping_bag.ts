import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name ShoppingBag
 * @description Renders Bravyicons ShoppingBag svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const ShoppingBag = createBravyIconsComponent("ShoppingBag", [
    ["path", { d: "M8.39999 6.5H15.6C19 6.5 19.34 8.09 19.57 10.03L20.47 17.53C20.76 19.99 20 22 16.5 22H7.50999C3.99999 22 3.23999 19.99 3.53999 17.53L4.44 10.03C4.66 8.09 4.99999 6.5 8.39999 6.5Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M8 8V4.5C8 3 9 2 10.5 2H13.5C15 2 16 3 16 4.5V8", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M20.41 17.03H8", stroke: "currentColor", key: "k2" }]
]);

export default ShoppingBag;
