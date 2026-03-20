import { ButtonNav } from "./Components";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center px-4">
        <h1 className="text-8xl lg:text-9xl mb-4">404</h1>
        <h2 className="text-3xl lg:text-4xl">
          Pagína não
          <span className="text-white/40 ml-2">encontrada</span>
        </h2>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida.
        </p>
        <ButtonNav color="white" path="/">
          Voltar para início
        </ButtonNav>
      </div>
    </div>
  );
};

export default NotFound;
