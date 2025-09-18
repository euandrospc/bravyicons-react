import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Book
 * @description Renders Bravyicons Book svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Book = createBravyIconsComponent("Book", [
    ["path", { d: "M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M8 7H16", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M8 10.5H13", stroke: "currentColor", key: "k3" }]
]);

export default Book;
