export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Create Next App</title>
        <meta name="description" content="Git Blog" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
