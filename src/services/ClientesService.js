import DatabaseAccess from '../database/DatabaseAccess'
import PropTypes from 'prop-types';

const table = "Clientes"
//AllColumns só não possui a coluna pk
const allColumns = ["CNPJ_CPF", "NOMERAZAO", "NOMEFAN", "INSCREST", "EMAIL", "TEL1", "TEL2", "TELFAX", "ENDERECO", "NUMERO", "COMPLEMENT", "BAIRRO",
"OBS", "CIDADE", "UF", "CEP", "DATAINAUGU", "CODVENDEDOR", "CODCLIE_EXT", "TIPOPESSOA", "ATIVO", "FLAGINTEGRADO", "REGIDENT", "LIMITECRED",
"BLOQUEIO", "CODPERFIL", "CHAVE", "TIPOENDERECO", "CEPENTREGA", "ENDENTREGA", "NUMENTREGA", "COMPENTREGA", "UFENTREGA", "CIDADEENTREGA",
"BAIRROENTREGA", "REFENTREGA", "CEPCOBRANCA", "ENDCOBRANCA", "NUMCOBRANCA", "COMPCOBRANCA", "UFCOBRANCA", "CIDADECOBRANCA", "BAIRROCOBRANCA",
"TEL1COBRANCA", "TEL2COBRANCA"]
const columnPk = "CODCLIE_INT"

function formatParamsInsert(params){
    let values = [params.cnpjCpf, params.nomeRazao, params.nomeFan, params.inscrEst, params.email, params.tel1, params.tel2, params.telFax,
        params.endereco, params.numero, params.complement, params.bairro, params.obs, params.cidade, params.uf, params.cep, params.dataInaugu,
        params.codVendedor, params.codCli_Ext, params.tipoPessoa, params.ativo, params.flagIntegrado, params.regIdent, params.limiteCred,
        params.bloqueio, params.codPerfil, params.chave, params.tipoEndereco, params.cepEntrega, params.endEntrega, params.numEntrega,
        params.compEntrega, params.ufEntrega, params.cidadeEntrega, params.bairroEntrega, params.refEntrega, params.cepCobranca, params.endCobranca,
        params.numCobranca, params.compCobranca, params.ufCobranca, params.cidadeCobranca, params.bairroCobranca, params.tel1Cobranca, params.tel2Cobranca]

    return values
}

function formatParamsUpdate(updates){
    let valuesUpdate = [{ column: "CNPJ_CPF", value: updates.cnpjCpf },
                        { column: "NOMERAZAO", value: updates.nomeRazao },
                        { column: "NOMEFAN", value: updates.nomeFan },
                        { column: "INSCREST", value: updates.inscrEst },
                        { column: "EMAIL", value: updates.email },
                        { column: "TEL1", value: updates.tel1 },
                        { column: "TEL2", value: updates.tel2 },
                        { column: "TELFAX", value: updates.telFax },
                        { column: "ENDERECO", value: updates.endereco },
                        { column: "NUMERO", value: updates.numero },
                        { column: "COMPLEMENT", value: updates.complement },
                        { column: "BAIRRO", value: updates.bairro },
                        { column: "OBS", value: updates.obs },
                        { column: "CIDADE", value: updates.cidade },
                        { column: "UF", value: updates.uf },
                        { column: "CEP", value: updates.cep },
                        { column: "DATAINAUGU", value: updates.dataInaugu },
                        { column: "CODVENDEDOR", value: updates.codVendedor },
                        { column: "CODCLIE_EXT", value: updates.codCli_Ext },
                        { column: "TIPOPESSOA", value: updates.tipoPessoa },
                        { column: "ATIVO", value: updates.ativo },
                        { column: "FLAGINTEGRADO", value: updates.flagIntegrado },
                        { column: "REGIDENT", value: updates.regIdent },
                        { column: "LIMITECRED", value: updates.limiteCred },
                        { column: "BLOQUEIO", value: updates.bloqueio },
                        { column: "CODPERFIL", value: updates.codPerfil },
                        { column: "CHAVE", value: updates.chave },
                        { column: "TIPOENDERECO", value: updates.tipoEndereco },
                        { column: "CEPENTREGA", value: updates.cepEntrega },
                        { column: "ENDENTREGA", value: updates.endEntrega },
                        { column: "NUMENTREGA", value: updates.numEntrega },
                        { column: "COMPENTREGA", value: updates.compEntrega },
                        { column: "UFENTREGA", value: updates.ufEntrega },
                        { column: "CIDADEENTREGA", value: updates.cidadeEntrega },
                        { column: "BAIRROENTREGA", value: updates.bairroEntrega },
                        { column: "REFENTREGA", value: updates.refEntrega },
                        { column: "CEPCOBRANCA", value: updates.cepCobranca },
                        { column: "ENDCOBRANCA", value: updates.endCobranca },
                        { column: "NUMCOBRANCA", value: updates.numCobranca },
                        { column: "COMPCOBRANCA", value: updates.compCobranca },
                        { column: "UFCOBRANCA", value: updates.ufCobranca },
                        { column: "CIDADECOBRANCA", value: updates.cidadeCobranca },
                        { column: "BAIRROCOBRANCA", value: updates.bairroCobranca },
                        { column: "TEL1COBRANCA", value: updates.tel1Cobranca },
                        { column: "TEL2COBRANCA", value: updates.tel2Cobranca }]

    return valuesUpdate
}

function formatFilters(updates){
    let newFilters = [{ column: "CNPJ_CPF", value: updates.cnpjCpf }]//DEFINIR FILTROS

    return valuesUpdate
}


InsertCliente.propTypes = {
    params: PropTypes.objectOf(PropTypes.shape({
        cnpjCpf: PropTypes.number.isRequired,
        nomeRazao: PropTypes.string.isRequired,
        nomeFan: PropTypes.string,
        inscrEst: PropTypes.string,
        email: PropTypes.string,
        tel1: PropTypes.string,
        tel2: PropTypes.string,
        telFax: PropTypes.string,
        endereco: PropTypes.string,
        numero: PropTypes.string,
        complement: PropTypes.string,
        bairro: PropTypes.string,
        obs: PropTypes.string,
        cidade: PropTypes.string,
        uf: PropTypes.string,
        cep: PropTypes.string,
        dataInaugu: PropTypes.string,
        codVendedor: PropTypes.number,
        codCli_Ext: PropTypes.number,
        tipoPessoa: PropTypes.string,
        ativo: PropTypes.string,
        flagIntegrado: PropTypes.string,
        regIdent: PropTypes.string,
        limiteCred: PropTypes.string,
        bloqueio: PropTypes.string,
        codPerfil: PropTypes.number,
        chave: PropTypes.string,
        tipoEndereco: PropTypes.string,
        cepEntrega: PropTypes.string,
        endEntrega: PropTypes.string,
        numEntrega: PropTypes.string,
        compEntrega: PropTypes.string,
        ufEntrega: PropTypes.string,
        cidadeEntrega: PropTypes.string,
        bairroEntrega: PropTypes.string,
        refEntrega: PropTypes.string,
        cepCobranca: PropTypes.string,
        endCobranca: PropTypes.string,
        numCobranca: PropTypes.string,
        compCobranca: PropTypes.string,
        ufCobranca: PropTypes.string,
        cidadeCobranca: PropTypes.string,
        bairroCobranca: PropTypes.string,
        tel1Cobranca: PropTypes.string,
        tel2Cobranca: PropTypes.string,
      }))
}

UpdateCliente.propTypes = {
    updates: PropTypes.objectOf(PropTypes.shape({
        cnpjCpf: PropTypes.number.isRequired,
        nomeRazao: PropTypes.string.isRequired,
        nomeFan: PropTypes.string,
        inscrEst: PropTypes.string,
        email: PropTypes.string,
        tel1: PropTypes.string,
        tel2: PropTypes.string,
        telFax: PropTypes.string,
        endereco: PropTypes.string,
        numero: PropTypes.string,
        complement: PropTypes.string,
        bairro: PropTypes.string,
        obs: PropTypes.string,
        cidade: PropTypes.string,
        uf: PropTypes.string,
        cep: PropTypes.string,
        dataInaugu: PropTypes.string,
        codVendedor: PropTypes.number,
        codCli_Ext: PropTypes.number,
        tipoPessoa: PropTypes.string,
        ativo: PropTypes.string,
        flagIntegrado: PropTypes.string,
        regIdent: PropTypes.string,
        limiteCred: PropTypes.string,
        bloqueio: PropTypes.string,
        codPerfil: PropTypes.number,
        chave: PropTypes.string,
        tipoEndereco: PropTypes.string,
        cepEntrega: PropTypes.string,
        endEntrega: PropTypes.string,
        numEntrega: PropTypes.string,
        compEntrega: PropTypes.string,
        ufEntrega: PropTypes.string,
        cidadeEntrega: PropTypes.string,
        bairroEntrega: PropTypes.string,
        refEntrega: PropTypes.string,
        cepCobranca: PropTypes.string,
        endCobranca: PropTypes.string,
        numCobranca: PropTypes.string,
        compCobranca: PropTypes.string,
        ufCobranca: PropTypes.string,
        cidadeCobranca: PropTypes.string,
        bairroCobranca: PropTypes.string,
        tel1Cobranca: PropTypes.string,
        tel2Cobranca: PropTypes.string,
      })),
      param: PropTypes.number.isRequired
}

DeleteCliente.propTypes = {
      param: PropTypes.number.isRequired
}

FindCliente.propTypes = {
    filters: PropTypes.number.isRequired
}


export function InsertCliente(params) {
    let values = formatParamsInsert(params)
    DatabaseAccess.Insert(table, allColumns, values, (resp) => console.log(resp))
}

export function DeleteCliente(param) {
    DatabaseAccess.Delete(table, columnPk, param, (resp) => console.log(resp))
}

export function UpdateCliente(updates, param) {
    let valuesUpdate = formatParamsUpdate(updates)
    DatabaseAccess.Update(table, valuesUpdate, columnPk, param, (resp) => console.log(resp))
}

export function FindCliente(filters) {
    let newFilters = formatFilters(filters)
    DatabaseAccess.FindWithFilters(table, newFilters, (resp) => console.log(resp))
}

export function FindAllClientes() {
    DatabaseAccess.FindAll(table, (resp) => console.log(resp))
}