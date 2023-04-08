import err.custom_err as err

def validate_data(data):
    
    # if 'id' in data and 'userName' in data and 'age' in data and 'email' in data:
    if data.get('id', '') and data.get('userName', '') and data.get('age', '') and data.get('email', ''):
        if not validate_cpf(data['id']):
            raise err.BadRequestErr(f'CPF {data["id"]} invalid!')
        return True
        
    raise err.RequiredErr("Attributes required!")
    
def validate_cpf(cpf):
    cpf = cpf.replace('.', '').replace('-', '')

    if len(cpf) != 11 or cpf == cpf[0] * 11:
        return False

    # Primeiro dígito verificador
    soma = 0
    for i in range(9):
        soma += int(cpf[i]) * (10 - i)
    resto = soma % 11
    if resto < 2:
        digito1 = 0
    else:
        digito1 = 11 - resto

    # Segundo dígito verificador
    soma = 0
    for i in range(10):
        soma += int(cpf[i]) * (11 - i)
    resto = soma % 11
    if resto < 2:
        digito2 = 0
    else:
        digito2 = 11 - resto

    return cpf[-2:] == f'{digito1}{digito2}'


    