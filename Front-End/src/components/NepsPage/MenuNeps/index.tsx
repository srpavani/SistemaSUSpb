"use client";

import { MenuItem } from "@/components/Menu/MenuItem";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const MenuNeps = () => {
  const pathname = usePathname();

  return (
    <aside className="bg-roxo flex flex-col py-6 text-sm min-w-40 lg:w-72 xl:max-w-60 xl:text-base 2xl:max-w-72">
      <Image
        className="mx-auto"
        src="/images/Logo.png"
        alt="Logo Resus PB"
        width={200}
        height={160}
      />
      <h1 className="text-[#e6e1ee] text-2xl pt-12 pb-2 px-5 self-start font-bold">
        Menu
      </h1>
      <nav className="flex flex-col gap-2">
        <MenuItem
          text="Início"
          src="/images/Icone_Home.png"
          alt="Icone Home"
          linkTo="/home-neps"
          isActive={pathname === "/home-neps"}
        />

        <MenuItem
          text="IEs"
          src="/images/Icone_IEs_NEPS.png"
          alt="Icone IEs e NEPs"
          linkTo="/home-neps/ies"
          isActive={pathname.startsWith("/home-neps/ies")}
        />

        <MenuItem
          text="Documentação"
          src="/images/Icone_Documentacoes.png"
          alt="Icone Documentação"
          linkTo="/home-neps/documentacao"
          isActive={pathname.startsWith("/home-neps/documentacao")}
        />

        <MenuItem
          text="Contrapartidas"
          src="/images/Icone_Custos.png"
          alt="Icone Contrapartidas"
          linkTo="/home-neps/contrapartidas"
          isActive={pathname.startsWith("/home-neps/contrapartidas")}
        />

        <MenuItem
          text="Dashboards"
          src="/images/Icone_Dashboards.png"
          alt="Icone Dashboards"
          linkTo="/home-neps/dashboards"
          isActive={pathname.startsWith("/home-neps/dashboards")}
        />

        <MenuItem
          text="Solicitações"
          src="/images/Icone_Solicitacao.png"
          alt="Icone Solicitação"
          linkTo="/home-neps/solicitacoes"
          isActive={pathname.startsWith("/home-neps/solicitacoes")}
        />

        <MenuItem
          text="Dados"
          src="/images/Icone_Dados.png"
          alt="Icone Dados"
          linkTo="/home-neps/dados"
          isActive={pathname.startsWith("/home-neps/dados")}
        />
      </nav>
    </aside>
  );
};
