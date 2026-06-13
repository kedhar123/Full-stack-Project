import Product from "./featuredProducts/page";
import ProductPage from "./products/page";
import ClientsWordPage from "./clientsWord/page";

export default function Home() {
  return (
    <>
      <div className="relative h-screen flex flex-col justify-center items-start overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/SBE.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Product />
      <ClientsWordPage />
    </>
  );
}
