'use client'

import { MenuItem } from "@/components/Menu/MenuItem";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const MenuResus = () => {
  const pathname = usePathname()

  return (
    <aside className="bg-primaryColor flex flex-col py-6 pb-8 text-sm min-w-40 lg:w-72 xl:max-w-60 xl:text-base 2xl:max-w-72">
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
          linkTo="/home-resus"
          isActive={pathname === '/home-resus'}
        />

        <MenuItem
          text="IEs"
          src="/images/Icone_IEs_NEPS.png"
          alt="Icone IEs"
          linkTo="/home-resus/ies"
          isActive={pathname.startsWith('/home-resus/ies')}
        />

        <MenuItem
          text="NEPS"
          src="/images/Icone-NEPS.png"
          alt="Icone NEPs"
          linkTo="/home-resus/neps"
          isActive={pathname.startsWith('/home-resus/neps')}
        />

        <MenuItem
          text="Cadastro Dados"
          src="/images/icone-cadastroDados.png"
          alt="Icone Cadastro de Dados"
          linkTo="/home-resus/cadastro-dados"
          isActive={pathname.startsWith('/home-resus/cadastro-dados')}
        />

        <MenuItem
          text="Documentação"
          src="/images/Icone_Documentacoes.png"
          alt="Icone Documentação"
          linkTo="/home-resus/documentacao"
          isActive={pathname.startsWith('/home-resus/documentacao')}
        />

        <MenuItem
          text="Contrapartidas"
          src="/images/Icone_Custos.png"
          alt="Icone Contrapartidas"
          linkTo="/home-resus/contrapartidas"
          isActive={pathname.startsWith('/home-resus/contrapartidas')}
        />

        <MenuItem
          text="Plano de Trabalho"
          src="/images/Icone_Itens.png"
          alt="Icone Dashboards"
          linkTo="/home-resus/plano-trabalho"
          isActive={pathname.startsWith('/home-resus/plano-trabalho')}
        />

        <MenuItem
          text="Dashboards"
          src="/images/Icone_Dashboards.png"
          alt="Icone Dashboards"
          linkTo="/home-resus/dashboards"
          isActive={pathname.startsWith('/home-resus/dashboards')}
        />

        <MenuItem
          text="Solicitações"
          src="/images/Icone_Solicitacao.png"
          alt="Icone Solicitação"
          linkTo="/home-resus/solicitacoes"
          isActive={pathname.startsWith('/home-resus/solicitacoes')}
        />

        <MenuItem
          text="Dados"
          src="/images/Icone_Dados.png"
          alt="Icone Dados"
          linkTo="/home-resus/dados"
          isActive={pathname.startsWith('/home-resus/dados')}
        />
      </nav>
    </aside>
  );
};
