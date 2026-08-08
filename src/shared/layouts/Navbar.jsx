import { useState } from "react";
import { Menu } from "lucide-react";
import {
  // IconButton,
  IconButton,
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  SearchField,
} from "@/shared";
import  logo  from "@/assets/images/Img-Titulo.png";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar(){

  // Componente de búsqueda 😂😂😂
  const [search, setSearch] = useState("");

   const navigate = useNavigate();

  const handleSearch = (value) => {
    console.log("Buscar:", value);
  };


  const handleClear = () => {
    console.log("Campo limpiado");
  };

    return (
      <nav className="w-full bg-transparent border-b-2">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo de marca */}
            <div className=" hidden sm:block items-center">
              <Link to="/dashboard" className="text-h1 font-heading">
                <img src={logo} alt="logo" className="h-24" />
              </Link>
            </div>


            {/* Links de navegación */}
            <ul 
            className="hidden md:flex items-center gap-6">
              
              <li>
                <Link to={"/home"} className="hover:text-primary transition">
                  Inicio
                </Link>
              </li>

              <li>
                <Link to={"/create-provider"} className="hover:text-primary transition">
                  Proveedores
                </Link>
              </li>

              <li>
                <Link to={"/create-inventory"} className="hover:text-primary transition">
                  Inventario
                </Link>
              </li>

              <li>
                <Link to={"/add-menu"} className="hover:text-primary transition">
                  Menu
                </Link>
              </li>
              <li>
                <Link to={"/create-order"} className="hover:text-primary transition">
                  Crear Orden
                </Link>
              </li>

            </ul>

            {/*SearchField + IconButton*/}
            <div 
            className="flex"
            >
                <SearchField
                    value={search}
                    onChange={setSearch}
                    onSubmit={handleSearch}
                    onClear={handleClear}
                    placeholder="Buscar productos..."
                    size="md"
                    variant="outlined"
                    className="w-76"
                />

                {/** Dropdown */}
                <div 
                className="ml-2"
                >

                  <Dropdown>
                    <DropdownTrigger>
                    <IconButton ariaLabel="Menu de Usuario">
                      < Menu />
                    </IconButton>
                  </DropdownTrigger>

                  {/** Contenido */}
                  <DropdownContent>

                    <DropdownItem>
                      <Link to="/products" className="block w-full"
                      > Gestion de Productos
                       </Link>
                    </DropdownItem>

                    <DropdownItem>
                      <Link to="/dashboard/userCreate" className="block w-full"
                      > Crear Usuario
                      </Link>
                    </DropdownItem>

                    <DropdownItem>
                      <Link to="/dashboard/userList" className="block w-full"> Listar Usuarios
                      </Link>
                    </DropdownItem>

                    <DropdownItem>
                      <Link to="/login" className="block w-full"> Cerrar Sesión
                      </Link>
                    </DropdownItem>

                  </DropdownContent>
                  </Dropdown>
                  
                </div>

            </div>    
          </div>
        </div>
      </nav>
    );
}
	
