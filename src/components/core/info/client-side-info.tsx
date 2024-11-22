export function ClientSideInfo() {
  return (
    <section className="space-y-2">
      <h2 className="text-lg font-semibold">Client-Side Processing</h2>
      <p className="text-muted-foreground">
        This application runs entirely on the client side, which means:
      </p>
      <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
        <li>All data is stored in your browser&apos;s memory</li>
        <li>Refreshing the page will reset all counters</li>
        <li>The clear data button will reset everything to initial state</li>
        <li>Data only becomes visible after the first update</li>
      </ul>
    </section>
  );
}
