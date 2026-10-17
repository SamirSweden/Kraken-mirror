import Header from "../components/shared/header/Header";

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  

  return (
    <>
    <Header />
      {children}
    </>
  );
}
