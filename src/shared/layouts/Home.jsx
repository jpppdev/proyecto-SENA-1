import imghome from "@/assets/images/Img-Home.png";
import fondoHome from "@/assets/images/Img-Restaurante.jpeg";
import { Button } from "@/shared";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section
      className="min-h-[calc(100vh-64px)] bg-cover bg-center flex items-center justify-center px-8"
      style={{
        backgroundImage: `url(${fondoHome})`,
      }}
    >

      {/* TARJETA PRINCIPAL */}
      <div className="relative w-full max-w-[1150px] h-[520px] rounded-4xl overflow-hidden">

        {/* FONDO BORROSO DE LA TARJETA */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-md scale-110"
          style={{
            backgroundImage: `url(${fondoHome})`,
          }}
        ></div>

        {/* CONTENIDO */}
        <div className="relative z-10 flex items-center h-full px-16">

          {/* TEXTO */}
          <div className="w-1/2">

            <h2 className="text-main font-heading text-text-inverse mb-4">
              Plato De La Casa
            </h2>

            <h1 className="text-title font-heading text-text-inverse">
              SALMON
            </h1>

            <h3 className="text-title font-heading text-text-inverse mt-2">
              Rebosado
            </h3>

            <div className="flex items-center gap-8 mt-10">

              <Button
                variant="primary"
                onClick={() => navigate("/create-order")}
              >
                ORDENAR
              </Button>

              <span className="text-subtitle font-heading text-text-inverse">
                $ 50.000
              </span>

            </div>

          </div>

          {/* IMAGEN DEL PLATO */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-[480px]">
            <img
              src={imghome}
              alt="Salmón rebosado"
              className="w-full h-auto object-contain"
            />
          </div>

        </div>
      </div>

    </section>
  );
}