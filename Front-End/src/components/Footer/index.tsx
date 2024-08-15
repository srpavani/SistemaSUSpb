import Image from 'next/image';

export const Footer = () => {

    return (
        <footer className="w-full">
            <section className="flex">
                <div className="bg-amarelo h-3.5 grow"></div>
                <div className="bg-vermelho h-3.5 grow"></div>
                <div className="bg-azul h-3.5 grow"></div>
                <div className="bg-verde h-3.5 grow"></div>
                <div className="bg-preto h-3.5 grow"></div>
            </section>

            <section className="flex flex-col justify-around items-center p-7 gap-y-8 md:flex-row bg-white">
                <div className="flex flex-col items-center gap-y-4">
                    <h1 className="max-w-40 text-center font-bold">Siga nas redes Sociais:</h1>
                    <div className="flex justify-center gap-2">
                        <a href="https://twitter.com/espparaiba" target="_blank">
                            <Image src="/images/Twitter.png" alt="Twitter" width={35} height={35} />
                        </a>
                        <a href="https://www.youtube.com/EscolaDeSaudePublicadaParaiba" target="_blank">
                            <Image src="/images/Youtube.png" alt="Youtube" width={35} height={35} />
                        </a>
                        <a href="https://www.facebook.com/esppb" target="_blank">
                            <Image src="/images/Facebook.png" alt="Facebook" width={35} height={35} />
                        </a>
                        <a href="https://www.instagram.com/esp.pb" target="_blank">
                            <Image src="/images/Instagram.png" alt="Instagram" width={35} height={35} />
                        </a>
                    </div>
                </div>
                <div className="max-w-96 text-center">
                    Av. D. Pedro II, nº 1826 (anexo do Complexo Psiquiátrico Juliano Moreira),
                    Bairro: Torre João Pessoa – PB / CEP: 58040-440.
                </div>
                <div className="flex flex-col gap-y-3">
                    <a href="https://paraiba.pb.gov.br/" target="_blank">
                        <Image 
                            src="/images/Governo.png"
                            alt="Gov PB" 
                            width={232}
                            height={70}
                        />
                    </a>
                    <a href="https://codata.pb.gov.br/" target="_blank">
                        <Image 
                            src="/images/Codata.png" 
                            alt="Codata"
                            width={232}
                            height={38}
                        />
                    </a>
                </div>
            </section>
        </footer>
    );
};
