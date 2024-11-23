import { Convidado } from "core";

export interface ConvidadoItemProps {
    convidado: Convidado
}

export default function ConvidadoItem(props: ConvidadoItemProps){
      return(
        <li className="flex justify-between bg-black/40 rounded-md px-6 p-3 border border-zinc-800">
            <div className="flex flex-col">
                <span className="text-xl font-bold">{props.convidado.nome}</span>
                <span className="text-sm text-zinc-400">{props.convidado.email}</span>
            </div>
            <div className="flex flex-col items-end">
                <span className=" text-sm text-zinc-400">Quantidade de acompanhantes</span>
                <span className="text-xl font-bold">{props.convidado.qtdeAcompanhantes}</span>
            </div>
        </li>
      )
}