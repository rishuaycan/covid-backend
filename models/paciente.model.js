const {Schema, model} = require('mongoose');

const PacienteSchema = Schema({
    abrev_tipo_doc: {
        type:String
    },            
    num_doc: {
        type:String
    },
    paciente: {
          type:String
    },                   
    desc_genero: {
          type:String
    },                  
    desc_etn: {
          type:String
    },                     
    fecha_nacimiento: {
          type:String
    },             
    id_ubigeo_res: {
          type:String
    },                
    departamento_residencia: {
          type:String
    },      
    provincia_residencia: {
          type:String
    },         
    distrito_residencia: {
          type:String
    },          
    actividad: {
          type:String
    },                   
    anioedad_atencion: {
          type:String
    },            
    mesedad_atencion: {
          type:String
    },             
    diaedad_atencion: {
          type:String
    },             
    fecha_vacunacion: {
          type:String
    },             
    id_vac_pac: {
          type:String
    },                   
    codigo_vacuna: {
          type:String
    },                
    vacuna: {
          type:String
    },                       
    dosis_aplicada: {
          type:String
    },               
    gruporiesgo: {
          type:String
    },                  
    vacunador: {
          type:String
    },                   
    DISA: {
          type:String
    },                         
    RED: {
          type:String
    },                          
    MICRORED: {
          type:String
    },                    
    cod_unico: {
          type:String
    },                    
    establecimiento: {
          type:String
    },              
    departamento_establecimiento: {
          type:String
    }, 
    provincia_establecimiento: {
          type:String
    },    
    distrito_establecimiento: {
          type:String
    },     
    fecha_registro: {
          type:String
    },               
    registrador: {
          type:String
    },                  
    id_estrategiavac: {
          type:String
    }             
    ,id_tipoactividad: {
          type:String
    },             
    Lote_Vacuna: {
          type:String
    },
    Fabricante: {
          type:String
    },                 
    Fabricante_Abrev: {
          type:String
    }         
})
module.exports = model('Paciente',PacienteSchema)