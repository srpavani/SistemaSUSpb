'use client'

import { MenuItem } from "@/components/Menu/MenuItem";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export const MenuIes = () => {
  const pathname = usePathname()

  return (
    <aside className="bg-roxo flex flex-col py-6 text-sm pb-8 min-w-40 lg:w-72 xl:max-w-72 xl:text-base 2xl:max-w-72">
      <Image
        className="mx-auto"
        src="/images/Logo.png"
        alt="Logo Resus PB"
        width={200}
        height={160}
      />
      <h1 className="text-[#e6e1ee] text-2xl pt-12 pb-2 px-5 self-start font-bold mb-2">
        Menu
      </h1>
      <nav className="flex flex-col gap-3">
        <MenuItem 
          text="Início" 
          src="/images/Icone_Home.png" 
          alt="Icone Home"
          linkTo="/home-ies"
          isActive={pathname === '/home-ies'}
        />

        <MenuItem
          text="NEPS"
          src="/images/Icone-NEPS.png"
          alt="Icone IEs e NEPs"
          linkTo="/home-ies/neps"
          isActive={pathname.startsWith('/home-ies/neps')}
        />

        <MenuItem
          text="Documentação"
          src="/images/Icone_Documentacoes.png"
          alt="Icone Documentação"
          linkTo="/home-ies/documentacao"
          isActive={pathname.startsWith('/home-ies/documentacao')}
        />

        <MenuItem
          text="Contrapartidas"
          src="/images/Icone_Custos.png"
          alt="Icone Contrapartidas"
          linkTo="/home-ies/contrapartidas"
          isActive={pathname.startsWith('/home-ies/contrapartidas')}
        />

        <MenuItem
          text="Dashboards"
          src="/images/Icone_Dashboards.png"
          alt="Icone Dashboards"
          linkTo="/home-ies/dashboards"
          isActive={pathname.startsWith('/home-ies/dashboards')}
        />

        <MenuItem
          text="Solicitações"
          src="/images/Icone_Solicitacao.png"
          alt="Icone Solicitação"
          linkTo="/home-ies/solicitacoes"
          isActive={pathname.startsWith('/home-ies/solicitacoes')}
        />

        <MenuItem
          text="Seleção Estudantes"
          src="/images/Icone_Estágios.png"
          alt="Icone Seleção Estudantes"
          linkTo="/home-ies/selecao-estudantes"
          isActive={pathname.startsWith('/home-ies/selecao-estudantes')}
        />

        <MenuItem
          text="Dados"
          src="/images/Icone_Dados.png"
          alt="Icone Dados"
          linkTo="/home-ies/dados"
          isActive={pathname.startsWith('/home-ies/dados')}
        />
      </nav>
    </aside>
  );
};
