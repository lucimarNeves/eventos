import { Evento } from "@/core"
import Informacao from "../shared/Informacao"

export interface InformacoesEventoProps {
    evento : Evento
    classname?: string
}

export default function InformacoesEvento(props: InformacoesEventoProps){
    const { evento } = props;

    return (
        <div className={`flex flex-col gap-2 ${props.classname ?? ""}`}>
            <div className=" flex-1 flex items-center gap-4 border border-zinc-500 py-3 px-6 rounded-lg">
                <span className="text-2xl font-black">{evento.alias}: </span>
                <span className="text-2xl text-zinc-300">{evento.nome}</span>
              
            </div>
          
             <div className="flex gap-2"> 
               <Informacao label="Data:">
                {new Date(evento.data!).toLocaleDateString()}
                {" às "}
                {new Date(evento.data!).toLocaleDateString()}
               </Informacao>
               <Informacao label="Local:">{evento.local}</Informacao>
             </div>
             <div className="flex gap-2">
                <Informacao label="Descrição:">{evento.descricao}</Informacao>
             </div>
           
        </div>
    )
}