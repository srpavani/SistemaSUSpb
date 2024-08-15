import { format } from "url"

function generateURLContrapartidas(orgao: string, id: number, view: string, date: string | number, balancoGeral?: boolean, balancoPorNEP?: boolean, ieName?: string) {
  if(orgao === "ies") {
    if(balancoGeral) {
      return format({
        pathname: `/home-ies/contrapartidas/visualizacao-nep/geral`,
        query: { view: view, date: date }
      })
    }

    return format({
      pathname: `/home-ies/contrapartidas/visualizacao-nep/${id}`,
      query: { view: view, date: date }
    })
  }

  if(orgao === "resus") {
    // só vai entrar aqui se for visualizao-nep
    if(balancoPorNEP) {
      if(balancoGeral) {
        return format({
          pathname: `/home-resus/contrapartidas/visualizacao-nep/geral`,
          query: { view: view, date: date }
        })
      }

      return format({
        pathname: `/home-resus/contrapartidas/visualizacao-nep/${id}`,
        query: { view: view, date: date }
      })
    }

    // só vai chegar aqui se NÃO for visualizao-nep
    if(balancoGeral) {
      return format({
        pathname: `/home-resus/contrapartidas/visualizacao-ie/geral`,
        query: { view: view, date: date }
      }) 
    }

    return format({
      pathname: `/home-resus/contrapartidas/visualizacao-ie/${id}`,
      query: { view: view, date: date }
    }) 
  }

  if(orgao === "neps") {
    return format({
      pathname: `/home-neps/contrapartidas/nova-planilha/${ieName}`,
      query: { view: view, date: date }
    }) 
  }
}

export default generateURLContrapartidas