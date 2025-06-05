interface HelloProps {
  params: {
    id: string;
  };
}

const cardData = [
  { id: "1", title: "Card One", description: "This is the first card." },
  { id: "2", title: "Card Two", description: "This is the second card." },
  { id: "3", title: "Card Three", description: "This is the third card." },
];

export default function Hello({ params }: HelloProps) {
  const card = cardData.find((item) => item.id === params.id);

  if (!card) {
    return <h1 className="text-xl text-red-600">Card not found</h1>;
  }

  return (
    <div className="p-8 bg-gray-50 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-2">{card.title}</h1>
      <p className="text-gray-700">{card.description}</p>
    </div>
  );
}
