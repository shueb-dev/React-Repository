export function Products() {
  const Products = [
    {
      name: "Labtop",
      Price: 899,
      isAvailable: true,
    },
    {
      name: "Headphones",
      Price: 49,
      isAvailable: true,
    },
    {
      name: "Keyboard",
      price: 200,
      isAvailable: false,
    },
    {
      name: "Monitor",
      Price: 299,
      isAvailable: true,
    },
  ];
  return (
    <div className="products">
      <ul>
        {Products.map((p) => (
          <li>
            {p.name} {p.isAvailable ? " = " + "$" + p.Price : " -" + " Soldout"}
          </li>
        ))}
      </ul>
    </div>
  );
}
