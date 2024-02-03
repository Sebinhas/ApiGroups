'use client'
const BtnDireccion = ({page,totalList,perPage,pagination}) => {
    
   


    return ( 
        <>
        <div className="flex flex-row justify-between w-[400px] h-[60px] ">
            <button
                disabled={page===1}
                onClick={()=>pagination(page-1)}
                className="w-[100px] h-full rounded-full bg-slate-300 text-slate-900"
            >Anterior</button>
            <button
                disabled ={page===Math.ceil(totalList/perPage)}
                onClick={()=>pagination(page+1)}
                className="w-[100px] h-full rounded-full bg-slate-300 text-slate-900"
            >Siguiente</button>
        </div>
        
     </>
    )
}
 
export default BtnDireccion;


/*


*/