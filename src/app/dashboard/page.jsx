export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const res = await fetch("https://api.example.com/user", {
    cache: "no-store",
  });
  const data = await res.json();

  return <p>Total Notes: {data.count}</p>;
}
