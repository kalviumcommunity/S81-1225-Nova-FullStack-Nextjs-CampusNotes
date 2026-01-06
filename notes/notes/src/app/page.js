export default function Home() {
  return (
    <main>
      <h1>Environment Aware App</h1>
      <p>API URL: {process.env.NEXT_PUBLIC_API_URL}</p>
    </main>
  );
}
