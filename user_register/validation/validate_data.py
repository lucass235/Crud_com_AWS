import err.custom_err as err


def validate_data(data):

    if 'id' in data and 'userName' in data and 'age' in data and 'email' in data:
        return True

    raise err.RequiredErr("Attributes required!")
