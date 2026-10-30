// Textos editáveis. As chaves dos nós correspondem aos IDs de FLOW em index.html.
// A lógica clínica (IDs, valores e destinos) permanece independente do idioma.
window.SITE_TRANSLATIONS = {
    'pt-BR': {
        ui: {
            pageTitle: 'Algoritmo — Fluxo Integrado',
            flowPageTitle: 'Algoritmo — Fluxograma e Quadros',
            heading: 'Algoritmo — Decisão Clínica para Retirada de Cateter',
            about: 'Sobre',
            subtitle: 'Algoritmo clínico para retirada de cateter venoso central de longa permanência em pacientes pós-transplante alogênico de células-tronco hematopoiéticas.',
            developed: 'Desenvolvido no âmbito do Programa de Pós-Graduação em Clínica Médica (PPGCM/UFRJ).',
            basedOn: 'Versão baseada no',
            flowLink: 'fluxograma',
            reset: 'Reiniciar', back: '← Anterior', next: 'Próximo →',
            result: 'Resultado', pending: 'Responda às perguntas para gerar a recomendação.',
            literature: 'Sugestões de Literatura', fullLiterature: 'Literatura completa', recommendation: 'Recomendação',
            algorithm: 'Algoritmo', analysis: 'Análise', start: 'Iniciar',
            none: 'Nenhuma das anteriores', basedOnAnswers: 'Este resultado é baseado nas respostas fornecidas.',
            finalBasedOnAnswers: 'A recomendação final foi gerada com base nas respostas fornecidas.',
            invalidNode: 'Nó inválido. Reinicie.', chooseOption: 'Selecione uma opção.', invalidOption: 'Opção inválida.',
            flowHeading: 'Fluxograma e Quadros do Algoritmo', returnLink: '← Voltar ao algoritmo interativo',
            flowSection: 'Fluxograma', flowAlt: 'Fluxograma do algoritmo de decisão clínica para retirada de cateter',
            imageHint: 'Clique na imagem para abri-la em tamanho original.', criteriaTables: 'Quadros dos critérios',
            number: 'Nº', criterion: 'Critério', conditions: 'Condições'
        }
    },
    'en-US': {
        ui: {
            pageTitle: 'Algorithm — Integrated Flow',
            flowPageTitle: 'Algorithm — Flowchart and Criteria Tables',
            heading: 'Algorithm — Clinical Decision-Making for Catheter Removal',
            about: 'About',
            subtitle: 'Clinical algorithm for guiding the removal of long-term central venous catheters in recipients of allogeneic hematopoietic stem cell transplantation.',
            developed: 'Developed as part of the Graduate Program in Clinical Medicine (PPGCM/UFRJ).',
            basedOn: 'Version based on the',
            flowLink: 'flowchart',
            reset: 'Restart', back: '← Previous', next: 'Next →',
            result: 'Result', pending: 'Answer the questions to obtain a recommendation.',
            literature: 'Suggested Literature', fullLiterature: 'Full Literature', recommendation: 'Recommendation',
            algorithm: 'Algorithm', analysis: 'Analysis', start: 'Start',
            none: 'None of the above', basedOnAnswers: 'This result is based on the answers provided.',
            finalBasedOnAnswers: 'The final recommendation was generated based on the answers provided.',
            invalidNode: 'Invalid node. Restart.', chooseOption: 'Select an option.', invalidOption: 'Invalid option.',
            flowHeading: 'Algorithm Flowchart and Criteria Tables', returnLink: '← Return to the interactive algorithm',
            flowSection: 'Flowchart', flowAlt: 'Flowchart of the clinical decision-making algorithm for catheter removal',
            imageHint: 'Click the image to open it at its original size.', criteriaTables: 'Criteria Tables',
            number: 'No.', criterion: 'Criterion', conditions: 'Conditions'
        },
        help: {
            flogisticos: { title: '', items: [
                'Signs of inflammation, after ruling out a foreign-body reaction or contact dermatitis.',
                'Clinical signs of infection or persistent fever potentially associated with the catheter.',
                'Chills or rigors following catheter manipulation.'
            ] },
            '1*': { title: 'The patient/caregiver:', items: [
                'Attends scheduled catheter maintenance and dressing changes every 7 days.',
                'Keeps the dressing and catheter protected from contamination.',
                'Keeps the dressing and catheter dry.',
                'Avoids manipulating the catheter or dressing independently.',
                'Returns for scheduled appointments with the dressing well-preserved.'
            ] },
            '2*': { title: 'Patients at high risk of post-transplant complications', items: [
                'Haploidentical.',
                'HSCT with active disease.',
                'Disease at high risk of relapse.',
                'High comorbidity index (HCT-CI).',
                'Frail.',
                'Prolonged hospitalization during HSCT.',
                'ICU admission during HSCT.',
                'Hepatic sinusoidal obstruction syndrome (SOS/VOD) during HSCT.',
                'Documented infection during HSCT.',
                'CMV reactivation during the transplant hospitalization.',
                'Acute GVHD during the transplant hospitalization.',
                'Required emergency care after discharge.',
                'Proposed donor lymphocyte infusion (DLI).'
            ] },
            '3*': { title: 'Acute conditions', items: [
                'Moderate bleeding.', 'Hemorrhagic cystitis.', 'Hypovolemia.',
                'Altered level of consciousness.', 'Abnormal vital sign.', 'Organ dysfunction.',
                'Electrolyte disturbance.', 'Malnutrition.', 'Hypoalbuminemia.',
                'Marked increase in CMV viral load in two consecutive tests.',
                'Positive CMV viral load within the past 30 days.',
                'Ongoing infection <strong>not</strong> related to the catheter.',
                'Sepsis within the past 30 days.', 'Neutropenia.', 'Thrombocytopenia.',
                'Anemia.', 'Adverse effect of an oral medication regimen.'
            ] },
            '4*': { title: 'Other conditions', items: [
                'Post-transplant lymphoproliferative disorder (PTLD).',
                'Graft failure.', 'Second malignant tumor.'
            ] }
        },
        nodes: {
            inicio: { title: 'For use during post-transplant outpatient follow-up visits.' },
            q_flogisticos: { title: 'Is catheter-related infection suspected?' },
            q_acesso_dificil_infeccao: { title: 'Difficult peripheral venous access or difficulty establishing new central venous access?' },
            q_tratado_14: { title: 'Has the catheter been monitored or treated for <strong>14 days or longer</strong>?' },
            q_intervalo_7: { title: 'Is the interval between outpatient visits <strong>longer</strong> than 7 days?' },
            q_adesao: { title: 'Do the patient and caregiver adhere to good catheter maintenance practices?' },
            q_comp_mecanica: { title: 'Is the catheter experiencing mechanical complications but still functioning?' },
            q_alto_risco: { title: 'Is the patient at high risk of post-transplant complications?', desc: 'Transplant-related and index hospitalization-related conditions.' },
            q_d100: { title: 'Has the patient reached day +100 post-transplantation?' },
            q_agudas: { title: 'Does the patient have any of the following conditions?', desc: 'Current clinical conditions in the outpatient setting.' },
            q_reorientar_cuidados: { title: 'Provide care instructions again once.', desc: 'Select one of the options.', options: { prox_vez: 'Next time', prim_vez: 'First time.' } },
            q_agudas_avaliar: { title: 'Assess', desc: 'Select one of the options.', options: {
                vig_iv: 'Requires clinical monitoring or intravenous therapy',
                tto_vo: 'Clinically stable and oral therapy only'
            } },
            q_dech: { title: 'Does the patient have GVHD?' },
            q_dech_tipo: { options: { aguda: 'Acute GVHD', cronica: 'Chronic GVHD' } },
            q_dech_aguda_grau: { title: 'Grade of acute GVHD', options: { III_IV: 'Grade II, III, or IV', I: 'Grade I' } },
            q_estavel_14: { title: 'Stable for <strong>at least</strong> 14 days?' },
            q_dech_cronica_grau: { title: 'Severity of chronic GVHD', options: { leve: 'Mild', mod_grave: 'Moderate or severe' } },
            q_outras_condicoes: { title: 'Does the patient have any other condition?' },
            q_acesso_dificil: { title: 'Difficult peripheral venous access or difficulty establishing new central venous access?' },
            r_reorientar_uma_vez: { title: 'Are catheter care instructions being reinforced for the first time?', banner: { label: 'Provide care instructions again once.' } },
            r_aguardar_intervalo: { label: 'Reassess at the next outpatient visit / Wait until the interval between outpatient visits exceeds 7 days.' },
            r_aguardar_d100: { label: 'Reassess at the next outpatient visit / Preferably maintain the catheter until day +100 post-transplantation.' },
            r_vigilancia_ou_tto_iv: { label: 'Reassess at the next outpatient visit / Wait until acute GVHD improves to grade I' },
            r_aguardar_melhora_clinica: { label: 'Reassess at the next outpatient visit / Wait until clinical or laboratory parameters improve' },
            r_reavaliar_melhora: { label: 'Reassess at the next appointment / Wait for improvement in the condition' },
            r_aguardar_trat_infeccioso: { label: 'Reassess at the next appointment / Wait until treatment for infection is completed' },
            r_reavaliar_14_dias: { label: 'Reassess at the next outpatient visit / Wait until GVHD has remained stable for at least 14 days' },
            r_reavaliar_dechc_leve: { label: 'Reassess / Wait for mild chronic GVHD' },
            r_reavaliar_para_dechc_leve: { label: 'Reassess at the next outpatient visit / Wait until chronic GVHD improves to a mild severity grade' },
            r_manter: { label: 'Keep the catheter for the proposed treatment' },
            r_retirar: { label: 'Remove the catheter' },
            r_retirar_pos_reorientacao: { label: 'Remove the catheter', details: 'Did not adhere to good practices.' }
        },
        commonOptions: { sim: 'Yes', nao: 'No' },
        flowCriteria: [
            { title: 'Suspected catheter-related infection', items: [
                'Signs of inflammation, after ruling out a foreign-body reaction or contact dermatitis',
                'Clinical signs of infection or persistent fever potentially associated with the catheter',
                'Chills or rigors following catheter manipulation'
            ] },
            { title: 'Adherence to good catheter maintenance practices', items: [
                'Attends scheduled catheter maintenance and dressing changes every 7 days',
                'Keeps the dressing and catheter protected from contamination',
                'Keeps the dressing and catheter dry',
                'Avoids manipulating the catheter or dressing independently',
                'Returns for scheduled appointments with the dressing well-preserved'
            ] },
            { title: 'Patients at high risk of post-transplant complications', subtitle: '(transplant-related and index hospitalization-related conditions)', items: [
                'Haploidentical', 'HSCT with active disease', 'Disease at high risk of relapse',
                'High comorbidity index (HCT-CI)', 'Frail', 'Prolonged hospitalization during HSCT',
                'ICU admission during HSCT', 'Hepatic sinusoidal obstruction syndrome (SOS/VOD) during HSCT',
                'Documented infection during HSCT', 'CMV reactivation during the transplant hospitalization',
                'Acute GVHD during the transplant hospitalization', 'Required emergency care after discharge',
                'Proposed donor lymphocyte infusion (DLI)'
            ] },
            { title: 'Acute conditions', subtitle: '(current clinical conditions in the outpatient setting)', items: [
                'Moderate bleeding', 'Hemorrhagic cystitis', 'Hypovolemia', 'Altered level of consciousness',
                'Abnormal vital sign', 'Organ dysfunction', 'Electrolyte disturbance', 'Malnutrition',
                'Hypoalbuminemia', 'Marked increase in CMV viral load in two consecutive tests',
                'Positive CMV viral load within the past 30 days',
                'Ongoing infection <strong>not</strong> related to the catheter',
                'Sepsis within the past 30 days', 'Neutropenia', 'Thrombocytopenia', 'Anemia',
                'Adverse effect of an oral medication regimen'
            ] },
            { title: 'Other conditions', items: [
                'Post-transplant lymphoproliferative disorder (PTLD)', 'Graft failure', 'Second malignant tumor'
            ] }
        ]
    }
};

window.SITE_LANGUAGE = {
    get() {
        try { return localStorage.getItem('site-language') === 'en-US' ? 'en-US' : 'pt-BR'; }
        catch (_) { return 'pt-BR'; }
    },
    set(language) {
        if (language !== 'pt-BR' && language !== 'en-US') return;
        try { localStorage.setItem('site-language', language); } catch (_) { /* Storage may be unavailable. */ }
    }
};
