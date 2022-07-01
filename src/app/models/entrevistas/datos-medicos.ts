export class DatosMedicos {
  public datosMedicos = {
    atendio: '',
    antecedentes_clinicos: {
      alergias: {
        respuesta: '',
        tipos: '',
      },
      cancer:{
        respuesta: '',
        tipo: ''
      },
      diabetes:{
        respuesta:'',
        tipo:''
      },
      medicamento_regular: {
        respuesta: '',
        motivo: '',
      },
      enfermedades_infancia: {
        enfermedades: '',
      },
      intervenciones_quirurgicas: {
        respuesta: '',
        motivo: '',
      },
      hospitalizado: {
        respuesta: '',
        motivo: '',
      },
      vacuna_covid19: {
        respuesta: '',
      },
    },
    signos_vitales:{
      fc:'',
      fr:'',
      temperatura_corporal:''
    },
    presion_arterial: {
      sistolica: '',
      distolica: '',
    },
    insulina: '',
    glucosa: '',
    trigliceridos: '',
    colesterol: {
      total: '',
      no_hdl: '',
      hdl: '',
      ldl: '',
    },
    tsh: '',
    t3: '',
    t4: '',
  };
}
