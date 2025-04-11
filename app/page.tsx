import Card from "@/components/Card";

export default async function Home() {
  const data = await fetch('https://api.thecatapi.com/v1/images/search');
  const posts = await data.json();

  const cat = await fetch('https://api.thecatapi.com/v1/images/0XYvRd7oD');
  const catData = await cat.json();

  console.log("data", catData);

  return (
    <>
      <Card cardData={catData} />
    </>
  );
}

