import json


def data_formated(lista_json):

    novo_lista_json = []

    for json_dict in lista_json:
        email = json_dict["email"]["S"]
        age = json_dict["age"]["N"]
        userName = json_dict["userName"]["S"]
        id = json_dict["id"]["S"]
        novo_json_dict = {
            "id": id,
            "userName": userName,
            "email": email,
            "age": age
        }
        novo_lista_json.append(novo_json_dict)

    return novo_lista_json
